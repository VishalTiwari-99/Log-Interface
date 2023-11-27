import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TabularComponents from './TabularComponents';

const ListLogsComponents = () => {
    const[logs, setLogs] = useState([]);

    useEffect(()=>{
        getAllLogs();
    }, []);

    const getAllLogs = () => {
        axios.get("http://3.111.57.188:3000/api/logs", {
            headers:{
                'Content-Type':'application/json',
            }
        }).then((response)=>{
            if(response.data != null){
                setLogs(response.data);
            }
        }).catch(error => { 
            if(error.response){
                console.log("Error from Server: ", error.message)
            }else if(error.request){
                console.log("Error from client: ", error.message)
            }else{
                console.log("Error: ",error.message);
            }
        })
    }

  return (
    <div>
        <div className="row">
        <h3>All Logs</h3>
        <TabularComponents logs={logs}/>
        </div>
    </div>
  )
}

export default ListLogsComponents