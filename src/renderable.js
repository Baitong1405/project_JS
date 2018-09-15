
export default class Renderable {
    constructor(image, startFrame = 0, frameCount =0, frameX = 1, frameY = 1, speed = 1) {
        this.img = new Image();
        this.img.src = image

        this.frame = startFrame

        this.startFrame = startFrame
        this.frameCount = frameCount

        this.frameX = frameX
        this.frameY = frameY

        this.subWidth = this.img.width / this.frameX
        this.subHeight = this.img.height / this.frameY

        this.speed = speed

        this.animeTime = new Date().getTime()
    }

    draw(ctx) {
        let t = new Date().getTime()

        if(t > this.animeTime) {
            this.frame++
            this.animeTime = t + 1000 / this.speed
        }

        if(this.frame > this.startFrame + this.frameCount) {
            this.frame = this.startFrame
        }

        let posX = (this.frame % this.frameX) * this.subWidth
        let posY = Math.floor(this.frame / this.frameX) * this.subHeight
        ctx.drawImage(this.img, posX, posY, this.subWidth, this.subHeight, 0, 0, this.subWidth, this.subHeight)
    }
}