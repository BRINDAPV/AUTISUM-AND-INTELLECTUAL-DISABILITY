import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5em', marginBottom: '10px' }}>About Us</h1>
        <p style={{ fontSize: '1.5em', maxWidth: '1000px', margin: '0 auto' }}>
          We are dedicated to leveraging the power of Virtual Reality (VR) technology to enhance the lives of children with Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID).
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px' }}>
        <section style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Our Mission</h2>
          <p style={{ fontSize: '1.5em', lineHeight: '1.6' }}>
            Our mission is to develop innovative VR solutions that create immersive and controlled learning environments, tailored to the unique sensory and cognitive needs of children with ASD and ID.
          </p>
        </section>

        <section style={{ width: '100%', maxWidth: '1000px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Our Vision</h2>
          <p style={{ fontSize: '1.5em', lineHeight: '1.6' }}>
            Our vision is to empower children with special needs by providing safe, personalized, and repeatable learning experiences that enhance social functioning, improve learning outcomes, and contribute to a better quality of life.
          </p>
        </section>
      </div>

      <section style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '25px' }}>Meet the Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', justifyItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image1.jpg" alt="Team Member 1" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Logesh S</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image2.jpg" alt="Team Member 2" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Brinda P V</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image3.jpg" alt="Team Member 3" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Meiyarasu G</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image4.jpg" alt="Team Member 4" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Naveen Kumar P</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image5.jpg" alt="Team Member 5" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Priyanka B</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src="path_to_image6.jpg" alt="Team Member 6" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '15px' }} />
            <h3 style={{ fontSize: '1.5em', marginBottom: '5px' }}>Dhiksha S</h3>
            <p style={{ fontSize: '1.1em', color: 'black' }}>Student</p>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '40px', padding: '20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2em', marginBottom: '15px' }}>Our VR Technology</h2>
        <p style={{ fontSize: '1.2em', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', color: '#777' }}>
          We are pioneering the use of Virtual Reality (VR) to create engaging, safe, and personalized learning environments for children with Autism Spectrum Disorder (ASD) and Intellectual Disabilities (ID). Our VR solutions are designed to accommodate the specific sensory and cognitive needs of these children, offering them a unique opportunity to learn and interact in ways that align with their individual profiles. Our technology supports the development of essential life skills, fosters social interaction, and contributes to overall well-being. By integrating advanced VR with expert knowledge in special education, we aim to make a profound impact on the quality of life for children with special needs.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
