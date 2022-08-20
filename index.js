const express= require('express');

const Contenedor= require('./contenedor.js');

const app= express();
const PORT=8080;
const server=app.listen(PORT,()=>{
    console.log(`El servidor escucha en el puerto ${PORT}`);
});
const product= new Contenedor('./productos.txt');


    


app.get('/productos',async (req, res)=>{
    try{
        
        
        let todo=await product.getAll()
        res.send(todo);
    }catch(error){
        res.status(500).send(errorazo);
    }
    
})
app.get('/productosRandom',async (req,res )=>{
    

    try{
       
        let todo=await product.getAll()
        function random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
          }
        

        res.send(todo[random(0, todo.length-1)]);


}catch(error){
        res.status(500).send(errorazo);
    }

})
