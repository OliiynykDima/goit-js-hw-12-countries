import css from "./css/style.css";
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries.js';
import refs from './js/countryRefs.js';
import countryItem from './templates/countryItem.hbs';
import countryList from './templates/countryList.hbs'


console.log(refs);

// fetch(`https://restcountries.eu/rest/v2/all`).then(respone => respone.json()).then(data => console.log(data));
refs.input.addEventListener('input', debounce((event)=>{
    let query = event.target.value;
    console.log(query);
    fetchCountries(query).then(data=>{
        console.log(data);
        if(data.length >= 2 && data.length <= 10){
            const item = countryList(data);
            refs.ul.innerHTML = '';
        refs.ul.insertAdjacentHTML("beforeend", item);
        }
        else{
            const item = countryItem(data);
            console.log(item);
            refs.ul.innerHTML = '';
            refs.ul.insertAdjacentHTML("beforeend", item);
        }
    });
}, 1000))
