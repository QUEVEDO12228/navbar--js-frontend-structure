// >>> Espera que el DOM esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', () => {
    // >>> Selecciona el formulario con la clase container-form__form.
    const form = document.querySelector(".container-form__form");

    // Verifica que el formulario exista en el DOM.
    if(form){
        // >>> Escucha el evento submit            
        form.addEventListener("submit", async (e) => {
            // >>> Prevenir el comportamiento por defecto de recarga de la página.
            e.preventDefault();


            // >>> Concierte todos los datos del formulario en un objeto JavaScript  
            const formdata = new FormData(form);
            const data = Object.fromEntries(formdata);
            
        });

    }
})