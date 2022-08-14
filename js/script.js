/* Сначала подключаемся к стрелкам */

const sec = document.querySelector('.s'), /* Подключаемся к секундной стрелке */
    min = document.querySelector('.m'), /* Подключаемся к минутной стрелке */
    hour = document.querySelector('.h'), /* Подключаемся к часовой стрелке */
    numberHours = document.querySelector('.hours'), /* Получаем часы с цифровых часов */
    numberMinutes = document.querySelector('.minutes') /* Получаем минуты с цифровых часов */



// console.log(new Date()); /* получает дату с устройства */

// let date = new Date()

// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());
// console.log(date.getTimezoneOffset());
// console.log(date.getUTCDate());


function clock() {

    let time = new Date()
    let second = time.getSeconds() * 6
    let minutes = time.getMinutes() * 6
    let hours = time.getHours() * 30

    sec.style = `transform: rotate(${second}deg);`
    min.style = `transform: rotate(${minutes}deg);`
    hour.style = `transform: rotate(${hours}deg);`

    // innerHTML - заменяет внутренний контент HTML элемента

    numberHours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    numberMinutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);
    /* рекурсия это когда функция вызывает саму себя внутри себя */

    
}

clock()



// setTimeout(() => {
//     console.log('adfdf');
// }, 5000);

// setInterval(() => {
//     console.log('interval');
// }, 2000);

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem')



/* classList - работает с классами HTml элемента через JS */

links.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault() /* e - это объект события. preventDefault() - отключает обычное поведение элемента в браузере */
        removeActiveClass(links, 'active')
        removeActiveClass(tabs, 'active')
        link.classList.add('active')
        tabs[index].classList.add('active')
    })
})


function removeActiveClass(element, className) {
    element.forEach(el => {
        el.classList.remove(className)
    })
}






const btn = document.querySelector('.stopwatch__btn')
const span = document.querySelector('.tabsLink__span') 


let timer = setInterval(() => stopwatch, 1000)

btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        timer = setInterval(() => stopwatch(), 1000)
        span.classList.add('active')
    }else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'reset'
        clearInterval(timer)
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else if (btn.innerHTML == 'reset') {
        btn.innerHTML = 'start'
        second = 0
        timeSec.innerHTML = 0
        minutes = 0 
        timeMin.innerHTML = 0
        hours = 0 
        timeHours.innerHTML = 0
        span.classList.remove('active_clear')
    }
})




let timeSec = document.querySelector('.stopwatch__seconds'),
    timeMin = document.querySelector('.stopwatch__minutes'), 
    timeHours = document.querySelector('.stopwatch__hours')   

    let second = 0,
    minutes = 0,
    hours = 0


function stopwatch() {

    second += 1;
    timeSec.innerHTML = second;
    if(second >= 59) {
        minutes += 1;
        timeMin.innerHTML = minutes;
        second = 0
    }
    if(minutes >= 59) {
        hours += 1;
        timeHours.innerHTML = hours
        minutes = 0
    }

}


