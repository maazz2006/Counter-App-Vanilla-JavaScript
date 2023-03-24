const counter = document.querySelector('.counter span');
const buttons = document.querySelectorAll('.options');
let value = 0

buttons.forEach((button) => {
    button.addEventListener('click',function (e) {
        //console.log(e.target.id)
        e.target.id == 'dnc' ?  value -= 1 : e.target.id == 'res' ? value = 0 : e.target.id == 'inc' ? value += 1 : console.log('error'); 
        //console.log(value);
        value > 0 ? counter.style.color = "green" : value < 0 ? counter.style.color = "red" : value == 0 ? counter.style.color = "black" : console.log('err');
        counter.innerHTML = value;


    })

    
});
