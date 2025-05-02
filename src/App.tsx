import React from 'react';
import { Cloud, Terminal, Shield, Zap, ChevronRight, Menu, Github, Twitter, Linkedin, Check, Database, Globe, Server, Code, Cpu } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Cloud className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">CloudDeploy</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Platform</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Pricing</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Documentation</a>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Deploy your apps with confidence
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Scale your applications effortlessly with our modern cloud platform. Built for developers, trusted by enterprises.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors flex items-center">
                Start Free Trial <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-gray-500 text-gray-300 px-8 py-3 rounded-md text-lg font-medium hover:border-gray-400 hover:text-white transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-700/30 p-8 rounded-lg backdrop-blur-sm">
              <Terminal className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Easy Deployment</h3>
              <p className="text-gray-300">Deploy your applications with a single command. Support for all major frameworks and languages.</p>
            </div>
            <div className="bg-slate-700/30 p-8 rounded-lg backdrop-blur-sm">
              <Shield className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-grade security with automated SSL, DDoS protection, and continuous monitoring.</p>
            </div>
            <div className="bg-slate-700/30 p-8 rounded-lg backdrop-blur-sm">
              <Zap className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Instant Scaling</h3>
              <p className="text-gray-300">Automatically scale your applications based on demand. Pay only for what you use.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Built for Modern Development</h2>
            <p className="text-xl text-gray-300">Support for all your favorite technologies and frameworks</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Code className="h-8 w-8" />, name: "Node.js" },
              { icon: <Globe className="h-8 w-8" />, name: "Python" },
              { icon: <Database className="h-8 w-8" />, name: "Ruby" },
              { icon: <Server className="h-8 w-8" />, name: "Java" },
              { icon: <Cpu className="h-8 w-8" />, name: "Go" },
              { icon: <Terminal className="h-8 w-8" />, name: "PHP" },
              { icon: <Code className="h-8 w-8" />, name: ".NET" },
              { icon: <Server className="h-8 w-8" />, name: "Rust" },
            ].map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-6 bg-slate-800/50 rounded-lg">
                <div className="text-blue-500 mr-3">{tech.icon}</div>
                <span className="text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300">Choose the plan that best fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$29",
                features: ["1 Application", "2GB RAM", "10GB Storage", "Custom Domain", "SSL Certificate"],
              },
              {
                name: "Professional",
                price: "$99",
                features: ["5 Applications", "8GB RAM", "50GB Storage", "Custom Domains", "Priority Support"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: ["Unlimited Apps", "Custom RAM", "Custom Storage", "24/7 Support", "SLA Guarantee"],
              },
            ].map((plan, index) => (
              <div key={index} className="bg-slate-700/30 p-8 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-white mb-6">{plan.price}<span className="text-lg text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-blue-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted by Developers</h2>
            <p className="text-xl text-gray-300">See what our customers have to say</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "CloudDeploy has transformed how we deploy our applications. The automated scaling is a game-changer.",
                author: "Sarah Chen",
                role: "CTO at TechStart",
              },
              {
                quote: "The best deployment platform we've used. Simple, reliable, and incredibly powerful.",
                author: "Marcus Johnson",
                role: "Lead Developer at ScaleUp",
              },
              {
                quote: "Outstanding support and rock-solid infrastructure. Couldn't be happier with our choice.",
                author: "Emily Rodriguez",
                role: "DevOps Engineer at Enterprise Co",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <p className="text-gray-300 mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-white/90 mb-8">Join thousands of developers who trust CloudDeploy for their applications</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <Cloud className="h-8 w-8 text-blue-500" />
                <span className="ml-2 text-xl font-bold text-white">CloudDeploy</span>
              </div>
              <p className="text-gray-400 mb-4">Modern cloud platform for developers and enterprises. Deploy, scale, and manage your applications with ease.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Customer Stories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">CLI Tools</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 CloudDeploy. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;