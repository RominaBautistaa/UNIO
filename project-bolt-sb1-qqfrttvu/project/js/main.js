// Main UNIO Application JavaScript

// Initialize Lucide icons
lucide.createIcons();

// DOM Elements
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');
const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginButtonNav = document.getElementById('loginButtonNav');
const dashboardLink = document.getElementById('dashboardLink');
const consultationModal = document.getElementById('consultationModal');
const closeConsultationModal = document.getElementById('closeConsultationModal');
const consultationForm = document.getElementById('consultationForm');
const contactForm = document.getElementById('contactForm');
const exploreServicesBtn = document.getElementById('exploreServicesBtn');
const openAppBtn = document.getElementById('openAppBtn');

// Auth form elements
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerName = document.getElementById('registerName');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');

// Scroll links
const scrollLinks = document.querySelectorAll('.scroll-link');
const serviceDetailsBtns = document.querySelectorAll('.service-details-btn');
const requestConsultationBtns = document.querySelectorAll('.request-consultation-btn');

// State management
let currentUser = null;

// Load user from localStorage
function loadUser() {
    const user = localStorage.getItem('unioUser');
    if (user) {
        currentUser = JSON.parse(user);
        updateUIForUser();
    }
}

// Update UI based on current user
function updateUIForUser() {
    if (currentUser) {
        loginButtonNav.style.display = 'none';
        dashboardLink.style.display = 'block';
    } else {
        loginButtonNav.style.display = 'block';
        dashboardLink.style.display = 'none';
    }
}

// Show login modal
function showLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide login modal
function hideLoginModal() {
    loginModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Show register form
function showRegister() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
}

// Show login form
function showLogin() {
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
}

// Show consultation modal
function showConsultationModal() {
    consultationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide consultation modal
function hideConsultationModal() {
    consultationModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Login function
function login() {
    const email = loginEmail.value.trim();
    const password = loginPassword.value;
    
    if (!email || !password) {
        showNotification('Por favor, completa todos los campos.', 'error');
        return;
    }
    
    const storedUser = localStorage.getItem('unioUserAccount');
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.email === email && user.password === password) {
            currentUser = { name: user.name, email: user.email };
            localStorage.setItem('unioUser', JSON.stringify(currentUser));
            hideLoginModal();
            updateUIForUser();
            showNotification('Inicio de sesión exitoso');
        } else {
            showNotification('Email o contraseña incorrectos.', 'error');
        }
    } else {
        showNotification('Usuario no encontrado. Por favor, regístrate primero.', 'error');
    }
}

// Register function
function register() {
    const name = registerName.value.trim();
    const email = registerEmail.value.trim();
    const password = registerPassword.value;
    
    if (!name || !email || !password) {
        showNotification('Por favor, completa todos los campos.', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('La contraseña debe tener al menos 6 caracteres.', 'error');
        return;
    }
    
    // Check if email already exists
    const existingAccount = localStorage.getItem('unioUserAccount');
    if (existingAccount) {
        const user = JSON.parse(existingAccount);
        if (user.email === email) {
            showNotification('Ya existe una cuenta con este email.', 'error');
            return;
        }
    }
    
    // Save user account
    const userAccount = { name, email, password };
    localStorage.setItem('unioUserAccount', JSON.stringify(userAccount));
    
    // Login the user
    currentUser = { name, email };
    localStorage.setItem('unioUser', JSON.stringify(currentUser));
    
    hideLoginModal();
    updateUIForUser();
    showNotification('Registro exitoso');
}

// Logout function - redirect to dashboard to check auth
function logout() {
    currentUser = null;
    localStorage.removeItem('unioUser');
    updateUIForUser();
    showNotification('Sesión cerrada');
}

// Show notification
function showNotification(message, type = 'success') {
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 notification ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Handle contact form submission
function handleContactForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;
    
    if (!name || !email || !message) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    // Save to localStorage
    const contactData = {
        name,
        email,
        message,
        date: new Date().toISOString()
    };
    
    // Get existing messages or initialize array
    let messages = JSON.parse(localStorage.getItem('unioContactMessages') || '[]');
    messages.push(contactData);
    localStorage.setItem('unioContactMessages', JSON.stringify(messages));
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    showNotification('Mensaje enviado correctamente');
}

// Handle consultation form submission
function handleConsultationForm(e) {
    e.preventDefault();
    
    const name = document.getElementById('consultationName').value;
    const email = document.getElementById('consultationEmail').value;
    const message = document.getElementById('consultationMessage').value;
    
    if (!name || !email || !message) {
        showNotification('Por favor, completa todos los campos', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Por favor, ingresa un email válido', 'error');
        return;
    }
    
    // Save to localStorage
    const consultationData = {
        name,
        email,
        message,
        date: new Date().toISOString()
    };
    
    // Get existing consultations or initialize array
    let consultations = JSON.parse(localStorage.getItem('unioConsultationRequests') || '[]');
    consultations.push(consultationData);
    localStorage.setItem('unioConsultationRequests', JSON.stringify(consultations));
    
    // Reset form
    document.getElementById('consultationForm').reset();
    
    hideConsultationModal();
    showNotification('Solicitud de asesoría enviada correctamente');
}

// Smooth scrolling function
function scrollToSection(targetId) {
    const target = document.querySelector(targetId);
    if (target) {
        target.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Event Listeners
loginButtonNav.addEventListener('click', showLoginModal);
closeLoginModal.addEventListener('click', hideLoginModal);
closeConsultationModal.addEventListener('click', hideConsultationModal);
showRegisterForm.addEventListener('click', showRegister);
showLoginForm.addEventListener('click', showLogin);
loginButton.addEventListener('click', login);
registerButton.addEventListener('click', register);
consultationForm.addEventListener('submit', handleConsultationForm);
contactForm.addEventListener('submit', handleContactForm);

// Add event listeners to scroll links
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            scrollToSection(href);
        }
    });
});

// Add event listeners to service details buttons
serviceDetailsBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        // Links to separate pages, no preventDefault needed
    });
});

// Add event listeners to request consultation buttons
requestConsultationBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        showConsultationModal();
    });
});

// Explore services button
exploreServicesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    scrollToSection('#services');
});

// Open app button - opens mobile app in a new page
openAppBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'app-movil/index.html';
});

// Initialize the app
loadUser();

// Initialize Lucide icons again after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});