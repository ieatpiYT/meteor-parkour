/*
Generates stone pillars that are added to an array and spawned in main.js
Last modified on: June 11th, 2026
*/

let stonePillars = [];

function summonStonePillars()
{
  let stonePillar = 
  {
    x: Math.random() * canvas.width,
    y: canvas.height,
    width: Math.random() * 200 + 30,
    height: Math.random() * 200 + 50,
    color: 'grey',
    vy: -5,
    counter: 0,
  
    drawStonePillar()
    {
      context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }
  
  stonePillars.push(stonePillar);
}

setInterval(() => summonStonePillars(), 1000); // Spawn rate






