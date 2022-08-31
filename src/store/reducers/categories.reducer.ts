import { Reducer } from "redux";
import { CATEGORIES } from "../../constants/data/categories.constants";
import ICategory from "../../types/ICategory.type";
import { CategoryActions } from "../actions/categories.action";

interface CategoriesState {
  categories: ICategory[];
  selected: null | ICategory;
}

const initialState: CategoriesState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer: Reducer<CategoriesState, CategoryActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      // eslint-disable-next-line no-case-declarations
      const selected = state.categories.find((categories) => categories.id === action.selected.id);
      return {
        ...state,
        selected: selected !== undefined ? selected : null,
      };

    default:
      return { ...state };
  }
};

export default categoryReducer;
