import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
      {/* <!-- Navigation Bar --> */}

{/* <!-- Changed nav bar color in css using class="bg-light" --> */}
<nav class="navbar navbar-expand-lg navbar-light bg-light">

    {/* <!-- Clicking name will take user to About Me page --> */}
    <a class="navbar-brand heading" href="index.html">Christina C. Starr</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">

  {/* <!-- Named and linked About Me Page --> */}
        <li class="nav-item active heading">
          <a class="nav-link" href="index.html">About Me<span class="sr-only">(current)</span></a>
        </li>
        
  {/* <!-- Named and linked Portfolio Page --> */}
        <li class="nav-item active heading">
        <a class="nav-link" href="portfolio.html">Portfolio<span class="sr-only">(current)</span></a>
        </li>

  {/* <!-- Named and linked Contact Page --> */}
       <li class="nav-item active heading">
       <a class="nav-link" href="contact.html">Contact<span class="sr-only">(current)</span></a>
      </li>
      
         {/* <!-- Named and linked Resume Page --> */}
         <li class="nav-item active heading">
          <a class="nav-link" href="resume.html">Resume<span class="sr-only">(current)</span></a>
         </li>
     </ul>
    </div>
  </nav>
     <p>Hello World</p>
    </div>
  );
}

export default App;
