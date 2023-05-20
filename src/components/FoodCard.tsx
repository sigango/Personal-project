import { Card, Form, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from '../assets/css/GroupCard.module.css';
import { Food } from '../models/Food';
import { Order } from '../models/Order';
const { Meta } = Card;

const FoodCard: React.FC<Food> = ({ id, foodName, info, price }) => {
  const [order, setOrder] = useState<Order | null>(null);

  const handleClick = (food: Food) => {
    setOrder((prevOrder) => {
      if (prevOrder) {
        return {
          ...prevOrder,
          foodItems: [...prevOrder.foodItems, food],
        };
      } else {
        return {
          foodItems: [food],
          drinkItems: [],
        };
      }
    });
  }

  return (
    <Form>
      <Card
        hoverable
        className={styles.card}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            className={styles.cover}
            style={{
              alignItems: 'center',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px',
            }}
          />
        }
      >
        <div className={styles.wrapper}>
          <Meta
            title={foodName}
            description={price}
            className={styles.content}
            style={{ textAlign: 'center' }}
          />
          <Button
            className={styles.btn}
            style={{ alignItems: 'center' }}
            onClick={() => handleClick( {id, foodName, info, price})}
          >
            Add to Packet
          </Button>
        </div>
      </Card>
    </Form>
  );
};

export default FoodCard;
