// возможность добавлять функционал для существующих классов
// создаем базовый класс
class Server {
    constructor(ip, port) {
        this.ip = ip,
        this.port = port
    }
    get url() {
        return `https://${this.ip}:${this.port}`
    }
}

// создаем декоратор, принимает инстанс класса и возвращает обратно
function aws(server) {
    server.isAWD = true,
    server.awsINFO = function(){
        return server.url
    }
    return server
}

const s1 = aws(new Server('192.168.1.1', '8080'));
console.log(s1.awsINFO());