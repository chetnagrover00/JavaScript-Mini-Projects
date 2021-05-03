var line = document.getElementById("line")
        var txts = ["Hi, I'm Chetna Grover", "a Front-End Web-Developer", "a Creative Designer" , "a Digital Marketer"];
        var speed = 100;

        async function typewriter(txt) {
            for (let i = 0; i < txt.length; i++) {
                line.innerHTML += txt.charAt(i);
                await delay(speed)
            }
        }

        async function reverseTypewriter(txt) {
            for (let i = txt.length; i > 0; i--) {
                line.innerHTML = line.innerHTML.slice(0, -1)
                await delay(speed)
            }
        }

        async function writeLoop() {

            for (let i = 0; i < txts.length; i++) {
                await typewriter(txts[i])
                await delay(1000)
                await reverseTypewriter(txts[i])
                await delay(100)
            }

            writeLoop()
        }

        function delay(ms) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                }, ms)
            })
        }

        writeLoop()