// #region import宣言
import classNames from "classnames";
import { PLAYER, SQUARE_STATUS, DISPLAYNAME } from "../utils/constants";

import "./Piece.css";
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
 * 駒を表すコンポーネント
 *
 * @param {string?} className 外部から指定するクラス名
 * @param {Piece} piece 駒の情報
 * @param {number?} boardSquareIndex マスの位置情報
 * @return 駒を表すJSX要素
 */
const Piece = ({ className, piece, rowIndex, columnIndex, onPieceClick }) => {
  // #region state変数
  // #endregion
  // #region 内部変数
  // #endregion
  // #region 内部関数
  // #endregion
  // #region イベントハンドラ
  // #endregion
  // #region 副作用処理
  // #endregion
  // #region レンダリング処理
  return (
    <button
      className={classNames(
        "piece",
        piece?.player === PLAYER.P1 ? "p1" : "p2",
        {
          "can-move-piece": piece?.status === SQUARE_STATUS.CAN_MOVE,
          "clicked-piece": piece?.status === SQUARE_STATUS.CLICKED,
        },
        piece?.isPromoted ? "promoted" : "",
      )}
      onClick={() => onPieceClick(rowIndex, columnIndex)}
    >
      {DISPLAYNAME(piece)}
    </button>
  );
  // #endregion
};

export default Piece;
// #endregion
