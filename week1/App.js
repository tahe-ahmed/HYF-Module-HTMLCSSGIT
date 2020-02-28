function showNav(){
    document.querySelector(".navbar-slider").style.display = "block";
}
function hideNav(){
    document.querySelector(".navbar-slider").style.display = "none";
}
changeSlide(0);

function changeSlide(n){
    var colors =[ "white", "white", "white"];
    var index = 0 ;
    var sliderNodes = document.querySelectorAll(".slide");
    var dotNodes = document.querySelectorAll(".dot");
    if( n<0 ){
        index = sliderNodes.length;
    }
    else if ( n>sliderNodes.length){
        index = 0 ;
    }
    else{
        index = n ;
    }
    
    for(var i = 0; i < sliderNodes.length; i++ ){
        sliderNodes[i].style.display = "none";
        dotNodes[i].className = dotNodes[i].className.replace(" active", "");
    }
    color = colors[index];
    sliderNodes[index].style.display ="block";
    sliderNodes[index].style.backgroundColor = color;
    dotNodes[index].className += " active";
}