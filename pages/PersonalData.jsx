'use client'
import Navbar from "@/Components/Navbar";
import React, { useState, useEffect } from "react";
import Cookies from 'js-cookie';

function PersonalData() {
  const email = Cookies.get('Email'); // Fixed typo from 'emial' to 'email'
  
  const [formData, setFormData] = useState({
    Email: email,
    Glucose: '',
    Cholesterol: '',
    Hemoglobin: '',
    WhiteBloodCells: '',
    Platelets: '',
    RedBloodCells: '',
    Insulin: '',
    BMI: '',
    BloodPressure: '',
    HeartRate: '',
    date: new Date().toISOString() // Initial date in ISO format
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Update date before submitting
    setFormData((prevData) => ({
      ...prevData,
      date: new Date().toISOString()
    }));

    try {
      const response = await fetch('/api/postFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log('Form submitted successfully:', result);
      const res = await fetch(' http://127.0.0.1:5000/post-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(await res.json());
      
      setFormData({
        Email: email,
        Glucose: '',
        Cholesterol: '',
        Hemoglobin: '',
        WhiteBloodCells: '',
        Platelets: '',
        RedBloodCells: '',
        Insulin: '',
        BMI: '',
        BloodPressure: '',
        HeartRate: '',
        date: new Date().toISOString() // Reset date on form reset
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  return (
    <div className="flex flex-col justify-center">
      <Navbar active={"ShareReport"} />
      <div className="w-10/12 mt-8 shadow-xl self-center flex flex-col">
        <h1 className="self-center font-medium text-gray-900 text-2xl">
          Health Tracker Survey
        </h1>
        <p className="text-md px-2 self-center font-medium">General Information</p>
        <form onSubmit={handleSubmit}>
          <main className="flex flex-col gap-2 mt-2 pb-2">
            {/* Define each section with form fields */}
            <section className="flex flex-row gap-4 px-10 justify-between">
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="Glucose" className="text-sm text-nowrap">
                  Glucose Level:
                </label>
                <input
                  type="number"
                  id="Glucose"
                  name="Glucose"
                  value={formData.Glucose}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="Cholesterol" className="text-sm text-nowrap">
                  Cholesterol Level:
                </label>
                <input
                  type="number"
                  id="Cholesterol"
                  name="Cholesterol"
                  value={formData.Cholesterol}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
            </section>
            <section className="flex flex-row gap-4 px-10 justify-between">
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="Hemoglobin" className="text-sm text-nowrap">
                  Hemoglobin Level:
                </label>
                <input
                  type="number"
                  id="Hemoglobin"
                  name="Hemoglobin"
                  value={formData.Hemoglobin}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="WhiteBloodCells" className="text-sm text-nowrap">
                  WBC Level:
                </label>
                <input
                  type="number"
                  id="WhiteBloodCells"
                  name="WhiteBloodCells"
                  value={formData.WhiteBloodCells}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
            </section>
            <section className="flex flex-row gap-4 px-10 justify-between">
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="Platelets" className="text-sm text-nowrap">
                  Platelets Level:
                </label>
                <input
                  type="number"
                  id="Platelets"
                  name="Platelets"
                  value={formData.Platelets}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="RedBloodCells" className="text-sm text-nowrap">
                  Red Blood Cells Level:
                </label>
                <input
                  type="number"
                  id="RedBloodCells"
                  name="RedBloodCells"
                  value={formData.RedBloodCells}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
            </section>
            <section className="flex flex-row gap-4 px-10 justify-between">
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="Insulin" className="text-sm text-nowrap">
                  Insulin Level:
                </label>
                <input
                  type="number"
                  id="Insulin"
                  name="Insulin"
                  value={formData.Insulin}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="BMI" className="text-sm text-nowrap">
                  BMI Level:
                </label>
                <input
                  type="number"
                  id="BMI"
                  name="BMI"
                  value={formData.BMI}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
            </section>
            <section className="flex flex-row gap-4 px-10 justify-between">
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="BloodPressure" className="text-sm text-nowrap">
                  Blood Pressure Level:
                </label>
                <input
                  type="number"
                  id="BloodPressure"
                  name="BloodPressure"
                  value={formData.BloodPressure}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
              <div className="w-72 flex flex-row p-2 justify-between">
                <label htmlFor="HeartRate" className="text-sm text-nowrap">
                  Heart Rate Level:
                </label>
                <input
                  type="number"
                  id="HeartRate"
                  name="HeartRate"
                  value={formData.HeartRate}
                  onChange={handleChange}
                  placeholder="Value"
                  className="w-32 placeholder:text-sm px-2 text-center self-center border-b-[0.3vh] rounded-lg border-black"
                />
              </div>
            </section>
          <button type="submit" className="self-center mt-4 px-4 py-2 bg-cyan-700 font-medium active:scale-95 text-white rounded-lg">
            Submit
          </button>
          </main>
        </form>
      </div>
    </div>
  );
}

export default PersonalData;
