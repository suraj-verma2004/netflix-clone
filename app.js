document.querySelectorAll('.faqbox').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');

        // Get the answer element which is the next element
        const answer = item.nextElementSibling;

        // Check if the answer panel is open 
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // If open, close it
        } else {
            // If closed, set its max-height to its scrollHeight to open it
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});