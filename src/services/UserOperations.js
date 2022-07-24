import UserApiCalls from "./UserApiCalls";
class UserOperations extends UserApiCalls {
  addUser = (data) => this.post("/register", data);
  loginUser = (data) => this.post("/login", data);
}

let userOperations = new UserOperations();

export default userOperations;
