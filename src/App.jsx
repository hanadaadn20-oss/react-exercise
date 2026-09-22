import React from "react";

function App() {
  const courses = [
    {
      name: "React Fundamentals",
      progress: 75,
      next: "Next: Components & Props",
      teacher: "Sarah Wilson",
    },
    {
      name: "JavaScript Advanced",
      progress: 45,
      next: "Next: Async/Await",
      teacher: "Mike Johnson",
    },
    {
      name: "UI/UX Design",
      progress: 90,
      next: "Next: Color Theory",
      teacher: "Emily Chen",
    },
  ];

  const assignments = [
    {
      title: "Build a Todo App",
      course: "React Fundamentals",
      status: "pending",
      date: "Due 2024-03-20",
    },
    {
      title: "API Integration",
      course: "JavaScript Advanced",
      status: "completed",
      date: "Due 2024-03-18",
    },
    {
      title: "Design System",
      course: "UI/UX Design",
      status: "in-progress",
      date: "Due 2024-03-25",
    },
  ];

  return (
    <div className="app">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
          background: #ffffff;
          color: #1f1f1f;
        }

        .app {
          width: 100%;
          min-height: 100vh;
          background: #fff;
        }

        .container {
          width: 92%;
          max-width: 1250px;
          margin: 0 auto;
          padding: 35px 0;
        }

        /* HEADER */

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 38px;
        }

        .welcome h1 {
          font-size: 22px;
          margin-bottom: 7px;
          font-weight: 700;
        }

        .welcome p {
          color: #777;
          font-size: 13px;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .bell {
          font-size: 19px;
          color: #555;
        }

        .profile {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #b76b8d;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 13px;
          font-weight: bold;
        }

        /* STATS */

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #eee;
          border-radius: 5px;
          margin-bottom: 38px;
        }

        .stat {
          min-height: 85px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 25px;
          border-right: 1px solid #eee;
        }

        .stat:last-child {
          border-right: none;
        }

        .stat-icon {
          font-size: 20px;
          width: 25px;
        }

        .stat-label {
          color: #777;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 18px;
          font-weight: 700;
        }

        /* MAIN */

        .main {
          display: grid;
          grid-template-columns: 2.1fr 1fr;
          gap: 42px;
        }

        .section-title {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 27px;
        }

        /* COURSES */

        .course {
          margin-bottom: 32px;
        }

        .course-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .course-name {
          font-size: 14px;
          font-weight: 600;
        }

        .percentage {
          font-size: 12px;
          color: #555;
        }

        .progress-bg {
          width: 100%;
          height: 9px;
          background: #eeeeee;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress {
          height: 100%;
          background: #d2d2d2;
          border-radius: 10px;
        }

        .course-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          color: #777;
          font-size: 11px;
        }

        /* RIGHT SIDE */

        .right-section {
          border: 1px solid #eee;
          border-radius: 6px;
          overflow: hidden;
        }

        .assignments {
          padding: 0 18px 15px;
        }

        .assignment {
          padding: 12px 0;
          border-bottom: 1px solid #eee;
        }

        .assignment:last-child {
          border-bottom: none;
        }

        .assignment-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .assignment-title {
          font-size: 13px;
          font-weight: 600;
        }

        .assignment-course {
          font-size: 10px;
          color: #777;
          margin-top: 4px;
        }

        .assignment-date {
          font-size: 9px;
          color: #777;
          margin-top: 5px;
          text-align: right;
        }

        .status {
          font-size: 9px;
          padding: 4px 8px;
          border-radius: 10px;
          white-space: nowrap;
        }

        .pending {
          background: #f3e4e7;
          color: #9b6872;
        }

        .completed {
          background: #dfeee9;
          color: #668d80;
        }

        .in-progress {
          background: #eee9df;
          color: #958567;
        }

        /* ANNOUNCEMENTS */

        .announcements {
          margin-top: 25px;
          border: 1px solid #eee;
          border-radius: 6px;
          padding: 22px 20px;
        }

        .announcement {
          border-left: 3px solid #6a9bb8;
          padding-left: 14px;
          margin-bottom: 22px;
        }

        .announcement:last-child {
          margin-bottom: 0;
        }

        .announcement h3 {
          font-size: 13px;
          margin-bottom: 7px;
        }

        .announcement p {
          font-size: 11px;
          color: #666;
          margin-bottom: 5px;
        }

        .announcement small {
          font-size: 9px;
          color: #999;
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .container {
            width: 90%;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stat:nth-child(2) {
            border-right: none;
          }

          .stat:nth-child(1),
          .stat:nth-child(2) {
            border-bottom: 1px solid #eee;
          }

          .main {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        @media (max-width: 600px) {
          .container {
            width: 92%;
            padding: 25px 0;
          }

          .header {
            margin-bottom: 28px;
          }

          .welcome h1 {
            font-size: 18px;
          }

          .welcome p {
            font-size: 11px;
          }

          .header-right {
            gap: 12px;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .stat {
            padding: 15px;
            min-height: 75px;
          }

          .stat-icon {
            font-size: 16px;
          }

          .stat-label {
            font-size: 9px;
          }

          .stat-value {
            font-size: 15px;
          }

          .main {
            gap: 30px;
          }

          .section-title {
            margin-bottom: 22px;
          }

          .course-name {
            font-size: 12px;
          }

          .course-bottom {
            font-size: 9px;
          }

          .assignment-top {
            align-items: flex-start;
          }

          .assignment-title {
            font-size: 11px;
          }

          .assignment-course {
            font-size: 9px;
          }
        }

        @media (max-width: 400px) {
          .stats {
            grid-template-columns: 1fr;
          }

          .stat {
            border-right: none !important;
            border-bottom: 1px solid #eee;
          }

          .stat:last-child {
            border-bottom: none;
          }

          .header {
            align-items: flex-start;
          }

          .welcome h1 {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <header className="header">
          <div className="welcome">
            <h1>Welcome back, Student!</h1>
            <p>Here's what's happening with your courses today.</p>
          </div>

          <div className="header-right">
            <div className="bell">🔔</div>
            <div className="profile">S</div>
          </div>
        </header>

        {/* STATS */}
        <div className="stats">

          <div className="stat">
            <div className="stat-icon">▥</div>
            <div>
              <div className="stat-label">Average Grade</div>
              <div className="stat-value">88%</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon">📚</div>
            <div>
              <div className="stat-label">Courses</div>
              <div className="stat-value">3</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon">◷</div>
            <div>
              <div className="stat-label">Study Hours</div>
              <div className="stat-value">45h</div>
            </div>
          </div>

          <div className="stat">
            <div className="stat-icon">✎</div>
            <div>
              <div className="stat-label">Assignments</div>
              <div className="stat-value">12</div>
            </div>
          </div>

        </div>

        {/* MAIN */}
        <div className="main">

          {/* COURSE PROGRESS */}
          <section>
            <h2 className="section-title">Course Progress</h2>

            {courses.map((course, index) => (
              <div className="course" key={index}>

                <div className="course-top">
                  <div className="course-name">
                    {course.name}
                  </div>

                  <div className="percentage">
                    {course.progress}%
                  </div>
                </div>

                <div className="progress-bg">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <div className="course-bottom">
                  <span>{course.next}</span>
                  <span>{course.teacher}</span>
                </div>

              </div>
            ))}
          </section>

          {/* RIGHT */}
          <aside>

            <div className="right-section">

              <h2
                className="section-title"
                style={{
                  padding: "20px 18px 0",
                  marginBottom: "10px"
                }}
              >
                Upcoming Assignments
              </h2>

              <div className="assignments">

                {assignments.map((assignment, index) => (
                  <div className="assignment" key={index}>

                    <div className="assignment-top">

                      <div>
                        <div className="assignment-title">
                          {assignment.title}
                        </div>

                        <div className="assignment-course">
                          {assignment.course}
                        </div>
                      </div>

                      <span className={`status ${assignment.status}`}>
                        {assignment.status === "in-progress"
                          ? "in-progress"
                          : assignment.status}
                      </span>

                    </div>

                    <div className="assignment-date">
                      {assignment.date}
                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* ANNOUNCEMENTS */}
            <div className="announcements">

              <h2 className="section-title">
                Announcements
              </h2>

              <div className="announcement">
                <h3>New Course Available</h3>
                <p>Check out our new TypeScript course!</p>
                <small>2 hours ago</small>
              </div>

              <div className="announcement">
                <h3>Maintenance Notice</h3>
                <p>Platform updates scheduled for tonight.</p>
                <small>5 hours ago</small>
              </div>

            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}

export default App;