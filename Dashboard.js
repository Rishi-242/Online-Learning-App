/*import React from 'react';

function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <p>Welcome back! Here are your courses.</p>
    </div>
  );
}

export default Dashboard;
*/
/*import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg text-gray-700">Welcome back! Here are your courses.</p>
    </div>
  );
};

export default Dashboard;
*/


import React from 'react';

function Dashboard() {
  const user = JSON.parse(localStorage.getItem('currentUser'));

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h2>Welcome to your Dashboard, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
    </div>
  );
}

export default Dashboard;

