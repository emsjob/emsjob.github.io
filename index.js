document.addEventListener("DOMContentLoaded", () => {
    const myAppNameHereQuoteScroll = "my_app_name_here-quote-scroll";

    if (localStorage.getItem(myAppNameHereQuoteScroll) !== null) {
        window.scrollTo(0, localStorage.getItem(myAppNameHereQuoteScroll));
    }

    window.addEventListener("scroll", () => {
        localStorage.setItem(myAppNameHereQuoteScroll, window.pageYOffset);
    });
});