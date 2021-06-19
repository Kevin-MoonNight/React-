import Edit from './components/Edit';
import List from './components/List';
import './index.css';
import {useState,useEffect,useRef} from 'react';
import { API_GET_DATA, API_HOST } from '../../global/constants'

async function fetchArticle(setArticle){
    const res = await fetch(API_GET_DATA)
    const {article} = await res.json()
    setArticle(article)
};

async function AddNewArticle(article){
    const res = await fetch(API_GET_DATA,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({article})
    })
};

const Home=()=>{

    const [article, setArticle] = useState([]);
    const submittingStatus = useRef(false);
    
    useEffect(()=>{
        if (!submittingStatus.current) {
          return
        }
        AddNewArticle(article).then(article => submittingStatus.current = false)
    }, [article]);

    useEffect(()=>{
            fetchArticle(setArticle)
    }, []);

    return (<div className="app">
        <Edit setArticle={setArticle} submittingStatus = {submittingStatus} />
        <List listArticle={article} deleteArticle={setArticle} submittingStatus={submittingStatus} />
    </div>);
};

export default Home
