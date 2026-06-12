/*
Generates bigger meteor models that are added to an array and spawned in main.js
Last modified on: June 11th, 2026
*/

let bigMeteors = [];
let bigMeteorGravity = 2

function spawnBigMeteor()
{
  let bigMeteor = 
  {
    x: Math.random() * canvas.width,
    y: -500,
    radius: 150,
    vy: bigMeteorGravity,
    damage: 50,
  
    drawBigMeteor()
    {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      context.fillStyle = 'yellow';
      context.fill();
    }
  } 
  
  bigMeteors.push(bigMeteor);
}

setInterval(spawnBigMeteor, 20000);


