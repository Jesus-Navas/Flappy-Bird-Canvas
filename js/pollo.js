class Pollo {

    constructor(ctx, imgSource, keys) {

        this.ctx = ctx
        this.width = 46
        this.height = 32

        this.image = new Image()
        this.image.src = imgSource
        this.image.style = "transform:rotate(25deg)"
        this.image.frames = 3
        this.image.framesIndex = 0

        this.posX = 0
        this.posY = 252

        this.velX = 5
        this.velY = 0
        this.gravity = 0.3
        this.gravitySpeed = 0

        this.keys = keys

        this.angle = 0



        this.setListeners()
    }

    draw(framesCounter) {
        //image.width = 138
        //image.height = 32
        //https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage

        this.ctx.drawImage(

            this.image,//IMAGE

            //SOURCE
            this.image.framesIndex * (this.image.width / this.image.frames),//sx
            0,//sy
            this.image.width / this.image.frames,//sWidth
            this.image.height,//sHeight

            //POS EN CANVAS
            this.posX,//dx
            this.posY,//dy

            //TAMAÑO DE LO SELECCIONADO EN SOURCE
            this.width,//dWidth
            this.height//dHeight
        )

        this.flutter(framesCounter)

        this.moveX()


    }

    flutter(framesCounter) {


        this.angle += 1 * Math.PI / 180


        if (framesCounter % 5 == 0) {
            this.image.framesIndex++
        }
        if (this.image.framesIndex >= this.image.frames) {
            this.image.framesIndex = 0;
        }

    }
    moveX() {

        if (this.posX < 300) {

            this.posX += this.velX
        }
        else {
            this.gravitySpeed += this.gravity
            this.posY += this.gravitySpeed
        }

    }
    jump() {
        if (this.gravitySpeed >= 0) {

            this.gravitySpeed = -3
            this.gravitySpeed -= 3
            this.posY = this.posY - 3
        }
        else {

            this.gravitySpeed -= 3
            this.posY = this.posY - 3
        }

    }

    setListeners() {

        document.addEventListener("keydown", e => {

            switch (e.keyCode) {

                case this.keys.SPACE:

                    this.jump()
                    break;
            }
        })

        document.addEventListener("click", () => {
            this.jump()
        })
    }
}   