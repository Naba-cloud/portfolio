import aboutpic from "./components/Access/Naba.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Naba-cloud',
  title: 'JS.',
}

const about = {
  photo: aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Naba Zehra',
  role: 'Software Engineer',
  description:
    'A passionate software engineer, who loves digginig into problems living in karachi Pakistan highly interested in cutting edge technology and problem solving.',
  resume: 'https://drive.google.com/file/d/1SePzhPrIM9XjsbladDox62f-3QJEipp3/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/naba-zehra-dev/',
    github: 'https://github.com/Naba-cloud',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
 
  {
    name: 'The Loanedge',
    description:'A secure web application for managing loan processes, providing dashboards, tracking, and approvals. The frontend is built with React.js, while the backend handles API integrations and business logic. Access requires credentials',
    stack: ['React', 'Antd', 'Axios'],
    livePreview: 'https://www.theloanedge.com/',
    role:"Frontend Engineer",
    professional:'Yes',
    type:'Professional',
  },
  {
    name: 'Wander AI',
    description:'WanderAI is a React Native mobile app that acts as an AI-powered travel assistant, helping users plan trips, explore destinations, and get personalized recommendations on the go. The app provides a smooth and responsive mobile experience, allowing users to search locations, view suggested itineraries, and interact with AI-generated content seamlessly.',
    stack: ['React Native', 'AI-powered travel suggestions','React-native-paper'],
    sourceCode: 'https://github.com/code-with-sahbaan/WanderAI',
     type:'Personal',
    
  },
   {
    name: 'Project Setup CLI',
    description:'This CLI tool helps developers quickly scaffold JavaScript projects (React, Vue, Node.js) with optional UI libraries, routing, and linting/formatting configurations. It provides an easy and consistent way to create project structures, saving setup time and ensuring best practices from the start.',
    stack: ['Node.js CLI','Node.js','project scaffolding'],
    sourceCode: 'https://github.com/Naba-cloud/project-cli',
    livePreview: 'https://www.npmjs.com/package/setup-project-js',
     type:'Personal',
  },
  {
    name: 'ERM Assess',
    description:'ERM Audit is a web application designed for managing audits efficiently. Users can create audit observations, upload photos and documents, and generate comprehensive audit reports. The app streamlines the auditing workflow, ensuring accurate record-keeping and easy report generation.',
    stack: ['Reactjs', 'Bootstrap','Nextjs','Axios'],
    type:'Professional',
   
    
  },
   {
    name: 'ERM Assess Mobile App',
    description:'ERM Audit is a mobile application designed for managing audits and action items in online and offline modes.',
    stack: ['ReactNative', 'React-native-paper','Redux Toolkit'],
    type:'Professional',
   
    
  },
  {
    name:'Resume Analyzer',
    description:'A web application that uses Gemini API and Vercel serverless functions to analyze resumes, providing insights on skills, experience, and relevance for job positions. Designed for a client, the app automates resume review and helps recruiters quickly evaluate candidates.',
    stack:['React.js','Vercel serverless functions','Gemini API'],
    type:'Professional'
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Typescript',
  'Nextjs',
  'React',
  'React Native',
  'Nodejs',
  'Git',
  'Problem Solving'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nabazehra45@gmail.com',
}

export { header, about, projects, skills, contact }
