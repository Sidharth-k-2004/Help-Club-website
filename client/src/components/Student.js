

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Student.css';

// export default function StudentQueryPage() {
//   const [queries, setQueries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [newQuery, setNewQuery] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [selectedQuery, setSelectedQuery] = useState(null);

//   const fetchQueries = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get('http://localhost:5000/student-queries');
//       console.log("Fetched Queries:", response.data);
//       setQueries(response.data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQueries();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
//       console.log("Response from Post:", response.data);
//       setNewQuery('');
//       fetchQueries();
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const openPopup = (query) => {
//     setSelectedQuery(query);
//   };

//   const closePopup = () => {
//     setSelectedQuery(null);
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (error) {
//     return <div className="error">Error fetching queries: {error}</div>;
//   }

//   const displayQueries = Array.isArray(queries) ? queries : [];

//   return (
//     <div className="query-page">
//       <div className="header">
//         <img src="Images/Help-Logo.jpg" alt="Help Logo" className="help-logo" />
//         <h1 className="page-title">Student Query Page</h1>
//       </div>
//       <h2>Submit a New Query</h2>
//       <form onSubmit={handleSubmit} className="query-form">
//         <textarea
//           value={newQuery}
//           onChange={(e) => setNewQuery(e.target.value)}
//           placeholder="Enter your query here"
//           rows="4"
//           required
//           className="query-input"
//         />
//         <button type="submit" disabled={isSubmitting} className="submit-button">
//           {isSubmitting ? 'Submitting...' : 'Submit Query'}
//         </button>
//       </form>

//       <h1>Your Past Queries</h1>
//       <div className="board-layout">
//         {displayQueries.length > 0 ? (
//           displayQueries.map((query, index) => (
//             <div key={index} className="sticky-container" onClick={() => openPopup(query)}>
//               <div className="sticky-outer">
//                 <div className="sticky">
//                   <div className="sticky-content">
//                     <div className="sticky-info-layout">
//                       <h2 className="sticky-info-head">Query {index + 1}</h2>
//                       <div className="sticky-info">
//                         <strong>Query:</strong> {query.queryText}
//                       </div>
//                       <div className="sticky-info">
//                         <strong>Reply:</strong> {query.replyText ? query.replyText : 'No reply yet.'}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No past queries found.</p>
//         )}
//       </div>

//       {selectedQuery && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <span className="popup-close" onClick={closePopup}>&times;</span>
//             <h2>Query {displayQueries.indexOf(selectedQuery) + 1}</h2>
//             <p><strong>Query:</strong> {selectedQuery.queryText}</p>
//             <p><strong>Reply:</strong> {selectedQuery.replyText || 'No reply yet.'}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Student.css';

export default function StudentQueryPage() {
  const [queries, setQueries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newQuery, setNewQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(null);

  const fetchQueries = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/student-queries');
      console.log("Fetched Queries:", response.data);
      setQueries(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   try {
  //     const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
  //     console.log("Response from Post:", response.data);
      
  //     // Update the queries state with the new query
  //     setQueries(prevQueries => [response.data, ...prevQueries]);
      
  //     setNewQuery('');
  //   } catch (err) {
  //     setError(err.message);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post('http://localhost:5000/post-query', { queryText: newQuery });
  
      // Log response to see what data you're receiving
      console.log("Response from Post:", response.data);
      
      // Ensure prevQueries is always an array and add the new query
      setQueries(prevQueries => {
        const updatedQueries = Array.isArray(prevQueries) ? [response.data, ...prevQueries] : [response.data];
  
        // Log the updated queries to see if the state is correctly updated
        console.log("Updated Queries:", updatedQueries);
  
        return updatedQueries;
      });
      
      setNewQuery('');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  

  const openPopup = (query) => {
    setSelectedQuery(query);
  };

  const closePopup = () => {
    setSelectedQuery(null);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error fetching queries: {error}</div>;
  }

  const displayQueries = Array.isArray(queries) ? queries : [];

  return (
    <div className="query-page">
      <div className="header">
        {/* <img src="Images/Help-Logo.jpg" alt="Help Logo" className="help-logo" /> */}
        <h1 className="page-title" >Student Query Page</h1>
      </div>
      <h2>Query?</h2>
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

      <h1>Past Queries</h1>
      <div className="board-layout">
        {displayQueries.length > 0 ? (
          displayQueries.map((query, index) => (
            <div key={index} className="sticky-container" onClick={() => openPopup(query)}>
              <div className="sticky-outer">
                <div className="sticky">
                  <div className="sticky-content">
                    <div className="sticky-info-layout">
                      <h2 className="sticky-info-head">Query {index + 1}</h2>
                      <div className="sticky-info">
                        <strong>Query:</strong> {query.queryText}
                      </div>
                      <div className="sticky-info">
                        <strong>Reply:</strong> {query.replyText ? query.replyText : 'No reply yet.'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No past queries found.</p>
        )}
      </div>

      {selectedQuery && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <h2>Query {displayQueries.indexOf(selectedQuery) + 1}</h2>
            <p><strong>Query:</strong> {selectedQuery.queryText}</p>
            <p><strong>Reply:</strong> {selectedQuery.replyText || 'No reply yet.'}</p>
          </div>
        </div>
      )}
    </div>
  );
}