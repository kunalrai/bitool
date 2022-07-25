import React , {createContext} from 'react';
import { Reader } from './Reader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend'
import  DragDrop  from './DragDrop';
import { BarDataChart } from './BarDataChart';
 
const Name = createContext();

export const Layout = () => {

     

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="container" >
                <div className="row ">
                    <div className="col-2 text-start border" style={{ border: '1px solid', height: '500px' }} >
                        <Reader />
                       
                    </div>
                    <div className="col w-75">
                     <DragDrop />
                     
                    </div>
                    
                    
                </div>
            </div>
        </DndProvider>
    )
}
