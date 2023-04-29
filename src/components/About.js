import React from "react";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>This is a sample React application that demonstrates how to use React Router for client-side routing.</p>
      <p>The application has a simple navigation menu that allows the user to navigate between the home page, the about page, and the login page. If the user is not logged in and tries to access the home page directly, they will be redirected to the login page.</p>
    </div>
  );
}

export default About;