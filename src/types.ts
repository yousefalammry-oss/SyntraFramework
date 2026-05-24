/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactRequest {
  id: string;
  name: string;
  organization: string;
  email: string;
  timestamp: string;
  sentryCode?: string;
}

export type Language = "ar" | "en";

export interface StaticTranslation {
  hero: {
    title: string;
    badge: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  pillars: {
    title: string;
    subtitle: string;
    p1Title: string;
    p1Desc: string;
    p1Footer: string;
    p2Title: string;
    p2Desc: string;
    p2Footer: string;
    p3Title: string;
    p3Desc: string;
    p3Footer: string;
  };
  architecture: {
    badge: string;
    text: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    notice: string;
    placeholderName: string;
    placeholderOrg: string;
    placeholderEmail: string;
    button: string;
    submitting: string;
    successMessage: string;
    successSub: string;
    codeLabel: string;
    closeBtn: string;
    directEmailContact: string;
  };
  footer: {
    rights: string;
    disclaimer: string;
  };
}
