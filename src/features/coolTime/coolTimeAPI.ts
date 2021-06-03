// A mock function to mimic making an async request for data
export function fetchCoolTime() {
  return fetch('/api/data.json')
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    })
}
