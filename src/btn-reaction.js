function on_zone(name,tab_area){
    var loop,tab_white,look_zone;
    look_zone = document.getElementById(name); 
    tab_white = document.getElementsByClassName(look_zone.getAttribute("class"));
    loop = document.getElementsByTagName("li");
    for (var i=0;i<loop.length;i++){
        loop[i].style = "none";
        tab_white[i].style.display = "none";
    }
    look_zone.style.display = "block";
    tab_area.style.backgroundColor = "cornflowerblue";
    flag = true;
 //   return tab_area;
};