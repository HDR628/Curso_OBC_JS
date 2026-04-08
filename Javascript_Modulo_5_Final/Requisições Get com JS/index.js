function createCardCountry(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  const countryName = country.name.common;
  const name = document.createElement("h2");
  name.textContent = countryName;

  const flag = document.createElement("img");
  flag.src = country.flags.png;
  flag.alt = `Bandeira do ${countryName}`;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags");
  const countries = await response.json(); // Necessario pra fazer o JS entender o conteudo obtido/requisitado da api

  console.log(countries);
  countries.forEach(createCardCountry);
}

getCountries();
