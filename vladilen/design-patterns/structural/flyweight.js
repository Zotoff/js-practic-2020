// чтобы могли эффективно передавать или работать с данными через объекты

class Car {
    constructor(model, price) {
        this.model = model,
        this.price = price
    }
}

class CarFactory {
    constructor() {
        this.cars = []
    }
    create(model, price) {
        const candidate = this.getCar(model)
        if(candidate) {
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar) // кешируем элемент, так что когда будет впоследствии создан похожий, он будет уже существовать
        return newCar
    }
    getCar(model) {
        return this.cars.find(car => car.model === model) // поиск в массиве автомобилей
    }
}

const factory = new CarFactory();
const bmw = factory.create('x6', 1000);
console.log(bmw);