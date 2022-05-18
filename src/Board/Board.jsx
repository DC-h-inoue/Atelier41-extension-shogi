// #region import宣言
import classNames from "classnames";
import Square from "./Square/Square";

import "./Board.css";
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
 * 盤面を表示するコンポーネント
 *
 * @param  {string?} className 外部から指定するクラス名
 * @return GGSquareコンポーネントのJSX要素
 */
const Board = ({ className, boardPieces, onPieceClick }) => {
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
    <div className={classNames("shogi_board", className)}>
      {boardPieces.map((row, rowIndex) => {
        return row.map((square, columnIndex) => {
          return (
            <Square
              square={square}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              onPieceClick={onPieceClick}
              key={columnIndex}
            />
          );
        });
      })}
    </div>
  );
  // #endregion
};
// #endregion

export default Board;
