slideShow = document.getElementById("slideShow");
arrow = document.getElementById("arrow");
header = document.getElementById("header");

var sideNavDivs = document.getElementsByClassName("barListe");
var side = document.getElementsByClassName("sideH");

function changeDisplay(id, numEl){
    if (id == 0){
        limitFunc()
    }
    //if (id != 0){
    //    document.getElementById("indreSide0").style.display = "none";
    //}
    for (var i = 0; i < numEl; i++){
        sideNavDivs[i].style.backgroundColor = "#f5f5f5";
        side[i].style.color = "#8b8b8b";
        var streng = "indreSide" + i;
        var v_streng = "v" + i;
        document.getElementById(streng).style.display = "none";
        document.getElementById(v_streng).style.borderRight = "0";
    }
    sideNavDivs[id].style.backgroundColor = "rgb(265, 165, 0)";
    side[id].style.color = "white";
    var streng2 = "indreSide" + id;
    var v_streng2 = "v" + id;
    document.getElementById(streng2).style.display = "inherit";
    document.getElementById(v_streng2).style.borderRight = "22px solid rgb(201, 201, 201)";
}

function showSlide(){
    if (slideShow.style.height == "inherit"){
        slideShow.style.height = "0";
        slideShow.style.borderTop = "0 solid #ecedef";
        slideShow.style.borderBottom = "0 solid #ecedef";
        arrow.style.transform = "rotate(45deg)";
        arrow.style.marginTop = "0";
     
    } else {
        slideShow.style.height = "inherit";
        slideShow.style.borderTop = "1px solid #ecedef";
        slideShow.style.borderBottom = "1px solid #ecedef";
        arrow.style.transform = "rotate(-135deg)";
        arrow.style.marginTop = "6px";
    }
}

function slide1(){
    if (slideShow.style.marginLeft == "0%"){
        showSlide();
    } else if (slideShow.style.height == "300px"){
        slideShow.style.marginLeft = "0%";
    } else {
        slideShow.style.marginLeft = "0%";
        showSlide();
    }
}

function limitFunc(){
    if (window.innerWidth<641){
        //document.getElementsByClassName("temaboks")[0].style.margin = "auto";
        document.getElementById("header").innerHTML = `
        <div class="container" onclick="myFunction(this)">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
        `
    } else{
        //document.getElementsByClassName("temaboks")[0].style.margin = "0";
        document.getElementById("header").innerHTML = `
        <div class="valg"><a href="kurs.html">Kurs</a></div>
        <div class="valg"><a href="kontakt.html">Kontakt</a></div>
        `
    }
}
// function run when the bar menu is clicked
function myFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("dropdown").style.display == 'block'){
      document.getElementById("dropdown").style.display = 'none';
      document.getElementById("vegg").remove();
    } else {
      document.getElementById("dropdown").style.display = 'block';
      var tblin = document.createElement('div');
      tblin.id = 'vegg';
      tblin.style.position = "fixed";
      tblin.style.top = "60px";
      tblin.style.left = "0px";
      tblin.style.height = "calc(100vh - 60px)";
      tblin.style.width = "100vw";
      tblin.style.backgroundColor = "grey";
      tblin.style.opacity = ".4";
      document.body.appendChild(tblin);
    }
  }
window.addEventListener("resize", limitFunc);

function openSideBar(){
    var bar = document.getElementById("sideNavBar");
    bar.style.width = "300px";
    bar.style.display = "inherit";
    var klassen = document.getElementsByClassName("indreSide");
    for (var i = 0; i < klassen.length; i++) {
        klassen.item(i).style.opacity = ".4";
}
}
function closeSideBar(){
    var bar = document.getElementById("sideNavBar");
    bar.style.width = "0px";
    bar.style.display = "none";
    var klassen = document.getElementsByClassName("indreSide");
    for (var i = 0; i < klassen.length; i++) {
        klassen.item(i).style.opacity = "1";
}
}



