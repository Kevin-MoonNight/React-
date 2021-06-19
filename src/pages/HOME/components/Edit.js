import {useState} from 'react'
import { v4 } from 'uuid';

const Edit = ({ setArticle, submittingStatus }) => {
    const initialState = ""

    const [note, setNote] = useState(initialState)
    function noteChange(e){
        setNote(e.target.value)
    }
  
    const [time, setTime] = useState(initialState)
    function timeChange(e){
        setTime(e.target.value)
    }
    
    const [date, setDate] = useState(initialState)
    function dateChange(e){
        setDate(e.target.value)
    }

    function addArticle() {
        submittingStatus.current = true
        setArticle(function (prevData){
            return [{ id: v4(), note, time, date }, ...prevData]
        })
    }

    return <div>
        <h1>備忘錄</h1>
        <p>記事:</p>
        <input type="text" value={note} onChange={noteChange}/>
        <p>時間:</p>
        <input type ="time" value={time} onChange={timeChange} />
        <p>日期:</p>
        <input type="date" value={date} onChange={dateChange} />
        <button onClick={addArticle} className="add">新增</button>
    </div>
}
export default Edit