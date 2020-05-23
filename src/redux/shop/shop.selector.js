import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItemsForPreview = createSelector(
  [selectShopItems],
  (collectionItems) => Object.values(collectionItems)
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShopItems],
    (collectionItems) => collectionItems[collectionUrlParam]
  );
