import {View, StyleSheet} from 'react-native';
import { VectorErrorMsg } from './VectorErrorMsg';
import { VectorLoadingMsg } from './VectorLoadingMsg';

const style = StyleSheet.create({
  flex: 1, 
  alignItems: 'center', 
  justifyContent: 'center'
});

export function VectorScreen({status, error, children}) {
  return (
    <View style={style}>
      { (() => {
        switch(status) {
          case 'loading':
            return <VectorLoadingMsg />
          case 'error':
            return <VectorErrorMsg error={error.message} />
          default:
          case 'loaded':
            return children;
        }
      })()}      
    </View>
  );
}

