document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelector('.nav-menu').classList.remove('active');
    });
});

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

const themeIcon = document.getElementById('theme-icon');
const body = document.body;

themeIcon.addEventListener('click', () => {
    body.classList.toggle('light');
    if (body.classList.contains('light')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

const contactForm = document.getElementById('contact');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon!`);
        
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
    
   
});