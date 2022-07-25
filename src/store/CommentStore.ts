import { Store } from "pullstate";

const CommentStore = new Store({
  comment: [
    {
      id: 12,
      username: "andrew123",
      name: "Andrew Bennet",
      image: "/avatars/Avatar-1.png",
      bio: "I am a human on planet earth",
      followers: [{ username: "andrew123" }, { username: "cutiepi" }],
      following: [{ username: "katie" }, { username: "lottie" }],
      subscribers: [{ username: "katie" }, { username: "lottie" }],
      subscribed: [{ username: "daniellla" }, { username: "michaeel" }],
    },
    {
      id: 14,
      name: "Elizabeth Moore",
      image: "/avatars/Avatar-2.png",
      username: "lizzyghi",
      bio: "I am a human on planet earth",
    },
    {
      id: 14,
      name: "Oscar Clarke",
      image: "/avatars/Avatar-3.png",
      username: "darkstalker",
      bio: "I am a human on planet earth",
    },
    {
      name: "Sandra Simpson",
      image: "/avatars/Avatar-4.png",
      username: "homersimpson",
      bio: "I am a human on planet earth",
    },
    {
      name: "Sophia Price",
      image: "/avatars/Avatar-5.png",
      username: "sophia.price",
      bio: "I am a human on planet earth",
    },
    {
      name: "Jasmine Ruiz",
      image: "/avatars/Avatar-6.png",
      username: "jasmine.122",
      bio: "I am a human on planet earth",
    },
    {
      name: "Adriana Bonny",
      image: "/avatars/Avatar-7.png",
      username: "adrianna",
      bio: "I am a human on planet earth",
    },
    {
      name: "Maya Watson",
      image: "/avatars/Avatar-8.png",
      username: "maya",
      bio: "I am a human on planet earth",
    },
    {
      name: "Tatum Porter",
      image: "/avatars/Avatar-9.png",
      username: "opotoas",
      bio: "I am a human on planet earth",
    },
    {
      name: "Jackson Watts",
      image: "/avatars/Avatar-10.png",
      username: "adrianna",
      bio: "I am a human on planet earth",
    },
    {
      name: "Lana Cooper",
      image: "/avatars/Avatar-11.png",
      username: "lanas",
      bio: "I am a human on planet earth",
    },
    {
      name: "Mateo Hoffman",
      image: "/avatars/Avatar-12.png",
      username: "mateo",
      bio: "I am a human on planet earth",
    },
    {
      name: "Harper James",
      image: "/avatars/Avatar-13.png",
      username: "harperjames",
      bio: "I am a human on planet earth",
    },
    {
      name: "Edgar Douglas",
      image: "/avatars/Avatar-14.png",
      username: "edgar",
      bio: "I am a human on planet earth",
    },
    {
      name: "Lilly Hale",
      image: "/avatars/Avatar-15.png",
      username: "lilly.h",
      bio: "I am a human on planet earth",
    },
  ],
});

export default CommentStore;

export const getComment = (amount: number | undefined) => {
  let tempPeople = [...CommentStore.getRawState().comment];
  return tempPeople.sort(() => Math.random() - Math.random()).slice(0, amount);
};
