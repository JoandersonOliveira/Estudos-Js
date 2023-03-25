function carro(MaximumSpeed, delta) {
    //acelerar
    //retornar velocidade atual

    let currentSpeed = 0;

     this.speedUp = function () {
        if (currentSpeed + delta <= MaximumSpeed) {
            currentSpeed += delta;
        } else {
            currentSpeed = MaximumSpeed;
        }
    }

    this.getCurrentSpeed = function(){ //o método getCurrentSpeed() é público e retorna o atributo privado 'currentSpeed';
        return currentSpeed;
    }

}

const car = new carro(200, 5);

car.speedUp();
car.speedUp();
car.speedUp();
car.speedUp();

console.log(car.getCurrentSpeed());