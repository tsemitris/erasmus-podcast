import "./_aboutYE.scss";

export const AboutYE = () => {
  document.title = "Erasmus Podcast | About Youth Exchange";

  return (
    <>
      <div className="about-main-container max-width fade-in-from-bottom">
        <div className="about-hero">
          <div className="about-ye-container">
            <h3>About the YE</h3>
            <p>
              From the 6th to the 14th of May 2025, a group of young people from
              across Europe came together in Trofaiach, Austria, to participate
              in a Youth Exchange as part of the Erasmus+ programme.
            </p>
          </div>
        </div>

        <p className="about-center-text">
          The focus of this project was active citizenship and through open
          discussions, shared experiences, and collaborative activities, we
          explored the important topic of gender stigma and social standards.
        </p>

        <div className="feature-card-layout">
          <video
            className="appear-from-left"
            src="./video/group-talking.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
          <p className="appear-from-right">
            During these days, we had the chance to meet people from different
            countries, each bringing unique perspectives and life stories. This
            exchange helped us break down cultural barriers and encouraged us to
            think with a broader, more European mindset.
          </p>
        </div>

        <p className="about-center-text">
          But it wasn’t just about discussion, it was also about connection.
        </p>

        <div className="feature-card-layout">
          <p className="appear-from-left">
            Throughout the week, we formed meaningful friendships, shared
            unforgettable experiences, and worked together to create this
            podcast. It gave us a space to speak openly, challenge stereotypes,
            and explore important topics that shape our lives.
          </p>
          <video
            className="video-filter appear-from-right"
            src="./video/group-people-singing.mp4"
            muted
            autoPlay
            loop
            playsInline
          ></video>
        </div>

        <p className="about-center-text">
          We hope that by listening to our podcast, others will feel inspired to
          take part in Erasmus+ projects themselves. It’s an opportunity to
          grow, connect with people from all over Europe, and make a real impact
          both personally and as an active citizen.
        </p>
      </div>
    </>
  );
};
