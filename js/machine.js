const cardsContainer = document.getElementById("jobList");

function calculateJobs() {
    document.getElementById("totalApplication").innerText = jobs.length;
    document.getElementById("totalInterview").innerText = interviewJobs.length;
    document.getElementById("totalRejected").innerText = rejectedJobs.length;
}


function jobCardTemplate(job) {
    const cardParent = document.createElement("div");

    if(!job || job.length === 0) {
        cardParent.innerHTML = `
        <div
          class="w-full bg-white h-96 rounded-lg flex flex-col justify-center items-center gap-2"
        >
          <img class="w-32" src="./jobs.png" alt="" srcset="" />
          <h2 class="text-2xl font-bold text-[#002C5C]">No jobs available</h2>
          <p class="text-gray-500">Check back soon for new job opportunities</p>
        </div>
        `;
        return cardParent;
    }

    
    cardParent.classList.add("space-y-4");
    job.forEach(e => {
  
  cardParent.innerHTML += `
  
  <div id="${e.id}" class="bg-white p-6 rounded-md flex justify-between items-start">
          <!-- card left -->
          <div class="space-y-3">
            <div>
              <h2 class="text-xl font-bold text-[#002C5C]">
                ${e.companyName}
              </h2>
              <p class="text-gray-600">${e.position}</p>
            </div>
            <div class="text-gray-600">
              <span>${e.location}</span> • <span>${e.type}</span> •
              <span>${e.salary}</span>
            </div>
            <div>
              <span
                class="jobStatus bg-[#EEF4FF] text-[#002C5C] px-3 py-2 rounded-md"
                >${e.jobStatus}</span
              >
            </div>
            <p class="text-gray-800">
              ${e.description}
            </p>

            <div class="space-x-2">
              <button
                class="interview-btn px-3 py-2 rounded-md cursor-pointer ring-[#10B981] ring-2 text-[#10B981]"
              >
                Interview
              </button>
              <button
                class="rejected-btn px-3 py-2 rounded-md cursor-pointer ring-[#EF4444] ring-2 text-[#EF4444]"
              >
                Rejected
              </button>
            </div>
          </div>
          <!-- card right -->
          <div>
            <button
              class="delete-btn text-[#64748B] rounded-full ring-1 ring-[#c2c8cf] py-1 px-2 cursor-pointer"
            >
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>

  `
});
    return cardParent;


}

function jobsDisplay(btn,arr) {

  let totalJobs;

  if(btn === "allBtn") {
    totalJobs = jobs.length;
  } else {
    totalJobs = arr.length + ' of ' + jobs.length;
  }
  
  document.getElementById("totalAvailable").innerText =  totalJobs;
  cardsContainer.innerHTML = "";
  cardsContainer.appendChild(jobCardTemplate(arr));
}

function jobDelete(jobId, arr) {
  const jobIndex = arr.findIndex(e => e.id === parseInt(jobId));
  if(jobIndex > -1) {
    arr.splice(jobIndex, 1);
    calculateJobs();
  }
}

function jobStatusChange(event, status, arr) {
    const jobId = event.target.parentNode.parentNode.parentNode.id;
    const job = jobs.find(e => e.id === parseInt(jobId));
    if(!(job.jobStatus) || job.jobStatus === status || arr.includes(job)) {
        return;
    }

    if(job.jobStatus === "Interview") {
        const index = interviewJobs.findIndex(e => e.id === parseInt(jobId));
        if(index > -1) {
            if(status === "Rejected") {
                interviewJobs.splice(index, 1);
                job.jobStatus = status;
                arr.push(job);
                calculateJobs();
                return;
            }
        }
    }

    if(job.jobStatus === "Rejected") {
        const index = rejectedJobs.findIndex(e => e.id === parseInt(jobId));
        if(index > -1) {
            if(status === "Interview") {
                rejectedJobs.splice(index, 1);
                job.jobStatus = status;
                arr.push(job);
                calculateJobs();
                return;
            } 
        }
    }
    



    job.jobStatus = status;

    arr.push(job);
    calculateJobs();

}

function statusChangedJobDisplay(allBtn, interviewBtn, rejectedBtn) {

        if(allBtn.classList.contains("bg-[#3B82F6]")) {
            jobsDisplay(allBtn.id,jobs);
        }
        if(interviewBtn.classList.contains("bg-[#3B82F6]")) {
            jobsDisplay(interviewBtn.id,interviewJobs);
        }
        if(rejectedBtn.classList.contains("bg-[#3B82F6]")) {
            jobsDisplay(rejectedBtn.id,rejectedJobs);
        }
}