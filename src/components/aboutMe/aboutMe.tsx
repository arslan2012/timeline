import * as React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default class AboutMe extends React.Component {
  componentDidMount() {
    document.title = "About me";
  }
  render() {
    return (
      <div>
        <p>阿尔斯兰&middot;阿布力克木</p>
        <p>Arslan Ablikim</p>
        <p>
          <a href="mailto:arslan.ablikim0@gmail.com ">email</a>
          <a href="https://www.linkedin.com/in/arslan-ablikim/?locale=zh_cn">
            LinkedIn
          </a>
          <a href="https://github.com/arslan2012">Github</a>
        </p>
        <Tabs id="mainTab">
          <Tab eventKey="about" title="about me">
            <p>Education</p>
            <p>Beijing University of Posts and Telecommunications</p>
            <p>Computer Science bachelor&rsquo;s degree</p>
            <p>skills list</p>
            <p>
              html、js (including es6,ts )、dom、ajax(including fetch, xhr)；
              familiar with react, experienced with angular；
            </p>
            <p>
              familiar with node.js full-stack，worked with node / nest/
              express； microservices development;
            </p>
            <p>webpack, parcel, linux, docker, bash;</p>
          </Tab>
          <Tab eventKey="pro" title="Professional Experience">
            <p>Sep 2013 - Jul 2017</p>
            <p>Bisaibang. LLC</p>
            <p>Aug 2016 present</p>
            <p>website development manager</p>
            <p>
              bisaibang is a company that focuses on online esports event
              organizing
            </p>
            <p>
              develop, maintain, and support application programs for the
              company's website, using angular and angular.js for web,
              react-native for mobile; automate deployment with GitLab-ci and
              k8s; and manage a team of three programmers.
            </p>
            <p>projects:</p>
            <p>bisaibang website (js, ts)</p>
            <p>
              using MVVM design pattern, coded new solutions that displays
              tournament result more user-friendly.
            </p>
            <p>
              re-engineered front-end systems to move from angular.js to angular
              + nx.
            </p>
            <p>
              found issues and made pull-requests in angular and jhipster
              projects.
            </p>
            <p>
              trained and mentored junior programmers in programming
              methodologies and best practices.
            </p>
            <p>tigerpartners website (ts)</p>
            <p>
              designed a typescript full-stack application using
              angular9,nestjs,express,mongoose and mongodb
            </p>
            <p>bisai league app (tsx)</p>
            <p>
              using typescript and react-native, ported the websites function
              into ios /android app
            </p>
            <p>streaming widgets (ts)</p>
            <p>using electron, designed an app that helps streaming games</p>
            <p>
              app has two windows, control window controls widget window by
              sending the changes through IPC .
            </p>
          </Tab>
          <Tab eventKey="open" title="Opensource Experience">
            <p>lazy Hackintosh image generator</p>
            <p>Feb 2016 - present</p>
            <p>
              <a href="https://github.com/arslan2012/lazy-hackintosh-image-generator">
                https://github.com/arslan2012/lazy-hackintosh-image-generator
              </a>
            </p>
            <p>more than a million downloads, 177 stars, 41 fork</p>
            <p>volunteer experience</p>
            <p>forum moderator</p>
            <p>Aug 2015 - Jun 2018</p>
            <p>pcbeta.com mac subform</p>
            <p>help users on their system and scripting related problems.</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
