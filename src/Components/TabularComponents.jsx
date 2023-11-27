import React from 'react'

const TabularComponents = (props) => {
  return (
    <div>
        <table className="table table-stripped table-bordered">
          <thead>
              <tr>
                  <th>level</th>
                  <th>message</th>
                  <th>resourceId</th>
                  <th>timestamp</th>
                  <th>traceId</th>
                  <th>spanId</th>
                  <th>commit</th>
                  <th>metadata.parentResourceId</th>
              </tr>
          </thead>
          <tbody>
              {
                  props.logs?.map(log =>
                  (
                      <tr key={log.id}>
                          <td>{log.level}</td>
                          <td>{log.message}</td>
                          <td>{log.resourceId}</td>
                          <td>{log.timestamp}</td>
                          <td>{log.traceId}</td>
                          <td>{log.spanId}</td>
                          <td>{log.commit}</td>
                          <td>{log.metadata.parentResourceId}</td>
                      </tr>
                  )
                  )
              }
          </tbody>
      </table>
    </div>
  )
}

export default TabularComponents