'use strict';
const body = document.querySelector('body');
const themeIcon = document.querySelector('.mode');
const timeIn = document.querySelector('.input-pomo');
const startT = document.querySelector('.focus-pomo');
const breakT = document.querySelector('.break-pomo');
const resetT = document.querySelector('.reset-pomo');
const time = document.querySelector('.time-pomo');
const timer = document.querySelector('.start-pomo');
// Setting the theme:
themeIcon.addEventListener('click', function () {
    if (body.classList.contains('darktheme')) {
        body.classList.remove('darktheme');
        themeIcon.src = 'moon.png';
        document.querySelector('body').style.color = 'black';
    }
    else {
        body.classList.add('darktheme');
        themeIcon.src = 'sun.png';
        document.querySelector('body').style.color = 'white';

    }
});

//For the timer:

let t = 0, x;
const updateTime = function () {
    timeIn.value = "";
     x = setInterval(function ()
    {
        if (t > 0) {
            const min = Math.trunc(t / 60);
            const sec = String(Math.trunc(t % 60)).padStart(2, 0).slice(0, 2);
            time.textContent = `${min}:${sec}`;
            t--;
        }
       
        console.log('Timer is called');
    }, 1000)
}

//Start:

timer.addEventListener('click', function (e) {
    e.preventDefault();
    if (t > 0) {
        alert("A Timer is already on please reset it");
    }
    else {
        t = Number(timeIn.value) * 60
        updateTime();
    }
})
startT.addEventListener('click', function (e) {
    e.preventDefault();
    if (t > 0) {
        alert("A Timer is already on please reset it");
    }
    else {
        time.style.background = 'linear-gradient(to bottom right, #39b385, #6ae15d)';
    }
});

//Break:

breakT.addEventListener('click', function (e) {
    e.preventDefault();
    if (t > 0) {
        alert("A Timer is already on please reset it");
    }
    else {
        time.style.background = 'linear-gradient(to top left, #ffb003, #ffcb03)';
    }
});

//reset:

resetT.addEventListener('click', function (e) {
    e.preventDefault();
    t = 0;
    // updateTime();
    timeIn.value = "";
    time.textContent = '5:00';
    clearInterval(x);
})

//Adding tasks:

document.querySelector('.add').addEventListener('click', function () {
    const taskIn = document.querySelector('.input-task');
    if (taskIn.value == '')
        alert('No Task is written')
    else {
        document.querySelector('tbody').innerHTML += ` <tr class = "fade-in">
                    <td><input type="checkbox"></td>
                    <td>${taskIn.value}</td>
                    <td><button class="del">Delete</button></td>
                </tr>`;
    }
});

//Deleting elements:

document.querySelector('tbody').addEventListener('click', function remove(e) {
    if (e.target.classList.contains('del')) {
        e.target.closest("tr").remove();
    }
});