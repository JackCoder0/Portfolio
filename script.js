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

document.getElementById('resume').addEventListener('click', function () {
    var filePath = 'assets/pdf/Curriculo.pdf';
    var fileName = 'cv-jackson.pdf';
    downloadFile(filePath, fileName);
});

document.getElementById('resume-about').addEventListener('click', function () {
    var filePath = 'assets/pdf/Curriculo.pdf';
    var fileName = 'cv-jackson.pdf';
    downloadFile(filePath, fileName);
});

// Funcção para mandar mensagem pelo WhatsApp

document.getElementById('start').addEventListener('click', function () {
    var numeroTelefone = '5511952909057';
    var mensagem = 'Oi tudo bem? Vim pelo seu portfolio!';
    var link = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + encodeURIComponent(mensagem);

    window.location.href = link;
})

// Função do Form de Contato

const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".submit-btn");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "kI6U2WvxaNcXxdkkw";
const serviceID = "service_gdlgdfm";
const templateID = "template_0fjzujr";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {
    e.preventDefault();
    submitBtn.innerText = "Espere um momento...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    emailjs.send(serviceID, templateID, inputFields)
        .then(() => {
            submitBtn.innerText = "Mensagem enviada com sucesso!";
            nameInput.value = "";
            emailInput.value = "";
            messageInput.value = "";
        }, (error) => {
            console.log(error);
            submitBtn.innerText = "Alguma coisa está errada!"
        });
});


// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//     };

//     const serviceID = "service_gdlgdfm";
//     const templateID = "template_0fjzujr";

//     emailjs
//         .send(serviceID, templateID, params)
//         .then((res) => {
//             document.getElementById("name").value = "";
//             document.getElementById("email").value = "";
//             document.getElementById("message").value = "";
//             console.log(res);
//             alert("Sua mensagem foi enviada com sucesso!")
//         })
//         .catch((error) => console.log(error));
// }

