export const productsReducer = (
  state = { products: [], cart: [], details: [] },
  action
) => {
  if (action.type === "Add-Products") {
    return { ...state, products: [...action.data, ...state.products] };
  }
  if (action.type === "Add-Cart") {
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  if (action.type === "Selected-Item") {
    return { ...state, details: [action.data] };
  }
  if (action.type === "Remove-Item") {
    const filteredProducts = state.cart.filter(
      (item) => item.key !== action.data.key
    );
    return { ...state, cart: filteredProducts };
  }
  return state;
};
