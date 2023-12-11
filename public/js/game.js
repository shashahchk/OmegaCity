// Establish a connection with Socket.IO server
var socket = io();

// Socket.IO event listeners can be added here
socket.on('someEvent', (data) => {
    console.log(data);
});

// Phaser game instance and logic
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    // Load assets
}

function create() {
    // Set up game
    // You can also use socket.io inside these functions
}

function update() {
    // Game loop
}
