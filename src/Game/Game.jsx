// #region import宣言
import { useState } from "react";

import Board from "../Board/Board";
import PieceStand from "../PieceStand/PieceStand";
import { PLAYER, PIECE_TYPE, SQUARE_STATUS, SQUARE, BOARD_SIZE_ROW } from "../utils/constants";
import { calculateMovableSquare, clearSelectedOrMovableSquareStatus } from "../utils/helper";

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

  // 手番中のプレイヤー
  const [turnPlayer, setTurnPlayer] = useState(PLAYER.P1);

  const [finishesGame, setFinishesGame] = useState(false);

  // 盤面の駒の配置情報
  const [boardPieces, setBoardPieces] = useState([
    [
      new SQUARE(PLAYER.P2, PIECE_TYPE.LANCE),
      new SQUARE(PLAYER.P2, PIECE_TYPE.KNIGHT),
      new SQUARE(PLAYER.P2, PIECE_TYPE.SILVER_GENERAL),
      new SQUARE(PLAYER.P2, PIECE_TYPE.GOLD_GENERAL),
      new SQUARE(PLAYER.P2, PIECE_TYPE.KING_P2),
      new SQUARE(PLAYER.P2, PIECE_TYPE.GOLD_GENERAL),
      new SQUARE(PLAYER.P2, PIECE_TYPE.SILVER_GENERAL),
      new SQUARE(PLAYER.P2, PIECE_TYPE.KNIGHT),
      new SQUARE(PLAYER.P2, PIECE_TYPE.LANCE),
    ],
    [
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.P2, PIECE_TYPE.ROOK),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.P2, PIECE_TYPE.BISHOP),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
    ],
    [
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P2, PIECE_TYPE.PAWN),
    ],
    [
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
    ],
    [
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
    ],
    [
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
    ],
    [
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
      new SQUARE(PLAYER.P1, PIECE_TYPE.PAWN),
    ],
    [
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.P1, PIECE_TYPE.BISHOP),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
      new SQUARE(PLAYER.P1, PIECE_TYPE.ROOK),
      new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE),
    ],
    [
      new SQUARE(PLAYER.P1, PIECE_TYPE.LANCE),
      new SQUARE(PLAYER.P1, PIECE_TYPE.KNIGHT),
      new SQUARE(PLAYER.P1, PIECE_TYPE.SILVER_GENERAL),
      new SQUARE(PLAYER.P1, PIECE_TYPE.GOLD_GENERAL),
      new SQUARE(PLAYER.P1, PIECE_TYPE.KING_P1),
      new SQUARE(PLAYER.P1, PIECE_TYPE.GOLD_GENERAL),
      new SQUARE(PLAYER.P1, PIECE_TYPE.SILVER_GENERAL),
      new SQUARE(PLAYER.P1, PIECE_TYPE.KNIGHT),
      new SQUARE(PLAYER.P1, PIECE_TYPE.LANCE),
    ],
  ]);
  // Player1の駒置き場
  const [player1Pieces, setPlayer1Pieces] = useState([
    { player: PLAYER.P1, pieceType: PIECE_TYPE.LANCE },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.KNIGHT },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.SILVER_GENERAL },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.GOLD_GENERAL },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.KING_P1 },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.GOLD_GENERAL },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.SILVER_GENERAL },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.KNIGHT },
    { player: PLAYER.P1, pieceType: PIECE_TYPE.LANCE },
  ]);
  // Player2の駒置き場
  const [player2Pieces, setPlayer2Pieces] = useState([]);
  // #endregion
  // #region 内部変数
  // #endregion
  // #region 内部関数
  function updateBoardPieces(fromLocation, toLocation) {

    const clickedPiece = boardPieces[toLocation[0]][toLocation[1]];

    // 移動先に駒がある時の処理
    if (boardPieces[toLocation[0]][toLocation[1]].pieceType !== PIECE_TYPE.NONE) {
      if (boardPieces[toLocation[0]][toLocation[1]].player === PLAYER.P1) {
        player2Pieces.push({
          ...clickedPiece,
          player: PLAYER.P2,
          status: SQUARE_STATUS.NORMAL,
        });
      } else {
        player1Pieces.push({
          ...clickedPiece,
          player: PLAYER.P1,
          status: SQUARE_STATUS.NORMAL,
        });
      }
    }

    // 駒の移動
    boardPieces[toLocation[0]][toLocation[1]] = boardPieces[fromLocation[0]][fromLocation[1]];
    boardPieces[fromLocation[0]][fromLocation[1]] = new SQUARE(PLAYER.NONE, PIECE_TYPE.NONE);

    clearSelectedOrMovableSquareStatus(boardPieces);

    // どちらかの王が取られた時点でゲームを終了する
    if (clickedPiece.pieceType === PIECE_TYPE.KING_P1 || clickedPiece.pieceType === PIECE_TYPE.KING_P2) {
      alert(`${turnPlayer}の勝ちです!`);
      setFinishesGame(true);
      return;
    }

    // 成り判定
    const movePiece = boardPieces[toLocation[0]][toLocation[1]];
    if((!movePiece.isPromoted) && (turnPlayer === PLAYER.P1 ? toLocation[0] < 3 : toLocation[0] >= BOARD_SIZE_ROW - 3)){
      var promotes = window.confirm("成りますか?");
      movePiece.isPromoted = promotes;
    }

    setBoardPieces(boardPieces);
    setPlayer1Pieces(player1Pieces);
    setPlayer2Pieces(player2Pieces);
  }

  // #endregion
  // #region イベントハンドラ
  const onPieceClick = (rowIndex, columnIndex) => {
    if (finishesGame) return;

    const clickedPiece = boardPieces[rowIndex][columnIndex];

    // 駒未選択状態
    if (selectedPieceLocation === null) {
      setSelectedPiece();
    }
    // 駒選択状態
    else {
      if (clickedPiece.status === SQUARE_STATUS.CAN_MOVE) {
        // 移動可能なマスだった場合、駒を移動して手番を交代する
        updateBoardPieces(selectedPieceLocation, [rowIndex, columnIndex]);
        setSelectedPieceLocation(null);
      

        setTurnPlayer(turnPlayer === PLAYER.P1 ? PLAYER.P2 : PLAYER.P1);
      } else {
        if (
          clickedPiece.player === turnPlayer &&
          rowIndex !== selectedPieceLocation.rowIndex &&
          columnIndex !== selectedPieceLocation.columnIndex
        ) {
          // 手番中のプレイヤー別の駒を選択した場合、一旦盤面をデフォルト状態にリセットしてから
          // 選択した駒を設定しなおす
          setSelectedPiece();
        }
      }
    }

    // 選択した駒を設定する
    function setSelectedPiece() {
      if (!isTurnPlayersPiece()) return;

      setBoardPieces(calculateMovableSquare(boardPieces, rowIndex, columnIndex));
      setSelectedPieceLocation([rowIndex, columnIndex]);
    }

    // クリックした駒が自分の駒か
    function isTurnPlayersPiece() {
      // クリックしたマスに駒が無ければ何もしない
      if (clickedPiece.pieceType === PIECE_TYPE.NONE) return false;

      // 相手プレイヤーの駒選択時は何もしない
      if (clickedPiece.player !== turnPlayer) return false;

      return true;
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
        <PieceStand className="piece-stand" pieces={player2Pieces} />
        <PieceStand className="piece-stand" pieces={player1Pieces} />
      </div>
    </div>
  );
  // #endregion
};

export default Game;
// #endregion
