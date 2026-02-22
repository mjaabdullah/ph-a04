
const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");
const cardsContainer = document.getElementById("jobList");

function activeBtn(btn) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  allBtn.classList.add("bg-white", "text-gray-600");

  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.add("bg-white", "text-gray-600");

  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.add("bg-white", "text-gray-600");  

    btn.classList.remove("bg-white", "text-gray-600");
    btn.classList.add("bg-[#3B82F6]", "text-white");
    console.log(btn.id);
    if(btn.id === "allBtn") {
        document.getElementById("totalAvailable").innerText =  totalJobPrint();
        cardsContainer.innerHTML = "";
        cardsContainer.appendChild(jobCardTemplate(jobs));
    }
    if(btn.id === "interviewBtn") {
        document.getElementById("totalAvailable").innerText =  interviewJobs.length + ' of ' + totalJobPrint();
        cardsContainer.innerHTML = "";
        cardsContainer.appendChild(jobCardTemplate(interviewJobs));
    }
    if(btn.id === "rejectedBtn") {
        
        document.getElementById("totalAvailable").innerText =  rejectedJobs.length + ' of ' + totalJobPrint();
        cardsContainer.innerHTML = "";
        cardsContainer.appendChild(jobCardTemplate(rejectedJobs));
    }
}



jobListParent.addEventListener("click", (event) => {
    if(event.target.classList.contains("interview-btn")) {
        event.target.classList.remove("ring-[#10B981]", "text-[#10B981]", "cursor-pointer");

        event.target.parentNode.querySelector(".rejected-btn").classList.remove("ring-[#002C5C]", "text-[#002C5C]");
        event.target.parentNode.querySelector(".rejected-btn").classList.add("ring-[#EF4444]", "text-[#EF4444]", "cursor-pointer");

        event.target.classList.remove("ring-[#002C5C]", "text-[#002C5C]");
        event.target.classList.add("ring-[#002C5C]", "text-[#002C5C]");

        const jobStatus = event.target.parentNode.parentNode.querySelector(".jobStatus");

        jobStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]", "ring-[#EF4444]", "text-[#EF4444]", "ring-[#EF4444]", "ring-2", "bg-white");

        jobStatus.textContent = "Interview";
        jobStatus.classList.add("ring-[#10B981]", "text-[#10B981]", "ring-[#10B981]", "ring-2", "bg-white");
    }
    if(event.target.classList.contains("rejected-btn")) {
        event.target.classList.remove("ring-[#EF4444]", "text-[#EF4444]", "cursor-pointer");

        event.target.parentNode.querySelector(".interview-btn").classList.remove("ring-[#002C5C]", "text-[#002C5C]");
        event.target.parentNode.querySelector(".interview-btn").classList.add("ring-[#10B981]", "text-[#10B981]");

        event.target.classList.add("ring-[#002C5C]", "text-[#002C5C]");



        const jobStatus = event.target.parentNode.parentNode.querySelector(".jobStatus");

        jobStatus.classList.remove("bg-[#EEF4FF]", "text-[#002C5C]", "ring-[#10B981]", "text-[#10B981]", "ring-[#10B981]", "ring-2", "bg-white");

        jobStatus.textContent = "Rejected";
        jobStatus.classList.add("ring-[#EF4444]", "text-[#EF4444]", "ring-[#EF4444]", "ring-2", "bg-white");
        
    }
    
});

jobListParent.appendChild(jobCardTemplate(jobs));
document.getElementById("totalApplication").innerText = totalJobPrint();
document.getElementById("totalAvailable").innerText = totalJobPrint();


jobsPrint("totalInterview", interviewJobs);
jobsPrint("totalRejected", rejectedJobs);
