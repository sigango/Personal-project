import { useState } from "react";
import { Order } from "../models/Order";
import { AppError } from "../models/Error";
import { stringify } from 'querystring';
import { useMutation, useQuery } from "react-query";

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:8080';
const apiUrl = `${BASE_API}/api/v1/order`;

const initialOrder: Order = {
    foodItems: [],
    drinkItems: [],
};

function setOrder(initialOrder: Order) {
  throw new Error("Function not implemented.");
}

export const OrderApi = {
  order: initialOrder,
    // const [order, setOrder] = useState<Order>(initialOrder);
  
    // Remove a food item from the order packet
    // const removeFood = (foodId: number) => {
    //   setOrder((prevOrder) => ({
    //     ...prevOrder,
    //     food: prevOrder.foodItems.filter((f) => f.id !== foodId),
    //   }));
    // };
  
    // Remove a drink item from the order packet
    // const removeDrink = (drinkId: number) => {
    //   setOrder((prevOrder) => ({
    //     ...prevOrder,
    //     drink: prevOrder.drinkItems.filter((d) => d.id !== drinkId),
    //   }));
    // };
  
    // Get the current state of the order
    // const getOrder = (): Order => order;
  
    getAllOrder: async () => {
      const response = await fetch(`${apiUrl}/`, {
        method: 'GET',
        credentials: 'include',
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
  
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          console.log(data);
          const err: AppError = data.error;
          if (err.errorCode !== 0) {
            throw new Error(err.errorMsg + ' ++ ' + err.errorField);
          }
  
          const orders: Order[] = data.data;
          return orders;
        })
        .catch((err) => {
          return err;
        });
  
      return response;
    },
    
    getOrderById: async (id: number) => {
      const response = await fetch(
        `${apiUrl}/?` + new URLSearchParams({ order_id: id.toString() }),
        {
          method: 'GET',
        }
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
  
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          const err: AppError = data.error;
          if (err.errorCode !== 0) {
            throw new Error(err.errorMsg + ' ++ ' + err.errorField);
          }
  
          const orders: Order[] = data.data;
          return orders;
        })
  
      return response;
    },
    
    // Confirm and place the order
    confirmOrder : async () => {
      const json = JSON.stringify(OrderApi.order);
      try {
        const response = await fetch(`${apiUrl}/confirm`, {
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
    },
};

export const useGetOrderByID = (orderId: number) => {
  const api = async () => {
    const result = await OrderApi.getOrderById(orderId).then((res) => {
      return res;
    });

    return result;
  }

  return useQuery(["GetOrderByID", orderId], api);
}