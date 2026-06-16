function adsManager(amo) {
   
   
   const click = localStorage.getItem("click");

if(click !== "skip") {
    
    let adWindow = window.open("https://omg10.com/4/10745382", "_blank");
    if (adWindow) {
        window.focus();
    }
    
    localStorage.setItem("click", "skip");
} else if (click == "skip") {
        // Run your website logic
    //console.log("ads skipped ")
    localStorage.setItem("click", "show")
}
    
    

}
