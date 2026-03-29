window.PAGES = window.PAGES || {};
window.PAGES.dashboard = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <!-- Welcome Banner -->
            <div class="glass-card rounded-3xl p-6 bg-gradient-to-r from-electricBlue/10 via-purpleGlow/10 to-pink-500/10 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-electricBlue/20 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold mb-2">Welcome back, ${AppState.user.displayName}! 🎮</h1>
                    <p class="text-gray-400 mb-4">Your battle arena awaits. Current streak: <span class="text-orange-400 font-bold">${AppState.user.streak} days</span> on fire!</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="navigateTo('arena')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn hover:shadow-lg hover:shadow-electricBlue/30">
                            <i data-lucide="swords" class="w-5 h-5 inline mr-2"></i>Enter Arena
                        </button>
                        <button onclick="navigateTo('events')" class="px-6 py-3 rounded-xl bg-glass border border-glassBorder font-semibold squish-btn hover:bg-glass/80">
                            <i data-lucide="trophy" class="w-5 h-5 inline mr-2"></i>View Events
                        </button>
                    </div>
                </div>
            </div>

            <!-- Stats Bento Grid -->
            <div class="bento-grid">
                <div class="bento-2x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neonTeal/20 to-electricBlue/20 flex items-center justify-center">
                                <i data-lucide="crosshair" class="w-6 h-6 text-neonTeal"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Today's Predictions</p>
                                <p class="text-2xl font-bold">${MOCK_DATA.stats.todayPredictions}</p>
                            </div>
                        </div>
                        <span class="text-neonTeal text-sm font-semibold">+3</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill progress-fill-green" style="width: 60%"></div>
                    </div>
                </div>

                <div class="bento-1x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center gap-3 mb-2">
                        <i data-lucide="gem" class="w-8 h-8 text-neonTeal"></i>
                        <div>
                            <p class="text-2xl font-bold">${AppState.user.gems.toLocaleString()}</p>
                            <p class="text-xs text-gray-400">Gems</p>
                        </div>
                    </div>
                </div>

                <div class="bento-1x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center gap-3 mb-2">
                        <i data-lucide="coins" class="w-8 h-8 text-gold"></i>
                        <div>
                            <p class="text-2xl font-bold">${AppState.user.gold.toLocaleString()}</p>
                            <p class="text-xs text-gray-400">Gold</p>
                        </div>
                    </div>
                </div>

                <div class="bento-2x1 glass-card rounded-2xl p-5 hover-lift bg-gradient-to-br from-orange-500/10 to-red-500/10">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                <i data-lucide="flame" class="w-6 h-6 text-orange-400 animate-pulse"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Daily Streak</p>
                                <p class="text-2xl font-bold text-orange-400">${AppState.user.streak} Days</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-400">Best: 14 days</p>
                        </div>
                    </div>
                </div>

                <div class="bento-2x2 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center gap-2">
                            <i data-lucide="ticket" class="w-5 h-5 text-electricBlue"></i>
                            <h3 class="font-gaming font-bold">SEASON PASS</h3>
                        </div>
                        <span class="text-xs px-2 py-1 rounded-full bg-black/40 text-gray-300">Market Cycle End: 12d 04h</span>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="season-radial w-28 h-28 rounded-full flex items-center justify-center" style="--season-progress: 62%">
                            <div class="w-20 h-20 rounded-full bg-deepSpace/90 flex flex-col items-center justify-center">
                                <p class="text-xs text-gray-400">Level</p>
                                <p class="text-2xl font-bold text-electricBlue">12</p>
                            </div>
                        </div>
                        <div class="flex-1 space-y-3">
                            <div class="season-progress-3d rounded-full p-1">
                                <div class="season-progress-fill h-2 rounded-full" style="width: 62%"></div>
                            </div>
                            <div class="flex items-center justify-between text-xs text-gray-400">
                                <span>Level 12</span>
                                <span>100 XP to Level Up</span>
                            </div>
                            <button class="px-4 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-sm font-semibold squish-btn">
                                Claim Level Rewards
                            </button>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-3 gap-3 text-center">
                        <div class="bg-black/30 rounded-xl p-3">
                            <p class="text-xs text-gray-400">Premium XP</p>
                            <p class="text-lg font-bold text-electricBlue">x2</p>
                        </div>
                        <div class="bg-black/30 rounded-xl p-3">
                            <p class="text-xs text-gray-400">Rewards Unlocked</p>
                            <p class="text-lg font-bold text-neonTeal">18</p>
                        </div>
                        <div class="bg-black/30 rounded-xl p-3">
                            <p class="text-xs text-gray-400">Next Milestone</p>
                            <p class="text-lg font-bold text-gold">Lv 15</p>
                        </div>
                    </div>
                </div>

                <div class="bento-2x2 legendary-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="trophy" class="w-5 h-5 text-gold"></i>
                        <h3 class="font-gaming font-bold gradient-text-gold">ACTIVE EVENTS</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.events.slice(0, 3).map(event => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="navigateTo('events')">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex-1">
                                        <p class="font-semibold text-sm">${event.title}</p>
                                        <p class="text-xs text-gray-400">${event.participants.toLocaleString()} participants</p>
                                    </div>
                                    <span class="px-2 py-1 text-xs rounded-full ${event.status === 'active' ? 'bg-neonTeal/20 text-neonTeal' : 'bg-gray-500/20 text-gray-400'}">${event.type}</span>
                                </div>
                                <div class="progress-bar h-2">
                                    <div class="progress-fill" style="width: ${(event.progress.current / event.progress.total) * 100}%"></div>
                                </div>
                                <p class="text-xs text-gray-400 mt-1">${event.progress.current}/${event.progress.total} completed</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bento-2x1 epic-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="swords" class="w-5 h-5 text-purpleGlow"></i>
                        <h3 class="font-gaming font-bold">LIVE BATTLES</h3>
                    </div>
                    <div class="space-y-2">
                        ${MOCK_DATA.liveBattles.slice(0, 2).map(battle => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="openBattleModal(${battle.id})">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-full bg-gradient-to-br ${battle.player1.avatar}"></div>
                                        <span class="vs-badge text-sm">VS</span>
                                        <div class="w-6 h-6 rounded-full bg-gradient-to-br ${battle.player2.avatar}"></div>
                                    </div>
                                    <span class="text-xs text-gray-400">${battle.timeLeft}</span>
                                </div>
                                <p class="text-sm font-semibold">${battle.token}</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <i data-lucide="eye" class="w-3 h-3 text-gray-400"></i>
                                    <span class="text-xs text-gray-400">${battle.viewers} watching</span>
                                    <span class="ml-auto text-xs text-red-400 animate-pulse">● LIVE</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Quick Quests -->
            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <i data-lucide="map" class="w-5 h-5 text-electricBlue"></i>
                        <h3 class="font-gaming font-bold">ACTIVE QUESTS</h3>
                    </div>
                    <button onclick="navigateTo('quests')" class="text-sm text-electricBlue hover:underline">View All</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${MOCK_DATA.quests.slice(0, 3).map(quest => `
                        <div class="quest-card ${quest.type} bg-black/30 rounded-xl p-4 hover-lift cursor-pointer">
                            <div class="flex items-start justify-between mb-2">
                                <h4 class="font-semibold text-sm">${quest.title}</h4>
                                <span class="text-xs px-2 py-1 rounded-full ${
                                    quest.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                                    quest.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                }">${quest.difficulty}</span>
                            </div>
                            <p class="text-xs text-gray-400 mb-3">${quest.description}</p>
                            <div class="progress-bar h-2 mb-2">
                                <div class="progress-fill" style="width: ${(quest.progress / quest.total) * 100}%"></div>
                            </div>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-400">${quest.progress}/${quest.total}</span>
                                <span class="text-neonTeal">+${quest.reward.gems} <i data-lucide="gem" class="w-3 h-3 inline"></i></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <i data-lucide="rocket" class="w-5 h-5 text-neonTeal"></i>
                        <h3 class="font-gaming font-bold">COMMUNITY VERIFIED IDEAS</h3>
                    </div>
                    <button onclick="navigateTo('intelligence')" class="text-sm text-electricBlue hover:underline">Open Feed</button>
                </div>
                <div class="space-y-3">
                    ${(window.ExchangeLogic?.socialPosts || []).slice(0, 2).map(post => `
                        <div class="bg-black/30 rounded-xl p-3">
                            <div class="flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-semibold">${post.coin}</p>
                                    <p class="text-xs text-gray-400">${post.category}</p>
                                </div>
                                <button class="px-3 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn flex items-center gap-2" data-verify="true">
                                    <i data-lucide="rocket" class="w-4 h-4"></i>Verify
                                </button>
                            </div>
                            <p class="text-xs text-gray-300 mt-2">${post.thesis}</p>
                            <div class="flex items-center gap-3 mt-2 text-xs text-gray-400">
                                <span>${post.verifyCount} verifications</span>
                                <span class="text-neonTeal">${post.reward}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Recent Activity Feed -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 glass-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="activity" class="w-5 h-5 text-purpleGlow"></i>
                        <h3 class="font-gaming font-bold">RECENT ACTIVITY</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.recentActivity.map(activity => `
                            <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                                <div class="w-10 h-10 rounded-full ${
                                    activity.result === 'success' ? 'bg-neonTeal/20' :
                                    activity.result === 'pending' ? 'bg-yellow-500/20' :
                                    'bg-red-500/20'
                                } flex items-center justify-center">
                                    <i data-lucide="${
                                        activity.type === 'prediction' ? 'crosshair' :
                                        activity.type === 'achievement' ? 'award' :
                                        activity.type === 'quest' ? 'map' :
                                        activity.type === 'battle' ? 'swords' :
                                        'gift'
                                    }" class="w-5 h-5 ${
                                        activity.result === 'success' ? 'text-neonTeal' :
                                        activity.result === 'pending' ? 'text-yellow-500' :
                                        'text-red-500'
                                    }"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">${activity.message}</p>
                                    <p class="text-xs text-gray-400">${activity.time}</p>
                                </div>
                                ${activity.result === 'success' ? '<i data-lucide="check-circle" class="w-5 h-5 text-neonTeal"></i>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="glass-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="radar" class="w-5 h-5 text-electricBlue"></i>
                        <h3 class="font-gaming font-bold">HOT SIGNALS</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.signals.slice(0, 3).map(signal => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="navigateTo('signals')">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center font-bold text-xs">${signal.token}</div>
                                        <span class="font-semibold text-sm">${signal.tokenName}</span>
                                    </div>
                                    <span class="text-xs px-2 py-1 rounded-full ${
                                        signal.sentiment === 'bullish' ? 'bg-neonTeal/20 text-neonTeal' :
                                        signal.sentiment === 'bearish' ? 'bg-red-500/20 text-red-500' :
                                        'bg-gray-500/20 text-gray-400'
                                    }">${signal.sentiment}</span>
                                </div>
                                <div class="flex items-center justify-between text-xs">
                                    <span class="text-gray-400">${signal.confidence}% confidence</span>
                                    <span class="${signal.change24h >= 0 ? 'text-neonTeal' : 'text-red-500'}">${signal.change24h >= 0 ? '+' : ''}${signal.change24h}%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
