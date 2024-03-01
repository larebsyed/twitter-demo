import { useCallback, useState, useEffect } from "react";
import { usePouch, useAllDocs } from "use-pouchdb";
import { useUserContext } from "../contexts/UserContext";

interface Tweet {
  name?: string;
  date?: string;
  username?: string;
  tweet: string;
  image?: string;
}

export const useTweet = () => {
  const user = useUserContext();
  const db = usePouch();
  const { rows, loading, state, error } = useAllDocs<Tweet>({
    include_docs: true,
  });
  const create = useCallback(
    async (tweet: Tweet) => {
      db.put({
        _id: `tweets_${user.username}_${Date.now()}`,
        type: "tweet",
        ...tweet,
        username: user.username,
        date: "Today",
        name: user.name,
      });
    },
    [db, user]
  );
  console.log();
  return {
    create,
    tweets: rows ? rows.map((r) => r.doc) : [],
  };
};
