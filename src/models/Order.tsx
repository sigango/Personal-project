import { Food } from "./Food";
import { Drink } from "./Drink";

interface Order {
    foodItems: Food[];
    drinkItems: Drink[];
  }
  
  export type { Order };