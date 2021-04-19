
/**
 * Create the array structure representing the grid.
 *
 * @param {Number} size The dimensions of the grid.
 * @param {Number} mines The number of mines.
 * @returns {Grid}
 */
function initializeGrid(size: number, mines: number) {
  const grid = Array(size);
  let row, col;
  
  // Create the grid's structure
  for ( row = 0; row < size; row++ ) {
    grid[row] = Array(size);
    for ( col = 0; col < size; col++ ) {
      grid[row][col] = {
        hasMine: false,
        hasFlag: false,
        isRevealed: false,
        numAdjacent: 0,
      };
    }
  }

  // Determine where the mines go
  for ( let i = 0; i < mines; i++ ) {
    do {
      row = Math.floor(Math.random() * size);
      col = Math.floor(Math.random() * size);
    } while ( grid[row][col].hasMine )
    grid[row][col].hasMine = true;
  }

  // Count adjacent cells
  for ( row = 0; row < size; row++ ) {
    for ( col = 0; col < size; col++ ) {
      grid[row][col].numAdjacent = countAdjacentMines(grid, row, col);
    }
  }

  return grid;
}


/**
 * Determine how many mines are adjacent to the given cell.
 *
 * @param {Object} grid The grid object
 * @param {Number} row The row of the cell to count
 * @param {Number} col The column of the cell to count
 * @param {Boolean} debug Are we debugging?
 * @returns {Number} The number of mines - range [0-8] - in the adjacent cells.
 */
function countAdjacentMines(grid, row: number, col: number, debug: boolean) {
  let adjacent = 0;
  let rowTemp, colTemp;

  for ( let rowDelta = -1; rowDelta <= 1; rowDelta++ ) {
    for ( let colDelta = -1; colDelta <= 1; colDelta++ ) {
      rowTemp = row + rowDelta;
      colTemp = col + colDelta;

      // Don't check the current cell
      if ( rowTemp == row && colTemp == col ) {
        if ( debug ) {
          console.debug("checking", rowTemp, colTemp, "CURRENT");
        }
        continue;
      }

      if ( rowTemp >= 0 && rowTemp < size && colTemp >= 0 && colTemp < size ) {
        if ( debug ) {
          console.debug("checking", rowTemp, colTemp, grid[rowTemp][colTemp].hasMine);
        }
        if ( grid[rowTemp][colTemp].hasMine ) {
          adjacent++;
        }
      }
    }
  }

  return adjacent;
}


export default {
  initializeGrid,
}

