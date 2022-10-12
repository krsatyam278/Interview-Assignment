import React from "react";

function HomePage() {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        Welcome ! <br />
        Follows the steps to
        <br />
        Schedule the Interview <br />
      </h2>
      <span class="badge bg-secondary">Step: 1</span>
      <div class="alert alert-primary" role="alert">
        Click to <b>Upcoming Interview</b> to view Scheduled Interview
      </div>
      <br />
      <span class="badge bg-secondary">Step: 2</span>
      <div class="alert alert-success" role="alert">
        Click to <b>Schedule Interview</b> to create a new Interview
      </div>
    </div>
  );
}

export default HomePage;
