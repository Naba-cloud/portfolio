import aboutpic from "./components/Access/Naba.png"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/Naba-cloud',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
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
      'As users, we see a page where you can get the random qoute by just clicking the get qoute button.',
    stack: [ 'Random Qoute API', 'React','Bootstrap'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://2yk8v.csb.app/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  'Bootstrap',
  'Git',
  'Problem Solving'
 
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nabazehra45@gmail.com',
}

export { header, about, projects, skills, contact }
