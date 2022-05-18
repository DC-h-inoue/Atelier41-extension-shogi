// #region import宣言
import classNames from "classnames";

import Piece from "../Piece/Piece";

import "./PieceStand.css";
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
 * 駒置き場を表すコンポーネント
 *
 * @param {string?} className 外部から指定するクラス名
 * @param {Player} player 駒置き場のプレーヤー情報
 * @return 駒置き場を表すJSX要素
 */
const PieceStand = ({ className, pieces }) => {
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

  // playerがP1ならP1の駒の、P2ならP2の駒のJSX要素を返す
  return (
    <div className={classNames("shogi_piece-stand", className)}>
      {pieces.map((piece, index) => (
        <Piece key={index} className="piece-item" piece={piece} rowIndex={-1} columnIndex={-1} />
      ))}
    </div>
  );
  // #endregion
};

export default PieceStand;
// #endregion
