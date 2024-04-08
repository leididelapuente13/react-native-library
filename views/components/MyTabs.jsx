import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import Views
import { HomeScreen } from "./../HomeScreen";
import { BookManagement } from "./../BookManagement";
import { BookDetails } from "../BookDetails";

export const MyTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Book Management" component={BookManagement} />
      <Tab.Screen name="Book Details" component={BookDetails} />
    </Tab.Navigator>
  );
};
