import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  RotateCw,
  Target,
  Plus,
  Twitter,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

// --- Custom Logo Component ---
// --- Custom Logo Component ---
// --- Custom Logo Component ---
// --- Custom Logo Component ---
// --- Custom Logo Component ---
// --- Custom Logo Component ---
const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <img
    src="/logo-new.png"
    alt="Averon"
    className={`object-contain mix-blend-multiply ${className}`}
  />
);

// --- Shared Header Component ---
const Header: React.FC<{ currentTab: string, setTab: (t: string) => void }> = ({ currentTab, setTab }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 transition-all duration-300">
      <div className="flex items-center justify-between px-6 md:px-8 h-20 md:h-24 max-w-7xl mx-auto w-full">
        <div
          className="cursor-pointer group flex items-center"
          onClick={() => { setTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Logo className="w-16 h-16 md:w-20 md:h-20 text-[#134E48]" />
        </div>

        <div className="hidden md:flex items-center space-x-10 lg:space-x-14 text-[15px] font-bold">
          <button
            onClick={() => { setTab('home'); window.scrollTo(0, 0); }}
            className={`nav-link transition-colors duration-300 ${currentTab === 'home' ? 'text-gray-900 active' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Home
          </button>
          <button
            onClick={() => { setTab('about'); window.scrollTo(0, 0); }}
            className={`nav-link transition-colors duration-300 ${currentTab === 'about' ? 'text-gray-900 active' : 'text-gray-400 hover:text-gray-600'}`}
          >
            About
          </button>
          <button
            onClick={() => { setTab('contact'); window.scrollTo(0, 0); }}
            className={`nav-link transition-colors duration-300 ${currentTab === 'contact' ? 'text-gray-900 active' : 'text-gray-400 hover:text-gray-600'}`}
          >
            Contact
          </button>
        </div>

        <button className="bg-[#134E48] text-white px-7 py-3 rounded-none text-sm font-bold hover:bg-[#0e3a36] shadow-md hover:shadow-teal-900/10 active:scale-95 transition-all duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
};

// --- FAQ Section ---
const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { q: "Do you offer an initial consultation?", a: "Yes. We provide an introductory session to understand your challenges and goals." },
    { q: "Are your services customizable?", a: "Our services are tailored specifically to your organizational context and needs." },
    { q: "Who do you typically work with?", a: "We partner with visionary leaders, founders, and growing organizations." },
    { q: "What is the engagement process?", a: "Our process begins with an assessment, followed by collaborative strategy development and execution." },
    { q: "What industries do you specialize in?", a: "While we work across many sectors, we have deep expertise in tech, finance, and operations." },
    { q: "How do we get started?", a: "Simply reach out via our contact form or book a consultation through the Get Started button." }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-6 reveal">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">Frequently asked questions</h2>
        <p className="text-gray-500 text-lg font-medium">Everything you need to know about the service.</p>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`border border-gray-100 rounded-none transition-all duration-300 ${openIdx === idx ? 'bg-gray-50/50 shadow-sm border-gray-200' : 'hover:border-gray-200'}`}>
            <button
              className="w-full flex justify-between items-center px-6 py-7 text-left group"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className={`text-lg font-bold transition-colors duration-300 ${openIdx === idx ? 'text-[#134E48]' : 'text-gray-800'}`}>{faq.q}</span>
              <div className={`w-8 h-8 rounded-none border flex items-center justify-center transition-all duration-300 ${openIdx === idx ? 'bg-[#134E48] border-[#134E48] rotate-45 text-white' : 'border-gray-200 text-gray-400 group-hover:text-[#134E48] group-hover:border-[#134E48]'}`}>
                <Plus size={18} />
              </div>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-8 text-gray-500 leading-relaxed font-medium">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- Testimonial Section (Full Horizontal Slide View) ---
const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastClicked, setLastClicked] = useState<'left' | 'right' | null>('right');

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Operations Director, Lumina Global",
      quote: "Working with Averon transformed how we approach organizational change. Their focus on precision and impact helped us cut through internal complexity and focus on what truly drives value. The team alignment workshops were particularly impactful, uniting our global leadership under a single, coherent vision for the future.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Marcus Thorne",
      role: "CEO, Thorne & Co. Partners",
      quote: "The strategic depth Averon brought to our expansion project was game-changing. They didn't just give us a roadmap; they embedded themselves in our culture to ensure the alignment was authentic. Our operational efficiency has reached an all-time high, and the clarity we have now is exactly what we needed to scale internationally.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Clara Bennett",
      role: "Senior Web Developer, Vertexa Technologies",
      quote: "Averon played a key role in helping our leadership team gain clarity on priorities and execution. Their structured approach, strategic insight, and practical guidance enabled us to move from planning to action with confidence. The engagement delivered measurable improvements in focus, alignment, and overall performance, creating results that were both immediate and sustainable.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleNext = () => {
    setLastClicked('right');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setLastClicked('left');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 reveal overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Image Slide Track */}
        <div className="relative overflow-hidden aspect-square md:aspect-[4/5]">
          <div
            className="flex h-full transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full h-full flex-shrink-0">
                <img
                  src={t.image}
                  className="w-full h-full object-cover"
                  alt={t.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Content Area with Slide Effect */}
        <div className="relative flex flex-col justify-center h-full overflow-hidden">
          {/* Static Elements (Quote Icon) */}
          <div className="mb-10 text-[#0F172A]">
            <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 21.6V0H16.8V21.6H8.4C8.4 26.25 11.2 29.1 16.8 30.15V36C6.4 34.65 0 28.35 0 21.6ZM28.8 21.6V0H45.6V21.6H37.2C37.2 26.25 40 29.1 45.6 30.15V36C35.2 34.65 28.8 28.35 28.8 21.6Z" />
            </svg>
          </div>

          {/* Sliding Content Track */}
          <div
            className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <p className="text-xl md:text-2xl text-[#475569] leading-relaxed mb-12 font-medium pr-8">
                  {t.quote}
                </p>

                {/* Visual Divider (Part of sliding unit for consistency) */}
                <div className="w-full h-px bg-gray-100 mb-10"></div>

                {/* Info and Navigation Area */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h4 className="text-xl md:text-2xl font-bold text-[#0F172A] leading-tight">{t.name}</h4>
                    <p className="text-[15px] md:text-base text-[#94A3B8] font-medium mt-1 leading-normal">
                      {t.role}
                    </p>
                  </div>

                  {/* The Buttons are fixed to the right of the name - 
                      Wait, the buttons shouldn't slide! They should be persistent 
                      and outside the slide track but aligned with the content. 
                      Let's move them out of the track but keep them in the grid.
                  */}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Fixed Position but aligned with the name area */}
          <div className="absolute bottom-0 right-0 flex gap-4 pb-2 pr-2">
            <button
              onClick={handlePrev}
              className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 rounded-none group active:scale-95
                ${lastClicked === 'left'
                  ? 'bg-[#134E48] border-[#134E48] text-white shadow-xl'
                  : 'bg-white border-gray-200 text-[#0F172A] hover:border-gray-400'
                }`}
            >
              <ArrowLeft size={24} className={`transition-transform duration-300 ${lastClicked !== 'left' && 'group-hover:-translate-x-1'}`} />
            </button>

            <button
              onClick={handleNext}
              className={`w-14 h-14 flex items-center justify-center border transition-all duration-300 rounded-none group active:scale-95
                ${lastClicked === 'right'
                  ? 'bg-[#134E48] border-[#134E48] text-white shadow-xl'
                  : 'bg-white border-gray-200 text-[#0F172A] hover:border-gray-400'
                }`}
            >
              <ArrowRight size={24} className={`transition-transform duration-300 ${lastClicked !== 'right' && 'group-hover:translate-x-1'}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Home Page Content ---
const HomeView: React.FC<{ setTab: (t: string) => void }> = ({ setTab }) => {
  const [activeStrategy, setActiveStrategy] = useState(0);

  const strategies = [
    {
      title: "Strategic Clarity",
      desc: "Set clear priorities with confidence through focused planning and analysis.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
      label: "Execution Alignment Workshop"
    },
    {
      title: "Team Alignment",
      desc: "Unite leadership and teams around shared, measurable goals for total harmony.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
      label: "Strategic Leadership Summit"
    },
    {
      title: "Execution",
      desc: "Deliver strategy with consistency, precision, and operational control.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200",
      label: "Operations & Efficiency Sync"
    },
    {
      title: "Impact",
      desc: "Results that are trackable, enduring, and shift the needle for your business.",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
      label: "Market Performance Review"
    }
  ];

  const partners = [
    { name: "The Washington Post", url: "https://www.vectorlogo.zone/logos/washingtonpost/washingtonpost-ar21.svg" },
    { name: "TechCrunch", url: "https://www.vectorlogo.zone/logos/techcrunch/techcrunch-ar21.svg" },
    { name: "Bloomberg", url: "https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg" },
    { name: "Gizmodo", url: "https://www.vectorlogo.zone/logos/gizmodo/gizmodo-ar21.svg" },
    { name: "Forbes", url: "https://www.vectorlogo.zone/logos/forbes/forbes-ar21.svg" }
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&get=80&w=150"
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero */}
      <section className="px-6 md:px-8 pt-20 md:pt-24 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start mb-20 md:mb-24">
          <div className="lg:col-span-8 reveal">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8 tracking-tight whitespace-pre-line">
              Clarity in Strategy.{"\n"}Strength in Execution.
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium">
              Averon supports leaders and teams in making informed decisions, strengthening execution, and driving consistent business outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#134E48] text-white px-10 py-4 rounded-none text-base font-bold hover:bg-[#0e3a36] shadow-xl hover:translate-y-[-2px] active:scale-95 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-gray-200 bg-white text-gray-900 px-10 py-4 rounded-none text-base font-bold hover:bg-gray-50 hover:translate-y-[-2px] active:scale-95 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col pt-6 lg:items-end reveal reveal-delay-2">
            <div className="flex items-baseline space-x-3 mb-16 md:mb-20 group">
              <span className="text-7xl md:text-8xl font-bold text-gray-900 tracking-tighter leading-none group-hover:scale-105 transition-transform duration-500">500</span>
              <div className="flex flex-col">
                <Plus size={32} className="text-[#134E48] mb-1 animate-pulse" strokeWidth={4} />
                <span className="text-[#134E48] text-[10px] font-bold uppercase tracking-[0.4em]">Services</span>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex -space-x-4 isolate">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="relative transition-all duration-500 hover:scale-110 hover:z-20 cursor-pointer group/avatar"
                    style={{ zIndex: avatars.length - i }}
                  >
                    <img
                      src={src}
                      className="w-14 h-14 rounded-full border-[3px] border-white shadow-md hover:shadow-xl object-cover ring-1 ring-gray-100 transition-all duration-300"
                      alt="User"
                    />
                    <div className="absolute inset-0 rounded-full bg-[#134E48]/0 group-hover/avatar:bg-[#134E48]/5 transition-colors duration-300"></div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-0.5 overflow-hidden">
                {["Empowering", "Founders to make", "Smarter decisions."].map((line, i) => (
                  <p
                    key={i}
                    className="text-[11px] font-extrabold text-[#94A3B8] uppercase tracking-widest leading-[1.3] animate-in slide-in-from-left-4 fade-in duration-1000"
                    style={{ animationDelay: `${(i + 4) * 150}ms` }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full aspect-[21/9] rounded-none overflow-hidden shadow-2xl reveal reveal-delay-3 group">
          <img
            src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s]"
            alt="Collaboration"
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 border-y border-gray-100 bg-white reveal">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[#94A3B8] text-[10px] font-bold uppercase tracking-[0.5em] mb-20 opacity-80 select-none">
            Partnering with ambitious organizations across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-28">
            {partners.map((logo, i) => (
              <div key={i} className="flex items-center justify-center grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-pointer h-12 md:h-24 lg:h-28">
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-h-full w-auto object-contain transform transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden reveal">
        <div className="text-center mb-20">
          <span className="text-[#134E48] text-[11px] font-bold uppercase tracking-[0.4em] mb-6 block">The Averon Way</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Impact Driven Strategies</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Move from uncertainty to action through focused planning, structured execution, and measurable progress.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center min-h-[600px]">
          <div className="flex flex-col space-y-2">
            {strategies.map((item, idx) => (
              <div
                key={idx}
                className={`relative pl-8 py-8 cursor-pointer group transition-all duration-500 border-l-4 ${activeStrategy === idx ? 'border-[#134E48] bg-gray-50/50 rounded-none' : 'border-transparent text-gray-300 hover:text-gray-500'}`}
                onMouseEnter={() => setActiveStrategy(idx)}
              >
                <div className="flex items-center justify-between pr-8">
                  <div className="flex flex-col gap-2">
                    <h3 className={`text-3xl font-bold tracking-tight transition-all duration-300 ${activeStrategy === idx ? 'text-gray-900' : ''}`}>
                      {item.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-500 ${activeStrategy === idx ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-[16px] text-[#94A3B8] font-medium max-w-[380px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 flex items-center justify-center rounded-none transition-all duration-500 shadow-sm ${activeStrategy === idx ? 'bg-[#134E48] text-white rotate-45 scale-110' : 'bg-transparent text-gray-200 border border-gray-100'}`}>
                    <ArrowRight size={18} className={`transition-transform duration-300 ${activeStrategy === idx ? '-rotate-45' : '-rotate-45'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative rounded-none overflow-hidden h-[600px] shadow-2xl bg-gray-100">
            {strategies.map((item, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-out ${activeStrategy === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'}`}
              >
                <img src={item.img} className="w-full h-full object-cover" alt={item.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="bg-white/95 backdrop-blur-sm p-8 rounded-none shadow-xl border border-white/20">
                    <p className="text-[10px] font-bold text-[#134E48] uppercase tracking-[0.5em] mb-4">Focus Point</p>
                    <p className="text-xl font-bold text-gray-900">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 bg-white reveal">
        <div className="text-center mb-20">
          <span className="text-[#134E48] text-[11px] font-bold uppercase tracking-[0.4em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">How We Support You</h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">Customized approaches designed around your unique objectives.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {[
            { icon: <TrendingUp size={36} />, title: "Business Strategy", desc: "Forging long-term paths designed for market resilience and sustainable growth." },
            { icon: <RotateCw size={36} />, title: "Operational Scaling", desc: "Simplifying internal workflows to unlock capacity and team efficiency." },
            { icon: <Target size={36} />, title: "Precision Execution", desc: "Hands-on implementation support to bridge the gap between vision and reality." }
          ].map((s, i) => (
            <div key={i} className="group bg-white p-12 md:p-16 h-[480px] flex flex-col justify-between border border-gray-100 rounded-none transition-all duration-500 hover:bg-[#134E48] hover:shadow-2xl hover:-translate-y-2">
              <div>
                <div className="mb-12 text-[#134E48] group-hover:text-white opacity-90 transition-colors duration-500">{s.icon}</div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-gray-900 group-hover:text-white transition-colors duration-500">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-teal-50/70 text-lg leading-relaxed transition-colors duration-500">{s.desc}</p>
              </div>
              <button className="flex items-center gap-3 text-base font-bold border-b-2 border-gray-100 group-hover:border-white/20 text-gray-900 group-hover:text-white pb-2 w-fit group-hover:hover:border-white hover:border-gray-900 transition-all duration-500">
                Details <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <TestimonialSection />
      <FAQSection />
    </div>
  );
};

// --- About Us View ---
const AboutUsView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 md:px-8 pt-20 md:pt-28 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-16 mb-24 md:mb-32 reveal">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-none">About<br />Averon.</h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-xl font-medium pt-4">
            Averon is a strategy and execution partner focused on helping organizations think clearly, align effectively, and deliver meaningful outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32 reveal reveal-delay-2">
          {[
            { num: "345+", label: "Success stories" },
            { num: "400+", label: "Global projects" },
            { num: "521+", label: "Strategic plans" },
            { num: "200+", label: "Partnerships" }
          ].map((stat, i) => (
            <div key={i} className="bg-white p-12 md:p-14 border border-gray-100 rounded-none flex flex-col items-center text-center hover:border-[#134E48]/20 transition-all hover:shadow-lg">
              <div className="text-5xl font-bold text-gray-900 tracking-tighter mb-4">{stat.num}</div>
              <div className="text-xs font-bold text-[#134E48] tracking-[0.2em] uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="w-full aspect-[21/9] rounded-none overflow-hidden mb-32 shadow-2xl reveal group">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Office" />
        </div>

        <section className="reveal">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-8">Meet Our Staff</h2>
              <p className="text-[17px] text-[#64748B] font-medium max-w-3xl leading-relaxed">
                Our team brings together experience across strategy, operations, and execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {[
                { name: "Daniel Carter", role: "Strategy Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" },
                { name: "Emma Lewis", role: "Operations Manager", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" },
                { name: "Ryan Patel", role: "Execution Consultant", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" }
              ].map((staff, i) => (
                <div key={i} className="group overflow-hidden rounded-none shadow-md transition-all duration-500">
                  <div className="aspect-[4/5] w-full overflow-hidden">
                    <img src={staff.img} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" alt={staff.name} />
                  </div>
                  <div className="p-10 bg-[#134E48]">
                    <div className="text-2xl font-bold text-white mb-2">{staff.name}</div>
                    <div className="text-[11px] font-medium text-white/70 uppercase tracking-[0.15em]">{staff.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <TestimonialSection />
    </div>
  );
};

// --- Contact View ---
const ContactView: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 md:px-8 pt-20 md:pt-24 pb-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start reveal">
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 tracking-tighter">Let's Connect.</h1>
            <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">Ready to take your operations to the next level? Our specialists are standing by.</p>

            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">First name</label>
                  <input type="text" placeholder="Jane" className="w-full border-b border-slate-200 bg-transparent px-0 py-4 text-xl font-bold text-gray-900 focus:outline-none focus:border-[#134E48] transition-all placeholder:text-slate-400" />
                </div>
                <div className="space-y-4">
                  <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Last name</label>
                  <input type="text" placeholder="Doe" className="w-full border-b border-slate-200 bg-transparent px-0 py-4 text-xl font-bold text-gray-900 focus:outline-none focus:border-[#134E48] transition-all placeholder:text-slate-400" />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full border-b border-slate-200 bg-transparent px-0 py-4 text-xl font-bold text-gray-900 focus:outline-none focus:border-[#134E48] transition-all placeholder:text-slate-400" />
              </div>
              <div className="space-y-4">
                <label className="text-[12px] font-bold text-slate-500 uppercase tracking-widest">Message</label>
                <textarea rows={4} placeholder="How can we help?" className="w-full border-b border-slate-200 bg-transparent px-0 py-4 text-xl font-bold text-gray-900 focus:outline-none focus:border-[#134E48] transition-all resize-none placeholder:text-slate-400"></textarea>
              </div>
              <button className="w-full bg-[#134E48] text-white py-6 rounded-none font-bold text-lg hover:bg-[#0e3a36] shadow-xl active:scale-95 transition-all duration-300">
                Send Request
              </button>
            </form>
          </div>
          <div className="h-[600px] lg:h-full rounded-none overflow-hidden shadow-2xl sticky top-32">
            <img src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-full object-cover" alt="Support" />
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
};

// --- Footer Component ---
const Footer: React.FC<{ setTab: (t: string) => void }> = ({ setTab }) => {
  return (
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
          <div className="flex items-center">
            <Logo className="w-24 h-24" />
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[14px] font-bold text-gray-400">
            {[
              { label: "Home", id: "home" },
              { label: "About Us", id: "about" },
              { label: "Contact", id: "contact" }
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => { setTab(link.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="hover:text-[#134E48] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {[Twitter, Facebook, Instagram, Github].map((Icon, idx) => (
              <a key={idx} href="#" className="w-11 h-11 rounded-none bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#134E48] hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 text-center">
          <p className="text-sm text-slate-400 font-medium">
            &copy; 2025 Averon. Precision strategy & execution.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [tab, setTab] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [tab]);

  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased flex flex-col selection:bg-[#134E48] selection:text-white">
      <Header currentTab={tab} setTab={setTab} />
      <main className="flex-grow">
        {tab === 'home' && <HomeView setTab={setTab} />}
        {tab === 'about' && <AboutUsView />}
        {tab === 'contact' && <ContactView />}
      </main>
      <Footer setTab={setTab} />
    </div>
  );
};

export default App;