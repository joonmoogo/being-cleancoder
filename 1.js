
class ValidationError extends Error{

    printCustomMessage(){
        return `Validation failed :(${this.message})`;
    }
}

// try{
//     throw new ValidationError('Not a valid number');
// }
// catch(error){
//     console.log(error);
// }


function getRectArea(width,height){
    if(isNaN(width)||isNaN(height)){
        throw new Error('Parameter is not a number');
    }
}

class Person{
    constructor(){
        this.name = 'mooki';
    }
}

try{
    throw new Person();
    
}catch(error){
    console.log('im mook');
}



// try{
//     getRectArea(10,'A');
// }catch(e){
//     console.error(e);
// }

// getRectArea(10,'A');