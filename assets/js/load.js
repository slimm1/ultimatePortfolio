'use strict'

//translate button:
document.getElementById('translateButton').addEventListener('click', () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page == 'index.html'){
      window.location="index-en.html";
    }
    else{
      window.location = "index.html#reloaded";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page === 'index.html' && window.location.hash !== '#reloaded'){
        window.location.hash = 'reloaded';
        window.location.reload();
    }
});

document.getElementById('homeTitle').addEventListener('click', () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    console.log(page);
    if(page == 'index.html'){
      window.location="index.html";
    }
    else{
        window.location = "index-en.html";
    }
});