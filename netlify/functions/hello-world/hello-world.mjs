// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import axios from 'axios'

const handler = async (event) => {
  try {
    // Get the date from the query string given to us from the client
    const date = event.queryStringParameters.date

    // Setup options for billboard API call
    const options = {
      method: 'GET',
      url: 'https://billboard2.p.rapidapi.com/billboard_global_200',
      // This is where you take the date given to you from the client-side
      // And pass it along to your billboard API
      params: {date},
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.RAPID_API_HOST
      }
    };
    
    // Make the request
    const response = await axios.request(options)

    // Netlify requires that our handler returns an object
    // that matches the structure { statusCode: number, body: string }
    return { statusCode: 200, body: JSON.stringify(response.data) }

  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

export { handler }
