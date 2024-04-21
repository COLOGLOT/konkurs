var answers = [
    "Да",
    "Нет",
    "Возможно",
    "Попробуйте снова",
    "Не уверен",
    "Может быть",
    "Лучше не говорить",
    "Да, определенно",
    "Абсолютно нет",
    "Пока что нет",
    "Вот так вот",
    "Возможно позже",
  ];

document.querySelector('#btn').addEventListener('click', () =>{
  var question = document.getElementById('question').value;
    var randomIndex = Math.floor(Math.random() * answers.length);
    var randomAnswer = answers[randomIndex];
    if (question) {
      document.getElementById('answer').textContent = `${randomAnswer}`;
    } else {
      document.getElementById('warn').textContent = "Пожалуйста, задайте свой вопрос.";
    }
})
alert('Привествую тебя, Сталкер!')
this.unload = function(evt)
    {
        var message = "Удачно охоты, Сталкер!";
        if (typeof evt == "undefined") {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
    }