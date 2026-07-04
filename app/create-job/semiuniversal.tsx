export function calculateSemiUniversal(
  length: number,
  breadth : number,
  height: number,

  measure: string
 
) {
// console.log("this is inside the semiuniversal file breadth,height",breadth,height);
  let cutting = 0;
  let reel = 0;

  // CM
  if (measure === "cm") {

    cutting =
      (((length) + (2 * height) + 10)
      / 2.54);
 
    reel =
      ((2 * breadth) + (2 * height) + 2.5)
      / 2.54;

  }

  // INCH
  else if (measure === "inch") {

    cutting =
      length + (2 * height) + 4;

    reel =
      (2 * breadth) + (2 * height) + 1;

  }

  return {
    cutting,
    reel,
  };
}