import React, { useState } from 'react';
import { Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUser } from 'react-icons/fa'; // Importing icon from react-icons

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate('/Login');
        alert('Registration successful');
      } else {
        setError('Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } 
  };

  return (
    <div
      style={{
        border: '4px solid #4A148C',
        borderRadius: '10px',
        margin: '80px',
        backgroundColor: '#f4f4f4',
      }}
    >
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center p-0"
        style={{ backgroundColor: '#f4f4f4' }}
      >
        <Row className="w-100 m-0 p-4">
          <Col md={6} className="p-0 d-none d-md-block">
            <div
              style={{
                backgroundImage: 'url(http://www.adultautism2.com/wp-content/uploads/2023/02/OIP.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '90vh',
              }}
            />
          </Col>
          <Col md={6} className="d-flex justify-content-center align-items-center">
            <div
              className="p-4 w-100"
              style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '2px solid #4A148C',
                padding: '20px',
              }}
            >
              <div className="text-center mb-4">
                <FaUser size={48} color="#4A148C" />
                <h4 className="text-primary mt-2" style={{ color: '#4A148C' }}>
                  Register
                </h4>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <Row className="mb-3">
                  <Col xs={6}>
                    <Button
                      type="submit"
                      className="w-100"
                      variant="primary"
                      style={{ backgroundColor: '#4A148C', borderColor: '#4A148C' }}
                    >
                      Register
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="w-100"
                      variant="primary"
                      onClick={() => navigate('/Login')}
                      style={{ backgroundColor: '#4A148C', borderColor: '#4A148C' }}
                    >
                      Login
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6}>
                    <Button
                      className="w-100"
                      variant="link"
                      onClick={() => navigate('/')}
                      style={{ color: '#4A148C' }}
                    >
                      Forgot Password?
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="w-100"
                      variant="link"
                      onClick={() => navigate('/ALogin')}
                      style={{ color: '#4A148C' }}
                    >
                      Admin? Click Here
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button
                      className="w-100"
                      variant="link"
                      onClick={() => navigate('/Dashboard')}
                      style={{ color: '#4A148C' }}
                    >
                      Dashboard
                    </Button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
