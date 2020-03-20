const fs = require('fs')

const save = function (data) {
    fs.writeFileSync('data.json',JSON.stringify(data))
}

const load = function(filename) {
    return fs.readFileSync(filename, 'utf8')
}

module.exports = { save , load }
