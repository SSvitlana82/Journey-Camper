export const selectCampers = (state) => {
  return state.campers.items;
};
export const selectIsLoading = (state) => {
  return state.campers.isLoading;
};
export const selectError = (state) => {
  return state.campers.error;
};
export const selectTotalPages = (state) => {
  return state.campers.totalPages;
};
