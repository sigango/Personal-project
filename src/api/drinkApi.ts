import { AppError } from '../models/Error';
import { Drink } from '../models/Drink';

const BASE_API = process.env.REACT_APP_BASE_API || 'http://localhost:8080';
const apiUrl = `${BASE_API}/api/v1/user`;

/**
 * fetches for user data.
 */
export const drinkApi = {
  getAllDrinks: async () => {
    const response = await fetch(`${apiUrl}/drinks`, {
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

        const drinks: Drink[] = data.data;
        return drinks;
      })
      .catch((err) => {
        return err;
      });

    return response;
  },
};