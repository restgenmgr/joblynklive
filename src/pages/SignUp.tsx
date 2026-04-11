import React from "react";
const SignUp = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Create Account</h1>
        <p className="text-slate-500 text-center mb-6">Join thousands of job seekers on Joblynk</p>
        <div className="grid gap-4">
          <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Full Name" />
          <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Email Address" type="email" />
          <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Mobile Number" type="tel" />
          <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="City & State" />
          <input className="border border-slate-200 p-3 rounded-lg w-full" placeholder="Target Job Role" />
          <button className="bg-yellow-500 text-slate-900 py-3 rounded-lg font-semibold w-full">Sign Up</button>
          <p className="text-center text-slate-500 text-sm">Already have an account? <a href="/support" className="text-yellow-600 font-semibold">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
