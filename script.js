
async function handleAnswer(answer) {
    const webhookUrl = 'https://discord.com/api/webhooks/1386057731663986861/Bwgjr0rXxEYjp54ACfcU5cwYzm6LoA8Y7mEeIzFsVXGql0qSrZMNxEvSSl0S8HjATylE';
    

    let message;
    let color;
    
    if (answer === 'yes') {
        message = "🎉 YAYAYAYAYAYAY TYYYY ✨💕🌹";
        color = 0x00ff00; 
        

        showEpicCelebration();
    } else {
        message = "💔 Okiii 🌙💙";
        color = 0x4169E1; 
        

        showUnderstanding();
    }
    

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                embeds: [{
                    title: "💕 Romantic Response 💕",
                    description: message,
                    color: color,
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: "Love letter response logged"
                    },
                    thumbnail: {
                        url: "https://cdn.discordapp.com/emojis/123456789.png"
                    }
                }]
            })
        });
        
        if (response.ok) {
            console.log('Response logged successfully!');
        } else {
            console.error('Failed to log response');
        }
    } catch (error) {
        console.error('Error logging response:', error);
    }
}

function showEpicCelebration() {

    document.body.style.background = 'linear-gradient(135deg, #FF1493 0%, #FF69B4 25%, #FFB6C1 50%, #FFC0CB 75%, #FFFFE0 100%)';
    

    createMassiveConfetti();
    

    const loveLetter = document.querySelector('.love-letter');
    loveLetter.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 240, 245, 0.95) 100%)';
    loveLetter.style.boxShadow = '0 0 50px rgba(255, 20, 147, 0.8), 0 0 100px rgba(255, 105, 180, 0.4)';
    

    const letterContent = document.querySelector('.letter-content');
    letterContent.innerHTML = `
        <div class="celebration-content">
            <h1 style="font-family: 'Great Vibes', cursive; font-size: 4rem; color: #FF1493; text-align: center; margin-bottom: 2rem; animation: celebrationBounce 0.8s ease-out;">
                YES! 🎉✨
            </h1>
            <div style="text-align: center; font-size: 1.5rem; color: #8B0000; margin-bottom: 2rem; font-family: 'Dancing Script', cursive;">
                <p>YAYA LETS GOOO BOOOM BOOOM BOOM! 💖</p>
                <p>mwaaaah ily 🌹</p>
            </div>
            <div style="font-size: 4rem; text-align: center; margin: 2rem 0; animation: heartPulse 1s ease-in-out infinite;">
                💕🥳🌹✨💖
            </div>
            <div style="text-align: center; font-family: 'Playfair Display', serif; font-size: 1.3rem; color: #4B0082;">
                <p>TY TY TY</p>
            </div>
        </div>
    `;
    

    addCelebrationStyles();
    

    createHeartExplosion();
    

    createMusicNotes();
}

function showUnderstanding() {

    document.body.style.background = 'linear-gradient(135deg, #4169E1 0%, #6495ED 50%, #87CEEB 75%, #E6E6FA 100%)';
    

    createGentleSparkles();
    

    const letterContent = document.querySelector('.letter-content');
    letterContent.innerHTML = `
        <div class="understanding-content">
            <h1 style="font-family: 'Great Vibes', cursive; font-size: 3.5rem; color: #4169E1; text-align: center; margin-bottom: 2rem;">
                That's okay... 💙
            </h1>
            <div style="text-align: center; font-size: 1.4rem; color: #2F4F4F; margin-bottom: 2rem; font-family: 'Dancing Script', cursive;">
                <p>Okiii ty for answerrr 🌙</p>
                <p>Boom</p>
                <p>byeeeee ⭐</p>
            </div>
            <div style="font-size: 3rem; text-align: center; margin: 2rem 0;">
                🌙💙🌹✨🦋
            </div>
            <div style="text-align: center; font-family: 'Playfair Display', serif; font-size: 1.2rem; color: #4B0082; font-style: italic;">
                <p>"" 💫</p>
            </div>
        </div>
    `;
}

function createMassiveConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        const symbols = ['🎉', '🎊', '✨', '💖', '🌟', '💕', '🥳', '🌹', '💐', '🦋', '⭐', '💫'];
        confetti.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-20px';
        confetti.style.fontSize = (Math.random() * 2 + 1.5) + 'rem';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 3}s linear forwards`;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 6000);
    }
}

function createHeartExplosion() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💘'][Math.floor(Math.random() * 4)];
        heart.style.position = 'fixed';
        heart.style.left = '50%';
        heart.style.top = '50%';
        heart.style.fontSize = '2rem';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        
        const angle = (i * 18) * (Math.PI / 180);
        const distance = Math.random() * 300 + 100;
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        heart.style.animation = `heartExplode 2s ease-out forwards`;
        heart.style.setProperty('--endX', endX + 'px');
        heart.style.setProperty('--endY', endY + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000);
    }
}

function createMusicNotes() {
    const notes = ['🎵', '🎶', '🎼'];
    for (let i = 0; i < 8; i++) {
        const note = document.createElement('div');
        note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
        note.style.position = 'fixed';
        note.style.left = Math.random() * 100 + 'vw';
        note.style.top = '100vh';
        note.style.fontSize = '1.5rem';
        note.style.pointerEvents = 'none';
        note.style.zIndex = '998';
        note.style.animation = `musicFloat 4s ease-out forwards`;
        note.style.animationDelay = i * 0.3 + 's';
        
        document.body.appendChild(note);
        
        setTimeout(() => {
            if (note.parentNode) {
                note.parentNode.removeChild(note);
            }
        }, 5000);
    }
}

function createGentleSparkles() {
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.position = 'fixed';
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.fontSize = '1rem';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '997';
        sparkle.style.animation = `gentleSparkle 3s ease-in-out infinite`;
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 10000);
    }
}

function addCelebrationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(120vh) rotate(720deg);
                opacity: 0;
            }
        }
        
        @keyframes celebrationBounce {
            0% { transform: scale(0) rotate(-180deg); }
            50% { transform: scale(1.3) rotate(0deg); }
            100% { transform: scale(1) rotate(0deg); }
        }
        
        @keyframes heartPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
        }
        
        @keyframes heartExplode {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(1);
                opacity: 0;
            }
        }
        
        @keyframes musicFloat {
            0% {
                transform: translateY(0);
                opacity: 0;
            }
            20% {
                opacity: 1;
            }
            80% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh);
                opacity: 0;
            }
        }
        
        @keyframes gentleSparkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
        }
    `;
    document.head.appendChild(style);
}
