import Engine from "./engine"
import Player from './player'
import Map from "./map";

import testmap from './maps/testmap.json'
import mapTiles from './img/tile_1_3.png'

let engine = new Engine();

engine.phy = true

let map = new Map(testmap, mapTiles)
engine.addObject(map)
engine.addColliders(map.getColliders())

let player = new Player(50, 200);

engine.addObject(player)

engine.update = (dt) => {
    
    // Walk
    if(engine.input.isKeyDown("KeyW")) {
        player.translate(0, -100 * dt)
        player.facing = 1
    }
    if(engine.input.isKeyDown("KeyS")) {
        player.translate(0, 100 * dt)
        player.facing = 2
    }
    if(engine.input.isKeyDown("KeyA")) {
    player.translate(-100 * dt, 0)
    player.facing = 3
    }
    if(engine.input.isKeyDown("KeyD")) {
    player.translate(100 * dt, 0)
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

}