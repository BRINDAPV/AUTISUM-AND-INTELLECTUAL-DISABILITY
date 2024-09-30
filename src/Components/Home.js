import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import './style.css'; // Custom CSS
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// // Function to generate a random integer between min and max (inclusive)
// const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to get a random item from an array
const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

// Arrays of possible values
const Subject = [
  'Behavioral Therapy', 'Sensory Integration Therapy', 'Social Skills Training',
  'Communication Skills Development', 'Cognitive Behavioral Therapy (CBT)',
  'Functional Behavioral Assessment', 'Adaptive Behavior Skills',
  'Parent Training and Support', 'Academic Interventions',
  'Self-Help Skills Training', 'Motor Skills Development',
  'Daily Living Skills', 'Emotional Regulation', 'Peer Interaction Skills',
  'Sensory Processing', 'Basic Maths', 'Basic Science'
];

const Status = [
  'review', 'in progress', 'pending', 'completed',
  'on hold', 'cancelled'
];

const Performance = [
  '85', '38', '99', '23', '45', '51', '78', '56', '32', '12', '43', '62', '71', '98', '74', '88', '56', '68'
];

// Function to generate a random row of data
const generateRandomRow = () => ({
  Subject: getRandomItem(Subject),
  Performance: getRandomItem(Performance),
  Status: getRandomItem(Status)
});

const Dashboard = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [lightMode, setLightMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [warnMessage, setWarnMessage] = useState(null);

  // Sample data for research articles in Parents Corner
  const researchArticles = [
    {
      title: 'Parental Guidance For Autism Spectrum Disorder',
      link: 'https://www.goldstarrehab.com/parent-resources/autism-parental-guidance'
    },
    {
      title: 'Introducing Your Child to His or Her Diagnosis of Autism',
      link: 'https://www.iidc.indiana.edu/irca/learn-about-autism/getting-started-introducing-your-child-to-his-or-her-diagnosis-of-autism.html'
    },
    {
      title: 'Navigating autism spectrum disorder',
      link: 'https://www.chnola.org/news-blog/2024/april/navigating-autism-spectrum-disorder-a-guide-to-s/'
    },
    {
      title: 'Parents with Intellectual Disabilities',
      link: 'https://thearc.org/wp-content/uploads/forchapters/Parents%20with%20I_DD.pdf'
    },
    {
      title: 'Needs of Children with Intellectual Disability',
      link: 'https://www.brightfuturesny.com/post/needs-of-children-with-intellectual-disability'
    },
    {
      title: '3 Ways To Support Your Child With Intellectual Disability',
      link: 'https://humanrace.asia/3-ways-to-support-your-child-with-intelectual-disability/'
    },
    // {
    //   title: 'Parenting styles in caregivers of autism',
    //   link: 'https://www.frontiersin.org/journals/ethology/articles/10.3389/fetho.2024.1382533/full'
    // }
  ];

  // Set welcome message based on time of day
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    let welcome = '';

    if (hour < 12) {
      welcome = 'morning';
    } else if (hour < 17) {
      welcome = 'afternoon';
    } else {
      welcome = 'evening';
    }

    setWelcomeMessage(welcome);
  }, []);

  const attendancePercentage = 75;

  // Handle light mode toggle
  const handleToggle = () => {
    setLightMode(!lightMode);
  };

  // Handle search input
  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const val = e.target.value;
      if (val.length > 0) {
        setAlertMessage(`searching for: "${val}"`);
        setTimeout(() => setAlertMessage(null), 3500);
      } else {
        setWarnMessage('Type something');
        setTimeout(() => setWarnMessage(null), 1500);
      }
    }
  };

  const therapyData = {
    labels: [
      'Behavioral Therapy',
      'Social Skills Training',
      'Communication Skills',
      'Cognitive Behavioral Therapy',
      'Parent Training'
    ],
    datasets: [
      {
        label: 'Types of Therapy Sessions',
        data: [25, 15, 20, 30, 10], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 1)',   // Bright Red
          'rgba(54, 162, 235, 1)',   // Bright Blue
          'rgba(255, 206, 86, 1)',   // Bright Yellow
          'rgba(75, 192, 192, 1)',   // Bright Teal
          'rgba(153, 102, 255, 1)',  // Bright Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  // Generate an array of random rows
  const performanceRows = Array.from({ length: 6 }, generateRandomRow);

  return (
    <div className={lightMode ? 'light' : ''}>
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span>VOISS</span>
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/Dashboard" className="active">
                <span className="fas fa-cubes"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/v1" className="active">
                <span className="fas fa-cubes"></span>
                <span>Scenario 1</span>
              </a>
            </li>

            <li>
              <a href="/Profile">
                <span className="fas fa-users"></span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="/Contactus">
                <span className="fas fa-clipboard-list"></span>
                <span>Contact us</span>
              </a>
            </li>
            <li>
              <a href="/Feedback">
                <span className="fas fa-receipt"></span>
                <span>Feedback</span>
              </a>
            </li>
            <li>
              <a href="/Profile">
                <span className="fa fa-user-circle"></span>
                <span>Accounts</span>
              </a>
            </li>
            <li>
              <a href="/About">
                <span className="fas fa-clipboard"></span>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="fas fa-lock"></span>
                <span>LogOut</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="main-content">
          <header>
            {/* 
             */}
            <h3>
              <b>DASHBOARD</b>
            </h3>
            <label htmlFor="nav-toggle" onClick={handleToggle}>
              <span className="fas fa-bars"></span>
            </label>

    

            <div className="user-wrapper">
              <div>
                <h4>
                  <b>VOISS</b>
                </h4>
              </div>
            </div>
          </header>

          <main>
            <div className="cards">
              <div className="customers">
                <div className="card">
                  <div className="card-header">
                    <h2 className="heading">Profile</h2>
                  </div>
                  <div className="card-body" style={{ color: '#fff' }}>
                    <div className="chart">
                      <img
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png"
                        alt="Avatar"
                        className="avatar"
                        style={{ width: 100, height: 100, borderRadius: '50%' }}
                      />
                      <br />
                      <h2 className="name">John Doe</h2>
                      <p className="age">Age: 30</p>
                      <p className="age">Ph No: +91 000xxx0000</p>
                      <p className="age">Email: abce@gmail.com</p>
                      <p className="age">Parent Name: abce</p>
                      <p className="age">Category: ASD</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers">
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading">Progress</h3>
                  </div>
                  <div className="card-body">
                    <div className="chart">
                      <Pie data={therapyData} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers">
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading">Attendance</h3>
                  </div>
                  <div className="card-body">
                    <div className="chart">
                      <CircularProgressbar
                        value={attendancePercentage}
                        text={`${attendancePercentage}%`}
                        styles={buildStyles({
                          textColor: '#f23',
                          pathColor: '#4CAF50',
                          trailColor: '#d6d6d6',
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="card">
              <div className="card-header">
                <h3 className="heading">Parents Corner</h3>
              </div>
              <div className="card-body" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>

                {/* Column 1: SOCIAL SKILLS */}
                <div className="column" style={{ flex: 1, minWidth: '300px' }}>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: '10px',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    SOCIAL SKILLS
                  </h4>
                  {/* Social Skills Cards */}
                  <div className="inner-card" style={{ background: '#333', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Understanding Social Cues</p>
                  </div>
                  <div className="inner-card" style={{ background: '#444', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Developing Friendships</p>
                  </div>
                  <div className="inner-card" style={{ background: '#555', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Sharing and Taking Turns</p>
                  </div>
                  <div className="inner-card" style={{ background: '#666', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Empathy and Understanding Others</p>
                  </div>
                  <div className="inner-card" style={{ background: '#777', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Conflict Resolution</p>
                  </div>
                </div>

                {/* Column 2: EDUCATION */}
                <div className="column" style={{ flex: 1, minWidth: '300px' }}>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: '10px',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    EDUCATION
                  </h4>
                  {/* Education Cards */}
                  <div className="inner-card" style={{ background: '#333', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Learning with Visual Aids</p>
                  </div>
                  <div className="inner-card" style={{ background: '#444', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Special Education Techniques</p>
                  </div>
                  <div className="inner-card" style={{ background: '#555', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Homework Help Strategies</p>
                  </div>
                  <div className="inner-card" style={{ background: '#666', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Reading Tips for Kids</p>
                  </div>
                  <div className="inner-card" style={{ background: '#777', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Math Games for Learning</p>
                  </div>
                </div>

                {/* Column 3: ACTIVITIES */}
                <div className="column" style={{ flex: 1, minWidth: '300px' }}>
                  <h4
                    style={{
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#fff',
                      marginBottom: '10px',
                      fontFamily: 'Arial, sans-serif',
                    }}
                  >
                    ACTIVITIES
                  </h4>
                  {/* Activities Cards */}
                  <div className="inner-card" style={{ background: '#333', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Outdoor Play Ideas</p>
                  </div>
                  <div className="inner-card" style={{ background: '#444', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Art and Crafts</p>
                  </div>
                  <div className="inner-card" style={{ background: '#555', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Indoor Games for Rainy Days</p>
                  </div>
                  <div className="inner-card" style={{ background: '#666', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Science Experiments at Home</p>
                  </div>
                  <div className="inner-card" style={{ background: '#777', padding: '10px', borderRadius: '8px', marginBottom: '10px' }}>
                    <p style={{ color: '#fff' }}>Music and Dance Activities</p>
                  </div>
                </div>

              </div>
            </div>




            <div className="recent-grid">
              <div className="projects">
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading">OVERALL PERFORMANCE</h3>
                    <button>
                      See all <span className="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Subject</td>
                            <td>Status</td>
                            <td>Performance</td>
                          </tr>
                        </thead>
                        <tbody>
                          {performanceRows.map((row, index) => (
                            <tr key={index}>
                              <td>{row.Subject}</td>
                              <td>{row.Status}</td>
                              <td>{row.Performance}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customers">
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading">Parents Corner</h3>
                  </div>
                  <div className="card-body">
                    {researchArticles.map((article, index) => (
                      <p key={index}>
                        <a
                          href={article.link}
                          style={{
                            fontSize: '16px',
                            fontWeight: 'bold',
                            color: '#fff',
                            textDecoration: 'none',
                            marginBottom: '10px',
                            fontFamily: 'Arial, sans-serif'
                          }}
                        >
                          {article.title}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
