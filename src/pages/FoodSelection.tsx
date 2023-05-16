import React, { useState, useEffect } from 'react';
import FoodCard from '../components/FoodCard';
import { Row, Divider } from 'antd';
import { Food } from '../models/Food';
import { foodApi } from '../api/foodApi';

import { useNavigate } from 'react-router-dom';

function FoodSelection() {
  const [data, setData] = React.useState<Food[]>([]);

  const getFoods = async () => {
    const allFoods = (await foodApi.getAllFoods()) as Food[];
  };

  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/drinkselection');
    };

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        width: '60%',
      }}
    >
    <Row
    gutter={[50, 50]}
    justify="space-evenly"
    style={{ marginBottom: '5em' }}
    className="py-5"
    >
    <button
        onClick={handleNext}
        className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary active:bg-primary hover:bg-primary/70"
        >
        Next
    </button>
    </Row>
      <Divider
        orientation="center"
        style={{
          fontSize: '56px',
          fontFamily: 'Roboto',
          color: '#8172d5',
        }}
      >
       STEP 1: Choose the Food
      </Divider>

      <Row
        gutter={[20, 20]}
        justify="space-evenly"
        style={{ marginBottom: '5em' }}
        className="py-5"
      >
        {data &&
          data.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  borderColor: '#d4d4d6',
                  borderWidth: '1px',
                  borderRadius: '20px',
                }}
              >
                <FoodCard
                  id={item.id}
                  foodName={item.foodName}
                  info={item.info}
                  price={item.price}
                />
              </div>
            );
          })}
      </Row>
    </div>
  );
}

export default FoodSelection;
