/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const selectNav = document.getElementById('navbar__list'); //select all id navbar__list
const selectSections = document.querySelectorAll('section'); // select all section tag
const menuLink = selectNav.getElementsByClassName("menu__link");
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
/*********************** Helper func for scroll func ************************/
const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= -300 &&
        bounding.bottom >= 300
    );
};
/**************************************************************************/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
/**************************************************************************/
// creat loop for each sections in the page
const creatMenu = () => {
    selectSections.forEach(section => {
        const navElement = `<li class='menu__link ${section.className}' data-link=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`
        selectNav.insertAdjacentHTML('beforeend', navElement)
    })
};
/**************************************************************************/

// Add class 'active' to section when near top of viewport

/****************************** build func to add your-active-class ********************************************/
const addActiveTo = () => {
    window.addEventListener('scroll', () => {
        for (let i = 0; i < selectSections.length; i++) {
            isInViewport(selectSections[i]) ? //from helper function
                selectSections[i].classList.add("your-active-class") : selectSections[i].classList.remove("your-active-class");
        }
    });
    /***************************** add active class for current element ***************/
};
/**************************************************************************/

// Scroll to anchor ID using scrollTO event
/**************************************************************************/


const scrollToElement = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

        });
    })
    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener("click", function() {
      const current = document.getElementsByClassName("active");
  
      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
  
      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }
};



/**************************************************************************/
/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
creatMenu();
// Scroll to section on link click
scrollToElement();
// Set sections as active
addActiveTo();
/********************************end the code******************************************/
