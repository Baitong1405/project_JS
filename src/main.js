import Engine from "./engine"
import Player from './player'
import Map from "./map";

import map_1_3 from './maps/map_1_3.json'
import mapTiles from './img/tile_1_3.png'

let engine = new Engine();

//engine.phy = true

let map = new Map(map_1_3, mapTiles)
engine.addObject(map)
engine.addColliders(map.getColliders())

let player = new Player(engine, 50, 200);

engine.addObject(player)

engine.update = (dt) => {
    let walkSpeed = 150


    // Run
    if(engine.input.isKeyDown("ShiftLeft") || engine.input.isKeyDown("ShiftRight")) {
        walkSpeed = 350
    }
    
    // Walk
    if(engine.input.isKeyDown("KeyW")) {
        player.translate(0, -walkSpeed * dt)
        player.facing = 1
    }
    if(engine.input.isKeyDown("KeyS")) {
        player.translate(0, walkSpeed * dt)
        player.facing = 2
    }
    if(engine.input.isKeyDown("KeyA")) {
    player.translate(-walkSpeed * dt, 0)
    player.facing = 3
    }
    if(engine.input.isKeyDown("KeyD")) {
    player.translate(walkSpeed * dt, 0)
    player.facing = 4
    }


    // Stop walking
    if(!engine.input.isKeyDown("KeyW") && player.facing == 1) {
        player.facing = 5
    }
    if(!engine.input.isKeyDown("KeyS") && player.facing == 2) {
        player.facing = 0
    }
    if(!engine.input.isKeyDown("KeyA") && player.facing == 3) {
        player.facing = 6
    }
    if(!engine.input.isKeyDown("KeyD") && player.facing == 4) {
        player.facing = 7
    }

    if(
        player.position[0] > 350 &&
        player.position[0] < 450 &&
        player.position[1] > 50 &&
        player.position[1] < 100 ) {

            document.getElementById('showQuest').style.display = 'block';
        }
    else {
            document.getElementById('showQuest').style.display = 'none'
    }

}