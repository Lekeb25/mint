// ##########################  Navigation  #########################################

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


// ################################  Over Bilder mit Tieren  ###################################

const contain = document.querySelector('.an-container');
// nicht noetig
const box1 = document.querySelector('.an-container .an-box1');
const box2 = document.querySelector('.an-container .an-box2');

contain.addEventListener('mouseenter', ()=>{ 
    const contes = document.querySelectorAll('.ques');

    contes.forEach((e)=>{
        e.addEventListener('mouseover', ()=>{
            e.children[0].classList.add('desactive');
            e.children[1].classList.add('active');
        })
        e.addEventListener('mouseout', ()=>{
            e.children[0].classList.remove('desactive');
            e.children[1].classList.remove('active');
        })
    })    
});


// ################################  First Quiz  ###################################

const rep = ['hund', 'katze', 'kaninchen', 'ente', 'huhn', 'schwein', 'kuh', 'pferd', 'giraffe'];
const form = document.querySelector('.quizzform');
const annul = document.querySelector('.resultat .annuler');

const resultat = document.querySelector('.quizzform .resultat');
const titreResultat = document.querySelector('.quizzform .resultat h2');
const scoreResultat = document.querySelector('.quizzform .resultat .score');
const infoResultat = document.querySelector('.quizzform .resultat .info');

form.addEventListener(`submit`, funcForm);

function funcForm(e) {
    e.preventDefault();
    const resultat = [];
    const allinput = document.querySelectorAll("input[type='text']");

    allinput.forEach((inputes, index) => {
        if (inputes.value.toLowerCase().trim() === rep[index]) {
            inputes.classList.add('richtig');
            resultat.push(true);
        } else {
            inputes.classList.add('falsch');
            resultat.push(false);
        }
        inputes.setAttribute('readonly', '');
    })
    funcResultat(resultat);
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
    resultat.style.backgroundColor = ""; 
    titreResultat.textContent = 'Bestätigen Sie Ihre Antworten, um das Ergebnis zu sehen';
    infoResultat.textContent = '';
    scoreResultat.innerHTML = '';
    annul.style.display = "none";
}

function funcResultat(res) {
    const nombreErreurs = res.filter(el => el === false).length;
    console.log(nombreErreurs);

    switch (nombreErreurs) {
        case 0:
            resultat.style.backgroundColor = "rgb(125, 241, 129)"
            titreResultat.innerText = `😎Herzlichen Glückwunsch, es ist Fehlerfrei!😎`;
            infoResultat.innerText = `👏👏👏👏👏👏`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 1:
            resultat.style.backgroundColor = "rgb(125, 241, 12)"
            titreResultat.innerText = `😅Es liegen ${nombreErreurs} Fehler 😅`;
            infoResultat.innerText = `Fast alles Richtig 👏👏👏👏!!!`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 2:
            resultat.style.backgroundColor = "rgb(125, 241, 12)"
            titreResultat.innerText = `😅Es liegen ${nombreErreurs} Fehler 😅`;
            infoResultat.innerText = `Fast alles Richtig 👏👏👏👏!!!`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 3:
            resultat.style.backgroundColor = "rgb(241, 125, 125)"
            titreResultat.innerText = `😅Il y a ${nombreErreurs} erreurs 😅`;
            infoResultat.innerText = `Oups, Versucht mal, Fehler zu verbessern !!!`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 4:
            resultat.style.backgroundColor = "rgb(241, 125, 125)"
            titreResultat.innerText = `😅Es liegen ${nombreErreurs} Fehler 😅`;
            infoResultat.innerText = `Oups, Versucht mal, Fehler zu verbessern !!!`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 5:
            resultat.style.backgroundColor = "rgb(241, 125, 125)"
            titreResultat.innerText = `😅 Es liegen ${nombreErreurs} Fehler 😅`;
            infoResultat.innerText = `Oups, Versucht mal, Fehler zu verbessern !!!`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 6:
            resultat.style.backgroundColor = "rgb(245, 81, 81)"
            titreResultat.innerText = `😭Es liegen ${nombreErreurs} Fehler 😭`;
            infoResultat.innerText = `Was ist los? Versucht es noch zu verbessern`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 7:
            resultat.style.backgroundColor = "rgb(245, 81, 81)"
            titreResultat.innerText = `😭Es liegen ${nombreErreurs} Fehler 😭`;
            infoResultat.innerText = `Was ist los? Versucht es noch zu verbessern`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 8:
            resultat.style.backgroundColor = "rgb(245, 81, 81)"
            titreResultat.innerText = `😭Es liegen ${nombreErreurs} Fehler 😭`;
            infoResultat.innerText = `Was ist los? Versucht es noch zu verbessern`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        case 9:
            resultat.style.backgroundColor = "rgb(245, 81, 81)"
            titreResultat.innerText = `😭Es liegen ${nombreErreurs} Fehler 😭`;
            infoResultat.innerText = `Was ist los? Versucht es noch zu verbessern`;
            scoreResultat.innerHTML = `Score: <span> ${9 - nombreErreurs} / 9 </span>`;
            break;
        default:
            titreResultat.innerText = `Unwartete Fehler !`;
    }
}


// ################################### Second Quiz ################################

const quizContainer = document.getElementById("quiz");
const scoreContainer = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");
const question = document.querySelectorAll('.question');
const informatik = document.querySelectorAll('.informatik');

let score2 =0;
scoreContainer.innerHTML = "Score: " + score2;

function loadQuiz() {
    informatik.forEach((informatik) => {
        const answers = informatik.querySelector('.answers');
        const buttons = answers.querySelectorAll(".abtn");

        buttons.forEach((but) =>{
            but.addEventListener("click", (e) => {
                handleAnswerClick(e, but, answers);
            });
        }); 
    });
}

function handleAnswerClick(event, selectedButton, answersContainer) {
    const isCorrect = selectedButton.dataset.correct === "true";

    if (isCorrect) {
        selectedButton.classList.add("correct");
        score2 +=1;
    } else {
        selectedButton.classList.add("incorrect");
    }

    Array.from(answersContainer.children).forEach(button => {
        // wiederholung
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
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
