const { promises: fs } = require('fs')

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }

    async save(data) {

        let objet = await this.getAll();
        let newId;
        if (objet.lenght == 0) {
            newId = 1
        } else {
            newId = objet[objet.length - 1].id + 1;
        }

        const newObj ={...data , id: newId}
        objet.push (newObj);


        try {
            await fs.writeFile(this.ruta, JSON.stringify(objet, null, 2))
            return newId
        } catch (error) {
            throw new Error(`Error al guardar: ${error}`)
        }

        

    }

    async getById(id) {
        const objetos= await this.getAll();

        const nuevoObjeto = objetos.find(elemento => elemento.id== id);
        return nuevoObjeto;
    }

    async getAll() {
        try {
           let objetos = await fs.readFile(this.ruta, 'utf-8');

            objetos = JSON.parse(objetos);

        } catch (error) {
           return []
        }
    }

    async deleteById(id) {

        const objetos= await this.getAll();

        const nuevoObjeto = objetos.filter(elemento => elemento.id !== id);
        if(nuevoObjeto.length === objetos.length){
            throw new Error('no se encontro el id')
        }
        try {
            await fs.writeFile(this.ruta, JSON.stringify(nuevoObjeto,null,2));
        } catch (error) {
            
        }

    }

    async deleteAll() {
        await fs.writeFile(`./${this.ruta}`, '');
    }
}
const contenedor = new Contenedor('./productos.txt');
module.exports = Contenedor
