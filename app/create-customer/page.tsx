"use client";
import { useState } from "react";
import { createCustomer } from "../api";


export default function CreateCustomer() {
  const [customerName, setCustomerName] = useState("");
const [companyName, setCompanyName] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [address, setAddress] = useState("");
const [remarks, setRemarks] = useState("");
  return (
    <div className="min-h-screen bg-gray-200 p-6 text-black">

      <div className="max-w-4xl mx-auto bg-gray-50 shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-8">
          Create Customer
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 text-lg font-bold">
              Customer Name
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter customer name"
                value={customerName}
  onChange={(e) => setCustomerName(e.target.value)}

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
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-lg font-bold">
              Phone Number
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
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

          <div className="md:col-span-2">
            <label className="block mb-2 text-lg font-bold">
              Remarks
            </label>

            <textarea
              rows={4}
              className="w-full border-2 border-gray-400 p-3 rounded-lg"
              placeholder="Enter remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

        </form>

        <div className="mt-8 flex gap-4">

          <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800"
           onClick={async () => {
    try {
      await createCustomer({
        customerName,
        companyName,
        phoneNumber,
        address,
        remarks,
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

          <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}