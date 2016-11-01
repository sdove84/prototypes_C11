//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function () {
    $('button').click(function () {
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function (result) {
                console.log('AJAX Success function called, with the following result:', result);
                global_result = result;
                var movies = global_result.feed.entry;
                var third_img = movies[0]['im:image'][2].label;
                for (var i=0; i < movies.length; ++i) {
                    var movies_third_img = movies[i]['im:image'][2].label;
                    var title_name = movies[i].title.label;
                    $('#main').append($('<img>').attr('src', movies_third_img));
                    $('#main').append($('<h3>').text(title_name));
                }

            }
        });
        console.log('End of click function');
    });
});