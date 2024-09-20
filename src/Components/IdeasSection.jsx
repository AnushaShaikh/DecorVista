import React from 'react';
import './IdeasSection.css'; // CSS file for styles
import { FaBed, FaUtensils, FaLightbulb, FaBath, FaWindowRestore, FaFire, FaLeaf } from 'react-icons/fa';

const IdeasSection = () => {
  return (
    <div className="home-ideas">
      <div className="header">
        <h1>Modern ideas <span className="highlight">for home</span></h1>
        <p>Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum. Vivamus posuere, mauris eu interdum molestie.</p>
        <button className="read-more-btn">READ MORE</button>
      </div>
      
      <div className="categories">
        <Category 
          icon={<FaBed />} 
          title="Bedrooms" 
          description="Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum." 
        />
        <Category 
          icon={<FaUtensils />} 
          title="Kitchens" 
          description="Duis ultricies sodales finibus. In ac feugiat eros luctus sem." 
        />
        <Category 
          icon={<FaLightbulb />} 
          title="Lighting" 
          description="Morbi orci mauris, lacinia eu felis id, euismod dapibus augue." 
        />
        <Category 
          icon={<FaWindowRestore />} 
          title="Windows" 
          description="Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum." 
        />
        <Category 
          icon={<FaBath />} 
          title="Bathrooms" 
          description="Duis ultricies sodales finibus. In ac feugiat eros luctus sem." 
        />
        <Category 
          icon={<FaLeaf />} 
          title="Decoration" 
          description="Morbi orci mauris, lacinia eu felis id, euismod dapibus augue." 
        />
        <Category 
          icon={<FaFire />} 
          title="Fireplaces" 
          description="Vestibulum augue tortor, consequat eu diam a, varius pulvinar ipsum." 
        />
      </div>
    </div>
  );
};

const Category = ({ icon, title, description }) => (
  <div className="category">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default IdeasSection;
