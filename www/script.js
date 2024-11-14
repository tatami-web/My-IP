document.addEventListener('DOMContentLoaded', function () {
    const ipElement = document.getElementById('ip');
    const flagElement = document.getElementById('flag');
    const countryNameElement = document.getElementById('countryName');
    const copyBtn = document.getElementById('copyBtn');
    const refreshBtn = document.getElementById('refreshBtn');
    let abortController = new AbortController();
    let lastFetchTime = 0;

    // Mostrar el loader
    function showIPLoader() {
        const loader = document.createElement('div');
        loader.id = 'ipLoaderSpinner';
        document.body.appendChild(loader);
    }

    // Ocultar el loader
    function hideIPLoader() {
        const loader = document.getElementById('ipLoaderSpinner');
        if (loader) {
            document.body.removeChild(loader);
        }
    }

    // Limpiar elementos de UI
    function clearUI() {
        ipElement.textContent = '';
        flagElement.src = '';
        flagElement.style.display = 'none';
        countryNameElement.textContent = '';
        countryNameElement.style.display = 'none';
    }

    // Obtener la IP y mostrarla
    function fetchIP() {
        const currentTime = Date.now();

        // Prevenir solicitudes repetidas demasiado rápido
        if (currentTime - lastFetchTime < 4000) {
            console.warn('Too many requests. Please wait before refreshing again.');
            return;
        }
        lastFetchTime = currentTime;

        // Abortar solicitudes anteriores si existen
        abortController.abort();
        abortController = new AbortController();
        const signal = abortController.signal;

        showIPLoader(); // Mostrar el loader
        clearUI(); // Limpiar UI

        fetch('https://api.ipify.org?format=json', { signal, cache: 'no-store' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const ip = data.ip;
                ipElement.textContent = ip;

                // Obtener la bandera del país
                return fetch(`https://ipapi.co/${ip}/json/`, { signal, cache: 'no-store' });
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const countryCode = data.country_code.toLowerCase();
                const countryName = data.country_name;

                flagElement.src = `https://flagcdn.com/w320/${countryCode}.png`;
                flagElement.style.display = 'block';
                flagElement.style.width = '300px';
                flagElement.style.height = 'auto';
                countryNameElement.textContent = countryName;
                countryNameElement.style.display = 'block';
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error('Error obtaining IP or country data', error);
                    ipElement.textContent = 'Error obtaining IP or network issue';
                }
            })
            .finally(() => {
                hideIPLoader(); // Ocultar el loader al finalizar
            });
    }

    // Llamada inicial para obtener la IP y la bandera
    fetchIP();

    // Manejar la acción de refrescar al hacer clic en el botón
    refreshBtn.addEventListener('click', function () {
        fetchIP();
    });

    // Copiar la IP al portapapeles
    copyBtn.addEventListener('click', function () {
        const ip = ipElement.textContent;
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Mostrar mensaje de confirmación
        showCopyMessage('IP copied to clipboard');
    });

    // Mostrar el mensaje de copiado
    function showCopyMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messageElement.style.position = 'fixed';
        messageElement.style.bottom = '100px';
        messageElement.style.left = '50%';
        messageElement.style.transform = 'translateX(-50%)';
        messageElement.style.backgroundColor = '#1c1c1c';
        messageElement.style.color = 'white';
        messageElement.style.padding = '10px';
        messageElement.style.borderRadius = '5px';
        messageElement.style.zIndex = '1000';
        document.body.appendChild(messageElement);

        // Eliminar el mensaje después de 2 segundos
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 2000);
    }
});

// Alternar visibilidad de información adicional
const infoButton = document.getElementById("toggle-info");
const infoContainer = document.getElementById("info");

infoButton.addEventListener("click", () => {
  infoContainer.style.display = (infoContainer.style.display === "none" || infoContainer.style.display === "") ? "block" : "none";
});

document.addEventListener("click", (e) => {
  if (e.target !== infoButton && e.target !== infoContainer) {
    infoContainer.style.display = "none";
  }
});

infoContainer.style.display = "none";






