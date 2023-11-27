import React, {useState} from 'react'
import TabularComponents from './TabularComponents';
import axios from 'axios';

const SearchComponent = () => {
    const [level, setLevel] = useState(null);
    const [message, setMessage] = useState(null);
    const [resourceId, setResourceId] = useState(null);
    const [startTimestamp, setStartTimestamp] = useState(null);
    const [endTimestamp, setEndTimestamp] = useState(null);
    const [traceId, setTraceId] = useState(null);
    const [spanId, setSpanId] = useState(null);
    const [commit , setCommit] = useState(null);
    const [parentResourceId, setParentResourceId] = useState(null);
    const [searched, setSearched] = useState(false);

    const [log, setLog] = useState([]);

  const submitHandler1 = async (event) => {
    event.preventDefault();
    let query = "?";
    if (level) {
      query = query + "level=" + level;
    }
    if (message) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "message=" + message;
    }
    if (resourceId) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "resourceId=" + resourceId;
    }
    if (traceId) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "traceId=" + traceId;
    }
    if (spanId) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "spanId=" + spanId;
    }
    if (commit) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "commit=" + commit;
    }
    if (parentResourceId) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "parentResourceId=" + parentResourceId;
    }
    axios.get("http://3.111.57.188:3000/api/logs/filter" + query, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      if (response.data != null) {
        setLog(response.data);
        setSearched(true);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  const submitHandler2 = async (event) => {
    event.preventDefault();
    let query = "?";
    if (startTimestamp) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "startTimestamp=" + startTimestamp;
    }
    if (endTimestamp) {
      if (query !== "?") {
        query = query + "&"
      }
      query = query + "endTimestamp=" + endTimestamp;
    }
    axios.get("http://3.111.57.188:3000/api/logs/filter" + query, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) => {
      if (response.data != null) {
        setLog(response.data);
        setSearched(true);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div className='container'>
      <div className='row' style={{display: "flex", flexDirection: 'rows'}}>
        <div className='card col-md-6' style={{marginTop:"10px", flex:'1'}} >
          <h3 className='text-center'>Apply Filter (Maximum 2)</h3>
          <div className='card-body'>
            <form onSubmit={submitHandler1}>
              <div className="form-row">
                <div className='form-group col-md-6'>
                <input placeholder="Enter level" name='level' className='form-control' value={level} onChange={(event)=>setLevel(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                <input placeholder="Enter spanId" name='spanId' className='form-control' value={spanId} onChange={(event)=>setSpanId(event.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <div className='form-group col-md-6'>
                <input placeholder="Enter resourceId" name='resourceId' className='form-control' value={resourceId} onChange={(event)=>setResourceId(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                <input placeholder="Enter traceId" name='traceId' className='form-control' value={traceId} onChange={(event)=>setTraceId(event.target.value)} />
                </div>
              </div>
              <div className='form-group'>
              <input placeholder="Enter message" name='message' className='form-control' value={message} onChange={(event)=>setMessage(event.target.value)} />
              </div>
              <div className="form-row">
                <div className='form-group col-md-4'>
                <input placeholder="Enter commit" name='commit' className='form-control' value={commit} onChange={(event)=>setCommit(event.target.value)} />
                </div>
                <div className='form-group col-md-8'>
                <input placeholder="Enter metadata.parentResourceId" name='parentResourceId' className='form-control' value={parentResourceId} onChange={(event)=>setParentResourceId(event.target.value)} />
                </div>
              </div>
              <div className="text-center">
                <button className='btn btn-succes' style={{marginTop:"10px", backgroundColor:'#0ecc2e'}}>Search</button>
              </div>
            </form>
          </div>
        </div>


        <div className='card col-md-6' style={{marginTop:"10px", flex:'1', marginLeft:"10px"}} >
          <h3 className='text-center'>Filter By Date</h3>
          <div className='card-body'>
            <form onSubmit={submitHandler2}>
              <div className="form-row">
                <div className='form-group col-md-6'>
                <label for="startDate">Set Start Date:</label>  
                <input type='date' id="startDate" placeholder="Enter start date" name='startTimestamp' className='form-control' value={startTimestamp} onChange={(event)=>setStartTimestamp(event.target.value)} />
                </div>
                <div className='form-group col-md-6'>
                <label for="endDate">Set End Date:</label>  
                <input type='date' id="endDate" placeholder="Enter end date" name='endTimestamp' className='form-control' value={endTimestamp} onChange={(event)=>setEndTimestamp(event.target.value)} />
                </div>
              </div>
              <div className="text-center">
                <button className='btn btn-succes' style={{marginTop:"10px", backgroundColor:'#0ecc2e'}}>Search</button>
              </div>
            </form>
          </div>
        </div>        
      </div>
      <div style={{marginTop:"20px"}}></div>
    {searched && <TabularComponents logs={log}/>}
    </div>
  )
}

export default SearchComponent