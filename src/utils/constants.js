export const PLAYER = {
  P1: "Player1",
  P2: "Player2",
};

export const PIECE_TYPE = {
  KING_P1: "王",
  KING_P2: "玉",
  ROOK: "飛",
  BISHOP: "角",
  GOLD_GENERAL: "金",
  SILVER_GENERAL: "銀",
  KNIGHT: "桂",
  LANCE: "香",
  PAWN: "歩",
};

export function DISPLAYNAME(piece) {
  if (!piece.isPromoted) return piece.pieceType;
  switch (piece.pieceType) {
    case PIECE_TYPE.PAWN:
      return "と";
    case PIECE_TYPE.KNIGHT:
      return "圭";
    case PIECE_TYPE.LANCE:
      return "杏";
    case PIECE_TYPE.SILVER_GENERAL:
      return "全";
    case PIECE_TYPE.ROOK:
      return "竜";
    case PIECE_TYPE.BISHOP:
      return "馬";
    default:
      return piece.pieceType;
  }
}

export const SQUARE_STATUS = {
  NORMAL: "normal",
  CLICKED: "clicked",
  CAN_MOVE: "can_move",
};

export const PIECE_STATUS = {
  ON_BOARD: "on_board",
  ON_STAND: "on_stand",
};

export const BOARD_SIZE_ROW = 9;
export const BOARD_SIZE_COLUMN = 9;

// T.B.D. SQUAREのデータを以下の形式に変更する
// {
//   piece: {
//     player: PLAYER.P1,
//     pieceType: PIECE_TYPE.LANCE,
//     pieceStatus: PIECE_STATUS.ON_BOARD,
//   },
//   squareStatus: SQUARE_STATUS.NORMAL,
// },
export function SQUARE(player, pieceType) {
  this.player = player;
  this.pieceType = pieceType;
  this.status = SQUARE_STATUS.NORMAL;
  this.isPromoted = false;
}

export const DIRECTION = {
  UP: { row: -1, column: 0 },
  RIGHT_UP: { row: -1, column: 1 },
  RIGHT: { row: 0, column: 1 },
  RIGHT_DOWN: { row: 1, column: 1 },
  DOWN: { row: 1, column: 0 },
  LEFT_DOWN: { row: 1, column: -1 },
  LEFT: { row: 0, column: -1 },
  LEFT_UP: { row: -1, column: -1 },
  KNIGHT_LEFT: { row: -2, column: -1 },
  KNIGHT_RIGHT: { row: -2, column: 1 },
};

export const MOVABLE_DIRECTIONS = {
  KING: [
    DIRECTION.UP,
    DIRECTION.RIGHT_UP,
    DIRECTION.RIGHT,
    DIRECTION.RIGHT_DOWN,
    DIRECTION.DOWN,
    DIRECTION.LEFT_DOWN,
    DIRECTION.LEFT,
    DIRECTION.LEFT_UP,
  ],
  LANCE: [DIRECTION.UP],
  ROOK: [DIRECTION.UP, DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.LEFT],
  BISHOP: [DIRECTION.RIGHT_UP, DIRECTION.RIGHT_DOWN, DIRECTION.LEFT_DOWN, DIRECTION.LEFT_UP],
  GOLD_GENERAL: [DIRECTION.UP, DIRECTION.RIGHT_UP, DIRECTION.RIGHT, DIRECTION.DOWN, DIRECTION.LEFT, DIRECTION.LEFT_UP],
  SILVER_GENERAL: [DIRECTION.UP, DIRECTION.RIGHT_UP, DIRECTION.RIGHT_DOWN, DIRECTION.LEFT_DOWN, DIRECTION.LEFT_UP],
  KNIGHT: [DIRECTION.KNIGHT_LEFT, DIRECTION.KNIGHT_RIGHT],
  PAWN: [DIRECTION.UP],
};
