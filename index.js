
// This would actually come from your form when the user selects a data
const date = '01-01-2022';

// Then you can pass it as a query string paramater to your Netlify Function
fetch(`.netlify/functions/hello-world?date=${date}`).then(response => console.log(response.json()));