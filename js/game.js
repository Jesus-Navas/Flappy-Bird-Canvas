
const game = {

    canvas: undefined,
    ctx: undefined,
    width: 900,
    height: 504,
    FPS: 60,
    framesCounter: 0,

    background: undefined,
    obstacles: [],

    keys: {
        SPACE: 32
    },

    init() {

        this.canvas = document.getElementById("my-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.setCanvasDimensions()
        this.start()
    },

    setCanvasDimensions() {

        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    start() {

        this.background = new Background(this.ctx, this.canvas.width, this.canvas.height, "../images/bg.png")
        this.footer = new Footer(this.ctx, "../images/game-bg-footer.png")
        this.pollo = new Pollo(this.ctx, "../images/bird.png", this.keys)

        this.interval = setInterval(() => {

            this.framesCounter > 5000 ? this.framesCounter = 0 : this.framesCounter++

            this.clear()
            this.drawAll()
            this.generateObstacle()
            this.destroyObstacle()
            this.isCollisionTop() ? this.gameOver() : null
            this.isCollisionBottom() ? this.gameOver() : null
            this.isCollisionFooter() ? this.gameOver() : null

        }, 1000 / this.FPS)
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    },

    drawAll() {

        this.background.draw()
        this.obstacles.forEach(elem => elem.draw())
        this.footer.draw()
        this.pollo.draw(this.framesCounter)
    },

    generateObstacle() {

        if (this.framesCounter % 200 == 0) {

            this.obstacles.push(this.obstacle = new Obstacle(this.ctx))
        }

    },

    destroyObstacle() {

        this.obstacles = this.obstacles.filter(obs => obs.posX >= -138)
    },

    isCollisionTop() {

        return this.obstacles.some(obs => {
            return (

                ((this.pollo.posX + this.pollo.width) > obs.posX + 10 &&
                    this.pollo.posX <= obs.posX + obs.w &&
                    (this.pollo.posY <= obs.posBottomY - 129))

            )
        })

    },
    isCollisionBottom() {

        return this.obstacles.some(obs => {
            return (

                ((this.pollo.posX + this.pollo.width) > obs.posX &&
                    this.pollo.posX <= obs.posX + obs.w &&
                    ((this.pollo.posY + this.pollo.height) >= obs.posBottomY))

            )
        })

    },
    isCollisionFooter() {

        if (this.pollo.posY + this.pollo.height >= this.footer.posY + 8) {

            return true
        }

    },

    gameOver() {
        clearInterval(this.interval)
    }

}
