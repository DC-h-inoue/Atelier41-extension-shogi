export const PLAYER = {
  P1: "Player1",
  P2: "Player2",
  NONE: "none",
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
  NONE: "",
};

export const SQUARE_STATUS = {
  NORMAL: "normal",
  CLICKED: "clicked",
  CAN_MOVE: "can_move",
};

export const BOARD_SIZE_ROW = 9;
export const BOARD_SIZE_COLUMN = 9;

export function EMPTY_SQUARE() {
  this.player = PLAYER.NONE;
  this.pieceType = PIECE_TYPE.NONE;
  this.status = SQUARE_STATUS.NORMAL;
}

// rowとcolumnを置き換え！！！！
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
  ROOK: "飛",
  BISHOP: "角",
  GOLD_GENERAL: "金",
  SILVER_GENERAL: "銀",
  KNIGHT: "桂",
  PAWN: [DIRECTION.UP],
};
