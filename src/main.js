import Engine from "./engine"
import Player from './player'
import Map from "./map";

import mapSpr from './maps/sprite_v2.png'
import map1 from './maps/json/map1.json'
import map2 from './maps/json/map2.json'
import map3 from './maps/json/map3.json'
import map4 from './maps/json/map4.json'
import map5 from './maps/json/map5.json'
import map6 from './maps/json/map6.json'
import map7 from './maps/json/map7.json'
import map8 from './maps/json/map8.json'
import map9 from './maps/json/map9.json'
import map10 from './maps/json/map10.json'
import { Z_PARTIAL_FLUSH } from "zlib";

let engine = new Engine();

let hp = 3
let mapJ = map1
let ans1 
let ans2 
let ans3 
let ans4 

//engine.phy = true

let map = new Map(mapJ, mapSpr)
engine.addObject(map)
engine.addColliders(map.getColliders())

let player = new Player(engine, 50, 220);
engine.addObject(player)

engine.update = (dt) => {
    let walkSpeed = 150

    //RUN
    if(engine.input.isKeyDown("ShiftLeft") || engine.input.isKeyDown("ShiftRight")) {
        walkSpeed = 350
    }

    //walk
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

    //stop walk
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

        //Show question
        if(
            player.position[0] > 350 &&
            player.position[0] < 450 &&
            player.position[1] > 50  &&
            player.position[1] < 100 ) {

                document.getElementById('showQuest').style.display = 'block'
            }
        else {
                document.getElementById('showQuest').style.display = 'none'
        }

    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Q1
    if(mapJ == map1) {

        // Question here
        document.getElementById('qHere').innerHTML = "1. ภาษา HTML มีความหมายตรงกับข้อใด"
        document.getElementById('ans1').innerHTML = "1) เป็นภาษาที่อธิบายถึงรายละเอียดของโครงสร้างและแบบของข้อมูล"
        document.getElementById('ans2').innerHTML = "2) เป็นภาษาโปรแกรมเชิงวัตถุ"
        document.getElementById('ans3').innerHTML = "3) เป็นภาษาพื้นฐานของการพัฒนาเว็บไซต์โดยเฉพาะ"
        document.getElementById('ans4').innerHTML = "4) เป็นภาษาที่ให้การชัดเจนในการแสดงรายละเอียดเกี่ยวกับข้อมูล"

        // Answer here
        ans1 = false
        ans2 = false
        ans3 = true
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map2
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map2
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map2
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map2
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Q2
    if(mapJ == map2) {

        // Question here
        document.getElementById('qHere').innerHTML = "2. ข้อใดกล่าวไม่ถูกต้อง"
        document.getElementById('ans1').innerHTML = "1) คำสั่งใน HTML เรียกว่า Tag"
        document.getElementById('ans2').innerHTML = "2) Tag ออกเป็น Tag เดียว และ Tag คู่"
        document.getElementById('ans3').innerHTML = "3) Tag จะอยู่ในเครื่องหมาย < > หรือ [ ] ก็ได้"
        document.getElementById('ans4').innerHTML = "4) ที่กล่าวมาถูกทุกข้อ"

        // Answer here
        ans1 = false
        ans2 = false
        ans3 = true
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map3
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map3
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map3
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map3
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


     /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Q3
    if(mapJ == map3) {

        // Question here
        document.getElementById('qHere').innerHTML = "3. ข้อใดใช้ Attribute ไม่ถูกต้อง"
        document.getElementById('ans1').innerHTML = "1) < tag attributename='value' >" 
        document.getElementById('ans2').innerHTML = "2) < tag attributename='value' > < /tag attributename >"
        document.getElementById('ans3').innerHTML = "3) < tag attributename='value' attribute2='value'>"
        document.getElementById('ans4').innerHTML = "4) < tag attributename='value' > Content < /tag >"

        // Answer here
        ans1 = false
        ans2 = true
        ans3 = false
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map4
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map4
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map4
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map4
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


     /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Q4
    if(mapJ == map4) {

        // Question here
        document.getElementById('qHere').innerHTML = "4. ข้อใดประกาศชนิดของ HTML5 ได้ถูกต้อง"
        document.getElementById('ans1').innerHTML = "1) < !DOCTYPE html >" 
        document.getElementById('ans2').innerHTML = "2) < !DOCTYPE >"
        document.getElementById('ans3').innerHTML = "3) < !DOCTYPE html5 >"
        document.getElementById('ans4').innerHTML = "4) ถูกทุกข้อ"

        // Answer here
        ans1 = true
        ans2 = false
        ans3 = false
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map5
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map5
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map5
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map5
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Q5
    if(mapJ == map5) {

        // Question here
        document.getElementById('qHere').innerHTML = "5. ส่วนใดที่ใช้ในการแสดงชื่อเรื่องของเว็บ"
        document.getElementById('ans1').innerHTML = "1) < html> < /html>" 
        document.getElementById('ans2').innerHTML = "2) < body> < /body>"
        document.getElementById('ans3').innerHTML = "3) < title> < /title>"
        document.getElementById('ans4').innerHTML = "4) < head> < /head>"

        // Answer here
        ans1 = false
        ans2 = false
        ans3 = true
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map6
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map6
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map6
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map6
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Qุ6
    if(mapJ == map6) {

        // Question here
        document.getElementById('qHere').innerHTML = "6. ส่วนใดที่ใช้ในการแสดงเนื้อหาของเว็บ"
        document.getElementById('ans1').innerHTML = "1) < html> < /html>" 
        document.getElementById('ans2').innerHTML = "2) < body> < /body>"
        document.getElementById('ans3').innerHTML = "3) < title> < /title>"
        document.getElementById('ans4').innerHTML = "4) < head> < /head>"

        // Answer here
        ans1 = false
        ans2 = true
        ans3 = false
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map7
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map7
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map7
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map7
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Qุ7
    if(mapJ == map7) {

        // Question here
        document.getElementById('qHere').innerHTML = "7. ข้อใดคือคำสั่งในการกำหนดโครงสร้างของเอกสาร HTML"
        document.getElementById('ans1').innerHTML = "1) < html> < /html>" 
        document.getElementById('ans2').innerHTML = "2) < body> < /body>"
        document.getElementById('ans3').innerHTML = "3) < title> < /title>"
        document.getElementById('ans4').innerHTML = "4) ถูกทุกข้อ"

        // Answer here
        ans1 = false
        ans2 = false
        ans3 = false
        ans4 = true

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map8
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map8
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map8
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map8
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Qุ8
    if(mapJ == map8) {

        // Question here
        document.getElementById('qHere').innerHTML = "8. ข้อใดไม่ใช่โปรแกรม Text Editor"
        document.getElementById('ans1').innerHTML = "1) Safari" 
        document.getElementById('ans2').innerHTML = "2) Notepad++"
        document.getElementById('ans3').innerHTML = "3) Notepad"
        document.getElementById('ans4').innerHTML = "4) Gedit"

        // Answer here
        ans1 = true
        ans2 = false
        ans3 = false
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map9
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map9
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map9
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map9
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Qุ9
    if(mapJ == map9) {

        // Question here
        document.getElementById('qHere').innerHTML = "9. ข้อใดไม่ใช่ Web Browser"
        document.getElementById('ans1').innerHTML = "1) Opera" 
        document.getElementById('ans2').innerHTML = "2) Safari"
        document.getElementById('ans3').innerHTML = "3) Windows Explorer"
        document.getElementById('ans4').innerHTML = "4) Internet Explorer"

        // Answer here
        ans1 = false
        ans2 = false
        ans3 = true
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    /**
     * TODO:
     * - Just highlight for easy to find
     */
    // Qุ10
    if(mapJ == map10) {

        // Question here
        document.getElementById('qHere').innerHTML = "10. ภาษา HTML เป็นภาษาประเภทใด"
        document.getElementById('ans1').innerHTML = "1) Markup Lanuage" 
        document.getElementById('ans2').innerHTML = "2) Mark"
        document.getElementById('ans3').innerHTML = "3) Toblo colk"
        document.getElementById('ans4').innerHTML = "4) Bilyni"

        // Answer here
        ans1 = true
        ans2 = false
        ans3 = false
        ans4 = false

        // Door1
        if(
            player.position[0] > 100 &&
            player.position[0] < 177 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans1) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door2
        if(
            player.position[0] > 235 &&
            player.position[0] < 310 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans2) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door3
        if(
            player.position[0] > 490 &&
            player.position[0] < 560 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans3) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

        // Door4
        if(
            player.position[0] > 630 &&
            player.position[0] < 700 &&
            player.position[1] > 50  &&
            player.position[1] < 100 &&
            engine.input.isKeyDown("Enter")) {

                if(ans4) {
                    mapJ = map10
                    let map = new Map(mapJ, mapSpr)
                    engine.addObject(map)

                    player.position[0] = 50
                    player.position[1] = 220
                    player.facing = 4

                    engine.addObject(player)

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
                else {

                    /**
                     * FIXME:
                     * - can't create Helth system
                     * - because engine.input.isKeyDown() is loop
                     */

                }
            }

    }


    









}