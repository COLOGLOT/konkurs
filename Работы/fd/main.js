var input_one = document.getElementById('input_one');
var input_two = document.getElementById('input_two');
document.querySelector('#btn_pl').addEventListener('click', () =>{
    var number_one = Number(input_one.value);
    var number_two = Number(input_two.value);
    var res = number_one + number_two
    document.getElementById('res').innerHTML = "Результат: " + res;
});
document.querySelector('#btn_mn').addEventListener('click', () =>{
    var number_one = Number(input_one.value);
    var number_two = Number(input_two.value);
    var res = number_one - number_two
    document.getElementById('res').innerHTML = "Результат: " + res;
});
