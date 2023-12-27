import React, { useState, useEffect } from 'react';

const SurveyList = () => {
  const [surveyData, setSurveyData] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // Placeholder for admin status

  useEffect(() => {
    // Simulated fetch of survey data from the backend
    const fetchSurveyData = async () => {
      // Simulated data for demonstration purposes
      const mockSurveyData = [
        { id: 1, name: 'John Doe', gender: 'Male', nationality: 'US', /* other fields */ },
        { id: 2, name: 'Jane Smith', gender: 'Female', nationality: 'UK', /* other fields */ },
        // Add more mock survey data as needed
      ];

      // Set survey data (replace this with actual fetch from the backend)
      setSurveyData(mockSurveyData);
    };

    if (isAdmin) {
      fetchSurveyData(); // Fetch data if admin
    }
  }, [isAdmin]);

  return (
    <div style={styles.container}>
      {isAdmin ? (
        <>
          <h2 style={styles.heading}>Survey Submissions</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Nationality</th>
                {/* Add headers for other fields */}
              </tr>
            </thead>
            <tbody>
              {surveyData.map((survey, index) => (
                <tr key={index}>
                  <td>{survey.name}</td>
                  <td>{survey.gender}</td>
                  <td>{survey.nationality}</td>
                  {/* Add table cells for other fields */}
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p style={styles.message}>You don't have admin access to view this data.</p>
      )}
    </div>
  );
};

// Inline styles for the SurveyList component
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  message: {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '40px',
  },
};

export default SurveyList;
