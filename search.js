$(document).ready(function() {
    var usersInfo = JSON.parse(localStorage.getItem('usersinfo')) || [];
    var searchBox = JSON.parse(localStorage.getItem('searchbox')) || [];
    var SearchredUser = JSON.parse(localStorage.getItem('visiteduser')) || {};
    $("#searchbox").autocomplete({
        source: searchBox
    });
    $("#searchbtn").click(function() {
        inputUsername = $('#searchbox').val();
        for (var i = 0; i < usersInfo.length; i++) {
            if (usersInfo[i].username == inputUsername) {
                SearchredUser = usersInfo[i];
                SearchredUser.password = '';
                localStorage.setItem('visiteduser', JSON.stringify(SearchredUser));
            }

        }
        location.reload();
    });
    if (SearchredUser.username != undefined) {
        $(".card").append('<h4 class="card-title"><i><a class="visit" href="#">' + SearchredUser.username + '</a> </i></h4><hr><hr>');
    }






});