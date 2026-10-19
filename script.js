/* ==========================================================================
   1. DATA OBJECTS (Pillar Details with Custom Images)
   ========================================================================== */
const pillarDetails = {
    merch: {
        title: "EMP-R Merch",
        image: "./images/merch.png",
        subtext: "Custom apparel, giveaways, and precision printing.",
        longDesc: "Transforming your brand identity into high-quality physical products. Our merchandise solutions focus on precision, durability, and premium finishes that leave a lasting impression on your clients.",
        features: ["Custom Corporate Apparel", "Precision Sublimation Printing", "High-Quality Branded Giveaways", "Direct-to-Film (DTF) Solutions", "Product Prototyping & Design"]
    },
    creative: {
        title: "EMP-R Creative",
        image: "./images/creative.png",
        subtext: "Building visual identity, digital posters, and branding strategies.",
        longDesc: "Crafting meaningful, distinctive visual systems and graphic identities that spark connection and leave a lasting impression through intentional design and strategic aesthetics.",
        features: ["Brand Identity & Logo Design", "Digital Posters & Marketing Assets", "Social Media Campaign Templates", "UI/UX Prototyping & Design Systems", "Motion Graphics & Animated Assets"]
    },
    systems: {
        title: "EMP-R Systems",
        image: "./images/system.png",
        subtext: "Custom website creation and software development.",
        longDesc: "Engineering high-performance custom software and enterprise-level web applications. We build scalable, secure systems designed specifically to automate your unique business workflows.",
        features: ["Custom ERP & CRM Development", "Full-Stack Web Applications", "Database Design & Management", "Workflow Automation Tools", "API & Third-party Integrations"]
    },
    tech: {
        title: "EMP-R Tech",
        image: "./images/tech.png",
        subtext: "Reliable networking, tech support, and infrastructure.",
        longDesc: "Building the digital backbone of your operations. We provide robust networking solutions and expert technical support to keep your business infrastructure secure, fast, and reliable.",
        features: ["Structured Network Architecture", "Remote & On-site Tech Support", "IT Infrastructure Maintenance", "Cybersecurity & Threat Audits", "Hardware Setup & Optimization"]
    },
    media: {
        title: "EMP-R Media",
        image: "./images/media.png",
        subtext: "Professional production and high-quality livestreaming.",
        longDesc: "Delivering broadcast-grade live events and cinematic video content. We combine high-end equipment with technical expertise to ensure your message reaches your audience with maximum impact and clarity.",
        features: ["Multi-Camera Event Coverage", "Professional Live Stream Switching", "Commercial Video Production", "Broadcast Audio Engineering", "Post-Production & Highlights"]
    }
};

/* ==========================================================================
   2. MAIN INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2.1 NAVBAR SCROLL EFFECT ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.5rem 0";
            navbar.style.backgroundColor = "rgba(5, 10, 24, 0.98)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            navbar.style.padding = "1rem 0";
            navbar.style.backgroundColor = "rgba(5, 10, 24, 0.95)";
            navbar.style.boxShadow = "none";
        }
    });

    // --- 2.2 ACCURATE REDIRECTION & SMOOTH SCROLL ---
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id], footer[id]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 85,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // --- 2.3 ACTIVE LINK TRACKING (ScrollSpy) ---
    function updateActiveLink() {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                current = "contact";
            } else if (window.pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (current && link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // --- WIZARD / QUOTE FORM SUBMISSION TO EMAIL ---
const wizardForm = document.getElementById('quoteForm');
if (wizardForm) {
    wizardForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const btn = wizardForm.querySelector('.btn-wizard-submit');
        const originalText = btn.innerHTML;
        
        // 1. Collect all selected pillars
        const selectedPillars = Array.from(document.querySelectorAll('.pillar-item.active'))
            .map(item => item.textContent.trim())
            .join(', ');

        // 2. Prepare Form Data
        const formData = new FormData(wizardForm);
        formData.append("Selected Pillars", selectedPillars || "None selected");
        formData.append("_subject", "New Project Consultation Quote Request!"); // Email Subject Line
        formData.append("_template", "table"); // Clean table format in email

        // 3. Show Loading State
        btn.disabled = true;
        btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>SENDING TO EMP-R...';

        try {
            // 4. Send via FormSubmit AJAX endpoint
            const response = await fetch("https://formsubmit.co/ajax/emprdigitalsolutions26@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success State
                btn.innerHTML = '<i class="bi bi-check-lg me-2"></i>QUOTE SENT!';
                btn.style.backgroundColor = '#22c55e';
                
                setTimeout(() => {
                    const modalEl = document.getElementById('quoteModal');
                    const modal = bootstrap.Modal.getInstance(modalEl);
                    if (modal) modal.hide();
                    
                    // Reset Form
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.style.backgroundColor = '';
                    wizardForm.reset();
                }, 2000);
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            btn.innerHTML = '<i class="bi bi-exclamation-triangle me-2"></i>ERROR SENDING';
            btn.style.backgroundColor = '#dc3545';
            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        }
    });
}

    // --- 2.5 PILLAR EXPLORER MODAL INJECTION (FIXED & UNIFIED) ---
    const pillarModal = document.getElementById('pillarModal');
    if (pillarModal) {
        pillarModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const pillarKey = button.getAttribute('data-pillar');
            const data = pillarDetails[pillarKey];

            if (!data) return;

            // Injects your custom PNG image into the modal header
            document.getElementById('modalIcon').innerHTML = `<img src="${data.image}" alt="${data.title}" class="explorer-modal-icon-img">`;
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalSubtext').innerText = data.subtext;
            document.getElementById('modalLongDesc').innerText = data.longDesc;

            const inquireText = document.getElementById('modalInquireBtnText');
            if (inquireText) inquireText.innerText = `INQUIRE ABOUT ${data.title.toUpperCase()}`;

            const grid = document.getElementById('modalFeaturesGrid');
            grid.innerHTML = ''; 
            data.features.forEach(feature => {
                grid.innerHTML += `
                    <div class="col-md-6">
                        <div class="explorer-feature-card">
                            <i class="bi bi-check2-circle"></i> <span>${feature}</span>
                        </div>
                    </div>`;
            });
        });
    }
});