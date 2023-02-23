//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('./standard/topNav.html'));
    console.log($('#footerPlaceholder').load('./standard/botNav.html'));
}
loadSkeleton();  //invoke the function
