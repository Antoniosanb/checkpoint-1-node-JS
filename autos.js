const fs = require ('fs')
let autos = [
    {
        marca: 'Ford',
        modelo: 'Fiesta', 
        precio: 150000, 
        km: 200,
        color: 'Azul', 
        cuotas: 12, 
        anio: 2019, 
        patente: 'APL123', 
        vendido: false
    },

    {
        marca: 'Toyota',
        modelo: 'Corola', 
        precio: 100000, 
        km: 0,
        color: 'Blanco', 
        cuotas: 14, 
        anio: 2019, 
        patente: 'JJK1163', 
        vendido: false
    }
]

module.exports = autos