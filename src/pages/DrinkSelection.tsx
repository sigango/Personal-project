import React, { useState, useEffect } from 'react';
import DrinkCard from '../components/DrinkCard';
import { Row, Divider } from 'antd';
import { Drink } from '../models/Drink';
import { drinkApi } from '../api/drinkApi';
import { authApi } from '../api/authApi';
import { useNavigate } from 'react-router-dom';

function DrinkSelection() {
  const [data, setData] = React.useState<Drink[]>([] as Drink[]);

  const getDrinks = async () => {
    const allDrinks = (await drinkApi.getAllDrinks()) as Drink[];
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1)
  };

  const handleNext = () => {
    navigate('/confirm');
    };

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
        onClick={handleBack}
        className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-primary active:bg-primary hover:bg-primary/70"
        >
        Back
    </button>
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
        STEP 2: Choose the Drink
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
                <DrinkCard
                  id={item.id}
                  drinkName={item.drinkName}
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

export default DrinkSelection;
