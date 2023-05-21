import React, { useState } from 'react';
import { Card, List, Button } from 'antd';
import { Food } from '../models/Food';
import { Drink } from '../models/Drink';
import { Order } from '../models/Order';
import { OrderApi, useGetOrderByID } from '../api/orderApi';
import { useParams } from 'react-router-dom';

// 1. Len url lấy parameter orderId = ? về
// 2. Có orderId rồi thì gọi order duới database -> orderApi.GetOrderByID async -> render -> sol: useQuery + useState.

const Confirmation = ({selectedFood = [] as Food[], selectedDrink = [] as Drink[]}) => {
  const [totalPrice, setTotalPrice] = useState(
    selectedFood.reduce((acc, food) => acc + food.price, 0)
    + selectedDrink.reduce((acc, drink) => acc + drink.price, 0)
  );

  const confirmOrderHandler = () => {
    const order: Order = {
      foodItems: selectedFood,
      drinkItems: selectedDrink,
    };
    OrderApi.confirmOrder();
  };

  const { orderId } = useParams()
  const { data: confirmOrder } = useGetOrderByID(parseInt(orderId ?? "0"))
  // order = OrderApi.GetOrderByID()
  return (
    <div>
      <Card title="Selected Food Items">
        <List
          dataSource={selectedFood}
          renderItem={(food: Food) => (
            <List.Item key={food.foodName}>
              {food.foodName} - ${food.price}
            </List.Item>
          )}
        />
      </Card>

      <Card title="Selected Drink Items">
        <List
          dataSource={selectedDrink}
          renderItem={(drink: Drink) => (
            <List.Item key={drink.drinkName}>
              {drink.drinkName} - ${drink.price}
            </List.Item>
          )}
        />
      </Card>
     
      <div>Total Price: ${totalPrice.toFixed(2)}</div>

      <Button type="primary" onClick={confirmOrderHandler}>Confirm Order</Button>

      {confirmOrder?.map((i) => {
        return (
          <div>{JSON.stringify(i.drinkItems)}</div>
        )
      })}

    </div>
  );
};

export default Confirmation;
