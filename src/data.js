import consoleBlog from "./images/consoleBlog.png";
import regex from "./images/regex.png";
import startScreen from "./images/startScreen.png";
import travelMoney from "./images/travelMoney.png";
import dayPlanner from "./images/dayPlanner.png";
import jate from "./images/jate.png";
import cssLogo from "./images/cssLogo.svg";
import jsLogo from "./images/jsLogo.svg";
import htmlLogo from "./images/htmlLogo.svg";
import hbLogo from "./images/hbLogo.svg";
import mongoLogo from "./images/mongoLogo.svg";
import expressLogo from "./images/expressLogo.svg";
import ReactLogo from "./images/ReactLogo.svg";
import nodeLogo from "./images/nodeLogo.svg";

// Stored data for the projects section
export const projects = [
  {
    title: "Console Blog",
    subtitle:
      "Javascript, Handlebars, Express, MySQL, Sequelize, and Tailwinds CSS",
    description:
      "An online blog site for devs to learn from their peers and share their knowledge of the industry.",
    image: consoleBlog,
    link: "https://crimson-badger.herokuapp.com/",
  },
  {
    title: "Code Quiz",
    subtitle: "Javascript, HTML, and CSS",
    description:
      "An in-browser quiz game with multiple choice questions and a scoreboard.",
    image: startScreen,
    link: "https://karlol82.github.io/code_quiz/index.html",
  },
  {
    title: "@$trolabe",
    subtitle: "Javascript, HTML, Bulma CSS, and 3rd Party APIs",
    description:
      "An online travel tool that helps users find attractions at their chosen destination and also determine exchange rates.",
    image: travelMoney,
    link: "https://karlol82.github.io/travel_money/index.html",
  },
  {
    title: "Gist: Regex Tutorial",
    subtitle: "Regex and Markdown",
    description:
      "A Markdown tutorial on the construction of a Regular Expression or Regex.",
    image: regex,
    link: "https://gist.github.com/KarlOL82",
  },
  {
    title: "Day Planner",
    subtitle: "Javascript HTML and CSS",
    description:
      "An interactive day scheduler that allows the user to schedule events during each 1 hour block of the workday.",
    image: dayPlanner,
    link: "https://karlol82.github.io/day_planner/",
  },
  {
    title: "Just Another Text Editor",
    subtitle: "Javascript, PWA, Webpack, HTML and CSS",
    description:
      "An online text editor that can be used to record notes and code snippets in the browser or installed for offline use.",
    image: jate,
    link: "https://frozen-hamlet-33467.herokuapp.com/",
  },
];

// Stored data for the skills section
export const skills = [
  {
    title: "Mongo DB Logo",
    description: "Mongo DB",
    image: mongoLogo,
    link: "https://www.mongodb.com/",
  },
  {
    title: "Express Logo",
    description: "Express",
    image: expressLogo,
    link: "https://www.npmjs.com/package/express",
  },
  {
    title: "React Logo",
    description: "React",
    image: ReactLogo,
    link: "https://reactjs.org/",
  },
  {
    title: "Node Logo",
    description: "Node JS",
    image: nodeLogo,
    link: "https://nodejs.org/en/about/",
  },
  {
    title: "JS Logo",
    description: "Javascript",
    image: jsLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "HTML Logo",
    description: "HTML",
    image: htmlLogo,
    link: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    title: "CSS Logo",
    description: "CSS",
    image: cssLogo,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "Handlebars Logo",
    description: "Handlebars",
    image: hbLogo,
    link: "https://www.npmjs.com/package/handlebars",
  },
];

// Stored data for the resume section
export const resume = [
  {
    company: "Asentria Corporation",
    dates: "October 2021 - Present",
    position: "Supply Chain Specialist",
    description: [
      "•	Tracks inbound products via ocean containers, air freight, and various parcel services",
      <br />,
      "•	Oversees Inventory Operations including tracking, controls, requisitions, and variance resolution.",
      <br />,
      "•	Assigns and monitors tasks of the Inventory Clerk.",
      <br />,
      "•	Handles Procurement of third-party and domestic parts and equipment including ordering and purchasing, acquiring quotes from vendors for pricing and lead times, and keeping Outbound and Engineering departments informed as to delays or shortages.",
      <br />,
      "•	Oversees warehousing of all products stored on site as well as two external storage facilities.",
      <br />,
      "•	Member of the Safety Committee.",
      <br />,
      "•	Reports directly to Director of Procurement.",
    ],
    contact: "Josh Yu (206) 344-8800",
  },
  {
    company: "Amazon Fulfillment BFI4",
    dates: "August 2017- June 2020",
    position: "Inbound Dock Clerk (Supervisor)",
    description: [
      "•	Daily staffing to meet business needs.",
      <br />,
      "•	Analyzing data and performance metrics to make staffing and leadership decisions.",
      <br />,
      "•	Supervising offloading of trailers, both palletized and floor loaded. As well as forklift and freight elevator operators.",
      <br />,
      "•	Being proficient in PIT equipment including standup forklifts, lift trucks, clamp trucks, electric pallet jack, freight elevators, and Automated Guided Vehicles (AGV)",
      <br />,
      "•	Making daily, hourly,  and weekly reports and sending to management and site Operations. Tracking key data to analyze site productivity and anticipating upcoming business needs.",
      <br />,
    ],
    contact: "Aaron Floyd (253) 432-9330",
  },
  {
    company: "The Rock Wood Fired Kitchen & Bar",
    dates: "March 2017- July 2017",
    position: "Bartender & Supervisor",
    contact: "Paul Musial 206-254-4900",
  },
  {
    company: "Fishing Company of Alaska",
    dates: "May 2016- October 2016",
    position: "On- Board Processor",
    contact: "Renton Office 425-738-5200",
  },
  {
    company: "Belltown Pizza",
    dates: "May 2014-April 2016",
    position: "Bar Manager",
    contact: "Jimmy Doran 206-790-5711",
  },
  {
    company: "Parlor Live Seattle",
    dates: "October 2014- May 2015",
    position: "Bartender",
    contact: "Steve Oberhofer 206-818-1550",
  },
  {
    company: "The Sexton",
    dates: "October 2012- May 2014",
    position: "Bartender",
    contact: "Kate Futhey 206-708-4733",
  },
  {
    company: "Ballard Annex Oyster House",
    dates: "August 2013- April 2014",
    position: "Bartender",
    contact: "Chris Cheesman 360-961-2049",
  },
  {
    company: "Urban Family Public House",
    dates: "April 2012- August 2013",
    position: "Bar Manager",
    contact: "Tim Czarnetski 202-280-3154",
  },
  {
    company: "Anthony’s Pier 66 & The Bell Street Diner",
    dates: "April 2008 to May 2012",
    position: "Senior Dining Room Manager",
    description: [
      "•	Responsible for scheduling service staff of up to 45 servers and bartenders during peak season.",
      <br />,
      "•	Responsible for all ordering and inventory of wine and liquor departments as well as overseeing beer department.",
      <br />,
      "•	Also responsible for labor controls, shift planning, and running the floor during hours of operation.",
      <br />,
      "•	•	Directly oversees two assistant managers and one supervisor including development, training, and performance evaluations.",
      <br />,
    ],
    contact: "Michele Beito  Michele.beito@anthonys.com",
  },
  {
    company: "McCormick and Schmick’s Seafood Restaurants",
    dates: "October 2005 to April 2008",
    position: "Restaurant Manager",
    description: [
      "•	FOH Manager including Dining room, Wine, and Bar departments. Bellevue & 4th Ave Seattle locations.",
      <br />,
    ],
    contact: "Corporate Office 713-850-1010",
  },
];
