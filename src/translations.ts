/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StaticTranslation } from "./types";

export const translations: Record<"ar" | "en", StaticTranslation> = {
  ar: {
    hero: {
      title: "سينترا",
      badge: "إطار عمل سينترا | الذكاء الاستباقي للمخاطر",
      subtitle: "الذكاء الاستباقي لحماية وتأمين سلاسل الإمداد والاستثمارات اللوجستية.",
      description: "نحن لا ننتظر حدوث الأزمة؛ بل نتنبأ بها قبل أن تصبح خبراً عالمياً.",
      cta: "طلب استعراض حي للنظام"
    },
    pillars: {
      title: "الفلسفة والقيمة الجوهرية",
      subtitle: "ثلاث ركائز استراتيجية تعيد صياغة الأمن اللوجستي.",
      p1Title: "الرصد التنبئي",
      p1Desc: "حماية استباقية للمنظمات عبر استشعار الاضطرابات والمخاطر العالمية قبل تأثيرها على استمرارية الأعمال والاستثمارات المحلية.",
      p1Footer: "حماية استباقية متكاملة",
      p2Title: "الاستجابة الذكية",
      p2Desc: "تقليص زمن التعامل مع الأزمات الحادة إلى ثوانٍ معدودة عبر تحويل التهديدات اللحظية إلى مسارات عمل تنفيذية ومباشرة.",
      p2Footer: "كفاءة تشغيلية مطلقة",
      p3Title: "الحصانة المؤسسية",
      p3Desc: "تمكين المنشآت الكبرى من امتصاص الصدمات الاقتصادية والجيوسياسية الخارجية وتأمين البدائل الفعّالة بكفاءة تامة.",
      p3Footer: "مرونة وصمود استراتيجي"
    },
    architecture: {
      badge: "بنية ومواءمة سيادية",
      text: "بنية تحتية موزعة، مرنة، وممتثلة بالكامل لأعلى معايير سيادة البيانات والتوافق التنظيمي (SDAIA)."
    },
    ctaSection: {
      title: "بوابة الانضمام الحصري",
      subtitle: "بادر بطلب الوصول الاستعراضي الخاص كشريك أو مستثمر استراتيجي.",
      notice: "تنبيه: المنصة حالياً في مرحلة الاستعراض الخاص للشركاء والمستثمرين الاستراتيجيين فقط.",
      placeholderName: "الاسم الكامل",
      placeholderOrg: "الجهة / المؤسسة",
      placeholderEmail: "البريد الإلكتروني المهني",
      button: "احجز جلستك الاستكشافيه وتحدث معنا ➔",
      submitting: "بروتوكول التفويض جارٍ...",
      successMessage: "تم تسجيل طلبكم بنجاح",
      successSub: "يقوم فريق علاقات الشركاء حالياً بالتحقق من البيانات المؤسسية المرفوعة. سيتم التواصل معكم عبر البريد الإلكتروني خلال 24 ساعة عمل لتنسيق موعد الجلسة المغلقة.",
      codeLabel: "رمز الملف الأمني الخاص بك:",
      closeBtn: "إغلاق",
      directEmailContact: "أو تواصل معنا مباشرة عبر البريد الإلكتروني لحجز جلستك:"
    },
    footer: {
      rights: "جميع الحقوق محفوظة © ٢٠٢٦ إطار عمل سينترا. منصة سيادية لحماية الإمداد.",
      disclaimer: "نسخة خاصة ومحدودة • مخصص للشركاء ومستشاري الأمن اللوجستي"
    }
  },
  en: {
    hero: {
      title: "Syntra Framework",
      badge: "Syntra Framework | Proactive Risk Intelligence",
      subtitle: "Proactive intelligence to protect and secure supply chains and logistical investments.",
      description: "We do not wait for the crisis to happen; we predict it before it becomes world news.",
      cta: "Request Live System Demo"
    },
    pillars: {
      title: "Core Philosophy & Value",
      subtitle: "Three strategic pillars redefining logistical security and resilience.",
      p1Title: "Predictive Sentry",
      p1Desc: "Proactive protection for enterprises by detecting global disruptions and threats before they affect local business continuity and investments.",
      p1Footer: "Comprehensive Proactive Protection",
      p2Title: "Automated Response",
      p2Desc: "Reducing response times down to seconds by transforming immediate threats into direct, actionable execution workflows.",
      p2Footer: "Absolute Operational Efficiency",
      p3Title: "Enterprise Resilience",
      p3Desc: "Empowering major organizations to absorb external economic and geopolitical shocks and seamlessly secure viable alternative pathways.",
      p3Footer: "Strategic Resilience & Agility"
    },
    architecture: {
      badge: "Sovereign Compliance & Architecture",
      text: "A highly resilient, distributed architecture compliant with the stringent data sovereignty and regulatory standards (SDAIA)."
    },
    ctaSection: {
      title: "Exclusive Private Access",
      subtitle: "Request an exclusive private screening as a partner or strategic investor.",
      notice: "Notice: The platform is currently in a restricted preview phase for strategic partners and institutional selectors.",
      placeholderName: "Your Full Name",
      placeholderOrg: "Organization / Institution",
      placeholderEmail: "Professional Email Address",
      button: "Book Your Discovery Session & Talk to Us ➔",
      submitting: "Authorizing security profile...",
      successMessage: "Your Request Has Been Successfully Registered",
      successSub: "Our Partner Relations team is currently verifying the submitted institutional data. We will contact you via email within 24 business hours to schedule your closed-door briefing.",
      codeLabel: "Your secure sentry token:",
      closeBtn: "Close Window",
      directEmailContact: "Or email us directly to book your discovery session:"
    },
    footer: {
      rights: "All rights reserved © 2026 Syntra Framework. Sovereign Supply Resilience.",
      disclaimer: "Private & Limited Edition • Reserved for Partners & Logistics Security Advisors"
    }
  }
};
