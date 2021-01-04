$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
    var repliedToId = 0;
    var toGet = JSON.parse(localStorage.getItem('toget')) || 1;

    $('#usercard').append('<h4 >' + currentUser.username + '</h4>');
    $('#useravatar').attr('src', currentUser.avatar);


    function getProfileTweets() {
        for (var i = 0; i < currentUser.tweets.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (currentUser.tweets[i] == timeLineTweets[index].id) {

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
        for (var i = 0; i < currentUser.retweets.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (currentUser.retweets[i] == timeLineTweets[index].id) {

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
        for (var i = 0; i < currentUser.likes.length; i++) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                if (currentUser.likes[i] == timeLineTweets[index].id) {

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
        toGet = 1;
        localStorage.setItem('toget', JSON.stringify(toGet));
        location.assign('profile_tweets.html');
    });
    $('#likestab').click(function() {
        $(this).addClass('active');
        $('#tweetstab').removeClass('active');
        $('#retweetstab').removeClass('active');
        toGet = 2;
        localStorage.setItem('toget', JSON.stringify(toGet));
        location.assign('profile_likes.html');
    });
    $('#retweetstab').click(function() {
        $(this).addClass('active');
        $('#tweetstab').removeClass('active');
        $('#likestab').removeClass('active');
        toGet = 3;
        localStorage.setItem('toget', JSON.stringify(toGet));
        location.assign('profile_retweets.html');
    });



    if (toGet == 1) {
        getProfileTweets();
    }
    if (toGet == 2) {
        getProfileLikes();
    }
    if (toGet == 3) {
        getProfileRetweets();
    }







    $('#replyto').click(function() {

        const reply = {
            body: $('#composereply').val(),
            Likes: 0,
            Retweets: 0,
            mainTweetId: repliedToId,
            id: tweetsCounter + 1,
            author: currentUser.id


        };
        tweetsCounter++;
        localStorage.setItem('tweetscounter', JSON.stringify(tweetsCounter));
        for (var i = 0; i < timeLineTweets.length; i++) {
            if (timeLineTweets[i].id == repliedToId) {
                timeLineTweets[i].replies.push(reply);
            }
        }

        for (var i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].id == currentUser.id) {
                usersInfo[i].replies.push(reply.id)
                localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
            }

        }
        currentUser.replies.push(reply.id);
        localStorage.setItem('currentuser', JSON.stringify(currentUser));

        //=================================================================

        //=================================================================

        localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));





    });

    $('.reply').click(function() {
        var pressedID = $(this).parent().parent().parent().parent().attr('id');
        repliedToId = pressedID;
    });






























});