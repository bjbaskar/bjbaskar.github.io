export const UIdata = [
  { key: "ReactJS", value: 80 },
  { key: "Redux", value: 80 },
  { key: "TypeScript", value: 80 },
  { key: "NextJS", value: 60 },

  { key: "ReactNative", value: 70 },
  { key: "Mobile Apps - Android/iOS", value: 70 },

  { key: "Python FastAPI", value: 75 },

  { key: "NodeJS", value: 80 },
  { key: "ExpressJS", value: 80 },

  { key: "AngularJS 1.5", value: 70 },

  { key: "GoogleCharts", value: 65 },
  { key: "HighCharts", value: 75 },
  { key: "D3JS", value: 75 },

  { key: "CSS", value: 99 },
  { key: "Material UI", value: 80 },
  { key: "StyledComponents", value: 75 },
  { key: "Tailwind", value: 70 },
  { key: "Bootstrap", value: 70 },
  { key: "Docker, CI/CD Jenkins", value: 60 },
  { key: "AWS-EC2,S3", value: 65 },

  { key: "MySQL", value: 95 },
  { key: "SQL Server", value: 75 },
  { key: "Oracle", value: 65 },
  { key: "MongoDB", value: 40 },
  { key: "SQL Query", value: 100 },
];

export const ChipsData = [
  "ReactJS",
  "Redux",
  "ReactNative",
  "Typescript",
  "NextJS",
  "NodeJS",
  "GraphQL",
  "Python FastAPI",
  "MUI / TailwindCSS",
  "AWS-EC2/S3",
  "Git, Jira",
];

export const carouselData = [
  {
    images: "/sg_contact.jpg",
    title: "SG Skypark MBS",
    subtitle: "SG Skypark MBS",
  },
  {
    images: "/Gardensbythebay.jpg",
    title: "Gardens by the bay",
    subtitle: "Gardens by the bay",
  },
  {
    images: "/MerlionPark.jpeg",
    title: "Merlion",
    subtitle: "Merlion",
  },
  {
    images: "/CBD_Building.jpg",
    title: "CBD",
    subtitle: "CBD Building",
  },
];

export const DBdata = [
  { key: "MySQL", value: 95 },
  { key: "SQL Server", value: 75 },
  { key: "Oracle", value: 65 },
  { key: "MongoDB", value: 40 },
  { key: "SQL Query", value: 100 },
];

export const MSdata = [
  { key: "C#", value: 75 },
  { key: ".Net Core", value: 100 },
  { key: "MVC", value: 70 },
  { key: "LINQ", value: 75 },
  { key: "Entity Framework", value: 75 },
  { key: "Excel VSTO", value: 50 },
  { key: "Winforms, WPF", value: 80 },
  { key: "Azure Cloud", value: 70 },
  { key: "Elastic Search.Net", value: 60 },
  { key: "GraphQL.Net", value: 65 },
];

export const IDEdata = {
  labels: ["Visual Studio Code", "MySQL WorkBench", "Figma"],
  data: [70, 82, 70],
};

export interface ITimelineData {
  id: string;
  title: string;
  company: string;
  location: string;
  technology: string;
  domain: string;
  year: string;
}

export const TimelineData: Array<ITimelineData> = [
  {
    id: "2022",
    title: "Technical Architect | Full Stack Developer",
    company: "Biggby Coffee (EC Group International)",
    location: "SINGAPORE",
    technology:
      "ReactJs Redux Next NodeJs Typescript GraphQL, Python Django FastAPI - MySql",
    domain: "Web/Mobile apps",
    year: "2022 - 2024",
  },
  {
    id: "2020",
    title: "Senior Full Stack Developer",
    company: "Remote (NY projects)",
    location: "India",
    technology:
      "ReactJS/ReactNative Redux Python-FastAPI, SQLAlchemy, GraphQL, MySql",
    domain: "Web/Mobile Applications",
    year: "2020 - 2022",
  },
  {
    id: "2019",
    title: "Senior Full Stack Developer",
    company: "Singapore - BOFA, Saltmine",
    location: "Singapore",
    technology:
      "ReactJs Redux NodeJs ElasticSearch D3js Charts MongoDB SqlServer OAuth2 OIDC",
    domain: "Web Applications",
    year: "2018 - 2020",
  },
  {
    id: "2018",
    title: "Senior Consultant",
    company: "JLL, Singapore",
    location: "Singapore",
    technology:
      "AngularJs ReactJs Redux C#.Net Core Web API NodeJS ExpressJs Elastic-Search SQLServer MongoDB",
    domain: "Property Management Consultant",
    year: "2015 - 2018",
  },
  {
    id: "2011",
    title: "Software Engineer",
    company: "SCB, Singapore",
    location: "Singapore",
    technology: "C# WPF WinForms Prism Composite-UI Oracle AngularJS",
    domain: "Investment BANKING - Global Market Risk",
    year: "2009 - 2015",
  },
  {
    id: "2010",
    title: "Technical Lead",
    company: "First American Corporation",
    location: "Bangalore, India",
    technology: "C#.Net WinForms WPF Excel VSTO SqlServer",
    domain: "Mortgage industry",
    year: "2009",
  },
  {
    id: "2008",
    title: "Technical Architect",
    company: "Infosys",
    location: "Bangalore, India",
    technology: ".Net2.0 C#",
    domain: "Product development",
    year: "2008 - 2009",
  },
  {
    id: "2004",
    title: "Technical Lead",
    company: "HCL Technologies (Deutsche Bank)",
    location: "Bangalore, India",
    technology:
      ".Net2.0 C# VB.Net Excel Macro XML XSLT Crystal Reports SqlServer",
    domain: "Investment Banking - Trust & Security Services",
    year: "2003 - 2008",
  },
  {
    id: "2002",
    title: "Software Developer",
    company: "ANZ - IT ",
    location: "Bangalore, India",
    technology: "VB6 ASP Excel Macro XML XSLT SQLServer",
    domain: "Private Banking",
    year: "2002",
  },
  {
    id: "2000",
    title: "Software Engineer",
    company: "Texas Networks",
    location: "Bangalore, India",
    technology: "VB6 ASP XML XSLT SQLServer ...",
    domain: "Inventory, Online portals",
    year: "2000",
  },
];
