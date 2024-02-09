// TeamSectionPage.js

import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers,teamMembers1,teamMembers2 } from './data'; // Assuming you have a data file with team members

const TeamSectionPage = () => {
  return (
    <div className="team-section-page">
      <h1> Meet Our Team </h1>
      <div className='bg'>
      <div className='main-team1'>
        <h2> Leadership/Management Team</h2>
        </div>
      <div className="team-member-list">
      
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      </div>

      <div className='bg'>
      <div className='main-team1'>
        <h2>Development Team </h2>
        </div>
      <div className="team-member-list">
      
        {teamMembers1.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      </div>

      <div className='bg'>
      <div className='main-team1'>
        <h2> Sales and Marketing Team</h2>
        </div>
      <div className="team-member-list">
      
        {teamMembers2.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
      </div>
      
    </div>
  );
};

export default TeamSectionPage;
