import React from "react";
const PayPortal = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Pay Portal</h1>
        <p className="text-slate-600 mb-8 text-center">Choose your plan and get started today.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
            <h2 className="text-2xl font-bold mb-2">Starter Pack</h2>
            <p className="text-4xl font-black text-yellow-500 mb-4">49</p>
            <ul className="space-y-2 mb-6 text-slate-600">
              <li>✓ Basic resume format</li>
              <li>✓ Standard cover letter</li>
              <li>✓ 20 employer contacts</li>
              <li>✓ Email-ready documents</li>
            </ul>
            <a href="https://wa.me/919769351231" className="block text-center bg-slate-900 text-white py-3 rounded-lg font-semibold">Select 49 Plan</a>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-2 border-yellow-500">
            <h2 className="text-2xl font-bold mb-2">Premium Pack</h2>
            <p className="text-4xl font-black text-yellow-500 mb-4">99</p>
            <ul className="space-y-2 mb-6 text-slate-600">
              <li>✓ Professional resume</li>
              <li>✓ Custom cover letter</li>
              <li>✓ 20 curated contacts</li>
              <li>✓ Editable Word & PDF</li>
              <li>✓ Priority delivery</li>
            </ul>
            <a href="https://wa.me/919769351231" className="block text-center bg-yellow-500 text-slate-900 py-3 rounded-lg font-semibold">Select 99 Plan</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PayPortal;
