class Calculadora {


    constructor(

        clasesacro,
    )
    {
        this.clasesacro=clasesacro
    }

    agregarclasesacro(claseacro){
        this.clasesacro.push(claseacro);
    }

    eliminarclasesacro(claseacro)
    {
        const index = this.clasesacro.findIndex(element=>element===claseacro);
        this.clasesacro.splice(index,1);
    }

    totalizar()
    {
        let suma=0;
       
        for(var i=0;i<this.clasesacro.length;i++)
        {

            let claseacro=this.clasesacro[i];
            suma+= parseFloat(claseacro.precio);
        }
        return suma;

    }


}