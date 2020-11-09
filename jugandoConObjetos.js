//¿Cómo harías print/log de la edad de John?
//¿Cómo harías print/log del nombre del primer objeto?
//¿Cómo harías print/log del nombre y la edad de cada usuario utilizando 
//un for loop? Tu output debería verse algo como esto
//¿Cómo harías para imprimir el nombre de los mayores de edad?

var users = [
    {name: "Michael",age:37},
    {name: "John",age:30},
    {name: "David",age:27},  
];

    console.log(users[1].age);
    console.log(users[0].name);

    function loops(array){
        for(var i=0;i<array.length;i++){
            console.log(array[i].name +" "+(array[i].age));
           // console.log(array[i].name);
        }
    }
    loops(users);

    function iterar(array){
        for(users of array){
            console.log(users.name +" "+  users.age);
        }
    }
    iterar(users)
    