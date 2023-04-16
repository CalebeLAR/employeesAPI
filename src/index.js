const {Employee} = require('./models');
const Address = require('./models');

// Eagar Loading
 Employee.s(
// {
//   include: [{ 
//     model: Address, as: 'addresses',
//     attributes: {
//       exclude: ['number']
//     }
//   }]
// }
).then((ep)=> console.log(ep) );
// console.log(ep);
