$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var repliedToId = 0;
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
    $('#usercard').append('<h4 >' + currentUser.username + '</h4>');
    $('#useravatar').attr('src', currentUser.avatar);





    function getTweets() {
        if (usersInfo.length == 1) {
            $(".endoftweets").prepend('<h1>There is no users except you, go create others and search for them and follow them</h1>');

        } else {
            if (currentUser.following.length == 0) {
                $(".endoftweets").prepend('<h1>It seems that you are not following anyone,go follow some uesrs<a href="search.html"><button id="Search" type="button" class="btn btn-primary" >Search</button></a></h1> ');
            }
        }
        if (currentUser.following.length != 0) {
            for (var index = 0; index < timeLineTweets.length; index++) {

                for (var i = 0; i < currentUser.following.length; i++) {
                    if (currentUser.following[i] == timeLineTweets[index].authorid || currentUser.id == timeLineTweets[index].authorid || currentUser.retweets.indexOf(timeLineTweets[index].id) != -1 ) {
                        $(".endoftweets").prepend('<div id="' + timeLineTweets[index].id + '" class="card my-3" >' +

                            '<div class="card-body" >' +
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

        } else {
            for (var index = 0; index < timeLineTweets.length; index++) {
                if (currentUser.id == timeLineTweets[index].authorid) {
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
    getTweets();



    // function displayLikedbtn() {
    //     for (var i = 0; i < currentUser.likes.length; i++) {
    //         $('#' + currentUser.likes[i]).find('.colorLike').attr('src', 'https://img.icons8.com/plasticine/100/000000/like.png')
    //     }
    // }
    // displayLikedbtn();

    // function displayReTweetedbtn() {
    //     for (var i = 0; i < currentUser.retweets.length; i++) {
    //         $('#' + currentUser.retweets[i]).find('.colorRetweet').attr('src', 'https://img.icons8.com/color/100/000000/retweet.png')
    //     }
    // }
    // displayReTweetedbtn();

    // function displayBookmarkedbtn() {
    //     for (var i = 0; i < currentUser.bookmarks.length; i++) {
    //         $('#' + currentUser.bookmarks[i]).find('.bookmark').attr('src', 'https://img.icons8.com/ios-filled/100/000000/remove-bookmark.png')
    //     }
    // }
    // displayBookmarkedbtn();


    // function displayDeletebtn() {

    //     for (var i = 0; i < currentUser.tweets.length; i++) {
    //         $('#' + currentUser.tweets[i]).find('.delbtn').css('display', 'inline');
    //     }
    // }
    // displayDeletebtn();


    // $('#composetweet').keyup(
    //     function() {

    //         if ($('#composetweet').val() != '') {
    //             $('#tweet').removeAttr("disabled")
    //         } else {
    //             $('#tweet').attr("disabled",
    //                 '')

    //         }

    //     }
    // );




    $('#tweetmain').click(function() {
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

        var newTweet = '<div id="' + tweet.id + '" class="card my-3">' +

            '<div class="card-body">' +
            '<h4 class="card-title"><i><img id="useravatar" src="' + tweet.avatar + '" alt=""><a class="visit" href="#">' + tweet.authorname + '</a> </i></h4><hr><hr>' +
            '<h4 class="card-title">' + $('#composetweet').val() + '</h4>' +
            '<p class="card-text">' +
            '<div class="row">' +
            ' <col-sm>' +
            '<img class="interactionbtns like colorLike" src="https://img.icons8.com/carbon-copy/100/000000/like--v2.png" />' +
            '</col-sm>' +
            ' <div class="col-sm"></div>' +
            ' <col-sm>' +
            '<img class="interactionbtns retweet colorRetweet" src="https://img.icons8.com/ios-filled/100/000000/retweet.png" />' +
            ' </col-sm>' +
            '<div class="col-sm">' +

            '</div>' +
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
            '</div>';
        $("#tweetbox").after(newTweet);
        for (var i = 0; i < currentUser.tweets.length; i++) {
            $('#' + currentUser.tweets[i]).find('.delbtn').css('display', 'inline');
        }







    });



    // $('#replyto').click(function() {

    //     const reply = {
    //         body: $('#composereply').val(),
    //         Likes: 0,
    //         Retweets: 0,
    //         mainTweetId: repliedToId,
    //         id: tweetsCounter + 1,
    //         author: currentUser.id


    //     };
    //     tweetsCounter++;
    //     localStorage.setItem('tweetscounter', JSON.stringify(tweetsCounter));
    //     for (var i = 0; i < timeLineTweets.length; i++) {
    //         if (timeLineTweets[i].id == repliedToId) {
    //             timeLineTweets[i].replies.push(reply);
    //         }
    //     }

    //     for (var i = 0; i < usersInfo.length; i++) {
    //         if (usersInfo[i].id == currentUser.id) {
    //             usersInfo[i].replies.push(reply.id)
    //             localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //         }

    //     }
    //     currentUser.replies.push(reply.id);
    //     localStorage.setItem('currentuser', JSON.stringify(currentUser));

    //     //=================================================================

    //     //=================================================================

    //     localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));





    // });



    // $('.visit').click(function() {
    //     var pressedUsername = $(this).text();
    //     for (var i = 0; i < usersInfo.length; i++) {
    //         if (usersInfo[i].username == pressedUsername) {
    //             var visitedUser = usersInfo[i];
    //             visitedUser.password = '';
    //             localStorage.setItem('visiteduser', JSON.stringify(visitedUser));
    //         }
    //     }

    //     location.assign('VisitedProfile_tweets.html')
    // });






    // $('.like').click(function() {
    //     var pressedID = $(this).parent().parent().parent().parent().attr('id');


    //     if (currentUser.likes.indexOf(pressedID) == -1) {
    //         $(this).attr('src', "https://img.icons8.com/plasticine/100/000000/like.png");
    //         currentUser.likes.push(pressedID);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].likes.push(pressedID);
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }
    //         for (var i = 0; i < timeLineTweets.length; i++) {
    //             if (timeLineTweets[i].id == pressedID) {
    //                 timeLineTweets[i].Likes++;
    //             }
    //         }

    //         localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     } else {
    //         $(this).attr('src', "https://img.icons8.com/carbon-copy/100/000000/like--v2.png");
    //         currentUser.likes.splice(currentUser.likes.indexOf(pressedID), 1);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].likes.splice((currentUser.likes.indexOf(pressedID), 1));
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }
    //         for (var i = 0; i < timeLineTweets.length; i++) {
    //             if (timeLineTweets[i].id == pressedID) {
    //                 timeLineTweets[i].Likes--;
    //             }
    //         }
    //         localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));

    //     }

    //     // if (timeLineTweets[pressedID].isliked == false) {
    //     //     $(this).attr('src', "https://img.icons8.com/plasticine/100/000000/like.png");

    //     //     timeLineTweets[pressedID].isliked = true;
    //     //     localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     //     likedTweets.push(pressedID);
    //     //     localStorage.setItem('likedtweets', JSON.stringify(likedTweets));
    //     // } else {


    //     //     timeLineTweets[pressedID].isliked = false;
    //     //     localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     //     for (var i = 0; i < likedTweets.length; i++) {
    //     //         if (likedTweets[i] == pressedID) {
    //     //             likedTweets.splice(i, 1);
    //     //         }


    //     //     }
    //     //     localStorage.setItem('likedtweets', JSON.stringify(likedTweets));

    //     // }
    // });


    // $('.retweet').click(function() {
    //     var pressedID = $(this).parent().parent().parent().parent().attr('id');



    //     if (currentUser.retweets.indexOf(pressedID) == -1) {
    //         $(this).attr('src', "https://img.icons8.com/color/100/000000/retweet.png");
    //         currentUser.retweets.push(pressedID);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].retweets.push(pressedID);
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }
    //         for (var i = 0; i < timeLineTweets.length; i++) {
    //             if (timeLineTweets[i].id == pressedID) {
    //                 timeLineTweets[i].Retweets++;
    //             }
    //         }
    //         alert('d')
    //         localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     } else {
    //         $(this).attr('src', "https://img.icons8.com/ios-filled/100/000000/retweet.png");
    //         currentUser.retweets.splice(currentUser.retweets.indexOf(pressedID), 1);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].retweets.splice((currentUser.retweets.indexOf(pressedID), 1));
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }
    //         for (var i = 0; i < timeLineTweets.length; i++) {
    //             if (timeLineTweets[i].id == pressedID) {
    //                 timeLineTweets[i].Retweets--;
    //             }
    //         }
    //         localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));

    //     }


    //     // if (timeLineTweets[pressedID].isRetweeted == false) {
    //     //     $(this).attr('src', "https://img.icons8.com/color/100/000000/retweet.png")

    //     //     timeLineTweets[pressedID].isRetweeted = true;
    //     //     localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     //     reTweets.push(pressedID);
    //     //     localStorage.setItem('retweets', JSON.stringify(reTweets));
    //     // } else {

    //     //     $(this).attr('src', "https://img.icons8.com/ios-filled/100/000000/retweet.png");
    //     //     timeLineTweets[pressedID].isRetweeted = false;
    //     //     localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //     //     for (var i = 0; i < reTweets.length; i++) {
    //     //         if (reTweets[i] == pressedID) {
    //     //             reTweets.splice(i, 1);
    //     //         }


    //     //     }
    //     //     localStorage.setItem('retweets', JSON.stringify(reTweets));

    //     // }

    // });


    // $('.reply').click(function() {
    //     var pressedID = $(this).parent().parent().parent().parent().attr('id');
    //     repliedToId = pressedID;
    // });


    // $('.delete').click(function() {
    //     var pressedID = $(this).parent().parent().parent().parent().attr('id');
    //     $('#' + pressedID).slideUp('slow');
    //     for (var i = 0; i < timeLineTweets.length; i++) {
    //         if (timeLineTweets[i].id == pressedID) {
    //             timeLineTweets.splice(i, 1);
    //             localStorage.setItem('timelinetweets', JSON.stringify(timeLineTweets));
    //         }
    //     }

    //     currentUser.tweets.splice(currentUser.tweets.indexOf(pressedID), 1);
    //     localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //     for (var i = 0; i < usersInfo.length; i++) {
    //         if (usersInfo[i].id == currentUser.id) {
    //             usersInfo[i].tweets.splice((usersInfo[i].tweets.indexOf(pressedID), 1));
    //             localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //         }
    //     }


    // });


    // $('.bookmark').click(function() {
    //     var pressedID = $(this).parent().parent().parent().parent().attr('id');


    //     if (currentUser.bookmarks.indexOf(pressedID) == -1) {
    //         $(this).attr('src', "https://img.icons8.com/ios-filled/100/000000/remove-bookmark.png");
    //         currentUser.bookmarks.push(pressedID);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].bookmarks.push(pressedID);
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }

    //     } else {
    //         $(this).attr('src', "https://img.icons8.com/ios/100/000000/add-bookmark.png");
    //         currentUser.bookmarks.splice(currentUser.bookmarks.indexOf(pressedID), 1);
    //         localStorage.setItem('currentuser', JSON.stringify(currentUser));
    //         for (var i = 0; i < usersInfo.length; i++) {
    //             if (usersInfo[i].id == currentUser.id) {
    //                 usersInfo[i].bookmarks.splice((currentUser.bookmarks.indexOf(pressedID), 1));
    //                 localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
    //             }
    //         }

    //     }
    // });














});
