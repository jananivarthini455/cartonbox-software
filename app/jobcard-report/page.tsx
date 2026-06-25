


"use client";

import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { useEffect, useState } from "react";
import { getJobCardReport } from "../api";
import * as XLSX from "xlsx";


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
  const [jobCardNumber, setJobCardNumber] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [rowData, setRowData] = useState<any[]>([]);
useEffect(() => {
  loadJobCards();
}, []);


const loadJobCards = async () => {
  try {
    const data = await getJobCardReport();
       console.log("API Response:", data);

    const formattedData = data.flatMap((order: any) =>
      order.items.map((item: any) => ({
        orderNo: order.order_id,
        poNo: item.po_number,

        l: item.l,
        b: item.b,
        h: item.h,

        ply: item.ply,

        noOfBox: item.quantity,

        boardSize: item.board_size,

        noOfBoard: item.no_of_board,

        sheet: item.no_of_sheet,

        paper: item.no_of_paper,

        remarks: item.remarks,

        measure: item.measure,

        boxType: item.box_type,

        orderDate: order.created_at,

        Status: "Pending",
      }))
    );

    setRowData(formattedData);
    setFilteredData(formattedData);

  } catch (error) {
    console.error(error);
  }
};





const columnDefs: ColDef<any>[] = [
  { field: "orderNo", headerName: "Order No" },
   { field: "poNo", headerName: "Po No" },
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
    { field: "Status", headerName: "Status" },

];

const handleSearch = () => {

  if (jobCardNumber === "") {
    setFilteredData(rowData);
    return;
  }

  const filtered = rowData.filter((item: any) =>
    item.orderNo.toLowerCase().includes(jobCardNumber.toLowerCase())
  );

  setFilteredData(filtered);
};

const exportToExcel = () => {
  // Convert JSON data to worksheet
  const worksheet = XLSX.utils.json_to_sheet(filteredData);

  // Create workbook
  const workbook = XLSX.utils.book_new();

  // Append worksheet
  XLSX.utils.book_append_sheet(workbook, worksheet, "JobCardReport");

  // Download Excel file
  XLSX.writeFile(workbook, "JobCardReport.xlsx");
};
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
              {/* Customer Name */}
              Job Card Number
            </label>

             {/* <select className="border-2 border-gray-400 p-3 rounded-lg min-w-[250px] text-black"> */}
            <input
              type="text"
              placeholder="Enter Job Card Number"
              className="border-2 border-gray-400 p-3 rounded-lg min-w-[250px] text-black"
              value={jobCardNumber}
              onChange={(e) => setJobCardNumber(e.target.value)}
            />
            {/* </select> */}













            

           
          </div>

          <button
            className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700"
            onClick={exportToExcel}
          >
            Export Excel
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
  


  //  theme="legacy"
  // rowData={rowData}
  // columnDefs={columnDefs}


  // rowData={rowData}
  rowData={filteredData}
  columnDefs={columnDefs}
  // defaultColDef={{
  //   flex: 1,
  //   sortable: true,
  //   filter: true,
  //   resizable: true,
  // }}


  defaultColDef={{
  minWidth: 150,
  sortable: true,
  filter: true,
  resizable: true,
}}
/>
</div>



        

      </div>

    </div>
  );
}

