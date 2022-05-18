// #region import宣言
import { useState } from "react";

import Board from "../Board/Board";
import PieceStand from "../PieceStand/PieceStand";
import { PLAYER, PIECE_TYPE, SQUARE_STATUS, EMPTY_SQUARE } from "../utils/constants";
import { calculateMovableSquare, updateBoardPieces } from "../utils/helper";

import "./Game.css";
// #endregion
// #region 型定義
// #endregion
// #region 定数

// #endregion
// #region 内部関数
// #endregion
// #region 公開関数
// #endregion

// #region 公開モジュール
/**
 * ゲームの進行状況を表示するコンポーネント
 * @returns GGBoard、GGPieceStandコンポーネントのJSX要素
 */
const Game = () => {
  // #region state変数
  // 選択された駒が存在するかどうかを判定するフラグ
  const [selectedPieceLocation, setSelectedPieceLocation] = useState(null);
  // 盤面の駒の配置情報
  const [boardPieces, setBoardPieces] = useState([
    [
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.LANCE,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.KNIGHT,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.SILVER_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.GOLD_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.KING_P1,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.GOLD_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.SILVER_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.KNIGHT,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.LANCE,
        status: SQUARE_STATUS.NORMAL,
      },
    ],
    [
      new EMPTY_SQUARE(),
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.ROOK,
        status: SQUARE_STATUS.NORMAL,
      },
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.BISHOP,
        status: SQUARE_STATUS.NORMAL,
      },
      new EMPTY_SQUARE(),
    ],
    [
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P2,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
    ],
    [
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
    ],
    [
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
    ],
    [
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
    ],
    [
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.PAWN,
        status: SQUARE_STATUS.NORMAL,
      },
    ],
    [
      new EMPTY_SQUARE(),
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.ROOK,
        status: SQUARE_STATUS.NORMAL,
      },
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      new EMPTY_SQUARE(),
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.BISHOP,
        status: SQUARE_STATUS.NORMAL,
      },
      new EMPTY_SQUARE(),
    ],
    [
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.LANCE,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.KNIGHT,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.SILVER_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.GOLD_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.KING_P2,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.GOLD_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.SILVER_GENERAL,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.KNIGHT,
        status: SQUARE_STATUS.NORMAL,
      },
      {
        player: PLAYER.P1,
        pieceType: PIECE_TYPE.LANCE,
        status: SQUARE_STATUS.NORMAL,
      },
    ],
  ]);
  const [player1Pieces, setPlayer1Pieces] = useState([
    { player: PLAYER.P2, pieceType: PIECE_TYPE.LANCE },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.KNIGHT },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.SILVER_GENERAL },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.GOLD_GENERAL },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.KING_P1 },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.GOLD_GENERAL },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.SILVER_GENERAL },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.KNIGHT },
    { player: PLAYER.P2, pieceType: PIECE_TYPE.LANCE },
  ]);
  const [player2Pieces, setPlayer2Pieces] = useState(Array(20));
  // #endregion
  // #region 内部変数
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  const onPieceClick = (rowIndex, columnIndex) => {
    if (selectedPieceLocation === null) {
      if (boardPieces[rowIndex][columnIndex].pieceType === PIECE_TYPE.NONE) {
        return;
      }
      const newBoardPieces = [...boardPieces];
      newBoardPieces[rowIndex][columnIndex].status = SQUARE_STATUS.CLICKED;

      setBoardPieces(calculateMovableSquare(newBoardPieces, rowIndex, columnIndex));
      setSelectedPieceLocation([rowIndex, columnIndex]);
    } else {
      // 移動可能か判定する
      if (boardPieces[rowIndex][columnIndex].status === SQUARE_STATUS.CAN_MOVE) {
        setBoardPieces(updateBoardPieces(boardPieces, selectedPieceLocation, [rowIndex, columnIndex]));
        setSelectedPieceLocation(null);
      } else {
      }
    }
  };
  // #endregion
  // #region 副作用処理
  // #endregion

  // #region レンダリング処理
  return (
    <div className="game">
      <Board className="board" boardPieces={boardPieces} onPieceClick={onPieceClick} />
      <div className="piece-stand-container">
        <PieceStand className="piece-stand" pieces={player1Pieces} />
        <PieceStand className="piece-stand" pieces={player2Pieces} />
      </div>
    </div>
  );
  // #endregion
};

export default Game;
// #endregion
