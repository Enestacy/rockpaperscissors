// Глобальные переменные

let start = document.getElementById("options").childNodes;
let hover = document.querySelectorAll(".pick");
let userscore = document.querySelector(".countUser");
let botscore = document.querySelector(".countBot");

let userres = 0;
let botres = 0;

botscore.innerHTML=botres;
userscore.innerHTML=userres

let popupbtn = document.querySelector(".popupbtn")
let popup = document.querySelector(".popup")

let ball = document.querySelectorAll(".winnings_options")
let max;

// Выбор количества побед
ball.forEach(function(item) {
  item.addEventListener("click",function() {
  
    let thisball = item;

      ball.forEach (function (item){
        item.classList.remove("active_ball");
        thisball.classList.add("active_ball");
        max = thisball.dataset.maxwin
    })
  });
});

//Закрываем поп ап и проверяем, выбрано ли кол-во побед
popupbtn.onclick = function closepopup() {
let change = document.getElementById("change")
if (max==3||max==6||max==9) {
  popup.style.display="none";
}

else {
  change.innerHTML="Choose one of the options";
  change.style.color="#ff6cd6"
}
  

}

//Триггер основной функции
for (let node of start) {
  node.onclick = foo1;
}

// Основная функция
function foo1 () {
  // Изменяем стиль выбранной опции и получаем ее значение
  let pickedOption = this;
  pickedOption.classList.add("active_you");
  let UserChoice = pickedOption.dataset.mean;
  hover.forEach (function(del) {
    del.classList.remove("pick");
  })
  
  
  // устанавливаем запрет на нажатие других опций после выбора
  for (let nulls of start) {
  nulls.onclick = null;
};


// Функция выбора компьютера
function getComputerChoise() {
return Math.floor(Math.random() * 3);
}
// Вызов этой функции
let BotChoice = getComputerChoise(3);
let Pink

// Отображение выбора компьютера+изменение стиля 
if (BotChoice == 0) {
  Pink = document.getElementById("b1")
  Pink.classList.add("active_bot")
}

if (BotChoice == 1) {
  Pink = document.getElementById("b2");
  Pink.classList.add("active_bot")
}

if (BotChoice == 2) {
  Pink = document.getElementById("b3")
  Pink.classList.add("active_bot")
}

let h2 = document.getElementById("h2");

// Основная логика игры+вывод результата
if (BotChoice == UserChoice) {
  h2.innerHTML="IT'S A DRAW"
  check=false;
}

else if (BotChoice==1 && UserChoice==0|| BotChoice==0 && UserChoice==2|| BotChoice==2 && UserChoice==1) {
  botres=botres+1;
  botscore.innerHTML=botres
  h2.innerHTML="YOU LOSE"
  h2.style.color="#ff6cd6";
}

else {
  userres=userres+1
  userscore.innerHTML=userres
  h2.innerHTML="YOU WIN"
  h2.style.color="#7d7aff";
}

//Запуск следующего раунда

let again = document.getElementById("again");
again.onclick = foo2;



function foo2 () {
  pickedOption.classList.remove("active_you");
  Pink.classList.remove("active_bot");
  h2.innerHTML="Let's play"
  h2.style.color="black"
  hover.forEach (function(del) {
    del.classList.add("pick");
  })
  for (let nulls of start) {
  nulls.onclick = foo1;
};
}

//Перезапуск игры
if (userres==max||botres==max) {
  again.innerHTML="Start Over";
  again.style.background="#ff6cd6"
  again.style.border="#ff6cd6"
  again.onclick = () => {
  window.location.reload() 
} 
}

}


