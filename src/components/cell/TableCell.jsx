import React from 'react';
import "./TableCell.css"
//2-200 4-150 6-100 8-80
// размер карточек в зависимости от количесва карточек
const CELL_SIZE = {
  "2": 220,
  "4": 180,
  "6": 160,
 
}

function cellStyles(size) {
  return {
    height: CELL_SIZE[size],
    width: CELL_SIZE[size],
  }
}
// function foto(src){
//   return{
//     bgi
//   }
// }


const TableCell = ({index, data, onClick, loading, boardSize}) => {
  return (
    <>
    {data && <div className={data.done ? "cell active" : "cell"} style={cellStyles(boardSize)} onClick={loading ? f=> f : () => onClick(index)}>
       <img src={data.open ? data.content : ""} className={data.open ? "cellImg" : ""} alt={data.open ? data.content : ""}/> 
      {/* <p>{data.open ? data.content : ""}</p>  */}
    </div>
    }
    </>
  );
};

export default TableCell;