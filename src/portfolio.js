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
  role: 'Front End developer',
  description:
    'A passionate frontend developer, who loves digginig into problems living in karachi Pakistan highly interested in cutting edge technology and coding.',
  resume: 'https://drive.google.com/file/d/1vZOhqckofc7DRSwoJCIt6wzFZhiRfL_f/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/naba-zehra-291015145',
    github: 'https://github.com/Naba-cloud',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Qoute Generator',
    description:
      'This quote generator app fetches quotes randomly from a quote API and presents them in a visually appealing manner using React.js. The frontend built with React.js will provide a dynamic and responsive user interface for users to browse and discover new quotes.The user experience will be seamless and the app will provide an enjoyable way for users to discover new quotes.',
    stack: ['Random Qoute API', 'React', 'Bootstrap'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://2yk8v.csb.app/',
  },
  {
    name: 'Authentication And Authorization',
    description:
      'This project aims to implement secure user authentication and authorization using Node.js, bcryptjs, and Express.js. Bcryptjs will be used for hashing and salting the user passwords for storage in the database. Express.js will provide the web framework for building the API endpoints, and handle incoming requests for authentication and authorization. The authentication process will include user signup and login functionality, with authorization controlling access to protected resources based on user roles and permissions.',
    stack: ['Javascript', 'npm', 'Nodejs', 'Express','JSONwebtoken','Bcrypt'],
    sourceCode: 'https://github.com/Naba-cloud/node-authentication-and-authorization',
    // livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Player Record',
    description:
      'This CRUD app allows users to add and manage player data, including name and speed in units. The frontend of the app is built with React.js and the backend uses Node.js, Express.js and MongoDB. The app allows users to increment and decrement points, making it suitable for tracking player scores. The user interface is intuitive and easy to use, making it possible for users to add, edit, and manage player data with ease. The data is stored in a MongoDB database and accessed via a set of REST APIs built with Express.js. The app provides a complete solution for tracking player data, from data entry to score updates.',
    stack: ['html-css-javascript', 'React', 'Node','Express','MongoDb'],
    sourceCode: 'https://github.com/Naba-cloud/ui-board',
    
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Chakra-ui',
  'Tailwind',
  'Bootstrap',
  'Git',
  'Problem Solving'


]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nabazehra45@gmail.com',
}

export { header, about, projects, skills, contact }
