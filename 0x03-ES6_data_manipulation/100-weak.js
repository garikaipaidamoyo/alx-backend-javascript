const weakMap = new WeakMap();

function queryAPI(endpoint) {
  // Initialize a count for the endpoint if it doesn't exist in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the count is greater than or equal to 5, and throw an error if so
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { queryAPI, weakMap };
