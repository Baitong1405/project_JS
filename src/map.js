import GameObject from "./gameobject";
import Renderable from "./renderable";
import Box from "./box";

export default class Map extends GameObject {
    constructor(mapJson, mapImg) {
        super();

        this.renderable = new Renderable(mapImg, 0, 540, 9, 60, 1)
        this.data = mapJson

        this.colliders = []

        this.data.layers.forEach(layer => {
            if(layer.type == "objectgroup") {
                layer.objects.forEach(obj => {
                    
                    this.colliders.push(new Box(obj.x, obj.y, obj.width, obj.height))
                })
            }
        })
    }

    getColliders() {
        return this.colliders
    }

    draw(ctx) {
        
        this.data.layers.forEach(layer => {

            if(layer.type == "tilelayer") {
            
            let x = 0
            let y = 0
            layer.data.forEach((value, index) => {
            
            x = index % layer.width
            y = Math.floor(index / layer.width)
            
            this.renderable.frame = value - 1

            ctx.save()
            ctx.translate(
                this.position[0] + x * this.renderable.subWidth,
                this.position[1] + y * this.renderable.subHeight)

            
            this.renderable.draw(ctx)

            ctx.restore()
            
            })
        }
        });
    
        super.draw(ctx)
    }
}