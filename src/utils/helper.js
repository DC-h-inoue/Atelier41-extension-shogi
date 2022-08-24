import { BOARD_SIZE_COLUMN, BOARD_SIZE_ROW, MOVABLE_DIRECTIONS, PIECE_TYPE, PLAYER, SQUARE_STATUS } from "./constants";

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
  function getLineCoordinates(movableDirections) {
    const candidateDirections = movableDirections.map((direction) => {
      // directionの反転
      return {
        row: direction.row * reverse,
        column: direction.column * reverse,
      };
    });

    // 各指定方向で移動可能な座標群を取得
    const movableCoordinates = [];
    candidateDirections
      .map((direction) => getLineCoordinatesByDirection(direction))
      .forEach((candidates) => {
        candidates.forEach((candidate) => {
          movableCoordinates.push(candidate);
        });
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

  // 1つの指定方向の直線上で移動可能な座標を取得
  function getLineCoordinatesByDirection(direction) {
    const enemyPlayer = piecePlayer === PLAYER.P1 ? PLAYER.P2 : PLAYER.P1;

    // 移動可能な座標候補を計算
    const candidate = {
      row: rowIndex + direction.row,
      column: columnIndex + direction.column,
    };

    const movableCoordinates = [];

    // 移動できない座標、または相手の駒がいる座標まで到達したら終了
    while (isMovableCoordinate(candidate)) {
      movableCoordinates.push({ ...candidate });

      // 相手の駒がいる座標ならそれより先は確認しない
      if (boardPieces[candidate.row][candidate.column].player === enemyPlayer) {
        break;
      }

      // 次の移動座標候補
      candidate.row += direction.row;
      candidate.column += direction.column;
    }

    return movableCoordinates;
  }

  clearSelectedOrMovableSquareStatus(boardPieces);
  boardPiece.status = SQUARE_STATUS.CLICKED;

  let movableCoordinates;

  switch (boardPiece.pieceType) {
    case PIECE_TYPE.KING_P1:
    case PIECE_TYPE.KING_P2:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.KING);
      break;
    case PIECE_TYPE.PAWN:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.PAWN);
      break;
    case PIECE_TYPE.GOLD_GENERAL:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.GOLD_GENERAL);
      break;
    case PIECE_TYPE.SILVER_GENERAL:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.SILVER_GENERAL);
      break;
    case PIECE_TYPE.KNIGHT:
      movableCoordinates = getPointCoordinate(MOVABLE_DIRECTIONS.KNIGHT);
      break;
    case PIECE_TYPE.ROOK:
      movableCoordinates = getLineCoordinates(MOVABLE_DIRECTIONS.ROOK);
      break;
    case PIECE_TYPE.BISHOP:
      movableCoordinates = getLineCoordinates(MOVABLE_DIRECTIONS.BISHOP);
      break;
    case PIECE_TYPE.LANCE:
      movableCoordinates = getLineCoordinates(MOVABLE_DIRECTIONS.LANCE);
      break;
    default:
      break;
  }

  movableCoordinates?.forEach(
    (candidate) => (boardPieces[candidate.row][candidate.column].status = SQUARE_STATUS.CAN_MOVE)
  );

  return boardPieces;
}

// 選択中もしくは移動可能なマスのステータスをリセットする
export function clearSelectedOrMovableSquareStatus(boardPieces) {
  boardPieces.forEach((boardPiecesRow) => {
    boardPiecesRow.forEach((boardPiece) => {
      if (boardPiece.status === SQUARE_STATUS.CAN_MOVE || boardPiece.status === SQUARE_STATUS.CLICKED)
        boardPiece.status = SQUARE_STATUS.NORMAL;
    });
  });
}
