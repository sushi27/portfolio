import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-purple-400 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Email</h4>
                    <p className="text-gray-400">contact@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-purple-400 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Phone</h4>
                    <p className="text-gray-400">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-purple-400 mr-4 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-300">Location</h4>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium text-purple-300 mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  {['github', 'linkedin', 'twitter', 'dribbble'].map((social, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="w-10 h-10 rounded-full bg-purple-900 bg-opacity-50 flex items-center justify-center text-purple-300 hover:text-purple-100 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.form
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 bg-opacity-50 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">Send Me a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Hello, I would like to talk about..."
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold shadow-lg"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;