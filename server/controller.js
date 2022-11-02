const path = require('path');

module.exports = {
    deliverHome: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    },
    deliverJS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.js'))
    },
    deliverCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.css'))
    }
}