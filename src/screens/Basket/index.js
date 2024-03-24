import { View, Text, StyleSheet, FlatList } from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../../components/BasketDishItem";
// import styles from "../RestaurantDetailsScreen/styles";

const restaurant = restaurants[0];

const Basket = () => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "600", marginVertical: 10 }}>
        {restaurant.name}
      </Text>
      {/* <Text style={{ color: "grey" }}>{restaurant.description}</Text> */}
      <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
        Ваш заказ:
      </Text>
      <FlatList
        data={restaurant.dishes}
        renderItem={({ item }) => <BasketDishItem basketDish={item} />}
      />
      <View
        style={{
          height: 1,
          backgroundColor: "lightgrey",
          marginVertical: 10,
        }}
      />

      <View
        style={{
          backgroundColor: "black",
          marginTop: "auto",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: 800, fontSize: 18 }}>
          Сделать заказ
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  quantityContainer: {
    backgroundColor: "lightgrey",
    paddingHorizontal: 5,
    marginRight: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginRight: 10,
  },
});

export default Basket;
