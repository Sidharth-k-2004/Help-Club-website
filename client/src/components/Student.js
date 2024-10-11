

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Student.css'; // Import CSS file for styles

// const StudentQueryPage = () => {
//     const [queries, setQueries] = useState([]); // Initialize with an empty array
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newQuery, setNewQuery] = useState(''); // State for the new query input
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useEffect(() => {
//         const fetchQueries = async () => {
//             try {
//                 const response = await axios.get('http://localhost:5000/student-queries');
//                 setQueries(response.data);
//             } catch (err) {
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQueries();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
//             setQueries([...queries, response.data]);
//             setNewQuery('');
//         } catch (err) {
//             setError(err.message);
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (loading) {
//         return <div className="loading">Loading...</div>;
//     }

//     if (error) {
//         return <div className="error">Error fetching queries: {error}</div>;
//     }

//     const displayQueries = Array.isArray(queries) ? queries : [];

//     return (
//         <div className="query-page">
//             <div className="header">
//                 <img src="Images/Help-Logo.jpg" alt="Help Logo" className="help-logo" /> {/* Replace with your logo path */}
//                 <h1 className="page-title">Student Query Page</h1>
//             </div>
//             <h2>Submit a New Query</h2>
//             <form onSubmit={handleSubmit} className="query-form">
//                 <textarea
//                     value={newQuery}
//                     onChange={(e) => setNewQuery(e.target.value)}
//                     placeholder="Enter your query here"
//                     rows="4"
//                     required
//                     className="query-input"
//                 />
//                 <button type="submit" disabled={isSubmitting} className="submit-button">
//                     {isSubmitting ? 'Submitting...' : 'Submit Query'}
//                 </button>
//             </form>

//             <h1>Your Past Queries</h1>
//             {displayQueries.length > 0 ? (
//                 displayQueries.map((query, index) => (
//                     <div key={index} className="query-card">
//                         <h2>Query {index + 1}</h2>
//                         <p><strong>Query:</strong> {query.queryText}</p>
//                         <p><strong>Reply:</strong> {query.replyText}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No past queries found.</p>
//             )}
//         </div>
//     );
// };

// export default StudentQueryPage;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Student.css'; // Import CSS file for styles

// const StudentQueryPage = () => {
//     const [queries, setQueries] = useState([]); // Initialize with an empty array
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [newQuery, setNewQuery] = useState(''); // State for the new query input
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // Function to fetch queries from the backend
//     const fetchQueries = async () => {
//         setLoading(true); // Start loading
//         try {
//             const response = await axios.get('http://localhost:5000/student-queries');
//             setQueries(response.data); // Set the fetched queries
//         } catch (err) {
//             setError(err.message); // Capture the error message
//         } finally {
//             setLoading(false); // Set loading to false in either case
//         }
//     };

//     useEffect(() => {
//         fetchQueries(); // Fetch queries when the component mounts
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         try {
//             const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
//             setNewQuery(''); // Clear the input field after submission
//             // Fetch the queries again after a new query has been submitted
//             fetchQueries();
//         } catch (err) {
//             setError(err.message); // Handle errors during submission
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (loading) {
//         return <div className="loading">Loading...</div>; // Show loading indicator
//     }

//     if (error) {
//         return <div className="error">Error fetching queries: {error}</div>; // Show error message
//     }

//     const displayQueries = Array.isArray(queries) ? queries : [];

//     return (
//         <div className="query-page">
//             <div className="header">
//                 <img src="Images/Help-Logo.jpg" alt="Help Logo" className="help-logo" /> {/* Replace with your logo path */}
//                 <h1 className="page-title">Student Query Page</h1>
//             </div>
//             <h2>Submit a New Query</h2>
//             <form onSubmit={handleSubmit} className="query-form">
//                 <textarea
//                     value={newQuery}
//                     onChange={(e) => setNewQuery(e.target.value)}
//                     placeholder="Enter your query here"
//                     rows="4"
//                     required
//                     className="query-input"
//                 />
//                 <button type="submit" disabled={isSubmitting} className="submit-button">
//                     {isSubmitting ? 'Submitting...' : 'Submit Query'}
//                 </button>
//             </form>

//             <h1>Your Past Queries</h1>
//             {displayQueries.length > 0 ? (
//                 displayQueries.map((query, index) => (
//                     <div key={index} className="query-card">
//                         <h2>Query {index + 1}</h2>
//                         <p><strong>Query:</strong> {query.queryText}</p>
//                         <p><strong>Reply:</strong> {query.replyText}</p>
//                     </div>
//                 ))
//             ) : (
//                 <p>No past queries found.</p>
//             )}
//         </div>
//     );
// };

// export default StudentQueryPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Student.css'; // Import CSS file for styles

const StudentQueryPage = () => {
    const [queries, setQueries] = useState([]); // Initialize with an empty array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newQuery, setNewQuery] = useState(''); // State for the new query input
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Function to fetch queries from the backend
    const fetchQueries = async () => {
        setLoading(true); // Start loading
        try {
            const response = await axios.get('http://localhost:5000/student-queries');
            console.log("Fetched Queries:", response.data); // Log the fetched queries
            setQueries(response.data); // Set the fetched queries
        } catch (err) {
            setError(err.message); // Capture the error message
        } finally {
            setLoading(false); // Set loading to false in either case
        }
    };

    useEffect(() => {
        fetchQueries(); // Fetch queries when the component mounts
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
            console.log("Response from Post:", response.data); // Log the response
            setNewQuery(''); // Clear the input field after submission
            // Fetch the queries again after a new query has been submitted
            fetchQueries();
        } catch (err) {
            setError(err.message); // Handle errors during submission
        } finally {
            setIsSubmitting(false);
        }
    };

    if (loading) {
        return <div className="loading">Loading...</div>; // Show loading indicator
    }

    if (error) {
        return <div className="error">Error fetching queries: {error}</div>; // Show error message
    }

    const displayQueries = Array.isArray(queries) ? queries : [];

    return (
        <div className="query-page">
            <div className="header">
                <img src="Images/Help-Logo.jpg" alt="Help Logo" className="help-logo" />
                <h1 className="page-title">Student Query Page</h1>
            </div>
            <h2>Submit a New Query</h2>
            <form onSubmit={handleSubmit} className="query-form">
                <textarea
                    value={newQuery}
                    onChange={(e) => setNewQuery(e.target.value)}
                    placeholder="Enter your query here"
                    rows="4"
                    required
                    className="query-input"
                />
                <button type="submit" disabled={isSubmitting} className="submit-button">
                    {isSubmitting ? 'Submitting...' : 'Submit Query'}
                </button>
            </form>

            <h1>Your Past Queries</h1>
            {displayQueries.length > 0 ? (
                displayQueries.map((query, index) => (
                    <div key={index} className="query-card">
                        <h2>Query {index + 1}</h2>
                        <p><strong>Query:</strong> {query.queryText}</p>
                        <p><strong>Reply:</strong> {query.replyText}</p>
                    </div>
                ))
            ) : (
                <p>No past queries found.</p>
            )}
        </div>
    );
};

export default StudentQueryPage;
