document.addEventListener('DOMContentLoaded', () => {
    // Referencias a la Pantalla de Entrada
    const entranceScreen = document.getElementById('entranceScreen');
    const openFormBtn = document.getElementById('openFormBtn');
    const mainContainer = document.getElementById('mainContainer');

    // Referencias al Formulario y Lórax
    const contactForm = document.getElementById('contactForm');
    const loraxOverlay = document.getElementById('loraxOverlay');
    const loraxTitle = document.getElementById('loraxTitle');
    const loraxMessage = document.getElementById('loraxMessage');
    const resetBtn = document.getElementById('resetBtn');
    const submitBtn = document.getElementById('submitBtn');

    // 1. PANTALLA DE ENTRADA (ABRIR FORMULARIO)
    if (openFormBtn && entranceScreen) {
        openFormBtn.addEventListener('click', () => {
            entranceScreen.classList.add('lift-up');
            if (mainContainer) {
                mainContainer.classList.add('show-form');
            }
        });
    }

    // 2. PROCESAMIENTO DEL FORMULARIO CON AMBAS RESPUESTAS
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Evita que la página se abra o recargue
            e.preventDefault();

            const subject = document.getElementById('subject').value.toLowerCase();
            const message = document.getElementById('message').value.toLowerCase();

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'PROCESANDO...';
            }

            setTimeout(() => {
                // Si la palabra 'error' o 'malo' está en el asunto o mensaje, activa la desaprobación
                const isRejected = subject.includes('error') || message.includes('error') || 
                                   subject.includes('malo')  || message.includes('malo');

                // Limpiar clases previas
                if (mainContainer) {
                    mainContainer.classList.remove('fly-3d-out', 'fly-away-error');
                }
                if (loraxOverlay) {
                    loraxOverlay.classList.remove('active', 'success', 'error');
                }

                if (!isRejected) {
                    // === ESTADO 1: APROBADO (Vuelo 3D hacia arriba) ===
                    if (mainContainer) mainContainer.classList.add('fly-3d-out');
                    if (loraxOverlay) {
                        loraxOverlay.classList.add('success');
                        if (loraxTitle) loraxTitle.textContent = '¡Yo hablo por los árboles! 🌳';
                        if (loraxMessage) loraxMessage.textContent = '¡Tu mensaje ha sido APROBADO y ha salido volando por los aires con éxito!';
                    }
                } else {
                    // === ESTADO 2: DESAPROBADO (Caída 3D hacia abajo) ===
                    if (mainContainer) mainContainer.classList.add('fly-away-error');
                    if (loraxOverlay) {
                        loraxOverlay.classList.add('error');
                        if (loraxTitle) loraxTitle.textContent = '¡Mensaje DESAPROBADO! 😔';
                        if (loraxMessage) loraxMessage.textContent = 'El Lórax ha desaprobado tu mensaje. Por favor, revisa el contenido e inténtalo de nuevo.';
                    }
                }

                // Activa la pantalla emergente del Lórax
                if (loraxOverlay) loraxOverlay.classList.add('active');
            }, 600);
        });
    }

    // 3. BOTÓN VOLVER A INTENTAR
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (loraxOverlay) loraxOverlay.classList.remove('active');

            setTimeout(() => {
                if (mainContainer) mainContainer.classList.remove('fly-3d-out', 'fly-away-error');
                if (contactForm) contactForm.reset();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'ENVIAR MENSAJE';
                }
            }, 400);
        });
    }
});