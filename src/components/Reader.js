import React  from 'react'
import * as xlsx from "xlsx";
import { Header } from './Header';
import { useState } from 'react';

export const Reader = () => {
    
    const [data , setData] = useState([]);
     
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const jsondata = xlsx.utils.sheet_to_json(worksheet);
                console.log(jsondata);
                localStorage.setItem('sheet1',JSON.stringify(jsondata));
                 
                let h = [];
                for (const property in jsondata[0]) {
                    console.log(`${property}: ${jsondata[0][property]}`);
                    
                    h.push(property);
                  }

                  let uniquehead = [...new Set(h)];
                  setData(uniquehead);

                 
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }

  return (
    <div> 
           <form>
    <label htmlFor="upload">Upload File</label>
    <input
        type="file"
        name="upload"
        id="upload"
        onChange={readUploadFile}
    />
</form>
<div>
    <Header data={data}/>
   
</div>

</div>
  )
}
