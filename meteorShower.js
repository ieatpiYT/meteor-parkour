/*
Generates meteor models that are added to an array and spawned in main.js
Last modified on: June 11th, 2026
*/

let meteors = [];
let meteorGravity = 7;

function spawnMeteors()
{
  let meteor =
  {
    x: Math.random() * (canvas.width + 200) - 100,
    y: -100,
    radius: 50,
    vy: meteorGravity,
    damage: 10, 
 
    drawMeteor()
    {
      // Create the base, so the circle
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); // Making circle
      context.fillStyle = 'orange'; // fillStyle is a property so no brackets at end
      context.fill(); // Fill is an action so we use brackets


    }
  }
 
  meteors.push(meteor);
}


setInterval(spawnMeteors, 500); // Spawn meteors every half a second
























