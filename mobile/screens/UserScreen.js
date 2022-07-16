import { useEffect, useState } from "react";
import { View, Text, Form, Input } from "react-native";
import * as userService from '../services/Users';

export default function UserScreen({ route }) {
  const id = route.params.id;
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
        setError(error);
        setStatus('error');
      }
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      { (() => {
        switch(status) {
          case 'loading':
            return <Text>Loading ...</Text>
          case 'error':
            return <Text>{ `Error: ${error.message}` }</Text>
          default:
          case 'loaded':
            return (
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
            );
        }
      })()}
    </View>
  );
}