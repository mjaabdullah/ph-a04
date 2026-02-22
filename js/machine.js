
function jobsPrint(id, value) {
    document.getElementById(id).innerText = value.length;
}
function totalJobPrint() {
    return jobs.length + interviewJobs.length + rejectedJobs.length;
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
                >Not Applied</span
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

