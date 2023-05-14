import React, { useState, useEffect } from 'react';
import GroupCard from '../components/GroupCard';
import { Row, Divider } from 'antd';
import { Meal } from '../models/Meal';
// import { classApi } from '../api/classApi';
// import { userApi } from '../api/userApi';
import { authApi } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

function FoodSelection() {
  const [data, setData] = React.useState<Meal[]>([] as Meal[]);

  const getFoods = async () => {
    const id = (await authApi.getId()) as number;
    const allFoods = (await mealApi.getAll()) as Meal[];
  };
  // routing
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/Drinks');
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
        Choose the Food
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
                <GroupCard
                  id={item.id}
                  mealName={item.mealName}
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
