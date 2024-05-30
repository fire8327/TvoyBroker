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
});


/* получение курса валют */
let usd, rub = null
$(document).ready(() => {    
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js';
    fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Ошибка с запросом!');
        }
        return response.json();
    })
    .then(data => {
        usd = data.Valute.USD.Value;
        $("#currencyFrom").val(1);
        $("#currencyTo").val(usd.toFixed(3))

        /* смена валют */
        $("#currencyFrom").change(() => {
            $("#currencyTo").val(($("#currencyFrom").val() * usd).toFixed(3));
        });
        $("#currencyTo").change(() => {
            $("#currencyFrom").val(($("#currencyTo").val() / usd).toFixed(3));
        });
    })
    .catch(error => {
        console.log(error);
    });
});


