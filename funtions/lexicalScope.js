function outer(){
    let a=5;
    function inner(){
        console.log(a);
    }
    inner();
}

outer() //this is nothing but an lexical