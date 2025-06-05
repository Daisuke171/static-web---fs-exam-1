(function formValidation(){
    document.addEventListener('DOMContentLoaded', () => {
    const $form = document.querySelector("#contact-form");
    const $inputs = $form.querySelectorAll("input");
    const $inputNumber = $form.querySelector('input[name="number"]');
    const $errorMsg = document.getElementById("error-msg");

    // Validación visual del "número"
    $inputNumber.addEventListener('input', () => {
      $inputNumber.style.backgroundColor = $inputNumber.value.length < 10 ? 'red' : 'grey';
    });

    // Validación al enviar el formulario
    $form.addEventListener("submit", (e) => {
      e.preventDefault();

      const vacio = Array.from($inputs).some(input => {
        const esVacio = input.value.trim() === "";
        input.style.border = esVacio ? "2px solid red" : "rgba(255, 255, 255, 0.4);";
        return esVacio;
      });

      if (vacio) {
        $errorMsg.style.display = "block";
      } else {
        $errorMsg.style.display = "none";

        const datos = Object.fromEntries(
          Array.from($inputs).map(input => [input.name, input.value])
        );

        console.log("Datos del formulario:", datos);
      }
    });
  });
})();