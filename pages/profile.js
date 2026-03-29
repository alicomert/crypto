window.PAGES = window.PAGES || {};
window.PAGES.profile = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <!-- Profile Header -->
            <div class="glass-card rounded-3xl p-6 lg:p-8 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-electricBlue/20 to-purpleGlow/20 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <div class="flex flex-col lg:flex-row items-start lg:items-center gap-6">
                        <div class="relative">
                            <div class="w-32 h-32 rounded-3xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center text-5xl font-bold border-4 border-white/20">
                                CN
                            </div>
                            <div class="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gold flex items-center justify-center font-bold text-deepSpace border-4 border-deepSpace">
                                ${AppState.user.level}
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="flex items-center gap-3 mb-2">
                                <h1 class="text-2xl lg:text-3xl font-gaming font-bold">${AppState.user.displayName}</h1>
                                ${AppState.user.isPremium ? '<span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full font-semibold">PRO</span>' : ''}
                            </div>
                            <p class="text-gray-400 mb-4">@${AppState.user.username} · Joined ${MOCK_DATA.extendedProfile.joinDate}</p>
                            <div class="flex flex-wrap gap-4 text-sm">
                                <span class="text-gray-400">Rank: <span class="text-white font-bold">#${AppState.user.rank}</span></span>
                                <span class="text-gray-400">Accuracy: <span class="text-electricBlue font-bold">${AppState.user.accuracy}%</span></span>
                                <span class="text-gray-400">Predictions: <span class="text-white font-bold">${AppState.user.totalPredictions}</span></span>
                            </div>
                        </div>
                        <button class="px-6 py-3 rounded-xl bg-glass border border-glassBorder font-semibold squish-btn hover:bg-glass/80">
                            <i data-lucide="settings" class="w-5 h-5 inline mr-2"></i>Edit Profile
                        </button>
                    </div>

                    <!-- XP Progress -->
                    <div class="mt-6 bg-black/30 rounded-xl p-4">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm text-gray-400">Level ${AppState.user.level}</span>
                            <span class="text-sm">${AppState.user.xp.toLocaleString()} / ${AppState.user.xpToNext.toLocaleString()} XP</span>
                        </div>
                        <div class="progress-bar h-3">
                            <div class="progress-fill" style="width: ${(AppState.user.xp / AppState.user.xpToNext) * 100}%"></div>
                        </div>
                        <p class="text-xs text-gray-400 mt-2">${(AppState.user.xpToNext - AppState.user.xp).toLocaleString()} XP to next level</p>
                    </div>
                </div>
            </div>

            <!-- Stats Grid -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="crosshair" class="w-6 h-6 text-electricBlue mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.totalPredictions}</p>
                    <p class="text-xs text-gray-400">Predictions</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="target" class="w-6 h-6 text-neonTeal mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.accuracy}%</p>
                    <p class="text-xs text-gray-400">Accuracy</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="flame" class="w-6 h-6 text-orange-400 mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.streak}</p>
                    <p class="text-xs text-gray-400">Day Streak</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="swords" class="w-6 h-6 text-purpleGlow mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.battles.wins}</p>
                    <p class="text-xs text-gray-400">Battle Wins</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="gem" class="w-6 h-6 text-neonTeal mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.gems}</p>
                    <p class="text-xs text-gray-400">Gems</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center hover-lift">
                    <i data-lucide="coins" class="w-6 h-6 text-gold mx-auto mb-2"></i>
                    <p class="text-2xl font-bold">${AppState.user.gold}</p>
                    <p class="text-xs text-gray-400">Gold</p>
                </div>
            </div>

            <!-- Extended Stats -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="bar-chart-3" class="w-5 h-5 text-electricBlue"></i>
                    DETAILED STATISTICS
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <div class="text-center">
                        <p class="text-lg font-bold">${MOCK_DATA.extendedProfile.totalPlayTime}</p>
                        <p class="text-xs text-gray-400">Play Time</p>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold">${MOCK_DATA.extendedProfile.favoriteToken}</p>
                        <p class="text-xs text-gray-400">Favorite Token</p>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold text-gold">${MOCK_DATA.extendedProfile.bestDayEarnings.gems} 💎</p>
                        <p class="text-xs text-gray-400">Best Day</p>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold">${MOCK_DATA.extendedProfile.totalBattles}</p>
                        <p class="text-xs text-gray-400">Total Battles</p>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold">${MOCK_DATA.extendedProfile.guildContributions.toLocaleString()}</p>
                        <p class="text-xs text-gray-400">Guild XP</p>
                    </div>
                    <div class="text-center">
                        <p class="text-lg font-bold text-neonTeal">${MOCK_DATA.extendedProfile.referrals}</p>
                        <p class="text-xs text-gray-400">Referrals</p>
                    </div>
                </div>
            </div>

            <!-- Collection Stats -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="glass-card rounded-2xl p-5">
                    <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                        <i data-lucide="credit-card" class="w-5 h-5 text-purpleGlow"></i>
                        CARD COLLECTION
                    </h3>
                    <div class="flex items-center gap-4 mb-3">
                        <div class="text-center">
                            <p class="text-3xl font-bold">${MOCK_DATA.extendedProfile.cardsCollected}/${MOCK_DATA.extendedProfile.cardsTotal}</p>
                            <p class="text-xs text-gray-400">Collected</p>
                        </div>
                        <div class="flex-1">
                            <div class="progress-bar h-3">
                                <div class="progress-fill progress-fill-green" style="width: ${(MOCK_DATA.extendedProfile.cardsCollected / MOCK_DATA.extendedProfile.cardsTotal) * 100}%"></div>
                            </div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-400">Equipped: <span class="text-purpleGlow">${MOCK_DATA.extendedProfile.equippedCard.name}</span> (${MOCK_DATA.extendedProfile.equippedCard.bonus})</p>
                </div>

                <div class="glass-card rounded-2xl p-5">
                    <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                        <i data-lucide="gift" class="w-5 h-5 text-gold"></i>
                        LOOT BOX STATS
                    </h3>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="text-center">
                            <p class="text-2xl font-bold">${MOCK_DATA.extendedProfile.lootBoxesOpened}</p>
                            <p class="text-xs text-gray-400">Boxes Opened</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gold">${MOCK_DATA.extendedProfile.rareItemsFound}</p>
                            <p class="text-xs text-gray-400">Rare Items</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Achievements -->
            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-gaming font-bold flex items-center gap-2">
                        <i data-lucide="award" class="w-5 h-5 text-gold"></i>
                        ACHIEVEMENTS
                    </h3>
                    <span class="text-sm text-gray-400">3/8 Unlocked</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${MOCK_DATA.achievements.map(achievement => `
                        <div class="bg-black/30 rounded-xl p-4 text-center ${achievement.unlocked ? '' : 'achievement-locked'} hover-lift cursor-pointer">
                            <div class="w-12 h-12 mx-auto rounded-xl ${
                                achievement.rarity === 'legendary' ? 'bg-gold/20' :
                                achievement.rarity === 'epic' ? 'bg-purpleGlow/20' :
                                achievement.rarity === 'rare' ? 'bg-electricBlue/20' :
                                'bg-gray-500/20'
                            } flex items-center justify-center mb-2 ${achievement.unlocked ? 'achievement-glow' : ''}">
                                <i data-lucide="${achievement.icon}" class="w-6 h-6 ${
                                    achievement.rarity === 'legendary' ? 'text-gold' :
                                    achievement.rarity === 'epic' ? 'text-purpleGlow' :
                                    achievement.rarity === 'rare' ? 'text-electricBlue' :
                                    'text-gray-400'
                                }"></i>
                            </div>
                            <p class="font-semibold text-sm mb-1">${achievement.title}</p>
                            <p class="text-xs text-gray-400">${achievement.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="glass-card rounded-2xl p-6 bg-gradient-to-br from-[#141b24] to-[#0b0f15]">
                <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                    <div>
                        <h3 class="font-gaming font-bold flex items-center gap-2">
                            <i data-lucide="ticket" class="w-5 h-5 text-electricBlue"></i>
                            SEASON PASS
                        </h3>
                        <p class="text-sm text-gray-400">Market Cycle End: 12d 04h</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-electricBlue">Level 12</p>
                        <p class="text-xs text-gray-400">100 XP to Level Up</p>
                    </div>
                </div>
                <div class="season-progress-3d rounded-full p-1 mb-4">
                    <div class="season-progress-fill h-2 rounded-full" style="width: 62%"></div>
                </div>
                <div class="flex flex-wrap gap-3 mb-4">
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-xs font-semibold squish-btn" data-pass-toggle="free">Free Track</button>
                    <button class="px-4 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn" data-pass-toggle="premium">Premium Track</button>
                    <button class="ml-auto px-4 py-2 rounded-xl bg-glass border border-glassBorder text-xs font-semibold squish-btn">
                        Unlock Premium
                    </button>
                </div>
                <div class="season-track flex gap-3 overflow-x-auto pb-2" data-pass-view="free">
                    ${Array.from({ length: 50 }, (_, i) => `
                        <div class="season-level rounded-xl p-3 min-w-[120px] text-center ${i < 12 ? '' : 'locked'}" data-milestone="${i + 1}">
                            <p class="text-xs text-gray-400">Level ${i + 1}</p>
                            <p class="text-sm font-semibold ${i + 1 === 10 || i + 1 === 25 || i + 1 === 50 ? 'text-gold' : 'text-white'}">
                                ${i + 1 === 10 ? 'Legendary Card' : i + 1 === 25 ? 'Rebate Voucher' : i + 1 === 50 ? 'Mythic Chest' : 'Claim'}
                            </p>
                        </div>
                    `).join('')}
                </div>
                <div class="season-track hidden flex gap-3 overflow-x-auto pb-2" data-pass-view="premium">
                    ${Array.from({ length: 50 }, (_, i) => `
                        <div class="season-level premium rounded-xl p-3 min-w-[120px] text-center ${i < 12 ? '' : 'locked'}" data-milestone="${i + 1}">
                            <p class="text-xs text-gray-400">Level ${i + 1}</p>
                            <p class="text-sm font-semibold ${i + 1 === 10 || i + 1 === 25 || i + 1 === 50 ? 'text-gold' : 'text-white'}">
                                ${i + 1 === 10 ? 'Legendary Card' : i + 1 === 25 ? 'Copy-Trade Rebate' : i + 1 === 50 ? 'Elite Vault' : 'Unlock'}
                            </p>
                        </div>
                    `).join('')}
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div class="season-milestone rounded-2xl p-4">
                        <p class="text-xs text-gray-400">Milestone</p>
                        <p class="text-lg font-bold text-gold">Legendary Seasonal Card</p>
                        <p class="text-xs text-gray-400 mt-1">Unique passive boost card</p>
                    </div>
                    <div class="season-milestone rounded-2xl p-4">
                        <p class="text-xs text-gray-400">Milestone</p>
                        <p class="text-lg font-bold text-neonTeal">Copy-Trade Rebate Voucher</p>
                        <p class="text-xs text-gray-400 mt-1">Reduced copy fees for 30 days</p>
                    </div>
                    <div class="season-milestone rounded-2xl p-4">
                        <p class="text-xs text-gray-400">Milestone</p>
                        <p class="text-lg font-bold text-electricBlue">Premium Loot Reveal</p>
                        <p class="text-xs text-gray-400 mt-1">Exclusive animated drop</p>
                    </div>
                </div>
                <div class="glass-card rounded-2xl p-4 mt-4">
                    <div class="flex items-center justify-between mb-3">
                        <h4 class="font-gaming font-bold">Friends Progress</h4>
                        <span class="text-xs text-gray-400">FOMO Leaderboard</span>
                    </div>
                    <div class="space-y-2">
                        ${[
                            { name: 'Astra', level: 18 },
                            { name: 'MacroHawk', level: 16 },
                            { name: 'SignalNova', level: 14 }
                        ].map(friend => `
                            <div class="flex items-center justify-between bg-black/40 rounded-xl p-3 text-sm">
                                <span>${friend.name}</span>
                                <span class="text-electricBlue font-semibold">Lv ${friend.level}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Badges -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold flex items-center gap-2 mb-4">
                    <i data-lucide="medal" class="w-5 h-5 text-gold"></i>
                    TITLES & BADGES
                </h3>
                <div class="mb-4">
                    <p class="text-sm text-gray-400 mb-2">Equipped Title</p>
                    <div class="flex items-center gap-2">
                        <span class="px-4 py-2 rounded-full bg-gradient-to-r from-gold/20 to-orange-500/20 text-gold border border-gold/30">Rising Star</span>
                        <button class="text-xs text-electricBlue hover:underline">Change</button>
                    </div>
                </div>
                <p class="text-sm text-gray-400 mb-2">Unlocked Titles</p>
                <div class="flex flex-wrap gap-2">
                    ${MOCK_DATA.extendedProfile.titles.map(title => `
                        <span class="px-3 py-1 rounded-full bg-purpleGlow/20 text-purpleGlow border border-purpleGlow/30 text-sm">${title}</span>
                    `).join('')}
                </div>
            </div>

            <!-- Guild Info -->
            <div class="glass-card rounded-2xl p-5 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="users" class="w-5 h-5 text-electricBlue"></i>
                    YOUR GUILD
                </h3>
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <i data-lucide="waves" class="w-8 h-8"></i>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2">
                            <h4 class="font-bold text-lg">Crypto Whales</h4>
                            <span class="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">[WHALE]</span>
                        </div>
                        <p class="text-sm text-gray-400">Role: Officer · 47/50 Members</p>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-bold text-electricBlue">12,500</p>
                        <p class="text-xs text-gray-400">Your Contribution</p>
                    </div>
                </div>
            </div>
        </div>
    `;
