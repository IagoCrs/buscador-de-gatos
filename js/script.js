meusGatos = {
    gato: [
        {
            "id": 1,
            "nome": "Chico",
            "descricao": "O Chico cansou de ser gato e virou dinossauro.",
            "fotoUrl": "images/gato-01.jpg",
            "linkExterno": "https://www.instagram.com/canseidesergato/"
        },

        {
            "id": 2,
            "nome": "Hamilton",
            "descricao": "Hamilton é o gato mais hipster que você vai ver hoje.",
            "fotoUrl": "images/gato-02.jpg",
            "linkExterno": "https://www.instagram.com/hamilton_the_hipster_cat/"
        },

        {
            "id": 3,
            "nome": "Nala",
            "descricao": "Nala é uma gatinha muito simples.",
            "fotoUrl": "images/gato-03.jpg",
            "linkExterno": "https://www.instagram.com/nala_cat/"
        },
    ]
}

var cardGato = document.getElementById("box");
var btn = document.getElementById("btn");


function getGato() {
    var inputGato = document.getElementById('myInput').value.toLowerCase();

    for(var i = 0; meusGatos.gato.length > i; i++) {

        var cat = meusGatos.gato[i];

        if(inputGato == cat.nome.toLowerCase()){
            cardGato.querySelector('h1').innerHTML = cat.nome
            cardGato.querySelector('p').innerHTML = cat.descricao
            cardGato.querySelector('img').setAttribute("src", cat.fotoUrl)
            cardGato.querySelector('.external-link').setAttribute("href", cat.linkExterno)
            
            return ;
        } else {
            console.log('Gato não encontrado')
        }
    }
}

btn.addEventListener('click', getGato)