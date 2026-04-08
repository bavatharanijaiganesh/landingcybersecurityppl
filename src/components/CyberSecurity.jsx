import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {
  GraduationCap, Briefcase, RefreshCw, TrendingUp, Building, DollarSign,
  Search, Swords, Shield, ZoomIn, BarChart, Terminal, Map, Siren,
  Hammer, Brain, Target, BookOpen, Bot, Phone, Rocket, Mail,
  Lock, CalendarDays, CreditCard, Play, X, Loader2, AlertCircle, Code, Award
} from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_ar60q9f';
const EMAILJS_TEMPLATE_ID = 'template_c302i4n';
const EMAILJS_PUBLIC_KEY = '2CGO8qiSosH5K1xfS';

const CyberSecurity = () => {
  const [showFloatCta, setShowFloatCta] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({ fullName: '', phone: '', email: '' });
  const [emailChecking, setEmailChecking] = useState(false);
  const toolsRef = useRef(null);

  const themeColors = {
    background: '#2D3436',
    surface: '#2D3436',
    surface17: 'rgba(45, 52, 54, 0.7)',
    text: '#66ff00',
    textMuted: '#94a3b8',
    primary: '#66ff00',
    primaryDark: '#554fee',
    secondary: '#66ff00',
    accent: '#66ff00',
    cyan: '#22d3ee',
    cyanDark: '#0ea5e9',
    green: '#66ff00',
    border: '#1e293b',
    gradientA: 'linear-gradient(90deg, #66ff00 0%, #66ff00 100%)',
    gradientB: 'linear-gradient(90deg, #66ff00 0%, #66ff00 100%)',
    gradientC: 'linear-gradient(90deg, #66ff00 0%, #66ff00 100%)',
    gradientD: 'linear-gradient(90deg, #66ff00 0%, #66ff00 100%)',
    textGradient: 'linear-gradient(90deg, #66ff00 0%, #66ff00 100%)',
    resultColor: '#66ff00',
  };

  const videoTestimonials = [
    { id: 'fCjrbK3KFg4', name: 'PEOPLECLICK ALUMNI', role: 'DATA ANALYTICS', salary: '4 LPA', isShort: true, thumbnail: '/thumbnails/thumb1.png' },
    { id: 'PPvIpS4UAEI', name: 'PEOPLECLICK ALUMNI', role: 'DATA ANALYTICS', salary: '4 LPA', isShort: true, thumbnail: '/thumbnails/thumb2.png' },
    { id: 'bZ4I48o02b4', name: 'PEOPLECLICK ALUMNI', role: 'FULL STACK', salary: '5 LPA', isShort: true, thumbnail: '/thumbnails/thumb3.png' },
    { id: '0XpBOS5jWW4', name: 'PEOPLECLICK ALUMNI', role: 'DIGITAL MARKETING', salary: '6 LPA', isShort: true, thumbnail: '/thumbnails/thumb4.png' },
  ];

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

  // ── Validation helpers ──────────────────────────────────────────
  const validatePhone = (phone) => {
    // Indian mobile: 10 digits, starting with 6-9 (optional +91 / 0 prefix)
    const cleaned = phone.replace(/[\s\-().]/g, '');
    const indiaRegex = /^(?:\+91|0)?[6-9]\d{9}$/;
    if (!cleaned) return 'Phone number is required.';
    if (!indiaRegex.test(cleaned)) return 'Enter a valid 10-digit Indian mobile number.';
    return '';
  };

  const validateEmailFormat = (email) => {
    if (!email) return 'Email address is required.';
    // RFC-5322 simplified regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) return 'Enter a valid email address (e.g. you@gmail.com).';
    return '';
  };

  const checkEmailDomainExists = async (email) => {
    try {
      const domain = email.split('@')[1];
      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=MX`,
        { signal: AbortSignal.timeout(5000) }
      );
      if (!response.ok) return true;
      const json = await response.json();
      if (json.Status !== 0 || !json.Answer || json.Answer.length === 0) {
        return false;
      }
      return true;
    } catch {
      return true;
    }
  };

  const handlePhoneBlur = (e) => {
    const err = validatePhone(e.target.value);
    setFieldErrors(prev => ({ ...prev, phone: err }));
  };

  const handleEmailBlur = async (e) => {
    const email = e.target.value;
    const formatErr = validateEmailFormat(email);
    if (formatErr) {
      setFieldErrors(prev => ({ ...prev, email: formatErr }));
      return;
    }
    setEmailChecking(true);
    const domainOk = await checkEmailDomainExists(email);
    setEmailChecking(false);
    if (!domainOk) {
      setFieldErrors(prev => ({
        ...prev,
        email: `The domain "${email.split('@')[1]}" does not appear to exist. Please check your email.`,
      }));
    } else {
      setFieldErrors(prev => ({ ...prev, email: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // 1) Validate phone
    const phoneErr = validatePhone(data.phone || '');
    // 2) Validate email format
    const emailFormatErr = validateEmailFormat(data.email || '');

    if (phoneErr || emailFormatErr) {
      setFieldErrors(prev => ({
        ...prev,
        phone: phoneErr,
        email: emailFormatErr,
      }));
      return;
    }

    setIsSubmitting(true);
    const domainOk = await checkEmailDomainExists(data.email);
    if (!domainOk) {
      setFieldErrors(prev => ({
        ...prev,
        email: `The domain "${data.email.split('@')[1]}" does not appear to exist. Please use a real email address.`,
      }));
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_phone: data.phone,
          from_email: data.email,
          schedule: data.schedule || 'Not specified',
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormSubmitted(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError(
        'Failed to send your details. Please call us directly or try again in a moment.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // SVG Icons
  const CheckIcon = () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={themeColors.green}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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

      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center">
            <img src={`${process.env.PUBLIC_URL}/peopleclick_no_bg.png`} alt="Peopleclick Learning" className="h-10 md:h-12 w-auto object-contain" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-end gap-2 w-full sm:w-auto">
            <a href="tel:+918925449073" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 text-black font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5  border border-indigo-500/40 min-w-0"
              style={{ backgroundImage: themeColors.gradientA }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide">Coimbatore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 8925 449 073</span>
            </a>

            <a href="tel:+917619343001" className="w-full sm:w-48 md:w-auto flex items-center justify-center md:justify-start gap-2 text-black font-semibold text-[10px] md:text-sm py-2 px-3 md:px-4 rounded-full transition-transform transform hover:-translate-y-0.5  border border-indigo-500/40 min-w-0"
              style={{ backgroundImage: themeColors.gradientB }}>
              <span className="text-[8px] md:text-xs uppercase tracking-wide">Bangalore</span>
              <span className="text-[10px] md:text-sm whitespace-nowrap flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +91 7619 343 001</span>
            </a>

            <a href="#lead-form" className="w-full sm:w-60 md:w-auto text-center font-bold text-xs sm:text-sm py-2 px-4 rounded-full transition-all hover:scale-105"
              style={{ backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1), rgba(245,245,245,0.95))', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '1px solid rgba(255, 255, 255, 0.85)', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', color: '#000000', textShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
              Get Free Demo
            </a>
          </div>
        </div>
      </header>

      <div className="relative overflow-hidden w-full">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-indigo-600/30 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gradient-to-l from-indigo-600/25 to-cyan-600/20 blur-[120px] rounded-full pointer-events-none animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-r from-emerald-600/20 to-teal-600/15 blur-[100px] rounded-full pointer-events-none animate-pulse delay-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-wider mb-6" style={{ backgroundColor: 'rgba(108, 99, 255, 0.1)', borderColor: 'rgba(255, 101, 132, 0.3)', backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgba(254, 6, 6, 0.99)' }}></span>
                Entroll Now Immediately
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-6 flex flex-col items-start">
                <span>Mastery <span className="text-transparent bg-clip-text" style={{ backgroundImage: themeColors.textGradient }}>Cyber Security</span></span>
                <div className="flex items-center gap-3 md:gap-4 mt-2 sm:mt-3 text-3xl sm:text-4xl lg:text-5xl text-slate-100">
                  <span className="text-green-500 font-light translate-y-[-2px] opacity-80">|</span>
                  <span className="font-bold tracking-tight">Coimbatore</span>
                </div>
              </h1>

              <p className="text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
                No.1 Cybersecurity Course in Coimbatore & Bangalore. Learn Practical Skills, Ethical Hacking, Tools, and Defensive Techniques with Advanced Training. Boost your career with our Job Guarantee Program and earn an <a href="#internship-section" className="font-bold transition-all cursor-pointer hover:opacity-80" style={{ color: '#66ff00' }}>exclusive IT company internship</a>.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 text-sm font-medium">
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Earn an IT Company Internship
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> 10+ years of Experinece Industrial experts
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Hands-on Tools
                </span>
                <span className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-slate-300">
                  <CheckIcon /> Certifications
                </span>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800 max-w-xl">
                <div>
                  <div className="text-3xl font-black text-white mb-1">1500+</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Professionals Trained</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">100%</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Placement Support</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-1">₹4-7LPA</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Avg. Salary Post-Course</div>
                </div>
              </div>
            </div>

            {/* Right: Modern Lead Form */}
            <div className="lg:col-span-5 relative" id="lead-form">
              {/* Form Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-600 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-100 animate-pulse"></div>

              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
                {!formSubmitted ? (
                  <>
                    <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-2">Get Free Demo Class <Rocket className="w-6 h-6" color="#66ff00" /></h3>
                    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Full Name *</label>
                        <input
                          required
                          name="fullName"
                          type="text"
                          placeholder="Your full name"
                          className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors"
                          onBlur={(e) => setFieldErrors(prev => ({ ...prev, fullName: e.target.value.trim() ? '' : 'Full name is required.' }))}
                        />
                        {fieldErrors.fullName && (
                          <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.fullName}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Phone Number *</label>
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          maxLength={15}
                          className={`w-full bg-slate-950 border text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors ${fieldErrors.phone ? 'border-red-500' : 'border-slate-800'
                            }`}
                          onBlur={handlePhoneBlur}
                        />
                        {fieldErrors.phone && (
                          <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.phone}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Email Address *</label>
                        <div className="relative">
                          <input
                            required
                            name="email"
                            type="email"
                            placeholder="you@email.com"
                            className={`w-full bg-slate-950 border text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors pr-10 ${fieldErrors.email ? 'border-red-500' : 'border-slate-800'
                              }`}
                            onBlur={handleEmailBlur}
                          />
                          {emailChecking && (
                            <Loader2 className="absolute right-3 top-3.5 w-4 h-4 text-slate-400 animate-spin" />
                          )}
                        </div>
                        {fieldErrors.email && (
                          <p className="flex items-center gap-1 text-red-400 text-xs mt-1"><AlertCircle className="w-3 h-3" />{fieldErrors.email}</p>
                        )}
                      </div>

                      {/* Schedule */}
                      <div>
                        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Preferred Schedule</label>
                        <select name="schedule" className="w-full bg-slate-950 border border-slate-800 text-slate-200 text-sm rounded-lg px-4 py-3 focus:outline-none transition-colors appearance-none">
                          <option value="">Select Schedule</option>
                          <option value="weekday">Weekday Batches</option>
                          <option value="online">Online Training</option>
                        </select>
                      </div>

                      {/* Submit error banner */}
                      {submitError && (
                        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-xs">
                          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting || emailChecking}
                        className="w-full mt-2 font-bold text-base py-3.5 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        style={{ backgroundColor: themeColors.green, color: '#000000', border: '1px solid rgba(102,255,0,0.5)' }}
                      >
                        {isSubmitting ? (
                          <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
                        ) : (
                          'Book My Free Demo →'
                        )}
                      </button>
                      <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1"><Lock className="w-3 h-3" /> 100% Free. No spam. Cancel anytime.</p>
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
      {/* ── COURSE HIGHLIGHTS ── */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ color: themeColors.green }}>Why Join Us?</div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Course Highlights</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Everything you need to kickstart and accelerate your career in cyber security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <BookOpen className="w-8 h-8" color="#66ff00" />, title: 'Beginner to Advanced Training', desc: 'Start from the basics and strictly build your way up to advanced defensive techniques.' },
              { icon: <Code className="w-8 h-8" color="#66ff00" />, title: 'Real-Time Projects', desc: 'Work on live scenarios that simulate real-world cyber threats and defensive protocols.' },
              { icon: <Terminal className="w-8 h-8" color="#66ff00" />, title: 'Hands-on Ethical Hacking', desc: 'Gain core practical experience by performing authorized, simulated cyberattacks.' },
              { icon: <Award className="w-8 h-8" color="#66ff00" />, title: 'Industry Certification', desc: 'Earn recognized training certificates that significantly validate your skills to top global employers.' },
              { icon: <Briefcase className="w-8 h-8" color="#66ff00" />, title: '100% Placement Assistance', desc: 'Get dedicated support for resume building, mock interviews, and guaranteed job interviews.' },
              { icon: <GraduationCap className="w-8 h-8" color="#66ff00" />, title: 'Expert Trainers', desc: '10+ years experienced industrial trainers will teach.' }
            ].map((highlight, idx) => (
              <div key={idx} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-2xl hover:border-green-500/50 transition-all hover:-translate-y-1 group relative overflow-hidden">
                {/* Subtle hover gradient inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-green-500/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mb-6 border border-slate-800 group-hover:bg-green-500/10 transition-colors shadow-inner relative z-10">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide relative z-10">{highlight.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed relative z-10">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO MARKETING SECTION ── */}
      <section className="py-16 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-white mb-4">Cyber Security Course in Coimbatore with Placement Assistance</h2>
          <p className="text-slate-300 text-lg mb-3">Protect the digital world and build a high-paying career with Peopleclick’s Cyber Security Course in Coimbatore.</p>
          <p className="text-slate-300 text-lg mb-5">Learn from industry experts, practice real-time hacking tools, and become job-ready with our placement-focused training program.</p>
          <a href="#lead-form" className="inline-block font-bold py-3 px-6 rounded-lg shadow-lg hover:opacity-90"
            style={{ backgroundColor: themeColors.green, color: '#000000' }}> Book a Free Demo Class Today</a>

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
                  <p className="mt-2" style={{ color: themeColors.resultColor }}>Result: You become job-ready, not just certified</p>
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
                  <p className="mt-2" style={{ color: themeColors.resultColor }}>Result: You match real job roles like SOC Analyst & Ethical Hacker</p>
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
                  <p className="mt-2" style={{ color: themeColors.resultColor }}>Result: Strong portfolio + interview confidence</p>
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
                  <p className="mt-2" style={{ color: themeColors.resultColor }}>Result: Faster job placement</p>
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
                <li>Expert Trainers with 10+ Years of Industry Experience</li>
                <li>Beginner to Advanced Training</li>
                <li>Real-Time Projects</li>
                <li>Hands-on Ethical Hacking</li>
                <li>Industry Certification</li>
                <li>100% Placement Assistance</li>
                <li>Learn from 10+ Years Experienced Trainers with Real-Time Project Guidance</li>
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
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>1500+</div>
              <div className="text-sm text-slate-300 font-medium">Students Certified</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>100%</div>
              <div className="text-sm text-slate-300 font-medium">Placement Assistance</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>Ȝ+</div>
              <div className="text-sm text-slate-300 font-medium">Live Projects</div>
            </div>
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-slate-700/50 backdrop-blur hover:border-purple-500/50 transition-all hover:scale-105">
              <div className="text-4xl font-black text-transparent bg-clip-text mb-2" style={{ backgroundImage: themeColors.textGradient }}>20+</div>
              <div className="text-sm text-slate-300 font-medium">Mastery Tools</div>
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Mastery Cyber Security Syllabus</h2>
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
              { icon: <GraduationCap className="w-10 h-10" color="#66ff00" />, title: 'Fresh Graduates', desc: 'Recent graduates looking to enter the IT security field with no prior experience required.' },
              { icon: <Briefcase className="w-10 h-10" color="#66ff00" />, title: 'IT Professionals', desc: 'System admins, network engineers, and IT support staff wanting to specialize in security.' },
              { icon: <RefreshCw className="w-10 h-10" color="#66ff00" />, title: 'Career Switchers', desc: 'Professionals from non-IT backgrounds seeking a lucrative career in cybersecurity.' },
              { icon: <TrendingUp className="w-10 h-10" color="#66ff00" />, title: 'Working Professionals', desc: 'Current employees aiming for salary hikes and promotions through security certifications.' },
              { icon: <Building className="w-10 h-10" color="#66ff00" />, title: 'Diploma Holders', desc: 'Diploma graduates in computer science or related fields looking to advance their careers.' },
              { icon: <DollarSign className="w-10 h-10" color="#66ff00" />, title: 'Salary Seekers', desc: 'Individuals with less than 60% marks who want to break into high-paying IT security roles.' },
            ].map((audience, i) => (
              <div key={i} className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-purple-500/50 transition-all hover:-translate-y-2 group backdrop-blur">
                <div className="text-4xl mb-4">
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
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Mastery industry-standard cybersecurity tools through hands-on practice and real-world scenarios.</p>
          </div>

          <div ref={toolsRef} className="flex gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 md:overflow-visible md:pb-0 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-purple-500/40">
            {[
              { name: 'Wireshark', icon: <Search className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Network Protocol Analyzer' },
              { name: 'Metasploit', icon: <Swords className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Penetration Testing Framework' },
              { name: 'Burp Suite', icon: <Shield className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Web Vulnerability Scanner' },
              { name: 'Nessus', icon: <ZoomIn className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Vulnerability Assessment' },
              { name: 'Splunk', icon: <BarChart className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'SIEM & Log Analysis' },
              { name: 'Kali Linux', icon: <Terminal className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Ethical Hacking OS' },
              { name: 'Nmap', icon: <Map className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Network Scanner' },
              { name: 'Snort', icon: <Siren className="w-10 h-10 mx-auto" color="#66ff00" />, desc: 'Intrusion Detection' },
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

      {/* ── WHY CHOOSE PEOPLECLICK & INTERNSHIP ── */}
      <section id="internship-section" className="py-20 bg-gradient-to-br from-slate-950 via-purple-900/10 to-slate-950 border-t border-slate-800 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: Content */}
            <div className="order-2 lg:order-1">
              <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Exclusive Benefit</div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">Why Choose Peopleclick?</h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                We go beyond standard classroom training. Dedicated learners who demonstrate strong technical aptitude unlock the opportunity for <strong className="text-white">real-time industrial internships</strong> in our separate, fully operational IT company.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckIcon /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Live Project Experience</h4>
                    <p className="text-sm text-slate-400">Work directly on real client security infrastructures and threat hunting operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckIcon /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Valid Experience Letter</h4>
                    <p className="text-sm text-slate-400">Graduate with a recognized internship certificate from an active IT organization, putting your resume ahead of others.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 bg-green-500/20 p-1 rounded-full"><CheckIcon /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Corporate Environment</h4>
                    <p className="text-sm text-slate-400">Learn professional workflows, Agile methodologies, and corporate communication standards.</p>
                  </div>
                </li>
              </ul>

              <a href="#lead-form" className="inline-block font-bold py-3 px-8 rounded-lg shadow-[0_0_20px_rgba(102,255,0,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(102,255,0,0.5)]"
                style={{ backgroundColor: themeColors.green, color: '#000000' }}>
                Start Your Internship Journey
              </a>
            </div>

            {/* Right: Images */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-green-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 transform rotate-1 hover:rotate-0 transition-transform duration-500 group">
                <img src={`${process.env.PUBLIC_URL}/internship.png`} alt="Real-time Industrial Internship" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-slate-900/80 backdrop-blur-md p-4 rounded-xl border border-slate-700/50 shadow-lg inline-block">
                    <div className="flex items-center gap-3">
                      <Shield className="w-8 h-8" color="#66ff00" />
                      <div>
                        <div className="text-white font-bold">Peopleclick IT Division</div>
                        <div className="text-xs text-slate-400">Exclusive Internship Partner</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
              { icon: <Hammer className="w-10 h-10" color="#66ff00" />, title: 'Hands-On Projects', desc: 'Work on 10+ real-world cybersecurity projects including malware analysis, phishing detection, and secure network design.' },
              { icon: <Brain className="w-10 h-10" color="#66ff00" />, title: 'LMS Learning Platform', desc: '24/7 access to recorded sessions, expert videos, and organized learning materials for flexible study.' },
              { icon: <Target className="w-10 h-10" color="#66ff00" />, title: 'Interview Preparation', desc: 'Mock interviews, resume building, and company-specific question practice to crack cybersecurity jobs.' },
              { icon: <BookOpen className="w-10 h-10" color="#66ff00" />, title: 'Aptitude & Technical Training', desc: 'Free training in logical thinking, basic maths, and technical concepts to strengthen your foundation.' },
              { icon: <Bot className="w-10 h-10" color="#66ff00" />, title: 'AI Interview Practice Portal', desc: 'Practice with AI-powered mock interviews for instant feedback and confidence building.' },
              { icon: <Briefcase className="w-10 h-10" color="#66ff00" />, title: 'Placement Support', desc: 'Dedicated career mentoring, job referrals, and support until you land your dream cybersecurity role.' },
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
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Real Results from Peopleclick</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">See what our graduates have accomplished after taking our Cyber Security course.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Shainisha", time: "2 months ago", reviews: "3 reviews", photos: "", init: "S", quote: "Iam shainisha student in People Click Learning. Batch: Zeta II cybersecurity. This training program was really helpful and practical to me. The technical sessions were clear and easy to understand. The coding part was explained step by step. I learned many new skills from this course. hand on was really helpful to me. Our trainer was very friendly, supportive, and motivating. He always cleared our doubts patiently. The class environment was positive and encouraging. Our placement trainer provided weekly placement classes it was more helpful to us to crack the placements. They also provide good placement support. Thank you so much for the guidance and support.", color: "bg-purple-600" },
              { name: "Pavi Pavi", time: "a month ago", reviews: "4 reviews", photos: "1 photo", init: "PP", quote: "Hi Am pavithra, A Student at PeopleClick learning Current Batch. I had a great learning experience at this institute. The course was well-structured and easy to understand. Trainers explained concepts clearly with practical examples, which really helped me gain confidence in the subject. The support from the staff was also very good. I would definitely recommend this institute to anyone who wants to build strong knowledge in this course.", color: "bg-pink-600" },
              { name: "Shashank Patil", time: "2 months ago", reviews: "6 reviews", photos: "", init: "SP", quote: "People Click Company is a highly professional and reliable organization. Their team is knowledgeable, responsive, and truly understands client requirements. The quality of service and attention to detail are excellent. They maintain clear communication and deliver results on time. I would definitely recommend People Click Company to anyone looking for dependable and efficient solutions.", color: "bg-emerald-600" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg relative flex flex-col justify-start">

                {/* Header Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 w-11 h-11 rounded-full ${testimonial.color} text-white font-bold flex items-center justify-center text-lg`}>
                    {testimonial.init}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-white font-bold text-base leading-tight">{testimonial.name}</div>
                  </div>
                </div>

                {/* Stars and Date */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-500 text-base">
                    {'★★★★★'}
                  </div>
                  <span className="text-slate-500 text-xs mt-0.5">{testimonial.time}</span>
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm leading-relaxed text-left">
                  {testimonial.quote}
                </p>

              </div>
            ))}
          </div>

          <div className="mt-12 text-center overflow-hidden">
            <p className="text-slate-500 text-sm font-semibold mb-6">OUR ALUMNI WORK AT LEADING TECH COMPANIES</p>

            {/* Marquee Wrapper */}
            <div className="relative w-full overflow-hidden pb-4">
              {/* Fade edges matching bg-slate-900 */}
              <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none hidden sm:block"></div>
              <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none hidden sm:block"></div>

              {/* Seamless scrolling track */}
              <div className="flex w-max animate-infinite-scroll">
                {[1, 2].map((_, duplicateIndex) => (
                  <div key={duplicateIndex} className="flex gap-4 pr-4">
                    {[
                      { name: 'IBM', image: 'https://icon.horse/icon/ibm.com' },
                      { name: 'TCS', slug: 'tata' },
                      { name: 'Microsoft', image: 'https://icon.horse/icon/microsoft.com' },
                      { name: 'Amazon', image: 'https://icon.horse/icon/amazon.com' },
                      { name: 'Dell', slug: 'dell' },
                      { name: 'HP', slug: 'hp' },
                      { name: 'Cisco', slug: 'cisco' },
                      { name: 'Accenture', slug: 'accenture' },
                      { name: 'Wipro', slug: 'wipro' },
                      { name: 'Infosys', slug: 'infosys' }
                    ].map(company => (
                      <span key={company.name} className="px-5 py-2.5 bg-slate-800 text-slate-300 font-bold rounded-lg border border-slate-700 text-sm hover:bg-slate-700 transition-colors flex items-center gap-3 shadow-sm whitespace-nowrap cursor-default">
                        <span className="w-8 h-8 flex items-center justify-center bg-white rounded-md overflow-hidden p-1 shadow-inner shrink-0">
                          <img src={company.image || `https://cdn.simpleicons.org/${company.slug}`} alt={`${company.name} logo`} className="w-full h-full object-contain" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
                        </span>
                        {company.name}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── YOUTUBE SUCCESS STORIES CAROUSEL ── */}
      <section className="py-20 bg-slate-950 border-t border-slate-800 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Watch Our Graduates Succeed</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hear directly from our alumni who transformed their careers with Peopleclick Learning.</p>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes infinite-scroll {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
              animation: infinite-scroll 25s linear infinite;
            }
            .animate-infinite-scroll:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Marquee Wrapper */}
          <div className="relative w-full overflow-hidden pb-6 pt-4">
            {/* Fade edges */}
            <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none hidden md:block"></div>
            <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none hidden md:block"></div>

            {/* Seamless scrolling track */}
            <div className="flex w-max animate-infinite-scroll">
              {[1, 2].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-6 pr-6">
                  {videoTestimonials.map((video, index) => (
                    <div
                      key={`${duplicateIndex}-${index}`}
                      className="relative w-[280px] sm:w-[320px] md:w-[380px] h-[220px] sm:h-[240px] rounded-xl overflow-hidden cursor-pointer group flex-shrink-0 border border-slate-800 shadow-xl"
                      onClick={() => window.open(video.isShort ? `https://www.youtube.com/shorts/${video.id}` : `https://www.youtube.com/watch?v=${video.id}`, '_blank', 'noopener,noreferrer')}
                    >
                      {/* Blurred Background for Shorts to fill the landscape space */}
                      {video.isShort && video.thumbnail && (
                        <div
                          className="absolute inset-0 w-full h-full bg-cover bg-center blur-md opacity-40 scale-110 transition-transform duration-500 group-hover:scale-125"
                          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${video.thumbnail})` }}
                        />
                      )}

                      {/* Thumbnail Image */}
                      <img
                        src={video.thumbnail ? `${process.env.PUBLIC_URL}${video.thumbnail}` : `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={`${video.name} Testimonial`}
                        className={`absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105 ${video.isShort ? 'object-contain' : 'object-cover'}`}
                      />

                      {/* Dark Overlay for Text Visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent"></div>

                      {/* YouTube Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 transform transition-transform group-hover:scale-110">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>

                      {/* Bottom Info Banner */}
                      <div className="absolute bottom-0 w-full p-4 text-center border-t border-slate-700/50 bg-slate-900/60 backdrop-blur-md">
                        <div className="font-black text-white text-lg tracking-wide shadow-black drop-shadow-md" style={{ color: themeColors.primary }}>{video.name}</div>
                        <div className="text-xs font-bold text-white uppercase tracking-wider mt-1 drop-shadow-md">{video.role}</div>
                        <div className="text-sm font-black text-yellow-400 mt-1 drop-shadow-md">{video.salary}</div>
                      </div>
                    </div>
                  ))}
                </div>
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
              <div className="font-bold text-sm tracking-widest uppercase mb-2" style={{ backgroundImage: themeColors.textGradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Coimbatore & Bangalore Batches</div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Secure Your Future?</h2>
              <p className="text-slate-300 text-lg mb-8">Join the elite rank of Cyber Security professionals. Choose a schedule that fits your life.</p>

              <div className="space-y-4">
                {/* Batch 1: Digital Marketing – Delta-9 
                <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-xl flex justify-between items-center backdrop-blur">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><Calendar className="w-5 h-5" color="#66ff00" /> Digital Marketing · Delta - 9</h4>
                    <p className="text-sm text-slate-400">Mon – Fri · 9:00 AM – 11:00 AM</p>
                  </div>
                  <span className="text-xs font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 whitespace-nowrap">Filling Fast</span>
                </div> */}

                {/* Batch 2: Cyber Security – Zeta-4 */}
                <div className="bg-slate-900/80 border border-green-500/40 p-5 rounded-xl flex justify-between items-center backdrop-blur">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><CalendarDays className="w-5 h-5" color="#66ff00" /> CYBER SECURITY</h4>
                    <p className="text-xs text-slate-400 tracking-wide">ADMISSION AVAILABLE</p>
                  </div>
                  <span className="text-xs font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30 whitespace-nowrap">Filling Fast</span>
                  {/* <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap">Enrolling</span> */}
                </div>

                {/* Batch 3: UI/UX – SIGMA 4 
                <div className="bg-slate-900/80 border border-slate-700 p-5 rounded-xl flex justify-between items-center backdrop-blur">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-2"><CalendarDays className="w-5 h-5" color="#66ff00" /> UI/UX Design · SIGMA 4</h4>
                    <p className="text-sm text-slate-400">Mon – Fri · 11:00 AM – 1:00 PM</p>
                  </div>
                  <span className="text-xs font-bold bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full border border-purple-500/30 whitespace-nowrap">Enrolling</span>
                </div> */}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#lead-form" className="bg-white text-purple-900 hover:bg-slate-100 font-bold py-4 px-8 rounded-lg transition-transform hover:scale-105">
                  Book Free Demo Class
                </a>
                <a href="tel:+918925449073" className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 font-bold py-4 px-8 rounded-lg transition-colors flex items-center gap-2">
                  <Phone className="w-5 h-5" color="#66ff00" /> Call +91 8925 449 073
                </a>
              </div>
            </div>

            {/* Value Prop Pricing Card hidden under a "Enquire Now" shield */}
            <div className="bg-slate-900 border-2 p-8 sm:p-10 rounded-3xl relative max-w-md mx-auto w-full" style={{ borderColor: '#bffa97ff', boxShadow: '0 0 20px rgba(213, 249, 189, 0.2)' }}>
              <div className="absolute top-0 right-10 -translate-y-1/2 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg"
                style={{ backgroundColor: themeColors.green, color: '#000000' }}>
                SPECIAL OFFER
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Comprehensive Package</h3>
                <p className="text-slate-400 text-sm">Everything you need to land a job.</p>
              </div>

              <ul className="space-y-4 mb-8">
                {['6-week intensive training (48+ hrs)', 'Hands-on Ethical Hacking Labs', 'CompTIA/CEH aligned curriculum', '100% Placement Assistance', 'Resume & Profile Building', '24/7 Access to Recorded Sessions'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#lead-form" className="block text-center w-full font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: themeColors.green, color: '#000000' }}>
                Enquire for Pricing →
              </a>
              <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1"><CreditCard className="w-3 h-3" /> Flexible EMI options available</p>
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
                <li className="flex items-center gap-2"><span><Phone className="w-4 h-4" /></span> <a href="tel:+917619343001" className="transition-colors" style={{ color: '#66ff00' }}>+91 7619 343 001 - Bangalore</a></li>
                <li className="flex items-center gap-2"><span><Phone className="w-4 h-4" /></span> <a href="tel:+918925449073" className="transition-colors" style={{ color: '#66ff00' }}>+91 8925 449 073 - Coimbatore</a></li>
                <li className="flex items-center gap-2"><span><Mail className="w-4 h-4" /></span> <a href="mailto:training@peopleclick.in" className="transition-colors" style={{ color: '#66ff00' }}>training@peopleclick.in</a></li>
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

          <div className="text-center border-t border-slate-800 pt-8 text-xs"
            style={{ color: themeColors.green }}>
            © 2026 Peopleclick Learning. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ── MOBILE FLOAT CTA ── */}
      <div className={`fixed bottom-0 left-0 right-0 p-3 bg-slate-900 border-t border-slate-800 flex gap-3 lg:hidden z-50 transition-transform duration-300 transform ${showFloatCta ? 'translate-y-0' : 'translate-y-full'}`}>
        <a href="https://wa.me/918925449073?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20the%20Cybersecurity%20course" target="_blank" rel="noopener noreferrer" className="flex-1 text-black text-center font-bold text-xs sm:text-sm py-3 rounded-lg flex items-center justify-center gap-2 transition-transform hover:scale-105" style={{ backgroundColor: themeColors.green }}>
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" /></svg> WhatsApp Us
        </a>
        <a href="#lead-form" className="flex-1 text-center font-bold text-xs sm:text-sm py-3 rounded-lg"
          style={{ backgroundColor: '#ffffff', backgroundImage: 'linear-gradient(180deg, rgba(255,255,255,1), rgba(245,245,245,0.95))', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '1px solid rgba(255, 255, 255, 0.85)', boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)', color: '#000000', textShadow: '0 1px 1px rgba(0,0,0,0.08)' }}>
          Get Free Demo
        </a>
      </div>

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/918925449073?text=Hi,%20I%20want%20to%20know%20more%20about%20the%20Cybersecurity%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="group w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all border-2 border-white"
          style={{ backgroundColor: themeColors.green, boxShadow: '0 10px 20px rgba(34,197,94,0.35)' }}
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>

          {/* Tooltip */}
          <div className="absolute right-20 bottom-2 w-48 bg-white text-slate-900 text-xs font-bold p-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none origin-bottom-right scale-95 group-hover:scale-100">
            Chat with us on WhatsApp!
            <div className="absolute right-0 bottom-3 translate-x-1/2 rotate-45 w-3 h-3 bg-white"></div>
          </div>
        </a>
      </div>

      {/* ── VIDEO MODAL ── */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-950/90 animate-fade-in" onClick={() => setSelectedVideo(null)}>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-12 right-0 w-10 h-10 bg-slate-800/80 hover:bg-red-500 text-white rounded-full flex items-center justify-center transition-colors z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CyberSecurity;
