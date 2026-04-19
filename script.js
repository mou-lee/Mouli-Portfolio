document.addEventListener("DOMContentLoaded", () => {
  // ================== MENU TOGGLE ==================
  const hamMenu = document.getElementById('menu-bar');
  const navLinks = document.getElementById('navLinks');
  const body = document.body;

  if (hamMenu && navLinks) {
    hamMenu.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navLinks.classList.add('close');
        body.classList.remove('menu-open');
      } else {
        navLinks.classList.add('open');
        navLinks.classList.remove('close');
        body.classList.add('menu-open');
      }
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navLinks.classList.add('close');
        body.classList.remove('menu-open');
      });
    });
  }

  // ================== PROJECT FILTER ==================
  const buttons = document.querySelectorAll('.work-options button');
  const projects = document.querySelectorAll('.project-item');

  if (buttons.length && projects.length) {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Highlight active button
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');

        // Show/hide projects
        projects.forEach(project => {
          if (filter === 'all' || project.classList.contains(filter)) {
            project.style.display = 'flex';
          } else {
            project.style.display = 'none';
          }
        });
      });
    });

    // Show all projects by default
    projects.forEach(p => p.style.display = 'flex');
    const allBtn = document.querySelector('.work-options button[data-filter="all"]');
    if (allBtn) allBtn.classList.add('selected');
  }

  // ================== BULB TOGGLE ==================
  const bulbOff = document.getElementById("bulb-off");
  const bulbOn = document.getElementById("bulb-on");
  const cartoon = document.getElementById("my-cartoon");
  const switchText = document.getElementById("switch-text");

  if (bulbOff && bulbOn && cartoon && switchText) {
    bulbOff.addEventListener("click", () => {
      bulbOff.style.display = "none";
      switchText.style.display = "none";
      bulbOn.style.display = "block";
      cartoon.style.display = "block";
    });

    bulbOn.addEventListener("click", () => {
      bulbOn.style.display = "none";
      cartoon.style.display = "none";
      bulbOff.style.display = "block";
      switchText.style.display = "block";
    });
  }
});


const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach(card => observer.observe(card));

// Header Scroll
function headerStop() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
