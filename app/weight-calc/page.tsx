"use client";
import { useState,useEffect} from "react";


export default function WeightCalc() {


  const [ply, setPly] = useState("");

const [top, setTop] = useState("");
const [balance, setBalance] = useState("");
const [bottom, setBottom] = useState("");

const [flutter, setFlutter] = useState("");

const [topWeight, setTopWeight] = useState("");
const [balanceWeight, setBalanceWeight] = useState("");
const [bottomWeight, setBottomWeight] = useState("");
const [totalWeight, setTotalWeight] = useState("");
const [boardSize, setBoardSize] = useState("");







useEffect(() => {

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

















 
  if (!boardSize) return;

  // supports *, x, X
  const parts = boardSize.split(/[*xX]/);

  if (parts.length < 2) return;

  const cuttingSize = Number(parts[0].trim());

  const reelSize = Number(parts[1].trim());

  const topGsm = Number(top);

  const bottomGsm = Number(bottom);

  const flutterGsm = Number(flutter);

  // Top Weight
  const topWt =
    (cuttingSize * reelSize * topGsm) / 1550;

  // Balance Weight
  const balanceWt =
    (cuttingSize * reelSize * flutterGsm) / 1550;

  // Bottom Weight
  const bottomWt =
    (cuttingSize * reelSize * bottomGsm) / 1550;



// CASE 1
// All are same

if (
  Number(top) === Number(balance) &&
  Number(balance) === Number(bottom)
) {

  const totalWt =
    topWt + balanceWt + bottomWt;

  setTotalWeight(
    `Total Weight = ${totalWt.toFixed(3)}`
  );

}


// CASE 2
// Top and Bottom same

else if (
  Number(top) === Number(bottom)
) {

  const topBottomWt =
    topWt + bottomWt;

  setTotalWeight(
    `Top and Bottom = ${topBottomWt.toFixed(3)}, Balance = ${balanceWt.toFixed(3)}`
  );

}


// CASE 3
// Bottom and Balance same

else if (
  Number(bottom) === Number(balance)
) {

  const balanceBottomWt =
    balanceWt + bottomWt;

  setTotalWeight(
    `Top = ${topWt.toFixed(3)}, Balance and Bottom = ${balanceBottomWt.toFixed(3)}`
  );

}


// CASE 4
// Top and Balance same

else if (
  Number(top) === Number(balance)
) {

  const topBalanceWt =
    topWt + balanceWt;

  setTotalWeight(
    `Top and Balance = ${topBalanceWt.toFixed(3)}, Bottom = ${bottomWt.toFixed(3)}`
  );

}


// CASE 5
// All different

else {

  setTotalWeight("");

}
    

  setTopWeight(topWt.toFixed(3));

  setBalanceWeight(balanceWt.toFixed(3));

  setBottomWeight(bottomWt.toFixed(3));




}, [ply, balance,boardSize,top, flutter, bottom]);
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">

        <h1 className="text-3xl font-bold text-black mb-8">
          Weight Calculator
        </h1>

        <form className="space-y-8">

          {/* Board Size */}
          <div>
            <label className="block mb-2 text-lg font-bold text-black">
              Board Size
            </label>

            <input
              type="text"
              placeholder="Enter board size"
              className="w-full border-2 border-gray-400 p-3 rounded-lg text-black bg-white"
                value={boardSize}
  onChange={(e) => setBoardSize(e.target.value)}
            />
          </div>


              <div>
    <label  className="block mb-2 text-sm font-semibold text-black">
        PLY
    </label>

  <select
    className="w-36 border-2 border-gray-400 p-2 rounded-lg text-black bg-white cursor-pointer"
      // value={ply}
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


          GSM

          {/* GSM Section */}
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
       

          {/* Button */}
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-10 py-3 rounded-lg shadow-md transition cursor-pointer"
            >
              Calculate
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}