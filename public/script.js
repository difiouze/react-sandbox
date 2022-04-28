let usersearch = document.getElementById("user-search");
let searchinput = document.querySelector(".search-input");

usersearch.addEventListener("click", function() {
    console.log("coucou");
    searchinput.classList.toggle("search-toggle");
})