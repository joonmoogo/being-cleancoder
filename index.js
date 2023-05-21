let person = {
    a:2,
    b:3,
    name:'joon',
    greeting : function(){
        console.log(this.name);
    },
}

export default person