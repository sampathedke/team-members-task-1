// TeamMemberCard.js

import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

const TeamMemberCard = ({ member }) => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  
  const renderPopup = () => {
    const bioLines = member.bio.split('\n');
    return (
      <div className='overlay'>
      <div className="popup">
        <div className="popup-content" ref={popupRef}>
          <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
          <img src={member.imageUrl} alt={member.name} />
          <h2>{member.name}</h2>
          <p>{member.position}</p>
         {/* <p>{member.bio}</p> */}
         {bioLines.map((line, index) => (
            <div key={index} className="bio-line">{line}</div>
          ))}
        </div>
      </div>
      </div>
    );
  };
  
  return (
    <div className="team-member-card">
      <img src={member.imageUrl} alt={member.name} />
      <h2 onClick={() => setShowPopup(true)}>{member.name}</h2>
      <p>{member.position}</p>

      {showPopup && ReactDOM.createPortal(renderPopup(), document.body)}
    </div>
  );
};

export default TeamMemberCard;
