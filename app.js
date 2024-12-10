function navigateToResumePage() {
    const button = document.querySelector('.lets-go-btn');
    
    // Add click animation
    button.style.transform = 'scale(0.95)';
    
    // Remove the animation after 200ms for a bounce effect
    setTimeout(() => {
      button.style.transform = 'scale(1)';
      alert("Navigating to the Resume Page!");
      // Add navigation here if needed:
      // window.location.href = 'resume-page.html';
    }, 200);
  }