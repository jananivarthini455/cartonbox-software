"use client";
import { useState,useEffect } from "react";
import { createCustomer,findGstin,updateCustomer } from "../api";


export default function CreateCustomer() {
  const [isEdit, setIsEdit] = useState(false);
  const [customer_name, setName] = useState("");
const [company_name, setCompanyName] = useState("");
const [mobile_number, setMobileNumber] = useState("");
const [address, setAddress] = useState("");
const [remarks, setRemarks] = useState("");
const [customer_type, setCustomerType] = useState("");
const [gst_category, setGstCategory] = useState("");
const [territory, setTerritory] = useState("");
const [customer_group, setCustomerGroup] = useState("");
const [tax_category, setTaxCategory] = useState("");
const [email, setEmail] = useState("");
const isValidMobile = /^[0-9]{10}$/.test(mobile_number);
const [gstin, setGstin] = useState("");
const [customerId, setCustomerId] = useState<number | null>(null);

const isValidEmail =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


//   useEffect(() => {
//   const data = sessionStorage.getItem("editCustomer");

//   if (data) {
//     const customer = JSON.parse(data);

//     setIsEdit(true);
//      setCustomerId(customer.id);

//     setName(customer.customer_name);
//     setCompanyName(customer.company_name);
//     setMobileNumber(customer.mobile_number);
//     setEmail(customer.email);
//     setAddress(customer.address);
//     setCustomerType(customer.customer_type);
//     setCustomerGroup(customer.customer_group);
//     setTerritory(customer.territory);
//     setGstin(customer.gstin);

//     // Continue for every field...
//   }
// }, []);

// useEffect(() => {
//   const data = sessionStorage.getItem("editCustomer");

//   if (data) {
//     // ===== EDIT MODE =====
//     const customer = JSON.parse(data);

//     setIsEdit(true);
//     setCustomerId(customer.id);

//     setName(customer.customer_name || "");
//     setCompanyName(customer.company_name || "");
//     setMobileNumber(customer.mobile_number || "");
//     setEmail(customer.email || "");
//     setAddress(customer.address || "");
//     setCustomerType(customer.customer_type || "");
//     setCustomerGroup(customer.customer_group || "");
//     setTerritory(customer.territory || "");
//     setTaxCategory(customer.tax_category || "");
//     setGstCategory(customer.gst_category || "");
//     setGstin(customer.gstin || "");
//   } else {
//     // ===== CREATE MODE =====
//     setIsEdit(false);
//     setCustomerId(null);

//     setName("");
//     setCompanyName("");
//     setMobileNumber("");
//     setEmail("");
//     setAddress("");
//     setCustomerType("");
//     setCustomerGroup("");
//     setTerritory("");
//     setTaxCategory("");
//     setGstCategory("");
//     setGstin("");
//   }
// }, []);





useEffect(() => {
  const loadCustomer = () => {
    const data = sessionStorage.getItem("editCustomer");

    if (data) {
      const customer = JSON.parse(data);

      setIsEdit(true);
      setCustomerId(customer.id);

      setName(customer.customer_name || "");
      setCompanyName(customer.company_name || "");
      setMobileNumber(customer.mobile_number || "");
      setEmail(customer.email || "");
      setAddress(customer.address || "");
      setCustomerType(customer.customer_type || "");
      setCustomerGroup(customer.customer_group || "");
      setTerritory(customer.territory || "");
      setTaxCategory(customer.tax_category || "");
      setGstCategory(customer.gst_category || "");
      setGstin(customer.gstin || "");
    } else {
      // Clear everything
      setIsEdit(false);
      setCustomerId(null);

      setName("");
      setCompanyName("");
      setMobileNumber("");
      setEmail("");
      setAddress("");
      setCustomerType("");
      setCustomerGroup("");
      setTerritory("");
      setTaxCategory("");
      setGstCategory("");
      setGstin("");
    }
  };

  loadCustomer();
}, []);





// const handleUpdate = async () => {
//   try {
//     await updateCustomer(customerId, {
//       customer_name,
//       gstin,
//       customer_type,
//       gst_category,
//       territory,
//       customer_group,
//       tax_category,
//       company_name,
//       mobile_number,
//       address,
//       email,
//     });

//     alert("Customer Updated Successfully");
//   } catch (error) {
//     console.error(error);
//     alert("Update Failed");
//   }
// };
















const handleUpdate = async () => {
  if (!customerId) {
    alert("Customer ID not found");
    return;
  }

 
  try {
    await updateCustomer(customerId, {
      gstin,
      customer_name,
      company_name,
      email,
      mobile_number,
      address,
      customer_type,
      gst_category,
      territory,
      customer_group,
      tax_category,
      is_active: true,
    });

    alert("Customer Updated Successfully");
    sessionStorage.removeItem("editCustomer");
setIsEdit(false);
setCustomerId(null);
  } catch (error) {
    console.error(error);
    alert("Update Failed");
  }
};

  return (
    <div className="min-h-screen bg-gray-200 p-6 text-black">

      <div className="max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Create Customer
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="md:col-span-2">

  <label className="block mb-2 text-lg font-bold">
    GSTIN
  </label>

  <div className="flex gap-2">

    <input
      type="text"
      // className="flex-1 border-2 border-gray-400 p-3 rounded-lg text-black"
      className={`flex-1 border-2 p-3 rounded-lg text-black ${
  isEdit ? "bg-gray-200 cursor-not-allowed" : "border-gray-400"
}`}
      placeholder="Enter GSTIN"
      value={gstin}
      onChange={(e) => setGstin(e.target.value)}
      readOnly={isEdit}

    />

    <button
      // className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer"
        disabled={isEdit}
         className={`bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 cursor-pointer ${
    isEdit
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-600 hover:bg-blue-700"
  }`}


      onClick={async (e) => {
    e.preventDefault();

    try {
      const data = await findGstin(gstin);

      console.log("GST Response", data);

      setName(data.customer_name || "");
      setCompanyName(data.company_name || "");
      setAddress(data.address || "");

    } catch (error) {
      console.error(error);
      alert("GSTIN not found");
    }
  }}

      
    >
      Find
    </button>

  </div>

</div>

          <div>
            <label className="block mb-2 text-lg font-bold">
              Customer Name
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter customer name"
                value={customer_name}
  onChange={(e) => setName(e.target.value)}

            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-bold">
              Company Name
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter company name"
              value={company_name}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>


          <div>
  <label className="block mb-2 text-lg font-bold">
    Company Type
  </label>

  <select
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    value={customer_type}
    onChange={(e) => setCustomerType(e.target.value)}
  >
    <option value="">Select Company Type</option>
    <option value="Company">Company</option>
    <option value="Individual">Individual</option>
    <option value="Partnership">Partnership</option>
  </select>
</div>

<div>
  <label className="block mb-2 text-lg font-bold">
    GST Category
  </label>

  <select
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    value={gst_category}
    onChange={(e) => setGstCategory(e.target.value)}
  >
    <option value="">Select GST Category</option>
    <option value="Register">Register</option>
    <option value="Regular">Regular</option>
    <option value="Unregistered">Unregistered</option>
  </select>
</div>

<div>
  <label className="block mb-2 text-lg font-bold">
    Territory
  </label>

  <input
    type="text"
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    placeholder="Enter Territory"
    value={territory}
    onChange={(e) => setTerritory(e.target.value)}
  />
</div>

<div>
  <label className="block mb-2 text-lg font-bold">
    Customer Group
  </label>

  <select
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    value={customer_group}
    onChange={(e) => setCustomerGroup(e.target.value)}
  >
    <option value="">Select Customer Group</option>
    <option value="B2B">B2B</option>
    <option value="B2C">B2C</option>
  </select>
</div>




<div>
  <label className="block mb-2 text-lg font-bold">
    Tax Category
  </label>

  <select
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    value={tax_category}
    onChange={(e) => setTaxCategory(e.target.value)}
  >
    <option value="">Select Tax Category</option>
    <option value="In State">In State</option>
    <option value="Out State">Out State</option>
  </select>
</div>

<div>
  <label className="block mb-2 text-lg font-bold">
    Email
  </label>

  <input
    type="email"
    className="w-full border-2 border-gray-400 p-3 rounded-lg"
    placeholder="Enter Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />


{email && !isValidEmail && (
  <p className="text-red-500 text-sm mt-1">
    Enter a valid email address
  </p>
)}
</div>
          <div>
            <label className="block mb-2 text-lg font-bold">
              Phone Number
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter phone number"
              value={mobile_number}
              onChange={(e) => setMobileNumber(e.target.value)}
            />

            {mobile_number && !isValidMobile && (
  <p className="text-red-500 text-sm mt-1">
    Mobile number must be 10 digits
  </p>
)}
          </div>

          <div>
            <label className="block mb-2 text-lg font-bold">
              Address
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

        

        </form>

        <div className="mt-8 flex gap-4">

          <button // className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
            disabled={isEdit}
             className={`bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 ${
    isEdit
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-green-700 hover:bg-green-800"
  }`}

           onClick={async () => {
    try {
      await createCustomer({
        customer_name,
        gstin,
        
        customer_type,
        gst_category,
        territory,
        customer_group,
        tax_category,
        company_name,
        mobile_number,
        address,
        email,
        
      });

      alert("Customer Saved Successfully");
    } catch (error) {
      console.error(error);
      alert("Save Failed");
    }
  }}
          >
            Save Customer
          </button>


           <button
    // className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800"
    onClick={handleUpdate}


     disabled={!isEdit}
  className={`bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 ${
    !isEdit
      ? "bg-gray-400 cursor-not-allowed"
      : "bg-blue-700 hover:bg-blue-800"
  }`}
  >
    Update Customer
  </button>


          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}