$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var repliedToId = 0;
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));

    $('#tweet').click(function() {
        const tweet = {
            body: $('#composetweet').val(),
            Likes: 0,
            Retweets: 0,
            replies: [],
            id: tweetsCounter + 1,
            authorname: currentUser.username,
            authorid: currentUser.id,
            avatar: currentUser.avatar



        };
        timeLineTweets.push(tweet);
        tweetsCounter++;
        localStorage.setItem('tweetscounter', JSON.stringify(tweetsCounter));
        localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));

        for (var i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].id == currentUser.id) {
                usersInfo[i].tweets.push(tweet.id)
                localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
            }

        }

        currentUser.tweets.push(tweet.id);
        localStorage.setItem('currentuser', JSON.stringify(currentUser));
    });


    $('.like').click(function() {
        var pressedID = $(this).parent().parent().parent().parent().attr('id');


        if (currentUser.likes.indexOf(pressedID) == -1) {
            $(this).attr('src', "https://img.icons8.com/plasticine/100/000000/like.png");
            currentUser.likes.push(pressedID);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].likes.push(pressedID);
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }
            for (var i = 0; i < timeLineTweets.length; i++) {
                if (timeLineTweets[i].id == pressedID) {
                    timeLineTweets[i].Likes++;
                }
            }

            localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
        } else {
            $(this).attr('src', "https://img.icons8.com/carbon-copy/100/000000/like--v2.png");
            currentUser.likes.splice(currentUser.likes.indexOf(pressedID), 1);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].likes.splice((currentUser.likes.indexOf(pressedID), 1));
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }
            for (var i = 0; i < timeLineTweets.length; i++) {
                if (timeLineTweets[i].id == pressedID) {
                    timeLineTweets[i].Likes--;
                }
            }
            localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));

        }

    });



    $('.retweet').click(function() {
        var pressedID = $(this).parent().parent().parent().parent().attr('id');



        if (currentUser.retweets.indexOf(pressedID) == -1) {
            $(this).attr('src', "https://img.icons8.com/color/100/000000/retweet.png");
            currentUser.retweets.push(pressedID);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].retweets.push(pressedID);
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }
            for (var i = 0; i < timeLineTweets.length; i++) {
                if (timeLineTweets[i].id == pressedID) {
                    timeLineTweets[i].Retweets++;
                }
            }

            localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
        } else {
            $(this).attr('src', "https://img.icons8.com/ios-filled/100/000000/retweet.png");
            currentUser.retweets.splice(currentUser.retweets.indexOf(pressedID), 1);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].retweets.splice((currentUser.retweets.indexOf(pressedID), 1));
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }
            for (var i = 0; i < timeLineTweets.length; i++) {
                if (timeLineTweets[i].id == pressedID) {
                    timeLineTweets[i].Retweets--;
                }
            }
            localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));

        }

    });
    $('#replyto').click(function() {

        const reply = {
            body: $('#composereply').val(),
            Likes: 0,
            Retweets: 0,
            mainTweetId: repliedToId,
            id: tweetsCounter + 1,
            authorname: currentUser.username,
            authorid: currentUser.id,
            avatar: currentUser.avatar
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




    $('#showreplies').click(function() {
        localStorage.setItem('toshowrepliesfor', JSON.stringify(repliedToId));
        location.assign('replies.html')

    });


    $('.delete').click(function() {
        var pressedID = $(this).parent().parent().parent().parent().attr('id');
        $('#' + pressedID).slideUp('slow');
        for (var i = 0; i < timeLineTweets.length; i++) {
            if (timeLineTweets[i].id == pressedID) {
                timeLineTweets.splice(i, 1);
                localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
            }
        }

        currentUser.tweets.splice(currentUser.tweets.indexOf(pressedID), 1);
        localStorage.setItem('currentuser', JSON.stringify(currentUser));
        for (var i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].id == currentUser.id) {
                usersInfo[i].tweets.splice((usersInfo[i].tweets.indexOf(pressedID), 1));
                localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
            }
        }


    });


    $('.bookmark').click(function() {
        var pressedID = $(this).parent().parent().parent().parent().attr('id');


        if (currentUser.bookmarks.indexOf(pressedID) == -1) {
            $(this).attr('src', "https://img.icons8.com/ios-filled/100/000000/remove-bookmark.png");
            currentUser.bookmarks.push(pressedID);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].bookmarks.push(pressedID);
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }

        } else {
            $(this).attr('src', "https://img.icons8.com/ios/100/000000/add-bookmark.png");
            currentUser.bookmarks.splice(currentUser.bookmarks.indexOf(pressedID), 1);
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            for (var i = 0; i < usersInfo.length; i++) {
                if (usersInfo[i].id == currentUser.id) {
                    usersInfo[i].bookmarks.splice((currentUser.bookmarks.indexOf(pressedID), 1));
                    localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
                }
            }

        }
    });









    $('.visit').click(function() {
        var pressedUsername = $(this).text();
        for (var i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].username == pressedUsername) {
                var visitedUser = usersInfo[i];
                visitedUser.password = '';
                localStorage.setItem('visiteduser', JSON.stringify(visitedUser));
                var toGetFormVisited = 1;
                localStorage.setItem('togetfromvisited', JSON.stringify(toGetFormVisited));
            }
        }

        location.assign('VisitedProfile_tweets.html')
    });


    $('#profile').click(function() {


        var toGet = 1;
        localStorage.setItem('toget', JSON.stringify(toGet));


    });

    $('#logout').click(function() {
        localStorage.setItem('currentuser', undefined);



    });








});