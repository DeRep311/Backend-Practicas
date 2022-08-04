const Contenedor =require('./contenedor.js');

const produ1 =    {
    "title": "Cartuchera",
    "price": 250,
    "id": 1
  }
 const produ2 =    {
    "title": "Regla elastica",
    "price": 50,
    "id": 2
}
  
  const produ3 =   {
    "title": "Cartulina",
    "price": 150,
    "id": 3
  }

  const produ4 = {
    "title": "mousepad",
    "price": 1500,
    "id": 4
  }
  async function main(){
    const contenedor = new Contenedor('./productos.txt');

    console.log("Elimino todo")
    objeto =  await contenedor.deleteAll();

    console.log("Muestro productos");
    let productos =  await contenedor.getAll();
    console.log(productos)
    

    console.log("guardo un producto");
    let productoID = await contenedor.save(produ1);
    console.log(`producto ${productoID}`);
    

    console.log("Muestro Productos")
    let objeto =  await contenedor.getAll();
    console.log(objeto)
   

     console.log("busco la id")
     const resultado = await contenedor.getById(productoID);   
     console.log(`resultado ${resultado}`);
    

     console.log("elimino por la id")
     objeto =  await contenedor.deleteById(1);
     


  }



main ()