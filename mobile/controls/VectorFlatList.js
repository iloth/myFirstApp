import {StyleSheet, FlatList} from 'react-native';

const style = StyleSheet.create({
});

export function VectorFlatList({data, renderItem}) {
  return (
    <FlatList style={style} data={data} renderItem={renderItem} />
  );
}

