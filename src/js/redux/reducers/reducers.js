import { SEARCH } from "../actions/actions";

const initialState = {
  profile: {
    nameTitle: "TU TRAN",
    jobTitle: "Front-end Developer",
    fullName: "Tú Trần",
    dateOfBirth: "08 January 1997",
    job: "Freelancer",
    avatarUrl:
      "https://res.cloudinary.com/doyyjeich/image/upload/v1567763974/onlinePortfolio/profileimg_h6yhbq.jpg",
    email: "tmtwns@gmail.com",
    skype: "tmtwns",
    about: {
      general:
        "An unexpected curve took me to front-end development and fell in love for it instantly and here I am, finding myself in a vast open sea of challenges and opportunities, looking forward to sailing with the right captains and sailors.",
      overview:
        "I am an enegetic and willing to learn person, trying my best to fulfill the role in every teams. Knowing that rainbow is beautiful because they have many colors, so does the team, and it's at its best after a rain."
    }
  },
  expertise: [
    {
      title: "English Proficiency",
      extra: "Being able to collaborate English and work for maximum output."
    },
    {
      title: "Adaptive but Dynamic",
      extra:
        "Love to hear colleagues' and customers' opinions and feedbacks, and enjoy combining with my own in order to find the best solution for problems."
    },
    {
      title: "Programming is a hobby",
      extra:
        "Wrting codes, fix bugs, stressed out, eat, sleep, repeat. Enjoy creating and learning new ways to create components and make them look fancy."
    },
    {
      title: "Responsibility",
      extra: "Never back down from a real challenge."
    }
  ],
  skills: [
    {
      skillTitle: "HTML5",
      skillProgress: "90"
    },
    {
      skillTitle: "CSS",
      skillProgress: "85"
    },
    {
      skillTitle: "Javascript",
      skillProgress: "75"
    },
    {
      skillTitle: "ReactJs",
      skillProgress: "70"
    },
    {
      skillTitle: "NodeJs",
      skillProgress: "60"
    },
    {
      skillTitle: "Photoshop / Illustrator",
      skillProgress: "80"
    }
  ],
  experience: [
    {
      time: "01/2019 - Present",
      project: "Sbuy",
      role: "Fullstack developer",
      extra:
        "Focused on Frontend Designing, Frontend developing using Reactjs. Establish connection to database and maintain functionalities in Nodejs."
    },
    {
      time: "08/2019 - Present",
      project: "Bookread",
      role: "UI/UX and Layout designer - Consultant",
      extra:
        "Consult customers regarding UI/UX and designing layouts for customers to visuallize their products using PSD, HTML5, CSS3."
    },
    {
      time: "09/2019 - Present",
      project: "Shopback",
      role: "Front-end Developer",
      extra:
        "Worked Fulltime as a front-end developer, using Reactjs. Also, I consult customers about front-end technology, UI/UX for their websites."
    }
  ],
  education: [
    {
      time: "2014",
      project: "IELTS Certification",
      role: "Achived 6.0",
      extra:
        "English is one of my main strength and hobbies, I never stopped improving it, knowing the fact that it will be in good use from time to time."
    },
    {
      time: "2015 - 2019",
      project: "University of Technology and Education",
      role: "Major: English Teacher",
      extra:
        "Perfecting public speaking skills, communication skills and organizing classes using English."
    },
    {
      time: "08/2018 - 01/2019",
      project: "Udemy.com / Nordic Coder",
      role: "HTML5 / CSS3 / JS / Bootstrap",
      extra: "Yep, I built websites and took these baby steps."
    },
    {
      time: "05/2019 - 07/2019",
      project: "Nordic Coder",
      role: "Reactjs",
      extra:
        "From basics to advanced including React-Hooks, API Requests, Asynchronous programming, and produced an Ecommerce Reactjs Template."
    },
    {
      time: "07/2019 - 09/2019",
      project: "Nordic Coder",
      role: "Nodejs",
      extra:
        "Learned Basics of Nodejs, establishing databases and being able to write unit testing, server-side rendering and handle front-end requests."
    }
  ]
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
