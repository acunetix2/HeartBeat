import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-green-700 via-emerald-600 to-green-500 w-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold mb-6"
        >
          Heartbeat SIEM
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl max-w-3xl mb-8"
        >
          Next-generation Security Information & Event Management.  
          Detect threats, analyze risks, and respond in real-time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <Button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200">
            Get Started <ArrowRight size={18} />
          </Button>
        </motion.div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-10 md:px-20 bg-gray-900 text-center">
        <h3 className="text-gray-400 uppercase text-sm mb-6">
          Trusted by leading organizations
        </h3>
        <div className="flex flex-wrap justify-center gap-12 opacity-80">
          <span className="text-lg font-semibold">🏦 BankCorp</span>
          <span className="text-lg font-semibold">🛡️ CyberSecure</span>
          <span className="text-lg font-semibold">☁️ CloudOps</span>
          <span className="text-lg font-semibold">📡 NetGuard</span>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-10 md:px-20 bg-gray-950">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Heartbeat?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Real-Time Monitoring",
              desc: "Track security events across your infrastructure in real time."
            },
            {
              title: "Threat Detection",
              desc: "Advanced analytics to detect anomalies and malicious activity."
            },
            {
              title: "Custom Dashboards",
              desc: "Visualize security insights with tailored dashboards and reports."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-green-600/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-green-400">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 md:px-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-300 mb-4">
              “Heartbeat SIEM gave us visibility into threats we didn’t even know existed. It’s a game-changer.”
            </p>
            <p className="text-green-400 font-semibold">— Alex, CISO at BankCorp</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-md"
          >
            <p className="text-gray-300 mb-4">
              “The dashboards and alerts are incredibly intuitive. Our SOC team is faster and more effective now.”
            </p>
            <p className="text-green-400 font-semibold">— Priya, Security Engineer at CloudOps</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-10 md:px-20 bg-gradient-to-r from-green-700 to-emerald-500 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Ahead of Threats</h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-100">
          Join organizations securing their digital heartbeat with our SIEM platform.
        </p>
        <Button className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-200">
          Request a Demo
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 px-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Heartbeat SIEM. All rights reserved.</p>
      </footer>
    </div>
  );
}
