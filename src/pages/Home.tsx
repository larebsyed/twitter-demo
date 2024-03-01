import { TweetBox } from "../components/TweetBox";
import { Tweet } from "../components/Tweet";


export const Home = () => {
  return (
      <>
          <TweetBox />
          <Tweet
              name="LabXChange"
              date="Yesterday"
              username="@labXchange"
              tweet={`Day 07 of the challenge
          <hash>#100DaysOfCode</hash> I was wondering
          what I can do with <hash>#tailwindcss</hash>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion.
          <hash> #WomenWhoCode #CodeNewbie</hash>`}
              image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
          <Tweet
              name="LabXChange"
              date="Yesterday"
              username="@labXchange"
              tweet={`Day 07 of the challenge
          <hash>#100DaysOfCode</hash> I was wondering
          what I can do with <hash>#tailwindcss</hash>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion.
          <hash> #WomenWhoCode #CodeNewbie</hash>`}
              image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
          <Tweet
              name="LabXChange"
              date="Yesterday"
              username="@labXchange"
              tweet={`Day 07 of the challenge
          <hash>#100DaysOfCode</hash> I was wondering
          what I can do with <hash>#tailwindcss</hash>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion.
          <hash> #WomenWhoCode #CodeNewbie</hash>`}
              image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
      </>
  );
};
