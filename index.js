const express= require('express');

const Contenedor= require('./contenedor.js');

const app= express();
const PORT=8080;
const server=app.listen(PORT,()=>{
    console.log(`El servidor escucha en el puerto ${PORT}`);
});

app.get('/productos',async (req, res)=>{
    try{
        const product= new Contenedor('./productos.txt');
        let todo= await product.getAll();
        
        res.send(`Los productos son ${todo}`);
    }catch(error){
        res.status(500).send(errorazo);
    }
    
})
app.get('/productosRandom',async (req,res )=>{
    try{
    const product= new Contenedor('./productos.txt');
    let todo=await product.getAll();
    
        function randomnum(x=1,y=todo.length) {
            return Math.random(x,y);
        }

        res.send(`Aqui se encuentra el producto random: ${todo[randomnum]}`);


}catch(error){
        res.status(500).send(errorazo);
    }

})