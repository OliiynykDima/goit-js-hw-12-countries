import css from "./css/style.css";
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/countryRefs.js';
import countryItem from './templates/countryItem.hbs';
import countryList from './templates/countryList.hbs';
import {error} from '@pnotify/core';
import {attention} from './js/error.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

console.log(refs);

// fetch(`https://restcountries.eu/rest/v2/all`).then(respone => respone.json()).then(data => console.log(data));
refs.input.addEventListener('input', debounce((event)=>{
    let query = event.target.value;
    console.log(query);
    fetchCountries(query).then(data=>{
        console.log(data);
        if(data.length >= 2 && data.length <= 10){
            insertElement(countryList, data, refs.ul);
        }else if(data.length === 1){
            insertElement(countryItem, data, refs.ul);
        }
        else{
            error(attention);
        }
    });
    refs.input.value = '';
}, 1000),
);
function insertElement(template, data, place){
    const elem = template(data);
    place.insertAdjacentHTML("beforeend", elem);
}
