export const getCountryCode = async (countryFullName) => {

    const urlCountries = `https://restcountries.com/v3.1/name/${countryFullName}?fields=cca2`;

    const response = await fetch(urlCountries);
    const data = await response.json();

    return data[0].cca2;

};