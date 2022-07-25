import React from "react";
import { useDrag } from "react-dnd";

function Picture({ header, values }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "header",
    item: { id: header },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return ( 
   <> <div
      ref={drag}
      className="header"
      
       
    >{header}
      {values.slice(0,10).map((item) => {
          return <div key={Math.random()} className="item">{item}</div>;
        })}
</div>
</>
  );
}

export default Picture;
