// import React, { useState, useEffect } from 'react';
// import './Student.css'; // CSS for styling

// function StudentQueryPage() {
//   const [queryText, setQueryText] = useState('');
//   const [queries, setQueries] = useState([]);
//   const [message, setMessage] = useState('');

//   const token = localStorage.getItem('token'); // Assuming you save the JWT in local storage on login

//   useEffect(() => {
//     const fetchQueries = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/student-queries', {
//           headers: {
//             'Authorization': token,
//           },
//         });
//         const data = await response.json();
//         setQueries(data);
//       } catch (error) {
//         console.error('Error fetching queries:', error);
//       }
//     };

//     fetchQueries();
//   }, [token]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!queryText.trim()) {
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/post-query', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': token,
//         },
//         body: JSON.stringify({ queryText }),
//       });

//       const data = await response.json();
//       setMessage(data.message);

//       // Reload queries
//       setQueries([...queries, { queryText, replyText: '' }]);
//       setQueryText('');
//     } catch (error) {
//       console.error('Error posting query:', error);
//     }
//   };

//   return (
//     <div className="student-query-page">
//       {/* Logo */}
//       <div className="logo-section">
//         <img src="Images/Help-Logo.jpg" alt="Logo" className="logo" />
//         <h5>Pes University</h5>
//       </div>

//       {/* Query form */}
//       <div className="query-section">
//         <form onSubmit={handleSubmit}>
//           <textarea
//             placeholder="Write your query here..."
//             value={queryText}
//             onChange={(e) => setQueryText(e.target.value)}
//             required
//           />
//           <button type="submit">Post</button>
//         </form>
//         {message && <p className="message">{message}</p>}
//       </div>

//       {/* Display queries and replies */}
//       <div className="queries-display">
//         {queries.length === 0 ? (
//           <p>No queries yet.</p>
//         ) : (
//           queries.map((query, index) => (
//             <div key={index} className="query-item">
//               <p><strong>Query:</strong> {query.queryText}</p>
//               <p><strong>Reply:</strong> {query.replyText || 'No reply yet'}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default StudentQueryPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentQueryPage = () => {
    const [queries, setQueries] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                const response = await axios.get('/student-queries'); // Adjust the URL based on your API setup
                setQueries(response.data); // Assuming response.data is an array of queries
            } catch (err) {
                setError(err.message); // Capture the error message
            } finally {
                setLoading(false); // Set loading to false in either case
            }
        };

        fetchQueries();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div>Error fetching queries: {error}</div>; // Show error message
    }

    // Ensure queries is an array before mapping
    const displayQueries = Array.isArray(queries) ? queries : [];

    return (
        <div>
            <h1>Your Queries</h1>
            {displayQueries.length > 0 ? (
                displayQueries.map((query, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                        <h2>Query {index + 1}</h2>
                        <p><strong>Query:</strong> {query.queryText}</p>
                        <p><strong>Reply:</strong> {query.replyText}</p>
                    </div>
                ))
            ) : (
                <p>No queries found.</p> // Message when there are no queries
            )}
        </div>
    );
};

export default StudentQueryPage;
