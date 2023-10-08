export function inputsMail() {
    document.addEventListener("DOMContentLoaded", function() {
      let emailInputs = document.querySelectorAll('input[data-email-input]');
      let errorMes = document.querySelector('.error-message');
  
      emailInputs.forEach(function(i) {
        let input = i;
  
        input.addEventListener("input", function(e) {
          let email = e.target.value;
          // Регулярное выражение для проверки ввода в поле email
          let isValidEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email);
  
          if(!isValidEmail) {
            errorMes.style.display = "block";
          } else {
            errorMes.style.display = "none";
          }

          if(email.length == 0) {
            errorMes.style.display = "none";
          }
        });
      })
    })
  }