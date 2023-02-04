function newCulinaria() {
  window.location.assign("https://teste.marcelachan.repl.co/#culinaria");
}


/*document.querySelector('#opcao1').addEventListener('click', function(){
  //Fazer algo
});

Dê um olhada no exemplo do Javascript abaixo.
Você pode tanto incluir um < a >, no ícone interno, como você pode usar um:

document.querySelector('#idDoBotao').addEventListener('click', function(){
//Fazer algo
});*/


/*PLAYLIST*/
  function init()
{
    document.addEventListener('click', function(evt) { if (evt.target.tagName.toLowerCase() == 'li') { play(evt.target); } }, false);
}

function skip()
{
}

function play(elem)
{
    var audio = document.getElementById('audio');
    audio.src = elem.textContent + '.mp3';
    audio.play();
    elem.className = 'playing';
    skip = function()
    {
            elem.className = '';
            if (elem.nextElementSibling)
            {
                play(elem.nextElementSibling);
            }
    }
}

