
window.addEventListener('load', function() {

    const contentDivs = document.querySelectorAll('.content');
    

    for (let i = 0; i < contentDivs.length; i++) {
      if (i === 0) {
        contentDivs[i].style.display = 'block';
      } 
      else {
        contentDivs[i].style.display = 'none';
      }
    }
  });
  
  function showContent(contentId) {
    const contentDivs = document.querySelectorAll('.content');
    
    for (let i = 0; i < contentDivs.length; i++) {
      if (contentDivs[i].id === contentId) {
        contentDivs[i].style.display = 'block';
      } 
      else {
        contentDivs[i].style.display = 'none';
      }
    }
  }
  