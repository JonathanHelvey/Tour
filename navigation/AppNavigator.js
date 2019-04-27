import { createStackNavigator } from "react-navigation";
import Home from "screens/Home";

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Friends: { screen: Friends }
});

export default AppNavigator;
