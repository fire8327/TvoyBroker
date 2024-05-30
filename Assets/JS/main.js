/* показ/скрытие новостей  */
$(".news-container").each((i, el) => {
    $(el).find(".news-toggler").click(() => {
        if ($(el).find(".news-hidden").is(":visible")) {
            $(el).find(".news-hidden").slideUp();
            $(el).find(".news-toggler").text("Показать больше");
        } else {
            $(el).find(".news-hidden").slideDown();
            $(el).find(".news-toggler").text("Показать меньше");
        }
    })
})