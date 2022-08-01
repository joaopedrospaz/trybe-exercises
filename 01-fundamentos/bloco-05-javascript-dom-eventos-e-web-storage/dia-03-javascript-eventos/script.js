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
        if (day === 24 || day === 25 || day === 31) {
            dayLi.classList.add('holiday');
        } else if (day === 4 || day === 11 || day === 18 || day === 25){
            dayLi.classList.add('friday');
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
function mudarFundo() {
    let botao = document.getElementById('btn-holiday');
    let dias = document.querySelectorAll('.holiday');

    botao.addEventListener('click', function () {
        for (let index = 0; index < dias.length; index += 1) {
            if (dias[index].style.backgroundColor === "rgb(238, 238, 238)") {
              dias[index].style.backgroundColor = 'red'
            } 
            else { dias[index].style.backgroundColor = "rgb(238, 238, 238)"}
        }  
    });
}
mudarFundo()

