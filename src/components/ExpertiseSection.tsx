'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

export default function AboutUsSection() {
  const sectionRef = useScrollAnimation<HTMLDivElement>({
    animationClass: 'animate-fade-in-up',
    initialTransform: 'translateY(40px)',
  });

  const cards = [
    {
      icon: '/assets/aboutus/1.png',
      title: 'Showcase Innovations',
      description: 'Shed light on innovative tech products and services to influential leaders.',
    },
    {
      icon: '/assets/aboutus/2.png',
      title: 'Direct Access',
      description: 'Engage with leading CIOs and digital leaders directly',
    },
    {
      icon: '/assets/aboutus/3.png',
      title: 'Lead Generation',
      description: 'Discover new business opportunities',
    },
    {
      icon: '/assets/aboutus/4.png',
      title: 'Networking Opportunities',
      description: 'Connect with peers, clients, and potential customers',
    },
    {
      icon: '/assets/aboutus/5.png',
      title: 'Insightful Discussions',
      description: 'Gain firsthand insights into CIOs challenges and priorities',
    },
    {
      icon: '/assets/aboutus/6.png',
      title: 'Increase Visibility',
      description: 'Boost your company’s profile in the tech ecosystem',
    },
    {
      icon: '/assets/aboutus/7.png',
      title: 'Collaborate',
      description: 'Explore partnerships with leading organisations',
    },
    {
      icon: '/assets/aboutus/8.png',
      title: 'Stay Ahead',
      description: 'Monitor market dynamics and emerging trends',
    },
  ];

  return (
    <section ref={sectionRef} className="aboutus-section">
      <div className="aboutus-container">
        <div className="aboutus-heading">
          <div className="aboutus-label">
            <Image
              src="/assets/icon.png"
              alt="About Us"
              width={20}
              height={20}
              className="aboutus-label-icon"
            />

            <span className="aboutus-label-text">CIO POWERLIST MEA</span>
          </div>

          {/* <h2 className="aboutus-title">About Us</h2> */}
        </div>

        <div className="aboutus-info-section">
          <div className="aboutus-info-left">
            <p>
              The rapid advancement of cutting-edge technologies is intensifying competition across
              the ICT landscape, both locally and globally. As markets become more competitive,
              visionary leadership is crucial for growth and sustainability.
            </p>
          </div>

          <div className="aboutus-info-right">
            <h3>What is CIO Power List MEA?</h3>

            <p>
              CIO Power List MEA, featuring <strong>The ICONIC CIO</strong>, curated by CXO Capital,
              brings together Middle East & Africa’s top tech leaders. This platform sparks dynamic
              discussions and offers insights into the latest technological trends in the ICT
              industry.
            </p>

            <p>
              The event honours Chief Information Officers (CIOs) driving modernization and digital
              disruption across the region with the CIO Power List MEA recognition. These leaders
              are advancing innovation, setting new industry standards, and seizing emerging
              opportunities to fuel business growth.
            </p>
          </div>
        </div>

        <div className="aboutus-grid">
          {cards.map((card, index) => (
            <div key={card.title} className={`aboutus-card aboutus-stagger-${index + 1}`}>
              <div className="aboutus-image-wrapper">
                <img src={card.icon} alt={card.title} className="aboutus-image" />
              </div>

              <h3 className="aboutus-card-title">{card.title}</h3>

              <p className="aboutus-card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
