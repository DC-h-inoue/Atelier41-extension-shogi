// #region importå®£è¨?
import { useState } from "react";

import Board from "../Board/Board";
import PieceStand from "../PieceStand/PieceStand";
import { PLAYER, PIECE_TYPE, SQUARE_STATUS, EMPTY_SQUARE } from "../utils/constants";
import { calculateMovableSquare, clearSelectedOrMovableSquareStatus } from "../utils/helper";

import "./Game.css";
// #endregion
// #region åå®ç¾©
// #endregion
// #region å®æ°

// #endregion
// #region å?¨é¢æ°
// #endregion
// #region å¬éé¢æ°
// #endregion

// #region å¬éã¢ã¸ã¥ã¼ã«
/**
 * ã²ã¼ã?ã®é²è¡ç¶æ³ãè¡¨ç¤ºããã³ã³ãã?ãã³ã?
 * @returns GGBoardãGGPieceStandã³ã³ãã?ãã³ãã?JSXè¦ç´?
 */
const Game = () => {
  // #region stateå¤æ°
  // é¸æãããé§ãå­å¨ãããã©ã?ãå¤å®ãããã©ã°
  const [selectedPieceLocation, setSelectedPieceLocation] = useState(null);

  // æçªä¸­ã®ãã¬ã¤ã¤ã¼
  const [turnPlayer, setTurnPlayer] = useState(PLAYER.P1);

  const [finishesGame, setFinishesGame] = useState(false);

  // ç¤é¢ã®é§ã?éç½®æ??±
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
      // ã?ã?°ã®ããã«ä¸?æçã«æ­©ãæ¶ãã¦ã?¾ã?
      new EMPTY_SQUARE(),
      // {
      //   player: PLAYER.P2,
      //   pieceType: PIECE_TYPE.PAWN,
      //   status: SQUARE_STATUS.NORMAL,
      // },
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
  // Player1ã®é§ç½®ãå?´
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
  // Player2ã®é§ç½®ãå?´
  const [player2Pieces, setPlayer2Pieces] = useState([]);
  // #endregion
  // #region å?¨å¤æ°
  // #endregion
  // #region å?¨é¢æ°
  function updateBoardPieces(fromLocation, toLocation) {
    // ç§»åå?ã«é§ãããæã?å¦ç?
    if (boardPieces[toLocation[0]][toLocation[1]].pieceType !== PIECE_TYPE.NONE) {
      if (boardPieces[toLocation[0]][toLocation[1]].player === PLAYER.P1) {
        player2Pieces.push({
          ...boardPieces[toLocation[0]][toLocation[1]],
          player: PLAYER.P2,
          status: SQUARE_STATUS.NORMAL,
        });
      } else {
        player1Pieces.push({
          ...boardPieces[toLocation[0]][toLocation[1]],
          player: PLAYER.P1,
          status: SQUARE_STATUS.NORMAL,
        });
      }
    }

    // é§ã?ç§»å?
    boardPieces[toLocation[0]][toLocation[1]] = boardPieces[fromLocation[0]][fromLocation[1]];
    boardPieces[fromLocation[0]][fromLocation[1]] = new EMPTY_SQUARE();

    clearSelectedOrMovableSquareStatus(boardPieces);

    setBoardPieces(boardPieces);
    setPlayer1Pieces(player1Pieces);
    setPlayer2Pieces(player2Pieces);
  }

  // #endregion
  // #region ã¤ãã³ããã³ãã©
  const onPieceClick = (rowIndex, columnIndex) => {
    if (finishesGame) return;

    const clickedPiece = boardPieces[rowIndex][columnIndex];


    if (selectedPieceLocation === null) {
      // é§ãæªé¸æã?å ´åã??¸æãã?
      setSelectedPiece();
      return;
    }

    if (clickedPiece.status === SQUARE_STATUS.CAN_MOVE) {
      // ç§»åå¯è½ãªãã¹ãé¸æããå?´åã??§ãç§»åãã¦æçªãäº¤ä»£ãã
      updateBoardPieces(selectedPieceLocation, [rowIndex, columnIndex]);
      setSelectedPieceLocation(null);
      
      // ã©ã¡ããã®çãåãããæç¹ã§ã²ã¼ã?çµäº?¨ãã
      if(clickedPiece.pieceType === PIECE_TYPE.KING_P1 || clickedPiece.pieceType === PIECE_TYPE.KING_P2){
        alert(`${turnPlayer}ã®åã¡ã§ã?`);
        setFinishesGame(true);
        return;
      }
      
      setTurnPlayer(turnPlayer === PLAYER.P1 ? PLAYER.P2: PLAYER.P1);
    } 
    else {
      if(clickedPiece.player == PLAYER.NONE){
        // é§ããªã??ã¹ãé¸æããå?´åã??¸æãã­ã£ã³ã»ã«ãã
        clearSelectedOrMovableSquareStatus(boardPieces);
        setSelectedPieceLocation(null);
      }
      if(clickedPiece.player === turnPlayer && 
          rowIndex !== selectedPieceLocation.rowIndex && 
          columnIndex !== selectedPieceLocation.columnIndex){
        // æçªã®ãã¬ã¤ã¤ã¼ã®å¥ã®é§ãé¸æããå?´åã?ä¸?æ¦ç¤é¢ãããã©ã«ãç¶æã«ãªã»ã?ãã¦ãã
        // é¸æããé§ãè¨­å®ããªãã
        setSelectedPiece();
      }
    }

    // é¸æããé§ãè¨­å®ãã?
    function setSelectedPiece() {
      if (!isTurnPlayersPiece()) return;

      setBoardPieces(calculateMovableSquare(boardPieces, rowIndex, columnIndex));
      setSelectedPieceLocation([rowIndex, columnIndex]);
    }

    // ã¯ãªã?¯ããé§ãèªå??é§ã
    function isTurnPlayersPiece() {
      // ã¯ãªã?¯ãããã¹ã«é§ãç¡ããã°ä½ãããªã?
      if (clickedPiece.pieceType === PIECE_TYPE.NONE) return false;

      // ç¸æã?ã¬ã¤ã¤ã¼ã®é§é¸ææã¯ä½ãããªã?
      if (clickedPiece.player !== turnPlayer) return false;

      return true;
    }
  };
  // #endregion
  // #region å¯ä½ç¨å¦ç?
  // #endregion

  // #region ã¬ã³ã?ãªã³ã°å¦ç?
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
