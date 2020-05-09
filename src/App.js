import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from "./components/Card";
// import "./images";
import Bio from "./components/Bio";
import ProfImg from "./components/ProfImg";
import Resume from "./images/resumePdf.pdf";



function App() {


  function portfolio() {
    var el = [
      { href: "https://jordan-hanson.github.io/GroupProject/", class: "one", text: "Coffee Finder", ifRepo: "https://github.com/jordan-hanson/GroupProject" },

      { href: "https://Atravias.github.io/Weather-Dashboard", class: "two", text: "Weather Dashboard", ifRepo: "https://github.com/Atravias/Weather-Dashboard" },

      { href: "https://scratch.mit.edu/users/Attaborley/", class: "five", text: "Scratch Game", ifRepo: "none" },

      { href: "https://github.com/Atravias", class: "four", text: "Github" },

      { href: "https://github.com/blaurel93/QuizProject", class: "three", text: "Quizzly: Project 3", ifRepo: "https://github.com/blaurel93/QuizProject" },

      { href: Resume, class: "six", text: "Resume" },

      { href: "https://github.com/Atravias/EatTheBurger", class: "seven", text: "Eat A Burger!", ifRepo: "https://github.com/Atravias/EatTheBurger" },

      { href: "https://github.com/Atravias/WorkoutTracker", class: "eight", text: "Workout Tracker!", ifRepo: "https://github.com/Atravias/WorkoutTracker" },

      { href: "https://github.com/Atravias/EmployeeOrganizer", class: "nine", text: "Employee Organizer!", ifRepo: "https://github.com/Atravias/EmployeeOrganizer" }

    ];
    var result = [];


    for (let i = 0; i < el.length; i++) {
      // console.log(el.length)

      if (el[i].ifRepo === "none") {

        result.push(<Card text={el[i].text} href={el[i].href} class={el[i].class} />)
      } else {
        result.push(<Card text={el[i].text} href={el[i].href} class={el[i].class} ifRepo={el[i].ifRepo} />)
      }


    }

    return result;
  }
  return (
    <div className="container">
      <div class="abtme">Portfolio</div>
      <div className="wrapper">
        {portfolio()}
      </div>
      <div className="BigCont">
        <div className="getBio">
          <Bio />

        </div>
        <div className="getProfImg"><ProfImg /></div>
      </div>
      <div>
        <div className="footer"></div>
      </div>

    </div >
  );
}


export default App;
