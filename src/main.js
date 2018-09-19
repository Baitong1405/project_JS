import Engine from "./engine"
import Player from './player'
import Map from "./map";

import map_1_3 from './maps/map_1_3.json'
import mapTiles from './img/tile_1_3.png'

let engine = new Engine();

let mapNumber = 1;
let hp = 3
let mapJ
let ans1 =false
let ans2 = true
let ans3 = false
let ans4 = false

if(mapNumber == 1) {
    mapJ = map_1_3
}
else if (mapNumber > 1 && mapNumber < 2){
    mapJ = map_2
}

//engine.phy = true

let map = new Map(mapJ, mapTiles)
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

    //show question
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

    //door1
    if(
        player.position[0] > 100 &&
        player.position[0] < 177 &&
        player.position[1] > 50 &&
        player.position[1] < 100 &&
        engine.input.isKeyDown("Enter")) {

            if(ans1) {
                mapNumber += 0.15
                if(hp < 3) {
                    hp += 0.15
                }
            }
            else {
                hp -= 0.15
            }
            console.log(`MAP = ${mapNumber}`)
            console.log(`hp = ${hp}`)
            console.log("======================")

        }

    //door2
     if(
        player.position[0] > 235 &&
        player.position[0] < 310 &&
        player.position[1] > 50 &&
        player.position[1] < 100 &&
        engine.input.isKeyDown("Enter")) {

            if(ans2) {
                mapNumber += 0.15
                if(hp < 3) {
                    hp += 0.15
                }
            }
            else {
                hp -= 0.15
            }
            console.log(`MAP = ${mapNumber}`)
            console.log(`HP = ${hp}`)
            console.log("=====================")
        }

    //door3
    if(
        player.position[0] > 490 &&
        player.position[0] < 560 &&
        player.position[1] > 50 &&
        player.position[1] < 100 &&
        engine.input.isKeyDown("Enter")) {

            if(ans2) {
                mapNumber += 0.15
                if(hp < 3) {
                    hp += 0.15
                }
            }
            else {
                hp -= 0.15
            }
            console.log(`MAP = ${mapNumber}`)
            console.log(`HP = ${hp}`)
            console.log("=====================")
        }

        //door4
     if(
        player.position[0] > 630 &&
        player.position[0] < 700 &&
        player.position[1] > 50 &&
        player.position[1] < 100 &&
        engine.input.isKeyDown("Enter")) {

            if(ans2) {
                mapNumber += 0.15
                if(hp < 3) {
                    hp += 0.15
                }
            }
            else {
                hp -= 0.15
            }
            console.log(`MAP = ${mapNumber}`)
            console.log(`HP = ${hp}`)
            console.log("=====================")
        }
    

    

}