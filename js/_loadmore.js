document.addEventListener("DOMContentLoaded", function(_) {
    const loadmore = document.querySelector('.js-loadmore');
    if (loadmore !== null) {

        loadmore.addEventListener('click', function (e) {
            e.preventDefault();
            let paged = loadmore.dataset.paged;
            const maxPages = loadmore.dataset.max_pages;
            const articlesListContainer = document.getElementById("articles-list-items");
            const offset = articlesListContainer.childElementCount;

            var xhr = new XMLHttpRequest();

            var data = {
                paged: paged,
                action: 'loadmore',
                offset: offset
            };
            console.log(data);

            var dataString = objectToQueryString( data );

            xhr.open("POST", smartmove.url + '?action=loadmore', true);
            xhr.send(dataString);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    paged++;
                    document.getElementById("articles-list-items").innerHTML += xhr.responseText;
                }
            };
        });
    }
});

function objectToQueryString(obj){
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

