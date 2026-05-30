import axios from "axios";

const API = axios.create({
  baseURL: "https://rare-seals-wish.loca.lt",
  headers: {
    "Content-Type": "application/json",
  },
});

export const createOrder = async (data: any) => {
  const response = await API.post("/api/orders", data);
  return response.data;
};




export const createCustomer = async (data: any) => {
  const response = await API.post("/api/customers", data);
  return response.data;
};

export default API;