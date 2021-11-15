let counter =document.querySelector(".counter");
let count= 0;

function changeCounter(button){
  if(button ==plus){
     count +=1;
  }else if (button==minus){
    count -=1;
  }else if (button == reset) {
    count = 0
  }

if (count >0){
  counter.style.color ="green"
}

if (count <0){
  counter.style.color ="red"
}
if (count ==0){
  counter.style.color ="yellow"
}

  counter.innerHTML = count;
}
