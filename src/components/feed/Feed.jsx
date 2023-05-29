import { Post } from "../post/Post";
import { Share } from "../share/Share";
import "./Feed.css";

export const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
