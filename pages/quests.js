window.PAGES = window.PAGES || {};
window.PAGES.quests = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">QUESTS</h1>
                    <p class="text-gray-400">Complete quests to earn rewards</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">All</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Daily</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Weekly</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Special</button>
                </div>
            </div>

            <!-- Quest Categories -->
            <div class="space-y-4">
                ${MOCK_DATA.quests.map(quest => `
                    <div class="quest-card ${quest.type} glass-card rounded-2xl p-5 hover-lift cursor-pointer">
                        <div class="flex items-start gap-4">
                            <div class="w-16 h-16 rounded-xl bg-gradient-to-br ${
                                quest.difficulty === 'legendary' ? 'from-gold/20 to-orange-500/20' :
                                quest.difficulty === 'hard' ? 'from-red-500/20 to-orange-500/20' :
                                quest.difficulty === 'medium' ? 'from-yellow-500/20 to-orange-500/20' :
                                'from-green-500/20 to-emerald-500/20'
                            } flex items-center justify-center flex-shrink-0">
                                <i data-lucide="${
                                    quest.difficulty === 'legendary' ? 'crown' :
                                    quest.difficulty === 'hard' ? 'flame' :
                                    quest.difficulty === 'medium' ? 'target' :
                                    'check-circle'
                                }" class="w-8 h-8 ${
                                    quest.difficulty === 'legendary' ? 'text-gold' :
                                    quest.difficulty === 'hard' ? 'text-red-500' :
                                    quest.difficulty === 'medium' ? 'text-yellow-500' :
                                    'text-green-500'
                                }"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-2 mb-2">
                                    <div>
                                        <h3 class="font-bold text-lg">${quest.title}</h3>
                                        <p class="text-sm text-gray-400">${quest.description}</p>
                                    </div>
                                    <span class="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                                        quest.difficulty === 'legendary' ? 'bg-gold/20 text-gold' :
                                        quest.difficulty === 'hard' ? 'bg-red-500/20 text-red-500' :
                                        quest.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                                        'bg-green-500/20 text-green-500'
                                    }">${quest.difficulty}</span>
                                </div>
                                <div class="bg-black/30 rounded-xl p-3 mb-3">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-sm">Progress</span>
                                        <span class="text-sm font-semibold">${quest.progress}/${quest.total}</span>
                                    </div>
                                    <div class="progress-bar h-2">
                                        <div class="progress-fill" style="width: ${(quest.progress / quest.total) * 100}%"></div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4 text-sm">
                                        <span class="text-neonTeal">
                                            <i data-lucide="gem" class="w-4 h-4 inline mr-1"></i>+${quest.reward.gems}
                                        </span>
                                        <span class="text-purpleGlow">
                                            <i data-lucide="sparkles" class="w-4 h-4 inline mr-1"></i>+${quest.reward.xp} XP
                                        </span>
                                        ${quest.reward.gold ? `<span class="text-gold"><i data-lucide="coins" class="w-4 h-4 inline mr-1"></i>+${quest.reward.gold}</span>` : ''}
                                    </div>
                                    ${quest.progress >= quest.total ?
                                        '<button class="px-4 py-2 rounded-xl bg-neonTeal text-deepSpace font-semibold text-sm squish-btn">Claim</button>' :
                                        '<span class="text-sm text-gray-400">' + (quest.total - quest.progress) + ' remaining</span>'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
