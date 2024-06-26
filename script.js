document.addEventListener('DOMContentLoaded', function() {
    const enBtn = document.getElementById('en-btn');
    const ruBtn = document.getElementById('ru-btn');
    const enInstructions = document.getElementById('en-instructions');
    const ruInstructions = document.getElementById('ru-instructions');

    enBtn.addEventListener('click', function() {
        enBtn.classList.add('active');
        ruBtn.classList.remove('active');
        enInstructions.classList.remove('hidden');
        ruInstructions.classList.add('hidden');
    });

    ruBtn.addEventListener('click', function() {
        ruBtn.classList.add('active');
        enBtn.classList.remove('active');
        ruInstructions.classList.remove('hidden');
        enInstructions.classList.add('hidden');
    });
});