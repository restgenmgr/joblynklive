import React from "react";
const Jobs = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Job Listings</h1>
        <p className="text-slate-600 mb-8">Find the best hospitality and service jobs across India.</p>
        <div className="grid gap-6">
          {["Hotel Manager - Mumbai", "Operations Executive - Delhi", "Front Desk Officer - Bangalore", "F&B Supervisor - Pune", "Housekeeping Manager - Goa"].map((job, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800">{job}</h3>
              <p className="text-slate-500 mt-2">Full Time | Experience: 2-5 years</p>
              <button className="mt-4 bg-yellow-500 text-slate-900 px-6 py-2 rounded-lg font-semibold">Apply Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Jobs;
