
const TOPBAR_COMPONENT = `
    <header class="fixed top-0 right-0 left-0 lg:left-72 h-16 bg-deepSpace/90 backdrop-blur-xl border-b border-glassBorder z-40 px-4 lg:px-8 flex items-center justify-between transition-all duration-300">
        <!-- Left Section: Logo (Mobile) / Page Title (Desktop) -->
        <div class="flex items-center gap-4">
            <!-- Mobile Logo -->
            <div class="lg:hidden flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center" onclick="navigateTo('dashboard')">
                    <i data-lucide="zap" class="w-5 h-5 text-white"></i>
                </div>
                <span class="font-gaming font-bold text-lg tracking-wider">SIGNALPULSE</span>
            </div>

            <!-- Desktop Page Title & Breadcrumb -->
            <div class="hidden lg:flex items-center gap-3 text-sm">
                <span class="text-gray-400">App</span>
                <i data-lucide="chevron-right" class="w-4 h-4 text-gray-600"></i>
                <span class="text-white font-medium capitalize" id="topbar-page-title">Dashboard</span>
            </div>
        </div>

        <!-- Right Section: Stats & Profile -->
        <div class="flex items-center gap-3 lg:gap-6">
            <!-- Search (Desktop Only) -->
            <div class="hidden lg:block relative group">
                <input type="text" placeholder="Search markets..." class="bg-black/20 border border-glassBorder rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus:w-80 focus:bg-black/40 focus:border-electricBlue/50 transition-all outline-none text-white placeholder-gray-500">
                <i data-lucide="search" class="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-electricBlue transition-colors"></i>
            </div>

            <!-- Stats Container -->
            <div class="flex items-center gap-3">
                <!-- Streak -->
                <div class="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-500/10 border border-orange-500/30" title="Daily Streak">
                    <i data-lucide="flame" class="w-4 h-4 text-orange-400 animate-pulse"></i>
                    <span class="font-bold text-orange-400 text-sm" id="topbar-streak">0</span>
                </div>

                <!-- Gems -->
                <div class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neonTeal/10 border border-neonTeal/30 cursor-pointer hover:bg-neonTeal/20 transition-colors" title="Gems">
                    <i data-lucide="gem" class="w-4 h-4 text-neonTeal"></i>
                    <span class="font-bold text-neonTeal text-sm" id="topbar-gems">0</span>
                </div>

                <!-- Gold (Hidden on very small screens) -->
                <div class="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold/10 border border-gold/30 cursor-pointer hover:bg-gold/20 transition-colors" title="Gold">
                    <i data-lucide="coins" class="w-4 h-4 text-gold"></i>
                    <span class="font-bold text-gold text-sm" id="topbar-gold">0</span>
                </div>
            </div>

            <div class="h-8 w-px bg-glassBorder hidden sm:block"></div>

            <!-- Notifications & Profile -->
            <div class="flex items-center gap-3">
                <button class="season-ticket-bubble flex items-center gap-2 px-3 py-2 rounded-full text-xs font-semibold text-electricBlue hover:text-white transition-all" onclick="navigateTo('profile')">
                    <i data-lucide="ticket" class="w-4 h-4"></i>
                    <span>Pass</span>
                    <span class="px-2 py-0.5 rounded-full bg-black/40 text-[10px] text-gray-200">Lv 12</span>
                </button>
                <button class="relative p-2 rounded-xl hover:bg-white/5 transition-all text-gray-400 hover:text-white">
                    <i data-lucide="bell" class="w-5 h-5"></i>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-sunsetCoral rounded-full animate-ping"></span>
                    <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-sunsetCoral rounded-full border-2 border-deepSpace"></span>
                </button>

                <div class="flex items-center gap-3 pl-2 cursor-pointer group" onclick="navigateTo('profile')">
                    <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center font-bold text-white shadow-lg shadow-purpleGlow/20 group-hover:scale-105 transition-all">
                        <span id="topbar-avatar-initials">--</span>
                    </div>
                    <div class="hidden lg:block text-left">
                        <p class="text-xs font-bold text-white group-hover:text-electricBlue transition-colors" id="topbar-username">-</p>
                        <p class="text-[10px] text-gray-400">Level <span id="topbar-level">0</span></p>
                    </div>
                </div>
            </div>
        </div>
    </header>
`;

window.updateTopbarStats = function() {
    if (!window.AppState || !AppState.user) return;

    const streakEl = document.getElementById('topbar-streak');
    if (streakEl) streakEl.textContent = String(AppState.user.streak ?? 0);

    const gemsEl = document.getElementById('topbar-gems');
    if (gemsEl) gemsEl.textContent = Number(AppState.user.gems ?? 0).toLocaleString();

    const goldEl = document.getElementById('topbar-gold');
    if (goldEl) goldEl.textContent = Number(AppState.user.gold ?? 0).toLocaleString();

    const usernameEl = document.getElementById('topbar-username');
    if (usernameEl) usernameEl.textContent = String(AppState.user.username ?? '-');

    const levelEl = document.getElementById('topbar-level');
    if (levelEl) levelEl.textContent = String(AppState.user.level ?? 0);

    const initialsEl = document.getElementById('topbar-avatar-initials');
    if (initialsEl) {
        const name = String(AppState.user.displayName ?? AppState.user.username ?? '').trim();
        const parts = name.split(/\s+/).filter(Boolean);
        const initials = parts.slice(0, 2).map(p => p[0].toUpperCase()).join('');
        initialsEl.textContent = initials || '--';
    }
};

window.renderTopbar = function() {
    const topbarContainer = document.getElementById('topbar-container');
    if (topbarContainer) {
        topbarContainer.innerHTML = TOPBAR_COMPONENT;
        if (typeof safeCreateIcons === 'function') {
            safeCreateIcons();
        } else if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
        if (typeof updateTopbarStats === 'function') updateTopbarStats();
        if (typeof updateTopbarTitle === 'function' && window.AppState) updateTopbarTitle(AppState.currentPage);
    }
};

window.updateTopbarTitle = function(page) {
    const titleEl = document.getElementById('topbar-page-title');
    if (titleEl) {
        // Simple mapping or just capitalize
        const title = page.charAt(0).toUpperCase() + page.slice(1);
        titleEl.textContent = title;
    }
};
