import { Store } from "pullstate";

const CategoryStore = new Store({
  categories: [
    {
      id: 1,
      name: "@alex",
    },
    {
      id: 2,
      name: "@lottie",
    },
    {
      id: 3,
      name: "@tetris",
    },
    {
      id: 4,
      name: "@moshimoo8899",
    },
  ],
});

export default CategoryStore;
