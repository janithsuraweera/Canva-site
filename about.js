document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      alert('This will take you to our social media page.');
    });
  });
  