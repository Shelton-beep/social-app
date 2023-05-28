import "./HomePage.css";
import { SideBar } from "../../components/sideBar/SideBar";
import { TopBar } from "../../components/topBar/TopBar";
import { Feed } from "../../components/feed/Feed";
import { RightBar } from "../../components/rightBar/RightBar";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
