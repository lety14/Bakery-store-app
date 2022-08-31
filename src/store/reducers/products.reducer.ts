import { PRODUCTS } from "../../constants/data/products.constants";
import { Reducer } from "redux";
import IProduct from "../../types/IProduct.type";
import { ProductsActions } from "../actions/products.action";

interface ProductsState {
  products: IProduct[];
  filteredProducts: IProduct[];
  selected: IProduct | null;
}

const initialState: ProductsState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productReducer: Reducer<ProductsState, ProductsActions> = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        selected: action.product,
      };
    case "FILTER_PRODUCTS":
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      };

    default:
      return state;
  }
};

export default productReducer;
