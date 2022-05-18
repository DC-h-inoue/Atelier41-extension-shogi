import { BOARD_SIZE_COLUMN, BOARD_SIZE_ROW, EMPTY_SQUARE, PIECE_TYPE, SQUARE_STATUS } from "./constants";

export function calculateMovableSquare(boardPieces, rowIndex, columnIndex) {
  switch (boardPieces[rowIndex][columnIndex].pieceType) {
    case PIECE_TYPE.KING_P1:
    case PIECE_TYPE.KING_P2:
      for (let movableRowIndex = rowIndex - 1; movableRowIndex <= rowIndex + 1; movableRowIndex++) {
        if (movableRowIndex < 0 || movableRowIndex >= BOARD_SIZE_ROW) {
          continue;
        }

        for (let movableColumnIndex = columnIndex - 1; movableColumnIndex <= columnIndex + 1; movableColumnIndex++) {
          if (movableColumnIndex < 0 || movableColumnIndex >= BOARD_SIZE_COLUMN) {
            continue;
          }

          const boardPiece = boardPieces[movableRowIndex][movableColumnIndex];
          if (boardPiece.status !== SQUARE_STATUS.CLICKED) {
            boardPieces[movableRowIndex][movableColumnIndex].status = SQUARE_STATUS.CAN_MOVE;
          }
        }
      }
      break;
    default:
      break;
  }

  return boardPieces;
}

export function updateBoardPieces(boardPieces, fromLocation, toLocation) {
  // 移動先に駒がある時の処理
  if (boardPieces[toLocation[0]][toLocation[1]].pieceType !== PIECE_TYPE.NONE) {
  }

  // 駒の移動
  boardPieces[toLocation[0]][toLocation[1]] = boardPieces[fromLocation[0]][fromLocation[1]];
  boardPieces[fromLocation[0]][fromLocation[1]] = new EMPTY_SQUARE();

  // 盤面上の駒のステータス更新
  boardPieces.forEach((boardPiecesRow) => {
    boardPiecesRow.forEach((boardPiece) => {
      boardPiece.status = SQUARE_STATUS.NORMAL;
    });
  });

  return boardPieces;
}
