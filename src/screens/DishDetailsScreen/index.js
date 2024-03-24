import { useState } from "react";
import { View, Text, TouchableWithoutFeedback, Animated ,Pressable} from "react-native";
import restaurants from "../../../assets/data/restaurants.json";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


const dish = restaurants[0].dishes[0];

const DishDetailsScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const scaleMinus = useState(new Animated.Value(1))[0];
  const scalePlus = useState(new Animated.Value(1))[0];

  const navigation = useNavigation()


  const onMinus = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onPlus = () => {
    setQuantity(quantity + 1);
  };

  const onPressInMinus = () => {
    Animated.spring(scaleMinus, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const onPressOutMinus = () => {
    Animated.spring(scaleMinus, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const onPressInPlus = () => {
    Animated.spring(scalePlus, {
      toValue: 1.2,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const onPressOutPlus = () => {
    Animated.spring(scalePlus, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const getTotal = () => {
    // один знак после запятой
    return (dish.price * quantity).toFixed(1);
  };

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingVertical: 30,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "600", marginVertical: 10 }}>
        {dish.name}
      </Text>
      <Text style={{ color: "grey" }}>{dish.description}</Text>
      <View
        style={{
          height: 1,
          backgroundColor: "lightgrey",
          marginVertical: 10,
        }}
      />
      <View
        style={{
          backgroundColor: "lightblue",
          marginLeft: 100,
          width: 150,
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
          borderColor: "orange",
          borderWidth: 1,
          borderRadius: 80,
        }}
      >
        <TouchableWithoutFeedback
          onPressIn={onPressInMinus}
          onPressOut={onPressOutMinus}
          onPress={onMinus}
        >
          <Animated.View style={{ transform: [{ scale: scaleMinus }] }}>
            <AntDesign name="minuscircleo" size={40} color="#0f0ec0e" />
          </Animated.View>
        </TouchableWithoutFeedback>
        <Text
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20,
            fontSize: 30,
          }}
        >
          {quantity}
        </Text>
        <TouchableWithoutFeedback
          onPressIn={onPressInPlus}
          onPressOut={onPressOutPlus}
          onPress={onPlus}
        >
          <Animated.View style={{ transform: [{ scale: scalePlus }] }}>
            <AntDesign name="pluscircleo" size={40} color="black" />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      <Pressable onPress={() => navigation.navigate("Basket")}
        style={{
          backgroundColor: "black",
          marginTop: "auto",
          padding: 20,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontWeight: 800, fontSize: 18 }}>
          Добавить {quantity} в корзину &#8226; ({getTotal()} р.)
        </Text>
      </Pressable>
    </View>
  );
};

export default DishDetailsScreen;
