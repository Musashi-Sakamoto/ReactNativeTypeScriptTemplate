import { useContext } from 'react';
import { NavigationScreenProp, NavigationRoute, NavigationContext} from 'react-navigation';

const useNavigation = <T>() => {
  return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, T>;
}

export default useNavigation;