import { UserCard } from "../components/UserCard";
import { Tweet } from "../components/Tweet";
import { useUserContext } from "../contexts/UserContext";
import { useTweet } from "../hooks/useTweet";

export const Profile = () => {
  const user = useUserContext();
  const { tweets } = useTweet();
  return (
    <>
      <UserCard {...user} />
      {tweets
        .filter((t) => t && t.username === user.username)
        .map((tweet) => (
          <Tweet
            {...tweet}
            image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
        ))}
    </>
  );
};
