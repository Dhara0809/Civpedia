alert("JS WORKING");
/* ================= GLOBAL ================= */
let currentSubject = "";
let currentSection = "";
let currentCard = 0;
let cards = [];

/* ================= SUBJECT ================= */
function openSubject(subject){
  currentSubject = subject;

  document.getElementById("subjects").style.display = "none";
  document.getElementById("sections").style.display = "block";

  document.getElementById("subjectTitle").innerText =
    subject.toUpperCase();
}

/* ================= OPEN CONTENT ================= */
function openContent(section){
  currentSection = section;

  if(currentSubject === "rcc" && currentSection === "theory"){

  cards = [

  {
    title: "1. What is RCC?",
    text: `
    Reinforced Cement Concrete (RCC) is a composite material formed by combining concrete and steel reinforcement.

    Concrete is strong in compression but weak in tension, whereas steel is strong in tension. When combined, both act together to resist loads.

    RCC is widely used in beams, slabs, columns, and foundations.
    `
  },

  {
    title: "2. Advantages of RCC",
    text: `
    RCC has high strength and durability. It is resistant to fire and weathering.

    It can be moulded into different shapes and sizes. It requires less maintenance and has long service life.
    `
  },

  {
    title: "3. Disadvantages of RCC",
    text: `
    RCC has high self-weight which increases load on foundation.

    It requires skilled labour and proper curing. Improper construction may lead to cracks.
    `
  },

  {
    title: "4. Components of RCC",
    text: `
    RCC consists of cement, sand, aggregate, water, and steel reinforcement.

    Cement binds materials, aggregate provides strength, and steel resists tension.
    `
  },

  {
    title: "5. Role of Steel",
    text: `
    Steel is used to resist tensile forces in RCC.

    It improves strength and prevents sudden failure by providing ductility.
    `
  },

  {
    title: "6. Properties of Concrete",
    text: `
    Concrete has high compressive strength but low tensile strength.

    It is durable, workable in fresh state, and undergoes shrinkage and creep.
    `
  },

  {
    title: "7. Types of Reinforcement",
    text: `
    Reinforcement includes main bars, distribution bars, stirrups, and ties.

    Each type plays a role in load carrying and crack control.
    `
  },

  {
    title: "8. Concrete Cover",
    text: `
    Concrete cover is the distance between reinforcement and surface.

    It protects steel from corrosion and increases durability.
    `
  },

  {
    title: "9. Working Principle",
    text: `
    RCC works on composite action.

    Concrete resists compression and steel resists tension, acting together.
    `
  },

  {
    title: "10. Uses of RCC",
    text: `
    RCC is used in beams, slabs, columns, foundations, bridges, and dams.

    It is suitable for all types of construction.
    `
  },

  {
    title: "11. Advantages and Disadvantages",
    text: `
    RCC provides strength and durability but has high weight and requires skilled labour.

    Proper design reduces its limitations.
    `
  },

  {
    title: "12. Applications",
    text: `
    RCC is used in residential, commercial, and industrial structures.

    It is widely used in infrastructure like bridges and flyovers.
    `}
  ];
   }

else if(currentSection === "formula"){
    cards = [{ title: "Formula", text: "Content coming soon..." }];
  }

  else if(currentSection === "problem"){
    cards = [{ title: "Problem", text: "Content coming soon..." }];
  }

  else if(currentSection === "lab"){
    cards = [{ title: "Lab", text: "Content coming soon..." }];
  }

  currentCard = 0;
  renderCards();
}
/* ================= CARD ================= */

function renderCards(){
  document.getElementById("cardPopup").classList.add("active");
  showCard();
}

function showCard(){
  document.getElementById("cardTitle").innerText =
    cards[currentCard].title;

  document.getElementById("cardText").innerHTML =
    cards[currentCard].text;

  document.getElementById("progressText").innerText =
    (currentCard + 1) + " / " + cards.length;

  let dotsHTML = "";
  for(let i=0;i<cards.length;i++){
    dotsHTML += `<span class="${i===currentCard?'active-dot':''}">●</span>`;
  }

  document.getElementById("dots").innerHTML = dotsHTML;
}

function nextCard(){
  if(currentCard < cards.length - 1){
    currentCard++;
    showCard();
  }
}

function prevCard(){
  if(currentCard > 0){
    currentCard--;
    showCard();
  }
}

function closeCard(){
  document.getElementById("cardPopup").classList.remove("active");
}

/* ================= SWITCH MODE ================= */
function switchMode(e, type){

  document.querySelectorAll(".card-tabs span")
    .forEach(el => el.classList.remove("active-tab"));

  e.target.classList.add("active-tab");

  if(type === "formula"){
    cards = [{ title: "Stress", text: "Stress = Load / Area" }];
  }

  else if(type === "problem"){
    cards = [{ title: "Example", text: "Find stress = ?" }];
  }

  else if(type === "lab"){
    cards = [{ title: "Slump Test", text: "Workability test" }];
  }

  currentCard = 0;
  showCard();
}