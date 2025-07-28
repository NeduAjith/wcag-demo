// ====================================================================
// WCAG ACCESSIBILITY EXAMPLES - MAIN JAVASCRIPT
// ====================================================================

// ====================================================================
// 1. CORE NAVIGATION & CONTENT LOADING
// ====================================================================

const content = document.getElementById("content");

// Initialize navigation event listeners
document.querySelectorAll(".nav-link").forEach((btn) => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;``
    loadSection(section);
  });
});

function loadSection(section) {
  switch (section) {
    case "perceivable":
      content.innerHTML = getPerceivableContent();
      break;
    case "operable":
      content.innerHTML = getOperableContent();
      initOperableEventListeners();
      break;
    case "understandable":
      content.innerHTML = getUnderstandableContent();
      break;
    case "robust":
      content.innerHTML = getRobustContent();
      break;
    default:
      content.innerHTML = `<h2>Welcome</h2><p>Select a principle above to view examples.</p>`;
  }
}

// ====================================================================
// 2. CONTENT TEMPLATES //test
// ====================================================================

function getPerceivableContent() {
  return `
    <h2>Perceivable Examples (WCAG 1.x)</h2>

    <!-- 1. Informative, Functional, Complex & Decorative Images -->
    <section>
      <h3>1. Images: Informative, Functional, Complex & Decorative (1.1.1)</h3>
      <p><strong>How to decide?</strong></p>
      <ul>
        <li>✅ <strong>Informative:</strong> Adds meaning to the content.</li>
        <li>✅ <strong>Functional:</strong> Used as links or buttons — alt should describe the action.</li>
        <li>✅ <strong>Complex:</strong> Graphs, charts — require detailed description or data.</li>
        <li>❌ <strong>Decorative:</strong> Purely for aesthetics, hide from assistive tech using <code>alt=""</code> and <code>role="presentation"</code>.</li>
      </ul>

      <!-- Informative -->
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Informative Example</h4>
          <img src="media/images/mountain.jpg" alt="Snow-covered mountain under a clear blue sky">
          <p>(Relevant for a travel article)</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <img src="media/images/mountain.jpg" alt="">
          <p>(No alt text, screen readers get no info)</p>
        </div>
      </div>

      <!-- Functional -->
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Functional Example</h4>
          <a href="booking.html">
            <img src="media/images/book-now.png" alt="Book Now">
          </a>
          <p>(Alt describes the action, not the design)</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>  
          <a href="booking.html">
            <img src="media/images/book-now.png" alt="Red rectangular button with book now text">
          </a>
          <p>(Unnecessary visual details)</p>
        </div>
      </div>

      <!-- Complex -->
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Complex Example</h4>
          <img src="media/images/graph.png" alt="Bar graph showing quarterly sales" longdesc="#graph-desc">
          <div id="graph-desc">
            Q1: $10,000, Q2: $12,000, Q3: $15,000, Q4: $18,000
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <img src="media/images/graph.png" alt="Graph">
          <p>(No detailed data provided)</p>
        </div>
      </div>

      <!-- Decorative -->
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Decorative Example</h4>
          <img src="media/images/decorative-border.png" alt="" role="presentation">
          <p>(Hidden from screen readers)</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <img src="media/images/decorative-border.png" alt="Decorative border">
          <p>(Unnecessary info announced to screen readers)</p>
        </div>
      </div>
    </section>

    <!-- 2. Image of Text -->
    <section>
      <h3>2. Image of Text (1.4.5)</h3>
      <p><strong>Why avoid?</strong> Hard to resize, translate, or read by screen readers. Always use real text with CSS styling.</p>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p style="font-size:24px; font-weight:bold; color:red;">THIS WEEKEND ONLY 50% OFF</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <img src="media/images/sale-text.jpg" alt="SALE - 50% OFF this weekend only">
        </div>
      </div>
    </section>

    <!-- 3. Use of Color -->
    <section>
      <h3>3. Use of Color (1.4.1)</h3>
      <p>Do not rely on color alone for important info:</p>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <form>
            <label for="email-good">Email 
              <span aria-hidden="true" style="color:red;">*</span> (Required)
            </label>
            <input type="email" id="email-good" aria-required="true">
            <p style="color:red;"><strong>Error:</strong> Please enter a valid email.</p>
          </form>
          <p>
            <a href="#" style="text-decoration:underline; color:blue;">
              Clickable Link
            </a>
            <span>(Visible underline + color)</span>
          </p>
        </div>

        <div class="bad-example">
          <h4>❌ Bad</h4>
          <form>
            <label for="email-bad" style="color:red;">Email</label>
            <input type="email" id="email-bad">
            <p style="color:red;">Invalid</p>
          </form>
          <p>
            <a href="#" style="color:blue; text-decoration:none;">
              Link
            </a>
            <span>(Only color differentiates link)</span>
          </p>
        </div>
      </div>
    </section>

    <!-- 4. Sensory Characteristics -->
    <section>
      <h3>4. Sensory Characteristics (1.3.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>"Click the Continue button"</p>
          <button>Continue</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>"Click the green button to continue"</p>
          <button class="green-button">Continue</button>
        </div>
      </div>
    </section>

    <!-- 5. Info and Relationships -->
    <section>
      <h3>5. Info and Relationships (1.3.1)</h3>
      <p>
        Proper semantic structure helps assistive technologies understand the relationships between content.  
        Below are examples for <strong>Table, List, Heading, and Landmark.</strong>
      </p>

      <!-- Table -->
      <h4>📊 Table</h4>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <table border="1">
            <caption>Student Marks (4×4 Matrix)</caption>
            <thead>
              <tr>
                <th>Student</th>
                <th>Math</th>
                <th>Science</th>
                <th>English</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Alice</th>
                <td>85</td>
                <td>90</td>
                <td>78</td>
              </tr>
              <tr>
                <th>Bob</th>
                <td>75</td>
                <td>88</td>
                <td>82</td>
              </tr>
              <tr>
                <th>Charlie</th>
                <td>92</td>
                <td>81</td>
                <td>79</td>
              </tr>
              <tr>
                <th>Diana</th>
                <td>88</td>
                <td>85</td>
                <td>91</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <table border="1">
            <tr><td>Alice</td><td>85</td><td>90</td><td>78</td></tr>
            <tr><td>Bob</td><td>75</td><td>88</td><td>82</td></tr>
            <tr><td>Charlie</td><td>92</td><td>81</td><td>79</td></tr>
            <tr><td>Diana</td><td>88</td><td>85</td><td>91</td></tr>
          </table>
          <p>(No caption, no <code>&lt;th&gt;</code>, unclear structure)</p>
        </div>
      </div>

      <!-- List -->
      <h4>📋 List</h4>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <ul>
            <li>Apple</li>
            <li>Orange</li>
            <li>Mango</li>
          </ul>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Apple, Orange, Mango (no list tags)</p>
        </div>
      </div>

      <!-- Heading -->
      <h4>🔠 Heading</h4>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <div>
            <h1>H1: Perceivable</h1>
            <div style="margin-left:20px;">
              <h2>H2: Info and Relationships</h2>
              <div style="margin-left:20px;">
                <h3>H3: Table Example</h3>
                <p>Content under Table section</p>
                <h3>H3: Heading Example</h3>
                <p>Content under Heading section</p>
              </div>
            </div>
          </div>
          <p>(Proper hierarchy visually indented)</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p><b>Perceivable</b> → <b>Info and Relationships</b> → <b>Table Example</b> (Only bold text, no heading tags)</p>
        </div>
      </div>

      <!-- Landmark -->
      <h4>🏷️ Landmark</h4>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <header>Header (Landmark)</header>
          <main>Main Content (Landmark)</main>
          <footer>Footer (Landmark)</footer>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <div>Header</div>
          <div>Main Content</div>
          <div>Footer</div>
          <p>(Generic <code>&lt;div&gt;</code>, no semantic meaning)</p>
        </div>
      </div>
    </section>

    <!-- 6. Audio -->
    <section>
      <h3>6. Audio with Optional Transcript (1.2.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <audio controls>
            <source src="media/audio/sample-audio.mp3" type="audio/mpeg">
          </audio>
          <button onclick="toggleTranscript('audio-transcript')">View Transcript</button>
          <div id="audio-transcript" hidden>
            WCAG stands for Web Content Accessibility Guidelines...
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <audio controls>
            <source src="media/audio/sample-audio.mp3" type="audio/mpeg">
          </audio>
          <p>(No transcript provided)</p>
        </div>
      </div>
    </section>

    <!-- 7. Video -->
    <section>
      <h3>7. Video with Captions (1.2.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <video controls>
            <source src="media/video/sample-video.mp4" type="video/mp4">
          </video>
          <button onclick="toggleTranscript('video-transcript')">View Video Description</button>
          <div id="video-transcript" hidden>
            This video demonstrates bad vs good color contrast...
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <video controls>
            <source src="media/video/sample-video.mp4" type="video/mp4">
          </video>
          <p>(No captions or description)</p>
        </div>
      </div>
    </section>
  `;
}

function getOperableContent() {
  return `
    <h2>Operable Examples (WCAG 2.x)</h2>

    <!-- 1. Keyboard Accessible (2.1.1) -->
    <section>
      <h3>1. Keyboard Accessible (2.1.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <button onclick="alert('Button 1 activated!')">Button 1</button>
          <button onclick="alert('Button 2 activated!')">Button 2</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <div onclick="alert('Not keyboard accessible')" 
               style="background:#ccc; padding:10px; width:100px; cursor:pointer;">
            Click Here
          </div>
        </div>
      </div>
    </section>

    <!-- 2. No Keyboard Trap (2.1.2) -->
    <section>
      <h3>2. No Keyboard Trap (2.1.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <button id="open-accessible-modal" onclick="openAccessibleModal()">Open Accessible Modal</button>
          <div id="accessible-modal" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" hidden>
            <h4 id="modalTitle">Accessible Modal</h4>
            <p>Focus is trapped inside until closed, but you can close or press Escape to exit.</p>
            <button id="close-accessible-modal" onclick="closeAccessibleModal()">Close</button>
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <button id="open-trapped-modal" onclick="openTrappedModal()">Open Trapped Modal</button>
          <div id="trapped-modal" class="modal" style="display:none;" role="dialog" aria-modal="true">
            <h4>Trapped Modal</h4>
            <p>You cannot escape using keyboard!</p>
            <button>Just One Button</button>
            <button onclick="closeTrappedModal()">Close (Demo Only)</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Focus Visible (2.4.7) -->
    <section>
      <h3>3. Focus Visible (2.4.7)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <a href="#" class="focus-link">Home</a> |
          <a href="#" class="focus-link">About</a> |
          <a href="#" class="focus-link">Contact</a>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <a href="#" style="outline:none;">Home</a> |
          <a href="#" style="outline:none;">About</a>
        </div>
      </div>
    </section>

    <!-- 4. Focus Order (2.4.3) -->
    <section>
      <h3>4. Focus Order (2.4.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <button>1</button><button>2</button><button>3</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <button tabindex="3">First</button>
          <button tabindex="1">Second</button>
          <button tabindex="2">Third</button>
        </div>
      </div>
    </section>

    <!-- 5. Page Titled (2.4.2) -->
    <section>
      <h3>5. Page Titled (2.4.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p><code>&lt;title&gt;WCAG Operable Examples&lt;/title&gt;</code> – Describes page purpose clearly.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p><code>&lt;title&gt;Untitled Page&lt;/title&gt;</code> or missing title tag.</p>
        </div>
      </div>
    </section>

    <!-- 6. Headings and Labels (2.4.6) -->
    <section>
      <h3>6. Headings and Labels (2.4.6)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <h2>Support Request Form</h2>
          <p>Clear, descriptive heading and label help users understand the section purpose.</p>
          <label for="issue">Describe your issue:</label>
          <textarea id="issue"></textarea>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <h2>Untitled</h2>
          <p>Heading is generic and not meaningful.</p>
          <textarea placeholder="Type here"></textarea>
        </div>
      </div>
    </section>

    <!-- 7. Link Purpose (2.4.4) -->
    <section>
      <h3>7. Link Purpose (In Context) (2.4.4)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <a href="report.pdf">Download 2025 Annual Report (PDF)</a>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <a href="report.pdf">Click Here</a>
        </div>
      </div>
    </section>

    <!-- 8. Bypass Blocks (2.4.1) -->
    <section>
      <h3>8. Bypass Blocks (2.4.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <a href="#main-content" class="skip-link">Skip to Main Content</a>
          <p>This skip link appears when focused, allowing keyboard users to bypass repeated navigation links.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>No skip link – keyboard users must tab through all navigation before reaching the main content.</p>
        </div>
      </div>
    </section>

    <!-- 9. Multiple Ways (2.4.5) -->
    <section>
      <h3>9. Multiple Ways (2.4.5)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>Users can find content in multiple ways:</p>
          <ul>
            <li><strong>Search:</strong> <input type="text" placeholder="Type keyword"><button>Go</button></li>
            <li><strong>Site Map:</strong> <a href="#site-map">Jump to Site Map</a></li>
            <li><strong>Breadcrumbs:</strong> <nav aria-label="Breadcrumb"><a href="#">Home</a> › <a href="#">Articles</a> › <span>Current Page</span></nav></li>
          </ul>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Only one way to find content – no search, no site map, no breadcrumb navigation.</p>
        </div>
      </div>
    </section>

    <!-- 10. Timing Adjustable (2.2.1) -->
    <section>
      <h3>10. Timing Adjustable (2.2.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>
            Users are warned before the session expires and given an option to extend it.
            Essential for users with motor or cognitive disabilities who need more time.
          </p>
          <div id="timeout-popup" class="modal" role="dialog" aria-modal="true" aria-labelledby="timeoutTitle" hidden>
            <h4 id="timeoutTitle">Session Timeout Warning</h4>
            <p>Your session will expire soon.</p>
            <button id="extend-btn" onclick="extendSession()">Extend Session</button>
            <button onclick="closeTimeoutPopup()">Close</button>
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Session ends abruptly without any warning or control to extend.</p>
        </div>
      </div>
    </section>

    <!-- 11. Pause, Stop, Hide (2.2.2) -->
    <section>
      <h3>11. Pause, Stop, Hide (2.2.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>
            Moving or auto-updating content lasting more than 5 seconds must have controls to pause, stop, or hide it.
            Controls are placed just before or after 3 elements from the moving content.
          </p>
          <marquee id="news-ticker">Breaking News... Accessibility is important!</marquee>
          <button onclick="document.getElementById('news-ticker').stop()">Pause</button>
          <button onclick="document.getElementById('news-ticker').start()">Play</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Continuous scrolling news ticker with no pause, stop, or hide option.</p>
          <marquee>Breaking News... (No stop control)</marquee>
        </div>
      </div>
    </section>

    <!-- 12. Three Flashes (2.3.1) -->
    <section>
      <h3>12. Three Flashes or Below Threshold (2.3.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>No flashing beyond 3 times per second to avoid seizures.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p style="animation: flash 0.2s infinite;">Flashing Content</p>
        </div>
      </div>
    </section>
  `;
}

function getUnderstandableContent() {
  return `
    <h2>Understandable Examples (WCAG 3.x)</h2>

    <!-- 1. Language of Page (3.1.1) -->
    <section>
      <h3>1. Language of Page (3.1.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p><code>&lt;html lang="en"&gt;</code> is properly set for the page language.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>No <code>lang</code> attribute — screen readers may mispronounce words.</p>
        </div>
      </div>
    </section>

    <!-- 2. Language of Parts (3.1.2) -->
    <section>
      <h3>2. Language of Parts (3.1.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p lang="fr">Bonjour! Ceci est un texte en français.</p>
          <p lang="es">¡Hola! Este es un texto en español.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Bonjour! Ceci est un texte en français. (No <code>lang</code> attribute)</p>
        </div>
      </div>
    </section>

    <!-- 3. On Focus (3.2.1) -->
    <section>
      <h3>3. On Focus (3.2.1)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <button>Focus me (No unexpected change)</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <button 
            onfocus="document.getElementById('focus-warning').hidden = false;"
            onblur="document.getElementById('focus-warning').hidden = true;">
            Focus me (Unexpected change)
          </button>
          <p id="focus-warning" aria-live="assertive" style="color:red;" hidden>
            ⚠ Page content changed unexpectedly on focus!
          </p>
        </div>
      </div>
    </section>

    <!-- 4. On Input (3.2.2) -->
    <section>
      <h3>4. On Input (3.2.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>Dropdown does nothing until you submit explicitly:</p>
          <select>
            <option>Select</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Changing selection automatically submits:</p>
          <select onchange="alert('Form auto-submitted unexpectedly!')">
            <option>Select</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </div>
      </div>
    </section>

    <!-- 5. Consistent Navigation (3.2.3) -->
    <section>
      <h3>5. Consistent Navigation (3.2.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <nav>
            <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
          </nav>
          <p>Navigation order is consistent on all pages.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <nav>
            <a href="#">Contact</a> | <a href="#">Home</a> | <a href="#">About</a>
          </nav>
          <p>Inconsistent order confuses users.</p>
        </div>
      </div>
    </section>

    <!-- 6. Consistent Identification (3.2.4) -->
    <section>
      <h3>6. Consistent Identification (3.2.4)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <button title="Search">🔍 Search</button>
          <p>The same icon and label used for Search across the site.</p>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <button title="Find">🔍 Find</button>
          <p>Same function (Search) labeled differently on other pages.</p>
        </div>
      </div>
    </section>

    <!-- 7. Labels or Instructions (3.3.2) -->
    <section>
      <h3>7. Labels or Instructions (3.3.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <form>
            <label for="full-name">Full Name (Required):</label>
            <input id="full-name" type="text" aria-required="true">
            <p id="name-help">Enter your full name as in ID proof.</p>
          </form>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <form>
            <input type="text" placeholder="Full Name">
            <p>(No proper label or instructions)</p>
          </form>
        </div>
      </div>
    </section>

    <!-- 8. Error Identification & Suggestion (3.3.1 & 3.3.3) -->
    <section>
      <h3>8. Error Identification & Suggestion (3.3.1 & 3.3.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <form onsubmit="return showErrorExample()">
            <label for="email-good">Email:</label>
            <input type="email" id="email-good">
            <button type="submit">Submit</button>
            <p id="email-error" style="color:red;" aria-live="assertive"></p>
          </form>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <form>
            <input type="email" value="wrongemail">
            <p style="color:red;">Error!</p>
          </form>
        </div>
      </div>
    </section>

    <!-- 9. Error Prevention (Legal, Financial, Data) (3.3.4) -->
    <section>
      <h3>9. Error Prevention (3.3.4)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>Before submitting important data:</p>
          <ul>
            <li>Review step provided.</li>
            <li>Confirmation dialog shown.</li>
            <li>Option to cancel or correct data.</li>
          </ul>
          <button onclick="alert('Confirm before final submit!')">Submit with Confirmation</button>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <button onclick="alert('Submitted immediately!')">Submit Immediately</button>
          <p>No review, no cancel option.</p>
        </div>
      </div>
    </section>
  `;
}

function getRobustContent() {
  return `
    <h2>Robust Examples (WCAG 4.x)</h2>

    <!-- 1. Proper ARIA Roles (4.1.2) -->
    <section>
      <h3>1. Proper ARIA Roles (4.1.2)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>Use native HTML elements where possible. Only add ARIA when native roles are unavailable.</p>
          <button>Native Button (No ARIA needed)</button>
          <div role="button" tabindex="0" aria-pressed="false"
               style="display:inline-block; padding:5px; background:#005fcc; color:#fff; cursor:pointer; margin-top:5px;"
               onclick="alert('Custom ARIA button activated!')"
               onkeydown="if(event.key==='Enter'||event.key===' '){alert('Custom ARIA button activated!')}">
            ARIA Custom Button (Only when native button not possible)
          </div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Unnecessary ARIA overriding native semantics.</p>
          <button role="button" aria-pressed="true">Wrong: Native button should not override its default role</button>
          <div onclick="alert('No keyboard support!')" style="background:#ccc; padding:5px; width:120px;">
            Div with no ARIA or keyboard handling
          </div>
        </div>
      </div>
    </section>

    <!-- 2. Dialog with ARIA (4.1.3) -->
    <section>
      <h3>2. Dialog with ARIA (4.1.3)</h3>
      <div class="example-row">
        <div class="good-example">
  <h4>✅ Correct</h4>
  <p>Use <code>role="dialog"</code> with proper labels and focus management.</p>
  <button id="open-aria-dialog" onclick="openRobustDialog()">Open ARIA Dialog</button>

  <div
    id="aria-dialog"
    role="dialog"
    aria-modal="true"
    aria-labelledby="aria-dialog-title"
    aria-describedby="aria-dialog-desc"
    hidden
    style="position:fixed; top:30%; left:30%; background:white; border:2px solid #333; padding:20px; width:300px;"
  >
    <button aria-label="Close dialog" onclick="closeRobustDialog()" class="close-button">×</button>
    <h4 id="aria-dialog-title">Subscribe</h4>
    <p id="aria-dialog-desc">Would you like to subscribe to our newsletter?</p>
    <button onclick="closeRobustDialog()">Yes</button>
    <button onclick="closeRobustDialog()">No</button>
  </div>
</div>

        <div class="bad-example">
  <h4>❌ Bad</h4>
  <p>Popup with no ARIA roles, no focus trap, and no proper labeling.</p>
  <button onclick="document.getElementById('bad-popup').style.display='block'">Open Bad Popup</button>

  <div
    id="bad-popup"
    style="display:none; position:fixed; top:30%; left:30%; background:white; border:1px solid #333; padding:20px; width:300px;"
  >
    <b>Subscribe</b>
    <p>No ARIA role, screen readers may miss this.</p>
    <button onclick="this.parentElement.style.display='none'">Close</button>
  </div>
</div>
      </div>
    </section>

    <!-- 3. Status Message (4.1.3) -->
    <section>
      <h3>3. Status Message (4.1.3)</h3>
      <div class="example-row">
        <div class="good-example">
          <h4>✅ Correct</h4>
          <p>Status messages should use <code>role="status"</code> or <code>aria-live</code> so screen readers announce automatically.</p>
          <button onclick="showRobustStatus()">Show Status Message</button>
          <div id="robust-status" role="status" style="margin-top:10px; color:green;"></div>
        </div>
        <div class="bad-example">
          <h4>❌ Bad</h4>
          <p>Status changes visually but screen readers won't be informed.</p>
          <button onclick="document.getElementById('bad-status').innerText='Saved successfully!'">Show Status</button>
          <div id="bad-status" style="margin-top:10px; color:green;"></div>
        </div>
      </div>
    </section>
    <section aria-labelledby="manual-tabs-heading">
  <h2 id="manual-tabs-heading">Tabs with Manual Activation</h2>

  <div class="tabs manual" role="tablist" aria-label="Manual Tabs">
    <button
      role="tab"
      aria-selected="true"
      aria-controls="manual-panel-1"
      id="manual-tab-1"
      tabindex="0"
    >
      Tab 1
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="manual-panel-2"
      id="manual-tab-2"
      tabindex="-1"
    >
      Tab 2
    </button>
    <button
      role="tab"
      aria-selected="false"
      aria-controls="manual-panel-3"
      id="manual-tab-3"
      tabindex="-1"
    >
      Tab 3
    </button>
  </div>

  <div
    id="manual-panel-1"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="manual-tab-1"
  >
    Content for Tab 1
  </div>
  <div
    id="manual-panel-2"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="manual-tab-2"
    hidden
  >
    Content for Tab 2
  </div>
  <div
    id="manual-panel-3"
    role="tabpanel"
    tabindex="0"
    aria-labelledby="manual-tab-3"
    hidden
  >
    Content for Tab 3
  </div>
</section>
  `;
}

// ====================================================================
// 3. OPERABLE SECTION EVENT HANDLERS
// ====================================================================

function initOperableEventListeners() {
  // Initialize timeout popup after 5 minutes (for demo purposes, reduced to 10 seconds)
  setTimeout(() => {
    openTimeoutPopup();
  }, 10000); // 10 seconds for demo
}

// ====================================================================
// 4. MODAL AND DIALOG MANAGEMENT
// ====================================================================

// Accessible Modal Functions
let lastFocusedTrigger = null;
let accessibleModalKeyHandler = null;

function openAccessibleModal() {
  const modal = document.getElementById('accessible-modal');
  if (!modal) return;
  
  modal.hidden = false;
  lastFocusedTrigger = document.activeElement;
  trapAccessibleModalFocus(modal);
  modal.querySelector('button').focus();
}

function closeAccessibleModal() {
  const modal = document.getElementById('accessible-modal');
  if (!modal) return;
  
  modal.hidden = true;
  document.removeEventListener('keydown', accessibleModalKeyHandler);
  if (lastFocusedTrigger) lastFocusedTrigger.focus();
}

function trapAccessibleModalFocus(modal) {
  const focusableSelectors = 'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableElements = modal.querySelectorAll(focusableSelectors);
  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  accessibleModalKeyHandler = function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
    if (e.key === 'Escape') closeAccessibleModal();
  };

  document.addEventListener('keydown', accessibleModalKeyHandler);
}

// Keyboard Trap (Bad Example) Functions
function openTrappedModal() {
  const modal = document.getElementById('trapped-modal');
  if (!modal) return;
  
  modal.style.display = 'block';
  modal.querySelector('button').focus();
  document.addEventListener('keydown', badTrapHandler);
}

function closeTrappedModal() {
  const modal = document.getElementById('trapped-modal');
  if (!modal) return;
  
  modal.style.display = 'none';
  document.removeEventListener('keydown', badTrapHandler);
}

function badTrapHandler(e) {
  if (e.key === 'Tab') {
    e.preventDefault();
    const button = document.querySelector('#trapped-modal button');
    if (button) button.focus();
  }
}

// ====================================================================
// 5. TIMEOUT MANAGEMENT
// ====================================================================

let lastFocusedElement = null;
let timeoutKeyHandler = null;

function openTimeoutPopup() {
  const popup = document.getElementById('timeout-popup');
  if (!popup) return;

  popup.hidden = false;
  lastFocusedElement = document.activeElement;

  const firstButton = popup.querySelector('button');
  if (firstButton) firstButton.focus();

  trapTimeoutFocus(popup);
}

function closeTimeoutPopup() {
  const popup = document.getElementById('timeout-popup');
  if (!popup) return;
  
  popup.hidden = true;
  document.removeEventListener('keydown', timeoutKeyHandler);

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function extendSession() {
  alert('Session extended!');
  closeTimeoutPopup();

  // Restart the countdown after extension (10 seconds for demo)
  setTimeout(() => {
    openTimeoutPopup();
  }, 10000);
}

function trapTimeoutFocus(popup) {
  const focusableSelectors = 'button, [href], input, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableElements = popup.querySelectorAll(focusableSelectors);
  const firstEl = focusableElements[0];
  const lastEl = focusableElements[focusableElements.length - 1];

  timeoutKeyHandler = function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
    if (e.key === 'Escape') {
      closeTimeoutPopup();
    }
  };

  document.addEventListener('keydown', timeoutKeyHandler);
}

// ====================================================================
// 6. FORM VALIDATION (UNDERSTANDABLE SECTION)
// ====================================================================

function showErrorExample() {
  const emailField = document.getElementById("email-good");
  const errorMsg = document.getElementById("email-error");
  
  if (!emailField || !errorMsg) return false;
  
  if (!emailField.value.includes("@")) {
    errorMsg.textContent = "Please enter a valid email (example: name@example.com)";
    return false;
  }
  
  errorMsg.textContent = "";
  alert("Form submitted successfully!");
  return true;
}

// ====================================================================
// 7. ROBUST SECTION FUNCTIONS
// ====================================================================

// Robust Dialog Functions
let lastFocusedRobust = null;
let robustKeyHandler = null;

function openRobustDialog() {
  const modal = document.getElementById("aria-dialog");
  if (!modal) return;
  
  modal.hidden = false;
  lastFocusedRobust = document.activeElement;
  trapRobustFocus(modal);
  modal.querySelector("button").focus();
}

function closeRobustDialog() {
  const modal = document.getElementById("aria-dialog");
  if (!modal) return;
  
  modal.hidden = true;
  document.removeEventListener("keydown", robustKeyHandler);
  if (lastFocusedRobust) lastFocusedRobust.focus();
}

function trapRobustFocus(modal) {
  const focusable = modal.querySelectorAll("button");
  const firstEl = focusable[0];
  const lastEl = focusable[focusable.length - 1];

  robustKeyHandler = function (e) {
    if (e.key === "Tab") {
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    }
    if (e.key === "Escape") {
      closeRobustDialog();
    }
  };
  document.addEventListener("keydown", robustKeyHandler);
}

function showRobustStatus() {
  const statusElement = document.getElementById("robust-status");
  if (statusElement) {
    statusElement.innerText = "Saved successfully!";
  }
}
function closeRobustDialog() {
  const modal = document.getElementById("aria-dialog");
  if (!modal) return;
  
  modal.hidden = true;
  document.removeEventListener("keydown", robustKeyHandler);
  if (lastFocusedRobust) lastFocusedRobust.focus();
}

// ====================================================================
// 8. UTILITY FUNCTIONS
// ====================================================================

function toggleTranscript(transcriptId) {
  const transcript = document.getElementById(transcriptId);
  if (transcript) {
    transcript.hidden = !transcript.hidden;
  }
}

function toggleMenu() {
  const menu = document.getElementById("nav-menu");
  const btn = document.querySelector(".hamburger");

  // Toggle menu visibility
  menu.classList.toggle("show");

  // Update aria-expanded for screen readers
  const expanded = menu.classList.contains("show");
  btn.setAttribute("aria-expanded", expanded);
}

//
'use strict';

class TabsManual {
  constructor(groupNode) {
    this.tablistNode = groupNode;

    this.tabs = [];
    this.tabpanels = [];

    this.firstTab = null;
    this.lastTab = null;

    const children = this.tablistNode.children;
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      if (node.getAttribute('role') === 'tab') {
        this.tabs.push(node);
        this.firstTab = this.firstTab || node;
        this.lastTab = node;
      }
    }

    for (let i = 0; i < this.tabs.length; i++) {
      const tab = this.tabs[i];
      const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
      tab.tabIndex = tab.getAttribute('aria-selected') === 'true' ? 0 : -1;

      this.tabpanels.push(tabpanel);

      tab.addEventListener('keydown', this.onKeydown.bind(this));
      tab.addEventListener('click', this.onClick.bind(this));
    }
  }

  onKeydown(event) {
    const key = event.key;
    let newTab = null;

    switch (key) {
      case 'ArrowLeft':
      case 'Left':
        newTab = this.getPreviousTab(event.currentTarget);
        break;
      case 'ArrowRight':
      case 'Right':
        newTab = this.getNextTab(event.currentTarget);
        break;
      case 'Home':
        newTab = this.firstTab;
        break;
      case 'End':
        newTab = this.lastTab;
        break;
      case 'Enter':
      case ' ':
        this.activateTab(event.currentTarget);
        break;
      default:
        break;
    }

    if (newTab) {
      event.preventDefault();
      newTab.focus();
    }
  }

  onClick(event) {
    this.activateTab(event.currentTarget);
  }

  activateTab(tab) {
    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].setAttribute('aria-selected', 'false');
      this.tabs[i].tabIndex = -1;
      this.tabpanels[i].hidden = true;
    }

    tab.setAttribute('aria-selected', 'true');
    tab.tabIndex = 0;
    const tabpanel = document.getElementById(tab.getAttribute('aria-controls'));
    tabpanel.hidden = false;
  }

  getPreviousTab(currentTab) {
    const index = this.tabs.indexOf(currentTab);
    return index > 0 ? this.tabs[index - 1] : this.lastTab;
  }

  getNextTab(currentTab) {
    const index = this.tabs.indexOf(currentTab);
    return index < this.tabs.length - 1 ? this.tabs[index + 1] : this.firstTab;
  }
}

window.addEventListener('load', function () {
  const tablists = document.querySelectorAll('[role=tablist].manual');
  for (let i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
});
// ...existing code...

// Add this utility function near the top or bottom of your file:
function initTabsManual() {
  const tablists = document.querySelectorAll('[role=tablist].manual');
  for (let i = 0; i < tablists.length; i++) {
    new TabsManual(tablists[i]);
  }
}

// Update your loadSection function:
function loadSection(section) {
  switch (section) {
    case "perceivable":
      content.innerHTML = getPerceivableContent();
      break;
    case "operable":
      content.innerHTML = getOperableContent();
      initOperableEventListeners();
      break;
    case "understandable":
      content.innerHTML = getUnderstandableContent();
      break;
    case "robust":
      content.innerHTML = getRobustContent();
      break;
    default:
      content.innerHTML = `<h2>Welcome</h2><p>Select a principle above to view examples.</p>`;
  }
  // Always re-initialize tabs after loading new content
  initTabsManual();
}

// Remove the old window.onload TabsManual code at the bottom:
window.addEventListener('load', function () {
  initTabsManual();
});

// ...existing code...