//http://jsonplaceholder.typicode.com/users

//fetch('http://jsonplaceholder.typicode.com/users')
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.log(error));

fetch('http://jsonplaceholder.typicode.com/users')
.then(bobino => bobino.json())
.then(fraise =>  {
    let output = '<h2> Liste des Martiens</h2>'
    fraise.forEach(function(element){
        output += element.name +'-'
        output += element.email +'-'
        output += element.website +'<br/>'
        })
    document.getElementById('voiture').innerHTML = output
    
    console.log(fraise)
    })

    