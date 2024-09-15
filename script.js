// let i = document.querySelector("i");
        // let part1 = document.querySelector(".part1");
        // i.addEventListener("click",()=>{
        //     part1.style.display = "block";
        // })
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
            // x:800,
            // y:-800,
            yoyo:true,
            rotation:720,
            duration:5,
            // scrollTrigger:{
            //     trigger:".home span",
            //     scroller:"body",
            //     scrub:true,-->for a raugh trigger
            // give number(1-5) for a smouth trigger
            //     markers:true,
            // start and end
            // }
            // repeat:-1
        })