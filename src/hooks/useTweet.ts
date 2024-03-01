import { useCallback } from "react";
import { usePouch, useAllDocs } from "use-pouchdb";
import { useUserContext } from "../contexts/UserContext";

interface Tweet {
  name?: string;
  date?: string;
  username?: string;
  tweet: string;
  image?: string;
  type?: string;
}

export const useTweet = () => {
  const user = useUserContext();
  const db = usePouch();
  const { rows } = useAllDocs<Tweet>({
    descending: true,
    include_docs: true,
  });
  const create = useCallback(
    async (tweet: Tweet) => {
      db.put({
        _id: `${Date.now()}_tweets_${user.username}`,
        type: "tweet",
        ...tweet,
        username: user.username,
        date: "Today",
        name: user.name,
        profileImg: user.profileImg,
      });
    },
    [db, user]
  );
  return {
    create,
    tweets: rows
      ? rows
          .filter((r) => r.doc?.type === "tweet")
          .map((r) => ({ ...r.doc, id: r.id }))
      : [],
  };
};
