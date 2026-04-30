/* ================= GLOBAL ================= */

let currentLang = "en";
let currentLetter = "A";

/* ================= SAFE ELEMENT CHECK ================= */

function el(id){
  return document.getElementById(id);
}

/* ================= DICTIONARY ================= */

function showLetter(letter){

  currentLetter = letter;

  let box = el("resultBox");
  if(!box) return; // 🔥 prevent error on tools page

  box.innerHTML = "";

  if(dictionary[letter]){
    dictionary[letter].forEach(item=>{

      let meaning = currentLang === "ta"
        ? item.meaning_ta
        : item.meaning_en;

      box.innerHTML += `
      <div class="term-card">
        <div class="term-header">📌 ${item.term}</div>
        <div class="term-body">${meaning}</div>
      </div>`;
    });
  } else {
    box.innerHTML = "<p>No data available</p>";
  }
}

/* ================= SEARCH ================= */

function searchTerm(){

  let inputBox = el("searchBox");
  let box = el("resultBox");

  if(!inputBox || !box) return;

  let input = inputBox.value.toLowerCase();
  box.innerHTML = "";

  if(input===""){
    showLetter(currentLetter);
    return;
  }

  let found = false;

  for(let letter in dictionary){
    dictionary[letter].forEach(item=>{
      if(item.term.toLowerCase().includes(input)){

        let meaning = currentLang === "ta"
          ? item.meaning_ta
          : item.meaning_en;

        box.innerHTML += `
        <div class="term-card">
          <div class="term-header">📌 ${item.term}</div>
          <div class="term-body">${meaning}</div>
        </div>`;

        found = true;
      }
    });
  }

  if(!found){
    box.innerHTML = "<p>❌ No results found</p>";
  }
}

/* ================= LANGUAGE ================= */

function setLang(lang){

  currentLang = lang;

  document.getElementById("btn-en")?.classList.remove("active");
  document.getElementById("btn-ta")?.classList.remove("active");

  if(lang === "en"){
    document.getElementById("btn-en")?.classList.add("active");
  }else{
    document.getElementById("btn-ta")?.classList.add("active");
  }

  showLetter(currentLetter);
}

/* ================= AUTO LOAD ================= */

window.onload = function(){
  if(el("resultBox")){
    document.getElementById("resultBox").innerHTML =
      "<p>🔍 Start typing or choose a term</p>";
  }
};

function setLang(lang){

  currentLang = lang;

  // 🔥 button highlight switch
  document.getElementById("btn-en")?.classList.remove("active");
  document.getElementById("btn-ta")?.classList.remove("active");

  if(lang === "en"){
    document.getElementById("btn-en")?.classList.add("active");
  }else{
    document.getElementById("btn-ta")?.classList.add("active");
  }

  showLetter(currentLetter);
}

function toggleAlphabet() {
  const box = document.getElementById("alphabetBox");

  if (window.getComputedStyle(box).display === "none") {
    box.style.display = "flex";
  } else {
    box.style.display = "none";
  }
}

function searchWord(word) {
  document.getElementById("searchBox").value = word;
  searchTerm(); // already in your code
}

/* ===== DICTIONARY ===== */

const dictionary = {

A:[
{term:"Aggregate", meaning_en:"Sand or gravel used in concrete", meaning_ta:"கான்கிரீட்டில் பயன்படுத்தப்படும் மணல் அல்லது கற்கள்"},
{term:"Abutment", meaning_en:"Support at the end of a bridge", meaning_ta:"பாலத்தின் முடிவில் உள்ள ஆதாரம்"},
{term:"Admixture", meaning_en:"Chemical added to concrete", meaning_ta:"கான்கிரீட்டில் சேர்க்கப்படும் இரசாயனம்"},
{term:"Anchor Bolt", meaning_en:"Bolt fixing structure to concrete", meaning_ta:"கட்டிடத்தை கான்கிரீட்டில் நிலைநிறுத்தும் போல்ட்"},
{term:"Arch", meaning_en:"Curved structural member", meaning_ta:"வளைந்த கட்டமைப்பு உறுப்பு"},
{term:"Asphalt", meaning_en:"Material used for road construction", meaning_ta:"சாலை அமைப்பில் பயன்படுத்தப்படும் பொருள்"},
{term:"Alignment", meaning_en:"Direction of a road or structure", meaning_ta:"சாலை அல்லது கட்டிடத்தின் திசை"},
{term:"Apron", meaning_en:"Concrete protection against erosion", meaning_ta:"அரிப்பை தடுக்கும் கான்கிரீட் பகுதி"},
{term:"Area", meaning_en:"Surface measurement of a structure", meaning_ta:"மேற்பரப்பு அளவு"},
{term:"Angle Iron", meaning_en:"L-shaped steel section", meaning_ta:"L வடிவ எஃகு பகுதி"},
{term:"Air Entrainment", meaning_en:"Air bubbles added to concrete", meaning_ta:"கான்கிரீட்டில் காற்று குமிழ்கள் சேர்த்தல்"},
{term:"Aqueduct", meaning_en:"Structure carrying water", meaning_ta:"நீரை கொண்டு செல்லும் கட்டமைப்பு"},
{term:"Ashlar Masonry", meaning_en:"Stone masonry with smooth blocks", meaning_ta:"சீரான கற்களால் செய்யப்படும் மசோன்ரி"},
{term:"Axial Load", meaning_en:"Load acting along axis", meaning_ta:"அச்சு திசையில் செயல்படும் சுமை"},
{term:"Angle of Repose", meaning_en:"Maximum slope angle of soil", meaning_ta:"மண்ணின் அதிகபட்ச சாய்வு கோணம்"}
],

B:[
{term:"Beam", meaning_en:"Horizontal structural member", meaning_ta:"கிடைமட்ட சுமை தாங்கும் உறுப்பு"},
{term:"Brick", meaning_en:"Rectangular clay building unit", meaning_ta:"செங்கல் கட்டுமான அலகு"},
{term:"Brickwork", meaning_en:"Construction using bricks", meaning_ta:"செங்கல் கட்டுமானம்"},
{term:"Bearing Capacity", meaning_en:"Maximum soil load capacity", meaning_ta:"மண்ணின் அதிகபட்ச சுமை தாங்கும் திறன்"},
{term:"Buttress", meaning_en:"Support built against wall", meaning_ta:"சுவருக்கு ஆதரவாக கட்டப்படும் அமைப்பு"},
{term:"Base Course", meaning_en:"Layer under road pavement", meaning_ta:"சாலையின் அடிப்படை அடுக்கு"},
{term:"Bending Moment", meaning_en:"Force causing bending", meaning_ta:"வளைவு உண்டாக்கும் விசை"},
{term:"Bar Bending Schedule", meaning_en:"Reinforcement detailing list", meaning_ta:"இரும்பு கம்பி விவர அட்டவணை"},
{term:"Bridge", meaning_en:"Structure crossing obstacle", meaning_ta:"தடையை கடக்கும் கட்டமைப்பு"},
{term:"Basement", meaning_en:"Lower floor below ground", meaning_ta:"தரைக்கு கீழ் உள்ள தளம்"},
{term:"Bitumen", meaning_en:"Black binder used in roads", meaning_ta:"சாலைகளில் பயன்படுத்தும் கருப்பு பைண்டர்"},
{term:"Block Masonry", meaning_en:"Construction with blocks", meaning_ta:"ப்ளாக் கட்டுமானம்"},
{term:"Backfill", meaning_en:"Soil filled after excavation", meaning_ta:"அகழ்வுக்குப் பிறகு நிரப்பப்படும் மண்"},
{term:"Bulk Density", meaning_en:"Density of loose material", meaning_ta:"தளர்ந்த பொருளின் அடர்த்தி"},
{term:"Brace", meaning_en:"Member giving stability", meaning_ta:"நிலைத்தன்மை தரும் உறுப்பு"}
],

C:[
{term:"Concrete", meaning_en:"Mix of cement sand aggregate water", meaning_ta:"சிமெண்டு, மணல், கற்கள், நீர் கலவை"},
{term:"Cement", meaning_en:"Binding construction material", meaning_ta:"இணைக்கும் கட்டுமான பொருள்"},
{term:"Column", meaning_en:"Vertical load carrying member", meaning_ta:"செங்குத்து சுமை தாங்கும் உறுப்பு"},
{term:"Cantilever", meaning_en:"Beam fixed at one end", meaning_ta:"ஒரு முனையில் மட்டும் ஆதரவு உள்ள பீம்"},
{term:"Curing", meaning_en:"Keeping concrete moist", meaning_ta:"கான்கிரீட்டை ஈரமாக வைத்தல்"},
{term:"Compaction", meaning_en:"Process of densifying soil", meaning_ta:"மண்ணை அடைக்கும் செயல்முறை"},
{term:"Cover Block", meaning_en:"Maintains reinforcement cover", meaning_ta:"இரும்பு பாதுகாப்பு இடைவெளி கட்டை"},
{term:"Construction Joint", meaning_en:"Joint between pours", meaning_ta:"கான்கிரீட் இணைப்பு இடம்"},
{term:"Culvert", meaning_en:"Structure allowing water flow", meaning_ta:"நீர் ஓடும் கட்டமைப்பு"},
{term:"Crack", meaning_en:"Break in concrete", meaning_ta:"கான்கிரீட்டில் பிளவு"},
{term:"Core Wall", meaning_en:"Central structural wall", meaning_ta:"மைய கட்டமைப்பு சுவர்"},
{term:"Compression", meaning_en:"Pushing force", meaning_ta:"அழுத்த விசை"},
{term:"Camber", meaning_en:"Upward curve in beam", meaning_ta:"மேல்நோக்கி வளைவு"},
{term:"Cohesion", meaning_en:"Attraction between soil particles", meaning_ta:"மண் துகள்களின் ஒட்டுணர்வு"},
{term:"Concrete Slab", meaning_en:"Flat structural element", meaning_ta:"சமமான கான்கிரீட் தளம்"}
],

D:[
{term:"Dead Load", meaning_en:"Permanent load of structure", meaning_ta:"நிலையான கட்டிட சுமை"},
{term:"DPC", meaning_en:"Damp proof course layer", meaning_ta:"ஈரப்பதம் தடுக்கும் அடுக்கு"},
{term:"Drainage", meaning_en:"System removing water", meaning_ta:"நீர் வெளியேற்ற அமைப்பு"},
{term:"Density", meaning_en:"Mass per unit volume", meaning_ta:"அளவிற்கு எடை"},
{term:"Deflection", meaning_en:"Bending of member", meaning_ta:"உறுப்பு வளைவு"},
{term:"Design Load", meaning_en:"Load used in design", meaning_ta:"வடிவமைப்பு சுமை"},
{term:"Dam", meaning_en:"Structure storing water", meaning_ta:"நீர் சேமிக்கும் அணை"},
{term:"Deck", meaning_en:"Top surface of bridge", meaning_ta:"பாலத்தின் மேல் பகுதி"},
{term:"Ductility", meaning_en:"Ability to deform without breaking", meaning_ta:"உடையாமல் வளைவது"},
{term:"Dry Density", meaning_en:"Density of soil without water", meaning_ta:"நீரில்லாத மண்ணின் அடர்த்தி"},
{term:"Dowels", meaning_en:"Steel rods joining concrete", meaning_ta:"கான்கிரீட் இணைக்கும் இரும்பு கம்பிகள்"},
{term:"Drain Pipe", meaning_en:"Pipe removing water", meaning_ta:"நீர் வெளியேற்ற குழாய்"},
{term:"Drop Panel", meaning_en:"Thick slab near column", meaning_ta:"காலம் அருகில் தடித்த தளம்"},
{term:"Deep Foundation", meaning_en:"Foundation reaching deep soil", meaning_ta:"ஆழமான அடித்தளம்"},
{term:"Design Life", meaning_en:"Expected structure life", meaning_ta:"கட்டிடத்தின் எதிர்பார்க்கப்படும் ஆயுள்"}
],

E:[
{term:"Elevation", meaning_en:"Vertical view of building", meaning_ta:"கட்டிடத்தின் செங்குத்து தோற்றம்"},
{term:"Excavation", meaning_en:"Removing soil", meaning_ta:"மண் அகற்றுதல்"},
{term:"Expansion Joint", meaning_en:"Joint allowing movement", meaning_ta:"இயக்கம் அனுமதிக்கும் இணைப்பு"},
{term:"Embankment", meaning_en:"Raised earth structure", meaning_ta:"உயர்த்தப்பட்ட மண் அமைப்பு"},
{term:"Earthwork", meaning_en:"Soil work in construction", meaning_ta:"மண் வேலை"},
{term:"Elasticity", meaning_en:"Ability to regain shape", meaning_ta:"மீண்டும் வடிவம் பெறும் திறன்"},
{term:"Erosion", meaning_en:"Soil removal by water", meaning_ta:"நீரால் மண் கரைதல்"},
{term:"Edge Beam", meaning_en:"Beam at slab edge", meaning_ta:"தள ஓரம் பீம்"},
{term:"Earth Pressure", meaning_en:"Pressure from soil", meaning_ta:"மண் அழுத்தம்"},
{term:"Expansion Gap", meaning_en:"Gap for movement", meaning_ta:"விரிவாக்க இடைவெளி"},
{term:"Elastic Limit", meaning_en:"Maximum elastic stress", meaning_ta:"அதிகபட்ச இலகு எல்லை"},
{term:"Earth Dam", meaning_en:"Dam made of soil", meaning_ta:"மண்ணால் ஆன அணை"},
{term:"Excavator", meaning_en:"Machine used for excavation", meaning_ta:"மண் அகற்றும் இயந்திரம்"},
{term:"External Load", meaning_en:"Load from outside", meaning_ta:"வெளி சுமை"},
{term:"Eccentric Load", meaning_en:"Load away from center", meaning_ta:"மையத்திலிருந்து விலகிய சுமை"}
],

F:[
{term:"Footing", meaning_en:"Base transferring load", meaning_ta:"அடிப்படை சுமை மாற்றம்"},
{term:"Foundation", meaning_en:"Lowest part of structure", meaning_ta:"அடித்தளம்"},
{term:"Formwork", meaning_en:"Temporary mold for concrete", meaning_ta:"தற்காலிக வடிவமைப்பு"},
{term:"Fly Ash", meaning_en:"Industrial waste in concrete", meaning_ta:"தொழிற்சாலை கழிவு"},
{term:"Finishing", meaning_en:"Final surface work", meaning_ta:"இறுதி மேற்பரப்பு வேலை"},
{term:"Floor", meaning_en:"Horizontal surface", meaning_ta:"தளம்"},
{term:"Frame Structure", meaning_en:"Beam column system", meaning_ta:"பீம்-காலம் அமைப்பு"},
{term:"Foundation Beam", meaning_en:"Beam at foundation", meaning_ta:"அடித்தள பீம்"},
{term:"Footbridge", meaning_en:"Bridge for walking", meaning_ta:"நடப்போர் பாலம்"},
{term:"Floor Slab", meaning_en:"Flat floor element", meaning_ta:"தரை தளம்"},
{term:"Flexural Strength", meaning_en:"Resistance to bending", meaning_ta:"வளைவு எதிர்ப்பு வலிமை"},
{term:"Fill Material", meaning_en:"Material used for filling", meaning_ta:"நிரப்பும் பொருள்"},
{term:"Foundation Depth", meaning_en:"Depth of foundation", meaning_ta:"அடித்தள ஆழம்"},
{term:"Footpath", meaning_en:"Pedestrian path", meaning_ta:"நடப்போர் பாதை"},
{term:"Foundation Wall", meaning_en:"Wall supporting base", meaning_ta:"அடித்தள சுவர்"}
],

G:[
{term:"Girder", meaning_en:"Large beam supporting loads", meaning_ta:"பெரிய சுமை தாங்கும் பீம்"},
{term:"Grade", meaning_en:"Slope or level", meaning_ta:"சாய்வு அல்லது நிலை"},
{term:"Grouting", meaning_en:"Filling gaps with cement", meaning_ta:"இடைவெளி நிரப்புதல்"},
{term:"Gabion", meaning_en:"Stone filled wire cage", meaning_ta:"கற்கள் நிரப்பிய கூண்டு"},
{term:"Groundwater", meaning_en:"Water below ground", meaning_ta:"தரைக்கீழ் நீர்"},
{term:"Geotechnical Engineering", meaning_en:"Study of soil", meaning_ta:"மண் பொறியியல்"},
{term:"Grade Beam", meaning_en:"Beam at ground level", meaning_ta:"தரையில் உள்ள பீம்"},
{term:"Granular Soil", meaning_en:"Soil with sand particles", meaning_ta:"மணல் துகள்கள் கொண்ட மண்"},
{term:"Gravity Dam", meaning_en:"Dam resisting by weight", meaning_ta:"எடையால் தாங்கும் அணை"},
{term:"Gravel", meaning_en:"Small stones", meaning_ta:"சிறிய கற்கள்"},
{term:"Ground Slab", meaning_en:"Slab on ground", meaning_ta:"தரையில் உள்ள தளம்"},
{term:"Geology", meaning_en:"Study of earth", meaning_ta:"பூமி ஆய்வு"},
{term:"Graded Aggregate", meaning_en:"Mixed size aggregate", meaning_ta:"கலப்பு கற்கள்"},
{term:"Ground Level", meaning_en:"Surface level", meaning_ta:"தரைய سطحம்"},
{term:"Geogrid", meaning_en:"Soil reinforcement grid", meaning_ta:"மண் வலுப்படுத்தும் வலை"}
],

H:[
{term:"Hardcore", meaning_en:"Broken stone below floor", meaning_ta:"தரையின் கீழ் கற்கள்"},
{term:"Honeycombing", meaning_en:"Voids in concrete", meaning_ta:"கான்கிரீட்டில் துளைகள்"},
{term:"Hydraulic Cement", meaning_en:"Cement setting in water", meaning_ta:"நீரில் உறையும் சிமெண்டு"},
{term:"Highway", meaning_en:"Main road", meaning_ta:"முக்கிய சாலை"},
{term:"Hydrology", meaning_en:"Study of water flow", meaning_ta:"நீர் இயக்க ஆய்வு"},
{term:"Handrail", meaning_en:"Support rail", meaning_ta:"கைப்பிடி"},
{term:"Headwall", meaning_en:"Wall at culvert end", meaning_ta:"கல்வர்ட் முனை சுவர்"},
{term:"Hydrostatic Pressure", meaning_en:"Water pressure", meaning_ta:"நீர் அழுத்தம்"},
{term:"Hollow Block", meaning_en:"Concrete block", meaning_ta:"காலி கான்கிரீட் கல்"},
{term:"High Strength Concrete", meaning_en:"Strong concrete", meaning_ta:"அதிக வலிமை கான்கிரீட்"},
{term:"Hinge Joint", meaning_en:"Rotating joint", meaning_ta:"சுழலும் இணைப்பு"},
{term:"Horizontal Load", meaning_en:"Side load", meaning_ta:"பக்க சுமை"},
{term:"Hopper", meaning_en:"Material container", meaning_ta:"பொருள் சேமிப்பு"},
{term:"Hydraulic Jack", meaning_en:"Lifting device", meaning_ta:"உயர்த்தும் கருவி"},
{term:"Hardened Concrete", meaning_en:"Set concrete", meaning_ta:"உறைந்த கான்கிரீட்"}
],

I:[
{term:"Impact Load", meaning_en:"Sudden load", meaning_ta:"திடீர் சுமை"},
{term:"Inclined Plane", meaning_en:"Sloped surface", meaning_ta:"சாய்வு மேற்பரப்பு"},
{term:"Inspection", meaning_en:"Checking work", meaning_ta:"பரிசோதனை"},
{term:"Isolation Joint", meaning_en:"Separation joint", meaning_ta:"பிரிப்பு இணைப்பு"},
{term:"Initial Setting Time", meaning_en:"Start of hardening", meaning_ta:"ஆரம்ப உறைவு நேரம்"},
{term:"Infiltration", meaning_en:"Water entering soil", meaning_ta:"நீர் ஊடுருவல்"},
{term:"Inlet", meaning_en:"Entry point", meaning_ta:"நுழைவு"},
{term:"Insulation", meaning_en:"Heat protection", meaning_ta:"வெப்ப பாதுகாப்பு"},
{term:"Internal Load", meaning_en:"Inside load", meaning_ta:"உள் சுமை"},
{term:"Invert Level", meaning_en:"Pipe bottom level", meaning_ta:"குழாய் அடித்தளம்"},
{term:"Infrastructure", meaning_en:"Basic facilities", meaning_ta:"அடிப்படை வசதிகள்"},
{term:"In-situ Concrete", meaning_en:"Concrete cast at site", meaning_ta:"தளத்தில் ஊற்றிய கான்கிரீட்"},
{term:"Intermediate Support", meaning_en:"Middle support", meaning_ta:"நடுத்தர ஆதாரம்"},
{term:"Impervious Layer", meaning_en:"Waterproof layer", meaning_ta:"நீர் புகாத அடுக்கு"},
{term:"Infill Wall", meaning_en:"Wall between frame", meaning_ta:"இடையே சுவர்"}
],

J:[
{term:"Joint", meaning_en:"Connection between members", meaning_ta:"உறுப்புகளை இணைக்கும் பகுதி"},
{term:"Joint Sealant", meaning_en:"Material sealing joints", meaning_ta:"இணைப்பை மூடும் பொருள்"},
{term:"Jacking", meaning_en:"Lifting using jack", meaning_ta:"ஜாக் மூலம் உயர்த்துதல்"},
{term:"Jack Arch", meaning_en:"Flat arch", meaning_ta:"சம வளைவு"},
{term:"Junction Box", meaning_en:"Electrical box", meaning_ta:"மின்சார பெட்டி"},
{term:"Jet Grouting", meaning_en:"Soil strengthening method", meaning_ta:"மண் வலுப்படுத்தும் முறை"},
{term:"Junction", meaning_en:"Meeting point", meaning_ta:"சேரும் இடம்"},
{term:"Joint Reinforcement", meaning_en:"Steel at joints", meaning_ta:"இணைப்பில் இரும்பு"},
{term:"Jacking Pit", meaning_en:"Pit for jacking", meaning_ta:"ஜாக்கிங் குழி"},
{term:"Joint Gap", meaning_en:"Space between structures", meaning_ta:"இடைவெளி"},
{term:"Joint Filler", meaning_en:"Material filling joints", meaning_ta:"இணைப்பு நிரப்பு"},
{term:"Joint Movement", meaning_en:"Movement at joint", meaning_ta:"இணைப்பு இயக்கம்"},
{term:"Joint Strength", meaning_en:"Strength of joint", meaning_ta:"இணைப்பு வலிமை"},
{term:"Joint Plate", meaning_en:"Connecting plate", meaning_ta:"இணைப்பு தட்டு"},
{term:"Joint Repair", meaning_en:"Fixing joints", meaning_ta:"இணைப்பு பழுது சரிசெய்தல்"}
],

K:[
{term:"Kiln", meaning_en:"Furnace for bricks", meaning_ta:"செங்கல் அடுப்பு"},
{term:"Kiln Burning", meaning_en:"Brick burning process", meaning_ta:"செங்கல் எரித்தல்"},
{term:"Keyway", meaning_en:"Groove for joint", meaning_ta:"இணைப்பு குழி"},
{term:"Keystone", meaning_en:"Central arch stone", meaning_ta:"மைய கல்"},
{term:"Kerb", meaning_en:"Road edge block", meaning_ta:"சாலை ஓரம் கல்"},
{term:"Kerb Stone", meaning_en:"Road edge stone", meaning_ta:"ஓரம் கல்"},
{term:"Key Joint", meaning_en:"Locking joint", meaning_ta:"பிடிப்பு இணைப்பு"},
{term:"Kiln Temperature", meaning_en:"Heat in kiln", meaning_ta:"அடுப்பு வெப்பம்"},
{term:"Key Block", meaning_en:"Locking block", meaning_ta:"பிடிப்பு கல்"},
{term:"Kiln Drying", meaning_en:"Drying bricks", meaning_ta:"செங்கல் உலர்த்தல்"},
{term:"Knuckle Joint", meaning_en:"Rotating joint", meaning_ta:"சுழலும் இணைப்பு"},
{term:"Key Support", meaning_en:"Main support", meaning_ta:"முக்கிய ஆதாரம்"},
{term:"Kerb Drain", meaning_en:"Drain near road", meaning_ta:"சாலை வடிகால்"},
{term:"Key Section", meaning_en:"Important section", meaning_ta:"முக்கிய பகுதி"},
{term:"Kerb Height", meaning_en:"Height of edge", meaning_ta:"ஓரம் உயரம்"}
],

L:[
{term:"Lintel", meaning_en:"Beam above doors or windows", meaning_ta:"கதவு அல்லது ஜன்னல் மேல் பீம்"},
{term:"Load", meaning_en:"Force acting on structure", meaning_ta:"சுமை"},
{term:"Live Load", meaning_en:"Temporary load", meaning_ta:"தற்காலிக சுமை"},
{term:"Leveling", meaning_en:"Making surface even", meaning_ta:"சமப்படுத்துதல்"},
{term:"Load Bearing Wall", meaning_en:"Wall carrying load", meaning_ta:"சுமை தாங்கும் சுவர்"},
{term:"Lap Length", meaning_en:"Overlap length of steel", meaning_ta:"இரும்பு ஒட்டும் நீளம்"},
{term:"Lightweight Concrete", meaning_en:"Low density concrete", meaning_ta:"குறைந்த எடை கான்கிரீட்"},
{term:"Load Distribution", meaning_en:"Spreading load", meaning_ta:"சுமை பகிர்வு"},
{term:"Lateral Load", meaning_en:"Side force", meaning_ta:"பக்க சுமை"},
{term:"Lateral Support", meaning_en:"Side support", meaning_ta:"பக்க ஆதாரம்"},
{term:"Load Factor", meaning_en:"Safety factor", meaning_ta:"பாதுகாப்பு விகிதம்"},
{term:"Lift", meaning_en:"Vertical stage", meaning_ta:"உயர்வு நிலை"},
{term:"Load Test", meaning_en:"Strength testing", meaning_ta:"சுமை சோதனை"},
{term:"Load Path", meaning_en:"Load transfer path", meaning_ta:"சுமை பாதை"},
{term:"Load Capacity", meaning_en:"Maximum load", meaning_ta:"அதிகபட்ச சுமை"}
],

M:[
{term:"Mortar", meaning_en:"Mix of cement sand water", meaning_ta:"சிமெண்டு மணல் நீர் கலவை"},
{term:"Masonry", meaning_en:"Brick or stone construction", meaning_ta:"கல்/செங்கல் கட்டுமானம்"},
{term:"Mix Design", meaning_en:"Proportioning materials", meaning_ta:"விகித அமைப்பு"},
{term:"Moment", meaning_en:"Force causing rotation", meaning_ta:"சுழல் விசை"},
{term:"Mass Concrete", meaning_en:"Large concrete volume", meaning_ta:"பெரிய கான்கிரீட்"},
{term:"Moisture Content", meaning_en:"Water in soil", meaning_ta:"மண்ணின் ஈரப்பதம்"},
{term:"Mild Steel", meaning_en:"Low carbon steel", meaning_ta:"மென்மையான எஃகு"},
{term:"Machine Foundation", meaning_en:"Base for machines", meaning_ta:"இயந்திர அடித்தளம்"},
{term:"Modulus of Elasticity", meaning_en:"Material stiffness", meaning_ta:"இலகுத்தன்மை அளவு"},
{term:"Modular Brick", meaning_en:"Standard brick", meaning_ta:"தரமான செங்கல்"},
{term:"Mechanical Compaction", meaning_en:"Machine compaction", meaning_ta:"இயந்திர அடைப்பு"},
{term:"Minimum Cover", meaning_en:"Minimum protection cover", meaning_ta:"குறைந்தபட்ச பாதுகாப்பு"},
{term:"Mixing Plant", meaning_en:"Concrete mixing machine", meaning_ta:"கலவை இயந்திரம்"},
{term:"Moment Frame", meaning_en:"Rigid frame", meaning_ta:"வலுவான கட்டமைப்பு"},
{term:"Material Strength", meaning_en:"Strength of material", meaning_ta:"பொருள் வலிமை"}
],

N:[
{term:"Nominal Mix", meaning_en:"Fixed mix ratio", meaning_ta:"நிலையான விகிதம்"},
{term:"Neutral Axis", meaning_en:"Zero stress line", meaning_ta:"அழுத்தமில்லா கோடு"},
{term:"Natural Soil", meaning_en:"Soil in natural state", meaning_ta:"இயற்கை மண்"},
{term:"Normal Stress", meaning_en:"Perpendicular stress", meaning_ta:"செங்குத்து அழுத்தம்"},
{term:"Net Area", meaning_en:"Actual area", meaning_ta:"உண்மையான பரப்பளவு"},
{term:"Nominal Size", meaning_en:"Standard size", meaning_ta:"தரமான அளவு"},
{term:"Natural Drainage", meaning_en:"Natural flow", meaning_ta:"இயற்கை ஓட்டம்"},
{term:"Non Shrink Grout", meaning_en:"Non shrinking grout", meaning_ta:"சுருங்காத கிரவுட்"},
{term:"Non Load Bearing Wall", meaning_en:"Wall without load", meaning_ta:"சுமை தாங்காத சுவர்"},
{term:"Non Structural Element", meaning_en:"Non load part", meaning_ta:"சுமை இல்லாத பகுதி"},
{term:"Nominal Strength", meaning_en:"Expected strength", meaning_ta:"எதிர்பார்க்கும் வலிமை"},
{term:"Nominal Diameter", meaning_en:"Standard diameter", meaning_ta:"தரமான விட்டம்"},
{term:"Non Reinforced Concrete", meaning_en:"Concrete without steel", meaning_ta:"இரும்பில்லா கான்கிரீட்"},
{term:"Natural Water Table", meaning_en:"Groundwater level", meaning_ta:"நீர் நிலை"},
{term:"Nominal Thickness", meaning_en:"Standard thickness", meaning_ta:"தரமான தடிமன்"}
],

O:[
{term:"Overburden", meaning_en:"Soil above foundation", meaning_ta:"அடித்தளத்தின் மேல் மண்"},
{term:"Open Channel", meaning_en:"Channel carrying water", meaning_ta:"நீர் ஓடும் திறந்த கால்வாய்"},
{term:"Outfall", meaning_en:"Point where water discharges", meaning_ta:"நீர் வெளியேறும் இடம்"},
{term:"Overhead Tank", meaning_en:"Tank storing water", meaning_ta:"மேல் நிலை நீர் தொட்டி"},
{term:"Overturning", meaning_en:"Rotation of structure", meaning_ta:"கட்டிடம் புரண்டு செல்லுதல்"},
{term:"Open Foundation", meaning_en:"Shallow foundation", meaning_ta:"தாழ் அடித்தளம்"},
{term:"Operating Load", meaning_en:"Load during operation", meaning_ta:"பயன்பாட்டு சுமை"},
{term:"Outlet", meaning_en:"Exit for water", meaning_ta:"நீர் வெளியேறும் வாயில்"},
{term:"Overhang", meaning_en:"Projection beyond support", meaning_ta:"ஆதாரத்தை மீறும் நீளம்"},
{term:"Overload", meaning_en:"Load exceeding limit", meaning_ta:"அளவை மீறும் சுமை"},
{term:"Overburden Pressure", meaning_en:"Pressure from soil above", meaning_ta:"மேல் மண் அழுத்தம்"},
{term:"Open Joint", meaning_en:"Unfilled joint", meaning_ta:"நிரப்பாத இணைப்பு"},
{term:"Overpass", meaning_en:"Bridge over road", meaning_ta:"சாலையின் மேல் பாலம்"},
{term:"Offset", meaning_en:"Horizontal distance", meaning_ta:"கிடைமட்ட தூரம்"},
{term:"Overhead Crane", meaning_en:"Crane above structure", meaning_ta:"மேல் கிரேன்"}
],

P:[
{term:"Plaster", meaning_en:"Mortar coating", meaning_ta:"சுவர் பூச்சு"},
{term:"Pile", meaning_en:"Deep foundation column", meaning_ta:"ஆழ அடித்தள தூண்"},
{term:"Pavement", meaning_en:"Road surface layer", meaning_ta:"சாலை மேற்பரப்பு"},
{term:"Pier", meaning_en:"Bridge support", meaning_ta:"பாலம் ஆதாரம்"},
{term:"Pile Foundation", meaning_en:"Deep foundation system", meaning_ta:"ஆழ அடித்தளம்"},
{term:"Plinth", meaning_en:"Base of building", meaning_ta:"கட்டிட அடிப்படை"},
{term:"Plinth Beam", meaning_en:"Beam at plinth level", meaning_ta:"பிளிந்த் பீம்"},
{term:"Plasticity", meaning_en:"Soil deformability", meaning_ta:"மண் மாற்ற திறன்"},
{term:"Precast Concrete", meaning_en:"Factory made concrete", meaning_ta:"முன் தயாரிப்பு கான்கிரீட்"},
{term:"Prestressed Concrete", meaning_en:"Preloaded concrete", meaning_ta:"முன் அழுத்த கான்கிரீட்"},
{term:"Pipe Culvert", meaning_en:"Drainage pipe structure", meaning_ta:"குழாய் கல்வர்ட்"},
{term:"Pile Cap", meaning_en:"Cap connecting piles", meaning_ta:"பைல் இணைப்பு தட்டு"},
{term:"Pile Driving", meaning_en:"Driving piles into ground", meaning_ta:"பைல் அடித்தல்"},
{term:"Paver Machine", meaning_en:"Road laying machine", meaning_ta:"சாலை அமைக்கும் இயந்திரம்"},
{term:"Pile Load Test", meaning_en:"Pile capacity test", meaning_ta:"பைல் சோதனை"}
],

Q:[
{term:"Quantity Survey", meaning_en:"Material estimation", meaning_ta:"அளவீடு"},
{term:"Quantity Takeoff", meaning_en:"Measuring quantities", meaning_ta:"அளவு கணக்கிடுதல்"},
{term:"Quick Setting Cement", meaning_en:"Fast setting cement", meaning_ta:"விரைவில் உறையும் சிமெண்டு"},
{term:"Quarry", meaning_en:"Stone extraction place", meaning_ta:"கல் எடுக்கும் இடம்"},
{term:"Quarry Dust", meaning_en:"Stone powder", meaning_ta:"கல் தூள்"},
{term:"Quality Control", meaning_en:"Maintaining quality", meaning_ta:"தர கட்டுப்பாடு"},
{term:"Quality Assurance", meaning_en:"Ensuring standards", meaning_ta:"தர உறுதி"},
{term:"Quick Lime", meaning_en:"Calcium oxide", meaning_ta:"சுண்ணாம்பு"},
{term:"Quarry Sand", meaning_en:"Sand from quarry", meaning_ta:"கல் மணல்"},
{term:"Quantity Estimation", meaning_en:"Material calculation", meaning_ta:"அளவு கணக்கீடு"},
{term:"Quarry Pit", meaning_en:"Excavated quarry", meaning_ta:"கல் குழி"},
{term:"Quality Inspection", meaning_en:"Checking quality", meaning_ta:"தர பரிசோதனை"},
{term:"Quantity Analysis", meaning_en:"Study of quantities", meaning_ta:"அளவு ஆய்வு"},
{term:"Quarry Block", meaning_en:"Stone block", meaning_ta:"கல் துண்டு"},
{term:"Quarry Crushing", meaning_en:"Breaking stones", meaning_ta:"கல் நசுக்குதல்"}
],

R:[
{term:"Reinforcement", meaning_en:"Steel in concrete", meaning_ta:"இரும்பு கம்பி"},
{term:"Retaining Wall", meaning_en:"Wall holding soil", meaning_ta:"மண் தாங்கும் சுவர்"},
{term:"RCC", meaning_en:"Reinforced Cement Concrete", meaning_ta:"இரும்பு கான்கிரீட்"},
{term:"Roadway", meaning_en:"Vehicle surface", meaning_ta:"சாலை"},
{term:"Rebar", meaning_en:"Steel bar", meaning_ta:"இரும்பு கம்பி"},
{term:"Roof Slab", meaning_en:"Top slab", meaning_ta:"மேல் தளம்"},
{term:"Road Pavement", meaning_en:"Road layers", meaning_ta:"சாலை அடுக்குகள்"},
{term:"Reinforced Beam", meaning_en:"Beam with steel", meaning_ta:"இரும்பு பீம்"},
{term:"Rubble Masonry", meaning_en:"Rough stone masonry", meaning_ta:"கல் கட்டுமானம்"},
{term:"Roller Compactor", meaning_en:"Compaction machine", meaning_ta:"அடைக்கும் இயந்திரம்"},
{term:"Road Shoulder", meaning_en:"Side of road", meaning_ta:"சாலை ஓரம்"},
{term:"Reinforcement Cage", meaning_en:"Steel framework", meaning_ta:"இரும்பு அமைப்பு"},
{term:"Road Drain", meaning_en:"Road drainage", meaning_ta:"சாலை வடிகால்"},
{term:"Retaining Pressure", meaning_en:"Soil pressure", meaning_ta:"மண் அழுத்தம்"},
{term:"Road Subgrade", meaning_en:"Soil below road", meaning_ta:"சாலை அடிப்படை மண்"}
],

S:[
{term:"Slab", meaning_en:"Flat structural surface", meaning_ta:"சமமான தளம்"},
{term:"Slump Test", meaning_en:"Concrete workability test", meaning_ta:"கான்கிரீட் சோதனை"},
{term:"Settlement", meaning_en:"Foundation sinking", meaning_ta:"அடித்தளம் இறங்குதல்"},
{term:"Shuttering", meaning_en:"Temporary mold", meaning_ta:"தற்காலிக அமைப்பு"},
{term:"Shear Force", meaning_en:"Sliding force", meaning_ta:"சறுக்கும் விசை"},
{term:"Soil", meaning_en:"Earth material", meaning_ta:"மண்"},
{term:"Subgrade", meaning_en:"Soil under road", meaning_ta:"சாலை அடிப்படை மண்"},
{term:"Steel Reinforcement", meaning_en:"Steel in concrete", meaning_ta:"இரும்பு கம்பி"},
{term:"Sand", meaning_en:"Fine aggregate", meaning_ta:"மணல்"},
{term:"Stone Masonry", meaning_en:"Stone construction", meaning_ta:"கல் கட்டுமானம்"},
{term:"Strip Footing", meaning_en:"Continuous footing", meaning_ta:"நீள அடித்தளம்"},
{term:"Structural Load", meaning_en:"Load on structure", meaning_ta:"கட்டமைப்பு சுமை"},
{term:"Soil Compaction", meaning_en:"Soil densification", meaning_ta:"மண் அடைப்பு"},
{term:"Slab Thickness", meaning_en:"Depth of slab", meaning_ta:"தள தடிமன்"},
{term:"Superstructure", meaning_en:"Upper structure", meaning_ta:"மேல் கட்டமைப்பு"}
],

T:[
{term:"Tension", meaning_en:"Pulling force", meaning_ta:"இழுக்கும் விசை"},
{term:"Tie Beam", meaning_en:"Connecting beam", meaning_ta:"இணைப்பு பீம்"},
{term:"Torsion", meaning_en:"Twisting force", meaning_ta:"சுழல் விசை"},
{term:"Truss", meaning_en:"Triangular frame", meaning_ta:"முக்கோண கட்டமைப்பு"},
{term:"Tower Crane", meaning_en:"Lifting crane", meaning_ta:"உயர கிரேன்"},
{term:"Timber", meaning_en:"Wood material", meaning_ta:"மரம்"},
{term:"Test Load", meaning_en:"Load for testing", meaning_ta:"சோதனை சுமை"},
{term:"Temporary Structure", meaning_en:"Short term structure", meaning_ta:"தற்காலிக கட்டிடம்"},
{term:"Tensile Strength", meaning_en:"Resistance to tension", meaning_ta:"இழுப்பு வலிமை"},
{term:"Trench", meaning_en:"Long excavation", meaning_ta:"நீள அகழ்வு"},
{term:"Thermal Expansion", meaning_en:"Expansion due to heat", meaning_ta:"வெப்ப விரிவு"},
{term:"Top Slab", meaning_en:"Upper slab", meaning_ta:"மேல் தளம்"},
{term:"Tower Foundation", meaning_en:"Base for tower", meaning_ta:"கோபுர அடித்தளம்"},
{term:"Tie Rod", meaning_en:"Tension rod", meaning_ta:"இழுப்பு கம்பி"},
{term:"Torsional Moment", meaning_en:"Twisting moment", meaning_ta:"சுழல் மொமென்ட்"}
],

U:[
{term:"Underpinning", meaning_en:"Strengthening foundation", meaning_ta:"அடித்தளம் வலுப்படுத்துதல்"},
{term:"Ultimate Load", meaning_en:"Maximum load", meaning_ta:"அதிகபட்ச சுமை"},
{term:"Uniform Load", meaning_en:"Evenly distributed load", meaning_ta:"சம சுமை"},
{term:"Underground Drain", meaning_en:"Below ground drain", meaning_ta:"தரைக்கீழ் வடிகால்"},
{term:"Unreinforced Concrete", meaning_en:"Concrete without steel", meaning_ta:"இரும்பில்லா கான்கிரீட்"},
{term:"Underground Tank", meaning_en:"Below ground tank", meaning_ta:"தரைக்கீழ் தொட்டி"},
{term:"Uniform Settlement", meaning_en:"Even sinking", meaning_ta:"சம இறக்கம்"},
{term:"Underground Structure", meaning_en:"Below ground structure", meaning_ta:"தரைக்கீழ் கட்டிடம்"},
{term:"Utility Line", meaning_en:"Service pipe or cable", meaning_ta:"சேவை குழாய்"},
{term:"Underground Pipe", meaning_en:"Pipe below surface", meaning_ta:"தரைக்கீழ் குழாய்"},
{term:"Unstable Soil", meaning_en:"Weak soil", meaning_ta:"பலவீன மண்"},
{term:"Uniform Pressure", meaning_en:"Equal pressure", meaning_ta:"சம அழுத்தம்"},
{term:"Underground Cable", meaning_en:"Cable below ground", meaning_ta:"தரைக்கீழ் கேபிள்"},
{term:"Utility Tunnel", meaning_en:"Tunnel for services", meaning_ta:"சேவை சுரங்கம்"},
{term:"Uniform Stress", meaning_en:"Equal stress", meaning_ta:"சம அழுத்தம்"}
],

V:[
{term:"Vibration", meaning_en:"Concrete compaction process", meaning_ta:"அடைக்கும் செயல்"},
{term:"Vault", meaning_en:"Arched roof", meaning_ta:"வளைந்த கூரை"},
{term:"Vertical Load", meaning_en:"Downward load", meaning_ta:"செங்குத்து சுமை"},
{term:"Ventilation", meaning_en:"Air flow system", meaning_ta:"காற்றோட்டம்"},
{term:"Void", meaning_en:"Empty space", meaning_ta:"காலி இடம்"},
{term:"Vane Shear Test", meaning_en:"Soil test", meaning_ta:"மண் சோதனை"},
{term:"Vertical Reinforcement", meaning_en:"Vertical steel", meaning_ta:"செங்குத்து இரும்பு"},
{term:"Vibratory Roller", meaning_en:"Compaction machine", meaning_ta:"அடைப்பு ரோலர்"},
{term:"Vent Pipe", meaning_en:"Air release pipe", meaning_ta:"காற்று குழாய்"},
{term:"Vertical Alignment", meaning_en:"Vertical layout", meaning_ta:"செங்குத்து அமைப்பு"},
{term:"Vertical Column", meaning_en:"Upright column", meaning_ta:"செங்குத்து காலம்"},
{term:"Void Ratio", meaning_en:"Voids in soil", meaning_ta:"காலி விகிதம்"},
{term:"Vertical Support", meaning_en:"Support load", meaning_ta:"ஆதாரம்"},
{term:"Valve Chamber", meaning_en:"Valve box", meaning_ta:"வால்வு அறை"},
{term:"Vibration Machine", meaning_en:"Compaction tool", meaning_ta:"அடைப்பு கருவி"}
],

W:[
{term:"Water Cement Ratio", meaning_en:"Water to cement ratio", meaning_ta:"நீர் சிமெண்டு விகிதம்"},
{term:"Weep Hole", meaning_en:"Drain hole", meaning_ta:"நீர் துளை"},
{term:"Wall", meaning_en:"Vertical structure", meaning_ta:"சுவர்"},
{term:"Waterproofing", meaning_en:"Water protection", meaning_ta:"நீர் தடுப்பு"},
{term:"Welding", meaning_en:"Joining metals", meaning_ta:"உலோகம் இணைப்பு"},
{term:"Working Load", meaning_en:"Safe load", meaning_ta:"பாதுகாப்பு சுமை"},
{term:"Wind Load", meaning_en:"Wind force", meaning_ta:"காற்று சுமை"},
{term:"Water Tank", meaning_en:"Water storage", meaning_ta:"நீர் தொட்டி"},
{term:"Wall Footing", meaning_en:"Foundation for wall", meaning_ta:"சுவர் அடித்தளம்"},
{term:"Water Pressure", meaning_en:"Pressure from water", meaning_ta:"நீர் அழுத்தம்"},
{term:"Wall Thickness", meaning_en:"Wall width", meaning_ta:"சுவர் தடிமன்"},
{term:"Waterproof Membrane", meaning_en:"Water barrier", meaning_ta:"நீர் தடுப்பு படலம்"},
{term:"Wall Reinforcement", meaning_en:"Steel in wall", meaning_ta:"சுவர் இரும்பு"},
{term:"Wind Pressure", meaning_en:"Pressure from wind", meaning_ta:"காற்று அழுத்தம்"},
{term:"Water Outlet", meaning_en:"Water exit", meaning_ta:"நீர் வெளியேற்றம்"}
],

X:[
{term:"X Bracing", meaning_en:"Cross support", meaning_ta:"குறுக்கு ஆதாரம்"},
{term:"X Frame", meaning_en:"Cross frame", meaning_ta:"குறுக்கு கட்டமைப்பு"},
{term:"X Joint", meaning_en:"Cross joint", meaning_ta:"குறுக்கு இணைப்பு"},
{term:"X Pattern Reinforcement", meaning_en:"Cross steel", meaning_ta:"குறுக்கு இரும்பு"},
{term:"X Support", meaning_en:"Cross support", meaning_ta:"குறுக்கு ஆதாரம்"},
{term:"X Section", meaning_en:"Cross section", meaning_ta:"குறுக்கு பகுதி"},
{term:"X Beam", meaning_en:"Cross beam", meaning_ta:"குறுக்கு பீம்"},
{term:"X Column", meaning_en:"Cross column", meaning_ta:"குறுக்கு காலம்"},
{term:"X Structure", meaning_en:"Cross structure", meaning_ta:"குறுக்கு கட்டமைப்பு"},
{term:"X Bracket", meaning_en:"Cross support bracket", meaning_ta:"குறுக்கு ஆதாரம்"},
{term:"X Truss", meaning_en:"Cross truss", meaning_ta:"குறுக்கு ட்ரஸ்"},
{term:"X Reinforcement", meaning_en:"Cross steel", meaning_ta:"குறுக்கு இரும்பு"},
{term:"X Frame Bridge", meaning_en:"Cross frame bridge", meaning_ta:"குறுக்கு பாலம்"},
{term:"X Support Beam", meaning_en:"Cross beam support", meaning_ta:"குறுக்கு ஆதாரம்"},
{term:"X Stability Frame", meaning_en:"Frame for stability", meaning_ta:"நிலைத்தன்மை கட்டமைப்பு"}
],

Y:[
{term:"Yield Strength", meaning_en:"Stress before deformation", meaning_ta:"மாற்றம் தொடங்கும் அழுத்தம்"},
{term:"Yield Point", meaning_en:"Start of deformation", meaning_ta:"மாற்றம் தொடக்கம்"},
{term:"Yield Stress", meaning_en:"Stress at yield", meaning_ta:"மாற்ற அழுத்தம்"},
{term:"Yield Deformation", meaning_en:"Permanent change", meaning_ta:"நிலையான மாற்றம்"},
{term:"Yield Load", meaning_en:"Load causing yield", meaning_ta:"மாற்ற சுமை"},
{term:"Yield Reinforcement", meaning_en:"Steel reaching yield", meaning_ta:"மாற்றம் அடையும் இரும்பு"},
{term:"Yield Test", meaning_en:"Strength test", meaning_ta:"சோதனை"},
{term:"Yield Condition", meaning_en:"Yield state", meaning_ta:"மாற்ற நிலை"},
{term:"Yield Limit", meaning_en:"Maximum elastic limit", meaning_ta:"அதிகபட்ச எல்லை"},
{term:"Yield Factor", meaning_en:"Safety factor", meaning_ta:"பாதுகாப்பு விகிதம்"},
{term:"Yield Behavior", meaning_en:"Material response", meaning_ta:"பொருள் நடத்தை"},
{term:"Yield Resistance", meaning_en:"Resistance to yield", meaning_ta:"மாற்ற எதிர்ப்பு"},
{term:"Yield Analysis", meaning_en:"Study of yield", meaning_ta:"ஆய்வு"},
{term:"Yield Failure", meaning_en:"Failure after yield", meaning_ta:"மாற்றத்திற்குப் பின் தோல்வி"},
{term:"Yield Design", meaning_en:"Design based on yield", meaning_ta:"மாற்ற வடிவமைப்பு"}
],

Z:[
{term:"Zoning", meaning_en:"Land use regulation", meaning_ta:"நில பயன்பாட்டு விதி"},
{term:"Zoning Law", meaning_en:"Land use law", meaning_ta:"நில சட்டம்"},
{term:"Zoning Plan", meaning_en:"Land layout", meaning_ta:"பகுதி திட்டம்"},
{term:"Zoning Map", meaning_en:"Land map", meaning_ta:"பகுதி வரைபடம்"},
{term:"Zonal Planning", meaning_en:"Planning by zones", meaning_ta:"பகுதி திட்டமிடல்"},
{term:"Zero Slump Concrete", meaning_en:"Very stiff concrete", meaning_ta:"கடின கான்கிரீட்"},
{term:"Zero Settlement", meaning_en:"No sinking", meaning_ta:"இறக்கம் இல்லை"},
{term:"Zero Load", meaning_en:"No load", meaning_ta:"சுமை இல்லை"},
{term:"Zero Reinforcement", meaning_en:"No steel", meaning_ta:"இரும்பு இல்லை"},
{term:"Zero Stress", meaning_en:"No stress", meaning_ta:"அழுத்தம் இல்லை"},
{term:"Zero Expansion", meaning_en:"No expansion", meaning_ta:"விரிவு இல்லை"},
{term:"Zero Void", meaning_en:"No empty space", meaning_ta:"காலி இல்லை"},
{term:"Zero Gradient", meaning_en:"Flat slope", meaning_ta:"சாய்வு இல்லை"},
{term:"Zero Deflection", meaning_en:"No bending", meaning_ta:"வளைவு இல்லை"},
{term:"Zero Carbon Building", meaning_en:"Eco building", meaning_ta:"சூழல் நட்பு கட்டிடம்"}
],

};
