import React from 'react'

const Pagination = ({setCurentPage,total,postPerPage}) => {
    const pageNumber = [];
    for(let i=1;i<=Math.ceil(total/postPerPage);i++){
        pageNumber.push(i)
    }
  return (
    <div className='pagination'>
      {pageNumber.map((page,index)=>{
        return <button key={index} onClick={()=>setCurentPage(page)}>{page}</button>
      })}

    </div>
  )
}

export default Pagination
