function StartLevel () {
	
}
input.onButtonPressed(Button.A, function () {
    player1.change(LedSpriteProperty.X, -1)
})
function EnemySpawner () {
    let list: number[] = []
    list.push(0)
    enemySpawnX = randint(0, 4)
}
function Initialization () {
    score = 0
    enemySpawnY = 0
    currentLevel = 0
    player1Y = 4
    player1X = 2
    maxLevel = 5
    player1 = game.createSprite(player1X, player1Y)
}
input.onButtonPressed(Button.B, function () {
    player1.change(LedSpriteProperty.X, 1)
})
function MusicIntro () {
    music.playMelody("C D E F E G B C5 ", 159)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # . # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # # . # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
let enemy1: game.LedSprite = null
let maxLevel = 0
let player1X = 0
let player1Y = 0
let currentLevel = 0
let enemySpawnY = 0
let score = 0
let enemySpawnX = 0
let player1: game.LedSprite = null
Initialization()
loops.everyInterval(4000, function () {
    EnemySpawner()
})
loops.everyInterval(500, function () {
    score += 1
    enemy1.change(LedSpriteProperty.Y, 1)
})
basic.forever(function () {
    if (enemy1.isTouching(player1)) {
        game.setScore(score)
        game.gameOver()
    } else if (player1.get(LedSpriteProperty.X) != enemy1.get(LedSpriteProperty.X) && player1.get(LedSpriteProperty.Y) == enemy1.get(LedSpriteProperty.Y)) {
    	
    }
})
