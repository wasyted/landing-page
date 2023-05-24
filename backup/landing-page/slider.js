window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
 }
});