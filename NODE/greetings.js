const getflagValue = require('./flags')

console.log('oi '+getflagValue('--name')+' '+getflagValue('--greeting'))