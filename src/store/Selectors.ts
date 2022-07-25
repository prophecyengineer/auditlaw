import { createSelector } from "reselect";

const getState = (state: any) => state;

//  General getters
export const getAllPeople = createSelector(
  getState,
  (state: { people: any }) => state.people
);
export const getCategories = createSelector(
  getState,
  (state: { categories: any }) => state.categories
);
export const getTalks = createSelector(
  getState,
  (state: { talks: any }) => state.talks
);

//	Specific getters
export const getCategoryTalks = (categoryId: string) =>
  createSelector(
    getState,
    (state: { talks: any[] }) =>
      state.talks.filter(
        (talk: { category_id: string }) =>
          parseInt(talk.category_id) === parseInt(categoryId)
      )[0]
  );
export const getTalk = (id: string) =>
  createSelector(
    getState,
    (state: { talks: any[] }) =>
      state.talks.filter(
        (talk: { id: string }) => parseInt(talk.id) === parseInt(id)
      )[0]
  );
export const getCategory = (id: string) =>
  createSelector(
    getState,
    (state: { categories: any[] }) =>
      state.categories.filter(
        (category: { id: string }) => parseInt(category.id) === parseInt(id)
      )[0]
  );
