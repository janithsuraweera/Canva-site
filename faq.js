function toggleAnswer(element) {
    const answer = element.nextElementSibling;
  
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
    } else {
      answer.classList.add("hidden");
    }
  }
  