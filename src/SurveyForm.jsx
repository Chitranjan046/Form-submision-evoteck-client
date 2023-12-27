import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './SurveyForm.css'; // Import CSS file for styling

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    nationality: '',
    email: '',
    phoneNumber: '',
    address: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error once the user starts typing in a field
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateFormData();

    if (Object.keys(errors).length === 0) {
      try {
        // Simulate form submission
        console.log('Form data to be submitted:', formData);

        // Redirect to SurveyList after successful form submission
        history.push('/survey-list');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      // Set formErrors to display validation errors
      setFormErrors(errors);
    }
  };

  const validateFormData = () => {
    const errors = {};
    // Basic validation: checking if required fields are empty
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.gender) {
      errors.gender = 'Gender is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    }
    if (!formData.address) {
      errors.address = 'Address is required';
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit} className="survey-form">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.name && <span className="error">{formErrors.name}</span>}
      </label>

      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.gender && <span className="error">{formErrors.gender}</span>}
      </label>

      <label>
        Nationality:
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.nationality && <span className="error">{formErrors.nationality}</span>}
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.email && <span className="error">{formErrors.email}</span>}
      </label>

      <label>
        Phone Number:
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.phoneNumber && <span className="error">{formErrors.phoneNumber}</span>}
      </label>

      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          className="form-input"
        />
        {formErrors.address && <span className="error">{formErrors.address}</span>}
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input"
        />
      </label>

      <button type="submit" className="submit-btn">
        Submit
      </button>
    </form>
  );
};

export default SurveyForm;
