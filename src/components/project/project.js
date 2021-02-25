import React from "react";
import "./style.css";
import EmployeeDirectory from "./../../Assets/Images/EmployeeDirectory.gif";
import BudgetTracker from "./../../Assets/Images/BudgetTracker.gif";
import eatdaburger from "./../../Assets/Images/eatdaburger.gif";
import yourdigitalelf from "./../../Assets/Images/yourdigitalelf.gif";
import WorkoutTracker from "./../../Assets/Images/WorkoutTracker.gif";
import readmeGenerator from "./../../Assets/Images/readmeGenerator.gif";
import ddb from "./../../Assets/Images/dumbbells and donuts.gif";
import schedule from "./../../Assets/Images/schedule.gif";
import weather from "./../../Assets/Images/weather.gif";
import Code_Quiz from "./../../Assets/Images/Code_Quiz.gif";
import employeeTracker from "./../../Assets/Images/employeeTracker.gif";


function Project () {
    return (

        <div class="container ml-5 mb-5 mt-5">
        <div class="row">
          <div class="portfolio col-lg-12 pl-5 pr-5 pb-5 mb-5 mx-3">
            
              <h1>Portfolio</h1>
                <p id="title-grey">Please click the gif image for the project deployed page!</p>
            
            <div class="row">
              
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/EmployeeDirectory">
                  <p class="hover">Employee Directory [GitHub URL]</p>
                </a>
                <a href="https://jesshuang7.github.io/EmployeeDirectory//"><img src={EmployeeDirectory}
                    alt="employeeDirectory" style={{width:"100%"}} class="img-responsive"/></a>
              </div>
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/BudgetTracker">
                  <p class="hover">Budget Tracker [GitHub URL]</p>
                </a>
                <a href="https://whispering-wave-61907.herokuapp.com/"><img
                  src={BudgetTracker} alt="BudgetTracker" style={{width:"100%"}}
                  class="img-responsive"/></a>
                </div>
    
            </div>
            <div class="row">
              
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/WorkoutTracker">
                  <p class="hover">Workout Tracker [GitHub URL]</p>
                </a>
                <a href="https://afternoon-sierra-95298.herokuapp.com/?id=6005edf4a76b920015d0ad60"><img src={WorkoutTracker}
                    alt="WorkoutTracker" style={{width:"100%"}} class="img-responsive"/></a>
              </div>
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/yourDigitalElf/yourDigitalElf">
                  <p class="hover">Your Digital Elf [GitHub URL]</p>
                </a>
                <a href="https://fast-anchorage-28495.herokuapp.com/"><img
                  src={yourdigitalelf} alt="yourDigitalElf" style={{width:"100%"}}
                  class="img-responsive"/></a>
                </div>
    
            </div>
            <div class="row">
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/eatDaBurger">
                    <p class="hover">Eat-Da-Burger [GitHub URL]</p>
                </a>
                <a href="https://intense-brushlands-73408.herokuapp.com/"><img src=
                {eatdaburger} alt="earDaBurger"
                  style={{width:"100%"}} class="img-responsive"/></a>
              </div>
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/employeeTracker">
                  <p class="hover">Employee Tracker [GitHub URL]</p>
                </a>
                <div id="img_wrap" class="static"> 
                  <a href="">
                    <img id="animated" src={employeeTracker}
                      alt="employeeTracker" style={{width:"100%"}} class="img-responsive" />
                  </a>
                </div>
              </div>
            </div>
            
            <div class="row">
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/Alischrec/Dumbbells_and_Donuts">
                  <p class="hover">Dumbbells and Donuts [GitHub URL]</p>
                </a>
                <a href="https://alischrec.github.io/Dumbbells_and_Donuts/"><img
                    src={ddb} alt="Dumbbells_and_Donuts" style={{width:"100%"}}
                    class="img-responsive"/></a>
              </div>
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://jesshuang7.github.io/WeatherDashboardAPI/">
                  <p class="hover">Weather Dashboard API [GitHub URL]</p>
                </a>
                <a href="https://jesshuang7.github.io/WeatherDashboardAPI/"><img src={weather}
                    alt="WeatherDashboardAPI" style={{width:"100%"}} class="img-responsive" /></a>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/Work_Day_Schedule">
                  <p class="hover">Work Day Schedule [GitHub URL]</p>
                </a>
                <a href="https://jesshuang7.github.io/Work_Day_Schedule/"><img src={schedule}
                    alt="Work_Day_Schedule" style={{width:"100%"}} class="img-responsive"/></a>
              </div>
    
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/Code_Quiz">
                  <p class="hover">Code Quiz [GitHub URL]</p>
                </a>
                <a href="https://jesshuang7.github.io/Code_Quiz/"><img src={Code_Quiz}
                    style={{width:"100%"}} class="img-responsive"/></a>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-5 my-3 mx-3">
                <a class="no-underline" href="https://github.com/jesshuang7/readmeGenerator">
                  <p class="hover">Readme Generator [GitHub URL]</p>
                </a>
                <div id="img_wrap" class="static"> 
                  <a href="">
                    <img id="animated" src={readmeGenerator}
                      alt="" style={{width:"100%"}} class="img-responsive" />
                  </a>
                </div>
              <div class="col-lg-5 my-3 mx-3">
               
              </div>
              </div>
            </div>
            
          </div>
          
        </div>
       
      </div>
    
    )
}

export default Project;