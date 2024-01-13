console.log('Script carregado');

function carregarConteudoExterno(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(data => callback(data))
        .catch(error => console.error('Erro ao carregar o conteúdo:', error));
}

function trocarConteudo(aba) {
    carregarConteudoExterno('pages/' + aba + '.html', function (conteudo) {
        document.getElementById('conteudo').innerHTML = conteudo;
        localStorage.setItem('abaAtiva', aba);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('linkHome').addEventListener('click', function () {
        trocarConteudo('home');
    });

    document.getElementById('linkSobre').addEventListener('click', function () {
        trocarConteudo('sobre');
    });

    document.getElementById('linkContato').addEventListener('click', function () {
        trocarConteudo('contato');
    });

    document.getElementById('linkSaibaMais').addEventListener('click', function () {
        trocarConteudo('sobre');
    });
});
;

function configurarAbaPadrao() {
    var abaAtiva = localStorage.getItem('abaAtiva');
    if (!abaAtiva) {
        abaAtiva = 'home';
    }
    trocarConteudo(abaAtiva);
}

document.addEventListener('DOMContentLoaded', function () {
    configurarAbaPadrao();
});



