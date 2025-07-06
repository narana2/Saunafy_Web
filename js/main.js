// Saunafy Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for sticky header
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (document.body.classList.contains('menu-open')) {
          document.body.classList.remove('menu-open');
        }
      }
    });
  });

  // Add active class to nav links based on scroll position
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Handle scroll effects for navigation
  function handleScroll() {
    // Add scrolled class to body after scrolling down 50px
    if (window.scrollY > 50) {
      document.body.classList.add('scrolled');
    } else {
      document.body.classList.remove('scrolled');
    }
    
    // Update active nav link
    setActiveNavLink();
  }
  
  // Run on initial load
  handleScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);

  // Mobile menu functionality
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggleBtn = document.querySelector('.menu-toggle');
    
    if (document.body.classList.contains('menu-open') && 
        !navLinks.contains(e.target) && 
        !menuToggleBtn.contains(e.target)) {
      document.body.classList.remove('menu-open');
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, observerOptions);

  // Observe all sections for animation
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate-ready');
    observer.observe(section);
  });

  // Also observe feature cards
  document.querySelectorAll('.feature-card').forEach(card => {
    card.classList.add('animate-ready');
    observer.observe(card);
  });

  // FAQ accordion functionality
  document.querySelectorAll('.faq-item h3').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      item.classList.toggle('expanded');
    });
  });

  // Testimonial slider navigation (if there are multiple testimonials)
  const testimonialSlider = document.querySelector('.testimonial-slider');
  if (testimonialSlider && testimonialSlider.children.length > 2) {
    // Create navigation buttons
    const prevButton = document.createElement('button');
    prevButton.classList.add('slider-nav', 'prev');
    prevButton.innerHTML = '&larr;';
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('slider-nav', 'next');
    nextButton.innerHTML = '&rarr;';
    
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
      testimonialSection.appendChild(prevButton);
      testimonialSection.appendChild(nextButton);
      
      // Scroll behavior
      prevButton.addEventListener('click', () => {
        testimonialSlider.scrollBy({
          left: -370, // Card width + gap
          behavior: 'smooth'
        });
      });
      
      nextButton.addEventListener('click', () => {
        testimonialSlider.scrollBy({
          left: 370, // Card width + gap
          behavior: 'smooth'
        });
      });
    }
  }
  
  // Handle device animations
  function updateDevicePositioning() {
    // Always enable animations regardless of screen size
    const iPhoneDevice = document.querySelector('.iphone-device');
    const appleWatchDevice = document.querySelector('.apple-watch-device');
    
    if (iPhoneDevice) {
      iPhoneDevice.style.animation = 'float-phone 6s ease-in-out infinite';
    }
    
    if (appleWatchDevice) {
      appleWatchDevice.style.animation = 'float-watch 6s ease-in-out infinite';
    }
  }
  
  // Run on load and resize
  updateDevicePositioning();
  window.addEventListener('resize', updateDevicePositioning);

  // Ensure fire and ice animations are running
  function activateFireIceAnimations() {
    // Add animation to floating elements
    document.querySelectorAll('.floating-element').forEach(el => {
      el.style.opacity = '0.4';
    });
    
    // Ensure fire and ice effects are visible
    const fireParticles = document.querySelector('.fire-particles');
    const iceParticles = document.querySelector('.ice-particles');
    
    if (fireParticles) {
      fireParticles.style.opacity = '0.3';
    }
    
    if (iceParticles) {
      iceParticles.style.opacity = '0.3';
    }
    
    // Ensure sparks and particles are visible
    document.querySelectorAll('.fire-spark, .ice-particle').forEach((el, index) => {
      el.style.opacity = '0.7';
      el.style.animationDelay = (index * 0.5) + 's';
    });
  }
  
  // Run animation activation
  activateFireIceAnimations();

  // Add CSS animations class to body after page is loaded
  setTimeout(() => {
    document.body.classList.add('loaded');
    
    // Reactivate animations after a short delay in case they didn't start
    setTimeout(activateFireIceAnimations, 500);
    setTimeout(updateDevicePositioning, 500);
  }, 300);
}); 