export class MatrixItem {
  value: number | null;
  correctValue: number | null;

  constructor(value: number | null, correctValue: number | null) {
    this.value = value;
    this.correctValue = correctValue;
  }
}

export class Matrix {
  rows: number;
  cols: number;
  items: Array<MatrixItem>;
  constructor(rows: number, cols: number, items: Array<MatrixItem>) {
    this.rows = rows;
    this.cols = cols;
    this.items = items;
  }

  getCell(row: number, col: number): MatrixItem {
    return this.items[col + row * this.cols];
  }

  getRowIdx(idx: number): number {
    return Math.floor(idx / this.cols);
  }

  getColIdx(idx: number): number {
    return idx % this.cols;
  }

  multiplyWith(other: Matrix): Matrix {
    const items = [];

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < other.cols; c++) {
        let correctValue = 0;
        for (let k = 0; k < this.cols; k++) {
          const valueA = this.getCell(r, k).value;
          const valueB = other.getCell(k, c).value;
          if (valueA != null && valueB != null) {
            correctValue += valueA * valueB;
          }
        }
        items.push(new MatrixItem(null, correctValue));
      }
    }

    return new Matrix(this.rows, other.cols, items);
  }
}

export function randomMatrix(rows: number, cols: number) {
  const items = Array.from(Array(rows * cols).keys()).map(() => {
    return new MatrixItem(Math.floor(Math.random() * 10) - 5, null);
  });
  return new Matrix(rows, cols, items);
}
