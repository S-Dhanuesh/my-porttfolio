"use client";
import Head from "next/head";
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>Dhanuesh | Portfolio</title>
      </Head>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/PHOTO-Dhanuesh.jpeg"
            alt="Dhanuesh S"
            width={150}
            height={150}
            className="rounded-full border-4 border-blue-400 shadow-lg"
          />
        </motion.div>
        <motion.h1 
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Dhanuesh S
        </motion.h1>
        <p className="text-2xl mt-3 text-gray-300">Software Developer | Machine Learning Enthusiast</p>
        <div className="flex mt-5 space-x-5">
          <a href="mailto:dhanuesh4302@gmail.com" className="text-blue-400 hover:text-blue-300 text-3xl transition duration-300">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/dhanush-s-a9a549250" target="_blank" className="text-blue-400 hover:text-blue-300 text-3xl transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="p-12 text-center">
        <h2 className="text-4xl font-semibold text-purple-300">Technical Skills</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-lg">
          <p>C, C++, Java, Python</p>
          <p>HTML, CSS, JavaScript, Angular, Django</p>
          <p>Machine Learning: XGBoost, SVC, CNN, GRU, LSTM</p>
          <p>Database: MySQL, MongoDB</p>
          <p>Tools: VS Code, Git</p>
          <p>Cloud: Oracle Cloud Infrastructure</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-12 text-center bg-gray-800 rounded-lg shadow-lg mx-5 my-8">
        <h2 className="text-4xl font-semibold text-green-300">Projects</h2>
        <div className="mt-6 space-y-6">
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-blue-400">Estimation of Remaining Useful Lifetime (RUL) for Machinery</h3>
            <p className="text-gray-300 mt-2">This project aims to predict the remaining useful lifetime of industrial machinery using deep learning. By leveraging **GRU (Gated Recurrent Units)** and **LSTM (Long Short-Term Memory)** models, the system can analyze past operational data and forecast when a machine is likely to fail. This predictive maintenance approach helps industries **reduce downtime**, **optimize maintenance schedules**, and **minimize costs**. The final model achieved an accuracy of **85%**, significantly improving decision-making for maintenance teams.</p>
          </div>
          <div className="p-6 bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <h3 className="text-2xl font-bold text-blue-400">Machine Monitoring System Using ML</h3>
            <p className="text-gray-300 mt-2">Developed an **AI-powered monitoring system** that analyzes the health of hydraulic machines by detecting performance anomalies. The system uses **XGBoost, SVC (Support Vector Classification), and CNN (Convolutional Neural Networks)** to assess **oil purity, vibration patterns, and temperature fluctuations**. By providing real-time alerts, this solution **reduces unplanned failures by 15%**, **improves operational efficiency**, and **ensures timely maintenance**. The web interface allows engineers to visually inspect the machine health and take preventive actions proactively.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="p-12 text-center">
        <h2 className="text-4xl font-semibold text-yellow-300">Education</h2>
        <p className="text-lg text-gray-300 mt-4">Bachelor of Computer Science and Engineering | Sri Ramakrishna Engineering College | 2021 – 2025</p>
        <p className="text-lg text-gray-300 mt-2">CGPA: 7.2</p>
      </section>

      {/* Certifications Section */}
      <section className="p-12 text-center bg-gray-800 rounded-lg shadow-lg mx-5 my-8">
        <h2 className="text-4xl font-semibold text-red-300">Certifications</h2>
        <p className="text-lg text-gray-300 mt-4">Business English Preliminary Certification (Cambridge Assessment English)</p>
        <p className="text-lg text-gray-300 mt-2">Completed Web Development Bootcamp (Udemy)</p>
        <p className="text-lg text-gray-300 mt-2">Oracle Cloud Infrastructure Generative AI Professional</p>
      </section>

      {/* Languages Section */}
      <section className="p-12 text-center">
        <h2 className="text-4xl font-semibold text-blue-300">Languages</h2>
        <p className="text-lg text-gray-300 mt-4">English, Tamil, Hindi</p>
      </section>
    </div>
  );
}
