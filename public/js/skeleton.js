//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('/app/standard/topNav.html'));
    console.log($('#footerPlaceholder').load('/app/standard/botNav.html'));
}
loadSkeleton();  //invoke the function
