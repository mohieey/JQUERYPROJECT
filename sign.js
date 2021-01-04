$(document).ready(function() {
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo')) || [];
    var usersCounter = JSON.parse(localStorage.getItem('userscounter')) || 0;
    var searchBox = JSON.parse(localStorage.getItem('searchbox')) || [];
    var currentUser = {
        id: 0,
        username: '',
        password: '',
        tweets: [],
        retweets: [],
        likes: [],
        bookmarks: [],
        replies: [],
        following: [],
        avatar: ''

    };

    $('#signup').click(function() {
        inputUsername = $('#username').val();
        inputPassword = $('#password').val();
        var user = {
            id: usersCounter + 1,
            username: $('#username').val(),
            password: $('#password').val(),
            tweets: [],
            retweets: [],
            likes: [],
            bookmarks: [],
            replies: [],
            following: [],
            avatar: $('#avatar').val()

        };
        var takenUsername = false;
        var passwordIsMoreThan4 = false;
        var foundi = 0

        for (var i = 0; i < usersInfo.length; i++) {
            if (inputUsername == usersInfo[i].username) {
                takenUsername = true;
                $(this).after('<h4>This username is taken, try again!</h4>');
                break;
            }
        }
        if (inputPassword.length >= 4) {
            passwordIsMoreThan4 = true;
        } else {
            $(this).after('<h4>Password must be at least 4 characters</h4>');
        }
        if (!takenUsername && passwordIsMoreThan4) {
            usersInfo.push(user);
            usersCounter++;
            localStorage.setItem('usersinfo', JSON.stringify(usersInfo));
            localStorage.setItem('userscounter', JSON.stringify(usersCounter));
            usersInfo = JSON.parse(localStorage.getItem('usersinfo'));

            currentUser = usersInfo[usersInfo.length - 1];
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            window.location.assign('home.html');
            searchBox.push(inputUsername);
            localStorage.setItem('searchbox', JSON.stringify(searchBox));

        }



    });



    $('#signin').click(function() {
        inputUsername = $('#username').val();
        inputPassword = $('#password').val();
        var exists = false;
        var rightPassword = false;
        var foundi = 0

        for (var i = 0; i < usersInfo.length; i++) {
            if (inputUsername == usersInfo[i].username) {
                exists = true;
                foundi = i;

                if (inputPassword == usersInfo[i].password) {
                    rightPassword = true;
                }

                break;
            }
        }


        if (!exists) {
            $(this).after('<h4>Not found</h4>' + '<a href="index.html"  class="w-100  btn-lg btn btn-primary" style="background-color: rgb(27, 231, 61);">Sign up</a>');
        }
        if (!rightPassword && exists) {
            $(this).after('<h4>Wrong password, try again!</h4>');
        }
        if (exists && rightPassword) {
            currentUser = usersInfo[foundi];
            localStorage.setItem('currentuser', JSON.stringify(currentUser));
            window.location.assign('home.html')

        }
    });





















});