import { useNavigate } from "react-router-dom";
import "./_header.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="home-header">
        <div className="header-inner-container max-width">
          <div className="header-logotype" onClick={() => navigate("/")}>
            <img
              className="website-logotype"
              src="./logo/light/erasmus-podcast.png"
              alt=""
            />
            <p>Erasmus Podcast</p>
          </div>
        </div>
      </header>
    </>
  );
};
