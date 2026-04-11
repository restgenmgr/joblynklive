import React from "react";
const ResumeTools = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Resume Builder</h1>
        <p className="text-slate-600 mb-8">Create a professional resume in minutes.</p>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="grid gap-4">
            <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Full Name" />
            <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Email Address" />
            <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Phone Number" />
            <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Target Job Role" />
            <textarea className="border border-slate-200 p-3 rounded-lg w-full" rows={4} placeholder="Professional Summary"></textarea>
            <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Key Skills (comma separated)" />
            <a href="https://wa.me/919769351231?text=I need resume help" className="block text-center bg-yellow-500 text-slate-900 py-3 rounded-lg font-semibold">Submit & Get Resume via WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeTools;
