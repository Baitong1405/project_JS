import GameObject from './gameobject'
import Renderable from './renderable';
import playerImg from './img/player.png'

export default class Player extends GameObject {
    constructor(x, y) {
        super();

        this.position = [x, y]

        this.facing = 0

        this.renderables = [
        new Renderable(playerImg, 0, 0, 4, 4, 5),
        new Renderable(playerImg, 13, 2, 4, 4, 5),
        new Renderable(playerImg, 1, 2, 4, 4, 5),
        new Renderable(playerImg, 5, 2, 4, 4, 5),
        new Renderable(playerImg, 9, 2, 4, 4, 5),

        new Renderable(playerImg, 12, 0, 4, 4, 5),
        new Renderable(playerImg, 4, 0, 4, 4, 5),
        new Renderable(playerImg, 8, 0, 4, 4, 5)
        
        ]
    }

    update(engine, dt) {
        super.update(engine, dt)
        let collider = engine.getCollision(
            this.position[0] + this.renderables[0].subWidth / 2, 
            this.position[1] + this.renderables[0].subHeight)

        if(collider !== false) {
            this.position[0] = this.lastPosition[0]
            this.position[1] = this.lastPosition[1]
        }
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.position[0], this.position[1])

        this.renderables[this.facing].draw(ctx)
        ctx.restore()

        super.draw(ctx)
    }
}