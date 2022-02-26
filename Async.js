const getCovidData = async () => {
  const request = await fetch("");
  const data = await request.json();
  return data;
};

getCovidData().then(covidData => {
  //Do something
  covidData.confirmed.value;
});
