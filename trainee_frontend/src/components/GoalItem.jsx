import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteGoal,updateGoal } from '../features/goals/goalSlice'


function GoalItem({ goal,update}) {
  const dispatch = useDispatch()
  const [updateText, setUpdateText] = useState('');
  const [Update,setUpdate] = useState(0);

  // const text = "Hello WOrld"

  function updateClick() {
    if(Update === 0) {
      setUpdate(1)
    }
    else {
      setUpdate(0)
    }
  }

  
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateGoal({ id: goal._id, goalData: { text: updateText } }));
    setUpdateText('');
  };

  return (
    <div className='goal'>
      <div>{ new Date(goal.createdAt).toLocaleString('en-IN') } </div>
      <h2>{goal.text}</h2>
      {/* <button onClick={() => dispatch(updateGoal(goal._id,{text : "Hello World"}))} className='close'  style={{marginRight: '20px'}}> */}
      
      <button onClick={updateClick} className='close'  style={{marginRight: '20px'}}>
        U     
      </button>
    

        { Update === 1 && (
        <form onSubmit={handleUpdate}>
          <div className='form-group'> 
          
          <input 
            type='text'
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            placeholder='Enter Updated Goal'
          />
          </div>

          <button type='submit' className='update-btn'>Update</button>
        </form>
      )}


      <button onClick={() => dispatch(deleteGoal(goal._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default GoalItem
