                                                            //For Making the color of the menu when clicked

document.addEventListener('DOMContentLoaded', function() {
    var menuToggler = document.querySelector('.menu-toggler');

    menuToggler.addEventListener('click', function() {
        var menuText = document.querySelector('.menu-text');
        menuText.classList.toggle('white');
    });
});

                                                            //For Change of the menu icon
document.addEventListener('DOMContentLoaded', function() {
    var menuToggler = document.querySelector('.menu-toggler');
    var icon = document.querySelector('.fa-book'); // Adjust the selector based on your icon class
    var isIconChanged = false;

    menuToggler.addEventListener('click', function() {
        // Toggle between two different icon classes
        setTimeout(function() {
            if (!isIconChanged) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open-reader'); // Change to a different icon class
                icon.style.transitionDuration = '0.4s'; // Set transition duration to 0.7 seconds when hamburger is open
                isIconChanged = true;
            } else {
                icon.classList.remove('fa-book-open-reader'); // Change to the original icon class
                icon.classList.add('fa-book');
                icon.style.transitionDuration = '0.4s'; // Set transition duration to 0.4 seconds when hamburger is closed
                isIconChanged = false;
            }
        }, 400); // Delay of 0.5 seconds (500 milliseconds)
    });
});

                                                                //For the spinning of the menu icon
document.addEventListener('DOMContentLoaded', function() {
    var menuToggler = document.querySelector('.menu-toggler');
    var menuIcon = document.querySelector('.menu-icon');

    menuToggler.addEventListener('click', function() {
        menuToggler.classList.toggle('open'); // Toggle the 'open' class on the menu toggler

        if (menuToggler.classList.contains('open')) {
            menuIcon.style.transform = 'rotate(360deg)'; // Rotate the icon when the menu is open
        } else {
            menuIcon.style.transform = 'rotate(0deg)'; // Rotate the icon back to its original position when the menu is closed
        }
    });
});

                                                                //For hiding navbar when scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.classList.add('hidden');
  } else {
    // Scrolling up
    navbar.classList.remove('hidden');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

                                                                //TO make the scrollbar disappear during menu open
const menuButton = document.querySelector('.menu-toggler');

menuButton.addEventListener('click', function() {
  document.body.classList.toggle('menu-active');
});

                                                                 // JavaScript for scroll delay
   // JavaScript for smooth scrolling with delay
   var scrollDelayActive = true;
   var scrollDelayTime = 1000; // 1000 milliseconds (1 second)
   var scrollStep = 1; // The amount to scroll on each step
   var scrollInterval = 2; // The interval between each scroll step

   function handleScroll(event) {
       if (scrollDelayActive) {
           event.preventDefault();
           smoothScroll();
           scrollDelayActive = false;
           setTimeout(function() {
               scrollDelayActive = true; // Reset scrollDelayActive after the delay
           }, scrollDelayTime);
       }
   }

   function smoothScroll() {
       var start = window.pageYOffset;
       var end = start + scrollStep;
       var duration = scrollInterval;
       var startTime = null;

       function step(timestamp) {
           if (!startTime) startTime = timestamp;
           var progress = timestamp - startTime;
           var easeInOutQuad = progress < duration ? Math.pow(progress / duration, 2) : 1;
           window.scrollTo(0, start + (end - start) * easeInOutQuad);
           if (progress < duration) {
               window.requestAnimationFrame(step);
           }
       }

       window.requestAnimationFrame(step);
   }

   // Attach event listener
   window.addEventListener('wheel', handleScroll, { passive: false });

                                                                             // Contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    // Perform further form processing or submission here

    alert('Thank you for your message!');
});
