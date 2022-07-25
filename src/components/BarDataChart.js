import React from 'react'
import { BarChart ,LineChart,LineSeries,PointSeries,BubbleChart} from 'reaviz';
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants' 
const style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  marginBottom: '.5rem',
  cursor: 'move',
  
}
export const BarDataChart = ({data,name}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.HEADER,
    item: { id:name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        //alert(`You dropped ${item.name} into ${dropResult.name}!`)
      
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))
  const opacity = isDragging ? 0.4 : 1
  const button=(data!=null) ?<div className='chart'>
    <BarChart   width={350} height={250} data={data}   style={{ ...style, opacity }}
  data-testid={`chart`}/>  
 </div>: <div    data-testid={`chart`}>test</div>;
  
  return (
    <>{button}</>
  )
}




 