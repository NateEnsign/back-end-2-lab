const houses = require('./db.json')

let newHouseId = 4

module.exports = {
    getHouse: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        let index = houses.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body

        let newHouse = {
            id: newHouseId,
            address,
            price,
            imageURL,
        }

        houses.push(newHouse)
        res.status(200).send(houses)
    },
    updateHouse: (req, res) => {
        let id = req.params.id
        let type = req.body.type
        let index = houses.findIndex(element => element.id === +id)
        if (type === 'plus'){
            houses[index].price += 10000
            res.status(200).send(houses)
        }else if (type === 'minus'){
            houses[index].price -= 10000
            res.status(200).send(houses)
        }else{
            res.sendStatus(400)
        }
    },
}
