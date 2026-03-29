window.PAGES = window.PAGES || {};
window.PAGES.events = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-gaming font-bold gradient-text mb-2">EVENTS & CHALLENGES</h1>
                <p class="text-gray-400">Compete in weekly events and earn exclusive rewards</p>
            </div>

            <!-- Featured Event -->
            <div class="legendary-card rounded-3xl p-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="star" class="w-6 h-6 text-gold"></i>
                        <span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full font-semibold">FEATURED EVENT</span>
                    </div>
                    <h2 class="text-2xl lg:text-3xl font-gaming font-bold mb-3 gradient-text-gold">Weekend Warrior Challenge</h2>
                    <p class="text-gray-300 mb-4 max-w-2xl">Make 50 accurate predictions this weekend to win exclusive rewards including limited edition badges, gems, and gold!</p>
                    <div class="flex flex-wrap items-center gap-6 mb-6">
                        <div class="flex items-center gap-2">
                            <i data-lucide="clock" class="w-5 h-5 text-gray-400"></i>
                            <span>Ends in 2d 14h 32m</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="users" class="w-5 h-5 text-gray-400"></i>
                            <span>1,247 participants</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="trophy" class="w-5 h-5 text-gold"></i>
                            <span class="text-gold font-semibold">500 Gems + 2000 Gold</span>
                        </div>
                    </div>
                    <div class="bg-black/40 rounded-xl p-4 mb-6">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm">Your Progress</span>
                            <span class="text-sm font-semibold">34/50 predictions</span>
                        </div>
                        <div class="progress-bar h-3">
                            <div class="progress-fill progress-fill-gold" style="width: 68%"></div>
                        </div>
                    </div>
                    <button onclick="joinEvent(1)" class="px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-orange-500 font-bold squish-btn hover:shadow-lg hover:shadow-gold/30">
                        Continue Challenge
                    </button>
                </div>
            </div>

            <!-- Active Events Grid -->
            <div>
                <h3 class="font-gaming font-bold text-xl mb-4 flex items-center gap-2">
                    <i data-lucide="flame" class="w-5 h-5 text-orange-400"></i>
                    ACTIVE EVENTS
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${MOCK_DATA.events.filter(e => e.status === 'active').slice(1).map(event => `
                        <div class="epic-card rounded-2xl p-5 hover-lift cursor-pointer">
                            <div class="flex items-start justify-between mb-3">
                                <div class="w-12 h-12 rounded-xl bg-purpleGlow/20 flex items-center justify-center">
                                    <i data-lucide="${event.icon}" class="w-6 h-6 text-purpleGlow"></i>
                                </div>
                                <span class="px-2 py-1 text-xs rounded-full ${event.type === 'weekly' ? 'bg-purpleGlow/20 text-purpleGlow' : event.type === 'daily' ? 'bg-electricBlue/20 text-electricBlue' : 'bg-gold/20 text-gold'}">${event.type}</span>
                            </div>
                            <h4 class="font-bold text-lg mb-2">${event.title}</h4>
                            <p class="text-sm text-gray-400 mb-4">${event.description}</p>
                            <div class="bg-black/30 rounded-lg p-3 mb-3">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm">Progress</span>
                                    <span class="text-sm font-semibold">${event.progress.current}/${event.progress.total}</span>
                                </div>
                                <div class="progress-bar h-2">
                                    <div class="progress-fill" style="width: ${(event.progress.current / event.progress.total) * 100}%"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2 text-sm">
                                    <i data-lucide="gem" class="w-4 h-4 text-neonTeal"></i>
                                    <span class="text-neonTeal">+${event.reward.gems}</span>
                                </div>
                                <div class="flex items-center gap-2 text-sm text-gray-400">
                                    <i data-lucide="users" class="w-4 h-4"></i>
                                    <span>${event.participants}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Coming Soon -->
            <div>
                <h3 class="font-gaming font-bold text-xl mb-4 flex items-center gap-2">
                    <i data-lucide="calendar" class="w-5 h-5 text-electricBlue"></i>
                    COMING SOON
                </h3>
                <div class="glass-card rounded-2xl p-5 border-dashed border-2 border-glassBorder opacity-70">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-xl bg-electricBlue/20 flex items-center justify-center">
                            <i data-lucide="waves" class="w-8 h-8 text-electricBlue"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg mb-1">Whale Watch Event</h4>
                            <p class="text-sm text-gray-400 mb-2">Track and predict whale movements. Top analysts win big!</p>
                            <div class="flex items-center gap-4 text-sm">
                                <span class="text-gold font-semibold">1500 Gems + 10000 Gold</span>
                                <span class="text-gray-400">Starts: Jan 25</span>
                            </div>
                        </div>
                        <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">
                            Remind Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
