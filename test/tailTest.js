const tail = require('../tail')
const assertEqual = require('../assertEqual')

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 2);