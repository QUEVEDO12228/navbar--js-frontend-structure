// >>> contact/contact_form.load.js

document.addEventListener("DOMContentLoaded", async () => {
    const container = document.querySelector(".services__form-container");

    if (container){
        const response  = await fetch("/frontend/public/views/components/contact_form.html")
        const html = await response.text();
        container.innerHTML = html;
    
        // >>> Carga la lógica del formulario
        const script = document.createElement('script');
        script.src = "/frontend/public/views/components/form.logic.js";
        document.body.appendChild(script);
    }
});