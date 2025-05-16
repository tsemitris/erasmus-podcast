import "./_footer.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-upper-container">
            <p className="footer-context">
              This podcast was produced with the support of the European Union
              and in collaboration with partner organizations. We gratefully
              acknowledge their contribution in making this project possible.
            </p>

            <div className="partner-wrapper">
              <div className="partner-contact-info">
                <a
                  href="https://www.verein-interaktion.org/"
                  target="_blank"
                  className="partner-logotype"
                >
                  <img
                    className="partner-logotype"
                    src="./home/icons/organisations/inter-aktion.webp"
                    alt="Inter aktion logotype"
                    height={50}
                    width={50}
                  />
                  InterAktion
                </a>
              </div>
              <div className="partner-contact-info">
                <a
                  href="https://www.facebook.com/profile.php?id=61559453045262"
                  target="_blank"
                  className="partner-logotype"
                >
                  <img
                    className="partner-logotype"
                    src="./home/icons/organisations/working-on-it.webp"
                    alt="Working on it logotype"
                    height={50}
                    width={50}
                  />
                  Working on it
                </a>
              </div>
              <div className="partner-contact-info">
                <a
                  href="https://associazionejoint.org/"
                  target="_blank"
                  className="partner-logotype"
                >
                  <img
                    className="partner-logotype"
                    src="./home/icons/organisations/joint.webp"
                    alt="Joint logotype"
                    height={50}
                    width={50}
                  />
                  Joint
                </a>
              </div>
            </div>
          </div>

          <div className="footer-lower-container">
            <p>&copy; {currentYear} All rights reserved</p>

            <a href="#/about">About youth exchange</a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-org-container">
          <img
            src="./home/icons/european-union/EN_Co-fundedbytheEU_RGB_Monochrome.webp"
            alt="European Union logotype"
            height={65}
            width={294}
          />
        </div>
      </footer>
    </>
  );
};
