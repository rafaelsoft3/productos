 // Selección de elementos del DOM
        const videoFlotante = document.getElementById('videoFlotante');
        const iframeYoutube = document.getElementById('iframeYoutube');
        const btnAbrir = document.getElementById('btnAbrir');
        const btnCerrar = document.getElementById('btnCerrar');

        // FUNCIONES DECLARADAS

        function abrirYReproducir() {
            // 1. Mostrar el contenedor flotante con transición suave
            videoFlotante.style.display = 'block';
            setTimeout(() => {
                videoFlotante.classList.remove('oculto');
            }, 10);

            // 2. Ordenar a la API de YouTube que inicie el video con sonido
            if (iframeYoutube.contentWindow) {
                
                iframeYoutube.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}', 
                    '*'
                );
            }
        }

        function cerrarYPausar() {
            // 1. Ocultar visualmente aplicando la animación CSS
            videoFlotante.classList.add('oculto');
            
            
            // 2. Esperar a que termine la transición antes de cambiar el display a none
            setTimeout(() => {
               
                videoFlotante.style.display = 'none';
            }, 300);

            // 3. Ordenar a la API de YouTube que pause el video inmediatamente
            if (iframeYoutube.contentWindow) {
                iframeYoutube.contentWindow.postMessage(
                    '{"event":"command","func":"pauseVideo","args":""}', 
                    '*'
                );
            }
        }

        // ASIGNACIÓN DE LOS LISTENERS
        btnAbrir.addEventListener('click', abrirYReproducir);
        btnCerrar.addEventListener('click', cerrarYPausar);