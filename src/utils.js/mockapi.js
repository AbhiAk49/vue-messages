//changed thumbnails due to being broken
const bob = {
  id: 23,
  firstName: "Bob",
  lastName: "Greatlance",
  thumbnail:
    "https://images.unsplash.com/photo-1537396123722-b93d0acd8848?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=efc6e85c24d3cfdd15cd36cb8a2471ed",
};

const jack = {
  id: 48,
  firstName: "Jack",
  lastName: "Dowager",
  thumbnail:
    "https://images.unsplash.com/photo-1534135954997-e58fbd6dbbfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=02d536c38d9cfeb4f35f17fdfaa36619",
};

const messages = [
  {
    id: 1,
    from: bob,
    message: "Hey bro, how's things?",
    date: "2020-04-07 10:03:23",
  },
  {
    id: 2,
    from: bob,
    message: `I was working in the garden and just thought of you!
Hope you're not too worried about everything thats is going on right now.`,
    date: "2020-04-07 10:03:45",
  },
  {
    id: 3,
    from: jack,
    message: "Heeey! Long time! Thanks for your message, man!",
    date: "2020-04-07 10:06:15",
  },
  {
    id: 4,
    from: jack,
    message: "I am doing quite alright, thanks. How about you?",
    date: "2020-04-07 10:06:24",
  },
  {
    id: 5,
    from: bob,
    message: `Can't complain.
I was watching this movie the other night that really reminded me of our first project working together.
There were these three 17-year-olds who had just heard of Python and decided to build the next great thing in social networking, so they spent about a week pulling off all-nighters and barely got anywhere :))
I think you can imagine what happens next 🙃`,
    date: "2020-04-07 10:07:01",
  },
  {
    id: 6,
    from: jack,
    message:
      "😂😂😂 Did they end up driving to the seaside and sleeping in the sun until they got severe sunburn like we did?",
    date: "2020-04-07 10:08:55",
  },
  {
    id: 7,
    from: bob,
    message: `Something not very far from that!`,
    date: "2020-04-07 10:03:45",
  },
];

export const currentUser = JSON.stringify(bob);
export const conversation = JSON.stringify(messages);

//added info about other
export const otherUser = JSON.stringify(jack);