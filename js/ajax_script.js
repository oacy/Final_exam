var initialLoad = true;


$(document).ready(function () {


    if (initialLoad) {
        search();
    };
    initialLoad = false;
    
    var $container = $(".grid");
    $container.imagesLoaded(function () {
        $container.masonry();
    });



    if($(window).width() <= 320){

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item',
        columnWidth: 300
    });
    } else {
        $('.grid').masonry({

            itemSelector:  '.grid-item',
            percentPosition: true,
              })
        
    };



    $("#field").bind("enterKey", function (e) {
        search();
    });

    $("#field").keyup(function (e) {
        if (e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });

    $("#submit").click(function () {
        search();
    });

    function search() {
        $(".grid-item").remove();
        var API_KEY = '4297880-6514231e2ee97773fdc174012';
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&per_page=7&q=" + encodeURIComponent($("#field").attr("value") + "");
        $.getJSON(URL, function (data) {
            if (parseInt(data.totalHits) > 0) {
                $.each(data.hits, function (i, hit) {
                    var a = document.createElement("a");
                    a.setAttribute("href", hit.pageURL);
                    var div = document.createElement("DIV");
                    if (i == 4 || i == 5) {
                        div.className = "grid-item grid-item--width2";
                    }
                    else {
                        div.className = "grid-item";
                    }
                    div.style.background = "url('" + hit.webformatURL + "') no-repeat center";
                    div.style.backgroundSize = "cover";
                    var span = document.createElement("span");
                    span.innerHTML = hit.tags;
                    div.appendChild(span);
                    a.appendChild(div);
                    document.getElementById("wrapper_main_holiday-grid").appendChild(a);
                    console.log(hit.pageURL);
                    $('.grid').masonry('reloadItems').masonry();
                });
            }
            else
                console.log('No hits');
        });

    };


});







