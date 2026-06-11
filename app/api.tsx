import axios from "axios";

const API = axios.create({
  baseURL: "https://rare-seals-wish.loca.lt",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const createOrder = async (data: any) => {
//     console.log("API FUNCTION CALLED");

//   const response = await API.post("/api/orders", data);
//   return response.data;
// };


export const createOrder = async (data: any) => {
  console.log("API FUNCTION CALLED");

  try {
    const response = await API.post("/api/orders", data);

    console.log("API SUCCESS");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log("API ERROR");
    console.error(error);

    throw error;
  }
};




export const createCustomer = async (data: any) => {
  const response = await API.post("/api/customers", data);
  return response.data;
};

export default API;