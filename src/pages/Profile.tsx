import { UserCard } from "../components/UserCard";
import { Tweet } from "../components/Tweet";
import { useUserContext } from "../contexts/UserContext";
import { useTweet } from "../hooks/useTweet";

export const Profile = () => {
  const user = useUserContext();
  const { tweets } = useTweet();
  console.log(" => tweets", tweets);
  return (
    <>
      <UserCard {...user} />
      {tweets
        .filter((t) => t?.username === user.username)
        .map((tweet) => (
          <Tweet
            name={tweet?.name || user.name}
            date={tweet?.date || "Yesterday"}
            username={tweet?.username || user.username}
            tweet={
              tweet?.tweet ||
              `Day 07 of the challenge
          <hash>#100DaysOfCode</hash> I was wondering
          what I can do with <hash>#tailwindcss</hash>
          , so just started building Twitter UI using Tailwind and so far it
          looks so promising. I will post my code after completion.
          <hash> #WomenWhoCode #CodeNewbie</hash>
            `
            }
            image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
        ))}
    </>
  );
};
