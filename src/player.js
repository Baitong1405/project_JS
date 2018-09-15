import GameObject from './gameobject'
import Renderable from './renderable';
import playerImg from './img/player.png'

export default class Player extends GameObject {
    constructor(engine, x, y) {
        super();

        this.engine = engine

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

    translate(x, y) {
        let collider = this.engine.getCollision(
            this.position[0] + x + this.renderables[0].subWidth /2,
            this.position[1] + y + this.renderables[1].subHeight -10)

            if(collider !== false) {
                x = 0
                y = 0
            }
        super.translate(x, y)
    }

    draw(ctx) {
        ctx.save()
        ctx.translate(this.position[0], this.position[1])

        this.renderables[this.facing].draw(ctx)
        ctx.restore()

        super.draw(ctx)
    }
}