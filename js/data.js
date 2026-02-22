const jobListParent = document.getElementById("jobList");

const jobs = [
  {
    id: 1,
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳40,000 - ৳60,000",
    description: "Looking for a skilled Frontend Developer with experience in React and Tailwind CSS."
  },
  {
    id: 2,
    companyName: "SoftEdge Ltd.",
    position: "Backend Developer",
    location: "Remote",
    type: "Full-Time",
    salary: "৳50,000 - ৳80,000",
    description: "Seeking a Node.js developer with experience in REST APIs and MongoDB."
  },
  {
    id: 3,
    companyName: "Creative IT Hub",
    position: "UI/UX Designer",
    location: "Chattogram, Bangladesh",
    type: "Part-Time",
    salary: "৳25,000 - ৳35,000",
    description: "Design modern and user-friendly interfaces for web and mobile applications."
  },
  {
    id: 4,
    companyName: "CyberNetics",
    position: "Cyber Security Analyst",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳60,000 - ৳90,000",
    description: "Monitor security threats and implement security policies to protect systems."
  },
  {
    id: 5,
    companyName: "DataCore Analytics",
    position: "Data Analyst",
    location: "Remote",
    type: "Contract",
    salary: "৳45,000 - ৳70,000",
    description: "Analyze business data and generate reports using Python and SQL."
  },
  {
    id: 6,
    companyName: "Appify Labs",
    position: "Mobile App Developer",
    location: "Sylhet, Bangladesh",
    type: "Full-Time",
    salary: "৳50,000 - ৳75,000",
    description: "Develop Android applications using Kotlin and modern architecture."
  },
  {
    id: 7,
    companyName: "CloudSphere",
    position: "DevOps Engineer",
    location: "Dhaka, Bangladesh",
    type: "Full-Time",
    salary: "৳70,000 - ৳1,00,000",
    description: "Manage CI/CD pipelines and cloud infrastructure using AWS and Docker."
  },
  {
    id: 8,
    companyName: "NextGen Academy",
    position: "Junior JavaScript Instructor",
    location: "Remote",
    type: "Part-Time",
    salary: "৳20,000 - ৳30,000",
    description: "Teach JavaScript basics and advanced concepts to beginner students."
  }
];

const interviewJobs = [];
const rejectedJobs = ['', '', ''];


