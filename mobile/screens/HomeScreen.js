import { View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="List of Users" onPress={() => navigation.navigate('Users')} />
    </View>
  );
}