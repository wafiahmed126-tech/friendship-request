const noBtn = document.getElementById('no-btn');

noBtn.addEventListener('mouseover', () => {
    // Calculate random positions
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    // Move the button
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

noBtn.addEventListener('click', () => {
    alert("Nice try, but you can't say no!");
});