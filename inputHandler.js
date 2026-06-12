/*
Movement for player
Last modified on: May 18th, 2026
*/

let keys = 
{
  w: false,
  d: false,
  a: false,
  arrowU: false,
  arrowR: false,
  arrowL: false
}

window.addEventListener('keydown', (e) => {
    if (e.code == 'KeyW' && player1.grounded) {keys.w = true}
    if (e.code == 'KeyD') {keys.d = true}
    if (e.code == 'KeyA') {keys.a = true}
    if (e.code == 'ArrowUp' && player2.grounded) {keys.arrowU = true}
    if (e.code == 'ArrowRight') {keys.arrowR = true}
    if (e.code == 'ArrowLeft') {keys.arrowL = true}
})


window.addEventListener('keyup', (e) => {
    if (e.code == 'KeyW') {keys.w = false}
    if (e.code == 'KeyD') {keys.d = false}
    if (e.code == 'KeyA') {keys.a = false}
    if (e.code == 'ArrowUp') {keys.arrowU = false}
    if (e.code == 'ArrowRight') {keys.arrowR = false}
    if (e.code == 'ArrowLeft') {keys.arrowL = false}
})




