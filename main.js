var menu = document.querySelector('#button_content');
document.querySelector('#btn').addEventListener('click', () => {
    if(menu.classList.contains('menu')){
        menu.classList.remove('menu');
    }
    else{
        menu.classList.add('menu');
    }
})
var left = 3;
var right = 0;
var mar = document.getElementById('s1');
document.querySelector('#right').addEventListener('click', () => {
    if(right == 0){
        mar.style.cssText = "margin-left: -20%;";
        right++;
        left = 2;
    }
    else if(right == 1){
        mar.style.cssText = "margin-left: -42.5%;";
        right++;
        left = 1;
    }
    else if(right == 2){
        mar.style.cssText = "margin-left: -65%;";
        right++;
        left = 0;
    }
    else{
        mar.style.cssText = "margin-left: 2.5%;";
        right = 0;
        left = 3;
    }
})
document.querySelector('#left').addEventListener('click', () => {
    if(left == 0){
        mar.style.cssText = "margin-left: -42.5%;";
        left++;
        right = 2;
    }
    else if(left == 1){
        mar.style.cssText = "margin-left: -20%;";
        left++;
        right = 1;
    }
    else if(left == 2){
        mar.style.cssText = "margin-left: 2.5%;";
        left++;
        right = 0;
    }
    else{
        mar.style.cssText = "margin-left: -65%;";
        left = 0;
        right = 3;
    }
})
var left_two = 2;
var right_two = 0;
var marg = document.getElementById('s2');
document.querySelector('#right_two').addEventListener('click', () => {
    if(right_two == 0){
        marg.style.cssText = "margin-left: -20%;";
        right_two++;
        left_two = 1;
    }
    else if(right_two == 1){
        marg.style.cssText = "margin-left: -42.5%;";
        right_two++;
        left_two = 0;
    }
    else{
        marg.style.cssText = "margin-left: 2.5%;";
        right_two = 0;
        left_two = 2;
    }
})
document.querySelector('#left_two').addEventListener('click', () => {
    if(left_two == 0){
        marg.style.cssText = "margin-left: -20%;";
        left_two++;
        right_two = 1;
    }
    else if(left_two == 1){
        marg.style.cssText = "margin-left: 2.5%;";
        left_two++;
        right_two = 0;
    }
    else{
        marg.style.cssText = "margin-left: -42.5%;";
        left_two = 0;
        right_two = 2;
    }
})
