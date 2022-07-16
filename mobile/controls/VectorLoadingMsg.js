import {Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  width: '100%',
  textAlign: 'center',
  backgroundColor: '#ceceff',
  color: 'white',
  paddingTop: '1em',
  paddingBotton: '1em',

});

export function VectorLoadingMsg() {
  return (
    <Text style={style}>Loading ...</Text>
  )
}

