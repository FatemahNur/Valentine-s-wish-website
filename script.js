document.addEventListener('DOMContentLoaded', () => {
    initializeParticles();
    loadLoveNotes();
    setupInteractions();
});

function initializeParticles() {
    const colors = ['#FF3366', '#FF6B6B', '#FF8E8E'];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = createParticle(colors);
        document.body.appendChild(particle);
    }
    animateParticles();
}

function createParticle(colors) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = Math.random() * 100 + 'vh';
    particle.style.animation = `drift ${8 + Math.random() * 8}s infinite linear`;
    return particle;
}

function animateParticles() {
    document.querySelectorAll('.particle').forEach(particle => {
        const currentX = parseFloat(particle.style.left);
        const currentY = parseFloat(particle.style.top);
        particle.style.left = `${currentX + Math.random() * 0.3 - 0.15}%`;
        particle.style.top = `${currentY + Math.random() * 0.2}%`;
    });
    requestAnimationFrame(animateParticles);
}

function loadLoveNotes() {
    const messages = [
        "You're my fave human notification, no cap 🔔😂",
"We’re so in sync, even Wi-Fi’s jealous 📶💫",
"Every moment with you = core memory unlocked 🌈✨",
"Your smile? Instant mood upgrade, 10/10 recommend 😎🔥",
"Forever ain't long enough for our nonsense ⏳👯‍♀️"
    ];
    
    const notesContainer = document.querySelector('.love-notes');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            const note = document.createElement('div');
            note.className = 'note';
            note.textContent = msg;
            note.style.setProperty('--delay', index * 0.2 + 's');
            notesContainer.appendChild(note);
        }, index * 100);
    });
}

function setupInteractions() {
    document.querySelector('.couple-image').addEventListener('click', createHeartExplosion);
    
    document.body.addEventListener('mousemove', (e) => {
        createCursorTrail(e);
    });
}

function createHeartExplosion() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-particle';
            heart.style.left = `${Math.random() * 100}%`;
            heart.style.top = `${Math.random() * 100}%`;
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 1000);
        }, i * 50);
    }
    showLoveMeter();
}

function createCursorTrail(e) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
    document.body.appendChild(cursor);
    setTimeout(() => cursor.remove(), 1000);
}

function showLoveMeter() {
    const meter = document.createElement('div');
    meter.className = 'love-meter';
    const lovePercentage = Math.random() * 40 + 60;
    meter.innerHTML = `
        <div class="meter-bar" style="width: ${lovePercentage}%">
            ${lovePercentage.toFixed(1)}% Eternal Love
        </div>
    `;
    document.body.appendChild(meter);
    setTimeout(() => meter.remove(), 3000);
}