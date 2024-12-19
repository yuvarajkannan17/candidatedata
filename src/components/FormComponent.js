import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

const FormComponent = ({ initialValues, onSubmit }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    jobTitle: Yup.string().required('Job title is required'),
    yearsOfExperience: Yup.number()
      .required('Years of experience is required')
      .min(0, 'Must be a positive number'),
      contactNumber: Yup.string()
      .required('Contact number is required')
      .matches(/^\d{10}$/, 'Contact number must be exactly 10 digits'),
    
    emailId: Yup.string().email('Invalid email format').required('Email is required'),
    currentLocation: Yup.string().required('Current location is required'),
    preferredLocation: Yup.string().required('Preferred location is required'),
    ctc: Yup.string().required('CTC is required'),
    ectc: Yup.string().required('ECTC is required'),
    noticePeriod: Yup.string().required('Notice period is required'),
    skills: Yup.string().required('Skills are required'),
    remarks: Yup.string().required('Remarks are required'),
    resume: Yup.mixed().required('Resume is required'),
    submitby: Yup.string().required('Submit By is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, setFieldValue, errors, touched }) => (
        <Form onSubmit={handleSubmit} className="form-container">
          <Row>
            <Col xs={12} md={6}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.name && !!errors.name}
                />
                <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formJobTitle">
                <Form.Label>Job Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter job title"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.jobTitle && !!errors.jobTitle}
                />
                <Form.Control.Feedback type="invalid">{errors.jobTitle}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formYearsOfExperience">
                <Form.Label>Years of Experience</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter years of experience"
                  name="yearsOfExperience"
                  value={values.yearsOfExperience}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.yearsOfExperience && !!errors.yearsOfExperience}
                />
                <Form.Control.Feedback type="invalid">{errors.yearsOfExperience}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formContactNumber">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  name="contactNumber"
                  value={values.contactNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.contactNumber && !!errors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formEmailId">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="emailId"
                  value={values.emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.emailId && !!errors.emailId}
                />
                <Form.Control.Feedback type="invalid">{errors.emailId}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formCurrentLocation">
                <Form.Label>Current Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter current location"
                  name="currentLocation"
                  value={values.currentLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.currentLocation && !!errors.currentLocation}
                />
                <Form.Control.Feedback type="invalid">{errors.currentLocation}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formPreferredLocation">
                <Form.Label>Preferred Location</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter preferred location"
                  name="preferredLocation"
                  value={values.preferredLocation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.preferredLocation && !!errors.preferredLocation}
                />
                <Form.Control.Feedback type="invalid">{errors.preferredLocation}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formCTC">
                <Form.Label>CTC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter CTC"
                  name="ctc"
                  value={values.ctc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.ctc && !!errors.ctc}
                />
                <Form.Control.Feedback type="invalid">{errors.ctc}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formECTC">
                <Form.Label>ECTC</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter ECTC"
                  name="ectc"
                  value={values.ectc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.ectc && !!errors.ectc}
                />
                <Form.Control.Feedback type="invalid">{errors.ectc}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formNoticePeriod">
                <Form.Label>Notice Period</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter notice period"
                  name="noticePeriod"
                  value={values.noticePeriod}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.noticePeriod && !!errors.noticePeriod}
                />
                <Form.Control.Feedback type="invalid">{errors.noticePeriod}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter skills"
                  name="skills"
                  value={values.skills}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.skills && !!errors.skills}
                />
                <Form.Control.Feedback type="invalid">{errors.skills}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="formRemarks">
                <Form.Label>Remarks</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter remarks"
                  name="remarks"
                  value={values.remarks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.remarks && !!errors.remarks}
                />
                <Form.Control.Feedback type="invalid">{errors.remarks}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            

            <Col xs={12} md={6}>
              <Form.Group controlId="formResume">
                <Form.Label>Resume</Form.Label>
                <Form.Control
                  type="file"
                  name="resume"
                  onChange={(event) => setFieldValue('resume', event.currentTarget.files[0])}
                  onBlur={handleBlur}
                  isInvalid={touched.resume && !!errors.resume}
                />
                <Form.Control.Feedback type="invalid">{errors.resume}</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="formSubmitBy">
                <Form.Label>Submit By</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter submit by"
                  name="submitby"
                  value={values.submitby}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.submitby && !!errors.submitby}
                />
                <Form.Control.Feedback type="invalid">{errors.submitby}</Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12} className="d-flex justify-content-center mt-3">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
