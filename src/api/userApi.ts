import { AppError } from '../models/Error';
import { User } from '../models/User';
import { Order } from '../models/Order';

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:8080';
const apiUrl = `${BASE_API}/api/v1/user`;

/**
 * fetches for user data.
 */
export const userApi = {
  getAllUsers: async () => {
    const response = await fetch(`${apiUrl}/all`, {
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

        const users: User[] = data.data;
        return users;
      })
      .catch((err) => {
        return err;
      });

    return response;
  },

  getOrderDetails: async (userId: number) => {
    const response = await fetch(
      `${apiUrl}/order?` + new URLSearchParams({ user_id: userId.toString() }),
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
        console.log(data);
        const err: AppError = data.error;
        if (err.errorCode !== 0) {
          throw new Error(err.errorMsg + ' ++ ' + err.errorField);
        }

        const ordersdetails: Order[] = data.data;
        return ordersdetails;
      })
      .catch((err) => {
        return err;
      });

    return response;
  },

};
