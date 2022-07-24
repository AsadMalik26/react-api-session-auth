import axios from "axios";
// axios.defaults.baseURL = "https://asad-crud-api.herokuapp.com/api/expense/";
// axios.defaults.baseURL = "http://localhost:4000/users/";
const baseURL = "http://localhost:4000/users/";
class UserApiCalls {
  get = (url, data) =>
    new Promise((resolve, reject) => {
      axios
        .get(baseURL + url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
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

export default UserApiCalls;