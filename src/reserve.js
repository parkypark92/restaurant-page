import { createSection } from "./page-load";
export { reserveSection };

const reserveSection = createSection("reserve");

const reserveHeading = document.createElement("h1");
reserveHeading.textContent = `Please give your information below. We look forward to seeing you!`;
reserveSection.appendChild(reserveHeading);

const form = document.createElement("form");
reserveSection.appendChild(form);

const nameContainer = document.createElement("div");
nameContainer.classList.add("input-contain");
form.appendChild(nameContainer);

const nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.textContent = `NAME`;
nameContainer.appendChild(nameLabel);

const name = document.createElement("input");
name.setAttribute("type", "text");
name.setAttribute("id", "name");
nameContainer.appendChild(name);

const emailContainer = document.createElement("div");
emailContainer.classList.add("input-contain");
form.appendChild(emailContainer);

const emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = `EMAIL`;
emailContainer.appendChild(emailLabel);

const email = document.createElement("input");
email.setAttribute("type", "email");
email.setAttribute("id", "email");
emailContainer.appendChild(email);

const partyContainer = document.createElement("div");
partyContainer.classList.add("input-contain");
form.appendChild(partyContainer);

const partyLabel = document.createElement("label");
partyLabel.setAttribute("for", "party");
partyLabel.textContent = `NO. OF PEOPLE`;
partyContainer.appendChild(partyLabel);

const party = document.createElement("select");
party.setAttribute("id", "party");
partyContainer.appendChild(party);

const size1 = document.createElement("option");
size1.setAttribute("value", "1");
size1.textContent = `1`;
party.appendChild(size1);

const size2 = document.createElement("option");
size2.setAttribute("value", "2");
size2.textContent = `2`;
party.appendChild(size2);

const size3 = document.createElement("option");
size3.setAttribute("value", "3");
size3.textContent = `3`;
party.appendChild(size3);

const size4 = document.createElement("option");
size4.setAttribute("value", "4");
size4.textContent = `4`;
party.appendChild(size4);

const size5 = document.createElement("option");
size5.setAttribute("value", "5");
size5.textContent = `5`;
party.appendChild(size5);

const size6 = document.createElement("option");
size6.setAttribute("value", "6");
size6.textContent = `6`;
party.appendChild(size6);

const size7 = document.createElement("option");
size7.setAttribute("value", "7");
size7.textContent = `7`;
party.appendChild(size7);

const size8 = document.createElement("option");
size8.setAttribute("value", "8");
size8.textContent = `8`;
party.appendChild(size8);

const size9 = document.createElement("option");
size9.setAttribute("value", "9");
size9.textContent = `9`;
party.appendChild(size9);

const size10 = document.createElement("option");
size10.setAttribute("value", "10");
size10.textContent = `10`;
party.appendChild(size10);

const size11 = document.createElement("option");
size11.setAttribute("value", "11");
size11.textContent = `11`;
party.appendChild(size11);

const size12 = document.createElement("option");
size12.setAttribute("value", "12");
size12.textContent = `12`;
party.appendChild(size12);

const dateContainer = document.createElement("div");
dateContainer.classList.add("input-contain");
form.appendChild(dateContainer);

const dateLabel = document.createElement("label");
dateLabel.setAttribute("for", "date");
dateLabel.textContent = `DATE`;
dateContainer.appendChild(dateLabel);

const date = document.createElement("input");
date.setAttribute("type", "date");
date.setAttribute("id", "date");
dateContainer.appendChild(date);

const timeContainer = document.createElement("div");
timeContainer.classList.add("input-contain");
form.appendChild(timeContainer);

const timeLabel = document.createElement("label");
timeLabel.setAttribute("for", "time");
timeLabel.textContent = `TIME`;
timeContainer.appendChild(timeLabel);

const time = document.createElement("select");
time.setAttribute("id", "time");
timeContainer.appendChild(time);

const time1 = document.createElement("option");
time1.setAttribute("value", "10:00");
time1.textContent = `10:00`;
time.appendChild(time1);

const time2 = document.createElement("option");
time2.setAttribute("value", "11:00");
time2.textContent = `11:00`;
time.appendChild(time2);

const time3 = document.createElement("option");
time3.setAttribute("value", "12:00");
time3.textContent = `12:00`;
time.appendChild(time3);

const time4 = document.createElement("option");
time4.setAttribute("value", "13:00");
time4.textContent = `13:00`;
time.appendChild(time4);

const time5 = document.createElement("option");
time5.setAttribute("value", "14:00");
time5.textContent = `14:00`;
time.appendChild(time5);

const time6 = document.createElement("option");
time6.setAttribute("value", "15:00");
time6.textContent = `15:00`;
time.appendChild(time6);

const time7 = document.createElement("option");
time7.setAttribute("value", "16:00");
time7.textContent = `16:00`;
time.appendChild(time7);

const time8 = document.createElement("option");
time8.setAttribute("value", "17:00");
time8.textContent = `17:00`;
time.appendChild(time8);

const time9 = document.createElement("option");
time9.setAttribute("value", "18:00");
time9.textContent = `18:00`;
time.appendChild(time9);

const time10 = document.createElement("option");
time10.setAttribute("value", "19:00");
time10.textContent = `19:00`;
time.appendChild(time10);

const time11 = document.createElement("option");
time11.setAttribute("value", "20:00");
time11.textContent = `20:00`;
time.appendChild(time11);

const time12 = document.createElement("option");
time12.setAttribute("value", "21:00");
time12.textContent = `21:00`;
time.appendChild(time12);

const submit = document.createElement("button");
submit.textContent = `BOOK`;
form.appendChild(submit);
