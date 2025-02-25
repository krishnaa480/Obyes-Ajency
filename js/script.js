// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
    	
  });
  // Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
    console.log(e);
})
function loadingAnimation(){
    
var inc = document.querySelector("#line1-part1 h6");
var grow = 0;

setInterval(function(){
    if(grow<100){
       inc.textContent = grow++;
    }
    else{
        inc.textContent = grow;
    }
},25)

var tl = gsap.timeline();

tl.from("#line h2,h1" ,{
    y:100,
    duration:1,
    stagger:0.12,
})

tl.to("#line h1",{
    animationName:"anime",
    opacity:1,
})
tl.to("#loader",{
    opacity:0,
    duration:0.0,
    delay:0,
})

tl.from("#page1",{
    delay:0.2,
    ease:Power4,
    y:1200,
})

tl.to("#loader",{
    display:"none",
})
tl.from("#nav",{
    opacity:0,
})

tl.from(".hero h2",{
    y:120,
    stagger:0.2,
})

}

function sheryAnimation() {
    Shery.imageEffect("#page3-img-box", {
      style: 5,
      gooey: true,
    //   debug:true,
      config:{"a":{"value":2.06,"range":[0,30]},"b":{"value":-0.85,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7058851964615233},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.4,"range":[0,2]},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":21.37,"range":[0,100]}}
    });
  
    Shery.mouseFollower({
        //Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration:0.3,
      });
    
}

function mousemove(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
        })
    })
    
}

function magnet(){
    
    Shery.makeMagnet("#nav-right h4", {
        //Parameters are optional.
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 2,
      });
}

function videoPartCursor(){
    var videopart = document.querySelector("#video-part");
    var video = document.querySelector("#video-part video");
    videopart.addEventListener("mouseenter",function(){
    videopart.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
            opacity:0,
        })
        gsap.to("#video-cursor",{
            left:dets.x -350,
            y:dets.y -50,
        })
  })
    })
    videopart.addEventListener("mouseleave",function(){
        videopart.addEventListener("mouseleave", function(){
            gsap.to(".mousefollower",{
                opacity:1,
            })

            gsap.to("#video-cursor",{
                left: "70%",
                top: "-15%",
            })
        })
    })  

    flag = 0;
    video.addEventListener("click",function(){
        if(flag==0){
            video.play();
            video.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-large-fill"></i>`
            gsap.to("#video-cursor",{
                scale:0.5,
            })
            flag = 1;
        }else {
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#video-cursor",{
                scale:0.5,
            })
            flag = 0;
        }
    })
}

document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        left:dets.x,
        y:dets.y
    })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1,
    })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0,
    })
})


loadingAnimation()
mousemove();
magnet();
sheryAnimation();
videoPartCursor()
