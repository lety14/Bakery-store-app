export default interface ICartItem {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  weight: string;
  price: number;
  quantity: number;
  title?: string;
}
