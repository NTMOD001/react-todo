import { useState } from 'react'
const AddTask = ({ onAdd }) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()
        //validate
        if (!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, date, reminder })

        setText('');
        setDate('');
        setReminder(false);
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task..' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Date</label>
                <input type='text' placeholder='Add Date..'
                    onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className='form-control from-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input className='btn btn-block' type='submit' value='Save Task' />
        </form>
    )
}

export default AddTask
