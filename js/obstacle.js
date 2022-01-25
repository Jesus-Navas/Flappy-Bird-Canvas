class Obstacle {
    constructor(ctx) {

        this.ctx = ctx
        this.imageBottom = new Image()
        this.imageBottom.src = '../images/obstacle_bottom.png'
        this.imageTop = new Image()
        this.imageTop.src = '../images/obstacle_top.png'
        this.posX = 1000
        this.posBottomY = Math.floor(Math.random() * (380 - 150)) + 150
        this.posTopY = -920 + this.posBottomY //920 -793(alto imagen) -> hueco de 127
        this.posYGap = this.posBottomY
        this.velX = 2
        this.w = 138

    }

    draw() {

        this.ctx.drawImage(this.imageBottom, this.posX, this.posBottomY, this.imageBottom.width, this.imageBottom.height)
        this.ctx.drawImage(this.imageTop, this.posX, this.posTopY, this.imageTop.width, this.imageTop.height)
        this.move()
    }

    move() {

        this.posX -= this.velX

    }

} 