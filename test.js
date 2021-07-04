slideShow = document.getElementById("slideShow");
arrow = document.getElementById("arrow");
header = document.getElementById("header");

function changeDisplay(id){
    //if (id != 0){
    //    document.getElementById("indreSide0").style.display = "none";
    //}
    for (var i = 0; i < 5; i++){
        var streng = "indreSide" + i;
        var v_streng = "v" + i;
        document.getElementById(streng).style.display = "none";
        document.getElementById(v_streng).style.borderRight = "0";
    }
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
