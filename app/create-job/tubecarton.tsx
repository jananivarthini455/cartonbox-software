export function calculateTubeCarton(
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
      (length + (2 * height) + 3)
      / 2.54;

    reel =
      ((2 * breadth) + (2 * height) + 5)
      / 2.54;
  }

  // INCH
  else if (measure === "inch") {

    cutting =
      length + (2 * height) + 1;

    reel =
      (2 * breadth) + (2 * height) + 2;
  }

  return {
    cutting,
    reel,
  };
}