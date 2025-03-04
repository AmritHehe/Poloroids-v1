// const { innerHeight } = window;

// gsap.from("#outer-body .zoom-out",{
//     scale:10 , stager: 0.25 , duration : 3,
//     scrollTrigger : { 
//         trigger: "outer-body",
//         pin: true,
//         end: `+=${innerHeight *1.3}`,
//         scrub: true
//     }

//  });
// const scrolll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth:true
// });


// fucnction to stop scrolling 

// document.body.style.overflow = 'hidden' ; 


// setTimeout(function() { 
//   document.body.style.overflow = 'auto' ;
// } , 10000 ); 


VanillaTilt.init(document.querySelectorAll(".tiltu"), {
  max: 25,
  speed: 400
});








document.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.photo-text');
  elements.forEach(function(element, index) {
    element.style.setProperty('--index', index);
  });
});


var t = anime.timeline({
  easing: 'easeOutExpo',
  duration: 4000,
  complete : function(){
    t1.play();
  }
});


t.add({ 
targets : ['#cam'], 
opacity : [0,1], 
translateX : [-1500 ,-400],

duration:2000,

});
t.add({
  targets : ['#flash'], 
  opacity : [0 , 1 ], 
  scale  : [1 , 10] , 
  duration  : 200 , 
}); 
t.add({ 
  targets : ['#flash' , '#cam'] ,
  opacity : [1, 0 ], 
  duration : 100 ,
});



var t1 = anime.timeline({
    easing: 'easeOutExpo',
    duration: 10000,
    autoplay : false ,
    // loop:true
  });
  
t1.add({
  targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
    keyframes: [

        {
          rotate : 5 , 
          scale : [5,0.5],
          opacity:[0.0,1]  },








        // {scale:0.5},

        // {rotate :-5}
        // 
        // {translateY: -40},
        // {translateX: 250},
        // {translateY: 40},
        // {translateX: 0},
        // {translateY: 0},
      ],
      // duration :  5000,




      easing:'easeOutElastic(1,.8)',
      // loop : true
      duration:1000,
      delay:100,



    // translateX: 250,
    // // duration: 3000,
    // rotate : 100 ,
    // loop : true



},
'-=300'
);
t1.add({
  delay:0,
  targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
  translateX: -600,
  translateY: [50,60],
  rotate:-6,
  delay:0,
  delay:200,
  // offset:0,
  duration:700,
},
'-=400'
);
// t1.add({
//   targets:'#sec-box',
//   translateX:-350,
//   translateY: 50,
//   rotate:0,
//   duration:300,
//   offset:0,
// },{targets:'#third-box',
// translateX:-100,
// translateY: 60,
// rotate:4,
// duration:300,})
t1.add({
  targets: ['#sec-box'],
  translateX: [-600,-350],
  translateY: [60,85],
  rotate: [-6,-3],
  duration: 150,
  opacity:[0.0,1],
  delay:700,
  // offset: '-=1500',
}, 

'-=500'

// '-=200'
// '+=100'
); // Adjust the offset to control the delay between animations

t1.add({
  targets: ['#third-box'],
  translateX: [-350,-100],
  translateY: [85 , 97],
  rotate: [-3,0],
  duration: 200,
  // offset:0,
  opacity:[0.0,1],
  delay:1000,
}, '-=1000'); // Adjust the offset to control the delay between animations

t1.add({
  targets: ['#forth-box'],
  translateX: [-100,147],
  translateY: [97 , 95],
  rotate : [0,2],
  duration: 200,
  opacity:[0.0,1],
  delay:1000,

  // offset:0,
}, '-=1000');

t1.add({
  targets: ['#fifth-box'],
  translateX: [140,395],
  translateY: [97 , 85],
  rotate : [2,4],
  duration: 200,
  // offset:0,
  opacity:[0.0,1], 
  delay:1000,
},
'-=1000'
);
t1.add({
  targets: ['#sixth-box'],
  translateX: [400,640],
  translateY: [85 , 65],
  rotate : [4,6],
  duration: 200,
  // offset:0,
  opacity:[0.0,1], 
  delay:1000,
},
'-=1000'
);
t1.add({
  targets: ['#seventh-box'],
  translateX: [640,880],
  translateY: [65 , 40],
  rotate : [6,8],
  duration: 200,
  // offset:0,
  opacity:[0.0,1],
  delay:1000,
},
'-=1000'
);
t1.add({
  targets: ['#eight-box'],
  translateX: [880,1120],
  translateY: [65,-15],
  rotate: [8,11],
  duration: 200,
  // offset:0,
  opacity:[0.0,1],
  delay:1000,
},
'-=1000'
);
t1.add({
  targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
  translateX: 550,
  translateY: 15,
  rotate:3,
  scale:[0.5,0.8], 
  delay: anime.stagger(50),
  // rotate: [8,11],
  duration: 400,
  // delay:300,
  // offset:0,
  // opacity:[0.0,1]
},
'-=150'
);
t1.add({
  targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
  translateX: -1200,
  translateY: 15,
  rotate:[3,-3],
  // rotateY:'180deg',
  // scale:[0.5,0.8], 
  delay: anime.stagger(20),
  // rotate: [8,11],
  duration: 1500,
  // delay:1000,
  // offset:0,
  // opacity:[0.0,1]
},
'-=200'
);
t1.add({
  targets: ['.heading' , '.polointrofont'],
  opacity:[0,1],
  duration:400,
  // targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
  // translateX: 550,
  // translateY: 15,
  // rotate:3,
  // scale:[0.5,0.8], 
  // delay: anime.stagger(50),
  // // rotate: [8,11],
  // duration: 400,
  // // offset:0,
  // // opacity:[0.0,1]
  delay:1000,
},
'-=2550'
);
t1.add({
  targets: ['#first-box','#sec-box','#third-box','#forth-box','#fifth-box','#sixth-box','#seventh-box','#eight-box'],
  translateX: 300,
  scale:1,
  translateY: 15,
  rotate:[3,-3],
  rotateY:'180deg',
  duration:3000,
  
},
'-=400'
);
t1.add({
  targets:['#first-page'],
  translateX:[0,-100],
  // translateY:[0,150]
  scale : 1.1,
  duration : 1000,

}, '-=300'
);

t1.add({
  targets:['#eight-box'],
  translateX : 350,
  translateY : -30,
  rotate:[-3,7],
  duration :1000,
},
'-=300'
);


// t1.add({
//   targets:'#third-box',
//   translateX:-100,
//   translateY: 60,
//   rotate:4,
//   duration:300,
// })


// gsap.from("#zoom-out",{ 
//     scrollTrigger:{
//         scrollTrigger : "#zoom-out",
//         scroller: "body"
//     },
//     scale:1.5,
//     duration : 2,

// })


//gsap 

var t2 = gsap.timeline({scrollTrigger:{
  trigger : ".second-page", 
  start :"-20% 95%", 
  end : "550% 80%", 
  scrub : true, 
  // markers : true,
}

});  

gsap.registerPlugin(ScrollTrigger);


// var t2 = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".second-page", 
//     start: "-110% 95%", 
//     end: "150% 50%", 
//     scrub: true, 
//     markers: true,
//   }
// });


t2.to("#eight-box",{
  right:'-=150px',
  top: "115%",
  scale : "1.2",
  // ease : "power1.inOut"
  // rotate: 45,  ease: "power2.inOut"

  // ease: "SlowMo.ease.config(0.01, 0.1, true)"
  // rotateX : "5deg",
  // right:'0.2%',
  // rotateY : "180deg",

});
t2.to("#eight-box" , { 
  left:'-=350px',
  top : "200%",
  // rotate : "3deg",
  rotate : "0.3deg",
  scale : "0.3",
  // ease : "power1.inOut"
})
t2.to("#third-page" , { 
  scale : 0.7
})

t2.to("#eight-box" , { 
  left:'+=10px',
  top : "250%",
  // rotate : "3deg",
  rotate : "0.3deg",
  scale : "1",
  ease : "power1.inOut",
  opacity : 0
},"<")
t2.to([".carosel" , ".caroselimages"] , { 
  left:"-=50px",
  opacity : "1",
  scale : "1.1",

  // ease : "power2.out"
},"<")
t2.to([ "#laterimage1"] , { 
  top : "150%",
  scale : "0.9",
  left : "+=750px", 
  rotate : "-6 deg",

  ease : "power3.out"
},)
t2.to(["#laterimage2"] , { 
  top : "150%",
  scale : "0.8",
  left : "+=580px", 
  rotate : "6 deg",

  ease : "power3.out"
},"<")


t2.to(["#laterimage2" , "#laterimage1"] , { 
  // top : "270%",
  // scale : "0.1",
 
  // rotate : "180 deg",
  opacity : 0 , 

  ease : "power3.out"
})
t2.to([".cloudimage"] , { 
  scale : "1.5",
 
  
  opacity : 1 , 

  ease : "power3.out"
},"<")



// t2.to("#eight-box",{
//   top: "105%",
// })
document.addEventListener('DOMContentLoaded', function () {
  var photoContainer = document.getElementById('user-image');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const imageInput = document.getElementById('imageInput');
  const displayedImage = document.getElementById('displayedImage');

  var currentFilterIndex = 0;
  const filters = [
      'filter-1977', 'filter-aden', 'filter-amaro', 'filter-ashby', 'filter-brannan', 'filter-brooklyn', 'filter-charmes', 'filter-clarendon', 'filter-crema', 'filter-dogpatch', 'filter-earlybird',
      'filter-gingham', 'filter-ginza', 'filter-hefe', 'filter-helena', 'filter-hudson', 'filter-inkwell', 'filter-kelvin', 'filter-juno', 'filter-lark', 'filter-lofi', 'filter-ludwig', 'filter-maven', 'filter-mayfair',
      'filter-moon', 'filter-nashville', 'filter-perpetua', 'filter-poprocket', 'filter-reyes', 'filter-rise', 'filter-sierra', 'filter-skyline', 'filter-slumber', 'filter-stinson', 'filter-sutro', 'filter-toaster', 'filter-valencia',
      'filter-vesper', 'filter-walen', 'filter-willow', 'filter-xpro-ii'
  ];

  applyFilter();

  nextBtn.addEventListener('click', showNextFilter);
  prevBtn.addEventListener('click', showPreviousFilter);
  imageInput.addEventListener('change', handleImageUpload);

  var currentFilter = filters[currentFilterIndex];

  function applyFilter() {
      
      currentFilter = filters[currentFilterIndex];
      photoContainer.classList.remove(...filters);
      photoContainer.classList.add(`${currentFilter}`);
  }

  function showPreviousFilter() {
    console.log('Before:', currentFilterIndex);
    currentFilterIndex = (currentFilterIndex - 1 + filters.length) % filters.length;
    console.log('After:', currentFilterIndex);
    console.log(currentFilter);
    console.log('remove : ' , ...filters); 
    console.log('addd:' ,`${currentFilter}`)
    applyFilter();
  }



  function showNextFilter() {
    console.log('Before:', currentFilterIndex);
      currentFilterIndex = (currentFilterIndex + 1) % filters.length;
      console.log('After:', currentFilterIndex);
      console.log(currentFilter);
      console.log('remove : ' , ...filters); 
      console.log('addd:' ,`${currentFilter}`); 

      applyFilter();
  }

  function handleImageUpload() {
      const file = imageInput.files[0];

      if (file) {
          // Read the selected image as a Data URL
          const reader = new FileReader();
          reader.onload = function (e) {
              // Update the displayed image source
              displayedImage.src = e.target.result;
          };
          reader.readAsDataURL(file);
      }
  }


});
// Disable scrolling
document.body.style.overflow = 'hidden';

// Re-enable scrolling after animations (adjust the timeout to match your animation duration)
setTimeout(() => {
  document.body.style.overflow = 'auto';
}, 11000); // Adjust 5000ms to the duration of your animations
window.addEventListener('load', function () {
  window.scrollTo(0, 0);
});

// Ensure scroll doesn't persist across refreshes
window.addEventListener('beforeunload', function () {
  window.scrollTo(0, 0);
});


