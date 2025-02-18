document.addEventListener('DOMContentLoaded', () => {
    const coin = document.getElementById('coin');
    const flipButton = document.getElementById('flipButton');
    const result = document.getElementById('result');
    let isFlipping = false;

    // Simulates quantum randomness using a combination of time-based and Math.random()
    function quantumRandom() {
        const timestamp = Date.now();
        const timeComponent = (timestamp % 100) / 100;
        const randomComponent = Math.random();
        return (timeComponent + randomComponent) / 2;
    }

    function updateResult(probability) {
        const quantumState = probability > 0.5 ? 'Heads' : 'Tails';
        const probabilityPercentage = (probability * 100).toFixed(2);
        
        // Display result with quantum mechanics terminology
        result.innerHTML = `
            <div>Quantum Measurement Collapsed to: <strong>${quantumState}</strong></div>
            <div>Measurement Probability: ${probabilityPercentage}%</div>
            <div><small>|ψ⟩ → |${quantumState[0]}⟩</small></div>
        `;
    }

    function flipCoin() {
        if (isFlipping) return;
        
        isFlipping = true;
        flipButton.disabled = true;
        
        // Clear previous result and show superposition state
        result.innerHTML = `
            <div>System in Superposition...</div>
            <div><small>|ψ⟩ = 1/√2(|H⟩ + |T⟩)</small></div>
        `;
        
        // Add superposition animation
        coin.classList.add('quantum-superposition');
        
        // Generate quantum random number
        const quantumProbability = quantumRandom();
        
        // Calculate final rotation
        const rotations = 10 + Math.floor(Math.random() * 5);
        const finalRotation = rotations * 360 + (quantumProbability > 0.5 ? 0 : 180);
        
        // Apply the rotation
        coin.style.transform = `rotateY(${finalRotation}deg)`;

        // Add quantum decoherence effect (slight wobble at the end)
        setTimeout(() => {
            coin.style.transition = 'transform 0.5s ease-out';
            coin.style.transform = `rotateY(${finalRotation + (Math.random() * 10 - 5)}deg)`;
        }, 2800);

        // Update result after animation
        setTimeout(() => {
            coin.classList.remove('quantum-superposition');
            updateResult(quantumProbability);
            isFlipping = false;
            flipButton.disabled = false;
            
            // Reset transition timing
            setTimeout(() => {
                coin.style.transition = 'transform 3s ease-out';
            }, 500);
        }, 3000);
    }

    // Add click event listener
    flipButton.addEventListener('click', flipCoin);

    // Add keyboard support
    document.addEventListener('keypress', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') {
            flipCoin();
        }
    });
});