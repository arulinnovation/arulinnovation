import { gridItems, workExperience } from "@/data";
import { BentoGrid, BentoGridItem } from "../BentoGrid";
import { Typewriter } from "react-simple-typewriter";
import styles from "./About.module.css";
import { Button } from "../MovingBorders";

const Grid = () => {
  return (
    // <div className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4">
    <div>

            <h1 className="heading mb-6">
                ISO CERTIFIED AND
                <span className="text-blue-300"> REGISTERED COMPANY</span>
            </h1>

          <Button
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4"
          >

            <section className={styles.container} id="about">
            {/* <h1 className="heading mb-6">
              ISO CERTIFIED AND
              <span className="text-blue-300"> REGISTERED COMPANY</span>
          </h1> */}
          {/* <h2 className={styles.title}>About</h2> */}
          <div className={styles.content}>
          <div className={styles.aboutImageWrapper}>
                <img src="./iso.png" alt="Company ISO Certified" className={styles.aboutImage} />
                <p className={styles.imageCaption}>ISO 9001:2015 Certified Company</p>
            </div>

            <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>
                  <Typewriter
                      words={[
                        "👥:\n" +
                        "100+\n" +
                        "CLIENTS, \n" +
                        "\n" +
                        "🚚:\n" +
                        "95+\n" +
                        "DELIVERIES, \n" +
                        "\n" +
                        "🏆:\n" +
                        "55+\n" +
                        "AWARDS .."


                      ]}
                      loop={true}
                      cursor
                      cursorStyle="."
                      typeSpeed={40}
                      deleteSpeed={20}
                      delaySpeed={2000}
                  />
                </h3>
              </div>
            </li>

              <li className={styles.aboutItem}>
                  <div className={styles.aboutItemText}>
                      <h3>10+ Years of Industrial Experience</h3>
                      <p>
                          Our team is committed to delivering not just machines, but complete automation ecosystems — backed by professional after-sales support, preventive maintenance, and technical service to keep your production seamless.
                      </p>
                  </div>
              </li>

            <li className={styles.aboutItem}>
              <div className={styles.aboutItemText}>
                <h3>What We Do</h3>
                <p>
                    we transform your vision into fully advanced and automated systems. We utilize cutting-edge software and modern engineering practices to ensure high performance and long-term efficiency.
                </p>
              </div>
            </li>
          </ul>
          </div>
        </section>
          </Button>
          </div>
  );
};

export default Grid;
