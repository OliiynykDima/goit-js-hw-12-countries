export default function fetchCountries(searchQuery){
    let url = `https://restcountries.eu/rest/v2/name/${searchQuery}`
    return fetch(url).then((response) => {
        return response.json()});
        // console.log(response.json())});
}