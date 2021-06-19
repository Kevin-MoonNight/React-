import Item from './Item';

const List=({listArticle,deleteArticle , submittingStatus})=>{

    return <div className="list">
        {
            listArticle.map((item) => {
                const {id, note, time, date } = item
                return <Item 
                    key={id}
                    id={id}
                    note={note}
                    time={time} 
                    date={date} 
                    deleteArticle={deleteArticle} 
                    submittingStatus={submittingStatus} />
            })
        }
    </div>
}
export default List