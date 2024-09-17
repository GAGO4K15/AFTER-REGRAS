// scripts.js

document.addEventListener("DOMContentLoaded", function () {
    const manutencaoItems = document.querySelectorAll(".manutencao-item, .atualizacao-item");

    manutencaoItems.forEach(item => {
        const targetDate = new Date(item.getAttribute("data-date"));
        const progressBar = item.querySelector(".progress");
        const countdownElement = item.querySelector(".countdown");

        function updateCountdown() {
            const now = new Date();
            const totalTime = targetDate - now;

            if (totalTime < 0) {
                countdownElement.textContent = "Concluído!";
                progressBar.style.width = "100%";
                progressBar.style.backgroundColor = "#3498db"; // Azul para finalizado
                return;
            }

            const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

            countdownElement.textContent = `${days} dias, ${hours}h ${minutes}m ${seconds}s`;

            const totalDuration = targetDate - new Date(targetDate.getTime() - totalTime);
            const percentage = ((totalDuration - totalTime) / totalDuration) * 100;
            progressBar.style.width = `${percentage}%`;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    });

    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.getElementById('progress-percent');

    let progress = 0;

    const interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            document.getElementById('loader').style.display = 'none';
            document.getElementById('main-content').classList.remove('hidden');
        } else {
            progress += 1;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
        }
    }, 50); // Ajuste o intervalo para a velocidade de carregamento
});
