// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import axios from 'axios'

const handler = async (event) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://billboard2.p.rapidapi.com/billboard_global_200',
      params: {date: '2020-09-19'},
      headers: {
        'X-RapidAPI-Key': '172f5ae0a3mshd6ed391d1c2553ep1f5a30jsn8f9417e36b58',
        'X-RapidAPI-Host': 'billboard2.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      return {statusCode: 200, body: JSON.stringify(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
