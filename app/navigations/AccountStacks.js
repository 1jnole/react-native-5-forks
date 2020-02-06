import {createStackNavigator} from "react-navigation-stack";
import MyAccountScreen from "../screens/MyAccount";


export const AccountScreenStacks = createStackNavigator({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: () => ({
            title: "Profile"
        })
    }
});

export default AccountScreenStacks;
