function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
 //   exercício 1
function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const DaysList = document.getElementById('days');

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        const day = decemberDaysList[index];
        const dayLi = document.createElement('li');
        dayLi.innerHTML = day;
        dayLi.classList.add('day');
        if (day === 24 || day === 31) {
            dayLi.classList.add('holiday');
        } else if (day === 4 || day === 11 || day === 18 ){
            dayLi.classList.add('friday');
        } else if (day === 25) {
            dayLi.classList.add('holiday', 'friday');
        }
        DaysList.appendChild(dayLi);   

    }
}
createDaysOfTheMonth();

// exercicio 2
function holidayButton(buttonHolidayName) {
    const buttonContainer = document.getElementsByClassName('buttons-container')[0];
    const button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = buttonHolidayName;
    buttonContainer.appendChild(button);
}
holidayButton('Feriados');

// exercicio 3
function ChangeBackgroundHoliday() {
    let buttonHoliday = document.querySelector('#btn-holiday');
    let dayHoliday = document.querySelectorAll('.holiday');
    let currentColor = 'rgb(238, 238, 238)';
    let newColor = 'yellow';

    buttonHoliday.addEventListener('click', function () {
        for (let index = 0; index < dayHoliday.length; index += 1) {
            if (dayHoliday[index].style.backgroundColor === newColor) {
                dayHoliday[index].style.backgroundColor = currentColor;
            } else {
                dayHoliday[index].style.backgroundColor = newColor;
            }
        }
    });
}
ChangeBackgroundHoliday();

// exercicio 4
function createButtonFriday(fridayName) {
    const buttonsContainer = document.querySelector('.buttons-container');
    let buttonFriday = document.createElement('button');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerHTML = fridayName;
    buttonsContainer.appendChild(buttonFriday);
}
createButtonFriday("Sexta-feira");

// exercicio 5

function changeFridayText() {
    const buttonFriday = document.querySelector('#btn-friday');
    let dayFriday = document.querySelectorAll('.friday');
    let currentText = ['4', '11', '18', '25'];
    let newText = 'SEXTOU!!!';
    
    buttonFriday.addEventListener('click', function () {
        for (let index = 0; index < dayFriday.length; index += 1) {
            if (dayFriday[index].innerHTML !== newText) {
                dayFriday[index].innerHTML = newText;
            } else {
                dayFriday[index].innerHTML = currentText[index];
            }
        }
    });
}
changeFridayText();

// exercicio 6
function dayMouseOver() {
    const dayToZoom = document.querySelector('#days');
    
    dayToZoom.addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '30px';
        event.target.style.fontWeight = '600';
    });
}
function dayMouseOut() {
    const zoomOut = document.getElementById('days');

    zoomOut.addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
        event.target.style.fontWeight = '200';
    });
}
dayMouseOver();
dayMouseOut();

// exercicio 7
function addTask(activity) {
    const divTask = document.querySelector('.my-tasks');
    let taskName = document.createElement('span');
    taskName.innerHTML = activity;
    divTask.appendChild(taskName);
}
addTask('Projeto');

// exercicio 8
function taksWithColor(color) {
    const divTask = document.querySelector('.my-tasks');
    let taskColor = document.createElement('div');
    taskColor.className = 'task';
    taskColor.style.backgroundColor = color;
    divTask.appendChild(taskColor);
}
taksWithColor('rgb(39, 208, 166)');

// exercicio 9
function taskSelect() {
    let taskSelected = document.querySelector('.task');

    taskSelected.addEventListener('click', function (event) {
        if (event.target.className === 'task') {
            event.target.className = 'task selected'
        } else {
            event.target.className = 'task'
        }
    });
}
taskSelect()

function changeDayColor() {
    let coloringDay = document.getElementById('days');
    let captureTask = document.querySelector('.task');
    let colorTask = captureTask.style.backgroundColor;
    let currentDayColor = document.querySelector('.day').style.color;
    
    coloringDay.addEventListener('click', function (event) {
        if (event.target.style.color !== colorTask) {
            event.target.style.color = colorTask;
        }
         else {
            event.target.style.color = currentDayColor;
        }
    })
}
changeDayColor();