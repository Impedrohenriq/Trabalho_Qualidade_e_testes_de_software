document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const interactiveLinks = document.querySelectorAll('.member-card a, .back-link, .top-link');

  interactiveLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-2px)';
    });

    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });
});
