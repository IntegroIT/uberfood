import { View, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute,useNavigation } from "@react-navigation/native";

const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {

  const route = useRoute()
const navigation = useNavigation()

  const id = route.params?.id
  console.warn(id)
   
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant} />}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
        keyExtractor={ (item) =>item.name }
      />
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back-circle"
          size={40}
          color="white"
          style={styles.imageIcon}
        />
      </View>
    </View>
  );
};

export default RestaurantDetailsPage;
