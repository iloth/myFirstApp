import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as userService from '../../services/admin/Users';
import Page from '../Page';

function User() {
  const { id } = useParams();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState({ id: -1, first_name: "", last_name: "", email: ""});

  useEffect(() => {
    userService.get(id).then(
      (result) => {
        setUser(result);
        setStatus('loaded');
      },
      (error) => {
        setStatus('error');
        setError(error);
      }
    )
  }, [ id ]);

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setUser({ ...user, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    userService.update(user).then(
      (result) => {
        setUser(result);
        setStatus('loaded');
      },
      (error) => {
        setStatus('error');
        setError(error);
      }
    );
  }

  return (
    <Page className='user' title="Edit User" status={status} error={error}>
      <form onSubmit={(e) => { handleFormSubmit(e); }}>
        <div className="mb-3">
          <label htmlFor="first_name" className="form-label">First name</label>
          <input type="text" className="form-control" id="first_name" name="first_name" value={ user.first_name } onChange={(e) => { handleChange(e); }} />
        </div>
        <div className="mb-3">
          <label htmlFor="last_name" className="form-label">Last name</label>
          <input type="text" className="form-control" id="last_name" name="last_name" value={ user.last_name } onChange={(e) => { handleChange(e); }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Last name</label>
          <input type="email" className="form-control" id="email" name="email" value={ user.email } onChange={(e) => { handleChange(e); }} />
        </div>
        <button className="btn btn-primary"><i className="fa fa-floppy-disk"></i> Save</button>
      </form>
    </Page>
  );
}

export default User;