const _board = [
  ["5", ".", "7", ".", "1", "2", ".", ".", "3"],
  [".", ".", ".", ".", "6", "8", ".", ".", "."],
  [".", ".", "1", ".", ".", "3", "8", ".", "9"],
  ["8", "1", "2", ".", ".", ".", ".", ".", "."],
  ["3", "5", ".", ".", ".", ".", ".", "7", "8"],
  [".", ".", ".", ".", ".", ".", "5", "6", "2"],
  ["1", ".", "9", "7", ".", ".", "2", ".", "."],
  [".", ".", ".", "1", "2", ".", ".", ".", "."],
  ["4", ".", ".", "8", "9", ".", "3", ".", "7"]
];
sodokoSolver(_board);
console.log(_board);

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + (i % 3);
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}

function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == ".") {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
              return true;
            } else {
              data[i][j] = ".";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
/*
function table() {
    var table = document.getElementById("grid");
    
    var row1 = table.insertRow(0);
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    var cell4 = row1.insertCell(3);
    var cell5 = row1.insertCell(4);
    var cell6 = row1.insertCell(5);
    var cell7 = row1.insertCell(6);
    var cell8 = row1.insertCell(7);
    var cell9 = row1.insertCell(8);
    cell1.innerHTML = _board[0][0];
    cell2.innerHTML = _board[0][1];
    cell3.innerHTML = _board[0][2];
    cell4.innerHTML = _board[0][3];
    cell5.innerHTML = _board[0][4];
    cell6.innerHTML = _board[0][5];
    cell7.innerHTML = _board[0][6];
    cell8.innerHTML = _board[0][7];
    cell9.innerHTML = _board[0][8];
    
    var row2 = table.insertRow(1);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);
    var cell5 = row2.insertCell(4);
    var cell6 = row2.insertCell(5);
    var cell7 = row2.insertCell(6);
    var cell8 = row2.insertCell(7);
    var cell9 = row2.insertCell(8);
    cell1.innerHTML = _board[1][0];
    cell2.innerHTML = _board[1][1];
    cell3.innerHTML = _board[1][2];
    cell4.innerHTML = _board[1][3];
    cell5.innerHTML = _board[1][4];
    cell6.innerHTML = _board[1][5];
    cell7.innerHTML = _board[1][6];
    cell8.innerHTML = _board[1][7];
    cell9.innerHTML = _board[1][8];

    var row3 = table.insertRow(2);
    var cell1 = row3.insertCell(0);
    var cell2 = row3.insertCell(1);
    var cell3 = row3.insertCell(2);
    var cell4 = row3.insertCell(3);
    var cell5 = row3.insertCell(4);
    var cell6 = row3.insertCell(5);
    var cell7 = row3.insertCell(6);
    var cell8 = row3.insertCell(7);
    var cell9 = row3.insertCell(8);
    cell1.innerHTML = _board[2][0];
    cell2.innerHTML = _board[2][1];
    cell3.innerHTML = _board[2][2];
    cell4.innerHTML = _board[2][3];
    cell5.innerHTML = _board[2][4];
    cell6.innerHTML = _board[2][5];
    cell7.innerHTML = _board[2][6];
    cell8.innerHTML = _board[2][7];
    cell9.innerHTML = _board[2][8];

    var row4 = table.insertRow(3);
    var cell1 = row4.insertCell(0);
    var cell2 = row4.insertCell(1);
    var cell3 = row4.insertCell(2);
    var cell4 = row4.insertCell(3);
    var cell5 = row4.insertCell(4);
    var cell6 = row4.insertCell(5);
    var cell7 = row4.insertCell(6);
    var cell8 = row4.insertCell(7);
    var cell9 = row4.insertCell(8);
    cell1.innerHTML = _board[3][0];
    cell2.innerHTML = _board[3][1];
    cell3.innerHTML = _board[3][2];
    cell4.innerHTML = _board[3][3];
    cell5.innerHTML = _board[3][4];
    cell6.innerHTML = _board[3][5];
    cell7.innerHTML = _board[3][6];
    cell8.innerHTML = _board[3][7];
    cell9.innerHTML = _board[3][8];

    var row5 = table.insertRow(4);
    var cell1 = row5.insertCell(0);
    var cell2 = row5.insertCell(1);
    var cell3 = row5.insertCell(2);
    var cell4 = row5.insertCell(3);
    var cell5 = row5.insertCell(4);
    var cell6 = row5.insertCell(5);
    var cell7 = row5.insertCell(6);
    var cell8 = row5.insertCell(7);
    var cell9 = row5.insertCell(8);
    cell1.innerHTML = _board[4][0];
    cell2.innerHTML = _board[4][1];
    cell3.innerHTML = _board[4][2];
    cell4.innerHTML = _board[4][3];
    cell5.innerHTML = _board[4][4];
    cell6.innerHTML = _board[4][5];
    cell7.innerHTML = _board[4][6];
    cell8.innerHTML = _board[4][7];
    cell9.innerHTML = _board[4][8];

    var row67 = table.insertRow(5);
    var cell1 = row67.insertCell(0);
    var cell2 = row67.insertCell(1);
    var cell3 = row67.insertCell(2);
    var cell4 = row67.insertCell(3);
    var cell5 = row67.insertCell(4);
    var cell6 = row67.insertCell(5);
    var cell7 = row67.insertCell(6);
    var cell8 = row67.insertCell(7);
    var cell9 = row67.insertCell(8);
    cell1.innerHTML = _board[5][0];
    cell2.innerHTML = _board[5][1];
    cell3.innerHTML = _board[5][2];
    cell4.innerHTML = _board[5][3];
    cell5.innerHTML = _board[5][4];
    cell6.innerHTML = _board[5][5];
    cell7.innerHTML = _board[5][6];
    cell8.innerHTML = _board[5][7];
    cell9.innerHTML = _board[5][8];

    var row7 = table.insertRow(6);
    var cell1 = row7.insertCell(0);
    var cell2 = row7.insertCell(1);
    var cell3 = row7.insertCell(2);
    var cell4 = row7.insertCell(3);
    var cell5 = row7.insertCell(4);
    var cell6 = row7.insertCell(5);
    var cell7 = row7.insertCell(6);
    var cell8 = row7.insertCell(7);
    var cell9 = row7.insertCell(8);
    cell1.innerHTML = _board[6][0];
    cell2.innerHTML = _board[6][1];
    cell3.innerHTML = _board[6][2];
    cell4.innerHTML = _board[6][3];
    cell5.innerHTML = _board[6][4];
    cell6.innerHTML = _board[6][5];
    cell7.innerHTML = _board[6][6];
    cell8.innerHTML = _board[6][7];
    cell9.innerHTML = _board[6][8];

    var row8 = table.insertRow(7);
    var cell1 = row8.insertCell(0);
    var cell2 = row8.insertCell(1);
    var cell3 = row8.insertCell(2);
    var cell4 = row8.insertCell(3);
    var cell5 = row8.insertCell(4);
    var cell6 = row8.insertCell(5);
    var cell7 = row8.insertCell(6);
    var cell8 = row8.insertCell(7);
    var cell9 = row8.insertCell(8);
    cell1.innerHTML = _board[7][0];
    cell2.innerHTML = _board[7][1];
    cell3.innerHTML = _board[7][2];
    cell4.innerHTML = _board[7][3];
    cell5.innerHTML = _board[7][4];
    cell6.innerHTML = _board[7][5];
    cell7.innerHTML = _board[7][6];
    cell8.innerHTML = _board[7][7];
    cell9.innerHTML = _board[7][8];

    var row9 = table.insertRow(8);
    var cell1 = row9.insertCell(0);
    var cell2 = row9.insertCell(1);
    var cell3 = row9.insertCell(2);
    var cell4 = row9.insertCell(3);
    var cell5 = row9.insertCell(4);
    var cell6 = row9.insertCell(5);
    var cell7 = row9.insertCell(6);
    var cell8 = row9.insertCell(7);
    var cell9 = row9.insertCell(8);
    cell1.innerHTML = _board[8][0];
    cell2.innerHTML = _board[8][1];
    cell3.innerHTML = _board[8][2];
    cell4.innerHTML = _board[8][3];
    cell5.innerHTML = _board[8][4];
    cell6.innerHTML = _board[8][5];
    cell7.innerHTML = _board[8][6];
    cell8.innerHTML = _board[8][7];
    cell9.innerHTML = _board[8][8];
    return table;
  } */

function betterTable() {
  var arr = document.getElementById("grid");
  for (let i = 0; i < 9; i++) {
    let rows = arr.insertRow([i]);
    for (let j = 0; j < 9; j++) {
      let tables = rows.insertCell(-1);
      tables.innerHTML = _board[i][j];
    }
  }
  return arr;
}

const borderStyle = "2px solid";

var t = betterTable();
var rows = t.getElementsByTagName("TR");
for (var i = 0; i <= rows.length - 1; i++) {
  var row = rows[i];
  var cells = row.getElementsByTagName("TD");
  debugger;
  var allCells = [cells[2], cells[5]];
  allCells.forEach(function(cell) {
    cell.style.borderRight = borderStyle;
  });
}

var borderRows = [
  document.getElementsByTagName("TR")[2],
  document.getElementsByTagName("TR")[5]
];
borderRows.forEach(function(row) {
  row.style.borderBottom = borderStyle;
});

// var borderRows = [
//     document.getElementsByTagName("TD")[2], document.getElementsByTagName("TD")[11]
//   ]
//   borderRows.forEach(function (row) {
//       row.style.borderBottom = borderStyle;
//   });
