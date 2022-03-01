export const getCountries = () => {
  return fetch('./assets/countriesList.json').then((response) =>
    response.json()
  );
};
