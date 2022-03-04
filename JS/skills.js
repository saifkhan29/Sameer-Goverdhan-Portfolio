
const main_main_skills_container = document.querySelector('.skills-cards-container')

const skills_card_data = [
    {
        icon: './images/Group23.svg',
        heading: 'Strategy Development',
        para: 'A Senior Strategy Professional with overall experience of more than 11 years in diverse industries with an MBA (Oklahoma City University, USA) & Bachelors is Commerce & Accounting (India).'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Business Planning',
        para: 'Certified Strategic Manager and Certified Change Practitioner with experience in Organizational Diagnosis, Annual Business Planning, Business Transformational Programs. '
    },
    {
        icon: './images/Group23.svg',
        heading: 'Strategy Execution',
        para: 'Certified Balanced Scorecard Professional from Kaplan-Norton Strategy Execution (Palladium Group) with experience in Strategy formulation, Balanced Scorecards Development & Reporting for Businesses and Functions.'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Strategy Reporting',
        para: 'Certified Strategic Manager and Certified Change Practitioner with experience in Organizational Diagnosis, Annual Business Planning, Business Transformational Programs. '
    },
    {
        icon: './images/Group23.svg',
        heading: 'Project Management',
        para: 'Project Management professional (PMP# 2245991) with hands on experience in multiple, organization wide strategic initiatives and programs including Selection, Alignment and Benefits Management.'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Business Analysis',
        para: 'Developed Strategy Department Operational Process and Procedures including Annual Operational Calendar and implemented using different tools like Operating Model Canvas, SIPOC, etc.'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Transformation Initiatives',
        para: 'Formulated and Facilitated the development a 3 years Transformation Strategies and Business Plans for multiple businesses in the Construction, Contracting & Shared Services industry using various strategy'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Tools and Templates Development',
        para: 'Developed Strategy Department Operational Process and Procedures including Annual Operational Calendar and implemented using different tools like Operating Model Canvas, SIPOC, etc.'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Productivity Tools ( MS Office / Suite)',
        para: 'Have worked on various , MS Offics tools like MS Word, MS Excel , MS PowerPoint , etc.'
    },
    {
        icon: './images/Group23.svg',
        heading: 'Balanced Scorecard Management',
        para: 'Facilitated the development of strategy for a Joint Venture in New Sector and initiatives selection for a newly formed joint venture that enabled optimal utilization of resources and planned approach. '
    },
    {
        icon: './images/Group23.svg',
        heading: 'Workshop Facilitations',
        para: ' Awarded and Recognized at various occasions by various organizations for the high Performance, Quality and creating the impact at work. '
    },
]




skills_card_data.forEach(single_data => {


//making skill cards dynamically
//card body
const skills_card = document.createElement('div')
skills_card.setAttribute('data-aos','fade-up')
skills_card.setAttribute('data-duration','1000')
skills_card.classList.add('skills-card-cont')
//card icon container
const skills_icon_cont = document.createElement('div')
skills_icon_cont.classList.add('skills-card-icon', 'd-flex-c')
//card inner icon
const skills_icon = document.createElement('img')
skills_icon.classList.add('skills-card-icons')
skills_icon.src = single_data.icon
//appending icon to icon container
skills_icon_cont.appendChild(skills_icon)
//==========================
//==========================
//card heading container
const skills_card_heading_container = document.createElement('div')
skills_card_heading_container.classList.add('skills-card-heading', 'd-flex-c')
//creaing heading for cards
const skill_card_heading = document.createElement('h2')
skill_card_heading.classList.add('skills-card-inner-heading')
skill_card_heading.innerText = single_data.heading
//apending it to the heading container
skills_card_heading_container.appendChild(skill_card_heading)
//============================
//============================
//creating skills card para 
const skills_card_para_container = document.createElement('div')
skills_card_para_container.classList.add('skills-card-para')
//creating the para for skills card inside container
const skills_card_para = document.createElement('p')
skills_card_para.classList.add('skills-card-para-content')
skills_card_para.innerText = single_data.para
//appending it to its container
skills_card_para_container.appendChild(skills_card_para)
//appending it all together
skills_card.appendChild(skills_icon_cont)
skills_card.appendChild(skills_card_heading_container)
skills_card.appendChild(skills_card_para_container)

console.log(skills_card)
main_main_skills_container.appendChild(skills_card)



})



const skills_card_cont = document.querySelectorAll(".skills-card-cont");
const skills_card_icons = document.querySelectorAll(".skills-card-icons");
const skills_card_heading = document.querySelectorAll(
  ".skills-card-inner-heading"
);
const skills_card_para2 = document.querySelectorAll(".skills-card-para-content");





skills_card_cont.forEach((each_skill, idx) => {
  each_skill.addEventListener("mouseover", () => {
    skills_card_icons[idx].classList.add("skills-transitions");
    skills_card_icons[idx].src = "./images/icon_black.svg";

    skills_card_heading[idx].classList.add("skills-color-black");
    skills_card_para2[idx].classList.add("skills-color-black");
  });

  each_skill.addEventListener("mouseleave", () => {
    skills_card_icons[idx].classList.remove("skills-transitions");
    skills_card_icons[idx].src = "./images/Group23.svg";

    skills_card_heading[idx].classList.remove("skills-color-black");
    skills_card_para2[idx].classList.remove("skills-color-black");
  });
});
