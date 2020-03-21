export const findCity = (criterio) => {
  const url = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?limit=5&offset=0&namePrefix=${criterio}`;
  return fetch(url)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
};
