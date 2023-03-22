import React from "react";
import ContentC from "../components/ContentC";

const data = [
  {
    heading: "Hey Students",
    description: "Welcome to Day 1 React course",
  },
  {
    heading: "Day 1s",
    description: "What is React?",
  },
  {
    heading: "Day 3",
    description: "Javascript vs React and its working",
  },
];

// CREATING A  FUNCTIONAL COMPONENT
function ContentPage() {
  return (
    <div>
      {data.map((element, index) => (
        <ContentC
          key={`CP-contactC-${index}`}
          heading={element.heading}
          description={element.description}
        />
      ))}
    </div>
  );
}

export default ContentPage;
