// #region import宣言
import Piece from "../../Piece/Piece";
import "./Square.css";
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
 * 盤面のマスの情報を表すコンポーネント
 *
 * @param {Piece[]} pieceHistory 駒の配置履歴
 * @param {number} index 盤面のマスのIndex
 * @return 盤面のマスの情報を表すJSX要素
 */
const Square = ({ square, rowIndex, columnIndex, onPieceClick }) => {
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

  // 盤面のマスに駒が置かれている場合は駒を描画するJSX要素を返す
  return (
    <div className="gg_square">
      {
        <Piece
          piece={square}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          onPieceClick={onPieceClick}
        />
      }
    </div>
  );
  // #endregion
};

export default Square;
// #endregion
