import { AppError } from '../models/Error';
import { Food } from '../models/Food';

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:8080';
const apiUrl = `${BASE_API}/api/v1/user`;

/**
 * fetches for user data.
 */
export const foodApi = {
  getAllFoods: async () => {
    const response = await fetch(`${apiUrl}/foods`, {
      method: 'GET',
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

        const foods: Food[] = data.data;
        return foods;
      })
      .catch((err) => {
        return err;
      });

    return response;
  },
};
