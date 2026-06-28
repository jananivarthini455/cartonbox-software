import axios from "axios";

// const API = axios.create({
//   baseURL: "https://rare-seals-wish.loca.lt",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const API = axios.create({
  baseURL: "https://cartonbox-backend-1.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// export const createOrder = async (data: any) => {
//     co nsole.log("API FUNCTION CALLED");

//   const response = await API.post("/api/orders", data);
//   return response.data;
// };


export const createOrder = async (data: any) => {
  console.log("API FUNCTION CALLED");
  

  try {
    const response = await API.post("/api/orders", data,
    //    {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true",
    //   },
    // }
  
  

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
  const response = await API.post("/api/customers", 
     data,
    //  {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true",
    //   },
    // },
  
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
  const response = await API.get(
    `/api/customers/lookup?gstin=${gstin}`,
    // {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true",
    //   },
    // }
  );

  return response.data;
};

export const getCustomers = async () => {
  const response = await API.get(
    "/api/customers",
    //  {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true",
    //   },
    // }
  );
  

  return response.data;
};

export const getJobCardReport = async () => {
  const today = new Date().toISOString().split("T")[0];
  const response = await API.get(
    
    "/api/orders",
     {
       params: {
     
        end_date: today,
      },
      // headers: {
      //   "ngrok-skip-browser-warning": "true",
      // },
    }
  );
  

  return response.data;
};


export const getJobCardReports = async (
  customerId: string,
  startDate: string,
  endDate: string
) => {
  const response = await API.get(
    "/api/orders",
    {
      params: {
        customer_id: customerId,
        start_date: startDate,
        end_date: endDate,
      },
      // headers: {
      //   "ngrok-skip-browser-warning": "true",
      // },
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





// export const updateCustomer = async (data: any) => {
//   try {
//     const response = await API.put(
//       "/api/customers",
//       data,
//       {
//         headers: {
//           "ngrok-skip-browser-warning": "true",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
 
// };





export const updateCustomer = async (
  id: number,
  data: any
) => {
  const response = await API.put(
    "/api/customers",
    {
      id,
      ...data,
    },
    // {
    //   headers: {
    //     "ngrok-skip-browser-warning": "true",
    //   },
    // }
  );

  return response.data;
};
export default API;


// http://localhost:8080/