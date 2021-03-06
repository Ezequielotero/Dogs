const { default: axios } = require('axios');
const { Router } = require('express');

const router = Router();



var detalles=[]

router.get(`/:idRaza`, async(req,res)=>{
    let resp= await axios.get('https://api.thedogapi.com/v1/breeds')
    for (let i = 0; i < resp.data.length; i++) {
        if (resp.data[i].id == req.params.idRaza) {
            detalles.push({
                name:resp.data[i].name,
                img: resp.data[i].image.url,
                temperament: resp.data[i].temperament,
                weight:resp.data[i].weight.metric,
                height:resp.data[i].height.metric,
                years:resp.data[i].life_span
            })
        }
    }
    res.json(detalles)
    detalles=[]
})


// async function bdd() {

//     let respDB = await Dog.findAll()
//     for (let ddb = 0; ddb < respDB.length; ddb++) {
//         let dogdb = await Dog.findOne({
//             where: {id: respDB[ddb].id,
//         },
//             include: [Temperament]
//         })
//             let dogTemps = []
//             for (let index = 0; index < dogdb.dataValues.temperaments.length; index++) {
//                 dogTemps.push(dogdb.dataValues.temperaments[index].name)
//             }
//             let dogTemps1 = dogTemps.join(' ')
//             perro.push({
//                 id:respDB[ddb].dataValues.id,
//                 name:respDB[ddb].dataValues.name,
//                 temperament:dogTemps1,
//                 weight:respDB[ddb].weight,
//                 height:respDB[ddb].height,
//                 years:respDB[ddb].years
//             })
//             perro2.push({
//                 id:respDB[ddb].dataValues.id,
//                 name:respDB[ddb].dataValues.name,
//                 temperament:dogTemps1,
//                 weight:respDB[ddb].dataValues.weight,
//                 height:respDB[ddb].dataValues.height,
//                 years:respDB[ddb].years
//             })

//     }
// }

let perro=[]
let perro2=[]

router.get('/', async(req,res)=>{
    if (!req.query.name) {
        perro=[]
        var resp= await axios.get('https://api.thedogapi.com/v1/breeds')
        for (let i = 0; i < resp.data.length; i++) {
            perro.push({
                name:resp.data[i].name,
                img: resp.data[i].image.url,
                temperament: resp.data[i].temperament,
                id: resp.data[i].id,
            })
        }
        res.json(perro)
        perro=[]
    }if(req.query.name){
        var resp2= await axios.get('https://api.thedogapi.com/v1/breeds')
        perro=[]
        for (let i = 0; i < resp2.data.length; i++) {
            if (resp2.data[i].name.toLowerCase().indexOf(req.query.name)!==-1) {
                perro.push({
                    name:resp2.data[i].name,
                    img: resp2.data[i].image.url,
                    temperament: resp2.data[i].temperament,
                    id: resp2.data[i].id,
                })
            }
    }if (perro.length===0) {
        res.status(404).send('not found')
    }else{
        res.json(perro)
    }
}
})
module.exports = router;