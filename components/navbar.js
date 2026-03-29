
const NAVBAR_COMPONENT = `
    <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-deepSpace/95 backdrop-blur-xl border-t border-glassBorder z-50">
        <div class="flex items-center justify-around py-2">
            <button class="mobile-nav-btn active flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all" data-page="dashboard">
                <i data-lucide="layout-dashboard" class="w-6 h-6"></i>
                <span class="text-xs">Home</span>
            </button>
            <button class="mobile-nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all" data-page="arena">
                <i data-lucide="swords" class="w-6 h-6"></i>
                <span class="text-xs">Arena</span>
            </button>
            <button class="mobile-nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all" data-page="arena">
                <div class="w-12 h-12 -mt-6 rounded-full bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center shadow-lg shadow-electricBlue/30 squish-btn ring-4 ring-deepSpace">
                    <i data-lucide="crosshair" class="w-6 h-6"></i>
                </div>
            </button>
            <button class="mobile-nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all" data-page="events">
                <i data-lucide="trophy" class="w-6 h-6"></i>
                <span class="text-xs">Events</span>
            </button>
            <button class="mobile-nav-btn flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all" data-page="profile">
                <i data-lucide="user" class="w-6 h-6"></i>
                <span class="text-xs">Profile</span>
            </button>
        </div>
    </nav>
`;

window.renderNavbar = function() {
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = NAVBAR_COMPONENT;
        if (typeof safeCreateIcons === 'function') {
            safeCreateIcons();
        } else if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }
};
