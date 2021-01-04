$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var repliedToId = 0;
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
    $('#usercard').append(currentUser.username);



    function getBookMarks() {
        for (var i = 0; i < currentUser.bookmarks.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (currentUser.bookmarks[i] == timeLineTweets[index].id) {

                    $(".endoftweets").prepend('<div id="' + timeLineTweets[index].id + '" class="card my-3">' +

                        '<div class="card-body">' +
                        '<h4 class="card-title"><i><img id="useravatar" src="' + timeLineTweets[index].avatar + '" alt=""><a class="visit" href="#">' + timeLineTweets[index].authorname + '</a> </i></h4><hr><hr>' +
                        '<h4 class="card-title">' + timeLineTweets[index].body + '</h4>' +
                        '<p class="card-text">' +
                        '<div class="row">' +
                        ' <col-sm>' +
                        '<img class="interactionbtns like colorLike" src="https://img.icons8.com/carbon-copy/100/000000/like--v2.png" />' +
                        '</col-sm>' +
                        ' <div class="col-sm"></div>' +
                        ' <col-sm>' +
                        '<p>' + timeLineTweets[index].Likes + '</p>' +
                        '</col-sm>' +
                        ' <div class="col-sm"></div>' +
                        ' <col-sm>' +
                        '<img class="interactionbtns retweet colorRetweet" src="https://img.icons8.com/ios-filled/100/000000/retweet.png" />' +
                        ' </col-sm>' +
                        '<div class="col-sm">' +
                        '</div>' +
                        ' <col-sm>' +
                        '<p>' + timeLineTweets[index].Retweets + '</p>' +
                        '</col-sm>' +
                        ' <div class="col-sm"></div>' +
                        '<col-sm>' +
                        '<img class="interactionbtns reply colorReply" data-toggle="modal" data-target="#reply" src="https://img.icons8.com/wired/64/000000/reply-arrow.png" />' +
                        '</col-sm>' +
                        '<div class="col-sm">' +

                        '</div>' +
                        '<col-sm>' +
                        '<img class="interactionbtns bookmark" src="https://img.icons8.com/ios/100/000000/add-bookmark.png" />' +
                        '</col-sm>' +
                        '<div class="col-sm">' +

                        '</div>' +
                        '<col-sm>' +
                        '<img style="display: none;" class="interactionbtns delete delbtn" src="https://img.icons8.com/flat_round/128/000000/delete-sign.png" />' +
                        '</col-sm>' +
                        '</div>' +
                        '</p>' +
                        '</div>' +
                        '</div>');


                }
            }
        }
    }
    getBookMarks();






});