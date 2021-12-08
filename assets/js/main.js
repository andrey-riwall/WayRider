var interval = 200;

var bg1 = document.querySelector('.bg-1');
var bg2 = document.querySelector('.bg-2');

var game = document.querySelector('.game');
var player = document.getElementById('player');
var move_direction = false;

engine();

// ENGINE
function engine() {
    startAnim();

    update();
}


// UPDATE
function update() {
    move();

    setTimeout(update, interval);
}


// BG
function startAnim() {
    bg1.classList.add('start');
    setTimeout(middleAnim, 3000);
}

function middleAnim() {
    bg1.classList.remove('start');
    bg1.classList.add('middle');
}


// MOVE
function move() {
    if (move_direction) {
        let classes = player.classList;
        if (move_direction === 'left') {
            if (classes.contains('pos-rr')) {
                classes.add('pos-r');
                classes.remove('pos-rr');
            } else if (classes.contains('pos-r')) {
                classes.add('pos-l');
                classes.remove('pos-r');
            } else if (classes.contains('pos-c')) {
                classes.add('pos-l');
                classes.remove('pos-c');
            } else if (classes.contains('pos-l')) {
                classes.add('pos-ll');
                classes.remove('pos-l');
            }
        }

        if (move_direction === 'right') {
            if (classes.contains('pos-ll')) {
                classes.add('pos-l');
                classes.remove('pos-ll');
            } else if (classes.contains('pos-l')) {
                classes.add('pos-r');
                classes.remove('pos-l');
            } else if (classes.contains('pos-c')) {
                classes.add('pos-r');
                classes.remove('pos-c');
            } else if (classes.contains('pos-r')) {
                classes.add('pos-rr');
                classes.remove('pos-r');
            }
        }
        move_direction = false;
    }
}

document.addEventListener('keypress', (e) => {
    let keycode = e.code;
    if(keycode == 'KeyA') {
        move_direction = "left";
    }
    if(keycode == 'KeyD') {
        move_direction = "right";
    }
})


// COLLISION
function MacroCollision(obj1,obj2){
    var XColl=false;
    var YColl=false;
  
    if ((obj1.x + obj1.width >= obj2.x) && (obj1.x <= obj2.x + obj2.width)) XColl = true;
    if ((obj1.y + obj1.height >= obj2.y) && (obj1.y <= obj2.y + obj2.height)) YColl = true;
  
    if (XColl || YColl) {
        return true;
    }
    return false;
}