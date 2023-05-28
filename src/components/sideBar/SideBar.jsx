import "./SideBar.css";
import {
  BookmarksOutlined,
  Event,
  Group,
  Message,
  QuestionMark,
  RssFeed,
  SchoolRounded,
  VideoCameraBackOutlined,
  WorkOutline,
} from "@mui/icons-material";

export const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Message className="sideBarIcon" />
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <VideoCameraBackOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BookmarksOutlined className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <QuestionMark className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <SchoolRounded className="sideBarIcon" />
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
          <li className="sideBarFriend">
            <img
              className="sideBarFriendImage"
              src="../../assets/images/image1.jpeg"
              alt="Friend"
            />
            <span className="sideBarFriendName">Denise Anesu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
