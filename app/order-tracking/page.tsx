"use client";


import { useRouter } from "next/navigation";
import { useState } from "react";




export default function OrderTrackingPage() {
      const router = useRouter();
      const [showModal, setShowModal] = useState(false);


  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-black">
            Order Tracking
          </h1>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
           onClick={() => router.push("/create-job")}
          >
            + New Order
          </button>
        </div>


{/* Summary Cards */}

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

  {/* Total Orders */}
  <div className="bg-blue-500 text-white rounded-xl p-5 shadow-lg">
    <h2 className="text-lg font-semibold">
      Total Orders
    </h2>

    <p className="text-3xl font-bold mt-2">
      120
    </p>
  </div>

  {/* Pending Orders */}
  <div className="bg-red-500 text-white rounded-xl p-5 shadow-lg">
    <h2 className="text-lg font-semibold">
      Pending Orders
    </h2>

    <p className="text-3xl font-bold mt-2">
      25
    </p>
  </div>

  {/* Completed Orders */}
  <div className="bg-green-500 text-white rounded-xl p-5 shadow-lg">
    <h2 className="text-lg font-semibold">
      Completed Orders
    </h2>

    <p className="text-3xl font-bold mt-2">
      95
    </p>
  </div>

</div>



        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

          <input
            type="text"
            placeholder="Search Order No"
            className="border-2 border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="text"
            placeholder="Customer Name"
            className="border-2 border-gray-300 rounded-lg p-3 text-black"
          />

          <input
            type="date"
            className="border-2 border-gray-300 rounded-lg p-3 text-black"
          />

          <select className="border-2 border-gray-300 rounded-lg p-3 text-black">
            <option>All Status</option>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
            <option>Delivered</option>
          </select>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          {/* <table className="w-full border border-gray-300"> */}
            <table className="w-full border-2 border-black text-black">

            <thead>
              <tr className="bg-blue-100">

                <th className="border border-black p-3">Order No</th>
                <th className="border border-black p-3">Customer</th>
                <th className="border border-black p-3">PO Number</th>
                <th className="border border-black p-3">Date</th>
                <th className="border border-black p-3">Delivery Date</th>
                <th className="border border-black p-3">Status</th>
                <th className="border border-black p-3">Actions</th>

              </tr>
            </thead>

            <tbody>

              <tr className="hover:bg-gray-50">
                <td className="border border-black p-3">ORD-2026-001</td>
                <td className="border border-black p-3">ABC Packaging</td>
                <td className="border border-black p-3">PO-123</td>
                <td className="border border-black p-3">12-07-2026</td>
                <td className="border border-black p-3">15-07-2026</td>

                <td className="border border-black p-3">
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>

                <td className="border border-black p-3">
                  <div className="flex gap-2">

                    <button className="bg-green-600 text-white px-3 py-1 rounded"
                     onClick={() => setShowModal(true)}
                    >
                      View
                    </button>

                  
                    <button className="bg-red-600 text-white px-3 py-1 rounded">
                      Delete
                    </button>

                  </div>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-600">
            Showing 1 to 10 of 100 Orders
          </p>

          <div className="flex gap-2">

            <button className="border px-4 py-2 rounded">
              Previous
            </button>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              1
            </button>

            <button className="border px-4 py-2 rounded">
              2
            </button>

            <button className="border px-4 py-2 rounded">
              3
            </button>

            <button className="border px-4 py-2 rounded">
              Next
            </button>

          </div>

        </div>

      </div>



      {showModal && (
  <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

    <div className="bg-white w-[500px] rounded-xl p-6 shadow-xl">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-black">
          Order Tracking
        </h2>

        <button
          onClick={() => setShowModal(false)}
          className="text-red-600 text-xl font-bold"
        >
          ✕
        </button>
      </div>

      <div className="mb-6">
        <p className="text-black">
          <strong>Order No:</strong> ORD-2026-001
        </p>

        <p className="text-black">
          <strong>Customer:</strong> ABC Packaging
        </p>
      </div>

      {/* Timeline */}

      {/* <div className="space-y-6">

        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-500 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            Corrugation
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-500 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            Pasting
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 bg-green-500 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            Gressing
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 bg-yellow-500 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            RS4 + Printing
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            Paste Joint / Pin
          </span>
        </div>

        <div className="flex items-center">
          <div className="w-5 h-5 bg-gray-300 rounded-full mr-4"></div>
          <span className="text-black font-semibold">
            Dispatched
          </span>
        </div>

      </div> */}



      <div className="flex flex-col">

  {/* Corrugation */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
      <div className="w-1 h-10 bg-green-500"></div>
    </div>

    <span className="text-black font-semibold">
      Corrugation
    </span>
  </div>

  {/* Pasting */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
      <div className="w-1 h-10 bg-green-500"></div>
    </div>

    <span className="text-black font-semibold">
      Pasting
    </span>
  </div>

  {/* Gressing */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-green-500 rounded-full"></div>
      <div className="w-1 h-10 bg-green-500"></div>
    </div>

    <span className="text-black font-semibold">
      Gressing
    </span>
  </div>

  {/* Current Stage */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
      <div className="w-1 h-10 bg-gray-300"></div>
    </div>

    <span className="text-black font-semibold">
      RS4 + Printing
    </span>
  </div>

  {/* Pending */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
      <div className="w-1 h-10 bg-gray-300"></div>
    </div>

    <span className="text-black font-semibold">
      Paste Joint / Pin
    </span>
  </div>

  {/* Dispatched */}
  <div className="flex items-center">
    <div className="flex flex-col items-center mr-4">
      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
    </div>

    <span className="text-black font-semibold">
      Dispatched
    </span>
  </div>

</div>

    </div>

  </div>
)}
    </div>
  );
}