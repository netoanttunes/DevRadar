module.exports = function parseStringAsArray(arrayAsString) {

    return arrayAsString.split(',').map(tech => tech.trim()) //Splita o Array e o trim remove o espaçamento antes de depois da virgula
}