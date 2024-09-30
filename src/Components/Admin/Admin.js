import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import { Box, Button, Typography } from '@mui/material';
import '../style.css';

const researchArticles = [
  {
    title: 'Parental Guidance For Autism Spectrum Disorder',
    link: 'https://www.goldstarrehab.com/parent-resources/autism-parental-guidance'
  },
  {
    title: ' Introducing Your Child to His or Her Diagnosis of Autism',
    link: 'https://www.iidc.indiana.edu/irca/learn-about-autism/getting-started-introducing-your-child-to-his-or-her-diagnosis-of-autism.html'
  },
  {
    title: ' Navigating autism spectrum disorder',
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
  {
    title: 'Parenting styles in caregivers of autism',
    link: 'https://www.frontiersin.org/journals/ethology/articles/10.3389/fetho.2024.1382533/full'
  }
];

const scenarios = [
  {
    title: 'Autism Therapy Techniques',
    category: 'Autism',
    status: 'Completed'
  },
  {
    title: 'Early Intervention Strategies',
    category: 'Autism',
    status: 'In Progress'
  },
  {
    title: 'Behavioral Therapies for Autism',
    category: 'Autism',
    status: 'Pending'
  },
  {
    title: 'Support for Parents of Children with ID',
    category: 'Intellectual Disability',
    status: 'Completed'
  },
  {
    title: 'Educational Approaches for ID',
    category: 'Intellectual Disability',
    status: 'In Progress'
  },
  {
    title: 'Community Support Programs for ID',
    category: 'Intellectual Disability',
    status: 'Pending'
  },
  {
    title: 'Therapy Techniques',
    category: 'Autism',
    status: 'Completed'
  },
  {
    title: 'Parents of Children with ID',
    category: 'Intellectual Disability',
    status: 'Completed'
  },
];

const ADashboard = () => {
  const [lightMode, setLightMode] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [warnMessage, setWarnMessage] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate


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


  // Navigation functions
  const handleAddClick = () => {
    navigate('/AddScenario');
  };

  const handleDeleteClick = () => {
    navigate('/DeleteScenario');
  };

  const handleUpdateClick = () => {
    navigate('/UpdateScenario');
  };

  return (
    <div className={lightMode ? 'light' : ''}>
      <input type="checkbox" id="nav-toggle" />

      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span>CODE SURGEONS</span>
          </h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <a href="/ADashboard" className="active">
                <span className="fas fa-cubes"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/ManageUserPage">
                <span className="fas fa-users"></span>
                <span>Users</span>
              </a>
            </li>
            <li>
              <a href="/Scenarios">
                <span className="fas fa-clipboard-list"></span>
                <span>Scenarios</span>
              </a>
            </li>
            <li>
              <a href="/Feedbacks">
                <span className="fas fa-receipt"></span>
                <span>Feedbacks</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-clipboard"></span>
                <span>Tasks</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-wrapper">
        <div className="main-content">
          <header>
            {/* <h2
              className="heading"
              id="dashboard"
              onMouseEnter={(e) => handleMouseEnter(e, `good ${welcomeMessage}`)}
              onMouseLeave={(e) => handleMouseLeave(e, 'Dashboard')}
            >
              Dashboard
            </h2> */}
            <div className="user-wrapper">
              <img src="" alt="" />
              <div>
                <h3>
                <b>ADMIN DASHBOARD</b></h3>
              </div>
            </div>
            <label htmlFor="nav-toggle" onClick={handleToggle}>
              <span className="fas fa-bars"></span>
            </label>

            <div className="search">
              <div className="search-rotate">
                <div className="icon"></div>
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Search"
                  id="mysearch"
                  autoComplete="off"
                  onKeyDown={handleSearch}
                />
              </div>
            </div>

            <div className="user-wrapper">
              <img src="" alt="" />
              <div>
                <h4>
                <b>CODE SURGEONS</b></h4>
              </div>
            </div>
          </header>

          <main>
            <div className="cards">
              <div className="card-single">
                <div>
                  <h1 id="customer"></h1>
                  <span>Total Clients</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1 id="project"></h1>
                  <span>Scenarios</span>
                </div>
                <div>
                  <span className="fas fa-clipboard"></span>
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1 id="order"></h1>
                  <span>Feedback</span>
                </div>
                <div>
                  <span className="fab fa-google-wallet"></span>
                </div>
              </div>
            </div>

            {/* New Containers with Hover Effect */}
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                marginY: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  padding: 3,
                  minHeight: 150,
                  boxShadow: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: '#e3f2fd', // Light blue background
                  flex: '1 1 200px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#bbdefb', // Slightly darker blue on hover
                    boxShadow: 3,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Add Scenario
                </Typography>
                <Button variant="contained" color="primary" onClick={handleAddClick}>
                  Add
                </Button>
              </Box>

              <Box
                sx={{
                  padding: 3,
                  minHeight: 150,
                  boxShadow: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: '#fce4ec', // Light pink background
                  flex: '1 1 200px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#f8bbd0', // Slightly darker pink on hover
                    boxShadow: 3,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Delete Scenario
                </Typography>
                <Button variant="contained" color="secondary" onClick={handleDeleteClick}>
                  Delete
                </Button>
              </Box>

              <Box
                sx={{
                  padding: 3,
                  minHeight: 150,
                  boxShadow: 1,
                  borderRadius: 2,
                  textAlign: 'center',
                  backgroundColor: '#e8f5e9', // Light green background
                  flex: '1 1 200px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    backgroundColor: '#c8e6c9', // Slightly darker green on hover
                    boxShadow: 3,
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Update Scenario
                </Typography>
                <Button variant="contained" color="success" onClick={handleUpdateClick}>
                  Update
                </Button>
              </Box>
            </Box>

            <div className="recent-grid" style={{ display: 'flex', gap: '16px' }}>
              <div className="projects" style={{ flex: '7' }}>
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>Recent Projects</h3>
                    <button>
                      See all <span className="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table width="100%" style={{ fontSize: '0.9em' }}>
                        <thead>
                          <tr>
                            <th>Scenario Title</th>
                            <th>Category</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {scenarios.map((scenario, index) => (
                            <tr key={index}>
                              <td>{scenario.title}</td>
                              <td>{scenario.category}</td>
                              <td>
                                <span className={`status ${scenario.status.toLowerCase()}`}></span>
                                {scenario.status}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="customers" style={{ flex: '3' }}>
                <div className="card">
                  <div className="card-header">
                    <h3 className="heading" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2em' }}>Parents Corner</h3>
                    <button>
                      See all <span className="fas fa-arrow-right"></span>
                    </button>
                  </div>
                  <div className="card-body">
                    {researchArticles.map((article, index) => (
                      <div className="customer" key={index}>
                        <div className="info" style={{ display: 'flex', alignItems: 'center' }}>
                          <div>
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ textDecoration: 'none', color: '#333', fontFamily: 'Arial, sans-serif' }}
                            >
                              <h4 style={{ margin: '0', fontSize: '0.9em' }}>{article.title}</h4>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      {alertMessage && <div className="alert alert-info">{alertMessage}</div>}
      {warnMessage && <div className="alert alert-warning">{warnMessage}</div>}
    </div>
  );
};

export default ADashboard;
