import React, {useState} from "react"
const FormInput = ({ label, name, type = "text", value, onChange, required = false, error, placeholder, disabled = false }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
        error ? 'border-red-500' : 'border-gray-300'
      } ${disabled ? 'bg-gray-100' : ''}`}
      required={required}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);


export default FormInput