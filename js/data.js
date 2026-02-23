const jobListParent = document.getElementById("jobList");

// all jobs are stored in this array
const jobs = [
  {
    id: 1,
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    jobStatus: "Not Applied",
    description: "Looking for a skilled Frontend Developer with experience in React and Tailwind CSS."
  },
  {
    id: 2,
    companyName: "SoftEdge Ltd.",
    position: "Backend Developer",
    location: "Remote",
    type: "Full-Time",
    salary: "৳50,000 - ৳80,000",
    jobStatus: "Not Applied",
    description: "Seeking a Node.js developer with experience in REST APIs and MongoDB."
  },
  {
    id: 3,
    companyName: "Creative IT Hub",
    position: "UI/UX Designer",
    location: "Chattogram, Bangladesh",
    type: "Part-Time",
    salary: "৳25,000 - ৳35,000",
    jobStatus: "Not Applied",
    description: "Design modern and user-friendly interfaces for web and mobile applications."
  },
  {
    id: 4,
    companyName: "CyberNetics",
    position: "Cyber Security Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳60,000 - ৳90,000",
    jobStatus: "Not Applied",
    description: "Monitor security threats and implement security policies to protect systems."
  },
  {
    id: 5,
    companyName: "DataCore Analytics",
    position: "Data Analyst",
    location: "Remote",
    type: "Contract",
    salary: "৳45,000 - ৳70,000",
    jobStatus: "Not Applied",
    description: "Analyze business data and generate reports using Python and SQL."
  },
  {
    id: 6,
    companyName: "Appify Labs",
    position: "Mobile App Developer",
    location: "Sylhet, Bangladesh",
    type: "Full-Time",
    salary: "৳50,000 - ৳75,000",
    jobStatus: "Not Applied",
    description: "Develop Android applications using Kotlin and modern architecture."
  },
  {
    id: 7,
    companyName: "CloudSphere",
    position: "DevOps Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳70,000 - ৳1,00,000",
    jobStatus: "Not Applied",
    description: "Manage CI/CD pipelines and cloud infrastructure using AWS and Docker."
  },
  {
    id: 8,
    companyName: "NextGen Academy",
    position: "Junior JavaScript Instructor",
    location: "Remote",
    type: "Part-Time",
    salary: "৳20,000 - ৳30,000",
    jobStatus: "Not Applied",
    description: "Teach JavaScript basics and advanced concepts to beginner students."
  },
  {
    id: 9,
    companyName: "Bright Future Tech",
    position: "Full Stack Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳60,000 - ৳90,000",
    jobStatus: "Not Applied",
    description: "Looking for a Full Stack Developer experienced in React, Node.js and MongoDB."
  },
  {
    id: 10,
    companyName: "Digital Wave Agency",
    position: "SEO Specialist",
    location: "Remote",
    type: "Contract",
    salary: "৳30,000 - ৳50,000",
    jobStatus: "Not Applied",
    description: "Manage on-page and off-page SEO strategies to improve search rankings."
  },
  {
    id: 11,
    companyName: "SecureNet Systems",
    position: "Network Engineer",
    location: "Khulna, Bangladesh",
    type: "Full-Time",
    salary: "৳45,000 - ৳70,000",
    jobStatus: "Not Applied",
    description: "Maintain and troubleshoot enterprise-level network infrastructure."
  },
  {
    id: 12,
    companyName: "CodeCrafters Ltd.",
    position: "Junior React Developer",
    location: "Remote",
    type: "Internship",
    salary: "৳15,000 - ৳25,000",
    jobStatus: "Not Applied",
    description: "Assist in building modern web applications using React and REST APIs."
  },
  {
    id: 13,
    companyName: "DataBridge Solutions",
    position: "Business Intelligence Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳55,000 - ৳85,000",
    jobStatus: "Not Applied",
    description: "Work with data visualization tools like Power BI and Tableau."
  },
  {
    id: 14,
    companyName: "SkyHigh Innovations",
    position: "Cloud Engineer",
    location: "Remote",
    type: "Full-Time",
    salary: "৳70,000 - ৳1,10,000",
    jobStatus: "Not Applied",
    description: "Deploy and manage cloud infrastructure using AWS and Docker."
  },
  {
    id: 15,
    companyName: "NextStep IT",
    position: "Technical Support Engineer",
    location: "Rajshahi, Bangladesh",
    type: "Full-Time",
    salary: "৳25,000 - ৳40,000",
    jobStatus: "Not Applied",
    description: "Provide technical support and troubleshoot client-side software issues."
  },
  {
    id: 16,
    companyName: "InnoSoft Global",
    position: "Python Developer",
    location: "Remote",
    type: "Part-Time",
    salary: "৳35,000 - ৳60,000",
    jobStatus: "Not Applied",
    description: "Develop backend systems and automation scripts using Python."
  }
];

// interview and rejected jobs are stored in these arrays
const interviewJobs = [];
const rejectedJobs = [];


