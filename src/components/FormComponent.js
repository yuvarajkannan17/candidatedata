// src/components/FormComponent.jsx
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'; // Import Bootstrap components
import '../styles/FormComponent.css'; // Import your custom CSS

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    yearsOfExperience: '',
    contactNumber: '',
    emailId: '',
    currentLocation: '',
    preferredLocation: '',
    ctc: '',
    ectc: '',
    noticePeriod: '',
    skills: '',
    remarks: '',
    resume: null,
  });

 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (you can send this data to an API or local storage)
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <Row>
        <Col xs={12} md={6}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formJobTitle">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter job title"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formYearsOfExperience">
            <Form.Label>Years of Experience</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter years of experience"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formContactNumber">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter contact number"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formEmailId">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formCurrentLocation">
            <Form.Label>Current Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter current location"
              name="currentLocation"
              value={formData.currentLocation}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formPreferredLocation">
            <Form.Label>Preferred Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter preferred location"
              name="preferredLocation"
              value={formData.preferredLocation}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formCTC">
            <Form.Label>CTC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter CTC"
              name="ctc"
              value={formData.ctc}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formETC">
            <Form.Label>ECTC</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ETC"
              name="ectc"
              value={formData.ectc}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formNoticePeriod">
            <Form.Label>Notice Period</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter notice period"
              name="noticePeriod"
              value={formData.noticePeriod}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formSkills">
            <Form.Label>Skills</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter skills"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formRemarks">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter remarks"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={6}>
          <Form.Group controlId="formResume">
            <Form.Label>Upload Resume</Form.Label>
            <Form.Control
              type="file"
              name="resume"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-3">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormComponent;
