import { StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Options } from '../screens/Options';
import { Themes } from '../screens/Themes';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';

const HomeStack = StackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				header: () => null,
				headerTitle: 'Home',
			},
		},
		Options: {
			screen: Options,
			navigationOptions: {
				headerTitle: 'Options',
			},
		},
		Themes: {
			screen: Themes,
			navigationOptions: {
				headerTitle: 'Themes',
			},
		},
	},
	{
		headerMode: 'screen',
	},
);

export default StackNavigator(
	{
		Home: {
			screen: HomeStack,
		},
		CurrencyList: {
			screen: CurrencyListStack,
		},
	},
	{
		mode: 'modal',
		headerMode: 'none',
		cardStyle: { paddingTop: statusbar.currentHeight },
	},
);