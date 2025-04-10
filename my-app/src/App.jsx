import { useState } from 'react';
import PollOption from './PollOption';
import './App.css';

function App() {
  // Array of pets with names and vote counts
  const [options, setOptions] = useState([
    { option: 'Dog', count: 0 },
    { option: 'Cat', count: 0 },
    { option: 'Bird', count: 0 },
    { option: 'Fish', count: 0 },
  ]);

  // Function to handle voting
  const handleVote = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].count += 1;
    setOptions(updatedOptions);
  };

  // Function to determine the leader (the option with the most votes)
  const getLeader = () => {
    return options.reduce((leader, option) =>
      option.count > leader.count ? option : leader
    );
  };

  return (
    <div className="App">
      <h1>Pet Voting Poll</h1>
      {options.map((option, index) => (
        <PollOption
          key={index}
          label={option.option}
          count={option.count}
          onVote={() => handleVote(index)}
        />
      ))}
      <div className="leader">
        <h2>Current Leader:</h2>
        <p>{getLeader().option} with {getLeader().count} votes!</p>
      </div>
    </div>
  );
}

export default App;