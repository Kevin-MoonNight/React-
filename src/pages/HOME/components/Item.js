const Item = ({ id, note, time, date, deleteArticle , submittingStatus }) => {

    function deleteItem(){
        submittingStatus.current = true
        deleteArticle(function(prevArticle){
            return prevArticle.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>
           <p>{note}</p> 
           <p>{time} {date}</p>
        </div>
        <button onClick={deleteItem} className="remove">刪除</button>
    </div>
}
export default Item