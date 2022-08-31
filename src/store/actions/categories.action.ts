import { Action, ActionCreator } from "redux";
import ICategory from "../../types/ICategory.type";

export interface SelectCategoryAction extends Action {
  type: "SELECT_CATEGORY";
  selected: ICategory;
}

export const selectCategory: ActionCreator<SelectCategoryAction> = (category) => {
  return {
    type: "SELECT_CATEGORY",
    selected: category,
  };
};

export type CategoryActions = ReturnType<typeof selectCategory>;
