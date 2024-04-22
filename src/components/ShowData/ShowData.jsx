import { Data } from "../../Data"
import  { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import './ShowData.css'

export default function ShowData() {
    const [input,setinput]=useState('')
    const [DataFetch,setDataFetch]=useState(Data)
    const UniqeCategory=[...new Set(Data.map((Catgy)=>Catgy.category))]
  
    // filter by categry
    function filterBycategry(category){
        const newD=Data.filter((newCategr)=>newCategr.category===category)
        setDataFetch(newD)
    }

    // handledata
    function updateData(e){
        setinput(e.target.value)
        console.log(DataFetch)
    }
  return (
    <>

    <div className="container">

     {/* divSearch */}
    <div className="divSearch">
       <input value={input} onChange={updateData} placeholder='Search..' className='SearchInput' type="text" />
       <CiSearch className='SearchBtn'/>
    </div>

    {/* Category Buttons */}
    <div>
        <button onClick={()=>setDataFetch(Data)} className='CategoryBtn' >All</button>

        {UniqeCategory.map((c)=>(
          <button key={c} onClick={()=>filterBycategry(c)} className='CategoryBtn'>{c}</button>
        ))}
       
     </div>

    {/* midlecontainer */}
        <div className="midlecontainer">
            {DataFetch.filter((DataSearched)=>input.toLocaleLowerCase() =="" ?
            DataSearched:DataSearched.title.toLocaleLowerCase().includes(input))
            .map((ListData,id)=>(
                <div className="cart" key={id}>
                <div className="img">
                    <img src={ListData.thumbnail} alt="" />
                </div>
                <div className="datatext">
                    <h5>{ListData.brand}</h5>
                    <h2>{ListData.title}</h2>
                    <h5 className="priceH">${ListData.price}</h5>
                    <p>{ListData.description }</p>

                </div>
                <button className="seamore">sea more</button>
           
            </div>


            ))}

            
        </div>
    </div>
    </>
  )
}
