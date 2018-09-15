import Renderable from "./renderable";
import Box from "./box";

export default class GameObject {
    constructor() {
        this.position = [0, 0]
        this.lastPosition = [0, 0]
        this.children = []
    }

    translate(x, y) {
        this.position[0] += x
        this.position[1] += y
    }

    addChild(child) {
        this.children.push(child)
    }

    update(engine, dt) {

    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.position[0], this.position[1])


        this.children.forEach(child => {
            if(child instanceof GameObject) {
                child.draw(ctx)
            }
            if(child instanceof Renderable) {
                child.draw(ctx)
            }
            if(child instanceof Box) {
                child.draw(ctx)
            }
        });

        ctx.restore()
        this.lastPosition[0] = this.position[0]
        this.lastPosition[1] = this.position[1]
    }
}