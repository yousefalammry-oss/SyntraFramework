/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Target, 
  Cpu, 
  Layers, 
  Globe, 
  ArrowRight, 
  ArrowLeft,
  Building, 
  Mail, 
  User, 
  CheckCircle, 
  Lock, 
  ChevronDown,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translations } from "./translations";
import { ContactRequest, Language } from "./types";
import SyntraLogo from "./components/SyntraLogo";
import { 
  PredictiveSentryIcon, 
  AutomatedResponseIcon, 
  EnterpriseResilienceIcon 
} from "./components/UploadedIcons";
import { SdaiaLogo } from "./components/SdaiaLogo";

// @ts-ignore
import predictiveImg from "../predictive.png";
// @ts-ignore
import growthImg from "../growth.png";
// @ts-ignore
import enduranceImg from "../endurance.png";

export default function App() {
  // Localization state
  const [lang, setLang] = useState<Language>("ar");
  const t = translations[lang];

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<ContactRequest | null>(null);
  const [submissionHistory, setSubmissionHistory] = useState<ContactRequest[]>([]);

  // Form errors
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load previous submissions from localStorage for demonstration of functional state
  useEffect(() => {
    try {
      const stored = localStorage.getItem("syntra_requests");
      if (stored) {
        setSubmissionHistory(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Error reading localStorage", e);
    }
  }, []);

  // Handle language switch
  const toggleLanguage = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  // Form input change handler
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (validationError) setValidationError(null);
  };

  // Form submit handler with secure code generation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Basic Validation
    if (!formData.name.trim() || !formData.organization.trim() || !formData.email.trim()) {
      setValidationError(
        lang === "ar" 
          ? "الرجاء تعبئة جميع الحقول بشكل صحيح لإتمام الطلب السيادي." 
          : "Please fill all fields carefully to finalize your strategic request."
      );
      return;
    }

    if (!formData.email.includes("@")) {
      setValidationError(
        lang === "ar" 
          ? "برجاء توفير بريد إلكتروني مهني صحيح." 
          : "Please provide a valid professional email address."
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate elite protocol authorization delay
    setTimeout(() => {
      const secureCode = `PS-SE-${Math.floor(1000 + Math.random() * 9000)}-${lang.toUpperCase()}`;
      const newRequest: ContactRequest = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substr(2, 9),
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        timestamp: new Date().toISOString(),
        sentryCode: secureCode
      };

      try {
        const updated = [newRequest, ...submissionHistory];
        setSubmissionHistory(updated);
        localStorage.setItem("syntra_requests", JSON.stringify(updated));
      } catch (err) {
        console.error("Storage write error", err);
      }

      setSuccessData(newRequest);
      setIsSubmitting(false);
      // Reset fields
      setFormData({ name: "", organization: "", email: "" });
    }, 1200);
  };

  // Smooth scroll helper
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isRtl = lang === "ar";

  return (
    <div 
      className="min-h-screen text-neutral-200 bg-[#121212] selection:bg-cyan-500 selection:text-black overflow-x-hidden relative"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Sleek Top Radial Gradients of premium dark overlay */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-neutral-900/40 via-[#121212]/20 to-transparent -z-10 opacity-70 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-[#083344]/15 blur-[130px] rounded-full pointer-events-none" />

      {/* Header Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[#121212]/80 border-b border-neutral-900/80 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo Brand Title with isDark={true} */}
          <button 
            onClick={() => scrollToId("philosophy")} 
            className="flex items-center hover:opacity-90 active:scale-98 transition-all cursor-pointer border-none bg-transparent p-0"
            aria-label="Syntra Home"
          >
            <SyntraLogo showText={true} size={36} isDark={true} />
          </button>

          {/* Quick Menu Anchors */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <button 
              onClick={() => scrollToId("philosophy")} 
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {lang === "ar" ? "القيمة الجوهرية" : "Philosophy"}
            </button>
            <button 
              onClick={() => scrollToId("architecture")} 
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {lang === "ar" ? "البنية السيادية" : "Sovereign Framework"}
            </button>
            <button 
              onClick={() => scrollToId("membership")} 
              className="hover:text-white transition-colors duration-150 cursor-pointer"
            >
              {lang === "ar" ? "الاستعراض الاستكشافي" : "Discovery Session"}
            </button>
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-800 bg-[#1a1a1a] hover:border-neutral-700 hover:bg-[#222222] text-neutral-300 active:scale-95 transition-all text-xs font-semibold cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-neutral-500" />
              <span>{lang === "ar" ? "EN" : "العربية"}</span>
            </button>

            {/* Header CTA */}
            <button
              onClick={() => scrollToId("membership")}
              className="hidden sm:inline-flex items-center justify-center px-4.5 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700 active:scale-95 font-semibold text-xs tracking-tight transition-all cursor-pointer shadow-sm"
            >
              {lang === "ar" ? "احجز جلستك" : "Book Briefing"}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          
          {/* Next-Gen Badge Overlay */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-neutral-900/60 border border-neutral-800 rounded-full text-xs font-semibold tracking-wider text-neutral-300 mb-6 uppercase shadow-sm"
          >
            <span>{t.hero.badge}</span>
          </motion.div>

          {/* High-style light typography header */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight"
          >
            {lang === "ar" ? (
              <>
                إطار عمل <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-350">{t.hero.title}</span>
              </>
            ) : (
              <>
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-350">{t.hero.title}</span>
              </>
            )}
          </motion.h1>

          {/* Subtitle with premium, airy sizing */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xl sm:text-2xl text-neutral-300 mb-4 font-light max-w-3xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Brand Slogan */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-neutral-450 mb-10 max-w-2xl mx-auto font-normal italic"
          >
            {t.hero.description}
          </motion.p>

          {/* Call to action button with Cyan Neon backglow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="flex justify-center"
          >
            <button
              onClick={() => scrollToId("membership")}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-full font-semibold text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.65)] hover:shadow-[0_0_35px_rgba(6,182,212,0.85)] border border-cyan-500/30 cursor-pointer"
            >
              <span>{t.hero.cta}</span>
            </button>
          </motion.div>

          {/* Subtle Indicator Arrow */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-16 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => scrollToId("philosophy")}
          >
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
              {lang === "ar" ? "استكشف الفلسفة" : "EXPLORE THE CORES"}
            </span>
            <ChevronDown className="w-4 h-4 text-neutral-500 animate-bounce" />
          </motion.div>
        </section>


        {/* THE CORE VALUE - 3 PILLARS SECTION */}
        <section id="philosophy" className="py-24 bg-[#161616] border-y border-[#181818] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Direct minimalist headers */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {t.pillars.title}
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500 mx-auto mb-4" />
              <p className="text-neutral-400 text-base sm:text-lg font-light">
                {t.pillars.subtitle}
              </p>
            </div>

            {/* 3 Pillars Clean Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Predictive Sentry */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1c1c1c] border border-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-cyan-950/20 hover:border-neutral-700/80 transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 bg-[#242424] rounded-2xl flex items-center justify-center mb-6 border border-neutral-800/80 p-3">
                    <img 
                      src={predictiveImg} 
                      alt={t.pillars.p1Title} 
                      className="w-full h-full object-contain select-none brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {t.pillars.p1Title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                    {t.pillars.p1Desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs text-neutral-500 font-sans font-semibold tracking-wide pt-2 border-t border-neutral-850">
                  <span>{t.pillars.p1Footer}</span>
                </div>
              </motion.div>

              {/* Card 2: Automated Response */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1c1c1c] border border-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-cyan-950/20 hover:border-neutral-700/80 transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 bg-[#242424] rounded-2xl flex items-center justify-center mb-6 border border-neutral-800/80 p-3">
                    <img 
                      src={growthImg} 
                      alt={t.pillars.p2Title} 
                      className="w-full h-full object-contain select-none brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {t.pillars.p2Title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                    {t.pillars.p2Desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs text-neutral-500 font-sans font-semibold tracking-wide pt-2 border-t border-neutral-850">
                  <span>{t.pillars.p2Footer}</span>
                </div>
              </motion.div>

              {/* Card 3: Enterprise Resilience */}
              <motion.div 
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#1c1c1c] border border-neutral-800 p-8 rounded-3xl shadow-lg hover:shadow-cyan-950/20 hover:border-neutral-700/80 transition-all relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 bg-[#242424] rounded-2xl flex items-center justify-center mb-6 border border-neutral-800/80 p-3">
                    <img 
                      src={enduranceImg} 
                      alt={t.pillars.p3Title} 
                      className="w-full h-full object-contain select-none brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {t.pillars.p3Title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
                    {t.pillars.p3Desc}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1 text-xs text-neutral-500 font-sans font-semibold tracking-wide pt-2 border-t border-neutral-850">
                  <span>{t.pillars.p3Footer}</span>
                </div>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ARCHITECTURE SECTION - HIGH LEVEL */}
        <section id="architecture" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            
            {/* Architecture compliance badge */}
            <div className="inline-block px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs font-semibold tracking-wider text-neutral-400 mb-8 uppercase">
              <span>{t.architecture.badge}</span>
            </div>

            {/* Pristine high-conviction slogan statement */}
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-tight px-4 sm:px-8">
              "{t.architecture.text}"
            </blockquote>
            
            <div className="mt-8 flex items-center justify-center gap-6">
              <div className="pt-4 border-t border-neutral-900 flex items-center gap-3">
                <span className="text-xs font-mono text-neutral-500 font-bold tracking-wider">
                  {lang === "ar" ? "معتمدة بالكامل للتوافق التنظيمي الوطني والمستثمرين" : "Regulatory Compliance Standard (SDAIA)"}
                </span>
              </div>
            </div>
          </div>
        </section>


        {/* ACCESS / CTA FORM SECTION (Sleek light frame style) */}
        <section id="membership" className="py-24 bg-[#121212] border-t border-neutral-900 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="bg-[#1c1c1c] border border-neutral-800/80 p-8 sm:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
              
              {/* Sleek Line Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 shadow-[0_1px_10px_rgba(6,182,212,0.4)]" />

              {/* Absolute Badge showing limited state */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-8 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                    {t.ctaSection.title}
                  </h2>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {t.ctaSection.subtitle}
                  </p>
                </div>
                
                <span className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono font-semibold">
                  <Lock className="w-3.5 h-3.5 text-cyan-500" />
                  <span>CLOSED PREVIEW</span>
                </span>
              </div>

              {/* Explanatory Notice Alert Banner */}
              <div className="bg-[#242424] border border-neutral-800 px-4 py-3.5 rounded-xl flex gap-3 items-start mb-8">
                <Info className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {t.ctaSection.notice}
                </p>
              </div>

              {/* Dynamic form / success animations */}
              <AnimatePresence mode="wait">
                {!successData ? (
                  <motion.form 
                    key="request-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5"
                  >
                    
                    {/* Error container */}
                    {validationError && (
                      <div className="bg-red-950/40 border border-red-900/50 text-red-200 text-sm p-4 rounded-xl font-medium">
                        {validationError}
                      </div>
                    )}

                    {/* FIELD 1: Full Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        {lang === "ar" ? "الاسم الكريم للحاضر" : "Personal Name / Delegate Name"}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t.ctaSection.placeholderName}
                          disabled={isSubmitting}
                          className="w-full bg-[#242424] border border-neutral-800 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:border-cyan-500 text-sm text-neutral-100 placeholder-neutral-505 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* FIELD 2: Organization Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        {lang === "ar" ? "الجهة الحكومية أو الاستثمارية" : "Strategic Institution / Agency"}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleInputChange}
                          placeholder={t.ctaSection.placeholderOrg}
                          disabled={isSubmitting}
                          className="w-full bg-[#242424] border border-neutral-800 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:border-cyan-500 text-sm text-neutral-100 placeholder-neutral-505 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* FIELD 3: Business E-mail */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                        {lang === "ar" ? "قناة الاتصال الرسمية" : "Official Contact Channel"}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-neutral-500">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={t.ctaSection.placeholderEmail}
                          disabled={isSubmitting}
                          className="w-full bg-[#242424] border border-neutral-800 rounded-xl py-3 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-950 focus:border-cyan-500 text-sm text-neutral-100 placeholder-neutral-505 transition-all font-sans"
                        />
                      </div>
                    </div>

                    {/* Submit Button with Cyan Neon backglow to match premium theme controls */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-black border border-cyan-500/30 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer disabled:opacity-50 shadow-[0_0_20px_rgba(6,182,212,0.45)] hover:shadow-[0_0_28px_rgba(6,182,212,0.65)] active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>{t.ctaSection.submitting}</span>
                        </>
                      ) : (
                        <span>{t.ctaSection.button}</span>
                      )}
                    </button>

                    {/* Direct Contact Email Option */}
                    <div className="pt-5 border-t border-dashed border-neutral-800 text-center text-xs text-neutral-400">
                      <span>{t.ctaSection.directEmailContact} </span>
                      <a 
                        href="mailto:info@baytaksmart.com.sa" 
                        className="font-mono font-bold text-neutral-300 hover:text-white hover:underline transition-all select-all inline-block mt-1 sm:mt-0"
                      >
                        info@baytaksmart.com.sa
                      </a>
                    </div>

                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyan-950/40 border border-cyan-800/80 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-cyan-400" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {t.ctaSection.successMessage}
                    </h3>
                    
                    <p className="whitespace-pre-line text-neutral-400 text-sm leading-relaxed max-w-lg mx-auto mb-8 font-light">
                      {t.ctaSection.successSub}
                    </p>



                    {/* Direct Contact Email Option on Success */}
                    <div className="mb-6 pt-4 border-t border-dashed border-neutral-800 text-center text-xs text-neutral-400 max-w-md mx-auto">
                      <span>{t.ctaSection.directEmailContact} </span>
                      <a 
                        href="mailto:info@baytaksmart.com.sa" 
                        className="font-mono font-bold text-neutral-300 hover:text-white hover:underline transition-all select-all inline-block mt-1 sm:mt-0"
                      >
                        info@baytaksmart.com.sa
                      </a>
                    </div>

                    <button
                      onClick={() => setSuccessData(null)}
                      className="px-6 py-2.5 rounded-xl border border-neutral-800 bg-[#242424] text-neutral-300 text-xs font-semibold hover:bg-neutral-850 active:scale-95 transition-all cursor-pointer"
                    >
                      {t.ctaSection.closeBtn}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Strategic Request History Log */}
            {submissionHistory.length > 0 && (
              <div className="mt-10 bg-[#161616] rounded-2xl p-6 border border-neutral-800 shadow-sm">
                <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-450 uppercase mb-3 flex items-center gap-1.5 justify-center md:justify-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
                  {lang === "ar" ? "سجل استمارات الاستعراض النشطة" : "Active Strategic Access Logs"}
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs text-neutral-500">
                    <thead>
                      <tr className="border-b border-neutral-800 text-neutral-450">
                        <th className="pb-2 font-semibold">{lang === "ar" ? "الاسم" : "NAME"}</th>
                        <th className="pb-2 font-semibold">{lang === "ar" ? "المؤسسة" : "INSTITUTION"}</th>
                        <th className="pb-2 font-semibold text-right">{lang === "ar" ? "الحالة" : "STATUS"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                      {submissionHistory.slice(0, 3).map((item) => (
                        <tr key={item.id}>
                          <td className="py-2.5 truncate max-w-[120px] pr-2 text-white">{item.name}</td>
                          <td className="py-2.5 truncate max-w-[150px] text-neutral-400">{item.organization}</td>
                          <td className="py-2.5 text-right font-bold text-cyan-400 animate-pulse">QUEUED</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

          </div>
        </section>


        {/* FOOTER SECTION: SDAIA/APPLE MINIMALISTIC ALIGNMENT */}
        <footer className="bg-[#0e0e0e] border-t border-neutral-900 px-8 py-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-neutral-400 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-start">
            <div className="flex items-center gap-2">
              <SyntraLogo size={24} isDark={true} />
              <span className="font-semibold text-white">SDAIA Compliant</span>
            </div>
            <span className="hidden sm:inline-block w-1.5 h-1.5 bg-neutral-850 rounded-full"></span>
            <span>{t.footer.rights}</span>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
            <span className="text-xs text-neutral-500 tracking-wider uppercase font-mono">{t.footer.disclaimer}</span>
            <button 
              onClick={() => scrollToId("membership")} 
              className="text-sm font-bold border-b-2 border-cyan-500 pb-0.5 text-white hover:text-cyan-400 hover:border-cyan-400 transition-colors cursor-pointer"
            >
              {lang === "ar" ? "طلب استعراض مباشر" : "Book Discovery Session"}
            </button>
          </div>
        </footer>

      </main>
    </div>
  );
}
