// ###########################  Navigation ###################################

const btnBurger = document.querySelector('#burger-menu');
const menu = document.querySelector('.navigation');
const linkNav = document.querySelectorAll('.navigation a');
const section = document.querySelectorAll('section');
const nav = document.querySelector('nav');

btnBurger.addEventListener('click', ()=>{
    menu.classList.toggle('active');
    btnBurger.classList.toggle('bx-x');
});

linkNav.forEach(link =>{
    link.addEventListener('click', ()=>{
        menu.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
})

section.forEach(sect =>{
    sect.addEventListener('click', ()=>{
        menu.classList.remove('active');
        btnBurger.classList.remove('bx-x');
    });
})

window.addEventListener('scroll', ()=>{
    menu.classList.remove('active');
    btnBurger.classList.remove('bx-x');
});


// ##################### first quizz ##############################################

const rep = ['bildschirm', 'lautsprecher', 'drucker', 'gamecontroller', 'tastatur', 'cd-player', 'dvd-player', 'modem', 
            'scanner','maus', 'gehäuse'];
const form = document.querySelector('.inf_quizzform');
const annul = document.querySelector('.resultat .annuler');
const scoreContainer1 = document.getElementById("score1");

const resultat = document.querySelector('.inf_quizzform .resultat');
const titreResultat = document.querySelector('.inf_quizzform .resultat h2');

let score1 = 0;
scoreContainer1.innerHTML = "Score: 0";

form.addEventListener(`submit`, funcForm);

function funcForm(e) {
    e.preventDefault();
    score1 = 0;

    scoreContainer1.innerHTML = "Score: " + score1;
    const allinput = document.querySelectorAll("input[type='text']");

    allinput.forEach((inputes, index) => {
        if (inputes.value.toLowerCase().trim() === rep[index]) {
            inputes.classList.add('richtig');
            score1++;
        } else {
            inputes.classList.add('falsch');
        }
        inputes.setAttribute('readonly', '');
    })
    // French
    titreResultat.textContent = 'Ihre Punktzahl ist: ';
    scoreContainer1.innerHTML = "Score: " + score1;
    annul.style.display = "block";
}

annul.addEventListener('click', resetForm);

function resetForm() {
    const allinput = document.querySelectorAll("input[type='text']");
    allinput.forEach((inputes) => {
        inputes.value = '';
        inputes.classList.remove('richtig', 'falsch');
        inputes.removeAttribute('readonly');
    });
    titreResultat.textContent = 'Bestätigen Sie Ihre Antworten, um das Ergebnis zu sehen';
    scoreContainer1.innerHTML = "Score: 0";
    annul.style.display = "none";
}


// ###########################  second quizz #################################

const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score2");
const resetButton = document.getElementById("reset-btn");
const question = document.querySelectorAll('.question');
const informatik = document.querySelectorAll('.informatik');

let score2 = 0;
scoreContainer.innerHTML = "Score: " + score2;

function loadQuiz() {
    informatik.forEach((informatik) => {
        const answers = informatik.querySelector('.answers');
        const buttons = answers.querySelectorAll(".abtn");

        buttons.forEach((but) =>{
            but.addEventListener('click', (e) => {
                handleAnswerClick(e, but, answers);
            });
        }); 
    });

}

function handleAnswerClick(event, selectedButton, answersContainer) {
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score2++;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answersContainer.children).forEach(button => {
        button.disabled = true;
    });
    scoreContainer.innerHTML = "Score: " + score2;
}

resetButton.addEventListener("click", () => {

    informatik.forEach((informatik) => {
        const answers = informatik.querySelector('.answers');
        const buttons = answers.querySelectorAll(".abtn");

        buttons.forEach((but) =>{
            but.classList.remove("correct", "incorrect");
            but.disabled = false;
        }); 
    });
    score2 = 0;
    scoreContainer.innerHTML = "Score: " + score2;
});

loadQuiz();




