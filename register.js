const bcrypt = require('bcrypt')
const saltRound = 10

module.exports = async function (req, res) {
    const payload = req.body
    const username = payload.username
    const password = payload.password
    const hashedPassword = await bcrypt.hash(password, saltRound)
    res.send({
        username: username,
        hashedPass: hashedPassword
    })
}