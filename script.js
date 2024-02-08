var tl = gsap.timeline()
tl.from('#nav h2',{
  y:-50,
  duration:0.8,
  delay:0.4,
  opacity:0.3,
  stagger:0.1
})
tl.from('#page1 h1',{
  x:-950,
  duration:0.8,
  stagger:0.4
})
tl.from("img",{
  x:100,
  rotate:45,
  opacity:0
})
gsap.from('.ri-menu-line',{
  x:50,
  duration:0.8,
  opacity:0
})