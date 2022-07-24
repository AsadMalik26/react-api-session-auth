import DataApiCalls from "./DataApiCalls";

class ProductOperations extends DataApiCalls {
  addProduct = (data) => this.post("", data);

  getProduct = () => this.get("");
  getSingleProduct = (id) => this.get("" + id);

  updateProduct = (_id, data) => this.put("" + _id, data);
  deleteProduct = (_id) => this.delete("" + _id);
}

let productOperations = new ProductOperations();

export default productOperations;
