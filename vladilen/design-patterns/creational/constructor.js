/*Old syntax*/

// function Server(name, ip) {
//     this.name = name;
//     this.ip = ip;
// }

// Extending the prototype
// Server.prototype.getUrl = function(){
//     return `https://${this.ip}:80`
// }
// const aws = new Server('AWS', '82.21.21.32');
// console.log(aws.getUrl());

// New syntax
class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl(){
        return `https://${this.ip}:80`
    }
}

const aws = new Server('AWS', '82.21.21.32'); // constructor
console.log(aws.getUrl());