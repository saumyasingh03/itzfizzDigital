
gsap.to("#image1",{
     x:200,
     duration:2,
     delay:1,


})


gsap.to("#image3",{
  x:200,
  y:-50,
  duration:2,
  delay:1,


})


gsap.to("#image2",{
  x:-200,
  y:100,
  duration:2,
  delay:1,


})


gsap.to("#image4",{
  x:-200,
  y:-300,
  duration:2,
  delay:1,


})




const images = document.querySelectorAll('.moving-image');

images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    gsap.to(images, { opacity: 0.1, duration: 0.3, ease: "power2.out" });
    gsap.to(image, { opacity: 1, duration: 0.3, ease: "power2.out" }); 
  });

  image.addEventListener('mouseleave', () => {
    gsap.to(images, { opacity: 1, duration: 0.3, ease: "power2.out" });
  });
});





gsap.fromTo(".moving-image", 
  { opacity: 0, y: 50, x:390}, 
  { opacity: 1, y: 0, duration: 1.5, stagger: 0.3, delay: 0.5 } 
);


gsap.fromTo("#text", 
  { scale: 1, opacity: 0 }, 
  { scale: 3.3, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" } 
);


gsap.to("#image1",{
   x:50,
   y:50,
   duration:1.5,
   scrollTrigger:{
    trigger:"#image1",
   
   }

})
gsap.from(".navbar",{
  opacity:0,
  duration:1,
  y:30,
  delay:1,
  stagger:1

})