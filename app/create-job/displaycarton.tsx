export function calculateDisplayCarton(
  length: number,
  breadth: number,
  height: number,
  measure: string,
  joint: string,
  ups: string
) {

  let cutting = 0;
  let reel = 0;

  // =========================
  // SINGLE JOINT + SINGLE UPS
  // =========================
  if (
    joint === "single" &&
    ups === "single"
  ) {

    // CM
    if (measure === "cm") {

      cutting =
        ((2 * length) + (2 * breadth) + 5)
        / 2.54;

      reel =
        ((breadth / 2) + height + 3)
        / 2.54;

    }

    // INCH
    else if (measure === "inch") {

      cutting =
        (2 * length) +
        (2 * breadth) + 2;

      reel =
        (breadth / 2) +
        height + 1;

    }
  }

  // =========================
  // SINGLE JOINT + DOUBLE UPS
  // =========================
  else if (
    joint === "single" &&
    ups === "double"
  ) {

    // CM
    if (measure === "cm") {

      cutting =
        ((2 * length) + (2 * breadth) + 5)
        / 2.54;

      reel =
        ((2 * height) + (2 * (breadth / 2)))
        / 2.54;

    }

    // INCH
    else if (measure === "inch") {

      cutting =
        (2 * length) +
        (2 * breadth) + 2;

      reel =
        (2 * height) +
        (2 * (breadth / 2));

    }
  }

  // =========================
  // DOUBLE JOINT + SINGLE UPS
  // =========================
  else if (
    joint === "double" &&
    ups === "single"
  ) {

    // CM
    if (measure === "cm") {

      cutting =
        (length + breadth + 5)
        / 2.54;

      reel =
        ((breadth / 2) + height + 3)
        / 2.54;

    }

    // INCH
    else if (measure === "inch") {

      cutting =
        length + breadth + 2;

      reel =
        (breadth / 2) +
        height + 1;

    }
  }

  // =========================
  // DOUBLE JOINT + DOUBLE UPS
  // =========================
  else if (
    joint === "double" &&
    ups === "double"
  ) {

    // CM
    if (measure === "cm") {

      cutting =
        (length + breadth + 5)
        / 2.54;

      reel =
        ((2 * height) + (2 * (breadth / 2)))
        / 2.54;

    }

    // INCH
    else if (measure === "inch") {

      cutting =
        length + breadth + 2;

      reel =
        (2 * height) +
        (2 * (breadth / 2));

    }
  }

  return {
    cutting,
    reel,
  };
}