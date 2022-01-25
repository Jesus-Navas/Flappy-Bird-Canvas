class Footer {

    constructor(ctx, imgSource) {

        this.ctx = ctx
        this.width = 466
        this.height = 79

        this.image = new Image()
        this.image.src = imgSource

        this.posX = 0
        this.posY = 450

        this.velX = 2
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX + this.width, this.posY, this.width, this.height)
        this.ctx.drawImage(this.image, this.posX + this.width + this.width, this.posY, this.width, this.height)
        this.loop()
    }

    loop() {

        if (this.posX <= -this.width) {
            this.posX = 0
        }
        this.posX -= this.velX
    }

}