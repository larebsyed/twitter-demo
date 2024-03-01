import { TweetBox } from "../components/TweetBox";
import { Tweet, TweetProps } from "../components/Tweet";
import { useUserContext } from "../contexts/UserContext";
import { useTweet } from "../hooks/useTweet";

export const Home = () => {
  const user = useUserContext();
  const { tweets } = useTweet();
  return (
    <>
      <TweetBox />
      {tweets
        .filter((t: any) => t)
        .map((tweet: any) => (
          <Tweet
            {...tweet}
            image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
          />
        ))}
    </>
  );
};
