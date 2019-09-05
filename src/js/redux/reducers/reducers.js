import { SEARCH } from "../actions/actions";

const initialState = {
  personalInfo: {
    nameTitle: "TU TRAN",
    jobTitle: "Front-end Developer",
    fullName: "Tú Trần",
    dateOfBirth: "08 January 1997",
    job: "Freelancer",
    email: "tmtwns@gmail.com",
    skype: "tmtwns",
    about: {
      general:
        "Credibly embrace visionary internal or organic sources and business benefits. Collaboratively integrate efficient portals rather than customized customer service. Assertively deliver frictionless services via leveraged interfaces. Conveniently evisculate accurate sources and process-centric expertise.",
      overview:
        "Energistically fabricate customized imperatives through cooperative catalysts for change."
    }
  },
  skills: [
    {
      skillTitle: "ReactJs",
      skillProgress: "80"
    },
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
      skillProgress: "60"
    }
  ],
  experience: [
    {
      time: "01/2019 - present",
      project: "Sbuy",
      role: "Fullstack developer",
      extra:
        "Focused on Frontend Designing, Frontend developing using Reactjs. Establish connection to database and maintain functionalities in Nodejs"
    },
    {
      time: "08/2019 - present",
      project: "Bookread",
      role: "UI/UX and Layout designer - Consultant",
      extra:
        "Consult customer regarding UI/UX and designing layouts for customers to visuallize their products using PSD, HTML5, CSS3"
    }
  ],
  appResources: {
    avatarUrl:
      "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
  }
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
