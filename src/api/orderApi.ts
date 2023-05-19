import { useState } from "react";
import { Order } from "../models/Order";
import { stringify } from 'querystring';

const initialOrder: Order = {
    foodItems: [],
    drinkItems: [],
};

export const useFoodOrder = () => {
    const [order, setOrder] = useState<Order>(initialOrder);
  
    // Remove a food item from the order packet
    // const removeFood = (foodId: number) => {
    //   setOrder((prevOrder) => ({
    //     ...prevOrder,
    //     food: prevOrder.foodItems.filter((f) => f.id !== foodId),
    //   }));
    // };
  
    // // Remove a drink item from the order packet
    // const removeDrink = (drinkId: number) => {
    //   setOrder((prevOrder) => ({
    //     ...prevOrder,
    //     drink: prevOrder.drinkItems.filter((d) => d.id !== drinkId),
    //   }));
    // };
  
    // Calculate the total price of the order
    const getTotalPrice = (): number => {
      const foodTotal = order.foodItems.reduce(
        (acc, f) => acc + f.price,
        0
      );
      const drinkTotal = order.drinkItems.reduce(
        (acc, d) => acc + d.price,
        0
      );
      return foodTotal + drinkTotal;
    };
  
    // Get the current state of the order
    const getOrder = (): Order => order;
  
    // Confirm and place the order
    confirmOrder : async () => {
      const json = JSON.stringify(order);
      try {
        const response = await fetch("/api/order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: json,
        });
        if (!response.ok) {
          throw new Error("Failed to confirm order");
        }
        setOrder(initialOrder);
      } catch (err) {
        console.error(err);
      }
    };
};