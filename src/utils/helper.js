import {
  BOARD_SIZE_COLUMN,
  BOARD_SIZE_ROW,
  EMPTY_SQUARE,
  MOVABLE_DIRECTIONS,
  PIECE_TYPE,
  PLAYER,
  SQUARE_STATUS,
} from "./constants";

export function calculateMovableSquare(boardPieces, rowIndex, columnIndex) {
  const boardPiece = boardPieces[rowIndex][columnIndex];
  const piecePlayer = boardPiece.player;
  const reverse = piecePlayer === PLAYER.P1 ? 1 : -1;

  // 駒の移動可否判定
  function getPointCoordinate(movableDirections) {
    const movableCoordinates = movableDirections
      .map((direction) => {
        // directionの反転
        // 自分の位置 + directionで移動先の判定
        return {
          row: rowIndex + direction.row * reverse,
          column: columnIndex + direction.column * reverse,
        };
      })
      .filter((candidate) => isMovableCoordinate(candidate));

    return movableCoordinates;
  }

  function getLineCoordinate() {
    return boardPieces[rowIndex][columnIndex].player === PLAYER.P1 ? -1 : 1;
  }

  // 駒が動けるかどうか判定
  function isMovableCoordinate(candidate) {
    // 盤外の場合は移動不可
    if (candidate.x < 0 || candidate.x >= BOARD_SIZE_COLUMN || candidate.y < 0 || candidate.y >= BOARD_SIZE_ROW) {
      return false;
    }
    // 自分の駒がある場合は移動不可
    else if (boardPieces[candidate.x][candidate.y].player === piecePlayer) {
      return false;
    }
    // それ以外なら移動可
    else {
      return true;
    }
  }

  let movableCoordinates;

  switch (boardPiece.pieceType) {
    case PIECE_TYPE.KING_P1:
    case PIECE_TYPE.KING_P2:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.KING);
      break;
    case PIECE_TYPE.PAWN:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.PAWN);
      break;
    default:
      break;
  }

  movableCoordinates.forEach((candidate) => (boardPieces[candidate.x][candidate.y].status = SQUARE_STATUS.CAN_MOVE));

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