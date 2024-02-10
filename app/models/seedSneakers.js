// npm run seed

const mongoose = require('mongoose')
const Sneaker = require('./sneaker')
const db = require('../../config/db')

const startSneakers = [
    { 
        name: 'Onitzuka Tiger Mexico 66',
        brand: 'Onitsuka Tiger',
        colorway: 'Tiger Stripes',
        releaseYear: '1966',
        condition: 'mint'
    },
    { 
        name: 'HOKA Tor Ultra',
        brand: 'HOKA',
        colorway: 'Hot Sauce',
        releaseYear: '2018',
        condition: 'used'
    },
    { 
        name: 'Adidas Gazelle',
        brand: 'Adidas',
        colorway: 'Bold Orange',
        releaseYear: '1966',
        condition: 'used'
    },
    { 
        name: 'New Balance 1906',
        brand: 'New Balance',
        colorway: 'Dad Shoe',
        releaseYear: '1906',
        condition: 'beaters'
    }
]

// establish connection to db
mongoose.connect(db, { useNewUrlParser: true })
    // remove sneakers that don't have an owner
    .then(() => {
        Sneaker.deleteMany({ owner: null })
            .then(deletedSneakers => {
                console.log('deleted sneakers in seed script: ', deletedSneakers)

                Sneaker.create(startSneakers)
                    .then(newSneakers => {
                        console.log('new sneakers added to db: \n', newSneakers)
                        // close connection
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log('an error occured: \n', error)
                        // close connection
                        mongoose.connection.close()
                    })
            })        
            .catch(error => {
                console.log('an error occured: \n', error)

                // close mongoose connection upon receiving error
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log('an error occured: \n', error)

        // close mongoose connection upon receiving error
        mongoose.connection.close()
    })