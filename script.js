// Typing Effect for Roles
const roleText = ["Data Analyst", "Aspiring AI Engineer", "Exploring the Future of Cloud & AI", "UI/UX Designer", "Beginner Python Developer"];
let roleElement = document.getElementById("role");
let i = 0;
let j = 0;
let currentText = '';
let typingSpeed = 100; // milliseconds

function typeRole() {
    if (i < roleText.length) {
        if (j < roleText[i].length) {
            currentText += roleText[i].charAt(j);
            roleElement.textContent = currentText;
            j++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(() => {
                currentText = ''; // Clear current role text
                j = 0;
                i++;
                typeRole();
            }, 1000); // Wait before typing the next role
        }
    }
}

typeRole();

// Generate random stars in the background of the hero section
const starBackground = document.querySelector('.hero .stars');

function randomizeStars() {
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
        let star = document.createElement('div');
        star.classList.add('star');
        star.style.top = `${Math.random() * 100}vh`; // Random vertical position
        star.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        star.style.animationDuration = `${Math.random() * 5 + 1}s`; // Randomize the speed of twinkling
        star.style.animationDelay = `${Math.random() * 5}s`; // Random start delay for each star
        starBackground.appendChild(star);
    }
}

randomizeStars();

// Smooth scrolling (No Changes)

// Scroll-to-top functionality (No Changes)
