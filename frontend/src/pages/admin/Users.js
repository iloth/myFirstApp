import React, { useEffect, useState } from 'react';
import * as userService from '../../services/admin/Users'
import DataTable from '../../controls/DataTable'
import { useNavigate } from 'react-router-dom';
import Page from '../Page';

function Users() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    userService.getAll().then(
      (result) => {
        setUsers(result);
        setStatus('loaded');
      },
      (error) => {
        setStatus('error');
        setError(error);
      }
    )
  }, []);
  
  const columns = [
    {key: 'id', title: '#'},
    {key: 'first_name', title: 'First Name'},
    {key: 'last_name', title: 'Last Name'},
    {key: 'email', title: 'Email'},
  ]

  return (
    <Page className="users" title="Users" status={status} error={error}>
      <DataTable columns={columns} data={users} onEditButtonClick={(user) => { navigate('/admin/users/' + user.id) }} />
    </Page>
  );
}

export default Users;