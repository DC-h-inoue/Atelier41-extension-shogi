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
