(() => { 

    function updateBlockSize() {
        var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        
        const player = document.querySelector(".main-block-play-changed");
        const scroller = document.querySelector(".main-block-play-changed__input");
        
        scroller.style.width = (screenWidth / 3) + "px";
        player.style.left = (screenWidth / 3) + "px";
    }
      
    updateBlockSize();
      
    window.addEventListener("resize", updateBlockSize);

})()
