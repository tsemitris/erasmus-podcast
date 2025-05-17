import { HeadlineAside } from "../../components/home/headline/headlineAside";
import { Tabs } from "../../components/home/tabs/tabs";
import "./_home.scss";

export const Home = () => {
  document.title = "Erasmus Podcast";
  const URL = encodeURIComponent(window.location.href);

  return (
    <>
      <img
        className="home-hero"
        src="./home/banners/test.JPG"
        alt="Close-up of a person in a gray sweater writing notes on a sheet of paper with a pen, beside a black microphone on a stand, conveying focus and preparation."
        width={384}
        height={288}
        loading="lazy"
      />

      <div className="home-main-container max-width fade-in-from-bottom">
        <div className="home-main-inner-container">
          <div className="home-title-container">
            <img
              className="podcast-image"
              src="./home/podcast/standing-people.jpg"
              alt="A group of five people stand and sit around a campfire outdoors in a grassy area, with trees in the background and scattered sparks visible in the air."
              width={240}
              height={319}
            />

            <h1 className="podcast-title">
              Gender stigma and social standards
            </h1>
          </div>

          <div className="home-main-section">
            <audio
              controls
              controlsList="nodownload noplaybackrate"
              preload="none"
            >
              <source
                src="./audio/podcast/Ep1/gender-stigma-and-social-standards.wav"
                type="audio/wav"
              />
              Your browser does not support the audio element.
            </audio>
            <Tabs></Tabs>
          </div>
        </div>

        <aside className="podcast-aside">
          <div className="share-buttons-container">
            <a
              className="share-button"
              href={`https://www.facebook.com/sharer/sharer.php?u=${URL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-facebook fa-lg"></i>
            </a>
            <a
              className="share-button"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin fa-lg"></i>
            </a>
          </div>

          <hr />

          <HeadlineAside title="Host" underTitle="Vaia Stolikidou" />
          <HeadlineAside
            title="Guests"
            underTitle={[
              "Felix Denk Romero",
              "Francesca Bartoli",
              "Ippokratis Vilmezis",
              "Sarah Lazzarini",
            ]}
          />
          <HeadlineAside title="Duration" underTitle="27 min" />
          <HeadlineAside title="Released date" underTitle="14/05/2025" />
        </aside>
      </div>
    </>
  );
};
