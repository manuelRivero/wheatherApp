export const findCity = (criterio) => {
  
  let googglePlaceApi=`https://api.teleport.org/api/cities/?search=${criterio}`;
  return fetch(googglePlaceApi)
    .then(res => res.json())
    .then(res => res)
    .catch(err => console.log(err));
};
