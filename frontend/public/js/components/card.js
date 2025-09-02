// Exportamos una función llamada loadcards que recibe: 
//-containerSelector: un selector css para el contenedor donde se cargarán las tarjetas.
//-cardIds: un array que es opcional con los Ids de las cards que se quieren mostrar. Si no se proporciona, se cargan todas las tarjetas.
export async function loadCards(containerSelector, cardIds = []){
// Obtenemos el contenedor del DOM.
    const container = document.querySelector(containerSelector);

    if(!container)retunr; // Si no se encuentra el contenedor, salimos de la función.

    try {
// Utilizamos Promise.all para cargar la plantilla de la tarjeta y los datos de las tarjetas en paralelo.
        const[templateRes, cardsRes] = await Promise.all([
            //Hacemos 2 fetch al mismo tiempo
            //1- Es para la plantilla de la tarjeta.
            //2- Es para los datos de las tarjetas.
            fetch("/frontend/public/views/components/card.html"), // Cargamos la plantilla de la tarjeta.
            fetch("/frontend/public/data/cards.json"), // Cargamos los datos de las tarjetas.
        ]);

        const template = await templateRes.text(); // Convertimos la respuesta de la plantilla a texto.
        const cards = await cardsRes.json(); // Convertimos la respuesta de los datos de las tarjetas a JSON.

        // Filtramos las tarjetas si se proporcionaron cardIds.
        const filteredcards = cardIds.length//length sirve para saber si el array tiene elementos.

            ? cards.filter(card => cardIds.includes(card.id))// Solo las que están en el array cardIds.

            : cards; // Si no se proporcionaron cardIds, usamos todas las tarjetas.

            filteredcards.forEach(card => {
        // Reemplazamos los PLACEHOLDER con los datos de cada tarjeta.
        let html = template
        .replace("{{title}}", card.title)
        .replace("{{icon1}}", card.icon1)
        .replace("{{icon2}}", card.icon2)
        .replace("{{description}}", card.description);

        container.insertAdjacentHTML("beforeend", html);
    });

        // container.innerHTML += html; // Añadimos el HTML generado al contenedor });
    } catch (error) {
        console.error("Error ERROR cargando las cards:", error); // Si hay un error, lo mostramos en la consola.
               
    }

}