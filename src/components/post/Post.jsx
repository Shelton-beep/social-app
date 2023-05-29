import "./Post.css";
import Image2 from "../../assets/images/image2.jpg";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";

export const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Image2}
              alt="postProfileImage"
              className="postProfileImage"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={Image2} alt="postImage" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={Like} alt="like" />
            <img className="likeIcon" src={Heart} alt="heart" />
            <span className="postLikeCounter">
              {post.like} people like this
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
