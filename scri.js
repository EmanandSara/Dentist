let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function displayGroupMembers() {
    var groupMembersList = document.getElementById('group-members');
    var members = groupMembersList.children;
    var numMembers = members.length;

    for (var i = numMembers - 1; i > 0; i--) {
        var randomIndex = getRandomIndex(i + 1);
        groupMembersList.appendChild(members[randomIndex]);
    }
}

displayGroupMembers();