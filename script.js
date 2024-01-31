const deegre = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

setInterval(() =>{

    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * deegre;
    const ss = date.getSeconds() * deegre;

    hr.style.transform = `rotatez(${hh + (mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

});
