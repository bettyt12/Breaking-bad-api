import React, {useState} from 'react'


const Pagination = ({ itemPerPage,totalItems,paginate}) => {
    const pageNumbers=[];
    const [num,setNum]=useState(0);
   


    for (let i=1;i<=Math.ceil(totalItems/itemPerPage); i++ ){
        pageNumbers.push(i);
    }
    return (
        <div className='pagination'>
            <div className='pages'>
            
                {pageNumbers.map(number=>(
                  
                   //<button onClick={()=> paginate(number -1)}>prev</button>
                    <a href="!#" key={number} onClick={()=> paginate(number)}>{number}</a>
                   
                 ))}

            </div>
        </div>
    )
}

export default Pagination
