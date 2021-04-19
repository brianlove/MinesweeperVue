
import Cell from '@/types/cell';

export default class Grid {
  size: number;
  mines: number;
  cells: Cell[][];

  constructor(size: number, mines: number) {
    this.size = size;
    this.mines = mines;

    this.cells = this.__initializeGrid();

    // Count adjacent cells
    let row, col;
    for ( row = 0; row < this.size; row++ ) {
      for ( col = 0; col < this.size; col++ ) {
        this.cells[row][col].numAdjacent = this.countAdjacentMines(this.cells[row][col]);
      }
    }
  }


  /**
   * Create the Minesweeper grid and populate it with mines.
   *
   * @returns An initialized grid.
   */
  __initializeGrid(): Cell[][] {
    console.info("initializing grid"); // DEBUG
    const cells = Array(this.size);
    let row, col;

    // Create the grid's structure
    for ( row = 0; row < this.size; row++ ) {
      cells[row] = Array(this.size);
      for ( col = 0; col < this.size; col++ ) {
        cells[row][col] = new Cell({row, col});
      }
    }

    // Determine where the mines go
    for ( let i = 0; i < this.mines; i++ ) {
      do {
        row = Math.floor(Math.random() * this.size);
        col = Math.floor(Math.random() * this.size);
      } while ( cells[row][col].hasMine )
      cells[row][col].hasMine = true;
    }

    return cells;
  }



  /**
   * Count the number of mines adjacent to the target cell.
   *
   * @param cell The target cell.
   * @returns The number of adjacent cells.
   */
  countAdjacentMines(cell: Cell): number {
    let adjacent: number = 0;
    let rowTemp, colTemp;

    for ( let rowDelta = -1; rowDelta <= 1; rowDelta++) {
      for ( let colDelta = -1; colDelta <= 1; colDelta++ ) {
        // Don't check the current cell
        if ( rowDelta == 0 && colDelta == 0 ) {
          continue;
        }

        rowTemp = cell.row + rowDelta;
        colTemp = cell.col + colDelta;

        if ( rowTemp >= 0 && rowTemp < this.size && colTemp >= 0 && colTemp < this.size ) {
          // console.debug("checking:", rowTemp, colTemp, this.cells[rowTemp][colTemp].hasMine); // DEBUG
          if ( this.cells[rowTemp][colTemp].hasMine ) {
            adjacent++;
          }
        }
      }
    }

    return adjacent;
  }
};
