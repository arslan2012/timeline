import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import styles from "./aboutMe.module.scss";
import "./abountMe.override.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default class AboutMe extends React.Component {
  componentDidMount() {
    document.title = "About me";
  }
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.bannerDiv}>
          <img className={styles.logo} src={"/img/logo.webp"} alt="" />
          <p>阿尔斯兰&middot;阿布力克木</p>
          <p>Arslan Ablikim</p>
          <p>
            <a
              className={styles.iconWithLink}
              href="mailto:arslan.ablikim0@gmail.com "
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a
              className={styles.iconWithLink}
              href="https://www.linkedin.com/in/arslan-ablikim/?locale=zh_cn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className={styles.iconWithLink}
              href="https://github.com/arslan2012"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
        <Tabs id="mainTab" className="justify-content-center aboutMe_tabNav">
          <Tab eventKey="about" title="About Me" className={styles.tabContent}>
            <div className={styles.aboutMe}>
              <img className={styles.img} src="img/selfie.jpg" alt="" />
              <div
                className={["justify-content-center", styles.text].join(" ")}
              >
                <p>
                  I'm always the one keen to explore new technology, new
                  languages.
                </p>
                <p>
                  I've been using Linux since childhood, Swift since it went
                  open source.
                </p>
                <p>
                  And I've been a key developer, sysAdmin and a leader in
                  bisaibang LLC.
                </p>
                <p>
                  Apart from programming languages, I'm also interested in
                  linguistics, even though duolingo bird might think other wise,
                  I'm really interested in learning new languages.
                </p>
                <p>
                  Also, I like translating as a hobby, and is an active
                  contributor at{" "}
                  <a href="https://lyricstranslate.com/en/translator/arslanablikim54">
                    Lyrics Translate
                  </a>
                </p>
                <br />
                <p>Education</p>
                <p className="mb-0 text-muted">Sep 2013 - Jul 2017</p>
                <p>
                  Beijing University of Posts and Telecommunications
                  <br />
                  Computer Science bachelor&rsquo;s degree
                </p>
              </div>
            </div>
          </Tab>
          <Tab
            eventKey="pro"
            title="Professional Experience"
            className={["m-5", styles.tabContent].join(" ")}
          >
            <h4>Bisaibang. LLC</h4>
            <p className="mb-2 text-muted">Aug 2016 present</p>
            <p className="mb-2 text-muted">
              bisaibang is a company that focuses on online esports event
              organizing
            </p>
            <h5>website development manager</h5>
            <p>
              develop, maintain, and support application programs for the
              company's website, using angular and angular.js for web,
              react-native for mobile; automate deployment with GitLab-ci and
              k8s; and manage a team of three programmers.
            </p>
            <h6>projects:</h6>
            <p className="ml-2">bisaibang website (js, ts)</p>
            <p className="ml-3">
              using MVVM design pattern, coded new solutions that displays
              tournament result more user-friendly.
            </p>
            <p className="ml-3">
              re-engineered front-end systems to move from angular.js to angular
              + nx.
            </p>
            <p className="ml-3">
              trained and mentored junior programmers in programming
              methodologies and best practices.
            </p>
            <p className="ml-2">tigerpartners website (ts)</p>
            <p className="ml-3">
              designed a typescript full-stack application using
              angular9,nestjs,express,mongoose and mongodb
            </p>
            <p className="ml-2">bisai league app (tsx)</p>
            <p className="ml-3">
              using typescript and react-native, ported the websites function
              into ios /android app
            </p>
            <p className="ml-2">streaming widgets (ts)</p>
            <p className="ml-3">
              using electron, designed an app that helps streaming games
            </p>
            <p className="ml-3">
              app has two windows, control window controls widget window by
              sending the changes through IPC .
            </p>
          </Tab>
          <Tab
            eventKey="open"
            title="FOSS Projects"
            className={["m-5", styles.tabContent].join(" ")}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Lazy Hackintosh Image Generator</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Feb 2016 - present
                </Card.Subtitle>
                <Card.Text>
                  more than a million downloads, 177 stars, 41 fork
                </Card.Text>
                <Card.Link href="https://github.com/arslan2012/lazy-hackintosh-image-generator">
                  Github
                </Card.Link>
                <Card.Link href="https://www.insanelymac.com/forum/files/file/567-hackintosh-custom-installer-generator/">
                  InsanelyMac
                </Card.Link>
              </Card.Body>
            </Card>
          </Tab>
          <Tab eventKey="vol" title="Volunteer Experience" className="m-5">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>forum moderator</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Aug 2015 - Jun 2018
                </Card.Subtitle>
                <Card.Text>
                  pcbeta.com mac subform
                  <br />
                  help users on their system and scripting related problems.
                </Card.Text>
                <Card.Link href="https://pcbeta.com/">pcBeta</Card.Link>
              </Card.Body>
            </Card>
            <p></p>
            <p></p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
