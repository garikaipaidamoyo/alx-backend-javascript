function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      console.log('');
      return new Error('');
    });
}

export default handleResponseFromAPI;
