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

  // 駒の移動可能なライン上の座標を取得
  function getLineCoordinate(movableDirections) {
    const candidateDirections = movableDirections
      .map((direction) => {
        // directionの反転
        return {
          row: direction.row * reverse,
          column: direction.column * reverse,
        };
      });

    // 指定方向で移動可能な座標を取得
    let movableCoordinates = [];
    candidateDirections
      .map((direction) => GetLineMovableCoordinates(direction))
      .map((candidates) => {
        candidates.forEach((candidate => {
          movableCoordinates.push(candidate);
        }));
      });

    return movableCoordinates;
  }

  // 駒が動けるかどうか判定
  function isMovableCoordinate(candidate) {
    // 盤外の場合は移動不可
    if (
      candidate.row < 0 ||
      candidate.row >= BOARD_SIZE_ROW ||
      candidate.column < 0 ||
      candidate.column >= BOARD_SIZE_COLUMN
    ) {
      return false;
    }
    // 自分の駒がある場合は移動不可
    else if (boardPieces[candidate.row][candidate.column].player === piecePlayer) {
      return false;
    }
    // それ以外なら移動可
    else {
      return true;
    }
  }

  // 指定方向の直線上で移動可能な座標を取得
  function GetLineMovableCoordinates(direction) {
    let candidate = {
      row: rowIndex + direction.row,
      column: columnIndex + direction.column,
    };

    let movableCoordinates = [];

    // 移動できない座標、または相手の駒がいる座標まで到達したら終了
    while (isMovableCoordinate(candidate)) {
      movableCoordinates.push(candidate);

      // 相手の駒がいる座標ならそれ以上確認しない
      if (boardPieces[candidate.row][candidate.column].player !== PLAYER.NONE && 
        boardPieces[candidate.row][candidate.column].player !== piecePlayer) {
        break;
      }

      // 次の移動座標候補
      candidate = {
        row: candidate.row + direction.row,
        column: candidate.column + direction.column,
      }
    }

    return movableCoordinates;
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
    case PIECE_TYPE.LANCE:
      movableCoordinates = getLineCoordinate(MOVABLE_DIRECTIONS.LANCE);
      break;
    default:
      break;
  }

  movableCoordinates.forEach(
    (candidate) => (boardPieces[candidate.row][candidate.column].status = SQUARE_STATUS.CAN_MOVE)
  );

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
