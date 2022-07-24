import axios from "axios";
// axios.defaults.baseURL = "https://asad-crud-api.herokuapp.com/api/expense/";
// axios.defaults.baseURL = "http://localhost:4000/users/";
//above method is global - if we do same for other url, it will be overridden
//so i used the custom url then concated it with rmaining url
// const baseURL = "http://localhost:4000/users/";
//Now make axios instance instead of custom variable url

const usersBase = axios.create({
  baseURL: "http://localhost:4000/users/",
});

class UserApiCalls {
  get = (url, data) =>
    new Promise((resolve, reject) => {
      usersBase
        .get(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      usersBase
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
      usersBase
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
      usersBase
        .put(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}

export default UserApiCalls;
