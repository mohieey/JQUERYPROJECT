$(document).ready(function() {
    var timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var visitedUser = JSON.parse(localStorage.getItem('visiteduser'));
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
    var toGetFormVisited = JSON.parse(localStorage.getItem('togetfromvisited')) || 1;

    $('#usercard').append('<h4 >' + visitedUser.username + '</h4>');
    $('#useravatar').attr('src', visitedUser.avatar);

    if (visitedUser.id == currentUser.id) {
        $('#follow').css('display', 'none');
    }
    if (currentUser.following.indexOf(visitedUser.id) != -1) {
        $('#follow').css("background-color", "red");
        $('#follow').text("unfollow");
    }

    function getProfileTweets() {
        for (var i = 0; i < visitedUser.tweets.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (visitedUser.tweets[i] == timeLineTweets[index].id) {

                    $(".endoftweets").prepend('<div id="' + timeLineTweets[index].id + '" class="card my-3">' +

                        '<div class="card-body">' +
                        '<h4 class="card-title"><img id="useravatar" src="' + timeLineTweets[index].avatar + '" alt=""><i>' + timeLineTweets[index].authorname + '</i></h4><hr><hr>' +
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




    function getProfileRetweets() {
        for (var i = 0; i < visitedUser.retweets.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (visitedUser.retweets[i] == timeLineTweets[index].id) {

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




    function getProfileLikes() {
        for (var i = 0; i < visitedUser.likes.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (visitedUser.likes[i] == timeLineTweets[index].id) {

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






    $('#tweetstab').click(function() {
        $(this).addClass('active');
        $('#likestab').removeClass('active');
        $('#retweetstab').removeClass('active');
        toGetFormVisited = 1;
        localStorage.setItem('togetfromvisited', JSON.stringify(toGetFormVisited));
        location.assign('VisitedProfile_tweets.html');
    });
    $('#likestab').click(function() {
        $(this).addClass('active');
        $('#tweetstab').removeClass('active');
        $('#retweetstab').removeClass('active');
        toGetFormVisited = 2;
        localStorage.setItem('togetfromvisited', JSON.stringify(toGetFormVisited));
        location.assign('VisitedProfile_likes.html');
    });
    $('#retweetstab').click(function() {
        $(this).addClass('active');
        $('#tweetstab').removeClass('active');
        $('#likestab').removeClass('active');
        toGetFormVisited = 3;
        localStorage.setItem('togetfromvisited', JSON.stringify(toGetFormVisited));
        location.assign('VisitedProfile_retweets.html');
    });



    if (toGetFormVisited == 1) {
        getProfileTweets();
    }
    if (toGetFormVisited == 2) {
        getProfileLikes();
    }
    if (toGetFormVisited == 3) {


        getProfileRetweets();
    }










    $('#follow').click(function() {




        //unfollow
        if (currentUser.following.indexOf(visitedUser.id) != -1) {
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    $('#follow').css("background-color", '#007bff');
                    $('#follow').text("follow");
                    usersInfo[i].following.splice((currentUser.following.indexOf(visitedUser.id), 1));
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }

            currentUser.following.splice(currentUser.following.indexOf(visitedUser.id), 1);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
        } else {
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].following.push(visitedUser.id)
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }

            }
            $('#follow').css("background-color", "red");
            $('#follow').text("unfollow");
            currentUser.following.push(visitedUser.id);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
        }





    });





});