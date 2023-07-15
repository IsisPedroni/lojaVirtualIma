let vetorObj = [

    {'cod':'1', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/1.jpg', 'categoria':'feminino'},
    {'cod':'2', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/2.jpg', 'categoria':'feminino'},
    {'cod':'3', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/3.jpg', 'categoria':'feminino'},
    {'cod':'4', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/4.jpg', 'categoria':'feminino'},
    {'cod':'5', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/5.jpg', 'categoria':'feminino'},
    {'cod':'6', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/feminino/6.jpg', 'categoria':'feminino'},

    {'cod':'1', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/1.jpg', 'categoria':'masculino'},
    {'cod':'2', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/2.jpg', 'categoria':'masculino'},
    {'cod':'3', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/3.jpg', 'categoria':'masculino'},
    {'cod':'4', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/4.jpg', 'categoria':'masculino'},
    {'cod':'5', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/5.jpg', 'categoria':'masculino'},
    {'cod':'6', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/masculino/6.jpg', 'categoria':'masculino'},

    {'cod':'1', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/1.jpg', 'categoria':'masculino'},
    {'cod':'2', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/2.jpg', 'categoria':'masculino'},
    {'cod':'3', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/3.jpg', 'categoria':'masculino'},
    {'cod':'4', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/4.jpg', 'categoria':'masculino'},
    {'cod':'5', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/5.jpg', 'categoria':'masculino'},
    {'cod':'6', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/6.jpg', 'categoria':'masculino'},
    {'cod':'6', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/6.jpg', 'categoria':'masculino'},
    {'cod':'6', 'preço':'139,00', 'produto':'blusa xadrez', 'imagem':'../img/infantil/6.jpg', 'categoria':'masculino'}

]


function carregar() {
    var content = '';
    for (var i = 0; i < vetorObj.length; i++) {
        var produto = vetorObj[i];
        content += '<div class="card" style="width: 17rem;">';
        content += '<img src="' + produto.imagem + '" class="card-img-top" alt="Imagem ' + produto.cod + '">';
        content += '<div class="card-body">';
        content += '<h5 class="card-title">' + produto.produto + '</h5>';
        content += '<p class="card-text">' + produto.preço + '</p>';
        content += '<a href="#" class="btn btn-primary">Comprar</a>';
        content += '</div>';
        content += '</div>';
    }
    document.getElementById('produtos-container').innerHTML = content;
}
