import "./RightBar.css";
import Gift from "../../assets/gift.jpg";
import Ad from "../../assets/advert2.jpg";
import Image3 from "../../assets/images/image3.jpg";

export const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img src={Gift} alt="birthdayImage" className="birthdayImage" />
          <span className="birthdayText">
            <b>Denise Anesu</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightBarAd" src={Ad} alt="advert" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightBarFriendList">
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img
                className="rightBarProfileImage"
                src={Image3}
                alt="onlineFriend Profile"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Denise Anesu</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img
                className="rightBarProfileImage"
                src={Image3}
                alt="onlineFriend Profile"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Denise Anesu</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img
                className="rightBarProfileImage"
                src={Image3}
                alt="onlineFriend Profile"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Denise Anesu</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img
                className="rightBarProfileImage"
                src={Image3}
                alt="onlineFriend Profile"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Denise Anesu</span>
          </li>
          <li className="rightBarFriend">
            <div className="rightBarProfileImageContainer">
              <img
                className="rightBarProfileImage"
                src={Image3}
                alt="onlineFriend Profile"
              />
              <span className="rightBarOnline"></span>
            </div>
            <span className="rightBarUsername">Denise Anesu</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
