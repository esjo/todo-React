import React from 'react'

export const TaskList = ({items,handleDelete}) => {

  return (
    <>
        <ul>
            {items.map((item) => {
                return(
                    <li key={item.id}>
                        <div>
                            {item.description}
                            <button onClick={() => handleDelete(item.id)}>X</button>
                        </div>
                    </li>
                )    
            })}  
        </ul>
    </>
  )
}

{/* <li>jflasjflas</li>
<li>fjsdljflsda</li>
<li>jfjlsadjf</li> */}
