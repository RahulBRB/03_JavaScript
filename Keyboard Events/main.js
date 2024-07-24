let ball = document.getElementById('float-circle');

function up(){
  ball.style.bottom = '250px';
}

function down(){
  ball.style.bottom = '50px';
}

document.addEventListener('keydown', up)
document.addEventListener('keyup', down)
