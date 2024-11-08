import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Aim",
    url: "http://localhost:3000/#features",
  },
  {
    id: "1",
    title: "Services",
    url: "http://localhost:3000/#how-to-use",
  },
  {
    id: "2",
    title: "pricing",
    url: "http://localhost:3000/#pricing",
  },
  {
    id: "3",
    title: "About Us",
    url: "http://localhost:3000/#how-to-use",
  },
  {
    id: "4",
    title: "Get started",
    url: "http://localhost:3000/services",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Premium",
    url: "http://localhost:3000/#pricing",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

// export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Fill the from",
  "Enter your boarding pass details(If you have)",
  "Get your preferable flighs",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "";

export const collabContent = [
  {
    id: "0",
    title: "Python Development",
    text: collabText,
  },
  {
    id: "1",
    title: "React JS Development",
  },
  {
    id: "2",
    title: "AWS Deployment",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 40,
    height: 40,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 40,
    height: 40,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 40,
    height: 40,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 40,
    height: 40,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 40,
    height: 40,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 40,
    height: 40,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 40,
    height: 40,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 40,
    height: 40,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Personalized recommendations , once a monthly",
    price: "0/-",
    features: [
      "Flight search is limited to 4 par month",
      "chatbot interaction is limited to 20 queries par month",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced ML Features, priority support, one year experience",
    price: "500/-",
    features: [
      "Unlimited Flight search",
      "Unlimited chatbot interaction ",
      "Priority support to solve issues quickly and easily applicable for users",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom ML Features, advanced analytics, dedicated account",
    price: null,
    features: [
      "An ML Model that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app ",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask about flights",
    text: "Lets users quickly find answers to their required information about flights without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: " Personalized Travel Experience",
    text: "Real-time itinerary adjustments based on flight changes and personal preferences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "NaviFly connect with traveler from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
