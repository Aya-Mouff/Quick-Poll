import React, { useState } from 'react';
import './Poll.css'; // We'll create this CSS file

function Poll() {
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pollData = {
    question: "What's your favorite programming language?",
    options: [
      { id: 'javascript', text: 'JavaScript' },
      { id: 'python', text: 'Python' },
      { id: 'java', text: 'Java' },
      { id: 'csharp', text: 'C#' }
    ]
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmitVote = async (e) => {
    e.preventDefault();
    
    if (!selectedOption) return;

    setIsSubmitting(true);
    
    try {
      // Replace with your actual API call
      await submitVoteToAPI(selectedOption);
      setHasVoted(true);
    } catch (error) {
      console.error('Failed to submit vote:', error);
      alert('Failed to submit vote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitVoteToAPI = async (optionId) => {
    // Simulate API call - replace with actual endpoint
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Vote submitted for:', optionId);
        resolve({ success: true });
      }, 1000);
    });
    
    // Actual API call would look like:
    // return fetch('/api/polls/vote', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ optionId })
    // });
  };

  if (hasVoted) {
    return (
      <div className="poll-container">
        <div className="success-message">
          <h3>Thank you for voting!</h3>
          <p>Your vote has been recorded successfully.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="poll-container">
      <h2 className="poll-question">{pollData.question}</h2>
      
      <form onSubmit={handleSubmitVote} className="poll-form">
        <div className="poll-options">
          {pollData.options.map((option) => (
            <div
              key={option.id}
              className={`option ${selectedOption === option.id ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <input
                type="radio"
                id={option.id}
                name="pollOption"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={() => handleOptionSelect(option.id)}
                className="option-input"
              />
              <label htmlFor={option.id} className="option-label">
                {option.text}
              </label>
            </div>
          ))}
        </div>
        
        <button
          type="submit"
          className="vote-button"
          disabled={!selectedOption || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Vote'}
        </button>
      </form>
    </div>
  );
}

export default Poll;