import api from "./api";

const productsService = {
  async getAllProducts() {
    try {
      const response = await api().get('');
      return response.data;
    } catch(error) {
      console.error(error);
      return error;
    }
  },
};

export default productsService;