/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'ue5' | 'unity' | 'ar' | 'other';
  engine: string;
  type: string;
  role: string;
  desc: string;
  features: string[];
  badge: string;
  pills: string[];
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  dateRange: string;
  points: string[];
  certificateIssuer?: string;
  durationConfirmed?: string;
}

export interface Education {
  id: string;
  years: string;
  degree: string;
  school: string;
  cgpa?: string;
  notes?: string[];
}

export interface SkillGroup {
  id: string;
  icon: string;
  name: string;
  desc: string;
  tags: string[];
}

export interface SkillProficiency {
  name: string;
  percentage: number;
}
