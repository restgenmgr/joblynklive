import React from "react";
const Pricing = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple Pricing</h1>
        <p className="text-slate-600 mb-12">Affordable job support starting at just 49.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">Starter</h2>
            <p className="text-5xl font-black text-yellow-500 mb-6">49</p>
            <ul className="space-y-3 text-left mb-8 text-slate-600">
              <li>✓ Basic resume format</li>
              <li>✓ Standard cover letter</li>
              <li>✓ 20 employer contacts</li>
              <li>✓ 1-time delivery</li>
            </ul>
            <a href="/payportal" className="block bg-slate-900 text-white py-3 rounded-lg font-semibold">Get Started</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-2 border-yellow-500">
            <div className="bg-yellow-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
            <h2 className="text-2xl font-bold mb-2">Premium</h2>
            <p className="text-5xl font-black text-yellow-500 mb-6">99</p>
            <ul className="space-y-3 text-left mb-8 text-slate-600">
              <li>✓ Professional resume</li>
              <li>✓ Custom cover letter</li>
              <li>✓ Editable Word & PDF</li>
              <li>✓ Priority delivery</li>
              <li>✓ Minor custom edits</li>
            </ul>
            <a href="/payportal" className="block bg-yellow-500 text-slate-900 py-3 rounded-lg font-semibold">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
