import { Card, Form, Button } from 'antd';
import { useState } from 'react';
import React from 'react';
import test from '../assets/images/test-cover.jpg';
import { Order } from '../models/Order';
import { Food } from "../models/Food";
import { Drink } from "../models/Drink";
import { orderApi } from '../api/orderApi';

import { TeamOutlined, CalendarOutlined } from '@ant-design/icons';

const OrderCard: React.FC<Order> = ({ foodItems, drinkItems,}) => {
  const { order, setOrder } = useState<Order>();

  const Remove = () => {
    
  };

  return (
    <div className="my-3">
      <Card hoverable className="h-50 rounded rounded-xl">
        <div className="lg:grid lg:grid-cols-9 flex flex-col lg:flex-row">
          <div className="lg:col-span-2 overflow-y-hidden flex items-center justify-center mb-5 lg:mb-0">
            <img alt="example" src={test} className="p-0 rounded rounded-lg" />
          </div>

          <div className="lg:col-span-7 lg:grid lg:grid-cols-6 flex flex-col lg:flex-row lg:pl-5">
            <div className="lg:col-span-3 grid grid-rows-2 flex items-center lg:px-3">
              <div className="text-2xl font-bold">{testName}</div>
              <div className="font-medium"> {description} </div>
            </div>

            <div className="lg:col-span-2 grid grid-rows-2 flex items-center py-3 lg:px-3">
              <div className="inline-flex font-medium">
                <TeamOutlined style={{ color: '#8172D5' }} className="mr-3" />
                Group {groupName}
              </div>
              <div className="inline-flex font-medium">
                <
                  style={{ color: '#8172D5' }}
                  className="mr-3"
                />
                {}
              </div>
            </div>

            {/* <div className="flex flex-col justify-center">
              <button
                className="bg-primary hover:bg-primary/70 px-4 py-2 rounded rounded-lg font-bold text-white"
                onClick={Remove}
              >
                Remove
              </button>
            </div> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderCard;
