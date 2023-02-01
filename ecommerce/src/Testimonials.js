import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This product is amazing! I would highly recommend it to anyone.",
      rating: 5
    },
    {
      name: "Jane Doe",
      text: "I was skeptical at first, but after trying the service I am a customer for life!",
      rating: 4
    },
    {
      name: "Bob Smith",
      text: "I have never seen such a great value for the price. I am so happy with my purchase!",
      rating: 5
    },
  ];

  return (
    <section>
      <h2>Customer Testimonials</h2>
      {testimonials.map(({ name, text, rating }, index) => (
        <div key={index} style={{ marginBottom: "30px" }}>
          <h3>{name}</h3>
          <p>{text}</p>
          <p>Rating: {rating}/5</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;
