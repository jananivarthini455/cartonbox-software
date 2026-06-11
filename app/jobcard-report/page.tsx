


"use client";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";


import {
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

export default function JobCardReport() {





const columnDefs: ColDef<any>[] = [
  { field: "orderNo", headerName: "Order No" },
  { field: "orderDate", headerName: "Order Date" },
  { field: "l", headerName: "L" },
  { field: "b", headerName: "B" },
  { field: "h", headerName: "H" },
  { field: "ply", headerName: "Ply" },
  { field: "noOfBox", headerName: "No Of Box" },
  { field: "boxSize", headerName: "Box Size" },
  { field: "boardSize", headerName: "Board Size" },
  { field: "noOfBoard", headerName: "No Of Board" },
  { field: "sheet", headerName: "Sheet" },
  { field: "paper", headerName: "Paper" },
  { field: "rate", headerName: "Rate" },
  { field: "remarks", headerName: "Remarks" },
  { field: "measure", headerName: "Measure" },
  { field: "boxType", headerName: "Box Type" },
];
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-black mb-6">
          Job Card Report
        </h1>

        {/* Filter Section */}

        <div className="flex flex-wrap gap-4 items-end mb-6">

          <div>
            <label className="block mb-2 font-bold text-black">
              From Date
            </label>

            <input
              type="date"
              className="border-2 border-gray-400 p-3 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-black">
              To Date
            </label>

            <input
              type="date"
              className="border-2 border-gray-400 p-3 rounded-lg text-black"
            />
          </div>

          <div>
            <label className="block mb-2 font-bold text-black">
              Customer Name
            </label>

            <select className="border-2 border-gray-400 p-3 rounded-lg min-w-[250px] text-black">
              <option>All Customers</option>
            </select>
          </div>

          <button
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
          >
            Search
          </button>

        </div>

        <hr className="border-gray-400 mb-6" />

        {/* Report Table */}

      <div
  className="ag-theme-alpine"
  style={{
    height: "600px",
    width: "100%",
  }}
>



 


<AgGridReact<any>
  theme="legacy"
  rowData={[]}
  columnDefs={columnDefs}
/>
</div>



        

      </div>

    </div>
  );
}

