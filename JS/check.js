//making skill cards dynamically
//card body
const skills_card = document.createElement('div')
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
skill_card_heading.classList.add('skills-card-para-content')
skills_card_para.innerText = single_data.para
//appending it to its container
skills_card_para_container.appendChild(skills_card_para)
//appending it all together
skills_card.appendChild(skills_icon_cont)
skills_card.appendChild(skills_card_heading_container)
skills_card.appendChild(skills_card_para_container)

