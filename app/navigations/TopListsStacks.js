import {createStackNavigator} from "react-navigation-stack";
import TopRestaurantScreen from "../screens/TopRestaurants";


const TopListsScreenStacks = createStackNavigator({
    TopRestaurants:{
            screen: TopRestaurantScreen,
            navigationOptions: () => ({
                tittle: "Best restaurants"
            })
    }
});

export default TopListsScreenStacks;
