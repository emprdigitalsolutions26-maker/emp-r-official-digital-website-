/* ==========================================================================
   EMP-R FACEBOOK POSTS MANAGER
   To add a new post, just copy one block and paste it at the TOP of the list!
   ========================================================================== */

const facebookPosts = [
    {
        pillar: "MERCH",
        badgeClass: "bg-merch text-dark fw-bold",
        image: "./images/CTU BAN.png",
        title: "𝐂𝐞𝐛𝐮 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 - 𝐁𝐚𝐧𝐭𝐚𝐲𝐚𝐧 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧 500pcs",
        description: "Details that make a difference. High-definition prints, premium fabrics, and secure hardware—crafted to perfection for 𝐂𝐞𝐛𝐮 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 - 𝐁𝐚𝐧𝐭𝐚𝐲𝐚𝐧 𝐄𝐱𝐭𝐞𝐧𝐬𝐢𝐨𝐧.Get your custom lanyards printed with 𝐄𝐌𝐏-𝐑 𝐃𝐢𝐠𝐢𝐭𝐚𝐥 & 𝐌𝐞𝐝𝐢𝐚 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧𝐬 today! Send us a message for inquiries and orders.",
        postUrl: "https://www.facebook.com/photo/?fbid=122107358985403760&set=a.122106971457403760"
    },
    {
        pillar: "MERCH",
        badgeClass: "bg-merch text-dark fw-bold",
        image: "./images/CTU SANFRAN.jpg",
        title: "𝐂𝐞𝐛𝐮 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐜𝐚𝐥 𝐔𝐧𝐢𝐯𝐞𝐫𝐬𝐢𝐭𝐲 - SAN FRANCISCO 550pcs",
        description: "We're beyond proud to have completed a custom lanyard project for 𝘾𝙏𝙐 – 𝙎𝙖𝙣 𝙁𝙧𝙖𝙣𝙘𝙞𝙨𝙘𝙤!We printed and delivered 𝟱𝟱𝟬 𝗰𝘂𝘀𝘁𝗼𝗺 𝘀𝘂𝗯𝗹𝗶𝗺𝗮𝘁𝗶𝗼𝗻 𝗹𝗮𝗻𝘆𝗮𝗿𝗱𝘀, each one tailored to represent its department's identity while keeping that unified CTU look.",
        postUrl: "https://www.facebook.com/photo?fbid=122111378763403760&set=a.122106971457403760"
    },
    {
        pillar: "MERCH",
        badgeClass: "bg-merch text-dark fw-bold",
        image: "./images/3RD.png",
        title: "Different institutions. Different colors. 𝗢𝗡𝗘. 𝗧𝗥𝗨𝗦𝗧𝗘𝗗. 𝗣𝗔𝗥𝗧𝗡𝗘𝗥.",
        description: "This isn't just lanyards — it's YOUR brand, YOUR identity, done right. Scrolling and thinking we need this for our org too? Say less.",
        postUrl: "https://www.facebook.com/photo?fbid=122114377563403760&set=a.122106971457403760"
    }
];

// AUTOMATIC RENDERER (Do not change this code)
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("facebookPostsContainer");
    if (!container) return;

    container.innerHTML = ""; // Clear existing

    // Displays the latest 3 posts
    facebookPosts.slice(0, 3).forEach(post => {
        const cardHTML = `
            <div class="col-lg-4 col-md-6">
                <div class="emp-card fb-card-dark h-100">
                    <div class="fb-card-top d-flex justify-content-between align-items-center mb-3">
                        <span class="badge ${post.badgeClass}">EMP-R ${post.pillar}</span>
                        <span class="fb-card-time"><i class="bi bi-clock me-1"></i> ${post.time}</span>
                    </div>

                    <div class="fb-card-media mb-3">
                        <img src="${post.image}" alt="${post.title}" class="fb-card-photo">
                    </div>

                    <h5 class="text-white fw-bold mb-2">${post.title}</h5>
                    <p class="visible-body-text small mb-4">${post.description}</p>

                    <div class="fb-card-action pt-3 mt-auto border-top border-secondary border-opacity-15 d-flex justify-content-between align-items-center">
                        <span class="fb-likes"><i class="bi bi-hand-thumbs-up-fill text-primary"></i> Facebook Update</span>
                        <a href="${post.postUrl}" target="_blank" rel="noopener noreferrer" class="fb-view-link">
                            View Post <i class="bi bi-arrow-up-right ms-1"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
});