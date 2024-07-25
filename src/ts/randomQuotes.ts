const quotes: string[] = [
    "¡Bienvenido a nuestra plataforma de reciclaje comunitario! Regístrate ahora y únete a la comunidad.",
    "¿Quieres hacer del mundo un lugar más verde? ¡Únete a nosotros y comienza a reciclar!",
    "Descubre cómo puedes hacer la diferencia en el medio ambiente con nuestra aplicación de reciclaje.",
    "Haz nuevos amigos y ayuda al planeta al mismo tiempo. ¡Únete a nuestra comunidad de reciclaje!"

];

function displayRandomQuotes(): void {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    if (quoteElement) {
        quoteElement.textContent = quotes[randomIndex];
    }
}

window.addEventListener('load', displayRandomQuotes)


