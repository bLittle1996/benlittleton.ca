import Experience from "../components/Experience";
import ExperienceCarousel from "../components/Experience/ExperienceCarousel";
import Link from "../components/Link";
import jalupNextImage from "../images/projects/jalup-next.jpg";
import nativsharkImage from "../images/projects/nativshark-landing.jpg";
import tfhImage from "../images/projects/tagsforhope-landing.jpg";
import BenLittletonAppLayout from "../layouts/apps/ben-littleton-app-layout";
import { NextPageComponent } from "../utils/types";

const HomePage: NextPageComponent = () => {
  return (
    <div>
      <article id="about" className="mb-8">
        <h2 className="mb-3 mt-2">About Me</h2>

        <p>
          Hi, I am a Canadian web developer based in Southern Ontario. I have
          been programming and creating things since I was 13 years old.
          Nowadays I strive to create web applications that make a positive
          difference in people{"'"}s lives, no matter how small. I strive to
          learn at least one new thing everyday so that I can be better equipped
          to make that difference. If you want to take a look at what
          technologies and frameworks I am comfortable with, take a look at my{" "}
          <Link href="/#skills">skills</Link>.
        </p>
      </article>

      <article id="projects" className="mb-8">
        <h2 id="projects-title" className="mb-3 mt-2">
          Experience
        </h2>

        <ExperienceCarousel
          scrollToSelector="#projects-title"
          wrapperProps={{
            "aria-describedby": "projects-title",
          }}
        >
          <Experience
            image={nativsharkImage}
            title="NativShark"
            projectLink="https://www.nativshark.com/"
            techUsed={[
              {
                name: "React",
                link: "https://reactjs.org/",
              },
              { name: "Next.js", link: "https://nextjs.org/" },
              {
                name: "styled-components",
                link: "https://styled-components.com/",
              },
            ]}
          >
            <p>
              NativShark is an education platform for learning languages. It
              currently focuses on teaching Japanese. I joined the team right at
              the start of the project and was quickly tasked with building out
              the frontend - which is written using Next.js and React. I worked
              on just about every feature on the site: from the tools used to
              create lessons and content to the student-facing applications that
              consumed that content like the lesson pages, flashcards, and audio
              player.
            </p>
          </Experience>

          <Experience
            image={tfhImage}
            title="TagsForHope"
            projectLink="https://www.tagsforhope.com/"
            techUsed={[
              {
                name: "JavaScript",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              { name: "PHP", link: "https://www.php.net/" },
              { name: "Vue", link: "https://vuejs.org/" },
              { name: "WordPress", link: "https://wordpress.com/" },
              { name: "WooCommerce", link: "https://woocommerce.com/" },
              { name: "Laravel", link: "https://laravel.com/" },
              { name: "SASS", link: "https://sass-lang.com/" },
              { name: "Salesforce", link: "https://www.salesforce.com/ca/" },
            ]}
          >
            <p className="mb-4">
              TagsForHope is a startup based in my hometown, London, that
              specializes in making cute personalized pet products. During my
              time at TagsForHope, I worked with{" "}
              <Link
                href="https://www.linkedin.com/in/josequezada519/"
                target="_blank"
              >
                talented designers
              </Link>{" "}
              to help modernize the website.
            </p>
            <p>
              I created the{" "}
              <Link
                href="https://www.tagsforhope.com/product-designer/tags/"
                target="_blank"
              >
                product designer
              </Link>{" "}
              which provided a more engaging way to customize every product
              offered on TagsForHope. I also worked on several employee facing
              applications to help speed up workflows and even integrated
              Salesforce for the{" "}
              <Link
                href="https://www.tagsforhope.com/partners-program/"
                target="_blank"
              >
                Partners Program
              </Link>
              .
            </p>
          </Experience>

          <Experience
            image={jalupNextImage}
            title="Jalup NEXT"
            projectLink="https://japaneselevelup.com/jalup-next-web-app-shutting-down-service/"
            techUsed={[
              { name: "Laravel", link: "https://laravel.com/" },
              { name: "Vue", link: "https://vuejs.org/" },
              { name: "D3.js", link: "https://d3js.org/" },
              { name: "SASS", link: "https://sass-lang.com/" },
            ]}
          >
            <p className="mb-4">
              Jalup NEXT was a web app designed to teach Japanese from zero in a
              very natural way. I created the schema used by the app{"'"}s
              database and built the RESTful API to talk to that database. I
              coded several quality of life features, such as card searching,
              and designed and built the exploration feature using d3.js,
              Vue.js, and Vuex.
            </p>
            <p>
              Jalup NEXT was very well received by learners, featuring in Tofugu
              {"'"}s 2017 list of the{" "}
              <Link
                href="https://www.tofugu.com/japanese/japanese-learning-resources-awards-2017/"
                target="_blank"
              >
                best new Japanese language learning resources
              </Link>
              . Despite the service eventually shutting down, you can check out{" "}
              <Link href="https://japaneselevelup.com/" target="_blank">
                Japanese Level Up
              </Link>
              .
            </p>
          </Experience>
        </ExperienceCarousel>
      </article>

      <article id="skills" className="mb-8">
        <h2 className="mb-3 mt-2">Skills</h2>

        <p>
          I have experience working with the full web stack. I am proficient
          with the following: HTML5, CSS3, DOM, JavaScript, Vue.js, Vuex, Vue
          Router, jQuery, PHP, Laravel, and SQL databases
        </p>
      </article>

      <article id="contact" className="mb-8">
        <h2 className="mb-3 mt-2">Contact Me</h2>

        <p>
          If you{"'"}d like to reach out to work with me or get to know me
          better, you can contact me through the following resources:
        </p>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <Link href="mailto:b.little1996@gmail.com">
              b.little1996@gmail.com
            </Link>
          </li>
          <li>
            <strong>LinkedIn:</strong>{" "}
            <Link href="https://linkedin.com/in/blittle1996">
              in/blittle1996
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
};

HomePage.getLayout = BenLittletonAppLayout;

export default HomePage;
