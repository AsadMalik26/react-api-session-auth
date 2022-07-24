import axios from "axios";
// axios.defaults.baseURL = "https://asad-crud-api.herokuapp.com/api/expense/";
// axios.defaults.baseURL = "http://localhost:4000/products/";
//above method is global - if we do same for other url, it will be overridden
//so i used the custom url then concated it with rmaining url
// const baseURL = "http://localhost:4000/products/";
//Now make axios instance instead of custom variable url

const productsBase = axios.create({
  baseURL: "http://localhost:4000/products/",
});

class DataApiCalls {
  get = (url) =>
    new Promise((resolve, reject) => {
      productsBase
        .get(url)
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
      productsBase
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  delete = (url) =>
    new Promise((resolve, reject) => {
      productsBase
        .delete(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  put = (url, data) =>
    new Promise((resolve, reject) => {
      productsBase
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default DataApiCalls;
