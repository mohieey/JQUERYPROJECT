$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var repliedToId = 0;
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));
    var toShowRepliesFor = JSON.parse(localStorage.getItem('toshowrepliesfor'));


    var indexintimelinetweets = 0;


    function getrepliedTo() {

        for (var index = 0; index < timeLineTweets.length; index++) {

            if (timeLineTweets[index].id == toShowRepliesFor) {
                indexintimelinetweets = index;

                $(".endoftweets").before('<div id="' + timeLineTweets[index].id + '" class="card my-3">' +

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
                    '</div>' + '<hr><hr><hr><hr>'
                );
            }


        }

    }
    getrepliedTo();




    function getreplies() {
        for (var i = 0; i < timeLineTweets[indexintimelinetweets].replies.length; i++) {
            $(".endoftweets").before('<div id="' + timeLineTweets[indexintimelinetweets].replies[i].id + '" class="card my-3">' +

                '<div class="card-body">' +
                '<h4 class="card-title"><i><img id="useravatar" src="' + timeLineTweets[indexintimelinetweets].replies[i].avatar + '" alt=""><a class="visit" href="#">' + timeLineTweets[indexintimelinetweets].replies[i].authorname + '</a> </i></h4><hr><hr>' +
                '<h4 class="card-title">' + timeLineTweets[indexintimelinetweets].replies[i].body + '</h4>' +

                '</div>' +
                '</div>'
            );



        }

    }
    getreplies();


    $('.replyto').click(function() {


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

        $(".endoftweets").before('<div id="' + reply.id + '" class="card my-3">' +

            '<div class="card-body">' +
            '<h4 class="card-title"><i><img id="useravatar" src="' + reply.avatar + '" alt=""><a class="visit" href="#">' + reply.authorname + '</a> </i></h4><hr><hr>' +
            '<h4 class="card-title">' + reply.body + '</h4>' +

            '</div>' +
            '</div>'
        );





    });








});