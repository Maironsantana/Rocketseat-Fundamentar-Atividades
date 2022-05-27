const { EventEmitter } = require('events')

const event1 = new EventEmitter()

event1.on('saySomething', (message) => {
    console.log('Posso te ouvir:', message)
})

event1.emit('saySomething', 'Mairon')

