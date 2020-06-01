import shopActionTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: shopActionTypes.updateCollections,
  payload: collectionsMap,
});
