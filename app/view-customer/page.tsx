"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCustomers,deleteCustomer } from "../api";




export default function ViewCustomerPage() {


  const [filteredCustomers, setFilteredCustomers] = useState([]);

const [customerNameFilter, setCustomerNameFilter] = useState("");
const [mobileFilter, setMobileFilter] = useState("");
const [customerTypeFilter, setCustomerTypeFilter] = useState("");
const [customerGroupFilter, setCustomerGroupFilter] = useState("");

          const router = useRouter();
              const [customers, setCustomers] = useState([]);

          useEffect(() => {
  loadCustomers();
}, []);

const loadCustomers = async () => {
  try {
    const data = await getCustomers();

    console.log(data);

    // setCustomers(data);
    setCustomers(data);
    setFilteredCustomers(data);

  } catch (error) {
    console.error(error);
  }
};



const handleSearch = () => {
  const filtered = customers.filter((customer: any) => {

    const matchName =
      customer.customer_name
        ?.toLowerCase()
        .includes(customerNameFilter.toLowerCase());

    // const matchMobile =
    //   customer.mobile_number
    //     ?.includes(mobileFilter);
    const matchMobile =
  mobileFilter === ""
    ? true
    : String(customer.mobile_number).includes(mobileFilter);

    const matchType =
      customerTypeFilter === ""
        ? true
        : customer.customer_type === customerTypeFilter;

    const matchGroup =
      customerGroupFilter === ""
        ? true
        : customer.customer_group === customerGroupFilter;



        const handleEdit = (id: number) => {
  router.push(`/create-customer?id=${id}`);
};

const handleDelete = async (id: number) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this customer?"
  );

  if (!confirmDelete) return;

  try {

    await deleteCustomer(id);

    alert("Customer deleted successfully");

    loadCustomers(); // reload table

  } catch (error) {

    console.error(error);

    alert("Delete failed");

  }

};

    return (
      matchName &&
      matchMobile &&
      matchType &&
      matchGroup
    );
  });

  setFilteredCustomers(filtered);
};

const handleClear = () => {

  setCustomerNameFilter("");
  setMobileFilter("");
  setCustomerTypeFilter("");
  setCustomerGroupFilter("");

  setFilteredCustomers(customers);
};


  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold text-black">
            Customer Master
          </h1>

          <button className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700"
             onClick={() => router.push("/create-customer")}
          >
            + Create Customer
          </button>

        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-blue-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-900">
              Total Customers
            </h3>
            <p className="text-3xl font-bold text-blue-700">
               {customers.length}
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-green-900">
              B2B Customers
            </h3>
            <p className="text-3xl font-bold text-green-700">
              {
                customers.filter(
                (customer: any) => customer.customer_group === "B2B"
                ).length
              }
            </p>
          </div>

          <div className="bg-orange-100 p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-orange-900">
              B2C Customers
            </h3>
            <p className="text-3xl font-bold text-orange-700">
               {
                  customers.filter(
                  (customer: any) => customer.customer_group === "B2C"
                  ).length
              }
            </p>
          </div>

        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          <input
            type="text"
            placeholder="Customer Name"
            className="border-2 border-gray-300 p-3 rounded-lg text-black"
             value={customerNameFilter}
            onChange={(e) => setCustomerNameFilter(e.target.value)}
          />

          <input
            type="text"
            placeholder="Mobile Number"
            className="border-2 border-gray-300 p-3 rounded-lg text-black"
              value={mobileFilter}
            onChange={(e) => setMobileFilter(e.target.value)}

          />

          <select className="border-2 border-gray-300 p-3 rounded-lg text-black"
            value={customerTypeFilter}
          onChange={(e) => setCustomerTypeFilter(e.target.value)}

          >
            <option>All Customer Type</option>
            <option>Company</option>
            <option>Individual</option>
            <option>Partnership</option>
          </select>

          <select className="border-2 border-gray-300 p-3 rounded-lg text-black"
            value={customerGroupFilter}
          onChange={(e) => setCustomerGroupFilter(e.target.value)}
          >
            <option>All Groups</option>
            <option>B2B</option>
            <option>B2C</option>
          </select>

        </div>

        {/* Search Buttons */}
        <div className="flex gap-3 mb-6">

          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            onClick={handleSearch}

          >
            Search
          </button>

          <button className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-700"
            onClick={handleClear}

          >
            Clear
          </button>

        </div>

        {/* Customer Table */}
        <div className="overflow-x-auto">

          
                <table className="w-full border border-gray-300 text-black bg-white">

            <thead>

                <tr className="bg-blue-100 text-black">

                <th className="border p-3">Customer ID</th>
                <th className="border p-3">Customer Name</th>
                <th className="border p-3">Company Name</th>
                <th className="border p-3">Mobile</th>
                <th className="border p-3">Email</th>
                <th className="border p-3">Type</th>
                <th className="border p-3">Group</th>
                <th className="border p-3">GSTIN</th>
                <th className="border p-3">Territory</th>
                <th className="border p-3">Actions</th>

              </tr>

            </thead>

         







            <tbody>

  {/* {customers.map((customer: any) => ( */}
  {filteredCustomers.map((customer: any) => (

    <tr key={customer.id}>

      <td className="border p-3">
        {customer.id}
      </td>

      <td className="border p-3">
        {customer.customer_name}
      </td>

      <td className="border p-3">
        {customer.company_name}
      </td>

      <td className="border p-3">
        {customer.mobile_number}
      </td>

      <td className="border p-3">
        {customer.email}
      </td>

      <td className="border p-3">
        {customer.customer_type}
      </td>

      <td className="border p-3">
        {customer.customer_group}
      </td>

      <td className="border p-3">
        {customer.gstin}
      </td>

      <td className="border p-3">
        {customer.territory}
      </td>

      <td className="border p-3">
  <div className="flex gap-2 justify-center">

    <button
      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      onClick={() => handleEdit(customer.id)}
    >
      Edit
    </button>

    <button
      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      onClick={() => handleDelete(customer.id)}
    >
      Delete
    </button>

  </div>
</td>

    </tr>

  ))}

</tbody>

          </table>

        </div>

      </div>

    </div>
  );
}