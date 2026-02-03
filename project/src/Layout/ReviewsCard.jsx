



// import React, { useState, useEffect } from 'react';

// const ReviewPage = () => {
//   // Load reviews from localStorage or use default if none exist
//   const [reviews, setReviews] = useState(() => {
//     const savedReviews = localStorage.getItem('reviews');
//     return savedReviews ? JSON.parse(savedReviews) : [
//     //   { id: 1, name: 'Alice Johnson', comment: 'The website is user-friendly and fast!', date: '2023-10-01' },
//     //   { id: 2, name: 'Bob Lee', comment: 'Great design, but could use more features.', date: '2023-09-28' },
//     //   { id: 3, name: 'Charlie Brown', comment: 'Decent, but navigation is a bit confusing.', date: '2023-09-25' },
//     ];
//   });

//   // State for new review form
//   const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

//   // Save reviews to localStorage whenever reviews change
//   useEffect(() => {
//     localStorage.setItem('reviews', JSON.stringify(reviews));
//   }, [reviews]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (newReview.name && newReview.comment) {
//       const newRev = { ...newReview, id: Date.now(), date: new Date().toISOString().split('T')[0] };
//       setReviews([newRev, ...reviews]); // Add to top
//       setNewReview({ name: '', rating: 5, comment: '' });
//       alert('Thank you for your review!');
//     }
//   };

//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '0' }}> {/* Removed padding for full width */}
//       <div style={{ margin: '0' }}> {/* Removed auto margin for full width */}
//         <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', color: '#333', padding: '20px 0' }}>Website Reviews</h1> {/* Added top/bottom padding for title spacing */}

//         {/* Add Review Form (Pinterest-like card, centered) */}
//         <div style={{ 
//           backgroundColor: '#fff', 
//           padding: '20px', 
//           borderRadius: '16px', 
//           boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
//           marginBottom: '30px', 
//           maxWidth: '500px', 
//           margin: '0 auto 30px auto' 
//         }}>
//           <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', color: '#333' }}>Share Your Review</h2>
//           <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={newReview.name}
//               onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
//               required
//               style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }}
//             />
//             <select
//               value={newReview.rating}
//               onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
//               style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }}
//             >
//               <option value={5}>5 Stars    ★★★★★</option>
//               <option value={4}>4 Stars    ★★★★☆</option>
//               <option value={3}>3 Stars    ★★★☆☆</option>
//               <option value={2}>2 Stars    ★★☆☆☆</option>
//               <option value={1}>1 Star     ★☆☆☆☆</option>
//             </select>
//             <textarea
//               placeholder="Write your review..."
//               value={newReview.comment}
//               onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
//               required
//               style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '100px', fontSize: '16px' }}
//             />
//             <button type="submit" style={{ 
//               padding: '12px', 
//               backgroundColor: '#e60023', // Pinterest red accent
//               color: '#fff', 
//               border: 'none', 
//               borderRadius: '8px', 
//               cursor: 'pointer', 
//               fontSize: '16px', 
//               fontWeight: 'bold' 
//             }}>
//               Submit Review
//             </button>
//           </form>
//         </div>

//         {/* Reviews Grid (Pinterest-style cards, full width) */}
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
//           gap: '20px',
//           padding: '0 20px 20px 20px' // Added horizontal padding for grid edges
//         }}>
//           {reviews.map((review) => (
//             <div key={review.id} style={{ 
//               backgroundColor: '#fff', 
//               padding: '20px', 
//               borderRadius: '16px', 
//               boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               cursor: 'pointer'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = 'scale(1.05)';
//               e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = 'scale(1)';
//               e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
//             }}
//             >
//               <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>{review.name}</h3>
//               <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>{review.comment}</p>
//               <p style={{ margin: '0', fontSize: '12px', color: '#999' }}>Reviewed on {new Date(review.date).toLocaleDateString()}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewPage;

import React, { useState, useEffect } from 'react';

const ReviewPage = () => {
  // Load reviews from localStorage or use default if none exist
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem('reviews');
    return savedReviews ? JSON.parse(savedReviews) : [
    //   { id: 1, name: 'Alice Johnson', comment: 'The website is user-friendly and fast!', date: '2023-10-01' },
    //   { id: 2, name: 'Bob Lee', comment: 'Great design, but could use more features.', date: '2023-09-28' },
    //   { id: 3, name: 'Charlie Brown', comment: 'Decent, but navigation is a bit confusing.', date: '2023-09-25' },
    ];
  });

  // State for new review form
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  // Save reviews to localStorage whenever reviews change
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.comment) {
      const newRev = { ...newReview, id: Date.now(), date: new Date().toISOString().split('T')[0] };
      setReviews([newRev, ...reviews]); // Add to top
      setNewReview({ name: '', rating: 5, comment: '' });
      alert('Thank you for your review!');
    }
  };

  // Function to remove a review
  const removeReview = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '0' }}> {/* Removed padding for full width */}
      <div style={{ margin: '0' }}> {/* Removed auto margin for full width */}
        <h1 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '28px', color: '#333', padding: '20px 0' }}>Website Reviews</h1> {/* Added top/bottom padding for title spacing */}

        {/* Add Review Form (Pinterest-like card, centered) */}
        <div style={{ 
          backgroundColor: '#fff', 
          padding: '20px', 
          borderRadius: '16px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
          marginBottom: '30px', 
          maxWidth: '500px', 
          margin: '0 auto 30px auto' 
        }}>
          <h2 style={{ margin: '0 0 20px 0', fontSize: '20px', color: '#333' }}>Share Your Review</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input
              type="text"
              placeholder="Your Name"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }}
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '16px' }}
            >
              <option value={5}>5 Stars    ★★★★★</option>
              <option value={4}>4 Stars    ★★★★☆</option>
              <option value={3}>3 Stars    ★★★☆☆</option>
              <option value={2}>2 Stars    ★★☆☆☆</option>
              <option value={1}>1 Star     ★☆☆☆☆</option>
            </select>
            <textarea
              placeholder="Write your review..."
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', minHeight: '100px', fontSize: '16px' }}
            />
            <button type="submit" style={{ 
              padding: '12px', 
              backgroundColor: '#e60023', // Pinterest red accent
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer', 
              fontSize: '16px', 
              fontWeight: 'bold' 
            }}>
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews Grid (Pinterest-style cards, full width) */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '20px',
          padding: '0 20px 20px 20px' // Added horizontal padding for grid edges
        }}>
          {reviews.map((review) => (
            <div key={review.id} style={{ 
              backgroundColor: '#fff', 
              padding: '20px', 
              borderRadius: '16px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)', 
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
            >
              <h3 style={{ margin: '0 0 10px 0', fontSize: '18px', color: '#333' }}>{review.name}</h3>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>{review.comment}</p>
              <p style={{ margin: '0 0 10px 0', fontSize: '12px', color: '#999' }}>Reviewed on {new Date(review.date).toLocaleDateString()}</p>
              <button 
                onClick={() => { 
                  if (window.confirm('Are you sure you want to delete this review?')) {
                    removeReview(review.id);
                  }
                }} 
                style={{ 
                  padding: '8px 12px', 
                  backgroundColor: '#ff4d4d', // Red color for delete
                  color: '#fff', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: 'pointer', 
                  fontSize: '14px', 
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                Remove Review
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;