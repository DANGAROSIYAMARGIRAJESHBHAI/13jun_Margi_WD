function pass(){
    let pass = document.getElementById('password')
    let checkbox=document.getElementById('checkbox');
         if(checkbox.checked)
         {
            pass.type = 'text'
         }
         else{
             pass.type = 'password'
         }
     }
 