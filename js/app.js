 

function activeBtn(btn) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  allBtn.classList.add("bg-white", "text-gray-600");

  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.add("bg-white", "text-gray-600");

  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.add("bg-white", "text-gray-600");  

    btn.classList.remove("bg-white", "text-gray-600");
    btn.classList.add("bg-[#3B82F6]", "text-white");
    
    if(btn.id === "allBtn") {

        jobsDisplay(btn.id,jobs);

    }
    if(btn.id === "interviewBtn") {

        jobsDisplay(btn.id, interviewJobs);


    }
    if(btn.id === "rejectedBtn") {
        
        jobsDisplay(btn.id,rejectedJobs);

    }
}



jobListParent.addEventListener("click", (event) => {
    if(event.target.classList.contains("interview-btn")) {
        
        jobStatusChange(event, "Interview", interviewJobs);
        updateJobStatus();
        
    }
    if(event.target.classList.contains("rejected-btn")) {
        jobStatusChange(event, "Rejected", rejectedJobs);
        updateJobStatus();
        
    }
    if(event.target.closest(".delete-btn")) {
        
        const jobId = event.target.closest("[id]").id;

        if(allBtn.classList.contains("bg-[#3B82F6]")) {
            jobDelete(jobId, jobs);
            jobDelete(jobId, interviewJobs);
            jobDelete(jobId, rejectedJobs);
            jobsDisplay(allBtn.id,jobs);
        }
        if(interviewBtn.classList.contains("bg-[#3B82F6]")) {
            jobDelete(jobId, interviewJobs);
            jobDelete(jobId, jobs);
            jobsDisplay(interviewBtn.id,interviewJobs);
        }
        if(rejectedBtn.classList.contains("bg-[#3B82F6]")) {
            jobDelete(jobId, rejectedJobs);
            jobDelete(jobId, jobs);
            jobsDisplay(rejectedBtn.id,rejectedJobs);
        }

    }
    statusChangedJobDisplay(allBtn, interviewBtn, rejectedBtn)
});

jobListParent.appendChild(jobCardTemplate(jobs));
calculateJobs();
