import { Store } from "pullstate";

const CategoryStore = new Store({
  categories: [
    {
      id: 1,
      name: "liked your story",
    },
    {
      id: 2,
      name: "commented on your post",
    },
    {
      id: 3,
      name: "subscribed to you",
    },
    {
      id: 4,
      name: "started following you",
    },
  ],
});

export default CategoryStore;
