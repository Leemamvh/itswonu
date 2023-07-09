document.addEventListener('DOMContentLoaded', () => {
  
  // Mouse effect
  const mouseEffect = document.querySelector('.mouse-effect');
  const logoContainer = document.querySelector('.nav-logo');
  const textContainers = document.querySelectorAll('.navbar-link');

  document.addEventListener('mousemove', e => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    mouseEffect.style.top = `${mouseY}px`;
    mouseEffect.style.left = `${mouseX}px`;
  });

  const expandMouseEffect = () => {
    mouseEffect.style.width = '100px';
    mouseEffect.style.height = '100px';
  };

  const shrinkMouseEffect = () => {
    mouseEffect.style.width = '50px';
    mouseEffect.style.height = '50px';
  };

  logoContainer.addEventListener('mouseenter', () => {
    mouseEffect.textContent = 'Go Home';
    mouseEffect.classList.add('active');
    expandMouseEffect();
  });

  logoContainer.addEventListener('mouseleave', () => {
    mouseEffect.textContent = '';
    mouseEffect.classList.remove('active');
    shrinkMouseEffect();
  });

  textContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      const hoverText = container.getAttribute('data-hover-text');
      mouseEffect.textContent = hoverText;
      mouseEffect.classList.add('active');
      expandMouseEffect();
    });

    container.addEventListener('mouseleave', () => {
      mouseEffect.textContent = '';
      mouseEffect.classList.remove('active');
      shrinkMouseEffect();
    });
  });

  const navOpen = document.querySelector('.nav-open');
  const navList = document.querySelector('.nav-list');
  const navItems = document.querySelectorAll('.nav-item');
  
  navOpen.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

// Smooth scrolling and page loading
const navLinks = document.querySelectorAll('.navbar-link');
const contentContainer = document.querySelector('.content-container');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');

    if (targetId === '#') {
      // Load content dynamically from index.html
      fetch('index.html')
        .then(response => response.text())
        .then(data => {
          contentContainer.innerHTML = data;
        })
        .catch(error => console.log(error));
    } else if (targetId.startsWith('#')) {
      // Handle internal anchor links (scrolling within the page)
      const targetElement = document.querySelector(targetId);
      const offsetTop = targetElement.offsetTop;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      // Handle page redirection
      window.location.href = targetId;
    }

  // Toggle the navigation menu on mobile screens
document.getElementById('nav-open').addEventListener('click', function() {
  var navList = document.querySelector('.nav-list');
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
});

 // Image hover effect using gsap
  gsap.utils.toArray('.project').forEach(project => {
    const img = project.querySelector('img');

    project.addEventListener('mouseenter', handleMouseEnter);
    project.addEventListener('mouseleave', handleMouseLeave);

    function handleMouseEnter() {
      gsap.to(img, {
        scale: 1.2,
        filter: 'brightness(0.8)',
        ease: 'power2.out',
        overwrite: true
      });
    }

    function handleMouseLeave() {
      gsap.to(img, {
        scale: 1,
        filter: 'brightness(1)',
        ease: 'power2.out',
        overwrite: true
      });
    }
  });
})

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if(this.scrollY >= 200) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
});
})