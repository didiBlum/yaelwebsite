// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mainNav = document.querySelector('.main-nav');
const headerContact = document.querySelector('.header-contact');
const floatingWhatsApp = document.getElementById('floating-whatsapp');

// Force mobile layout on small screens
function checkScreenSize() {
    if (window.innerWidth <= 768) {
        // Show mobile menu button
        if (mobileMenuBtn) {
            mobileMenuBtn.style.display = 'flex';
        }
        // Hide desktop navigation
        if (mainNav) {
            mainNav.style.display = 'none';
        }
        // Hide header contact
        if (headerContact) {
            headerContact.style.display = 'none';
        }
        // Show floating WhatsApp button
        if (floatingWhatsApp) {
            floatingWhatsApp.style.display = 'flex';
        }
    } else {
        // Show desktop navigation
        if (mainNav) {
            mainNav.style.display = 'flex';
        }
        // Show header contact
        if (headerContact) {
            headerContact.style.display = 'flex';
        }
        // Hide mobile menu button
        if (mobileMenuBtn) {
            mobileMenuBtn.style.display = 'none';
        }
        // Hide floating WhatsApp button
        if (floatingWhatsApp) {
            floatingWhatsApp.style.display = 'none';
        }
    }
}

// Check on load and resize
window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

if (mobileMenuBtn && mobileMenuClose && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
        document.body.style.overflow = 'hidden';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        document.body.style.overflow = '';
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';
        }
    });
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 