import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun, FaRocket, FaLightbulb, FaCode, FaBriefcase, FaNewspaper } from 'react-icons/fa';

// Navbar Component
const Navbar = ({ darkMode, toggleDarkMode }) => (
  <motion.nav 
    className={`${darkMode ? 'bg-gradient-to-r from-purple-900 to-indigo-900' : 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'} p-4 text-white fixed w-full z-50`}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 120 }}
  >
    <ul className="flex justify-center items-center space-x-6">
      <NavItem to="/" icon={<FaRocket />}>Home</NavItem>
      <NavItem to="/education" icon={<FaLightbulb />}>Education</NavItem>
      <NavItem to="/skills" icon={<FaCode />}>Skills</NavItem>
      <NavItem to="/experience" icon={<FaBriefcase />}>Experience</NavItem>
      <NavItem to="/projects" icon={<FaRocket />}>Projects</NavItem>
      <NavItem to="/blog" icon={<FaNewspaper />}>Blog</NavItem>
      <li>
        <motion.button 
          onClick={toggleDarkMode} 
          className="p-2 rounded-full hover:bg-opacity-50 bg-white bg-opacity-20 transition-colors"
          whileHover={{ scale: 1.2, rotate: 180 }}
          whileTap={{ scale: 0.8 }}
        >
          {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-purple-300" />}
        </motion.button>
      </li>
    </ul>
  </motion.nav>
);

const NavItem = ({ to, icon, children }) => (
  <li>
    <Link to={to} className="flex items-center hover:text-yellow-300 transition-colors">
      <motion.span 
        className="mr-2"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.span>
      <motion.span
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </Link>
  </li>
);

// Footer Component
const Footer = ({ darkMode }) => (
  <footer className={`${darkMode ? 'bg-gradient-to-r from-gray-900 to-black' : 'bg-gradient-to-r from-purple-600 to-blue-600'} text-white p-6 text-center w-full`}>
    <div className="flex justify-center space-x-6 mb-4">
      <SocialLink href="https://github.com/nayanpunmiya" icon={<FaGithub size={28} />} color="text-white hover:text-gray-400" />
      <SocialLink href="https://www.linkedin.com/in/nayanpunamiya" icon={<FaLinkedin size={28} />} color="text-white hover:text-blue-400" />
      <SocialLink
        href="https://mail.google.com/mail/?view=cm&fs=1&to=punmiyanayan@gmail.com&su=Portfolio%20Contact"
        icon={<FaEnvelope size={28} />}
        color="text-white hover:text-yellow-300"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
    <motion.p 
      className="text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      &copy; 2024 Nayan Punamiya. All rights reserved.
    </motion.p>
  </footer>
);

const SocialLink = ({ href, icon, color }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ scale: 1.2, rotate: 360 }}
    className={color}
  >
    {icon}
  </motion.a>
);

// Home Component
const Home = ({ darkMode }) => (
  <div className={`min-h-screen pt-16 flex flex-col items-center justify-center ${darkMode ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900' : 'bg-gradient-to-b from-blue-400 via-teal-400 to-green-400'}`}>
    <div className="w-full text-center p-10">
      <motion.h1 
        className={`text-6xl font-bold mb-4 ${darkMode ? 'text-indigo-300' : 'text-white'}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Welcome to Nayan Punamiya's Portfolio
      </motion.h1>
      <motion.p 
        className="text-2xl mb-6 text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Full Stack Web Developer | Machine Learning Enthusiast
      </motion.p>
      <motion.button 
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
        whileTap={{ scale: 0.9 }}
        className={`px-8 py-3 rounded-full transition-colors text-lg font-semibold mb-8 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-700 text-white' : 'bg-white hover:bg-gray-100 text-indigo-600'}`}
      >
        <a href="https://docs.google.com/document/d/1uV_ryzX6iFNzNmzoLJAKX8ryRTguhr2d/edit?usp=drive_link&ouid=104814200948522809032&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </motion.button>
    </div>

    {/* Updated image layout */}
    <div className="flex flex-col md:flex-row justify-center items-center space-x-4">
      <motion.img 
        src="https://raw.githubusercontent.com/nayanpunmiya/nayanpunmiya/refs/heads/main/Make%20your%20README.png" 
        alt="First Image" 
        className="w-full md:w-1/2 h-auto mb-4 md:mb-0" 
        initial={{ x: -100, opacity: 0, rotate: -10 }} 
        animate={{ x: 0, opacity: 1, rotate: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        whileHover={{ scale: 1.1, rotate: -5 }}
      />
      <motion.img 
        src="https://user-images.githubusercontent.com/55389276/140866485-8fb1c876-9a8f-4d6a-98dc-08c4981eaf70.gif" 
        alt="Second Image" 
        className="w-full md:w-1/2 h-auto" 
        initial={{ x: 100, opacity: 0, rotate: 10 }} 
        animate={{ x: 0, opacity: 1, rotate: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }} 
        whileHover={{ scale: 1.1, rotate: 5 }}
      />
    </div>
  </div>
);



// Education Component
const Education = ({ darkMode }) => (
  <div className={`min-h-screen p-10 pt-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-b from-green-400 via-teal-400 to-blue-500'}`}>
    <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-green-300' : 'text-white'}`}>Education</h2>
    <motion.ul className="space-y-4">
      {[
        { title: "B. Tech CSE | SRM Institute of Science and Technology, Chennai", details: "CGPA: 7.66 | 2022-present" },
        { title: "12th (Karnataka State Board) | Christ Junior College, Bengaluru", details: "88%" },
        { title: "10th (ICSE) | The Cathedral High School, Bengaluru", details: "87.4%" }
      ].map((edu, index) => (
        <motion.li 
          key={index}
          className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
        >
          <h3 className="text-2xl font-semibold">{edu.title}</h3>
          <p className="mt-2 text-lg">{edu.details}</p>
        </motion.li>
      ))}
    </motion.ul>
  </div>
);

// Skills Component
const Skills = ({ darkMode }) => {
  const skillCategories = [
    { name: "Programming Languages", skills: ["Python", "Java", "C", "C++", "JavaScript", "HTML", "CSS"] },
    { name: "Big Data Analytics", skills: ["Hadoop", "MongoDB", "Apache Spark"] },
    { name: "Frameworks & Libraries", skills: ["MERN Stack", "Angular"] },
    { name: "Machine Learning", skills: ["NLTK", "Hugging Face Transformers", "TensorFlow"] },
    { name: "Other", skills: ["Git", "GitHub", "Data Structures & Algorithms", "OOP"] },
  ];

  return (
    <div className={`min-h-screen p-10 pt-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-b from-yellow-400 via-orange-400 to-red-500'}`}>
      <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-yellow-300' : 'text-white'}`}>Skills</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{category.name}</h3>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, skillIndex) => (
                <motion.li 
                  key={skillIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: (index * 0.1) + (skillIndex * 0.05) }}
                  whileHover={{ scale: 1.1, color: darkMode ? '#60A5FA' : '#3B82F6' }}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

// Experience Component
const Experience = ({ darkMode }) => (
  <div className={`min-h-screen flex items-center justify-center p-10 pt-20 ${darkMode ? 'bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900' : 'bg-gradient-to-b from-pink-400 via-purple-400 to-indigo-500'}`}>
    <motion.div 
      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-lg max-w-3xl w-full`}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
    >
      <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-pink-300' : 'text-purple-600'}`}>Experience</h2>
      <h3 className="text-3xl font-semibold mb-4">Web Developer Intern</h3>
      <h4 className="text-2xl mb-2">Cognizance IIT Roorkee (RHYNO EV)</h4>
      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-lg`}>June 2024 – August 2024</p>
      <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-lg`}>
        <li>Developed and maintained web applications using React.js and Node.js</li>
        <li>Collaborated with cross-functional teams to design and implement new features</li>
        <li>Optimized website performance and improved user experience</li>
        <li>Participated in code reviews and contributed to best practices</li>
      </ul>
    </motion.div>
  </div>
);

// Projects Component
const Projects = ({ darkMode }) => {
  const projects = [
    { 
      title: "AI Chatbot Cryptocurrency Swapper", 
      description: "Developed a cryptocurrency swapping platform using Blockchain technology for secure transactions. Integrated real-time price updates.", 
      technologies: ["Python", "NLTK", "Hugging Face Transformers"] 
    },
    { 
      title: "Contact List Management App", 
      description: "Built a contact management system using MEAN Stack, allowing users to add, edit, delete, and search contacts. Increased mobile engagement through responsive design improvements.", 
      technologies: ["MongoDB", "Express.js", "Angular", "Node.js"] 
    },
    { 
      title: "Python Sentiment Analysis", 
      description: "Created a sentiment analysis tool using NLTK and Hugging Face Transformers to classify Amazon reviews. Improved model accuracy by 15% through data preprocessing and fine-tuning.", 
      technologies: ["Python", "NLTK", "Hugging Face Transformers"] 
    }
  ];

  return (
    <div className={`min-h-screen flex items-center justify-center p-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-b from-blue-400 to-green-500'}`}>
      <div className="max-w-6xl w-full">
        <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-blue-300' : 'text-white'}`}>Projects</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          {projects.map((project, index) => (
            <motion.div key={index} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`} whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2 }}>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-blue-500 text-white rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Blog Component
const Blog = ({ darkMode }) => {
  const [posts, setPosts] = useState(() => {
    const storedPosts = localStorage.getItem('posts');
    return storedPosts ? JSON.parse(storedPosts) : [
      { id: 1, title: "The Future of AI in Cryptocurrency", content: "Exploring the transformative impact of AI on cryptocurrency trading and security." },
      { id: 2, title: "Mastering MERN Stack: Tips and Tricks", content: "Insights on optimizing development workflows using the MERN stack." },
    ];
  });

  const [newPost, setNewPost] = useState({ title: "", content: "" });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      setPosts([...posts, { id: posts.length + 1, ...newPost }]);
      setNewPost({ title: "", content: "" });
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

    const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return posts.slice(startIndex, endIndex);
  }, [currentPage, postsPerPage, posts]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={`p-10 pt-20 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gradient-to-b from-gray-100 to-gray-300'}`}>
      <h2 className={`text-4xl font-bold mb-6 text-center ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Blog</h2>

      <motion.form 
        className="mb-6" 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input 
          className={`w-full p-2 mb-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded`}
          type="text" 
          placeholder="Post Title" 
          value={newPost.title} 
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea 
          className={`w-full p-2 mb-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded`}
          placeholder="Post Content" 
          value={newPost.content} 
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <motion.button 
          className={`w-full p-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded`} 
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Post
        </motion.button>
      </motion.form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {paginatedPosts.map((post) => (
          <motion.div 
            key={post.id} 
            className={`mb-4 p-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} rounded shadow`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{post.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination with Previous and Next Buttons */}
      <div className="flex justify-center items-center mt-4">
        <button
          className={`px-4 py-2 mx-2 rounded-md ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-600`} 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className={`mx-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{currentPage}</span>

        <button
          className={`px-4 py-2 mx-2 rounded-md ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'} hover:bg-blue-600`} 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/education" element={<Education darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/experience" element={<Experience darkMode={darkMode} />} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/blog" element={<Blog darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
};

export default App;

