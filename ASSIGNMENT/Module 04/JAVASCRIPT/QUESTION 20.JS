function result(){
    let a = parseInt(document.getElementById('mark1').value);
    let b = parseInt(document.getElementById('mark2').value);
    let c = parseInt(document.getElementById('mark3').value);
    let d = parseInt(document.getElementById('mark4').value);
    let e = parseInt(document.getElementById('mark5').value);
    let f = parseInt(document.getElementById('mark6').value);
    let g = parseInt(document.getElementById('mark7').value);
    
    if(0<= a <=50 && 0<= b <=50 && 0<= c <=50 && 0<= d <=50 && 0<= e <=50 && 0<= f <=50 && 0<= g <=50 ){
     let sum = a+b+c+d+e+f+g;
       document.getElementById('total').innerText =  sum ;
       let percentage = sum/7;
       document.getElementById('percentage').innerText =   percentage ;
    }
    else {
        alert( 'please enter valid marks');
    }

    }