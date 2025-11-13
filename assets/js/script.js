// Bloom fade-in animation
const fadeEls=document.querySelectorAll('.fade-in');
const obs=new IntersectionObserver((entries,observer)=>{
 entries.forEach(e=>{
  if(!e.isIntersecting)return;
  e.target.classList.add('visible');
  observer.unobserve(e.target);
 });
},{threshold:0.2});
fadeEls.forEach(el=>obs.observe(el));
