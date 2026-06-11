"use client";

import Link from "next/link";
import { useState,useEffect} from "react";
import { calculateUniversal } from "./universal";
import { calculateSemiUniversal } from "./semiuniversal";
import { calculateDiscrosBox } from "./discrosbox";
import { calculateTubeCarton } from "./tubecarton";
import { calculateDisplayCarton } from "./displaycarton";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { createOrder } from "../api";

const buttonStyle =
  "text-white font-semibold py-3 rounded-lg shadow-md transition cursor-pointer";
export default function CreateJob() {
      const year = new Date().getFullYear();
      const [orderNo, setOrderNo] = useState(
    `ORD-${year}-001`
  );


    const [showBox, setShowBox] = useState(false);
    const [length, setLength] = useState("");
const [breadth, setBreadth] = useState("");

const [measure, setMeasure] = useState("");
const [joint, setJoint] = useState("");
const [ups, setUps] = useState("");

const [cuttingSize, setCuttingSize] = useState("");

const [height, setHeight] = useState("");
const [reelSize, setReelSize] = useState("");

const [noOfBoard, setNoOfBoard] = useState("");
const [sheet, setSheet] = useState("");
const [papper, setPapper] = useState("");
const [jobItems, setJobItems] = useState<any[]>([]);


const [rate, setRate] = useState("");


// const [ply, setPly] = useState("");

const [top, setTop] = useState("");
const [balance, setBalance] = useState("");
const [bottom, setBottom] = useState("");

const [flutter, setFlutter] = useState("");

const [topWeight, setTopWeight] = useState("");
const [balanceWeight, setBalanceWeight] = useState("");
const [bottomWeight, setBottomWeight] = useState("");
const [totalWeight, setTotalWeight] = useState("");
// const [boardSize, setBoardSize] = useState("");










const [customerName, setCustomerName] = useState("");
const [poNumber, setPoNumber] = useState("");

const [quantity, setQuantity] = useState("");
const [boardSize, setBoardSize] = useState("");

const [remarks, setRemarks] = useState(""); 

const [deliveryDate, setDeliveryDate] = useState("");
const [deliveryPlace, setDeliveryPlace] = useState("");

const [calico, setCalico] = useState("");
const [calicoRemark, setCalicoRemark] = useState("");

const [pasteJoint, setPasteJoint] = useState("");
const [pasteRemark, setPasteRemark] = useState("");

const [pin, setPin] = useState("");
const [pinRemark, setPinRemark] = useState("");

const [elastic, setElastic] = useState("");
const [elasticRemark, setElasticRemark] = useState("");

const [print, setPrint] = useState("");
const [printRemark, setPrintRemark] = useState("");

const [boxType, setBoxType] = useState("");
const [ply, setPly] = useState("");

const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

const [operator, setOperator] = useState("");

const [cutting, setCutting] = useState(0);
const [reel, setReel] = useState(0);




useEffect(() => {


  const currentYear = new Date().getFullYear();

  const savedOrder = localStorage.getItem("currentOrderNo");

  if (savedOrder) {

    const parts = savedOrder.split("-");

    const savedYear = parts[1];

    // if year changed
    if (savedYear !== String(currentYear)) {

      const newOrder = `ORD-${currentYear}-001`;

      localStorage.setItem("currentOrderNo", newOrder);

      setOrderNo(newOrder);

    } else {

      setOrderNo(savedOrder);

    }

  } else {

    const firstOrder = `ORD-${currentYear}-001`;

    localStorage.setItem("currentOrderNo", firstOrder);

    setOrderNo(firstOrder);

  }



if (boxType === "universal") {
   // calculateUniversal()

   if (boxType === "universal") {

  const result = calculateUniversal(
    Number(length),
    Number(breadth),
    Number(height),
    measure,
    joint,
    ups
  );

  if (result.cutting > 0) {

    setCuttingSize(
      result.cutting.toFixed(2) + " inch"
    );

  } else {

    setCuttingSize("");
  }

  if (result.reel > 0) {

    setReelSize(
      result.reel.toFixed(2) + " inch"
    );

  } else {

    setReelSize("");
  }

}
}

else if (boxType === "semi universal") {
   

  const result = calculateUniversal(
    Number(length),
    Number(breadth),
    Number(height),
    measure,
    joint,
    ups
  );

  if (result.cutting > 0) {

    setCuttingSize(
      result.cutting.toFixed(2) + " inch"
    );

  } else {

    setCuttingSize("");
  }

  if (result.reel > 0) {

    setReelSize(
      result.reel.toFixed(2) + " inch"
    );

  } else {

    setReelSize("");
  }



 
}





  else if (boxType === "discros box") {
   

  const result = calculateDiscrosBox(
    Number(length),
    Number(breadth),
    Number(height),
    measure,
    joint,
    ups
  );

  if (result.cutting > 0) {

    setCuttingSize(
      result.cutting.toFixed(2) + " inch"
    );

  } else {

    setCuttingSize("");
  }

  if (result.reel > 0) {

    setReelSize(
      result.reel.toFixed(2) + " inch"
    );

  } else {

    setReelSize("");
  }



 
}






  else if (boxType === "tube carton") {
   

  const result = calculateTubeCarton(
    Number(length),
    Number(breadth),
    Number(height),
    measure,
    joint,
    ups
  );

  if (result.cutting > 0) {

    setCuttingSize(
      result.cutting.toFixed(2) + " inch"
    );

  } else {

    setCuttingSize("");
  }

  if (result.reel > 0) {

    setReelSize(
      result.reel.toFixed(2) + " inch"
    );

  } else {

    setReelSize("");
  }



 
}



else if (boxType === "display carton") {
   

  const result = calculateDisplayCarton(
    Number(length),
    Number(breadth),
    Number(height),
    measure,
    joint,
    ups
  );

  if (result.cutting > 0) {

    setCuttingSize(
      result.cutting.toFixed(2) + " inch"
    );

  } else {

    setCuttingSize("");
  }

  if (result.reel > 0) {

    setReelSize(
      result.reel.toFixed(2) + " inch"
    );

  } else {

    setReelSize("");
  }



 
}





if (
  boxType === "universal" ||
  boxType === "display carton"
) {

 

  // =====================
  // No Of Board
  // =====================

  let board = 0;
  const qty = Number(quantity);

  if (joint === "single" && ups === "single") {
    board = qty;
  }
  else if (joint === "single" && ups === "double") {
    board = qty / 2;
  }
  else if (joint === "double" && ups === "single") {
    board = qty * 2;
  }
  else if (joint === "double" && ups === "double") {
    board = qty;
  }

  setNoOfBoard(String(board));

  // =====================
  // Sheet
  // =====================

  let sheet = 0;

  if (ply === "3") {
    sheet = board * 1;
  }
  else if (ply === "5") {
    sheet = board * 2;
  }
  else if (ply === "7") {
    sheet = board * 3;
  }
  else if (ply === "9") {
    sheet = board * 4;
  }

  setSheet(String(sheet));

  // =====================
  // Paper
  // =====================

  setPapper(String(board));
}






if (
  boxType === "semi universal" ||
  boxType === "tube carton" ||
  boxType === "discros box"
){

  

  // =====================
  // No Of Board
  // =====================

  let board = 0;
  const qty = Number(quantity);

 
    board = qty;
  
 

  setNoOfBoard(String(board));

  // =====================
  // Sheet
  // =====================

  let sheet = 0;

  if (ply === "3") {
    sheet = board * 1;
  }
  else if (ply === "5") {
    sheet = board * 2;
  }
  else if (ply === "7") {
    sheet = board * 3;
  }
  else if (ply === "9") {
    sheet = board * 4;
  }

  setSheet(String(sheet));

  // =====================
  // Paper
  // =====================

  setPapper(String(board));
}




  const bal = Number(balance);

  const flute = bal * 0.4;

  let total = 0;

  if (ply === "3") {

    total =
      bal +
      flute;

  }

  else if (ply === "5") {

    total =
      bal + bal + bal +
      flute + flute;

  }

  else if (ply === "7") {

    total =
      bal + bal + bal + bal + bal +
      flute + flute + flute;

  }

  else if (ply === "9") {

    total =
      bal + bal + bal + bal + bal + bal + bal +
      flute + flute + flute + flute;

  }

  setFlutter(String(total));


}, [length, breadth, height, measure, joint, ups,boxType,quantity, ply]);


useEffect(() => {
  const bal = Number(balance);

  if (!bal || !ply) {
    setFlutter("");
    return;
  }

  const flute = bal * 0.4;

  let total = 0;

  if (ply === "3") {
    total = bal + flute;
  } 
  else if (ply === "5") {
    total = bal * 3 + flute * 2;
  } 
  else if (ply === "7") {
    total = bal * 5 + flute * 3;
  } 
  else if (ply === "9") {
    total = bal * 7 + flute * 4;
  }

  setFlutter(String(total.toFixed(2)));

}, [balance, ply]);

useEffect(() => {
  const topGsm = Number(top);
  const balanceGsm = Number(balance);
  const bottomGsm = Number(bottom);

  const cuttingNum = Number(cuttingSize.replace(/[^0-9.]/g, ""));
  const reelNum = Number(reelSize.replace(/[^0-9.]/g, ""));

  if (
    !cuttingNum ||
    !reelNum ||
    !topGsm ||
    !balanceGsm ||
    !bottomGsm
  ) {
    setTopWeight("");
    setBalanceWeight("");
    setBottomWeight("");
    setTotalWeight("");
    return;
  }

  const balanceFlute = balanceGsm * 0.4;

  const topWt = (cuttingNum * reelNum * topGsm) / 1550;
  const balanceWt = (cuttingNum * reelNum * balanceFlute) / 1550;
  const bottomWt = (cuttingNum * reelNum * bottomGsm) / 1550;

  setTopWeight(topWt.toFixed(3));
  setBalanceWeight(balanceWt.toFixed(3));
  setBottomWeight(bottomWt.toFixed(3));
  setTotalWeight((topWt + balanceWt + bottomWt).toFixed(3));

}, [top, balance, bottom, cuttingSize, reelSize]);








const handlePrint = () => {



    if (jobItems.length === 0) {
  alert("Please add at least one item");
  return;
}

//   const doc = new jsPDF();

  const doc = new jsPDF({
  orientation: "landscape",
});

  // =========================
  // TOP DETAILS
  // =========================

 const pageWidth = doc.internal.pageSize.getWidth();

doc.setFontSize(20);




doc.setFont("helvetica", "bold"); // 👈 add this
doc.setFontSize(12);

doc.text(
  `Order No: ${orderNo}     Order Date: ${new Date().toLocaleDateString("en-IN")}     Sri Venkateshwara Packaging & Co          PO Number: ${poNumber}`,
  14,
  12
);

doc.setFont("helvetica", "normal"); // 👈 reset back to normal after

  

// draw line below header
doc.setLineWidth(0.3);
doc.line(14, 15, pageWidth - 14, 15); // 👈 line right below header

// customer details in single line
doc.setFont("helvetica", "bold");
doc.setFontSize(11);

doc.text(
  `Customer Name: ${customerName}     Delivery Place: ${deliveryPlace}     Delivery Date: ${deliveryDate}`,
  14,
  21  // 👈 just below the line
);







autoTable(doc, {
      theme: "plain",

  startY: 27,

  head: [[
    "S.No",
    "L",
    "B",
    "H",
    "Measure",
    "Ply",
    "No Of Box",
    "Board Size",
    "No Of Board",
    "Sheet",
    "Paper",
    "Rate",
    "Remark",
  ]],

 body: jobItems.map((item, index) => [
  index + 1,
  item.length,
  item.breadth,
  item.height,
  item.measure,
  item.ply,
  item.quantity,
//   item.boardSize,
//   item.boardSize.replace(" inch", ""),
  item.boardSize.replaceAll(" inch", ""),
  item.noOfBoard,
  item.sheet,
  item.papper,
  item.rate,
  item.remarks,
]),

    // headStyles: { fillColor: [255, 255, 255], textColor: [0, 0, 0] },



headStyles: {
     fontSize: 8,   // 👈 only headers are 9
    fontStyle: "bold",
fillColor: [255, 255, 255],
textColor: [0, 0, 0],

//   fillColor: [255, 0, 0],
//   textColor: [255, 255, 255],
},
alternateRowStyles: {
  fillColor: [255, 255, 255],
},


didParseCell: (data) => {
  if (data.section === "head") {
    data.cell.styles.fillColor = [255, 255, 255];
    data.cell.styles.textColor = [0, 0, 0];
  }
},


 styles: {

  fontSize: 12,
  fontStyle: "bold",

  overflow: "linebreak",
  cellPadding: 2,

  lineColor: [0, 0, 0], // black border
  lineWidth: 0.2,       // border thickness
},



  columnStyles: {
    0: { cellWidth: 10 }, // S.No
    1: { cellWidth: 15 }, // L
    2: { cellWidth: 15 }, // B
    3: { cellWidth: 15 }, // H
    4: { cellWidth: 15 }, // Measure
    5: { cellWidth: 10 }, // Ply
    6: { cellWidth: 18 }, // No Of Box
    7: { cellWidth: 30}, // Board Size
    8: { cellWidth: 18 }, // No Of Board
    9: { cellWidth: 15 }, // Sheet
    10: { cellWidth: 15 }, // Paper
    11: { cellWidth: 12 }, // Rate

    // Remark column gets remaining width
    12: { cellWidth: 80, },
  },
});

  // =========================
  // BOTTOM DETAILS
  // =========================

  const finalY =
    (doc as any).lastAutoTable.finalY + 20;




  const pageHeight = doc.internal.pageSize.getHeight();


doc.setLineWidth(0.3);
doc.rect(14, 8, pageWidth - 28, pageHeight - 16);



autoTable(doc, {
  startY: pageHeight - 55,  // 👈 changed from -40 to -55
  theme: "plain",
  head: [],
  body: [[
    `Calico: ${calico}`,
    `Paste Joint: ${pasteJoint}`,
    `Pin: ${pin}`,
    `Elastic: ${elastic}`,
    `Print: ${print}`,
  ]],
  styles: {
    fontSize: 10,
    fontStyle: "bold",
    lineColor: [0, 0, 0],
    lineWidth: 0.3,
    cellPadding: 4,
    fillColor: [255, 255, 255],
  },
  alternateRowStyles: {
    fillColor: [255, 255, 255],
  },
  columnStyles: {
    0: { cellWidth: "auto" },
    1: { cellWidth: "auto" },
    2: { cellWidth: "auto" },
    3: { cellWidth: "auto" },
    4: { cellWidth: "auto" },
  },
  margin: { left: 14 },
});

autoTable(doc, {
  startY: (doc as any).lastAutoTable.finalY,
  theme: "plain",
  head: [],
//   body: [["followed by ", "Prepared By", "Checked By"]],
  body: [[`Followed By: ${operator}`, "Prepared By", "Checked By"]],
  styles: {
    fontSize: 10,
    fontStyle: "bold",
    lineColor: [0, 0, 0],
    lineWidth: 0.3,
    cellPadding: 8,
    fillColor: [255, 255, 255],
    // halign: "bottom",
    // valign: "bottom", 
  },
  alternateRowStyles: {
    fillColor: [255, 255, 255],
  },
  columnStyles: {
    0: { cellWidth: "auto" },
    1: { cellWidth: "auto" },
    2: { cellWidth: "auto" },
  },
  margin: { left: 14 },
});









// =========================
// OPEN PRINT WINDOW
// =========================

const pdfBlob = doc.output("blob");

const pdfUrl = URL.createObjectURL(pdfBlob);

const printWindow = window.open(pdfUrl);

if (printWindow) {

  printWindow.onload = () => {

    printWindow.focus();

    printWindow.print();

  };

}
};


const handleRowSelect = (item: any, index: number) => {
  setSelectedIndex(index);

  setLength(item.length);
  setBreadth(item.breadth);
  setHeight(item.height);

  setMeasure(item.measure);
  setPly(item.ply);

  setQuantity(item.quantity);

  setBoardSize(item.boardSize);

  setNoOfBoard(item.noOfBoard);
  setSheet(item.sheet);
  setPapper(item.papper);

  setRemarks(item.remarks);

  setCuttingSize(item.cuttingSize);
  setReelSize(item.reelSize);

  setJoint(item.joint);
  setUps(item.ups);

  setBoxType(item.boxType);
};


  return (

    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-xl p-8">
      

        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Job Card
        </h1>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Customer Name */}
          <div>
            <label className="block mb-2 text-lg font-bold text-black">
              Customer Name
            </label>
            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="Enter customer name"
                value={customerName}
             onChange={(e) => setCustomerName(e.target.value)}


            />
          </div>

         



          {/* Order No & PO Number */}
<div className="md:col-span-1">
  <div className="flex gap-4">

    {/* Order No */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Order No
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder="Order No"

        value={orderNo}
        readOnly
      />
    </div>

    {/* PO Number */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        PO Number
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder="PO Number"
        value={poNumber}
        onChange={(e) => setPoNumber(e.target.value)}
      />
    </div>

  </div>
</div>

         

          <div>
  <label className="block mb-2 text-lg font-bold text-black">
    Date
  </label>

  <input
    type="date"
    defaultValue={new Date().toISOString().split("T")[0]}
    className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
  />
</div>

          {/* Ply */}
          <div>
            {/* <label className="block mb-2 text-lg font-bold text-black">
              Ply
            </label> */}
              <label className="block mb-2 text-lg font-bold text-black">
              Box Type
            </label>

            

            <select className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
             value={boxType}
            onChange={(e) => setBoxType(e.target.value)}
            >
              <option>Select box type</option>
              <option>universal</option>
              <option>semi universal</option>
              <option>tube carton</option>
                 <option>discros box</option>
                   <option>display carton</option>
                <option>Special type</option>

            </select>
             
          </div>

       




          {/* Box Size */}
<div className="md:col-span-2">
  <label className="block mb-3 text-lg font-bold text-black">
    Box Size
  </label>

  <div className="flex flex-wrap items-end gap-3">

    <div>
      <label  className="block mb-2 text-sm font-semibold text-black">
        LENGTH
      </label>

      <input
        // className="w-24 border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        className="flex-1 min-w-[120px] border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        placeholder="Length"

         type="number"
  value={length}
  onChange={(e) => setLength(e.target.value)}
      />
    </div>

    <div>
      <label  className="block mb-2 text-sm font-semibold text-black">
        BREADTH
      </label>

      <input
        type="text"
        // className="w-24 border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        className="flex-1 min-w-[120px] border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        placeholder="Breadth"



  value={breadth}
  onChange={(e) => setBreadth(e.target.value)}
      />
    </div>

    <div>
      <label  className="block mb-2 text-sm font-semibold text-black">
        HEIGHT
      </label>

      <input
        // className="w-24 border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        className="flex-1 min-w-[120px] border-2 border-gray-400 p-2 rounded-lg text-black bg-white"
        placeholder="Height"





          type="number"

  value={height}
  onChange={(e) => setHeight(e.target.value)}
      />
    </div>
    <div>
    <label  className="block mb-2 text-sm font-semibold text-black">
        PLY
    </label>

  <select
    className="w-36 border-2 border-gray-400 p-2 rounded-lg text-black bg-white cursor-pointer"
      value={ply}
  onChange={(e) => setPly(e.target.value)}
  >
    <option value="">Ply</option>
    <option value="3">3</option>
    <option value="5">5</option>
    <option value="7">7</option>
    <option value="9">9</option>
  </select>
</div>

 <div>
    <label  className="block mb-2 text-sm font-semibold text-black">
      MEASURE
    </label>

    <select
      className="w-36 border-2 border-gray-400 p-2 rounded-lg text-black bg-white cursor-pointer"
        value={measure}
  onChange={(e) => setMeasure(e.target.value)}
    >
      <option value="">Measure</option>
      <option value="cm">CM</option>
      <option value="inch">Inches</option>
    </select>
  </div>



  </div>
  
</div>


{/* Cutting Size & Joint */}
<div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Cutting Size */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Cutting Size
      </label>

      <input
       type="text"
  className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
  placeholder="Enter cutting size"

  value={cuttingSize}
  onChange={(e) => setCuttingSize(e.target.value)}
  
      />
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Joint
      </label>

      <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
          value={joint}
  onChange={(e) => setJoint(e.target.value)}
      >
        <option value="">Select</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
      </select>
    </div>

  </div>
</div>




{/* REEL Size & UPS */}
<div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Reel Size */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Reel Size
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder="Enter cutting size"






  value={reelSize}
  onChange={(e) => setReelSize(e.target.value)}
      />
    </div>

    {/* Ups */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        ups
      </label>

      <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={ups}
  onChange={(e) => setUps(e.target.value)}
      >
        <option value="">Select</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
         
      </select>
    </div>

  </div>
</div>


          {/* Quantity */}
          <div>
            <label className="block mb-2 text-lg font-bold text-black">
              Quantity
            </label>

            <input
              type="number"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="Enter quantity"
                value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          {/* Board Size */}
          <div>
            <label className="block mb-2 text-lg font-bold text-black">
              Board Size
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="Enter board size"
             onChange={(e) => setCuttingSize(e.target.value)}

                value={
                        cuttingSize && reelSize
                        ? `${cuttingSize.replace(" inch", "")} x ${reelSize.replace(" inch", "")}`
                        : ""
                    }

        
              
            />
          </div>

          {/* No of Board */}

       <div className="md:col-span-2 flex gap-4">
          <div    className="w-1/3">

            <label className="block mb-2 text-lg font-bold text-black">
              No of Board
            </label>

            <input
              type="number"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="Enter number"
                value={noOfBoard}
             onChange={(e) => setNoOfBoard(e.target.value)}
               readOnly



            />
          </div>

          {/* Sheet */}
          <div >
            <label className="block mb-2 text-lg font-bold text-black">
              Sheet
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="sheets"

               value={sheet}
            onChange={(e) => setSheet(e.target.value)}
              readOnly

            />
          </div>

            {/* Papper */}
          <div >
            <label className="block mb-2 text-lg font-bold text-black">
              Papper
            </label>

            <input
              type="text"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="papper"
               value={papper}
            onChange={(e) => setPapper(e.target.value)}
              readOnly

            />
          </div>
            <div>
                <label className="block mb-2 text-lg font-bold text-black">
                    Followed By
                </label>
            <select
             className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
             value={operator}
            onChange={(e) => setOperator(e.target.value)}
            >
            <option value="">Select</option>
            <option value="Sujeet">Sujeet</option>
            <option value="Jeevasekaran">Jeevasekaran</option>
        </select>
        </div>

     
          </div>

    


         





         <div className="border-2 border-gray-400 rounded-xl p-6 bg-gray-50">

  <label className="block mb-5 text-xl font-bold text-black">
    GSM
  </label>

  <div className="flex flex-wrap gap-6">

    {/* Top */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Top
      </label>

      <input
        type="number"
        placeholder="Top GSM"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
        value={top}
  onChange={(e) => setTop(e.target.value)}
      />
    </div>

    {/* Bottom */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Balance
      </label>

      <input
        type="number"
        placeholder="Bottom GSM"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
  



    value={balance}
  onChange={(e) => setBalance(e.target.value)}
      />
    </div>

    {/* Flutter */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Bottom
      </label>

      <input
        type="number"
        placeholder="Flutter GSM"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
          value={bottom}
  onChange={(e) => setBottom(e.target.value)}
      />
    </div>

    {/* Base */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Flutter
      </label>

      <input
        type="number"
        placeholder="Base GSM"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
  value={flutter}
  readOnly
      />
    </div>

     
          {/* Remarks */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-lg font-bold text-black">
              Remarks
            </label>

            <textarea
              rows={4}
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black placeholder-gray-500 bg-white"
              placeholder="Enter remarks"
                value={remarks}
  onChange={(e) => setRemarks(e.target.value)}
            />
          </div>

  </div>
</div>

{/* Weight Section */}

<div className="border-2 border-gray-400 rounded-xl p-6 bg-gray-50">

  <label className="block mb-5 text-xl font-bold text-black">
    Weight
  </label>

  <div className="flex flex-wrap gap-6">

    {/* Top Weight */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Top Weight
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
        value={topWeight}
        readOnly
      />
    </div>

    {/* Balance Weight */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Balance Weight
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
        value={balanceWeight}
        readOnly
      />
    </div>

    {/* Bottom Weight */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Bottom Weight
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
        value={bottomWeight}
        readOnly
      />
    </div>

    {/* Total Weight */}
    <div className="flex-1 min-w-[180px]">
      <label className="block mb-2 font-semibold text-black">
        Total Weight
      </label>

      <input
        type="text"
        className="w-full border-2 border-gray-300 p-3 rounded-lg text-black bg-white"
        value={totalWeight}
        readOnly
      />
    </div>

  </div>

</div>
        
       



          {/* Cutting Size & Joint */}

  

  




  {/* Calico */}
     <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        calico joint
      </label>

     

       <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={pasteJoint}
        onChange={(e) => setPasteJoint(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>

      </select>
    </div>

  {/* joint */}
   <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Remark
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"

        value={pasteRemark}
        onChange={(e) => setPasteRemark(e.target.value)}
      />
    </div>
   

   

  {/* Remark */}
  
   



  
  



 

<div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Pastejoint */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Paste joint
      </label>

     

       <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={pasteJoint}
        onChange={(e) => setPasteJoint(e.target.value)}
      >
        <option value="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>

      </select>
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Remark
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"

        value={pasteRemark}
        onChange={(e) => setPasteRemark(e.target.value)}
      />
    </div>

  </div>
  </div>

  <div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Pin */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Pin
      </label>

     

       <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={pin}
        onChange={(e) => setPin(e.target.value)}
      >
        <option value="">Select</option>
      

          <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Remark
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"
        value={pinRemark}
        onChange={(e) => setPinRemark(e.target.value)}
      />
    </div>

  </div>
  </div>



   <div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Elastic */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Elastic
      </label>

     

       <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={elastic}
        onChange={(e) => setElastic(e.target.value)}
      >
        <option value="">Select</option>
       

          <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Remark
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"
         value={printRemark}
        onChange={(e) => setPrintRemark(e.target.value)}
      />
    </div>

  </div>
  </div>


  <div className="md:col-span-2">
  <div className="flex flex-wrap gap-6 items-end">

    {/* Print */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Print
      </label>

     

       <select
        className="w-40 border-2 border-gray-400 p-3 rounded-lg text-black bg-white cursor-pointer"
        value={print}
        onChange={(e) => setPrint(e.target.value)}
      
      >
        <option value="">Select</option>
      


          <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Remark
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"
      />
    </div>

  </div>
  </div>






   {/* Delivery date and place  */}
    <div className="w-1/2">
      <label className="block mb-2 text-lg font-bold text-black">
        Delivery Date
      </label>

     




       <input
        type="date"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        value={deliveryDate}
        onChange={(e) => setDeliveryDate(e.target.value)}
      


  
        

      />
    </div>

    {/* Joint */}
    <div>
      <label className="block mb-2 text-lg font-bold text-black">
        Delivery place
      </label>

     


       <input
        type="text"
        className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
        placeholder=" Enter remark"
          value={deliveryPlace}
  onChange={(e) => setDeliveryPlace(e.target.value)}
      />
    </div>

  
</form>

    




        {/* Buttons */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">

 


<button
  type="button"
  onClick={() => {

  const newItem = {
    length,
    breadth,
    height,
    measure,
    ply,
    quantity,
    // boardSize: `${cuttingSize} x ${reelSize}`,
    boardSize: `${cuttingSize.replace(/[^0-9.]/g, "")} x ${reelSize.replace(/[^0-9.]/g, "")}`,
    noOfBoard,
    sheet,
    papper,
    rate,
    remarks,
    cuttingSize,
    reelSize,
    joint,
    ups,
    boxType,
  };

//   setJobItems([...jobItems, newItem]);

  if (selectedIndex !== null) {

  const updatedItems = [...jobItems];

  updatedItems[selectedIndex] = newItem;

  setJobItems(updatedItems);

  setSelectedIndex(null);

} else {

  setJobItems([...jobItems, newItem]);

}

  setShowBox(true);

  // clear only size/item fields

  setLength("");
  setBreadth("");
  setHeight("");

  setMeasure("");
  setJoint("");
  setUps("");

  setCuttingSize("");
  setReelSize("");

  setQuantity("");
  setBoardSize("");

  setNoOfBoard("");
  setSheet("");
  setPapper("");

  setRemarks("");

  setBoxType("");
  setPly("");

  setTimeout(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }, 100);

}}
 
        className={`${buttonStyle} bg-blue-700  hover:bg-blue-700 hover:bg-blue-800 w-full`}

>
  Add
</button>

  <button
    className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
 
  onClick={() => {

    // clear all fields except order no & date

    setCustomerName("");
    setPoNumber("");

    setLength("");
    setBreadth("");
    setHeight("");

    setMeasure("");
    setJoint("");
    setUps("");

    setCuttingSize("");
    setReelSize("");

    setQuantity("");
    setBoardSize("");

    setNoOfBoard("");
    setSheet("");
    setPapper("");

    setRemarks("");

    setDeliveryDate("");
    setDeliveryPlace("");

    setCalico("");
    setCalicoRemark("");

    setPasteJoint("");
    setPasteRemark("");

    setPin("");
    setPinRemark("");

    setElastic("");
    setElasticRemark("");

    setPrint("");
    setPrintRemark("");

    setBoxType("");
    setPly("");
    setSelectedIndex(null);

    setShowBox(false);

    alert("Form Cleared Successfully!");

  }}

  >
    Clear
  </button>

  

  {/* <Link href="/weight-calc">
  <button
    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-lg shadow-md transition w-full cursor-pointer"
  >
    Weight Calc
  </button>
</Link> */}

  {/* <button 
      type="button"

    className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg shadow-md transition"
    onClick={async() => {



         {
    try {
      await createOrder({
        customerName,
        length,
        breadth,
        height,

        remarks,
      });
      alert("Customer Saved Successfully!");
    } catch (error) {
      console.error(error);
      alert("Save Failed!");
    }
  }

    const year = new Date().getFullYear();

    // get current number
    let currentNumber = parseInt(orderNo.split("-")[2]);

    // increment
    let nextNumber = currentNumber + 1;

    // reset after 5000
    if (nextNumber > 5000) {
      nextNumber = 1;
    }

    const nextOrderNo =
      `ORD-${year}-${String(nextNumber).padStart(3, "0")}`;

    localStorage.setItem("currentOrderNo", nextOrderNo);

    setOrderNo(nextOrderNo);

    // clear form fields
setLength("");
setBreadth("");

setMeasure("");
setJoint("");
setUps("");

setCuttingSize("");
setCustomerName("");
setPoNumber("");

setQuantity("");
setBoardSize("");

setRemarks("");

setDeliveryDate("");
setDeliveryPlace("");

setHeight("");
setReelSize("");

setCalico("");
setCalicoRemark("");

setPasteJoint("");
setPasteRemark("");

setPin("");
setPinRemark("");

setElastic("");
setElasticRemark("");

setPrint("");
setPrintRemark("");
setBoxType("");
setPly("");
setNoOfBoard("");
setSheet("");
setPapper("");






    alert("Saved Successfully!");
  }}
 
    
  >
    Save
  </button> */}

 

  {/* <Link href="/create-customer">
    <button
      // className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow-md transition cursor-pointer"
      className={`${buttonStyle} bg-purple-700 hover:bg-purple-800 w-full`}
    >
      Create Customer
    </button>
  </Link> */}

</div>
{showBox && (
//   <div className="mt-10 border-2 border-gray-400 rounded-xl p-6 bg-gray-100 max-h-[500px] overflow-y-auto">
    <div className="mt-10 border-2 border-blue-400 rounded-xl p-6 bg-white max-h-[500px] overflow-y-auto">

    <h2 className="text-2xl font-bold text-black mb-4">
      Added Sizes
    </h2>

 <table className="w-full border border-gray-400 bg-white text-black">

  <thead className="bg-blue-200 text-black">

   <tr>
    <th className="border p-2">S.No</th>
    <th className="border p-2">L</th>
    <th className="border p-2">B</th>
    <th className="border p-2">H</th>
    <th className="border p-2">Qty</th>
    <th className="border p-2">Ply</th>
    <th className="border p-2">Board</th>
    <th className="border p-2">Sheet</th>
    <th className="border p-2">Paper</th>
    <th className="border p-2">Rate</th>
    <th className="border p-2">Remark</th>
  </tr>

  </thead>

  <tbody>

    {jobItems.map((item, index) => (

        

        <tr
  key={index}
  onClick={() => handleRowSelect(item, index)}
  className={`cursor-pointer text-black
    ${
      selectedIndex === index
        ? "bg-blue-200"
        : "bg-white hover:bg-blue-50"
    }`}
>

        <td className="border p-2 text-black">{index + 1}</td>

        <td className="border p-2 text-black">{item.length}</td>

        <td className="border p-2 text-black">{item.breadth}</td>

        <td className="border p-2 text-black">{item.height}</td>

        <td className="border p-2 text-black">{item.quantity}</td>

        <td className="border p-2 text-black">{item.ply}</td>

        <td className="border p-2 text-black">{item.boardSize}</td>
        <td className="border p-2 text-black">{item.sheet}</td>

        <td className="border p-2 text-black">{item.papper}</td>

        <td className="border p-2 text-black">{item.rate}</td>

        <td className="border p-2 text-black">{item.remarks}</td>

      </tr>

    ))}

  </tbody>

</table>

  </div>
)}



  <div className="flex justify-end gap-4 mt-6">

     <button 
      type="button"

    // className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg shadow-md transition"
        className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition cursor-pointer"

    onClick={async() => {

// console.log("SAVE CLICKED");
console.log("BEFORE API");


         {
    try {
        console.log("SAVE CLICKED");

      await createOrder({
        customerName,
        length,
        breadth,
        height,

        remarks,
      });
      console.log("AFTER API");
      alert("Customer Saved Successfully!");
    } catch (error) {
      console.error(error);
      alert("Save Failed!");
    }
  }

    const year = new Date().getFullYear();

    // get current number
    let currentNumber = parseInt(orderNo.split("-")[2]);

    // increment
    let nextNumber = currentNumber + 1;

    // reset after 5000
    if (nextNumber > 5000) {
      nextNumber = 1;
    }

    const nextOrderNo =
      `ORD-${year}-${String(nextNumber).padStart(3, "0")}`;

    localStorage.setItem("currentOrderNo", nextOrderNo);

    setOrderNo(nextOrderNo);

    // clear form fields
setLength("");
setBreadth("");

setMeasure("");
setJoint("");
setUps("");

setCuttingSize("");
setCustomerName("");
setPoNumber("");

setQuantity("");
setBoardSize("");

setRemarks("");

setDeliveryDate("");
setDeliveryPlace("");

setHeight("");
setReelSize("");

setCalico("");
setCalicoRemark("");

setPasteJoint("");
setPasteRemark("");

setPin("");
setPinRemark("");

setElastic("");
setElasticRemark("");

setPrint("");
setPrintRemark("");
setBoxType("");
setPly("");
setNoOfBoard("");
setSheet("");
setPapper("");






    alert("Saved Successfully!");
  }}
 
    
  >
    Save
  </button>

  <button
    className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition cursor-pointer"
      onClick={handlePrint}
  >
    Print
  </button>


<div >

  <button
  type="button"
  onClick={() => {

    if (selectedIndex === null) {
      alert("Please select a row");
      return;
    }

    const updatedItems = jobItems.filter(
      (_, i) => i !== selectedIndex
    );

    setJobItems(updatedItems);
    setSelectedIndex(null);

  }}
  className="bg-red-700 hover:bg-red-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition cursor-pointer"
>
  Delete
</button>
</div>
</div>
      </div>
    </div>
  );
}