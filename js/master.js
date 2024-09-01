const vehicles = [
    {
        name: "INNOVA",
        description: "Experience the open road in comfort with our spacious and well-equipped Innova.",
        image: "https://static3.toyotabharat.com/images/showroom/innova-mmc/unmatched-unrivaled-banner1600x850.jpg",
        price: "Toyota Innova - MUV",
        url: "#contact-section"
    },
    {
        name: "ETIOS",
        description: "Discover the joy of driving with our sleek and comfortable Etios, perfectly equipped for every journey.",
        image: "https://w0.peakpx.com/wallpaper/89/425/HD-wallpaper-toyota-etios-studio-2018-cars-compact-cars-2018-toyota-etios-japanese-cars-toyota.jpg",
        price: "Toyota Etios - Sedan",
         url: "#contact-section"
    },
    {
        name: "TAVERA",
        description: "Embark on your adventure with our reliable and spacious Tavera, designed for comfort on every journey.",
        image: "https://e1.pxfuel.com/desktop-wallpaper/854/555/desktop-wallpaper-topworldauto-of-chevrolet-tavera-chevrolet-tavera.jpg",
        price: "Chevrolet Tavera - SUV",
         url: "#contact-section"
    }
];

const vehiclesContainer = document.getElementById('vehiclesContainer');

vehicles.forEach(vehicle => {
    const vehicleCard = document.createElement('div');
    vehicleCard.className = 'vehicle-card';
    vehicleCard.innerHTML = `
        <img src="${vehicle.image}" alt="${vehicle.name}" class="vehicle-image">
        <div class="vehicle-info">
            <h2 class="vehicle-name">${vehicle.name}</h2>
            <p class="vehicle-description">${vehicle.description}</p>
            <p class="vehicle-price">${vehicle.price}</p>
            <a href="${vehicle.url}" class="btn">Book Now</a>
        </div>
    `;
    vehiclesContainer.appendChild(vehicleCard);
});
//  for menu 
const menu = document.querySelector(".menu");
const hamMenuIcon = document.querySelector(".ham-menu-icon");
let i = true;
hamMenuIcon.addEventListener("click", (e) => {
    if (i) {
        menu.style.display='flex';
        e.target.classList.remove("bi-list"); //e.target = icon 
        e.target.classList.add("bi-x-lg");
        i = false;
    } else {
        e.target.classList.remove("bi-x-lg");
        e.target.classList.add("bi-list"); //e.target = icon 
        menu.style.display='none';
        i = true;
    }
});
// for select 

gsap.registerPlugin(ScrollTrigger);

 // Create a GSAP timeline
 let tl = gsap.timeline({
    defaults: { ease: "power2.out" }
});

tl.from("nav", {
y: -50,
duration: .5,
ease: "ease-in",
opacity: 0
})

tl.from("header", {
    width: "0%",
    duration: .5,
    ease: "ease-in",
    opacity: 0, // Starts from 0 opacity
  });
  

tl.from("#firstText", { 
    y: 100,
    opacity: 0,
    duration: .5,
    ease: "power2.out",
})

tl.from("#bigText", {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
})

gsap.from("#subHead", {
    x: -100, // Animation properties
    opacity: 0, // Animation properties
    scrollTrigger: {
      trigger: "#subHead",
      start: "top 90%", // Corrected start position
      end: "bottom 0%", // Corrected end position

      toggleActions: "play reverse play reverse", // 
    },
  });
  
gsap.from(".p-sub", {
    x: -100, // Animation properties
    opacity: 0, // Animation properties
    scrollTrigger: {
      trigger: ".p-sub",
      start: "top 90%", // Corrected start position
      end: "bottom 0%", // Corrected end position

      toggleActions: "play reverse play reverse", // 
      stagger: 1
    },
  });

gsap.from(".mtt", {
    x: -100, // Animation properties
    opacity: 0, // Animation properties
    scrollTrigger: {
      trigger: ".mtt",
      start: "top 90%", // Corrected start position
      end: "bottom 0%", // Corrected end position

      toggleActions: "play reverse play reverse", // 
      stagger: 1
    },
  });
  
  gsap.from("#vlv", {
    y: 200,
    duration: 0.5,
    opacity: 0,
    scale: 0.9, // Correct scale property for the pop-up effect
    scrollTrigger: {
      trigger: "#vlv",
      start: "top 90%", // Start the animation when the top of the element reaches 90% of the viewport
      end: "bottom 10%", // End when the bottom reaches 10%
      toggleActions: "play none none none",
    },
  });

  gsap.from(".ptt", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    scale: 0.9, // Correct scale property for the pop-up effect
    scrollTrigger: {
      trigger: ".ptt",
      start: "top 90%", // Start the animation when the top of the element reaches 90% of the viewport
      end: "bottom 10%", // End when the bottom reaches 10%
      toggleActions: "play none none none",
    },
  });
  gsap.from(".popl", {
    x: -100,
    duration: 0.5,
    opacity: 0,
    scale: 0.9, // Correct scale property for the pop-up effect
    scrollTrigger: {
      trigger: ".popl",
      start: "top 90%", // Start the animation when the top of the element reaches 90% of the viewport
      end: "bottom 10%", // End when the bottom reaches 10%
      toggleActions: "play reverse play reverse", // 
      stagger: 1
    },
  });

  gsap.from(".vehicle-card", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    opacity: 0,
    scale: 0.9, // Correct scale property for the pop-up effect
    scrollTrigger: {
      trigger: ".vehicle-card",
      start: "top 70%", // Start the animation when the top of the element reaches 90% of the viewport
      end: "bottom 10%", // End when the bottom reaches 10%
      toggleActions: "play none none none",
      stagger: 1
    },
  });
  
  gsap.from(".cnt", {
    opacity: 0,
    y: 50,
    duration: 0.5,
    opacity: 0,
    scale: 0.9, // Correct scale property for the pop-up effect
    scrollTrigger: {
      trigger: ".cnt",
      start: "top 90%", // Start the animation when the top of the element reaches 90% of the viewport
      end: "bottom 10%", // End when the bottom reaches 10%
      toggleActions: "play none none none",
      stagger: 1
    },
  });
 
 