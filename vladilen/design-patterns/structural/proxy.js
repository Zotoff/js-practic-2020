// позволяет избавляться от лишних запросов на сервер, например
function networkFetch(url) {
    return `${url} - ответ с сервера`
}

const cache = new Set() // сюда пишем данные, которые не будут повторяться

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0]
        if(cache.has(url)) {
            return `${url} - ответ из кеша`
        } else {
            cache.add(url)
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io')); // ответ уже пойдет из кеша
