// Small interactive behavior (no jQuery required)
document.addEventListener('DOMContentLoaded', function(){
  // highlight nav link
  const links = document.querySelectorAll('.site-header a');
  links.forEach(a => {
    if(a.href === location.href || location.pathname.endsWith(a.getAttribute('href'))){
      a.style.fontWeight = '700';
    }
  });
});
