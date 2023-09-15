const body = document.body;
        let flashing = false;

        // JavaScript to duplicate and animate marquees
        function createCrazyMarquee() {
            const marquee = document.createElement('marquee');
            marquee.className = 'crazy-marquee';
            marquee.textContent = 'Marquee';
            body.appendChild(marquee);

            // Randomize position, rotation, and scale
            marquee.style.left = Math.random() * 80 + 'vw';
            marquee.style.top = Math.random() * 80 + 'vh';
            marquee.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() * 2 + 1})`;

            // Toggle body background flashing
            if (!flashing) {
                flashing = true;
                setInterval(() => {
                    body.style.backgroundColor = getRandomColor();
                }, 100);
            }
        }

        // Function to generate a random color
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        // Create and animate marquees every 1 second
        setInterval(createCrazyMarquee, 1000);