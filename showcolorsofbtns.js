$(document).ready(function() {
    let timeLineTweets = JSON.parse(localStorage.getItem('timelinetweets')) || [];
    var repliedToId = 0;
    var tweetsCounter = JSON.parse(localStorage.getItem('tweetscounter')) || 0;
    var currentUser = JSON.parse(localStorage.getItem('currentuser'));
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo'));






    function displayLikedbtn() {
        for (var i = 0; i < currentUser.likes.length; i++) {
            $('#' + currentUser.likes[i]).find('.colorLike').attr('src', 'https://img.icons8.com/plasticine/100/000000/like.png')
        }
    }
    displayLikedbtn();

    function displayReTweetedbtn() {
        for (var i = 0; i < currentUser.retweets.length; i++) {
            $('#' + currentUser.retweets[i]).find('.colorRetweet').attr('src', 'https://img.icons8.com/color/100/000000/retweet.png')
        }
    }
    displayReTweetedbtn();

    function displayBookmarkedbtn() {
        for (var i = 0; i < currentUser.bookmarks.length; i++) {
            $('#' + currentUser.bookmarks[i]).find('.bookmark').attr('src', 'https://img.icons8.com/ios-filled/100/000000/remove-bookmark.png')
        }
    }
    displayBookmarkedbtn();


    function displayDeletebtn() {

        for (var i = 0; i < currentUser.tweets.length; i++) {
            $('#' + currentUser.tweets[i]).find('.delbtn').css('display', 'inline');
        }
    }
    displayDeletebtn();


    $('#composetweet,#searchbox').keyup(
        function() {

            if ($('#composetweet,#searchbox').val() != '') {
                $('#tweetmain,#tweet,#searchbtn').removeAttr("disabled")
            } else {
                $('#tweetmain,#tweet,#searchbtn').attr("disabled",
                    '')

            }



        }
    );










})