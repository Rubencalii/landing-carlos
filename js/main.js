// D OR Agency - Main JavaScript

// Smooth scrolling and navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.7,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseFloat(counter.dataset.target);
                const increment = target / 50;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (target < 10) {
                            counter.textContent = current.toFixed(1);
                        } else {
                            counter.textContent = Math.ceil(current);
                        }
                        requestAnimationFrame(updateCounter);
                    } else {
                        if (target < 10) {
                            counter.textContent = target.toFixed(1);
                        } else {
                            counter.textContent = target;
                        }
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

// Testimonials carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    
    const track = document.querySelector('.testimonial-track');
    if (track) {
        track.style.transform = `translateX(-${index * 100}%)`;
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
function initTestimonialsAutoRotate() {
    if (testimonials.length > 0) {
        showTestimonial(0);
        setInterval(nextTestimonial, 8000); // Change every 8 seconds
    }
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => faqItem.classList.remove('active'));
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Mobile menu
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuBtn && navList) {
        mobileMenuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
        
        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }
}

// Calendly modal
function openCalendly() {
    const modal = document.getElementById('calendlyModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Initialize Calendly if not already done
        if (typeof Calendly !== 'undefined' && !modal.querySelector('.calendly-inline-widget').hasChildNodes()) {
            Calendly.initInlineWidget({
                url: 'https://calendly.com/doragency/consulta',
                parentElement: modal.querySelector('.calendly-inline-widget'),
                prefill: {},
                utm: {}
            });
        }
    }
}

function closeCalendly() {
    const modal = document.getElementById('calendlyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
function initModalClickOutside() {
    const modal = document.getElementById('calendlyModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCalendly();
            }
        });
    }
}

// Form validation and submission
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const submitBtn = document.getElementById('submitBtn');
    const originalBtnText = submitBtn.innerHTML;
    
    // Form validation
    function validateForm() {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'var(--color-accent)';
            } else {
                field.style.borderColor = 'var(--color-border)';
            }
        });
        
        // Email validation
        const email = form.querySelector('[name="email"]');
        if (email.value && !isValidEmail(email.value)) {
            isValid = false;
            email.style.borderColor = 'var(--color-accent)';
        }
        
        // URL validation
        const web = form.querySelector('[name="web"]');
        if (web.value && !isValidURL(web.value)) {
            isValid = false;
            web.style.borderColor = 'var(--color-accent)';
        }
        
        return isValid;
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidURL(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateForm);
        input.addEventListener('input', () => {
            if (input.hasAttribute('required') && input.value.trim()) {
                input.style.borderColor = 'var(--color-border)';
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            showNotification('Por favor, completa todos los campos requeridos correctamente.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            // Here you would normally send to your backend/CRM
            // For now, we'll simulate the submission
            await simulateFormSubmission(data);
            
            showNotification('¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Error submitting form:', error);
            showNotification('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// Simulate form submission (replace with real API call)
async function simulateFormSubmission(data) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Log data (in production, send to your CRM/backend)
    console.log('Form submitted:', data);
    
    // You can integrate with services like:
    // - HubSpot API
    // - Pipedrive API  
    // - Zapier webhook
    // - Your own backend
    
    return { success: true };
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles if not already added
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                z-index: 3000;
                max-width: 400px;
                border-radius: var(--radius);
                padding: 1rem;
                box-shadow: var(--shadow);
                animation: slideInRight 0.3s ease;
            }
            .notification-success {
                background: #10B981;
                color: white;
            }
            .notification-error {
                background: #EF4444;
                color: white;
            }
            .notification-info {
                background: var(--color-accent);
                color: var(--color-bg);
            }
            .notification-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            .notification-close {
                background: none;
                border: none;
                color: inherit;
                cursor: pointer;
                opacity: 0.8;
                padding: 0.25rem;
                border-radius: 50%;
                transition: opacity 0.2s ease;
            }
            .notification-close:hover {
                opacity: 1;
                background: rgba(0,0,0,0.1);
            }
            @keyframes slideInRight {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @media (max-width: 480px) {
                .notification {
                    right: 10px;
                    left: 10px;
                    max-width: none;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Navigation highlighting
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current nav link
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => observer.observe(section));
}

// Scroll animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .benefit-card, .case-card, .team-member, .process-step');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Set initial state for animated elements
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Keyboard navigation
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key closes modal
        if (e.key === 'Escape') {
            closeCalendly();
        }
        
        // Arrow keys for testimonial navigation
        if (e.key === 'ArrowLeft') {
            prevTestimonial();
        } else if (e.key === 'ArrowRight') {
            nextTestimonial();
        }
    });
}

// Performance monitoring
function initPerformanceMonitoring() {
    // Log Core Web Vitals
    if ('web-vital' in window) {
        import('web-vitals').then(({ getLCP, getFID, getCLS }) => {
            getLCP(console.log);
            getFID(console.log);
            getCLS(console.log);
        });
    }
    
    // Log page load time
    window.addEventListener('load', () => {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Core functionality
    initHeaderScroll();
    initCounters();
    initTestimonialsAutoRotate();
    initFAQ();
    initMobileMenu();
    initModalClickOutside();
    initContactForm();
    
    // Enhanced features
    initNavHighlight();
    initScrollAnimations();
    initLazyLoading();
    initKeyboardNavigation();
    initPerformanceMonitoring();
    
    // Add smooth scroll to nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
    
    // Add click handlers for CTA buttons
    document.querySelectorAll('.cta-btn.secondary').forEach(btn => {
        if (btn.textContent.includes('Auditoría')) {
            btn.addEventListener('click', () => scrollToSection('contacto'));
        }
    });
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToSection,
        openCalendly,
        closeCalendly,
        nextTestimonial,
        prevTestimonial,
        showNotification
    };
}
