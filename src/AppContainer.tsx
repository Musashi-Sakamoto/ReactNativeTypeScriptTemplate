import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import CameraScreen from './screens/CameraScreen';

const AppNavigator = createSwitchNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Favorite: {
      screen: FavoriteScreen
    },
    Camera: {
      screen: CameraScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);