const freelancerForum = document.getElementById("freelancerForum");
freelancerForum.style.width = "80%";
freelancerForum.style.margin = "0 auto";

/* State */
// Here, we define arrays for possible names and occupations for the data that our program needs to remember.
const names = ["Alice", "Bob", "Carol"];
const occupations = ["writer", "teacher", "programmer"];
const prices = ["30", "50", "70"];
const maxFreelancers = 10;

// an initial array of freelancers
const freelancers = [
  { name: "Dr. Slice", occupation: "gardener", price: 25 },
  { name: "Dr. Pressure", occupation: "programmer", price: 51 },
  { name: "Prof. Possibility", occupation: "teacher", price: 43 },
  { name: "Prof. Prism", occupation: "teacher", price: 81 },
  { name: "Dr. Impulse", occupation: "teacher", price: 43 },
  { name: "Prof. Spark", occupation: "programmer", price: 76 },
  { name: "Dr. Wire", occupation: "teacher", price: 47 },
  { name: "Prof. Goose", occupation: "driver", price: 72 },
];

// `setInterval` will call `addFreelancer` every 3000 milliseconds (3 seconds)
// and return an interval ID that we can use to stop the interval later.
// Calling `clearInterval(addFreelancerIntervalId)` will stop the interval.
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

render(); // We call this function once to render the initial state

/**
 * Update the DOM to reflect the current state.
 * The term "render" is often used to describe this process.
 */
function render() {
  // Render the freelancers
  const availableFreelancers = document.querySelector("#availableFreelancers");
  const freelancerElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.classList.add(
      freelancer.name,
      freelancer.occupation,
      freelancer.price
    );
    element.textContent = `${freelancer.name} - ${freelancer.occupation} - ${freelancer.price}`;
    return element;
  });
  availableFreelancers.replaceChildren(...freelancerElements);
}

/**
 * Add a random freelancer to the `freelancers` array
 */
function addFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = prices[Math.floor(Math.random() * prices.length)];
  freelancers.push({ name, occupation, price });

  render();

  // Stop adding freelancers if we've reached the maximum number of freelancers
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
  }
}
