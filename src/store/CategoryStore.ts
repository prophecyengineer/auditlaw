import { Store } from "pullstate";

const CategoryStore = new Store({
  categories: [
    {
      id: 1,
      name: "like",
    },
    {
      id: 2,
      name: "comment",
    },
    {
      id: 3,
      name: "subscription",
    },
    {
      id: 4,
      name: "follow",
    },
  ],
});

export default CategoryStore;
