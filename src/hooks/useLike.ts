import { useUserContext } from "../contexts/UserContext";
import { usePouch, useDoc } from "use-pouchdb";
import { useCallback } from "react";

export const useLike = (tweet_id?: string) => {
  const user = useUserContext();
  const db = usePouch();
  const likeId = `like_${user.name}_${tweet_id}`;
  const { doc } = useDoc(likeId);

  const like = useCallback(async () => {
    console.log("like => ", likeId);
    db.put({
      _id: likeId,
      type: "like",
      tweet_id,
      username: user.username,
    });
  }, [db, user, likeId]);

  const unlike = useCallback(async () => {
    if (doc) {
      db.remove(doc);
    }
  }, [db, user, doc]);
  console.log(" => ", doc);
  return { likeToggle: doc ? like : unlike, isLiked: !!doc, like, unlike };
};
