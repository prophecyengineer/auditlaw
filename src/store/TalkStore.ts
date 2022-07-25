import { Store } from "pullstate";

const TalkStore = new Store({
  talks: [
    {
      id: 1,
      title: "The future of design systems",
      date: "29th Oct 2021",
      time: "5:00PM",
      speakers: 1,
      audience: 14,
      category_id: 1,
    },
    {
      id: 2,
      title: "Lets talk about ReactJS",
      date: "13th Nov 2021",
      time: "2:00PM",
      speakers: 1,
      audience: 29,
      category_id: 2,
    },
    {
      id: 3,
      title: "How Ionic can transform mobile development",
      date: "21st Nov 2021",
      time: "7:30PM",
      speakers: 1,
      audience: 31,
      category_id: 3,
    },
    {
      id: 4,
      title: "Using capacitor to access native features",
      date: "25th Nov 2021",
      time: "4:15PM",
      speakers: 1,
      audience: 57,
      category_id: 3,
    },
    {
      id: 5,
      title: "Does SASS give you an advantage?",
      date: "29th Nov 2021",
      time: "6:00PM",
      speakers: 1,
      audience: 97,
      category_id: 1,
    },
    {
      id: 6,
      title: "Building a startup from the ground up",
      date: "1st Dec 2021",
      time: "9:00PM",
      speakers: 1,
      audience: 16,
      category_id: 4,
    },
    {
      id: 7,
      title: "How we went from 9-5 to my own boss",
      date: "12th Dec 2021",
      time: "1:00PM",
      speakers: 1,
      audience: 33,
      category_id: 4,
    },
    {
      id: 8,
      title: "Features of the beast, Angular",
      date: "19th Dec 2021",
      time: "3:30PM",
      speakers: 1,
      audience: 14,
      category_id: 2,
    },
  ],
});

export default TalkStore;

export const addTalk = (details: {
  title: any;
  date: any;
  time: any;
  speakers: any;
  category_id: any;
}) => {
  const newTalk = {
    id: Date.now(),
    title: details.title,
    date: details.date,
    time: details.time,
    speakers: details.speakers,
    audience: Math.random(),
    category_id: details.category_id,
  };

  TalkStore.update((s) => {
    s.talks = [...s.talks, newTalk];
  });
};

// export const addScoreToPlayer = (scoreboardId, playerIndex) => {

// 	PeopleStore.update(state => {

// 		const scoreboardIndex = state.scoreboards.findIndex(scoreboard => scoreboard.id === parseInt(scoreboardId));
// 		state.scoreboards[scoreboardIndex].players[playerIndex].score += 1;

// 		state.scoreboards[scoreboardIndex].players.sort((a, b) => {
// 			if (a.score > b.score) return -1
// 			return a.score < b.score ? 1 : 0
// 		});
// 	});
// }
