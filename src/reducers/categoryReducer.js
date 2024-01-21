import {
    PRINTING,
    BRANDING,
    DESIGNING,
    FOR_RENT,
    FOR_SALE,
    LATEST,
  }
  
from "../actions/types";
  
  export const activeCategoryReducer = (
    state = { activeCategory: "designing" },
    action
  ) => {
    switch (action.type) {
      case PRINTING:
        return { activeCategory: "printing" };
      case BRANDING:
        return { activeCategory: "branding" };
      case DESIGNING:
        return { activeCategory: "designing" };
      case FOR_RENT:
          return { activeCategory: "forRent" };
      case FOR_SALE:
            return { activeCategory: "forSale" };
      case LATEST:
              return { activeCategory: "latest" };
      default:
        return state;
    }
  };
  