  function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.classList.contains("hidden")) {
        answer.classList.remove("hidden");
        answer.classList.add("show");
    } else {
        answer.classList.remove("show");
        answer.classList.add("hidden");
    }
}

  