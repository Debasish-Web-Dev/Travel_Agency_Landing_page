        let he = gsap.timeline()
        he.from(".nav img, .nav h3, .nav h4, button, i",{
            y:-100,
            stagger:0.2,
            duration:1,
            delay:0.1,
            opacity:0
        })
        he.from(".home p",{
            y:100,
            duration:1,
            stagger:0.5,
            opacity:0
        })
        he.from(".home span",{
            opacity:0,
            scale:0,
            yoyo:true,
            rotation:720,
            duration:5,
        })
