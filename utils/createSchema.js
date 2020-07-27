// obtener modelos
const db = require('../app/models');

async function createSchema() {
  console.log('Iniciando la creacion de tablas');
  console.log('-----------------------------');
  try {
    //Definicion de modelos en orden de creacion
    await db.Cliente.sync({force: true});
    // await db.Categoria.sync({force: true});
    // await db.ClienteSL.sync({force: true});
    // await db.Producto.sync({force: true});
    // await db.Mesa.sync({force: true});
    // await db.Venta.sync({force: true});
    // //muchos a muchos
    // await db.VentaDetalle.sync({force: true});

  } catch(err) {
    console.log('ERROR: ', err);
  }
  console.log('-----------------------------');
  console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();