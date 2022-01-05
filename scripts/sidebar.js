




let SideBar = document.getElementById("SideBar").onmouseenter = () =>  {
    let Main = document.getElementById("Main");
    let Suka = document.getElementById("SideBar");
    let CloseSideBar = document.getElementById("closeSideBar");
    let BarContent = document.getElementById("BarContent");
    let textBar = document.getElementById("textBar");
    let BarIcon = document.getElementById("BarIcon");
    Suka.style.cssText = " text-align: center; overflow: hidden; width: 15%; height: 100%; float: left; background-color:rgb(39, 39, 39) ; transition-duration: 1s;";
    Main.style.cssText = " color: white; font-size: 24px;  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; float: right; width: 85%; background-color: rgb(55, 56, 58); height: 100%; transition-duration: 1s; ";
    CloseSideBar.style.cssText = "float: right; padding: 5px; opacity: 1; transition-duration: 0.4s; height: 50px;  cursor: pointer; ";
    BarContent.style.cssText = "   font-size: 20px; opacity: 1; transition-duration: 1s; cursor: pointer; color: white; margin-top: 70px;  ";
    textBar.style.cssText = " white-space: nowrap; opacity: 1; ";
    BarIcon.style.cssText = " display: none; opacity: 0; height: 50px; transition-duration: 1s; ";
    
}

let BarIcon = document.getElementById("BarIcon").onmousedown = () =>  {
    let Main = document.getElementById("Main");
    let Suka = document.getElementById("SideBar");
    let CloseSideBar = document.getElementById("closeSideBar");
    let BarContent = document.getElementById("BarContent");
    let textBar = document.getElementById("textBar");
    let BarIcon = document.getElementById("BarIcon");
    Suka.style.cssText = " text-align: center; overflow: hidden; width: 15%; height: 100%; float: left; background-color:rgb(39, 39, 39) ; transition-duration: 1s;";
    Main.style.cssText = " color: white; font-size: 24px;  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; float: right; width: 85%; background-color: rgb(55, 56, 58); height: 100%; transition-duration: 1s; ";
    CloseSideBar.style.cssText = "float: right; padding: 5px; opacity: 1; transition-duration: 0.4s; height: 50px;  cursor: pointer; ";
    BarContent.style.cssText = "   font-size: 20px; opacity: 1; transition-duration: 1s; cursor: pointer; color: white; margin-top: 70px;  ";
    textBar.style.cssText = " white-space: nowrap; ";
    BarIcon.style.cssText = " display: none; opacity: 0; height: 50px; transition-duration: 1s; ";
    
}


let SideBarClose = document.getElementById("closeSideBar").onmousedown = () =>  {
    let Main = document.getElementById("Main");
    let Suka = document.getElementById("SideBar");
    let CloseSideBar = document.getElementById("closeSideBar");
    let BarContent = document.getElementById("BarContent");
    let BarIcon = document.getElementById("BarIcon");
    let textBar = document.getElementById("textBar");
    Suka.style.cssText = " text-align: center; overflow: hidden; width: 5%; height: 100%; float: left; background-color:rgb(39, 39, 39) ; transition-duration: 1s;";
    Main.style.cssText = " color: white; font-size: 24px;  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; float: right; width: 95%; background-color: rgb(55, 56, 58); height: 100%; transition-duration: 1s; ";
    CloseSideBar.style.cssText = "float: right; opacity: 0; transition-duration: 1s; height: 50px; cursor: pointer; ";
    BarContent.style.cssText = " opacity: 0; transition-duration: 1s; cursor: pointer; color: white; margin-top: 50px;  ";
    BarIcon.style.cssText = " display: inline; opacity: 1; height: 50px; transition-duration: 1s; ";
    textBar.style.cssText = " display: none; ";
    if  (CloseSideBar.style.cssText = "float: right; opacity: 0; transition-duration: 1s; height: 50px; cursor: pointer; ") {
        CloseSideBar.style.cssText = "float: right; opacity: 0; transition-duration: 1s; display: none; height: 50px; cursor: pointer; "
    }
}

