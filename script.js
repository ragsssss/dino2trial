const dinosaur = document.getElementById('dinosaur');
const obstacle = document.getElementById('obstacle');
const message = document.getElementById('message');

let isJumping = false;

// Function to make the dinosaur jump
function jump() {
  if (!isJumping) {
    isJumping = true;
    let position = 0;
    const jumpInterval = setInterval(() => {
      if (position >= 150) {
        clearInterval(jumpInterval);
        const fallInterval = setInterval(() => {
          if (position === 0) {
            clearInterval(fallInterval);
            isJumping = false;
          }
          position -= 5;
          dinosaur.style.bottom = position + 'px';
        }, 20);
      }
      position += 5;
      dinosaur.style.bottom = position + 'px';
    }, 20);
  }
}

// Function to check for collisions
function checkCollision() {
  const dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue('bottom'));
  const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));

  if (obstacleLeft < 100 && obstacleLeft > 0 && dinosaurTop < 40) {
    message.textContent = 'Game Over!';
    message.style.display = 'block';
  }
}

// Event listener for space key to make the dinosaur jump
document.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    jump();
  }
});

// Game loop to check for collisions
setInterval(() => {
  checkCollision();
}, 10);
