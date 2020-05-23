import { createSelector } from "reselect";

const Collection_Id_Map = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collectionItems) =>
    collectionItems.find(
      (collectionItem) =>
        collectionItem.id === Collection_Id_Map[collectionUrlParam]
    )
  );
