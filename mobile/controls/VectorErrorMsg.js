import {Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#ffcece',
  color: 'white',
  paddingTop: '1em',
  paddingBotton: '1em',

});

export function VectorErrorMsg({message}) {
  return (
    <Text style={style}>{message}</Text>
  )
}