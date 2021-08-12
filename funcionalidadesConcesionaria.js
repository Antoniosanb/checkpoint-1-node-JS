const autos = require('./autos');
const fs = require ('fs')
const clientes = require ('./personas');
//const personas = require('./personas');

const concesionaria = {
    autos: autos,
    buscarAuto: function(patente){
        let buscarAutoXPatente=null
        for (let i = 0; i<autos.length; i++){
            if (autos[i].patente==patente){
                buscarAutoXPatente=autos[i]
            }
        }
        return buscarAutoXPatente
    },
    venderAuto: function (patente){
         let patenteEncontrada=this.buscarAuto(patente);
         if (patenteEncontrada!=null){
             patenteEncontrada.vendido=true
         }
    }, 

    autosParaLaVenta: function () {
        this.autos=autos.filter(autos=> autos.vendido==false)
        return this.autos
    },

    autosNuevos: function(){
        let nuevos=this.autosParaLaVenta()
        nuevos=nuevos.filter(nuevos=>nuevos.km<100)
        return nuevos
    },

    listaDeVentas: function (){
        let autosVendidos = autos.filter(autos=>autos.vendido==true)
        let listaPreciosAutosVendidos = [0]
         autosVendidos.forEach(autosVendidos=>{
             listaPreciosAutosVendidos.pop()
            listaPreciosAutosVendidos.push (autosVendidos.precio)
            //console.log (autosVendidos.precio)
         }) 
        return listaPreciosAutosVendidos
    },

    totalDeVentas: function (){
        let listaPreciosAutosVendidos=this.listaDeVentas()
           return listaPreciosAutosVendidos.reduce ((acum,precio)=> acum+precio)
    },
    
    puedeComprar: function (buscarAuto, persona={nombre, capacidadDePagoEnCuotas, capacidadDePagoTotal}){
        let autoConsultado = this.buscarAuto(buscarAuto)
        let montoXCuota = autoConsultado.precio/autoConsultado.cuotas
        console.log(montoXCuota)
        if (autoConsultado.precio<=persona.capacidadDePagoTotal&&montoXCuota<=persona.capacidadDePagoEnCuotas){
            this.venderAuto
            return true
        }else {
            return false
        }
       
    },

    autosQuePuedeComprar: function (persona={nombre, capacidadDePagoEnCuotas, capacidadDePagoTotal}){
        let autosXComprar;
        let autosEnVenta= this.autosParaLaVenta()
        autosXComprar= autosEnVenta.filter(autosEnVenta=>this.puedeComprar(autosEnVenta.patente,persona))
           //autosXComprar= this.puedeComprar(autosEnVenta.patente,persona)
        //this.puedeComprar(autosEnVenta.patente, persona)
        
        return autosXComprar
    }
        
}
        

//console.log (concesionaria.buscarAuto('JJKd1163'))
//console.log (autos)
//concesionaria.venderAuto('JJK1163')

//console.log (concesionaria.autos)
//console.log (concesionaria.autosParaLaVenta());
//console.log (autos)
//console.log (autos)
//console.log (concesionaria.autosNuevos())
//console.log (concesionaria.listaDeVentas())
//console.log (concesionaria.totalDeVentas())
//console.log (concesionaria.puedeComprar('dfgdf', {nombre:'Antonio',capacidadDePagoEnCuotas: 1000000,capacidadDePagoTotal: 100000000}))
console.log (concesionaria.autosQuePuedeComprar({nombre:'Antonio',capacidadDePagoEnCuotas: 100000,capacidadDePagoTotal: 100000}))