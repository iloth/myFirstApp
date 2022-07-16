import { useState, useEffect } from "react";
import { VectorScreen } from "../controls/VectorScreen";
import { VectorFlatList } from "../controls/VectorFlatList";
import * as userService from '../services/Users'
import { TouchableHighlight, Text } from "react-native";

export default function UsersScreen({ navigation }) {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('loading');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAll().then(
      (result) => {
        setUsers(result);
        setStatus('loaded');
      },
      (error) => {
        setError(error);
        setStatus('error');
      }
    )
  }, []);

  function onPressUser(user) {
    navigation.navigate('User', { id: user.id });
  }

  return (
    <VectorScreen status={status} error={error?.message}>
      <VectorFlatList data={users} renderItem={({item}) => 
        <TouchableHighlight onPress={ () => onPressUser(item) }>
          <Text style={{padding: '5px'}}>{`${item.first_name} ${item.last_name}`}</Text>
        </TouchableHighlight>
      } />
    </VectorScreen>
  );
}

{/* <VectorFlatList items={users} item={ ({item}) => { return (
  <TouchableHighlight onPress={ () => {onPressUser(item)}}>
    <Text style={{padding: '5px'}}>{`${item.first_name} ${item.last_name}`}</Text>
  </TouchableHighlight>
)} } /> */}
