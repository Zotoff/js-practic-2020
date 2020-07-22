// создает более простой интерфейс для взаимодействия с классами. Пример - jQuery

class Complaints {
    constructor(){
        this.complaint = []
    }
    reply(complaint) {

    }
    add(complaint){
        this.complaint.push(complaint)
        return this.reply(complaint)
    }
}

// создаем фасады

class ProductComplaint extends Complaints {
    reply({id, customer, details}) {
        return `Product: ${id}:${customer} - ${details}`
    }
}

class ServiceComplaint extends Complaints {
    reply({id, customer, details}) {
        return `Service: ${id}:${customer} - ${details}`
    }
}

// создаем класс для работы

class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now()
        let complaint

        if(type == 'service') {
            complaint = new ServiceComplaint
        } else {
            complaint = new ProductComplaint
        }

        return complaint.add({id, customer, details})
    }
}

const registry = new ComplaintRegistry;

console.log(registry.register('Paul', 'service', 'Service does not work'));