import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main>
      <div className="video-section">
      <div className="overlay-text">Town of Musgrave Harbour</div>
        <video autoPlay muted loop playsInline>
          <source src="videos/TOMH.mp4" type="video/mp4" />
        </video>
      </div>
      
      <section id="welcome-section">
        <h2>Welcome to Musgrave Harbour</h2>
        <p>Welcome to the official website for The Town of Musgrave Harbour. Here, you will find information about our services, latest news, upcoming events, and important announcements.</p>
        <p>Located on the Northeast Coast of Newfoundland, Canada, also known as The Shore. Musgrave Harbour is accessible from the Trans Canada Highway from Gambo on Route 320 or Gander Route 330.</p>
        <p>Originally named Muddy Hole when first settled in 1834, was renamed to Musgrave Harbour in 1886 in honor of Governor Anthony Musgrave. <br />
        Musgrave is known for its 7 km of fine white sandy beach that stretches along the coastline from the Fishermen's Museum to The Banting Memorial Municipal Park. <br />
        Whether you are looking for a place to stay, have some fun, or relax on our beautiful sandy beach, you are sure to find what you are looking for in this Town of approximately 900. <br />
        There are many attractions to accommodate visitors of a diverse background. For those who love salmon fishing, Ragged Harbour River and Anchor Brook are only minutes away. <br />Other activities such as beach combing, berry picking, camping, whale and iceberg watching, snowmobiling, and ice fishing are just to name a few.</p>
      </section>
    </main>
  );
};

export default MainContent;
