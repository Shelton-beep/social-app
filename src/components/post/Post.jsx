import "./Post.css";
import Image1 from "../../assets/images/Image1.jpeg";
import Like from "../../assets/like.png";
import Heart from "../../assets/heart.png";
import { MoreVert } from "@mui/icons-material";

export const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Image1}
              alt="postProfileImage"
              className="postProfileImage"
            />
            <span className="postUserName">Shelton Simbi</span>
            <span className="postDate">5 min ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">MY FISRT POST</span>
          <img src={Image1} alt="postImage" className="postImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={Like} alt="like" />
            <img className="likeIcon" src={Heart} alt="heart" />
            <span className="postLikeCounter">32 people like this</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};
