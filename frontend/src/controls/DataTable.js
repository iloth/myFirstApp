import React from 'react';

function DataTable(props) {  
  
  const columns = props.columns ?? [];
  const data = props.data ?? [];

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          {columns.map((col) => (
            <th>{col.title}</th>
          ))}
          {props.onEditButtonClick && <th></th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((col) => (
              <td>{ row[col.key] }</td>
            ))}
            {props.onEditButtonClick && <td><button className='btn btn-primary' onClick={(e) => { props.onEditButtonClick(row) }}><i className='fa fa-pencil'></i></button></td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;