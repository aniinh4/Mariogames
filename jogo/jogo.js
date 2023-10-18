const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreDisplay = document.getElementById('score');

let score = 0;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
        
        // Obtém as posições do Mario e do cano
        const pipePosition = pipe.offsetLeft;
        const marioPosition = mario.offsetLeft;

        // Verifica se o Mario passou pelo cano com sucesso (ajuste as condições conforme necessário)
        if (marioPosition => pipePosition && marioPosition <= pipePosition + pipe.offsetWidth) {
            score++;
            scoreDisplay.textContent = `Pontuação: ${score}`;
        }
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition < 120  &&  pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);

