import React, { useState, useEffect, useRef } from 'react';

const CyberSecurity = () => {
  const [showFloatCta, setShowFloatCta] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const toolsRef = useRef(null);

  const themeColors = {
    background: '#0f172a',
    surface: '#0f172a',
    surface17: 'rgba(15, 23, 42, 0.7)',
    text: '#e2e8f0',
    textMuted: '#94a3b8',
    primary: '#6C63FF',
    primaryDark: '#554fee',
    secondary: '#FF6584',
    accent: '#6C63FF',
    cyan: '#22d3ee',
    cyanDark: '#0ea5e9',
    green: '#22c55e',
    border: '#1e293b',
    gradientA: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
    gradientB: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
    gradientC: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
    gradientD: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
    textGradient: 'linear-gradient(90deg, #6C63FF 0%, #FF6584 100%)',
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatCta(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    // SEO meta info
    document.title = 'Cyber Security Course in Coimbatore | Placement Support';
    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', 'Join Cyber Security Course in Coimbatore with placement support. Learn ethical hacking, real-time projects & get job-ready. Enroll today at Peopleclick.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join Cyber Security Course in Coimbatore with placement support. Learn ethical hacking, real-time projects & get job-ready. Enroll today at Peopleclick.';
      document.head.appendChild(meta);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = toolsRef.current;
    if (!el) return;
    if (window.innerWidth >= 768) return;

    let index = 0;
    const cardWidth = 240; // should equal min-w size + gap
    const interval = setInterval(() => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const nextScroll = index * cardWidth;
      if (nextScroll > maxScroll) {
        index = 0;
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollTo({ left: nextScroll, behavior: 'smooth' });
        index += 1;
      }
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // SVG Icons
  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" style={{ stroke: 'url(#grad)' }} />
    </svg>
  );

  const FormCheckIcon = () => (
    <svg className="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ stroke: 'url(#iconGrad)' }}>
      <defs>
        <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#6C63FF', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#FF6584', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div
      className="min-h-screen text-slate-200 font-sans"
      style={{
        backgroundColor: themeColors.background,
        color: themeColors.text,
        '--pc-text-muted': themeColors.textMuted,
        '--pc-border': themeColors.border,
        '--pc-surface': themeColors.surface,
      }}
    >
      
      {/* ── Salso TICKY HEADER ── */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-xl md:text-2xl font-black tracking-tight text-white w-full sm:w-auto text-center sm:text-left">
            PEOPLECLICK <span className="text-transparent bg-clip-text" style={{ backgroundImage: themeColors.textGradient }}>LEARNING</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-end gap-2 w-full sm:w-auto">
            <a href="tel:+918925449073" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 text-white font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5 shadow-lg shadow-purple-500/30 border border-indigo-500/40 min-w-0"
              style={{ backgroundImage: themeColors.gradientA }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide">Coimbatore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap">📞 +91 8925 449 073</span>
            </a>

            <a href="tel:+917619343001" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 text-white font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5 shadow-lg shadow-blue-500/30 border border-indigo-500/40 min-w-0"
              style={{ backgroundImage: themeColors.gradientB }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide">Bangalore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap">📞 +91 7619 343 001</span>
            </a>

            <a href="#lead-form" className="w-full sm:w-60 md:w-auto text-center text-white font-bold text-xs sm:text-sm py-2 px-4 rounded-full shadow-lg shadow-purple-600/20 transition-all hover:scale-105"
              style={{ backgroundImage: themeColors.gradientA }}>
              Get Free Demo
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <div className="relative overflow-hidden w-full">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-indigo-600/30 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-indigo-600/25 to-cyan-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-emerald-600/20 to-teal-600/15 blur-[100px] rounded-full pointer-events-none animate-pulse delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)', borderColor: 'rgba(255, 101, 132, 0.3)', backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#6C63FF' }}></span>
                Now Immediately Enrolling
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6">
                Master <span className="text-transparent bg-clip-text" style={{ backgroundImage: themeColors.textGradient }}>Cyber Security</span><br className="hidden sm:block" />              
              </h1>
              
              <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
                No.1 Cybersecurity Course in Bangalore. Learn Practical Skills, Ethical Hacking, Tools, and Defensive Techniques with Advanced Training. Boost your career with our Job Guarantee Program.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-10 text-sm font-medium">
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Live Instructor-Led
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Hands-on Tools
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Job Guarantee
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Certifications
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 max-w-xl">
                <div>
                  <div className="text-3xl font-black text-white mb-1">500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Placement Support</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">₹8-15L</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Avg. Salary Post-Course</div>
                </div>
              </div>
            </div>

            {/* Right: Modern Lead Form */}
            <div className="lg:col-span-5 relative" id="lead-form">
              {/* Form Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-100 animate-pulse"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-2">Get Free Demo Class 🚀</h3>
                    <p className="text-sm text-slate-400 mb-6">Our counsellor will call you within 2 hours</p>

                    <form onSubmit={handleSubmit} className="space-y-4 text-left">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Full Name *</label>
                        <input required type="text" placeholder="Your full name" className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors" style={{ focusBorderColor: '#6C63FF', focusRingColor: '#6C63FF' }} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Phone Number *</label>
                        <input required type="tel" placeholder="+91 XXXXX XXXXX" className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Email Address *</label>
                        <input required type="email" placeholder="you@email.com" className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Preferred Schedule</label>
                        <select className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors appearance-none">
                          <option value="">Select Schedule</option>
                          <option value="weekday">Weekday Batches</option>
                          <option value="weekend">Weekend Batches</option>
                          <option value="online">Online Training</option>
                        </select>
                      </div>

                      <button type="submit" className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-base py-3.5 px-6 rounded-lg shadow-lg shadow-purple-600/30 transition-all transform hover:-translate-y-0.5 border border-purple-500/50">
                        Book My Free Demo →
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4">🔒 100% Free. No spam. Cancel anytime.</p>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center animate-fade-in">
                    <FormCheckIcon />
                    <h4 className="text-xl font-bold text-white mb-2">You're Booked!</h4>
                    <p className="text-slate-400 text-sm">
                      Our cybersecurity team will call you within 2 hours to confirm your free demo class details.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── SEO MARKETING SECTION ── */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Cyber Security Course in Coimbatore with Placement Assistance</h2>
          <p className="text-slate-300 text-lg mb-3">Protect the digital world and build a high-paying career with Peopleclick’s Cyber Security Course in Coimbatore.</p>
          <p className="text-slate-300 text-lg mb-5">Learn from industry experts, practice real-time hacking tools, and become job-ready with our placement-focused training program.</p>
          <a href="#lead-form" className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90">👉 Book a Free Demo Class Today</a>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">How to Actually Build a Career in Cyber Security (Simple & Actionable)</h3>
              <ol className="list-decimal list-inside space-y-4 text-slate-300">
                <li>
                  <strong>Don’t just learn theory — learn how to hack & defend systems</strong>
                  <p className="mt-2 text-slate-400">Most courses teach concepts. Companies hire skills.</p>
                  <ul className="list-disc list-inside pl-5 mt-2 text-slate-300">
                    <li>Real-time ethical hacking practice</li>
                    <li>Hands-on tools like Nmap, Wireshark, Metasploit</li>
                    <li>Live attack & defense simulations</li>
                  </ul>
                  <p className="mt-2 text-lime-300">Result: You become job-ready, not just certified</p>
                </li>
                <li>
                  <strong>Learn exactly what companies are hiring for</strong>
                  <p className="mt-2 text-slate-400">Students fail because they learn outdated topics.</p>
                  <ul className="list-disc list-inside pl-5 mt-2 text-slate-300">
                    <li>Network Security & Penetration Testing</li>
                    <li>OWASP Top 10 (real-world vulnerabilities)</li>
                    <li>SOC & Blue Team skills</li>
                    <li>Cloud Security (AWS, Azure basics)</li>
                  </ul>
                  <p className="mt-2 text-lime-300">Result: You match real job roles like SOC Analyst & Ethical Hacker</p>
                </li>
                <li>
                  <strong>Build proof, not just certificates</strong>
                  <p className="mt-2 text-slate-400">Companies trust skills + proof.</p>
                  <ul className="list-disc list-inside pl-5 mt-2 text-slate-300">
                    <li>Malware Analysis Projects</li>
                    <li>Web App Penetration Testing</li>
                    <li>SIEM Dashboard (Splunk/ELK)</li>
                    <li>Vulnerability Scanning</li>
                  </ul>
                  <p className="mt-2 text-lime-300">Result: Strong portfolio + interview confidence</p>
                </li>
                <li>
                  <strong>Get placement-ready, not just course completion</strong>
                  <p className="mt-2 text-slate-400">Learning alone is not enough.</p>
                  <ul className="list-disc list-inside pl-5 mt-2 text-slate-300">
                    <li>Resume building</li>
                    <li>Mock interviews</li>
                    <li>Placement assistance</li>
                    <li>Job referrals</li>
                  </ul>
                  <p className="mt-2 text-lime-300">Result: Faster job placement</p>
                </li>
              </ol>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-3">Why Choose Cyber Security as a Career?</h3>
              <ul className="list-disc list-inside pl-5 space-y-2 text-slate-300">
                <li>High demand in India & globally</li>
                <li>Attractive salary packages</li>
                <li>Job security (growing cyber threats)</li>
                <li>Opportunities in top IT companies</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">Course Highlights</h3>
              <ul className="list-disc list-inside pl-5 space-y-2 text-slate-300">
                <li>Beginner to Advanced Training</li>
                <li>Real-Time Projects</li>
                <li>Hands-on Ethical Hacking</li>
                <li>Industry Certification</li>
                <li>100% Placement Assistance</li>
                <li>Expert Trainers</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-8 mb-3">Trainer Information</h3>
              <p className="text-slate-300">Ramesh – Cyber Security Specialist</p>
              <ul className="list-disc list-inside pl-5 mt-2 text-slate-300 space-y-1">
                <li>5+ years industry experience</li>
                <li>Expert in ethical hacking & network security</li>
                <li>Real-time project exposure</li>
                <li>Practical teaching approach</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black text-white mb-4">Cyber Security Course Syllabus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <p className="font-bold mb-2">Core Modules</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>Cybersecurity & Ethical Hacking Basics</li>
                  <li>Networking (OSI, TCP/IP, Protocols)</li>
                  <li>Windows & Linux Security</li>
                  <li>Footprinting & Reconnaissance</li>
                  <li>Network Scanning & Enumeration</li>
                  <li>Vulnerability Assessment</li>
                  <li>Exploitation & Metasploit</li>
                  <li>Privilege Escalation</li>
                  <li>Web Security (OWASP Top 10)</li>
                  <li>Blue Team (SOC, IDS/IPS, Forensics)</li>
                  <li>Wireless Security</li>
                  <li>Cloud Security (AWS, Azure)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold mb-2">Tools You Will Learn</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>Nmap, Wireshark</li>
                  <li>Metasploit</li>
                  <li>Burp Suite, OWASP ZAP</li>
                  <li>Hashcat, John the Ripper</li>
                </ul>

                <p className="font-bold mt-4 mb-2">Capstone Projects</p>
                <ul className="list-disc list-inside pl-5 space-y-1">
                  <li>Malware Analysis</li>
                  <li>Ethical Hacking Lab</li>
                  <li>Web App Penetration Testing</li>
                  <li>SIEM Dashboard</li>
                  <li>Vulnerability Scanning</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-black text-white mb-4">Career Opportunities</h3>
            <ul className="list-disc list-inside pl-5 space-y-1 text-slate-300">
              <li>Cyber Security Analyst</li>
              <li>Ethical Hacker</li>
              <li>SOC Analyst</li>
              <li>Network Security Engineer</li>
              <li>Information Security Analyst</li>
            </ul>

            <h3 className="text-2xl font-black text-white mt-8 mb-4">Salary in India</h3>
            <ul className="list-disc list-inside pl-5 space-y-1 text-slate-300">
              <li>Freshers: ₹3 LPA – ₹6 LPA</li>
              <li>Experienced: ₹8 LPA – ₹20 LPA</li>
            </ul>

            <h3 className="text-2xl font-black text-white mt-8 mb-4">Why Choose Peopleclick?</h3>
            <ul className="list-disc list-inside pl-5 space-y-1 text-slate-300">
              <li>Job-Oriented Training</li>
              <li>Real-Time Projects</li>
              <li>Resume & Interview Support</li>
              <li>Placement Assistance</li>
              <li>Industry-Level Lab Training</li>
            </ul>

            <h3 className="text-2xl font-black text-white mt-8 mb-4">Who Can Join This Course?</h3>
            <ul className="list-disc list-inside pl-5 space-y-1 text-slate-300">
              <li>Fresh Graduates</li>
              <li>IT Professionals</li>
              <li>Beginners</li>
              <li>Career Switchers</li>
            </ul>

            <h3 className="text-2xl font-black text-white mt-8 mb-4">Skills You Will Gain</h3>
            <ul className="list-disc list-inside pl-5 space-y-1 text-slate-300">
              <li>Ethical Hacking</li>
              <li>Network Security</li>
              <li>Threat Detection</li>
              <li>Risk Analysis</li>
              <li>Incident Response</li>
            </ul>
          </div>

          <div className="mt-10 bg-slate-900/75 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-black text-white mb-4">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-3 text-slate-300">
              <div>
                <p className="font-bold text-white">1. Is this course beginner-friendly?</p>
                <p>Yes, we start from basics and go to advanced level.</p>
              </div>
              <div>
                <p className="font-bold text-white">2. Who is the trainer?</p>
                <p>Cyber Security Specialist with 10+ years of industrial experience and an experienced trainer.</p>
              </div>
              <div>
                <p className="font-bold text-white">3. Do you provide placement support?</p>
                <p>Yes, we provide complete 100% placement assistance.</p>
              </div>
              <div>
                <p className="font-bold text-white">4. What is the course duration?</p>
                <p>The duration is 3 to 6 months depending on the batch.</p>
              </div>
              <div>
                <p className="font-bold text-white">5. Can I do this internship?</p>
                <p>Yes, you can choose online or offline based on your convenience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUTCOMES STRIP ── */}
      <div className="bg-gradient-to-r from-purple-900/50 via-pink-900/30 to-indigo-900/50 border-y border-purple-500/30 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>500+</div>
              <div className="text-sm text-slate-300 font-medium">Students Certified</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>100%</div>
              <div className="text-sm text-slate-300 font-medium">Placement Assistance</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>10+</div>
              <div className="text-sm text-slate-300 font-medium">Live Projects</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>20+</div>
              <div className="text-sm text-slate-300 font-medium">Tools Mastered</div>
            </div>
            <div className="hidden lg:block p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>24/7</div>
              <div className="text-sm text-slate-300 font-medium">Lab Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── CURRICULUM SECTION ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Curriculum</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Advanced Cyber Security Syllabus</h2>
            <p className="text-slate-400 max-w-2xl text-lg">From basic networking to advanced penetration testing, our curriculum is designed to make you industry-ready from day one.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Network Security Fundamentals', desc: 'OSI Model, TCP/IP, Firewalls, VPNs, Packet Analysis using Wireshark.', tags: ['Wireshark', 'Nmap', 'TCP/IP'] },
              { num: '02', title: 'Ethical Hacking Basics', desc: 'Footprinting, Reconnaissance, Scanning networks, and Vulnerability analysis.', tags: ['Recon', 'Nessus', 'OpenVAS'] },
              { num: '03', title: 'Web Application Security', desc: 'OWASP Top 10, SQL Injection, XSS, CSRF, and attacking web architectures.', tags: ['Burp Suite', 'OWASP', 'Web'] },
              { num: '04', title: 'System Penetration Testing', desc: 'Exploiting Windows and Linux vulnerabilities, privilege escalation, and payload generation.', tags: ['Metasploit', 'Linux', 'Payloads'] },
              { num: '05', title: 'Cryptography', desc: 'Symmetric & Asymmetric encryption, Hashing algorithms, PKI, and digital signatures.', tags: ['RSA', 'AES', 'Hashes'] },
              { num: '06', title: 'Incident Response & SOC', desc: 'SIEM tools overview, log analysis, threat hunting, and handling security breaches.', tags: ['Splunk', 'SOC', 'Logs'] },
            ].map((mod, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500 transition-all hover:-translate-y-1 group">
                <div className="text-center">
                <div className="mx-auto w-12 h-12 rounded-xl flex items-center justify-center font-black mb-4" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)', borderColor: 'rgba(255, 101, 132, 0.3)', border: '1px solid rgba(255, 101, 132, 0.3)', backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent', backgroundClip: 'text' }}>
                  {mod.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{mod.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {mod.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2 py-1 rounded-md" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)', color: '#FF6584', border: '1px solid rgba(255, 101, 132, 0.3)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD TAKE A CYBERSECURITY COURSE ── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Target Audience</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Who Should Take a Cybersecurity Course</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Our comprehensive cybersecurity training is designed for professionals at every stage of their career journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Fresh Graduates', desc: 'Recent graduates looking to enter the IT security field with no prior experience required.' },
              { icon: '💼', title: 'IT Professionals', desc: 'System admins, network engineers, and IT support staff wanting to specialize in security.' },
              { icon: '🔄', title: 'Career Switchers', desc: 'Professionals from non-IT backgrounds seeking a lucrative career in cybersecurity.' },
              { icon: '📈', title: 'Working Professionals', desc: 'Current employees aiming for salary hikes and promotions through security certifications.' },
              { icon: '🏢', title: 'Diploma Holders', desc: 'Diploma graduates in computer science or related fields looking to advance their careers.' },
              { icon: '💰', title: 'Salary Seekers', desc: 'Individuals with less than 60% marks who want to break into high-paying IT security roles.' },
            ].map((audience, i) => (
              <div key={i} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all hover:-translate-y-2 group backdrop-blur">
                <div className="text-4xl mb-4 text-violet-300">
                  {audience.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{audience.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOB ROLES FOR CYBERSECURITY TRAINING ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Career Paths</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Job Roles For Cybersecurity Training</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Explore diverse career opportunities in the booming cybersecurity industry with our specialized training.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Security Analyst', salary: '₹4-8 LPA', desc: 'Monitor systems, detect threats, and respond to security incidents using various tools and techniques.' },
              { title: 'Ethical Hacker', salary: '₹5-12 LPA', desc: 'Perform authorized penetration testing to identify vulnerabilities before malicious hackers can exploit them.' },
              { title: 'Cloud Security Specialist', salary: '₹6-15 LPA', desc: 'Secure cloud infrastructure, implement access controls, and ensure compliance in cloud environments.' },
              { title: 'Security Engineer', salary: '₹5-10 LPA', desc: 'Design and implement security systems, firewalls, and network defenses for organizations.' },
              { title: 'Security Consultant', salary: '₹7-18 LPA', desc: 'Provide expert advice on security strategies, risk assessments, and compliance requirements.' },
              { title: 'Incident Response Specialist', salary: '₹6-14 LPA', desc: 'Handle security breaches, coordinate response efforts, and minimize damage from cyber attacks.' },
              { title: 'SOC Manager', salary: '₹8-20 LPA', desc: 'Lead Security Operations Centers, manage teams, and oversee threat monitoring and response.' },
              { title: 'GRC Specialist', salary: '₹6-16 LPA', desc: 'Manage Governance, Risk, and Compliance frameworks to ensure organizational security standards.' },
            ].map((role, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-purple-500 transition-all hover:-translate-y-1 group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-white">{role.title}</h3>
                  <span className="text-sm font-semibold bg-green-500/10 text-green-400 px-2 py-1 rounded-md border border-green-500/20">
                    {role.salary}
                  </span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS COVERED ── */}
      <section className="py-20 bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Tools Mastery</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Tools Covered For Cybersecurity Course</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Master industry-standard cybersecurity tools through hands-on practice and real-world scenarios.</p>
          </div>

          <div ref={toolsRef} className="flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:overflow-visible md:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500/40">
            {[
              { name: 'Wireshark', icon: '🔍', desc: 'Network Protocol Analyzer' },
              { name: 'Metasploit', icon: '⚔️', desc: 'Penetration Testing Framework' },
              { name: 'Burp Suite', icon: '🛡️', desc: 'Web Vulnerability Scanner' },
              { name: 'Nessus', icon: '🔎', desc: 'Vulnerability Assessment' },
              { name: 'Splunk', icon: '📊', desc: 'SIEM & Log Analysis' },
              { name: 'Kali Linux', icon: '🐧', desc: 'Ethical Hacking OS' },
              { name: 'Nmap', icon: '🗺️', desc: 'Network Scanner' },
              { name: 'Snort', icon: '🚨', desc: 'Intrusion Detection' },
            ].map((tool, i) => (
              <div key={i} className="min-w-[220px] md:min-w-0 flex-shrink-0 md:flex-shrink md:mx-0 rounded-2xl bg-slate-900/80 border border-slate-800 p-6 hover:border-purple-500/50 transition-all hover:-translate-y-1 group backdrop-blur text-center snap-start">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-xs text-slate-400">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Complete Package</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">What's Included in Our Cybersecurity Course</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to become a certified cybersecurity professional with job-ready skills.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🛠️', title: 'Hands-On Projects', desc: 'Work on 10+ real-world cybersecurity projects including malware analysis, phishing detection, and secure network design.' },
              { icon: '🧠', title: 'LMS Learning Platform', desc: '24/7 access to recorded sessions, expert videos, and organized learning materials for flexible study.' },
              { icon: '🎯', title: 'Interview Preparation', desc: 'Mock interviews, resume building, and company-specific question practice to crack cybersecurity jobs.' },
              { icon: '📚', title: 'Aptitude & Technical Training', desc: 'Free training in logical thinking, basic maths, and technical concepts to strengthen your foundation.' },
              { icon: '🤖', title: 'AI Interview Practice Portal', desc: 'Practice with AI-powered mock interviews for instant feedback and confidence building.' },
              { icon: '💼', title: 'Placement Support', desc: 'Dedicated career mentoring, job referrals, and support until you land your dream cybersecurity role.' },
            ].map((feature, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl hover:border-purple-500 transition-all hover:-translate-y-1 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALUMNI & SOCIAL PROOF ── */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Alumni Stories</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Real Results from Bangalore</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">See what our graduates have accomplished after taking our Cyber Security course.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Kiran R.", role: "Security Analyst @ TCS", init: "KR", quote: "Transitioned from Helpdesk to Security Analyst. The hands-on labs with Metasploit and Burp Suite were exactly what was asked in my interview.", color: "bg-orange-500" },
              { name: "Pooja V.", role: "Pen Tester @ Wipro", init: "PV", quote: "The job placement support was incredible. The team helped refine my resume and arranged interviews until I landed a core cybersecurity role.", color: "bg-sky-500" },
              { name: "Arun K.", role: "SOC Analyst @ Infosys", init: "AK", quote: "The SOC and Incident Response module using Splunk was a game changer for me. Highly recommend the weekend batches for working professionals.", color: "bg-emerald-500" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl relative">
                <div className="text-yellow-500 text-sm tracking-widest mb-4">★★★★★</div>
                <blockquote className="text-slate-300 text-sm italic mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-10 h-10 rounded-full ${testimonial.color} text-white font-bold flex items-center justify-center`}>
                    {testimonial.init}
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">{testimonial.name}</div>
                    <div className="text-slate-500 text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-slate-500 text-sm font-semibold mb-6">OUR ALUMNI WORK AT LEADING TECH COMPANIES</p>
             <div className="flex flex-wrap justify-center gap-4">
               {['IBM', 'TCS', 'Microsoft', 'Amazon', 'Dell', 'HP', 'Cisco', 'Accenture', 'Wipro', 'Infosys'].map(company => (
                 <span key={company} className="px-5 py-2 bg-slate-800 text-slate-300 font-bold rounded-lg border border-slate-700 text-sm hover:bg-slate-700 transition-colors">{company}</span>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── BATCH & PRICING CTA SECTION ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/30 to-indigo-950 -z-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/30 to-cyan-900/20 blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-emerald-900/20 to-teal-900/15 blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
              <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Bangalore Batches</div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Secure Your Future?</h2>
              <p className="text-slate-300 text-lg mb-8">Join the elite rank of Cyber Security professionals. Choose a schedule that fits your life.</p>
              
              <div className="space-y-4">
                <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-xl flex justify-between items-center backdrop-blur">
                  <div>
                    <h4 className="text-white font-bold mb-1">🗓 Weekend Batch</h4>
                    <p className="text-sm text-slate-400">Sat & Sun · 10:00 AM – 1:00 PM</p>
                  </div>
                  <span className="text-xs font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">Filling Fast</span>
                </div>
                <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-xl flex justify-between items-center backdrop-blur">
                  <div>
                    <h4 className="text-white font-bold mb-1">📅 Weekday Evening</h4>
                    <p className="text-sm text-slate-400">Mon – Fri · 7:00 PM – 9:00 PM</p>
                  </div>
                  <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30">Enrolling</span>
                </div>
              </div>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#lead-form" className="bg-white text-purple-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105">
                  Book Free Demo Class
                </a>
                <a href="tel:+917619343001" className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2">
                  📞 Call +91 7619 343 001
                </a>
              </div>
            </div>
            
            {/* Value Prop Pricing Card hidden under a "Enquire Now" shield */}
            <div className="bg-slate-900 border-2 border-purple-500/50 p-8 sm:p-10 rounded-3xl relative shadow-[0_0_50px_rgba(168,85,247,0.15)] max-w-md mx-auto w-full">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                SPECIAL OFFER
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Package</h3>
                <p className="text-slate-400 text-sm">Everything you need to land a job.</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {['6-week intensive training (48+ hrs)', 'Hands-on Ethical Hacking Labs', 'CompTIA/CEH aligned curriculum', '100% Guaranteed Interviews', 'Resume & Profile Building', '24/7 Access to Recorded Sessions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>
              
              <a href="#lead-form" className="block text-center w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity">
                Enquire for Pricing →
              </a>
              <p className="text-center text-xs text-slate-500 mt-4">💳 Flexible EMI options available</p>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-2xl md:text-3xl font-black tracking-tight text-white mb-3">PEOPLECLICK <span className="text-transparent bg-clip-text" style={{ backgroundImage: themeColors.textGradient }}>LEARNING</span></div>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">We are a leading online education platform offering 50+ courses to enhance your skills and abilities. With over 1,000+ success stories, we help learners get job-ready in cybersecurity.</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Bangalore Office</h4>
              <p className="text-slate-300 text-sm">#230, Level-3,<br />KAS Officers Colony, Stage 2,<br />Bengaluru, Karnataka 560068</p>

              <h4 className="text-white font-bold mt-6 mb-3">Coimbatore Office</h4>
              <p className="text-slate-300 text-sm">141A, Ratna RK Buildings 1st Floor,<br />Diwan Bahadur Road, RS Puram,<br />Coimbatore, Tamilnadu 641002</p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><span>📞</span> <a href="tel:+917619343001" className="transition-colors" style={{ color: '#6C63FF' }}>+91 7619 343 001 - Bangalore</a></li>
                <li className="flex items-start gap-2"><span>📞</span> <a href="tel:+918925449073" className="transition-colors" style={{ color: '#6C63FF' }}>+91 8925 449 073 - Coimbatore</a></li>
                <li className="flex items-start gap-2"><span>✉</span> <a href="mailto:training@peopleclick.in" className="transition-colors" style={{ color: '#6C63FF' }}>training@peopleclick.in</a></li>
              </ul>
            </div>

            {/* <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button className="transition-colors text-left" style={{ color: 'inherit' }}>Terms &amp; Conditions</button></li>
                <li><button className="transition-colors text-left" style={{ color: 'inherit' }}>Refund Policy</button></li>
                <li><button className="transition-colors text-left" style={{ color: 'inherit' }}>Privacy Policy</button></li>
              </ul>
            </div> */}
          </div>

          <div className="text-center border-t border-slate-800 pt-8 text-xs text-slate-500">
            © 2026 Peopleclick Learning. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── MOBILE FLOAT CTA ── */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 bg-slate-900 border-t border-slate-800 flex gap-3 lg:hidden z-50 transition-transform duration-300 transform ${showFloatCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <a href="tel:+917619343001" className="flex-1 text-white text-center font-bold text-xs sm:text-sm py-3 rounded-lg border border-slate-700" style={{ backgroundColor: themeColors.surface }}>
          📞 Call Now
        </a>
        <a href="#lead-form" className="flex-1 text-white text-center font-bold text-xs sm:text-sm py-3 rounded-lg shadow-lg" style={{ backgroundImage: themeColors.gradientA }}>
          Get Free Demo
        </a>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/917619343001?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Cybersecurity%20course" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border-2 border-white"
          style={{ backgroundColor: themeColors.green, boxShadow: '0 10px 20px rgba(34,197,94,0.35)' }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          
          {/* Tooltip */}
          <div className="absolute right-20 bottom-2 w-48 bg-white text-slate-900 text-xs font-bold p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none origin-bottom-right scale-95 group-hover:scale-100">
            Chat with us on WhatsApp!
            <div className="absolute right-0 bottom-3 translate-x-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        </a>
      </div>

    </div>
  );
};

export default CyberSecurity;
