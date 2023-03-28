// hide all content divs except content1 when the page loads
window.addEventListener('load', function() {
    // get all content divs
    const contentDivs = document.querySelectorAll('.content');
    
    // loop through each content div
    for (let i = 0; i < contentDivs.length; i++) {
      // if it's the first content div, display it
      if (i === 0) {
        contentDivs[i].style.display = 'block';
      } 
      // otherwise, hide it
      else {
        contentDivs[i].style.display = 'none';
      }
    }
  });
  
  function showContent(contentId) {
    // get all content divs
    const contentDivs = document.querySelectorAll('.content');
    
    // loop through each content div
    for (let i = 0; i < contentDivs.length; i++) {
      // if it's the content div we want to show, display it
      if (contentDivs[i].id === contentId) {
        contentDivs[i].style.display = 'block';
      } 
      // otherwise, hide it
      else {
        contentDivs[i].style.display = 'none';
      }
    }
  }
  