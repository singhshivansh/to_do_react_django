import React,{useState, useEffect} from 'react';
import Task  from './Task';
import axios from 'axios';

const Home = () => {

    const [state, setstate] = useState({items: [], text: ""});

    //getting data using axios
    const getData = ()=>{
        axios.get('http://127.0.0.1:8000/listView')
        .then((response) => {
            console.log(response.data);
            setstate({items:response.data, text:""});
        },(error) => {
            console.log(error);
        });
    }

    

    const handleChange = (e) => {
        setstate({items:state.items, text: e.target.value});
        // console.log(...state.items);
        // setstate({ text:e.target.value })
        // if(state.text !== ''){
        //     const items = [...]
        // }
    }

    const handleAdd = (e) => {
        // console.log(...state.items);
        console.log(typeof(state.items))
        if(state.text !== ''){
            // const item = state.items.push(state.text);
            setstate({items: [...state.items, state.text], text:""});
        }
    }

    const handleDelete = (e) => {
        let items = [...state.items];
        console.log(e.target.id);
        items.splice(e.target.id , 1);
        // items = items.remove(e.target.id);
        // console.log(items);
        // items = items.slice(e.target.id, e.target.id+1);
        setstate({items:items, text:""});
    }


    //Addind the plans with backend
    const handleDjangoAdd = (e)=>{
        axios.post('http://127.0.0.1:8000/createPlan', 
        {
            "item":state.text
        })
        .then((response)=>{
            setstate({items: [...state.items], text:""});
            console.log(response);
        }, (error) => {
            console.log(error);
        })
        getData();
        console.log(state.text);
    }


    //Useeffect
    
    useEffect(()=>{
        getData();
    }, [])

    return(
        <>

        <h1 className="mt-5 pt-2 text-white">Add Task</h1>

        <div className="d-flex justify-content-center">
            {/* <form method="post" className="col-6"> */}
                <div className="col-6">
                    <input type="text" className="form-control" value={state.text} onChange={handleChange} />
                    <button type="submit" onClick={handleDjangoAdd} className="m-2 btn btn-success">Add</button>
                </div>
            {/* </form> */}
        </div>
        <div className="d-flex justify-content-center">
            <ul className="list-group col-5 dark-bg " >
                {
                    state.items.map((value, i)=>{
                        return <Task value={value.item} key ={i.id} id={i.id} sendData={handleDelete} />
                    })
                }
            </ul>
        </div>

        </>
    )
}

export default Home;