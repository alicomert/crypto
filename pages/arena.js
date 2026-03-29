window.PAGES = window.PAGES || {};
window.PAGES.arena = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <!-- Arena Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl lg:text-4xl font-gaming font-bold gradient-text mb-2">BATTLE ARENA</h1>
                <p class="text-gray-400">Compete head-to-head with other traders</p>
            </div>

            <!-- Quick Match Button -->
            <div class="glass-card rounded-3xl p-8 text-center battle-card">
                <div class="max-w-md mx-auto">
                    <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center neon-glow-blue">
                        <i data-lucide="swords" class="w-12 h-12"></i>
                    </div>
                    <h2 class="text-2xl font-gaming font-bold mb-3">READY TO BATTLE?</h2>
                    <p class="text-gray-400 mb-6">Find a worthy opponent and test your prediction skills</p>
                    <button onclick="findMatch()" class="px-8 py-4 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-bold text-lg squish-btn hover:shadow-lg hover:shadow-electricBlue/30 w-full sm:w-auto">
                        <i data-lucide="zap" class="w-5 h-5 inline mr-2"></i>FIND MATCH
                    </button>
                    <div class="mt-4 text-sm text-gray-400">
                        <i data-lucide="users" class="w-4 h-4 inline mr-1"></i>
                        <span id="online-count">1,247</span> players online
                    </div>
                </div>
            </div>

            <!-- Live Battles -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                ${MOCK_DATA.liveBattles.map(battle => `
                    <div class="glass-card rounded-2xl p-5 hover-lift cursor-pointer" onclick="openBattleModal(${battle.id})">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                <span class="text-sm font-semibold text-red-400">LIVE</span>
                            </div>
                            <span class="text-sm text-gray-400">${battle.timeLeft} left</span>
                        </div>

                        <div class="flex items-center justify-between mb-4">
                            <!-- Player 1 -->
                            <div class="flex-1 text-center">
                                <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${battle.player1.avatar} mb-2 flex items-center justify-center text-2xl font-bold">
                                    ${battle.player1.username.charAt(0)}
                                </div>
                                <p class="font-semibold text-sm">${battle.player1.username}</p>
                                <p class="text-xs text-gray-400">${battle.player1.accuracy}% accuracy</p>
                            </div>

                            <!-- VS -->
                            <div class="px-4">
                                <span class="vs-badge text-3xl">VS</span>
                                <p class="text-center text-xs text-gray-400 mt-1">${battle.token}</p>
                            </div>

                            <!-- Player 2 -->
                            <div class="flex-1 text-center">
                                <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${battle.player2.avatar} mb-2 flex items-center justify-center text-2xl font-bold">
                                    ${battle.player2.username.charAt(0)}
                                </div>
                                <p class="font-semibold text-sm">${battle.player2.username}</p>
                                <p class="text-xs text-gray-400">${battle.player2.accuracy}% accuracy</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-sm border-t border-glassBorder pt-3">
                            <span class="text-gray-400">$${battle.currentPrice.toLocaleString()}</span>
                            <div class="flex items-center gap-2">
                                <i data-lucide="eye" class="w-4 h-4 text-gray-400"></i>
                                <span>${battle.viewers} watching</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Battle Modes -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="gamepad-2" class="w-5 h-5 text-purpleGlow"></i>
                    BATTLE MODES
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-electricBlue/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-electricBlue/20 flex items-center justify-center mb-3">
                            <i data-lucide="zap" class="w-6 h-6 text-electricBlue"></i>
                        </div>
                        <h4 class="font-semibold mb-1">Quick Match</h4>
                        <p class="text-sm text-gray-400">Instant matchmaking with similar skill level</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-neonTeal">+50</span> gems per win
                        </div>
                    </div>

                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-purpleGlow/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-purpleGlow/20 flex items-center justify-center mb-3">
                            <i data-lucide="trophy" class="w-6 h-6 text-purpleGlow"></i>
                        </div>
                        <h4 class="font-semibold mb-1">Ranked</h4>
                        <p class="text-sm text-gray-400">Climb the ladder and earn seasonal rewards</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-gold">+200</span> gold per win
                        </div>
                    </div>

                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-gold/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
                            <i data-lucide="crown" class="w-6 h-6 text-gold"></i>
                        </div>
                        <h4 class="font-semibold mb-1">High Stakes</h4>
                        <p class="text-sm text-gray-400">Bet gems and battle for big rewards</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-gold">2x</span> gem multiplier
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-card rounded-2xl p-5 bg-gradient-to-r from-electricBlue/10 to-purpleGlow/10">
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h3 class="font-gaming font-bold">SEASONAL CHALLENGE</h3>
                        <p class="text-sm text-gray-400">Win 5 Arena battles to unlock a Legendary Seasonal Card</p>
                    </div>
                    <button class="px-5 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-sm font-semibold squish-btn">
                        Join Challenge
                    </button>
                </div>
                <div class="mt-4 season-progress-3d rounded-full p-1">
                    <div class="season-progress-fill h-2 rounded-full" style="width: 40%"></div>
                </div>
                <div class="flex items-center justify-between text-xs text-gray-400 mt-2">
                    <span>2 / 5 Battles</span>
                    <span>Cycle Ends in 12d 04h</span>
                </div>
            </div>

            <!-- Your Stats -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="bar-chart-3" class="w-5 h-5 text-electricBlue"></i>
                    YOUR BATTLE STATS
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center">
                        <p class="text-3xl font-bold text-electricBlue">${AppState.user.battles.wins}</p>
                        <p class="text-sm text-gray-400">Wins</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-sunsetCoral">${AppState.user.battles.losses}</p>
                        <p class="text-sm text-gray-400">Losses</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-neonTeal">${AppState.user.battles.winRate}%</p>
                        <p class="text-sm text-gray-400">Win Rate</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-purpleGlow">${AppState.user.battles.wins + AppState.user.battles.losses}</p>
                        <p class="text-sm text-gray-400">Total Battles</p>
                    </div>
                </div>
            </div>
        </div>
    `;
