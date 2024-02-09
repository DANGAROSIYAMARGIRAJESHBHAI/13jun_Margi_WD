// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



  

        // Form validation
        function validate() {
            let ptn = /^[A-Z a-z]{3,5}$/;
            let name = document.getElementById('name').value;
          
            console.log("Hello")
            // Name validation
            if (name == "" || name == ' ') {
                name.style.outline = "1px solid red";
                let msg = document.querySelector('#name~span')
                name.innerHTML = "*Need to add name"
                return false;
            }
            else if (!ptn.test(name)) {
              alert('Enter proper username')
               return false;
            }
        
            }
        
