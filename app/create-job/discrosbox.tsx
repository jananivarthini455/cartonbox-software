export function calculateDiscrosBox(
  length: number,
  breadth: number,
  height: number,
  measure: string
) {

  let cutting = 0;
  let reel = 0;

  // CM
  if (measure === "cm") {

    cutting =
      ((2 * breadth) + height + 3)
      / 2.54;

    reel =
      ((2 * length) + (2 * breadth) + 5)
      / 2.54;
  }

  // INCH
  else if (measure === "inch") {

    cutting =
      (2 * breadth) + height + 1;

    reel =
      (2 * length) + (2 * breadth) + 2;
  }

  return {
    cutting,
    reel,
  };
}