import React from 'react'

export const FormTodo = ({handleDescription,description,handleSumit}) => {
  return (
    <form action="" onSubmit={handleSumit}>
        <div className='form'>
            <label htmlFor="description"></label>
            <input 
                type="text"
                name='description'
                id='description'
                placeholder='description'
                value={description}
                onChange={handleDescription}
             />
             <button className='add' type='submit'>
                Add
             </button>
        </div>
    </form>
  )
}
