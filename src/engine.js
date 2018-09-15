import GameObject from "./gameobject";
import Input from './input'
import Box from "./box";

export default class Engine {
    constructor() {
        document.body.style.margin = "0px";
        document.body.style.overflow = "hidden";
        document.body.style.backgroundColor = "#231F20"
        this.canvas = document.createElement("canvas");
        //this.canvas.width = window.innerWidth;
        //this.canvas.height = window.innerHeight;
        this.canvas.width = 768
        this.canvas.height = 448
        this.canvas.style.display = "block"
        this.canvas.style.marginLeft = "auto"
        this.canvas.style.marginRight = "auto"
        this.canvas.style.marginTop = "15vh"
        document.body.appendChild(this.canvas);

        this.phy = false

        this.ctx = this.canvas.getContext("2d");
        this.ctx.imageSmoothingEnabled = false

        this.lastTime = new Date().getTime();

        this.objs = [];

        this.colliders = []

        this.input = new Input()

        window.requestAnimationFrame(this.loop.bind(this));
    }

    addObject(obj) {
        if(obj instanceof GameObject) {
            this.objs.push(obj)
        } else {
            console.error("invalid obj added. not GameObject")
        }
    }

    addColliders(colliders) {
        colliders.forEach(collider => {
        if(collider instanceof Box) {
            this.colliders.push(collider)
        } else {
            console.log("Collider is not a Box")
            }
        })
    }

    getCollision(x, y) {
        let val = false
        this.colliders.forEach(collider => {
            let result = collider.isInside(x, y)
            if(result === true) {
                val = collider
            }
        });
        return val
    }

    loop() {
        let time = new Date().getTime();
        let dt = (time - this.lastTime) / 1000;

        // Update
        if(this.update) 
            this.update(dt)
        
        this.objs.forEach(obj => {
            obj.update(this, dt);
         });
        

        this.ctx.fillStyle = "#231F20";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw
        this.objs.forEach(obj => {
            obj.draw(this.ctx);
        });

        if(this.phy) {
            this.colliders.forEach(collider => {
                collider.draw(this.ctx)
            })
        }

        this.lastTime = time;
        window.requestAnimationFrame(this.loop.bind(this));
    }
}