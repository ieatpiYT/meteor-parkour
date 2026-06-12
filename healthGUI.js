/*
Health for the player
Last modified on: June 11th, 2026
*/

let healthBar1 = 
{
  x: 0,
  y: 0,
  width: 100,
  height: 20
}

let healthBar2 = 
{
  x: 924,
  y: 0,
  width: 100,
  height: 20
}

function displayHealth()
{
  context.fillStyle = 'white';
  context.fillRect(healthBar1.x, healthBar1.y, 100, 20);
  context.fillStyle = 'green';
  context.fillRect(healthBar1.x, healthBar1.y, healthBar1.width, healthBar1.height);
  
  context.fillStyle = 'white';
  context.fillRect(924, 0, 100, 20);
  context.fillStyle = 'green';
  context.fillRect(healthBar2.x, healthBar2.y, healthBar2.width, healthBar2.height);
  
  // Healthbar decrease 
  switch (player1.health)
  {
    case 100:
      healthBar1.width = 100;
      break;
    case 90:
      healthBar1.width = 90;
      break;
    case 80:
      healthBar1.width = 80;
      break;
    case 70:
      healthBar1.width = 70
      break;
    case 60:
      healthBar1.width = 60;
      break;
    case 50:
      healthBar1.width = 50
      break;
    case 40:
      healthBar1.width = 40;
      break;
    case 30:
      healthBar1.width = 30;
      break;
    case 20:
      healthBar1.width = 20
      break;
    case 10:
      healthBar1.width = 10
      break;
    case 0:
      healthBar1.width = 0;
      break; 
    default:
      healthBar1.width = 0;
      break;
  }
  
  switch (player2.health)
  {
    case 100:
      healthBar2.x = 924;
      break;
    case 90:
      healthBar2.x = 934;
      break;
    case 80:
      healthBar2.x = 944;
      break;
    case 70:
      healthBar2.x = 954;
      break;
    case 60:
      healthBar2.x = 964;
      break;
    case 50:
      healthBar2.x = 974;
      break;
    case 40:
      healthBar2.x = 984;
      break;
    case 30:
      healthBar2.x = 994;
      break;
    case 20:
      healthBar2.x = 1004;
      break;
    case 10:
      healthBar2.x = 1014;
      break;
    case 0:
      healthBar2.x = 1024;
      break;
    default:
      healthBar2.x = 1024;
      break;
  }
}


