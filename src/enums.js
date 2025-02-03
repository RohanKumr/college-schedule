
// ALL Courses
export const COURSE_NAMES = {
  MANAGEMENT_LEADERSHIP: "Management Leadership",
  WEB_TRENDS: "Web Trends",
  DOT_NET: ".Net",
  CAREER_MANAGEMENT: "Career Management",
  WCMS: "WCMS",
  WEB_SECURITY_QUALITY_ASSURANCE: "Web Security & Quality Ass",
  CAPSTONE: "Capstone",
};

export const MangementAndLeadership = () => {
  // Includes everything
  const course = COURSE_NAMES.MANAGEMENT_LEADERSHIP;
  return [
    `9 - feb - ${course} - 15 - Reflection 1: MBTI Assessment`,
    `23 - feb - ${course} - 15 - Reflection Assignment 2: EQ Assessment`,
    `9 - mar - ${course} - 15 - Simulation Assignment #1: Applying Inclusive Communication`,
    `16 - mar - ${course} - 15 - Simulation Assignment #2: Assessing Organizational Culture`,
    `6 - apr - ${course} - 10 - Group Contemporary Issue Assignment Part B: The Report`,
    `12 - apr - ${course} - 10 - Group Contemporary Issue Report Part C: The Presentation`,
    `16 - apr - ${course} - 10 - Final Assignment`,
  ];
};

export const WebTrends = () => {
  // Includes everything
  const course = COURSE_NAMES.WEB_TRENDS
  return [    
    `6 - feb - ${course} - 10 - Quiz 2: BlockChain`,
    `20 - feb - ${course} - 7.5 - Midterm`,
    `6 - mar - ${course} - 10 - Quiz 3: Cloud Computing`,
    `13 - mar - ${course} - 10 - Quiz 4: React`,
    `20 - mar - ${course} - 5 - Quiz 5: Single Page App`,
    `27 - mar - ${course} - 2.5 - Quiz 6: IOT`,
    `7 - apr - ${course} - 10 - Quiz 7: Amazon Lex & Amazon Transcribe `,
    `20 - apr - ${course} - 35 - Final Project `,
  ];
};

export const dotNet = () => {
  // Includes everything
  const course = COURSE_NAMES.DOT_NET

  return [
    `16 - feb - ${course} - 15 - Assignment 2`,
    `21 - feb - ${course} - 15 - MidTerm`,
    `30 - mar - ${course} - 15 - Assignment 3`,
    `11 - apr - ${course} - 20 - Final Exam`,
    `17 - apr - ${course} - 20 - Group Project`,
  ];
};

export const CareerManagement = () => {
  // Includes everything
  const course = COURSE_NAMES.CAREER_MANAGEMENT
  return [
    `16 - feb - ${course} - 20 - Assignment 1`,
    `23 - feb - ${course} - 20 - Assignment 2`,
    `16 - mar - ${course} - 25 - Assignment 3`,
    `6 - apr - ${course} - 20 - Assignment 4`,
    `13 - apr - ${course} - 10 - Quiz`,
  ];
};

export const WCMS = () => {
  // Missing Final Date
  const course = COURSE_NAMES.WCMS
  
  return [
    `18 - feb - ${course} - 10 - MidTerm Quiz`,
    `18 - feb - ${course} - 10 - MidTerm Practical`,
    `22 - feb - ${course} - 30 - Project 1: eCommerce`,
    `12 - apr - ${course} - 30 - Project 2: Group D3`,
    `TBA - apr - ${course} - 20 - Final Exam`, 
  ];
};

export const WebSecuirityQualityAssurance = () => {
  // Missing Dates
  const course = COURSE_NAMES.WEB_SECURITY_QUALITY_ASSURANCE
  return [
    `21 - feb - ${course} - 30 - Project 1: QA Testing Plan`,
    `TBA - feb - ${course} - 30 - Project 2: Security Presentation`,
    `TBA - feb - ${course} - 20 - Midterm`,
    `TBA - apr - ${course} - 20 - Final Exam`, 
  ];
};

export const Capstone = () => {
  // Missing Dates
  const course = COURSE_NAMES.CAPSTONE
  return [
    `21 - jan - ${course} - 5 - Agile & Scrum Quiz`,
    `26 - jan - ${course} - 5 - Project Proposal`,
    `6 - feb - ${course} - 15 - Sprint-1 Implementation`,
    `6 - feb - ${course} - 5 - Scrum-1 Activity`,
    `TBA - feb - ${course} - 15 - Sprint-2 Implementation`,
    `TBA - feb - ${course} - 5 - Scrum-2 Activity`,
    `TBA - feb - ${course} - 15 - Sprint-3 Implementation`,
    `TBA - feb - ${course} - 5 - Scrum-3 Activity`,
    `TBA - feb - ${course} - 15 - Sprint-4 Implementation`,
    `TBA - feb - ${course} - 5 - Scrum-4 Activity`,
    `TBA - feb - ${course} - 5 - Final Report`,
    `TBA - apr - ${course} - 5 - Group Presentation`, 
  ];

}
