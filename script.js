// Função de Redirecionamento de Página dos Projetos

function ProjetoBr() {
    window.location.href = 'project-br.html'
}
function ProjetoPP() {
    window.location.href = 'project-pp.html'
}



let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('open-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('open-menu')
})

// Função do botão de download do CV

function downloadFile(filePath, fileName) {
    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
}

document.getElementById('resume').addEventListener('click',function() {
    var filePath = 'assets/pdf/Curriculo.pdf';
    var fileName = 'cv-jackson.pdf';
    downloadFile(filePath, fileName);
});

document.getElementById('resume-about').addEventListener('click',function() {
    var filePath = 'assets/pdf/Curriculo.pdf';
    var fileName = 'cv-jackson.pdf';
    downloadFile(filePath, fileName);
});

// Funcção para mandar mensagem pelo WhatsApp

document.getElementById('start').addEventListener('click', function() {
    var numeroTelefone = '5511952909057';
    var mensagem = 'Oi tudo bem? Vim pelo seu portfolio!';
    var link = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

    window.location.href = link;
})