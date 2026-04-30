console.log("JS loaded");
// ===============================
// 📘 DATA
// ===============================
const codeData = {
"IS 456": {
  title: "IS 456:2000 – RCC Code",
  design: `
    <h3>📐 Design Principles</h3>

    <p><b>Concrete Grade (Clause 6.1):</b></p>
    <ul>
      <li>Minimum for RCC = M20</li>
      <li>M25+ → Design Mix</li>
    </ul>

    <p><b>Limit State Design (Clause 36):</b></p>
    <ul>
      <li>Ultimate Limit State → Safety</li>
      <li>Serviceability → Deflection & Crack</li>
      <li>Partial Safety Factors:
        <ul>
          <li>Concrete = 1.5</li>
          <li>Steel = 1.15</li>
        </ul>
      </li>
    </ul>

    <p><b>Span/Depth Ratio (Clause 23.2):</b></p>
    <ul>
      <li>Simply Supported = 20</li>
      <li>Continuous = 26</li>
      <li>Cantilever = 7</li>
    </ul>

    <p><b>Columns (Clause 25):</b></p>
    <ul>
      <li>Short & Long Columns</li>
      <li>Slenderness must be checked</li>
    </ul>

    <p><b>Footings (Clause 34):</b></p>
    <ul>
      <li>Bearing capacity check</li>
      <li>Punching shear check</li>
    </ul>
	<h3>📏 Beam Basics</h3>
  <ul>
    <li>Bending moment → tension at bottom</li>
    <li>Bottom steel provided</li>
    <li>Top steel at supports</li>
    <li>Shear → stirrups required</li>
  </ul>

  <h3>🏗 Column Basics</h3>
  <ul>
    <li>Compression member</li>
    <li>Min steel = 0.8%</li>
    <li>Max steel = 6%</li>
    <li>Ties required</li>
  </ul>
  <h3>🧱 Footing Basics</h3>
  <ul>
    <li>Transfers load to soil</li>
    <li>Check SBC</li>
    <li>Punching shear important</li>
  </ul>
  `,

  formula: `
    <h3>📊 Important Formulas</h3>

    <p><b>Stress Block (Clause 38):</b><br>
    σc = 0.446 fck</p>

    <p><b>Development Length (Clause 26.2.1):</b><br>
    Ld = (φ × σs) / (4 × τbd)</p>

    <p><b>Shear Stress (Clause 40):</b><br>
    τv = Vu / (b × d)</p>

    <p><b>Elastic Modulus (Clause 6.2.3):</b><br>
    Ec = 5000 √fck</p>

    <p><b>Load Combination (Clause 36.4):</b><br>
    1.5 (DL + LL)</p>

    <p><b>Minimum Steel (Beam):</b><br>
    As = 0.85bd / fy</p>

    <p><b>Maximum Steel:</b><br>
    4% of gross area</p>
  `,

  detailing: `
    <h3>🧱 Reinforcement Detailing</h3>

    <p><b>Minimum Reinforcement (Clause 26.5):</b></p>
    <ul>
      <li>Beam & slab must have minimum steel</li>
    </ul>

    <p><b>Cover (Clause 26.4):</b></p>
    <ul>
      <li>Mild = 20 mm</li>
      <li>Moderate = 30 mm</li>
      <li>Severe = 45 mm</li>
    </ul>

    <p><b>Spacing Rules:</b></p>
    <ul>
      <li>Main bars ≤ 3d or 300 mm</li>
      <li>Distribution ≤ 5d or 450 mm</li>
    </ul>

    <p><b>Lapping (Clause 26.2.5):</b></p>
    <ul>
      <li>Avoid at maximum bending zone</li>
      <li>Provide staggered laps</li>
    </ul>

    <p><b>Anchorage (Clause 26.2.2):</b></p>
    <ul>
      <li>Hooks & bends improve bond</li>
    </ul>
  `,

       durability: `
          <h3>🌦 Durability Table</h3>
    <table border="1">
      <tr><th>Exposure</th><th>Min Grade</th><th>Max w/c</th></tr>
      <tr><td>Mild</td><td>M20</td><td>0.55</td></tr>
      <tr><td>Moderate</td><td>M25</td><td>0.50</td></tr>
      <tr><td>Severe</td><td>M30</td><td>0.45</td></tr>
      <tr><td>Very Severe</td><td>M35</td><td>0.45</td></tr>
    </table>
  `,

  site: `
    <h3>🏗 Site Practical Rules</h3>

    <ul>
      <li>Minimum M20 concrete for RCC</li>
      <li>Check cover blocks before concreting</li>
      <li>Provide proper vibration (avoid honeycomb)</li>
      <li>Check alignment & bar spacing</li>
      <li>Lapping should not be at same section</li>
      <li>Avoid lap in maximum moment zone</li>
      <li>Curing minimum 7–14 days</li>
    </ul>

    <p><b>Important Values:</b></p>
    <ul>
      <li>RCC = 25 kN/m³</li>
      <li>PCC = 24 kN/m³</li>
    </ul>
  `,

 tamil: `
  <h3>தமிழ் விளக்கம்</h3>

  <ul>
    <li>RCCக்கு M20 concrete குறைந்தபட்சம் வேண்டும்</li>
    <li>Cover குறைக்கக் கூடாது (steel rust ஆகும்)</li>
    <li>Compaction சரியாக செய்ய வேண்டும்</li>
    <li>Honeycomb வரக்கூடாது</li>
    <li>Lapping ஒரே இடத்தில் வைக்கக் கூடாது</li>
    <li>Maximum moment இடத்தில் lap போடக்கூடாது</li>
    <li>Curing கட்டாயம் செய்ய வேண்டும் (7–14 நாட்கள்)</li>
  </ul>
`
}
 ,

"IS 10262": {
  title: "IS 10262 – Concrete Mix Design",

  design: `
    <h3>📐 Complete Mix Design Steps</h3>
    <ol>
      <li>Target Strength: fck' = fck + 1.65 × S</li>
      <li>Select Water-Cement Ratio (from strength & durability)</li>
      <li>Estimate Water Content (based on slump & aggregate size)</li>
      <li>Calculate Cement Content = Water / (w/c)</li>
      <li>Determine Fine & Coarse Aggregate ratio</li>
      <li>Adjust for moisture content</li>
      <li>Trial Mix → Final correction</li>
    </ol>
  `,

  formula: `
    <h3>📊 Important Formulas</h3>

    <p><b>Target Mean Strength:</b><br>
    fck' = fck + 1.65 × S</p>

    <p><b>Cement Content:</b><br>
    Cement = Water / (w/c)</p>

    <p><b>Aggregate Volume:</b><br>
    V = 1 - (Vc + Vw + Va)</p>

    <p><b>Density Check:</b><br>
    Total ≈ 2400 kg/m³</p>
  `,

  detailing: `
    <h3>🧱 Mix Proportion Details</h3>

    <ul>
      <li>Coarse Aggregate % depends on zone of sand</li>
      <li>Water content depends on:
        <ul>
          <li>Slump</li>
          <li>Aggregate size</li>
        </ul>
      </li>
      <li>Minimum cement content as per durability</li>
      <li>Maximum w/c ratio must be followed</li>
    </ul>
  `,

  durability: `
    <h3>🌦 Durability Conditions (Linked to IS 456)</h3>

    <table border="1">
      <tr><th>Exposure</th><th>Max w/c</th><th>Min Cement</th></tr>
      <tr><td>Mild</td><td>0.55</td><td>300</td></tr>
      <tr><td>Moderate</td><td>0.50</td><td>300</td></tr>
      <tr><td>Severe</td><td>0.45</td><td>320</td></tr>
    </table>
  `,

  site: `
    <h3>🏗 Site Practice</h3>

    <ul>
      <li>Slump test before pouring</li>
      <li>Cube test at 7 & 28 days</li>
      <li>Use weigh batching (avoid volume batching)</li>
      <li>Adjust water for moisture in sand</li>
      <li>Ensure uniform mixing</li>
    </ul>
  `,

  tamil: `
    <h3>தமிழ் விளக்கம்</h3>

    <ul>
      <li>Mix design கட்டாயம் செய்ய வேண்டும்</li>
      <li>Water cement ratio மிகவும் முக்கியம்</li>
      <li>Trial mix செய்யாமல் concrete பயன்படுத்தக் கூடாது</li>
      <li>Slump test கட்டாயம்</li>
      <li>Cube test மூலம் strength check செய்ய வேண்டும்</li>
    </ul>
 `
}
 ,
"IS 875": {
  title: "IS 875 – Loads",

  design: `
    <h3>📐 Types of Loads (Part 1 & 2)</h3>
    <ul>
      <li><b>Dead Load (Clause 3.1):</b> Self weight of structure</li>
      <li><b>Live Load (Clause 3.2):</b> Occupancy load</li>
      <li><b>Wind Load (Part 3):</b> Wind pressure effect</li>
      <li><b>Snow Load (Part 4):</b> Cold regions</li>
    </ul>

    <h3>📊 Unit Weights (Clause 4)</h3>
    <ul>
      <li>RCC = 25 kN/m³</li>
      <li>Brick masonry = 18–20 kN/m³</li>
      <li>Floor finish = 1–2 kN/m²</li>
    </ul>
  `,

  formula: `
    <h3>📊 Load Combinations (Clause 5.3 IS 456 link)</h3>

    <p><b>Service Load:</b><br> DL + LL</p>

    <p><b>Design Load:</b><br> 1.5 (DL + LL)</p>

    <p><b>With Wind:</b><br> 1.2 (DL + LL + WL)</p>

    <p><b>Extreme Case:</b><br> 0.9 DL + 1.5 WL</p>
  `,

  detailing: `
    <h3>📊 Live Load Values (Clause 3.1 IS 875 Part 2)</h3>
    <ul>
      <li>Residential = 2 kN/m²</li>
      <li>Office = 3 kN/m²</li>
      <li>Stairs = 3–5 kN/m²</li>
      <li>Corridor = 4 kN/m²</li>
    </ul>

    <h3>⚠ Load Reduction (Clause 3.2.1)</h3>
    <ul>
      <li>LL can be reduced for large areas</li>
    </ul>
  `,

  durability: `
    <h3>🌦 Wind Basics (Part 3)</h3>
    <ul>
      <li>Depends on height</li>
      <li>Depends on terrain</li>
      <li>Important for tall buildings</li>
    </ul>
  `,

  site: `
    <h3>🏗 Site Rules</h3>
    <ul>
      <li>Always include wall load</li>
      <li>Include floor finish load</li>
      <li>Check occupancy before LL</li>
      <li>Do not ignore parapet load</li>
    </ul>
  `,

  tamil: `
    <h3>தமிழ்</h3>
    <ul>
      <li>Dead load = கட்டிடத்தின் சொந்த எடை</li>
      <li>Live load = மனிதர் / பொருள்</li>
      <li>Load combination முக்கியம்</li>
    </ul>
  `
}
};
// ===============================
// OPEN POPUP
// ===============================
const calc = document.getElementById("calcPopup");
if (calc) calc.remove();
window.openCode = function(codeName) {
  const data = codeData[codeName];
  if (!data) {
    alert("Coming soon");
    return;
  }
  let popup = document.getElementById("codePopup");

  if (!popup) {
    popup = document.createElement("div");
    popup.id = "codePopup";
    popup.className = "popup";

    popup.innerHTML = `
      <div class="popup-content">
        <span class="close-btn" onclick="closePopup()">×</span>

<h2 id="title"></h2>
<div id="btnContainer"></div>
<div id="content"></div>

        <div class="tabs">
          <button onclick="showTab('design')">Design</button>
          <button onclick="showTab('formula')">Formula</button>
          <button onclick="showTab('detailing')">Detailing</button>
          <button onclick="showTab('durability')">Durability</button>
          <button onclick="showTab('site')">Site</button>
          <button onclick="showTab('tamil')">தமிழ்</button>
        </div>
      </div>
    `;

    document.body.appendChild(popup);
  }

  document.getElementById("title").innerText = data.title;
const container = document.getElementById("btnContainer");
container.innerHTML = "";

// IS 10262 → Mix Calculator
if (codeName === "IS 10262") {
  const btn = document.createElement("button");
  btn.innerText = "🧮 Mix Calculator";
  btn.onclick = openCalculator;
  container.appendChild(btn);
}

// IS 456 → Slab Calculator
if (codeName === "IS 456") {
  const slab = document.createElement("button");
  slab.innerText = "🧱 Slab";
  slab.onclick = openSlabCalculator;
  container.appendChild(slab);

  const beam = document.createElement("button");
  beam.innerText = "📏 Beam";
  beam.onclick = openBeamCalculator;
  container.appendChild(beam);

  const footing = document.createElement("button");
  footing.innerText = "🏗 Footing";
  footing.onclick = openFootingCalculator;
  container.appendChild(footing);

  const column = document.createElement("button");
  column.innerText = "🏢 Column";
  column.onclick = openColumnCalculator;
  container.appendChild(column);
}
if (codeName === "IS 875") {

  const loadBtn = document.createElement("button");
  loadBtn.innerText = "📊 Load Calculator";

  loadBtn.onclick = function() {
    closePopup();
    openLoadCalculator();
  };

  container.appendChild(loadBtn);
}
  popup.setAttribute("data-code", codeName);
  popup.style.display = "flex";

  showTab("design");
}
// remove old button if exists
const oldBtn = document.getElementById("mixBtn");
if (oldBtn) oldBtn.remove();

// add new only for IS 10262
if (codeName === "IS 10262") {
  const btn = document.createElement("button");
  btn.id = "mixBtn";
  btn.innerText = "🧮 Mix Calculator";
  btn.onclick = openCalculator;
  btn.style.marginBottom = "10px";

 document.querySelector(".popup-content").prepend(btn);
}

// ===============================
// TAB SWITCH
// ===============================
function showTab(tab) {
  const code = document.getElementById("codePopup").getAttribute("data-code");
  document.getElementById("content").innerHTML = codeData[code][tab];

  // 🔥 highlight active tab
  document.querySelectorAll(".tabs button").forEach(btn => {
    btn.classList.remove("active");
  });

  event.target.classList.add("active");
}
// ===============================
// CLOSE
// ===============================
function closePopup() {
  document.getElementById("codePopup").style.display = "none";
}

// ===============================
// SEARCH
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const search = document.getElementById("searchInput");

  if (search) {
    search.addEventListener("keyup", function () {
      let filter = this.value.toUpperCase();
      let boxes = document.querySelectorAll(".box");

      boxes.forEach(function(box) {
        let text = box.innerText.toUpperCase();
        box.style.display = text.includes(filter) ? "block" : "none";
      });
    });
  }
});
const popup = document.getElementById("codePopup");
if (popup) popup.style.display = "none";
function openCalculator() {

  const old = document.getElementById("calcPopup");
  if (old) old.remove();

  const calc = document.createElement("div");
  calc.id = "calcPopup";

  calc.innerHTML = `
    <div id="calcBox">

      <h2>🧮 Advanced Mix Design</h2>

      <label>Grade:</label>
      <select id="grade">
        <option value="20">M20</option>
        <option value="25">M25</option>
        <option value="30">M30</option>
        <option value="35">M35</option>
      </select>

      <label>Slump (mm):</label>
      <input id="slump" placeholder="75 / 100 / 150">

      <label>Sand Zone:</label>
      <select id="zone">
        <option value="1">Zone I</option>
        <option value="2">Zone II</option>
        <option value="3">Zone III</option>
        <option value="4">Zone IV</option>
      </select>

      <button onclick="calculateMix()">Calculate</button>

      <div id="result" style="margin-top:10px;"></div>

      <button onclick="this.parentElement.parentElement.remove()">Close</button>

    </div>
  `;

  document.body.appendChild(calc);

  // STYLE (NO CSS NEEDED)
  calc.style.position = "fixed";
  calc.style.top = "0";
  calc.style.left = "0";
  calc.style.width = "100%";
  calc.style.height = "100%";
  calc.style.background = "rgba(0,0,0,0.8)";
  calc.style.display = "flex";
  calc.style.justifyContent = "center";
  calc.style.alignItems = "center";
  calc.style.zIndex = "10000";
}
function calculateMix() {

  const grade = parseFloat(document.getElementById("grade").value);
  const slump = parseFloat(document.getElementById("slump").value);
  const zone = parseInt(document.getElementById("zone").value);

  if (!slump) {
    alert("Enter slump value");
    return;
  }

  // 🔹 STANDARD DEVIATION (approx)
  const S = 4;

  // 🔹 TARGET STRENGTH
  const target = grade + 1.65 * S;

  // 🔹 WATER-CEMENT RATIO (approx based on grade)
  let wc = 0.55;
  if (grade >= 25) wc = 0.50;
  if (grade >= 30) wc = 0.45;
  if (grade >= 35) wc = 0.40;

  // 🔹 WATER CONTENT (IS table approx)
  let water = 186;

  if (slump > 75) water += 10;
  if (slump > 125) water += 10;

  // 🔹 CEMENT
  const cement = water / wc;

  // 🔹 AGGREGATE RATIO (based on zone)
  let caRatio = 0.62;

  if (zone === 1) caRatio = 0.60;
  if (zone === 2) caRatio = 0.62;
  if (zone === 3) caRatio = 0.64;
  if (zone === 4) caRatio = 0.66;

  const totalAgg = 2400 - cement - water;

  const coarse = totalAgg * caRatio;
  const fine = totalAgg * (1 - caRatio);

  // 🔥 FINAL OUTPUT
  document.getElementById("result").innerHTML = `
    <b>📊 MIX RESULT (per m³)</b><br><br>

    Target Strength: ${target.toFixed(2)} MPa<br>
    Water-Cement Ratio: ${wc}<br><br>

    Cement: ${cement.toFixed(1)} kg<br>
    Water: ${water.toFixed(1)} L<br>
    Sand: ${fine.toFixed(1)} kg<br>
    Aggregate: ${coarse.toFixed(1)} kg<br><br>

    <small>⚠ Trial mix required for final design</small>
  `;
}
  // 🔹 Assumptions
  // 🔹 Water-Cement Ratio (based on grade)
let wc = 0.55;
if (grade >= 25) wc = 0.50;
if (grade >= 30) wc = 0.45;
if (grade >= 35) wc = 0.40;

// 🔹 Water Content (IS table approx for 20mm aggregate)
let water = 186;

// slump correction
if (slump > 75) water += 10;
if (slump > 125) water += 10;

  // 🔹 Output
  document.getElementById("result").innerHTML = `
  <b>📊 MIX RESULT (per m³)</b><br><br>

  Target Strength: ${target.toFixed(2)} MPa<br>
  Water-Cement Ratio: ${wc}<br><br>

  Cement: ${cement.toFixed(1)} kg<br>
  Water: ${water.toFixed(1)} L<br>
  Sand: ${fine.toFixed(1)} kg<br>
  Aggregate: ${coarse.toFixed(1)} kg<br><br>

  <hr>

  <b>⚙ Assumptions Used:</b><br>
  • Standard deviation (S) = 4 MPa<br>
  • Water content (base) = 186 L (20mm aggregate)<br>
  • No admixture used<br>
  • Density = 2400 kg/m³<br>
  • Sand = Zone ${zone}<br>
  • Moisture correction = NOT applied<br><br>

  <small>⚠ For actual construction, trial mix & lab test required</small>
`;
function openSlabCalculator() {

  const old = document.getElementById("slabPopup");
  if (old) old.remove();

  const slab = document.createElement("div");
  slab.id = "slabPopup";

  slab.innerHTML = `
    <div id="slabBox">

      <h2>🧱 Slab Calculator</h2>
	  <h4>📘 Concept</h4>
  <p>Slab volume = Length × Width × Thickness</p>

  <h4>📐 IS Reference</h4>
  <p>IS 456 – Clause 23 (Span/Depth Ratio)</p>

  <h4>📍 When to Use</h4>
  <ul>
    <li>Before slab concreting</li>
    <li>For material estimation</li>
    <li>For BOQ preparation</li>
  </ul>

      <input id="length" placeholder="Length (m)">
      <input id="width" placeholder="Width (m)">
      <input id="thickness" placeholder="Thickness (mm)">

      <button onclick="calculateSlab()">Calculate</button>

      <div id="slabResult" style="margin-top:10px;"></div>

      <button onclick="this.parentElement.parentElement.remove()">Close</button>

    </div>
  `;

  document.body.appendChild(slab);

  // STYLE
  slab.style.position = "fixed";
  slab.style.top = "0";
  slab.style.left = "0";
  slab.style.width = "100%";
  slab.style.height = "100%";
  slab.style.background = "rgba(0,0,0,0.8)";
  slab.style.display = "flex";
  slab.style.justifyContent = "center";
  slab.style.alignItems = "center";
  slab.style.zIndex = "10000";
}
function calculateSlab() {

  const L = parseFloat(document.getElementById("length").value);
  const B = parseFloat(document.getElementById("width").value);
  const t = parseFloat(document.getElementById("thickness").value) / 1000;

  if (!L || !B || !t) {
    alert("Enter all values");
    return;
  }

  const volume = L * B * t;

  const steel = volume * 7850 * 0.01;

  const cement = volume * 8;
  const sand = volume * 0.5;
  const aggregate = volume * 0.8;

  document.getElementById("slabResult").innerHTML = `
    <b>📊 Result</b><br><br>

    Volume: ${volume.toFixed(3)} m³<br>
    Steel: ${steel.toFixed(1)} kg<br><br>

    Cement: ${cement.toFixed(1)} bags<br>
    Sand: ${sand.toFixed(2)} m³<br>
    Aggregate: ${aggregate.toFixed(2)} m³<br>

    <small>⚠ Approx values</small>
  `;
}
function openBeamCalculator() {

  const old = document.getElementById("beamPopup");
  if (old) old.remove();

  const beam = document.createElement("div");
  beam.id = "beamPopup";

  beam.innerHTML = `
    <div id="beamBox">

      <h2>📏 Beam Calculator</h2>

      <h4>📘 Concept</h4>
      <p>Bending Moment = (w × L²) / 8</p>

      <input id="span" placeholder="Span (m)">
      <input id="load" placeholder="Load (kN/m)">
      <input id="width" placeholder="Width b (mm)">
      <input id="depth" placeholder="Depth d (mm)">

      <button onclick="calculateBeam()">Calculate</button>

      <div id="beamResult" style="margin-top:10px;"></div>

      <button onclick="this.parentElement.parentElement.remove()">Close</button>

    </div>
  `;

  document.body.appendChild(beam);

  // STYLE
  beam.style.position = "fixed";
  beam.style.top = "0";
  beam.style.left = "0";
  beam.style.width = "100%";
  beam.style.height = "100%";
  beam.style.background = "rgba(0,0,0,0.8)";
  beam.style.display = "flex";
  beam.style.justifyContent = "center";
  beam.style.alignItems = "center";
  beam.style.zIndex = "10000";
}

function calculateBeam() {

  const L = parseFloat(document.getElementById("span").value);
  const w = parseFloat(document.getElementById("load").value);
  const d = parseFloat(document.getElementById("depth").value);

  if (!L || !w || !d) {
    alert("Enter all values");
    return;
  }

  // 🔹 Bending Moment
  const M = (w * L * L) / 8;

  // 🔹 Shear Force
  const V = (w * L) / 2;

  // 🔹 Steel approx
  const Ast = (M * 1000000) / (0.87 * 415 * d);

  // 🔹 Depth check
  const reqDepth = (L * 1000) / 20;

  document.getElementById("beamResult").innerHTML = `
    <b>📊 Result</b><br><br>

    BM = ${M.toFixed(2)} kNm<br>
    Shear = ${V.toFixed(2)} kN<br><br>

    Steel = ${Ast.toFixed(0)} mm²<br><br>

    Required Depth ≈ ${reqDepth.toFixed(0)} mm<br>

    <small>⚠ Approx values (IS 456 basic)</small>
  `;
}

function openFootingCalculator() {

  const old = document.getElementById("footingPopup");
  if (old) old.remove();

  const foot = document.createElement("div");
  foot.id = "footingPopup";

 foot.innerHTML = `
  <div id="footBox">

    <h2>🏗 Footing Calculator</h2>

    <h4>📘 Concept</h4>
    <p>Area = Load / SBC</p>

    <input id="footLoad" placeholder="Load (kN)">
    <input id="footSbc" placeholder="SBC (kN/m²)">

    <button onclick="calculateFooting()">Calculate</button>

    <div id="footResult" style="margin-top:10px;"></div>

    <button onclick="this.parentElement.parentElement.remove()" 
            style="margin-top:10px;">Close</button>

  </div>
`;
  document.body.appendChild(foot);

  // STYLE
  foot.style.position = "fixed";
  foot.style.top = "0";
  foot.style.left = "0";
  foot.style.width = "100%";
  foot.style.height = "100%";
  foot.style.background = "rgba(0,0,0,0.8)";
  foot.style.display = "flex";
  foot.style.justifyContent = "center";
  foot.style.alignItems = "center";
  foot.style.zIndex = "10000";
}

function calculateFooting() {

  const load = parseFloat(document.getElementById("footLoad").value);
  const sbc = parseFloat(document.getElementById("footSbc").value);

  if (isNaN(load) || isNaN(sbc)) {
    alert("Enter values");
    return;
  }

  const area = load / sbc;
  const size = Math.sqrt(area);

  document.getElementById("footResult").innerHTML = `
    <b>📊 Result</b><br><br>

    Area = ${area.toFixed(2)} m²<br>
    Size ≈ ${size.toFixed(2)} m × ${size.toFixed(2)} m<br>

    <small>⚠ Assume square footing</small>
  `;
}
function openColumnCalculator() {

  const old = document.getElementById("columnPopup");
  if (old) old.remove();

  const col = document.createElement("div");
  col.id = "columnPopup";

col.innerHTML = `
  <div id="colBox">

    <h2>🏢 Column Calculator</h2>

    <h4>📘 Concept</h4>
    <p>Steel % = 0.8% to 6%</p>

    <input id="colLoad" placeholder="Load (kN)">
    <input id="colSize" placeholder="Size (mm)">

    <button onclick="calculateColumn()">Calculate</button>

    <div id="colResult" style="margin-top:10px;"></div>

    <button onclick="this.parentElement.parentElement.remove()" 
            style="margin-top:10px;">Close</button>

  </div>
`;

  document.body.appendChild(col);

  // STYLE
  col.style.position = "fixed";
  col.style.top = "0";
  col.style.left = "0";
  col.style.width = "100%";
  col.style.height = "100%";
  col.style.background = "rgba(0,0,0,0.8)";
  col.style.display = "flex";
  col.style.justifyContent = "center";
  col.style.alignItems = "center";
  col.style.zIndex = "10000";

}
function calculateColumn() {

  const load = parseFloat(document.getElementById("colLoad").value);
  const size = parseFloat(document.getElementById("colSize").value);

 if (isNaN(load) || isNaN(size)) {
  alert("Enter values");
  return;
}

  const area = size * size;
  const steelMin = area * 0.008;
  const steelMax = area * 0.06;

  document.getElementById("colResult").innerHTML = `
    <b>📊 Result</b><br><br>

    Area = ${area} mm²<br>
    Steel Min = ${steelMin.toFixed(0)} mm²<br>
    Steel Max = ${steelMax.toFixed(0)} mm²<br>

    <small>⚠ IS 456 limits</small>
  `;
}
function openLoadCalculator() {

  const old = document.getElementById("loadPopup");
  if (old) old.remove();

  const load = document.createElement("div");
  load.id = "loadPopup";

  load.innerHTML = `
    <div id="loadBox">

      <h2>📊 Load Calculator</h2>

      <h4>📘 IS 875 Concept</h4>
      <p>Total Load = DL + LL</p>
      <p>Design Load = 1.5 × (DL + LL)</p>

      <input id="dl" placeholder="Dead Load (kN)">
      <input id="ll" placeholder="Live Load (kN)">

      <button onclick="calculateLoad()">Calculate</button>

      <div id="loadResult"></div>

      <button onclick="this.parentElement.parentElement.remove()">Close</button>

    </div>
  `;

  document.body.appendChild(load);

  // STYLE
  load.style.position = "fixed";
  load.style.top = "0";
  load.style.left = "0";
  load.style.width = "100%";
  load.style.height = "100%";
  load.style.background = "rgba(0,0,0,0.7)";
  load.style.display = "flex";
  load.style.justifyContent = "center";
  load.style.alignItems = "center";
  load.style.zIndex = "10000";

  const box = document.getElementById("loadBox");
  box.style.background = "white";
  box.style.padding = "20px";
  box.style.borderRadius = "12px";
  box.style.width = "320px";
}
function calculateLoad() {

  const dl = parseFloat(document.getElementById("dl").value);
  const ll = parseFloat(document.getElementById("ll").value);

  if (isNaN(dl) || isNaN(ll)) {
    alert("Enter values");
    return;
  }

  const total = dl + ll;
  const design = 1.5 * total;

  document.getElementById("loadResult").innerHTML = `
    <b>📊 Result</b><br><br>

    Total Load = ${total.toFixed(2)} kN<br>
    Design Load = ${design.toFixed(2)} kN<br>

    <small>⚠ As per IS 875 + IS 456</small>
  `;
}