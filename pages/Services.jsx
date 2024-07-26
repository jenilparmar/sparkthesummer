import Navbar from "@/Components/Navbar";
import ServiceComp from "@/Components/ServiceComp";
import React from "react";

function Services() {
  return (
    <div>
      <Navbar active={"Services"} />
      <section className="text-gray-600 body-font">
        <div className="container px-5 gap-8 flex flex-col py-24 mx-auto">
          <div className="flex flex-wrap justify-center gap-10 -m-4">
            <ServiceComp
              imageSrc={"https://blog.ipleaders.in/wp-content/uploads/2020/01/Health-Insurance.jpg"}
              Name={"CareIntel"}
              Service={"PersonalData"}

              disc={
                "Comprehensive Analysis and Responsive Evaluation for Integrated Health Insights"
              }
            />
            <ServiceComp
              imageSrc={"https://images.moneycontrol.com/static-mcnews/2022/09/Health-insurance.png?impolicy=website&width=1600&height=900"}
              Name={"REHAB "}
              Service={""}

              disc={" Responsive Emotional Help & Advisory Bot"}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-10 -m-4">
            <ServiceComp
              imageSrc={"https://images.indianexpress.com/2023/06/Dil-LEAD.jpg"}
              Name={"AUSHADHI "}
              Service={""}
              disc={
                " Advanced Utility System for Scheduling and Healthcare Dosage Insights"
              }
            />
            <ServiceComp
              imageSrc={"https://regencyhealthcare.in/wp-content/uploads/2019/09/03_09_Sept_blog.jpg"}
              Name={"MANAS"}
              Service={""}

              disc={"Mental Analysis for Nations & Advancing Societies"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
