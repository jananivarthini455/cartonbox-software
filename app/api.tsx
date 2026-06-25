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
    const response = await API.post("https://margin-herring-commence.ngrok-free.dev/api/orders", data,
       {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  
  

    );

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
  const response = await axios.post("https://margin-herring-commence.ngrok-free.dev/api/customers", 
     data,
     {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    },
  
   );
  return response.data;
};



// export const findGstin = async (gstin: string) => {
//   const response = await axios.get(
//     `https://margin-herring-commence.ngrok-free.dev/api/customers/lookup?gstin=${gstin}`
//   ),{
//     headers: {
//     "ngrok-skip-browser-warning": "true"
//   }}


//   return response.data;
// };





export const findGstin = async (gstin: string) => {
  const response = await axios.get(
    `https://margin-herring-commence.ngrok-free.dev/api/customers/lookup?gstin=${gstin}`,
    {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );

  return response.data;
};

export const getCustomers = async () => {
  const response = await axios.get(
    "https://margin-herring-commence.ngrok-free.dev/api/customers",
     {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  

  return response.data;
};

export const getJobCardReport = async () => {
  const response = await axios.get(
    "https://margin-herring-commence.ngrok-free.dev/api/orders?customer_id=2&start_date=2006-01-02&end_date=2026-07-21",
     {
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    }
  );
  

  return response.data;
};



export const deleteCustomer = async (id: number) => {

  const response = await API.delete(
    `/api/customers/${id}`
  );

  return response.data;

};
export default API;


// http://localhost:8080/