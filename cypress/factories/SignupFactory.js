var faker = require('faker')
var cpf = require ('gerador-validador-cpf')
export default {
    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '85999999999',
            address: {
                postalcode: '61621220',
                street: 'Rua Sabino Xavier',
                number: '313',
                details: 'apto 202',
                district: 'Jardim Icaraí',
                city_state: 'Caucaia/CE'
            },
             delivery_method: 'Moto',
             cnh: 'cnh-digital.jpg'
        }
        
        return data
    }
}