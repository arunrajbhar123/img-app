import "../style/nav.css";
import navbar from "../components/navbar";
import { fetchReq, append } from "../components/fetch";
import debounce from "../components/debounce";
const API = 'CrvtbUbzHzBd29vfQnk4aO0sG--8Wv2XrA2cy82iPlY';

document.querySelector('nav').innerHTML = navbar();

function main(e) {
    if (e.key === "Enter") {
        let query = document.querySelector('#query').value;
        fetchReq(API, query).then((data) => {
            var container = document.querySelector('.container');
            container.innerHTML = null;
            append(data.results, container)
        });
    }
}



var categories = document.querySelector('#cato').children;


function cato() {
    fetchReq(API, this.id).then((data) => {
        var container = document.querySelector('.container');
        container.innerHTML = null;
        append(data.results, container)
    });
}

for (let el of categories) {
    el.addEventListener('click', cato);
}

document.querySelector('#query').addEventListener("keydown", main)