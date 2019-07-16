const bycrpt = require('bcrypt')

module.exports = async function (req, res) {
    const payload = req.body
    const username = payload.username
    const password = payload.password

    /**
     * for the sake of simplicity save the hased password for later comparison
     */
    const savedHashsedPass = `$2b$10$PIF61MTMjbMd7HGo5DNW7.ooNXBdH78kIcnUVtrTT.7uha2P0hnLW`

    /**
     * validate password
     */
    const isCorrectCredential = await bycrpt.compare(password, savedHashsedPass)

    if (!isCorrectCredential) {
        return res.status(401).send({
            message: 'Wrong username or password'
        })
    }

    return res.send({
        username: username || 'Username undefined',
        message: 'You are logged in'
    })
}