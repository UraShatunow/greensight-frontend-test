export class JobsApi {
  
  getJobs() {
    return fetch("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?search=frontend")
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return  Promise.reject(res.status);
        })
        .then((data) => {
          console.log(data);
          return data;
        })
        .catch((err) => {
          console.log('Vacancies loading error')
          return Promise.reject(err);
        });
  }

}