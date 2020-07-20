import { SEARCH } from "../actions/actions";

const initialState = {
  profile: {
    nameTitle: "TU TRAN",
    jobTitle: "Front-end Developer",
    fullName: "Tú Trần",
    dateOfBirth: "08 January 1997",
    job: "Freelancer",
    avatarUrl:
      "https://res.cloudinary.com/doyyjeich/image/upload/v1568003654/onlinePortfolio/profile2-cropped_xnqxqk.jpg",
    email: "tmtwns@gmail.com",
    skype: "tmtwns",
    about: {
      general:
        "An unexpected curve took me to front-end development, fell in love for it instantly and here I am, finding myself in a vast open sea of challenges and opportunities, looking forward to sailing with the right captains and sailors.",
      overview:
        "I am an enegetic and willing to learn person, devoting myself for a good and well coordinated team which sensibly earns more value and achieve more success.",
    },
  },
  expertise: [
    {
      title: "Excellent English Proficiency",
      extra:
        "Being able to collaborate and work in English for maximum efficiency.",
    },
    {
      title: "Adaptive but Dynamic",
      extra:
        "Love to hear colleagues' and customers' opinions and feedbacks, and enjoy providing my own in order to find the best solution for problems.",
    },
    {
      title: "Programming is a hobby",
      extra:
        "Wrting codes, fix bugs, stressed out, eat, sleep, repeat. Enjoy creating and learning new ways to create applications and make them look fancy.",
    },
    {
      title: "Responsible and Self-driven",
      extra:
        "Setting myself goals along the way, and taking responsibilities for the work in progress.",
    },
  ],
  skills: [
    {
      skillTitle: "HTML5",
      skillProgress: "95",
    },
    {
      skillTitle: "CSS / SCSS",
      skillProgress: "90",
    },
    {
      skillTitle: "Bootstrap / Material UI",
      skillProgress: "90",
    },
    {
      skillTitle: "Javascript",
      skillProgress: "85",
    },

    {
      skillTitle: "Typescript",
      skillProgress: "60",
    },
    {
      skillTitle: "ReactJs",
      skillProgress: "75",
    },
    {
      skillTitle: "NodeJs",
      skillProgress: "55",
    },
    {
      skillTitle: "Photoshop / Illustrator",
      skillProgress: "80",
    },

    {
      skillTitle: "MySQL",
      skillProgress: "45",
    },
    {
      skillTitle: "MongoDB",
      skillProgress: "55",
    },
  ],
  experience: {
    companies: [
      {
        time: "2018 - 2019",
        project: "Frontend developer",
        role: "Freelancer",
        extra:
          "A out-sourcing company with small teams of devs, which encourages lots of learning from team members and working as a team through which I developed skills that I did not have.",
      },
      {
        time: "2019 - 03/2020",
        project: "Nordic Coder",
        role: "Software Engineer",
        extra:
          "A out-sourcing company with small teams of devs, which encourages lots of learning from team members and working as a team through which I developed skills that I did not have.",
      },
    ],
    projects: [
      {
        time: "07/2018 - 03/2019",
        project: "Bookread",
        role: "UI/UX and Layout designer - Consultant",
        extra:
          "A book reading and social network platform, written in PHP. I consulted customers regarding UI/UX and designing layouts for customers to visuallize their products using PSD, HTML5, CSS3.",
      },
      {
        time: "03/2019 - 06/2019",
        project: "Engage",
        role: "Front-end Developer",
        extra:
          "A human source and project management admin app for a bank, which involves multi-language and role management. I participated as a frontend developer who maintain and develop in Reactjs.",
      },
      {
        time: "05/2019 - 10/2019",
        project: "Sbuy",
        role: "Front-end developer",
        extra:
          "Written in Reactjs, an ecommerce website focus on getting hot deals and vouchers. I participated in frontend development, wireframing components and layout design.",
      },

      {
        time: "10/2019 - 03/2020",
        project: "Nordic Coder Career Portal",
        role: "Front-end developer",
        extra:
          "An internal project that aims to provide job and talent seeking for candidates and companies. I participated in writing Nodejs backend with Nestjs framework and MySQL database, from which I learned Typescript, MySQL and Nestjs. Occasionally, I joined in front-end as well in small features to speed up the progress.",
      },
    ],
  },
  education: [
    {
      time: "2014",
      project: "IELTS Certification",
      role: "Achived 6.0",
      extra:
        "English is one of my main strength and hobbies, I never stopped improving it, knowing the fact that it will be in good use from time to time.",
    },
    {
      time: "2015 - 2019",
      project: "University of Technology and Education",
      role: "Major: English Teacher",
      extra:
        "Perfecting public speaking skills, communication skills and organizing classes using English.",
    },
    {
      time: "02/2018 - 01/2019",
      project: "Udemy.com / Nordic Coder",
      role: "HTML5 / CSS3 / JS / Bootstrap",
      extra: "Yep, I built websites and took these baby steps.",
    },
    {
      time: "02/2019 - 05/2019",
      project: "Nordic Coder",
      role: "Certificate in Reactjs",
      extra:
        "From basics to advanced including React-Hooks, API Requests, Asynchronous programming, and produced an Ecommerce Reactjs Template.",
    },
    {
      time: "07/2019 - 09/2019",
      project: "Nordic Coder",
      role: "Certificate in Nodejs",
      extra:
        "Learned Basics of Nodejs, how to establish MongoDB databases and being able to write unit testing, server-side rendering and handle front-end requests.",
    },
  ],
};

////////////////
////EXPORT//////
////////////////
export default function appState(state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return state;
    default:
      return state;
  }
}
