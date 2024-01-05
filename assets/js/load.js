'use strict'

//translate button:
document.getElementById('translateButton').addEventListener('click', () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page == 'index.html'){
      window.location="index-en.html";
    }
    else if(page == "index-en.html"){
      window.location = "index.html";
    }
    else{
      window.location="index-en.html";
    }
});

document.getElementById('homeTitle').addEventListener('click', () => {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if(page == 'index.html' || page.length==0){
      window.location="index.html";
    }
    else{
        window.location = "index-en.html";
    }
});