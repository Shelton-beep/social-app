import "./TopBar.css";
import { Chat, Person, Search, Notifications } from "@mui/icons-material";

export const TopBar = () => {
  return (
    <>
      <div className="topBarContainer">
        <div className="topBarLeft">
          <span className="logo">ShuttoSocial</span>
        </div>
        <div className="topBarCenter">
          <div className="searchBar">
            <Search className="searchIcon" />
            <input
              placeholder="Search for friends, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">HomaPage</span>
            <span className="topBarLink">TimeLine</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <Person />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <Chat />
              <span className="topBarIconBadge">5</span>
            </div>
            <div className="topBarIconItem">
              <Notifications />
              <span className="topBarIconBadge">6</span>
            </div>
          </div>
          <img src="./" alt="Profile Image" className="topBarImage" />
        </div>
      </div>
    </>
  );
};
