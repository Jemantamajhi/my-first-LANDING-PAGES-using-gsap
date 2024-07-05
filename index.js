var tl = gsap.timeline()

tl.from("#navl",{
    opacity:0,
    y:-20,
    duration:1,
    delay:0.5,

});
tl.from("#signup",{
    opacity:0,
    y:-20,
    duration:1,

    
    stagger:0.3
})
tl.from("#login",{
    opacity:0,
    y:-20,
    duration:1,

    
    stagger:0.3
})
tl.from(".right",{
    opacity:0,
    x:-20,
    duration:1,

    scale:0.2,
    stagger:0.3
})
tl.from("h2,p",{
    opacity:0,
    x:-20,
    duration:1,

    
    stagger:0.3
})

tl.from("#btn",{
    opacity:0,
    y:20,
    duration:1,

    scale:0.2,
    stagger:0.3
})


