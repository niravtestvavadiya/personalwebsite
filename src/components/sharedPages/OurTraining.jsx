import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const TrainingOptions = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: 'Team Building and Collaboration',
      image: 'https://your-image-url.com/team-building.jpg',
      description: 'Unify teams with customized training sessions aimed at enhancing trust, communication, and collaboration. Bhupendra helps teams unlock: Deeper Interpersonal Connections, Higher Responsiveness to Challenges.',
    },
    {
      title: 'Leadership Development',
      image: 'https://your-image-url.com/leadership.jpg',
      description: 'Empower your leaders with the skills and knowledge to inspire, motivate, and guide their teams. Bhupendra helps teams unlock: Enhanced Strategic Thinking, Improved Decision Making, Effective Communication.',
    },
    {
      title: 'Sales and Marketing Training',
      image: 'https://your-image-url.com/sales-marketing.jpg',
      description: 'Elevate your sales and marketing teams with strategies to drive revenue growth and enhance customer engagement. Bhupendra helps teams unlock:  Targeted Lead Generation,  Enhanced Closing Rates, Effective Brand Storytelling.',
    },
    // Add more training options as needed...
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="training-options">
      
    </div>
  );
};

export default TrainingOptions;