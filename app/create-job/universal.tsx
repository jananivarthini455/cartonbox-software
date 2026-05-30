export function calculateUniversal(
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

    if (measure === "cm") {

      cutting =
        ((2 * length) + (2 * breadth) + 5)
        / 2.54;

      reel =
        (breadth + height + 3)
        / 2.54;

    } else if (measure === "inch") {

      cutting =
        (2 * length) +
        (2 * breadth) + 2;

      reel =
        breadth + height + 1;
    }
  }

  // =========================
  // DOUBLE JOINT + SINGLE UPS
  // =========================
  else if (
    joint === "double" &&
    ups === "single"
  ) {

    if (measure === "cm") {

      cutting =
        (length + breadth + 5)
        / 2.54;

      reel =
        (breadth + height + 3)
        / 2.54;

    } else if (measure === "inch") {

      cutting =
        length + breadth + 2;

      reel =
        breadth + height + 1;
    }
  }

  // =========================
  // SINGLE JOINT + DOUBLE UPS
  // =========================
  else if (
    joint === "single" &&
    ups === "double"
  ) {

    if (measure === "cm") {

      cutting =
        ((2 * length) + (2 * breadth) + 5)
        / 2.54;

      reel =
        ((2 * breadth) + (2 * height) + 4)
        / 2.54;

    } else if (measure === "inch") {

      cutting =
        (2 * length) +
        (2 * breadth) + 2;

      reel =
        (2 * breadth) +
        (2 * height) + 1.5;
    }
  }

  // =========================
  // DOUBLE JOINT + DOUBLE UPS
  // =========================
  else if (
    joint === "double" &&
    ups === "double"
  ) {

    if (measure === "cm") {

      cutting =
        (length + breadth + 5)
        / 2.54;

      reel =
        ((2 * breadth) + (2 * height) + 4)
        / 2.54;

    } else if (measure === "inch") {

      cutting =
        length + breadth + 2;

      reel =
        (2 * breadth) +
        (2 * height) + 1.5;
    }
  }

  return {
    cutting,
    reel,
  };
}