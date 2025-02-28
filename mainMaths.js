// ############################ Navigation #######################################

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


// ###########################  First Quiz  ########################################

const rep_add = [5, 11, 31, 70];
const rep_sous = [3, 7, 80, 65];
const rep_div = [2, 6, 5, 25];
const rep_mul = [6, 30, 200, 100];

const form_add = document.querySelector('#form-add');
const form_sous = document.querySelector('#form-sous');
const form_div = document.querySelector('#form-div');
const form_mul = document.querySelector('#form-mul');

form_add.addEventListener('submit', (e) => funcForm(e, form_add, rep_add));
form_sous.addEventListener('submit', (e) => funcForm(e, form_sous, rep_sous));
form_div.addEventListener('submit', (e) => funcForm(e, form_div, rep_div));
form_mul.addEventListener('submit', (e) => funcForm(e, form_mul, rep_mul));

function funcForm(e, form_element, tab) {
    e.preventDefault();
    const allinput = form_element.querySelectorAll("input[type='number']");

    allinput.forEach((inputes, index) => {
        if (Number(inputes.value) === tab[index]) {
            inputes.classList.add('richtig');
        } else {
            inputes.classList.add('falsch');
        }
        inputes.setAttribute('readonly', '');
    });
    const anullation = form_element.querySelector('.anulation');
    anullation.style.display = 'inline';
    anullation.addEventListener('click', () => resetForm(form_element));
}

function resetForm(formul) {
    const allinput = formul.querySelectorAll("input[type='number']");
    allinput.forEach((inputes) => {
        inputes.value = '';
        inputes.classList.remove('richtig', 'falsch');
        inputes.removeAttribute('readonly');
    });
    const annul = formul.querySelector('.anulation');
    annul.style.display = "none";
}

// ################################# Second Quiz #####################

const rep = ["b", "d", "c", "a", "c", "b"];
const form = document.querySelector('#mathform2');
const annul = document.querySelector('.resultat .annuler');

const resultat = document.querySelector('.resultat');
const titreResultat = document.querySelector('.resultat h2');
const scoreResultat = document.querySelector('.resultat .score');


form.addEventListener('submit', funcForm2);

function funcForm2(e){
    e.preventDefault();
    const resultat = [];
    const toutLesBoutonsRadios = document.querySelectorAll("input[type='radio']:checked");

    toutLesBoutonsRadios.forEach((radioButtons, index)=>{
        if(radioButtons.value === rep[index]){
            resultat.push(true)
        }else {
            resultat.push(false)
        }
    })
    funcResultat(resultat)
    annul.style.display = "block";
}

annul.addEventListener('click', resetForm2);

function resetForm2() {
    titreResultat.textContent = 'Bestätigen Sie Ihre Antworten, um das Ergebnis zu sehen';
    scoreResultat.innerHTML = '';
    annul.style.display = "none";
}

function funcResultat(res){
    const nombreErreurs = res.filter(el => el === false).length;
    titreResultat.innerText = 'Your Score';
    console.log(nombreErreurs);

    switch(nombreErreurs){
        case 0:
        scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 1:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 2:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 3:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 4:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 5:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
          break;
        case 6:
          scoreResultat.innerHTML = `Score: <span> ${6 - nombreErreurs} / 6 </span>`;
        default:
          titreResultat.innerText = `Erreur innatendu !`;
    }
    
}
