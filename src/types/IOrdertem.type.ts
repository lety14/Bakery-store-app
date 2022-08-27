import ICartItem from "./ICartItem.type";

export default interface IOrderItem {
  id: number;
  date: number;
  total: number;
  items: ICartItem[];
}
