import axios from "axios";
// axios.defaults.baseURL = "https://asad-crud-api.herokuapp.com/api/expense/";
// axios.defaults.baseURL = "http://localhost:4000/products/";
const baseURL = "http://localhost:4000/products/";
class DataApiCalls {
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(baseURL + url)
        .then((res) => {
          console.log(res);
          resolve(res.data);
        })
        .catch((err) => {
          reject("Error: ", err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .post(baseURL + url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      axios
        .delete(baseURL + url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .put(baseURL + url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default DataApiCalls;
