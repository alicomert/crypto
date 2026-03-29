
const SIDEBAR_COMPONENT = `
    <aside class="hidden lg:flex flex-col fixed top-0 left-0 bottom-0 w-72 bg-deepSpace/95 backdrop-blur-xl border-r border-glassBorder z-50 p-6">
        <!-- Logo -->
        <div class="flex items-center gap-3 mb-10 px-2">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center cursor-pointer hover:scale-105 transition-all" onclick="navigateTo('dashboard')">
                <i data-lucide="zap" class="w-6 h-6 text-white"></i>
            </div>
            <div>
                <h1 class="font-gaming font-bold text-lg tracking-wider text-white">SIGNALPULSE</h1>
                <p class="text-xs text-gray-400 -mt-1">ARENA</p>
            </div>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 flex flex-col gap-2 overflow-y-auto pr-2 custom-scrollbar">
            <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-2">Menu</div>
            
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="dashboard">
                <i data-lucide="layout-dashboard" class="w-5 h-5"></i>
                Dashboard
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="arena">
                <i data-lucide="swords" class="w-5 h-5"></i>
                Arena
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="signals">
                <i data-lucide="radar" class="w-5 h-5"></i>
                Signals
            </button>
            
            <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-2">Game</div>
            
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="lootboxes">
                <i data-lucide="gift" class="w-5 h-5"></i>
                Loot Boxes
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="cards">
                <i data-lucide="credit-card" class="w-5 h-5"></i>
                Cards
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="events">
                <i data-lucide="trophy" class="w-5 h-5"></i>
                Events
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="season">
                <i data-lucide="ticket" class="w-5 h-5"></i>
                Season Pass
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="quests">
                <i data-lucide="map" class="w-5 h-5"></i>
                Quests
            </button>

            <div class="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-2">Community</div>

            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="guilds">
                <i data-lucide="users" class="w-5 h-5"></i>
                Guilds
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="intelligence">
                <i data-lucide="radar" class="w-5 h-5"></i>
                Intelligence
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="leaderboard">
                <i data-lucide="crown" class="w-5 h-5"></i>
                Rankings
            </button>
            <button class="nav-link w-full text-left px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium transition-all text-gray-400 hover:bg-white/5 hover:text-white" data-page="analytics">
                <i data-lucide="bar-chart-3" class="w-5 h-5"></i>
                Analytics
            </button>
        </nav>
    </aside>
`;

window.renderSidebar = function() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = SIDEBAR_COMPONENT;
        if (typeof safeCreateIcons === 'function') {
            safeCreateIcons();
        } else if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons();
        }
    }
};
