//getting the main container
const achieve_card_container = document.querySelector(".achieve-card-container-main");

const data = [
  {
    h2: "Certificate of Appreciation",
    text: "Contribution in Digital Transformation Journey",
    date: "PMI- KSA (2021)"
  },
  {
    h2: "Received highest rating for OSM among the corporate functions",
    text: "(2019)",
    date: ""
  },
  {
    h2: "Certificate of Appreciation",
    text: "Al Kifah Holding Co",
    date: "(2018, 2019)"
  },
  {
    h2: "Individual Excellence Award & Customer Satisfaction Award",
    text: "Star of the Month Brambles",
    date: "(2012)"
  },
  {
    h2: "Individual Excellence Award & Customer Satisfaction Award",
    text: "Star of the Month Brambles",
    date: "(2012)"
  },
  {
    h2: "Individual Excellence Award & Customer Satisfaction Award",
    text: "Star of the Month Brambles",
    date: "(2012)"
  },
  
];

data.forEach((single_data) => {
  //creating card container
  const card_container = document.createElement("div");
  card_container.classList.add("achieve-card-container");
  card_container.setAttribute('data-aos','fade-up')
  card_container.setAttribute('data-aos-duration','1000')
  console.dir(card_container)
  //=====================
  //creating card heading
  const card_heading = document.createElement("h2");
  card_heading.classList.add("achieve-card-heading");
  card_heading.innerText = single_data.h2
  card_container.appendChild(card_heading);
  //end of card heading
  //==================
  //start of card para
  const card_para = document.createElement("p");
  card_para.classList.add("achieve-card-para");
  card_para.innerText = single_data.text
  card_container.appendChild(card_para);
  //end of card para
  //==================
  //start of card date
  const card_date = document.createElement("p");
  card_date.classList.add("achieve-card-para");
  card_date.innerText = single_data.date
  card_container.appendChild(card_date);
  //end of card date
  //==================

  //appending card container to main container
  achieve_card_container.appendChild(card_container);
});



