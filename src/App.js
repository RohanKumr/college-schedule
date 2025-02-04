import './App.css';
import React, { useState } from 'react'
import {
  COURSE_NAMES,
  MangementAndLeadership,
  CareerManagement,
  Capstone,
  WebTrends,
  WebSecuirityQualityAssurance,
  WCMS,
  dotNet,
  months,
  weeks
} from './enums';

import { nth } from './helpers';

const data = [
  ...MangementAndLeadership(),
  ...WebTrends(),
  ...dotNet(),
  ...CareerManagement(),
  ...WCMS(),
  ...WebSecuirityQualityAssurance(),
  ...Capstone(),
]

const colors = {
  [COURSE_NAMES.MANAGEMENT_LEADERSHIP]: "deeppink",
  [COURSE_NAMES.WEB_TRENDS]: 'white',
  [COURSE_NAMES.DOT_NET]: "#CCFF00",
  [COURSE_NAMES.CAREER_MANAGEMENT]: "orange",
  [COURSE_NAMES.WEB_SECURITY_QUALITY_ASSURANCE]: "aqua",
  [COURSE_NAMES.WCMS]: 'yellow',
  [COURSE_NAMES.CAPSTONE]: '#CF9FFF',
}

const strikeThroughIndexes = []; // Example indexes to strike through

function TasksTimeline() {

  const [filter, setFilter] = useState(null);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();



  // Function to convert month abbreviation to numeric index
  const getMonthIndex = (month) => months.indexOf(month.toLowerCase());

  // Function to parse date strings into JavaScript Date objects
  const parseDate = (day, month) => {
    const monthIndex = getMonthIndex(month);
    const year = monthIndex < currentMonth ? currentYear + 1 : currentYear; // Handle year transition
    return new Date(year, monthIndex, parseInt(day));
  };

  // Sort function to handle day and month comparisons
  const sortByDate = (a, b) => {
    const [dayA, monthA] = a.split(" - ").slice(0, 2).map((str) => str.trim());
    const [dayB, monthB] = b.split(" - ").slice(0, 2).map((str) => str.trim());
    const dateA = parseDate(dayA, monthA);
    const dateB = parseDate(dayB, monthB);
    return dateA - dateB;
  };

  const getTime = () => {
    const date = new Date()
    const dateToday = date.getDate()
    const d = dateToday + nth(dateToday)
    const w = weeks[date.getDay()]
    const m = months[date.getMonth()]
    return `${w}, ${d} ${m}`
  }


  if(!data || data.length === 0)
    return (
      <div className="timeline-container">
        <h1>{ getTime() }</h1>
        <div>No tasks left!</div>
      </div>
    );

  data.sort(sortByDate);

  let prevMonth = null;

  return (
    <div className="timeline-container">
      <h1>{ getTime() }</h1>

      <div className="filter-group">
        <button
          className={ `filter-buttons ${!filter && 'filter-buttons-active'}` }
          onClick={ () => setFilter(null) }
        >All </button>
        { Object.values(COURSE_NAMES)
          .map((course) =>
            <button
              key={ course }
              onClick={ () => setFilter(course) }
              className={ `filter-buttons ${(course === filter) && 'filter-buttons-active'}` }
            >
              { course }
            </button>
          ) }
      </div>

      <table>
        <thead>
          <tr style={ { borderBottom: "2px solid #000" } }>
            <th>Date</th>
            <th>Month</th>
            <th>Week</th>
            <th>Course</th>
            <th>%</th>
            <th>Task</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          { data.length !== 0
            ? data.filter((item) => {
              const [day, month, course, weightage, task] = item
                .split(" - ")
                .map((str) => str.trim());

              if(!filter) return true;
              return course === filter;

            }).map((item, idx) => {
              const [day, month, course, weightage, task] = item
                .split(" - ")
                .map((str) => str.trim());
              const taskDate = parseDate(day, month);
              const taskWeekday = weeks[taskDate.getDay()];
              const daysDifference = Math.ceil(
                (taskDate - currentDate) / (1000 * 60 * 60 * 24)
              );
              if(daysDifference < -1) return null;

              const isStrikeThrough =
                taskDate < currentDate || strikeThroughIndexes.includes(idx);
              const lastMonth = prevMonth;
              prevMonth = month;

              if(daysDifference > 100) return null

              return (

                <>
                  { months.indexOf(lastMonth) < months.indexOf(month) && <tr><td>{ month }</td></tr> }
                  <tr key={ idx }>
                    <td
                      style={ {
                        background:
                          daysDifference >= -1 && daysDifference <= 3
                            ? daysDifference <= 1
                              ? "rgba(255, 32, 32, 0.7)"
                              : "#FFEAEB"
                            : "white",
                        color: "black",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        textAlign: "right",
                        textDecoration: isStrikeThrough ? "line-through" : "none",
                      } }
                    >
                      { day }
                    </td>
                    <td>{ month }</td>
                    <td>{ taskWeekday }</td>
                    <td
                      style={ {
                        textAlign: "left",
                        textDecoration: isStrikeThrough ? "line-through" : "none",
                        background: colors[course.toLowerCase()],
                      } }
                    >
                      <div className="tag" style={ { background: colors[course] } } ></div>
                      { course }
                    </td>
                    <td
                      style={ {
                        textAlign: "right",
                        textDecoration: isStrikeThrough ? "line-through" : "none",
                      } }
                    >
                      { weightage }
                    </td>
                    <td
                      style={ {
                        textAlign: "left",
                        textDecoration: isStrikeThrough ? "line-through" : "none",
                      } }
                    >
                      { task }
                    </td>
                    <td
                      style={ {
                        textAlign: "right",
                        textDecoration: isStrikeThrough ? "line-through" : "none",
                      } }
                    >
                      { daysDifference }
                    </td>
                  </tr>
                </>

              );
            })
            : "List is empty" }
        </tbody>
      </table>
    </div>
  );
}

/* To Do List */
const list = [
  'Upgrade Projects and host',
  'Fix portfolio',
]

const completedList = [
  'Fix portfolio',
]

function todoList() {
  if(list.length == 0) return <div></div>;

  return <div class="todo-container">
    <h1>Todos</h1>
    { list.map(task => <p>{ task }</p>) }
  </div>

}
function App() {
  return (
    <div className="App">
      <div class="container">
        {/* { tasksTimeline() } */ }
        <TasksTimeline />
        {/* { todoList() } */ }
      </div>)
    </div>
  );
}

export default App;
