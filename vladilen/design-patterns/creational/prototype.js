// позволяет прототипировать объекты и дополнять их новыми свойствами

const car = {
    wheels: 4,
    init() {
        console.log(`I have ${this.wheels} wheels and my owner is ${this.owner}`)
    }
}

const carWithOwner = Object.create(car, {
    owner: {
        value: "Paul"
    }
})

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();