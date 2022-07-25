import React, { useState } from "react";
import Picture from "./Picture";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./Constants";
import { BarDataChart } from "./BarDataChart";

 
const data = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('sheet1'))));

let counter = 0;
function DragDrop() {
  const [board, setBoard] = useState([]);
  const [chartData, setchartData] = useState([]);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.HEADER,
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver
  let backgroundColor = '#222'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }
  const addImageToBoard = (id) => {
    const pictureList = { header: id, values: [] };

    for (let index = 0; index < data.length; index++) {
      const element = data[index][id];
      pictureList.values.push(element);

    }
    const colum1 = "AccountNumber";
    const column2 = "OrderQty";
    const bargraphdata = [];
    const temp=[];
    for (let i = 0; i < 10; i++) {
      if(!temp.find(x=> x==data[i][colum1])){
        const key = data[i][colum1];
        temp.push(key);
        const value = data[i][column2];
        const obj = { key: key, data: value };
        bargraphdata.push(obj);
        
      }
      
     
    }

    if (counter > 0) {
      
      setchartData((chartData)=>bargraphdata);

    }
    console.log(pictureList);
    setBoard((board) => [...board, pictureList]);
    counter = counter + 1;
  };
  return (
    <>

      <div className="Board" ref={drop} >
        {board.map((item) => {
          return <Picture key={Math.random()} header={item.header} values={item.values} />;
        })}
      </div>
      <BarDataChart data={chartData} />
    </>
  );
}

export default DragDrop;
