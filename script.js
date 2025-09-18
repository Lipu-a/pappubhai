document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.getElementById('main-nav');
    const appContent = document.getElementById('app-content');

    // --- Data (Quizzes, Simulations, and Learning Content) ---
    const data = {
        phishing: {
            title: "Phishing Attacks",
            description: "Learn how to identify and protect yourself from phishing scams.",
            content: [
                {
                    heading: "What is Phishing?",
                    text: "Phishing is a type of social engineering attack often used to steal user data, including login credentials and credit card numbers. It occurs when a cybercriminal, masquerading as a trusted entity, dupes a victim into opening an email, instant message, or text message. The recipient is then tricked into clicking a malicious link, which can lead to the installation of malware, the freezing of the system as part of a ransomware attack, or the revealing of sensitive information."
                },
                {
                    heading: "Common Phishing Tactics",
                    text: "Phishing emails often include urgent requests, threats, or enticing offers. They might mimic well-known brands (banks, online retailers, social media) to appear legitimate. Key signs include:<ul><li>Urgent or threatening language</li><li>Requests for personal/financial information</li><li>Generic greetings ('Dear Customer')</li><li>Suspicious sender email addresses or mismatched link URLs</li><li>Spelling and grammatical errors</li></ul>"
                },
                {
                    heading: "How to Protect Yourself",
                    text: "Always be skeptical of unsolicited communications. Verify the sender. Hover over links to see the actual URL before clicking. Never share sensitive information via email or untrusted websites. Report suspicious emails to your IT department or email provider."
                }
            ],
            quiz: [
                {
                    question: "Which of these is a common sign of a phishing email?",
                    options: ["Perfect grammar and spelling", "An urgent request for personal information", "A clear and professional sender address", "A small, legitimate-looking attachment"],
                    answer: "An urgent request for personal information"
                },
                {
                    question: "What should you do if you receive a suspicious email?",
                    options: ["Click all links to investigate", "Reply asking for more details", "Forward it to all your contacts", "Delete it or report it as spam without clicking links"],
                    answer: "Delete it or report it as spam without clicking links"
                },
                {
                    question: "What does 'hovering over a link' help you to identify in a phishing attempt?",
                    options: ["If the link is broken", "The color of the link text", "The true destination URL", "If the link is bolded"],
                    answer: "The true destination URL"
                }
            ],
            simulation: [
                {
                    type: "email",
                    subject: "Urgent: Your account needs verification!",
                    from: "support@amaz0n.com", // Notice the '0'
                    body: "Dear Customer, we've detected unusual activity on your account. Please click here to verify your details immediately to avoid account suspension.",
                    link: "http://fake-amazon.com/verify",
                    isPhishing: true,
                    explanation: "The sender's email 'amaz0n.com' is misspelled, and the urgent tone combined with a request for immediate action and a suspicious link are classic phishing tactics."
                },
                {
                    type: "email",
                    subject: "Order Confirmation - #FG7890",
                    from: "noreply@legitshop.com",
                    body: "Thank you for your recent purchase. Your order #FG7890 has been confirmed and will be shipped soon. You can view your order details here: http://legitshop.com/order/FG7890",
                    link: "http://legitshop.com/order/FG7890",
                    isPhishing: false,
                    explanation: "This email appears legitimate with correct spelling, a credible sender, and a standard order confirmation message with a plausible link."
                },
                {
                    type: "email",
                    subject: "Password Reset Request",
                    from: "no-reply@facebo0k.com", // '0' instead of 'o'
                    body: "Someone requested a password reset for your account. If this wasn't you, click this link to secure your account: http://badlink.com/reset",
                    link: "http://badlink.com/reset",
                    isPhishing: true,
                    explanation: "Another example of a misspelled domain and a link that clearly does not match the service, attempting to panic the user into clicking."
                }
            ]
        },
        passwordAttacks: {
            title: "Password Attacks",
            description: "Understand common password attack methods and how to create strong passwords.",
            content: [
                {
                    heading: "What are Password Attacks?",
                    text: "Password attacks are attempts to gain unauthorized access to computer systems by cracking or guessing user passwords. Attackers use various methods, from simple guessing to sophisticated software, to exploit weak passwords or steal credentials."
                },
                {
                    heading: "Types of Password Attacks",
                    text: "<ul><li><strong>Brute Force:</strong> Trying every possible combination of characters until the correct password is found.</li><li><strong>Dictionary Attack:</strong> Using a list of common words, phrases, and previously leaked passwords.</li><li><strong>Credential Stuffing:</strong> Using stolen username/password pairs from one breach to try logging into other services.</li><li><strong>Rainbow Table Attacks:</strong> Using pre-computed hashes of passwords to quickly find matches.</li></ul>"
                },
                {
                    heading: "Creating Strong Passwords",
                    text: "Strong passwords are long, complex, and unique. Use a combination of uppercase and lowercase letters, numbers, and symbols. Aim for at least 12-16 characters. Consider using a pass phrase or a password manager. Never reuse passwords across different accounts."
                }
            ],
            quiz: [
                {
                    question: "Which of these is the LEAST effective method for creating a strong password?",
                    options: ["Using a random string of 16 characters", "Using a memorable phrase of 4 random words", "Using your pet's name followed by your birth year", "Using a password manager to generate a unique password"],
                    answer: "Using your pet's name followed by your birth year"
                },
                {
                    question: "What is a 'Brute Force' attack?",
                    options: ["Using a list of common words", "Trying every possible password combination", "Using stolen credentials from another site", "Tricking a user into revealing their password"],
                    answer: "Trying every possible password combination"
                }
            ],
            simulation: [
                // Placeholder for Password Strength simulation
            ]
        },
        malware: {
            title: "Malware",
            description: "Explore different types of malware and how they infect systems.",
            content: [
                {
                    heading: "What is Malware?", 
                    text: "Malware is malicious software designed to disrupt, damage, or gain unauthorized access to a computer system. The term 'malware' is a broad category that includes viruses, worms, Trojans, ransomware, spyware, adware, and more."
                },
                {
                    heading: "Types of Malware",
                    text: "<ul><li><strong>Viruses:</strong> Attach themselves to legitimate programs and spread when those programs are executed.</li><li><strong>Worms:</strong> Self-replicating and can spread across networks without human interaction.</li><li><strong>Trojan Horses:</strong> Disguise themselves as legitimate software but carry a malicious payload.</li><li><strong>Ransomware:</strong> Encrypts files and demands a ransom for their decryption.</li><li><strong>Spyware:</strong> Secretly observes and collects information about users' activities.</li></ul>"
                },
                {
                    heading: "How Malware Spreads & Protection",
                    text: "Malware often spreads through malicious email attachments, infected websites, compromised software downloads, or vulnerable networks. To protect yourself: use antivirus software, keep your operating system and applications updated, be cautious with email attachments and links, and back up your data regularly."
                }
            ],
            quiz: [
                {
                    question: "Which type of malware encrypts your files and demands payment for their release?",
                    options: ["Virus", "Worm", "Ransomware", "Spyware"],
                    answer: "Ransomware"
                },
                {
                    question: "What is a key difference between a virus and a worm?",
                    options: ["Worms need user interaction to spread, viruses don't", "Viruses are always more destructive than worms", "Worms can self-replicate and spread without human interaction, viruses often require a host program", "There is no significant difference"],
                    answer: "Worms can self-replicate and spread without human interaction, viruses often require a host program"
                }
            ],
            simulation: [
                // Placeholder for Malware Identification simulation
            ]
        }
    };

    // --- Progress Tracking (using localStorage) ---
    function getProgress() {
        const progress = JSON.parse(localStorage.getItem('cyberGuardProgress')) || {};
        // Initialize modules if they don't exist
        Object.keys(data).forEach(moduleKey => {
            if (!progress[moduleKey]) {
                progress[moduleKey] = {
                    quizCompleted: false,
                    quizScore: 0,
                    simulationCompleted: false,
                    contentRead: false
                };
            }
        });
        return progress;
    }

    function saveProgress(progress) {
        localStorage.setItem('cyberGuardProgress', JSON.stringify(progress));
        updateDashboardProgress(); // Update dashboard whenever progress changes
        updateModuleProgressDisplays(); // Update individual module displays
    }

    function updateModuleProgress(moduleName, type, value) {
        const progress = getProgress();
        if (progress[moduleName]) {
            progress[moduleName][type] = value;
            saveProgress(progress);
        }
    }

    // --- Navigation Logic ---
    mainNav.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const sectionId = event.target.dataset.section;
            showSection(sectionId);
        }
    });

    function showSection(sectionId) {
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionId).classList.add('active');

        // If it's a module section, load its content
        if (data[sectionId]) {
            loadModuleContent(sectionId);
            updateModuleProgress(sectionId, 'contentRead', true); // Mark content as read
        } else if (sectionId === 'dashboard') {
            updateDashboardProgress();
        } else if (sectionId === 'profile') {
            displayUserProfile();
        }
    }

    // --- Module Content Loading ---
    function loadModuleContent(moduleName) {
        const moduleSection = document.getElementById(moduleName);
        const moduleData = data[moduleName];

        if (!moduleData) return; // Should not happen if data is well-defined

        let html = `
            <h2>${moduleData.title}</h2>
            <p>${moduleData.description}</p>
            <div class="module-progress-display" id="${moduleName}-progress"></div>
            <div class="learning-content">
        `;

        moduleData.content.forEach(item => {
            html += `
                <div class="content-item">
                    <h3>${item.heading}</h3>
                    <p>${item.text}</p>
                </div>
            `;
        });

        html += `
            </div>
            <div class="module-actions">
                <button class="start-quiz-btn" data-module="${moduleName}">Start Quiz</button>
                <button class="start-simulation-btn" data-module="${moduleName}">Start Simulation</button>
            </div>
            <div id="${moduleName}-quiz-container" class="quiz-container"></div>
            <div id="${moduleName}-simulation-container" class="simulation-container"></div>
        `;
        moduleSection.innerHTML = html; // Overwrite previous content (including old buttons)

        // Re-attach event listeners for newly created buttons
        moduleSection.querySelector('.start-quiz-btn').addEventListener('click', (event) => {
            event.target.style.display = 'none'; // Hide button after clicking
            loadQuiz(moduleName, document.getElementById(`${moduleName}-quiz-container`));
        });
        moduleSection.querySelector('.start-simulation-btn').addEventListener('click', (event) => {
            event.target.style.display = 'none'; // Hide button after clicking
            if (moduleName === 'phishing') {
                loadPhishingSimulation(document.getElementById(`${moduleName}-simulation-container`));
            } else {
                 document.getElementById(`${moduleName}-simulation-container`).innerHTML = "<p>Simulation not available for this module yet.</p>";
            }
        });

        updateModuleProgressDisplays(); // Update progress bar for this module
    }

    // --- Quiz Logic ---
    // (Event listeners for quiz buttons are now handled within loadModuleContent)

    function loadQuiz(moduleName, container) {
        const moduleData = data[moduleName];
        if (!moduleData || !moduleData.quiz || moduleData.quiz.length === 0) {
            container.innerHTML = "<p>Quiz not available for this module yet.</p>";
            return;
        }

        let quizHtml = '<h3>Quiz Time!</h3><form id="current-quiz-form">';
        moduleData.quiz.forEach((q, index) => {
            quizHtml += `
                <div class="question-card">
                    <p><strong>${index + 1}. ${q.question}</strong></p>
                    <div class="options">
            `;
            q.options.forEach((option) => {
                quizHtml += `
                    <label>
                        <input type="radio" name="question${index}" value="${option}">
                        ${option}
                    </label>
                `;
            });
            quizHtml += `
                    </div>
                </div>
            `;
        });
        quizHtml += `<button type="submit" class="submit-quiz-btn">Submit Quiz</button></form><div id="quiz-results"></div>`;
        container.innerHTML = quizHtml;

        const quizForm = document.getElementById('current-quiz-form');
        quizForm.addEventListener('submit', (event) => {
            event.preventDefault();
            submitQuiz(moduleName, quizForm, document.getElementById('quiz-results'));
        });
    }

    function submitQuiz(moduleName, form, resultsContainer) {
        const moduleQuiz = data[moduleName].quiz;
        let score = 0;
        let totalQuestions = moduleQuiz.length;
        let feedbackHtml = '<h3>Your Results:</h3>';

        moduleQuiz.forEach((q, index) => {
            const selectedOptionElement = form.elements[`question${index}`];
            const selectedOption = selectedOptionElement ? selectedOptionElement.value : undefined;

            if (selectedOption === q.answer) {
                score++;
                feedbackHtml += `<p style="color: green;"><strong>Question ${index + 1}: Correct!</strong></p>`;
            } else {
                feedbackHtml += `<p style="color: red;"><strong>Question ${index + 1}: Incorrect.</strong> Your answer: "${selectedOption || 'No answer selected'}". Correct answer: "${q.answer}"</p>`;
            }
        });

        resultsContainer.innerHTML = `${feedbackHtml}<p>You scored ${score} out of ${totalQuestions}.</p>`;
        updateModuleProgress(moduleName, 'quizCompleted', true);
        updateModuleProgress(moduleName, 'quizScore', score);

        // Optionally hide the submit button after submission
        form.querySelector('.submit-quiz-btn').style.display = 'none';
    }

    // --- Simulation Logic (Phishing Example) ---
    // (Event listeners for simulation buttons are now handled within loadModuleContent)

    let currentPhishingScenarioIndex = 0;
    function loadPhishingSimulation(container) {
        const scenarios = data.phishing.simulation;
        if (scenarios.length === 0) {
            container.innerHTML = "<p>No phishing scenarios available.</p>";
            return;
        }

        const scenario = scenarios[currentPhishingScenarioIndex];
        let simulationHtml = `
            <h3>Phishing Simulation: Identify the Threat</h3>
            <div class="email-mockup">
                <p><strong>From:</strong> ${scenario.from}</p>
                <p><strong>Subject:</strong> ${scenario.subject}</p>
                <hr>
                <p>${scenario.body}</p>
                <p><em>Hover over the link to inspect it (but don't click!):</em> <a href="#" onclick="return false;" onmouseover="this.title='${scenario.link}'">${scenario.link.split('/')[2]}...</a></p>
            </div>
            <div class="simulation-actions">
                <button id="mark-phishing" class="submit-quiz-btn">This is Phishing!</button>
                <button id="mark-legit" class="submit-quiz-btn">This is Legitimate</button>
            </div>
            <div id="simulation-feedback" style="margin-top: 1rem;"></div>
            <button id="next-scenario-btn" style="display:none; margin-top: 1rem;">Next Scenario</button>
        `;
        container.innerHTML = simulationHtml;

        document.getElementById('mark-phishing').onclick = () => checkPhishingGuess(scenario, true, document.getElementById('simulation-feedback'));
        document.getElementById('mark-legit').onclick = () => checkPhishingGuess(scenario, false, document.getElementById('simulation-feedback'));
        document.getElementById('next-scenario-btn').onclick = () => {
            // Check if all scenarios have been completed for the current module
            const allScenariosCompleted = (currentPhishingScenarioIndex + 1) === scenarios.length;

            if (allScenariosCompleted) {
                updateModuleProgress('phishing', 'simulationCompleted', true);
                alert("You've completed all phishing simulations!");
                document.getElementById('phishing-simulation-container').innerHTML = "<p>You have completed all phishing simulations!</p>";
            } else {
                currentPhishingScenarioIndex = (currentPhishingScenarioIndex + 1); // Move to next
                loadPhishingSimulation(container);
            }
        };
    }

    function checkPhishingGuess(scenario, userGuessIsPhishing, feedbackContainer) {
        const isCorrect = (scenario.isPhishing === userGuessIsPhishing);
        let feedbackMessage = "";

        if (isCorrect) {
            feedbackMessage = `<p style="color: green;"><strong>Correct!</strong> ${scenario.explanation}</p>`;
        } else {
            feedbackMessage = `<p style="color: red;"><strong>Incorrect.</strong> ${scenario.explanation}</p>`;
        }
        feedbackContainer.innerHTML = feedbackMessage;
        document.getElementById('next-scenario-btn').style.display = 'block';

        // Disable decision buttons after feedback
        document.getElementById('mark-phishing').disabled = true;
        document.getElementById('mark-legit').disabled = true;
    }


    // --- Dashboard Progress Display ---
    function updateDashboardProgress() {
        const dashboardSection = document.getElementById('dashboard');
        let progressHtml = '<h3>Your Learning Progress:</h3>';
        const overallProgress = getProgress();
        let completedModules = 0;
        const totalModules = Object.keys(data).length;

        Object.keys(data).forEach(moduleKey => {
            const moduleData = data[moduleKey];
            const moduleProgress = overallProgress[moduleKey];

            const isModuleComplete = moduleProgress.contentRead && moduleProgress.quizCompleted && (moduleData.simulation.length === 0 || moduleProgress.simulationCompleted);
            if (isModuleComplete) {
                completedModules++;
            }

            progressHtml += `
                <div class="module-summary">
                    <h4>${moduleData.title}</h4>
                    <p>Content Read: ${moduleProgress.contentRead ? '✅' : '❌'}</p>
                    <p>Quiz Completed: ${moduleProgress.quizCompleted ? `✅ (Score: ${moduleProgress.quizScore}/${moduleData.quiz.length})` : '❌'}</p>
                    <p>Simulation Completed: ${moduleData.simulation.length > 0 ? (moduleProgress.simulationCompleted ? '✅' : '❌') : 'N/A'}</p>
                    <p>Status: ${isModuleComplete ? '<span style="color: green;">Completed</span>' : '<span style="color: orange;">In Progress</span>'}</p>
                </div>
            `;
        });

        const overallPercentage = (completedModules / totalModules) * 100;
        progressHtml += `
            <div class="overall-progress">
                <h4>Overall Progress: ${overallPercentage.toFixed(0)}%</h4>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${overallPercentage}%;"></div>
                </div>
                <p>You have completed ${completedModules} out of ${totalModules} modules.</p>
            </div>
        `;
        dashboardSection.querySelector('p').nextElementSibling.remove(); // Remove old progress
        dashboardSection.insertAdjacentHTML('beforeend', progressHtml);
    }

    // --- Individual Module Progress Display ---
    function updateModuleProgressDisplays() {
        Object.keys(data).forEach(moduleKey => {
            const progressDisplay = document.getElementById(`${moduleKey}-progress`);
            if (progressDisplay) {
                const moduleData = data[moduleKey];
                const moduleProgress = getProgress()[moduleKey];

                const contentStatus = moduleProgress.contentRead ? '✅ Read' : '❌ Not Read';
                const quizStatus = moduleProgress.quizCompleted ? `✅ Quiz Completed (${moduleProgress.quizScore}/${moduleData.quiz.length})` : '❌ Quiz Pending';
                const simulationStatus = moduleData.simulation.length > 0
                    ? (moduleProgress.simulationCompleted ? '✅ Simulation Completed' : '❌ Simulation Pending')
                    : 'N/A';

                progressDisplay.innerHTML = `
                    <p><strong>Module Progress:</strong></p>
                    <ul>
                        <li>${contentStatus}</li>
                        <li>${quizStatus}</li>
                        <li>${simulationStatus}</li>
                    </ul>
                `;
            }
        });
    }

    // --- User Profile Display ---
    function displayUserProfile() {
        const profileSection = document.getElementById('profile');
        let profileHtml = '<h2>Your Learning Profile</h2>';
        const overallProgress = getProgress();

        profileHtml += `<h3>Module Breakdown:</h3>`;
        Object.keys(data).forEach(moduleKey => {
            const moduleData = data[moduleKey];
            const moduleProgress = overallProgress[moduleKey];
            profileHtml += `
                <div class="profile-module-card">
                    <h4>${moduleData.title}</h4>
                    <p>Content: ${moduleProgress.contentRead ? '✅ Read' : '❌ Not Read'}</p>
                    <p>Quiz: ${moduleProgress.quizCompleted ? `✅ Completed (${moduleProgress.quizScore}/${moduleData.quiz.length})` : '❌ Pending'}</p>
                    <p>Simulation: ${moduleData.simulation.length > 0 ? (moduleProgress.simulationCompleted ? '✅ Completed' : '❌ Pending') : 'N/A'}</p>
                </div>
            `;
        });
        profileSection.innerHTML = profileHtml;
    }


    // --- Initial Setup ---
    // Ensure initial progress is loaded and dashboard is updated
    getProgress(); // Initializes localStorage if empty
    showSection('dashboard'); // Start on the dashboard
    updateDashboardProgress();
    updateModuleProgressDisplays(); // Ensure all module progress displays are initialized

    // Add a reset button for development/testing
    // const resetButton = document.createElement('button');
    // resetButton.textContent = "Reset Progress (Dev Only)";
    // resetButton.style.marginTop = '20px';
    // resetButton.onclick = () => {
    //     if (confirm("Are you sure you want to reset all progress?")) {
    //         localStorage.removeItem('cyberGuardProgress');
    //         alert("Progress reset!");
    //         location.reload(); // Reload the page to reflect changes
    //     }
    // };
    // appContent.appendChild(resetButton);

});