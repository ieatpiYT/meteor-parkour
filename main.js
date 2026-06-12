/*
Main handler of game logic and preview
Last modified on: June 11th, 2026
*/

let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d")

canvas.width = 1024;
canvas.height = 576;

let player1 =
{
    x: 10,
    y: 500,
    vx: 0,
    vy: 0,
    width: 20,
    height: 40,
    color: 'blue',
    health: 100,
    grounded: false,

    draw()
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

let player2 =
{
    x: 100,
    y: 500,
    vx: 0,
    vy: 0,
    width: 20,
    height: 40,
    color: 'red',
    health: 100,
    grounded: false,

    drawPlayer2()
    {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

let gravity = 0.1;

function draw()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    player1.grounded = false;
    player2.grounded = false;

    // Player1 movement
    if (keys.d)
    {
      player1.vx = 5
    }
    else if (keys.a)
    {
      player1.vx = -5;
    }
    else
    {
      player1.vx = 0;
    }
    
    // Player2 movement
    if (keys.arrowL)
    {
      player2.vx = -5
    }
    else if (keys.arrowR)
    {
      player2.vx = 5;
    }
    else
    {
      player2.vx = 0;
    }
   
    // Gravity
    player1.vy += gravity;
    player2.vy += gravity;
    
    // Player movement
    player1.x += player1.vx;
    player1.y += player1.vy;
    player2.x += player2.vx;
    player2.y += player2.vy;
    
    // Ground collision
    if (player1.y + player1.height >= canvas.height)
    {
        player1.y = canvas.height - player1.height;
        player1.vy = 0;
        player1.grounded = true;
    }
    
    if (player2.y + player2.height >= canvas.height)
    {
        player2.y = canvas.height - player2.height;
        player2.vy = 0;
        player2.grounded = true;
    }
   
    // Right wall detection
    if (player1.x + player1.width >= canvas.width)
    {
      player1.vx = 0;
      player1.x = canvas.width - player1.width;
    }
    
    if (player2.x + player2.width >= canvas.width)
    {
      player2.vx = 0;
      player2.x = canvas.width - player2.width;
    }
    
    // Left wall detection
    if (player1.x <= 0)
    {
      player1.vx = 0;
      player1.x = 0;
    }
    
    if (player2.x <= 0)
    {
      player2.vx = 0;
      player2.x = 0;
    }
 
    player1.draw();
    player2.drawPlayer2();
    displayHealth();
    
    // Spawn stone pillars
    for (let i = stonePillars.length - 1; i >= 0; i--)
    {
      let sp = stonePillars[i];
      
      sp.y += sp.vy; // Pillars pushed out of ground 
      
      sp.drawStonePillar();
      
      // Pillars fall down and removed
      if (sp.y + sp.height <= canvas.height)
      {
        sp.y = canvas.height - sp.height;
        sp.vy = 0;
        
        setTimeout(() => {sp.vy = 3}, 5000) // Disappear rate
        
        sp.counter++; 
        if (sp.counter === 700)
        {
          stonePillars.splice(i, 1);
        }
      }
      
      if (checkCollisionDetection(player1, sp))
      {
        if (player1.vy >= 0 && player1.y + player1.height - player1.vy <= sp.y + 10)
        {
          player1.y = sp.y - player1.height;
          
          player1.y = sp.y - player1.height;
          player1.vy = sp.vy;
          player1.grounded = true;
        }
      }
      
      if (checkCollisionDetection(player2, sp))
      {
        if (player2.vy >= 0 && player2.y + player2.height - player2.vy <= sp.y + 10)
        {
          player2.y = sp.y - player2.height;
          
          player2.y = sp.y - player2.height;
          player2.vy = sp.vy;
          player2.grounded = true;
        }
      }
    }
    
    // Jump movement
    if (keys.w && player1.grounded)
    {
      player1.vy = -5;
    }
    
    if (keys.arrowU && player2.grounded)
    {
      player2.vy = -5;
    }

    for (let i = meteors.length - 1; i >= 0; i--)
    {
        let meteor = meteors[i];

        meteor.y += meteor.vy

        meteor.drawMeteor();
        
        if (meteor.y + meteor.radius >= player1.y
        && meteor.x - meteor.radius <= player1.x + player1.width
        && meteor.x + meteor.radius >= player1.x
        && meteor.y - meteor.radius <= player1.y + player1.height)
        {
            if (player1.width > 0)
            {
              player1.health -= meteor.damage;
              player1.color = 'white';
              
              setTimeout(() => {player1.color = 'blue'; }, 100);
              
              meteors.splice(i, 1);
            }
        }
        
        if (meteor.y + meteor.radius >= player2.y
        && meteor.x - meteor.radius <= player2.x + player2.width
        && meteor.x + meteor.radius >= player2.x
        && meteor.y - meteor.radius <= player2.y + player2.height)
        {
            if (player2.width > 0)
            {
              player2.health -= meteor.damage;
              player2.color = 'white';
              
              setTimeout(() => {player2.color = 'red'; }, 100);
              
              meteors.splice(i, 1);
            }
        }
        
        // Delete/discard/recycle after reaching certain point (i.e. canvas base)
        if (meteor.y + meteor.radius >= canvas.height + 100)
        {
            meteors.splice(i, 1);
        }
    }
    
    for (let i = bigMeteors.length - 1; i >= 0; i--)
    {
      let bigM = bigMeteors[i];
      
      bigM.y += bigM.vy;
      
      bigM.drawBigMeteor();
      
      if (bigM.y + bigM.radius >= player1.y
      && bigM.x - bigM.radius <= player1.x + player1.width
      && bigM.x + bigM.radius >= player1.x
      && bigM.y - bigM.radius <= player1.y + player1.height)
      {
          if (player1.width > 0)
          {
            player1.health -= bigM.damage;
            player1.color = 'white';
              
            setTimeout(() => {player1.color = 'blue'; }, 100);
              
            bigMeteors.splice(i, 1);
          }
      }
        
      if (bigM.y + bigM.radius >= player2.y
      && bigM.x - bigM.radius <= player2.x + player2.width
      && bigM.x + bigM.radius >= player2.x
      && bigM.y - bigM.radius <= player2.y + player2.height)
      {
          if (player2.width > 0)
          {
            player2.health -= bigM.damage;
            player2.color = 'white';
              
            setTimeout(() => {player2.color = 'red'; }, 100);
              
            bigMeteors.splice(i, 1);
          }
      }
      
      if (bigM.y + bigM.radius >= canvas.height + 5000)
      {
        bigMeteors.splice(i, 1);
      }
    }
    
   
    window.requestAnimationFrame(draw);
}


draw();



function checkCollisionDetection(rect1, rect2)
{
  return (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y);
}


