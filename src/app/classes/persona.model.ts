export class Persona{
    id: number;
    nombre: string;


    constructor(id: number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
    
    //metodo o comportamientos
    saludar(){
      console.log(this.nombre + " Esta saluando");
    }
   
}