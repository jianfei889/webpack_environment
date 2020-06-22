
var data = require('./data/data.json')

module.exports = function(){

    let hello = document.createElement('div')
    hello.textContent = `${data.name} : ${data.desc}`
    return hello
}