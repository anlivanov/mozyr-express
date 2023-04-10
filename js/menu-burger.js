{   
    document.querySelector('.header__menu-icon').addEventListener('pointerdown',function(e){
        menuСontrols();
        
    })

    function menuСontrols(){
        document.querySelector(".header__menu-icon").classList.toggle("active-burger");
        document.querySelector("body").classList.toggle("active-burger");
        document.querySelector(".header__nav-body").classList.toggle("active-burger");
       
    }
}