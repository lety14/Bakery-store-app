import { Action, ActionCreator } from "redux";
import IProduct from "../../types/IProduct.type";

export interface SelectProductAction extends Action {
  type: "SELECT_PRODUCT";
  product: IProduct;
}
export interface FilterProductAction extends Action {
  type: "FILTER_PRODUCTS";
  categoryId: number;
}

export const selectProduct: ActionCreator<SelectProductAction> = (product) => ({
  type: "SELECT_PRODUCT",
  product: product,
});

export const filteredProducts: ActionCreator<FilterProductAction> = (id) => ({
  type: "FILTER_PRODUCTS",
  categoryId: id,
});

export type ProductsActions =
  | ReturnType<typeof selectProduct>
  | ReturnType<typeof filteredProducts>;
