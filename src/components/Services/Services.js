import React from "react";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

import Title from "../Title/Title";

import "./Services.scss";

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Free Cocktails",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
    },
    {
      icon: <FaShuttleVan />,
      title: "Free Shuttle",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
    },
    {
      icon: <FaBeer />,
      title: "Strongest Beer",
      info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
    }
  ];

  return (
    <section className="services">
      <Title title="services" />
      <div className="sevices__center">
        {services.map(service => {
          return (
            <article key={service.title} className="service">
              <span>{service.icon}</span>
              <h6>{service.title}</h6>
              <p>{service.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
