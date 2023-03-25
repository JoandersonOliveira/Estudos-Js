const produto = require('./produto')

const prod1 = new produto('TV 32', 1000, 1460, 360)

const prod2 = new produto('Iphone 10', 2500, 5000, 460)

const prod3 = new produto('AirFryer', 400, 930, 160)

module.exports = {
    prod1,
    prod2,
    prod3
}

