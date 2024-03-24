import { View, Text, Image } from "react-native";
import styles from "./styles";

const RestaurantHeader = ({ restaurant }) => {
  return (
    <View style={styles.page}>
      <Image source={{ uri: restaurant.image }} style={styles.image} />

      <View style={styles.container}>
        <Text style={styles.title}>{restaurant.name}</Text>
        <Text style={styles.subtitle}>
          {restaurant.deliveryFee} р. &#8226; {restaurant.minDeliveryTime}-
          {restaurant.maxDeliveryTime} мин.
              </Text>
             <View style={styles.menuSubTitle}><Text style={styles.menuTitle}>Menu</Text></View>
      </View>
    </View>
  );
};

export default RestaurantHeader;
