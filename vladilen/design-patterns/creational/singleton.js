// Когда есть класс и в приложении может быть один его инстанс
class Database {
    constructor(data) {
        if(Database.exists) {
            return Database.instance //если класс уже был ранее инициализирован, останавливаем создание нового и возвращаем старый
        } 
        Database.instance = this, //заносим поле в контекст класса
        Database.exitst = true, //инициализируем класс
        this.data = data
    }
    getData() {
        return this.data
    }
}

const Mongo = new Database("MongoDB")
console.log(Mongo.getData())

const MySQL = new Database("MySQL")
console.log(MySQL.getData())