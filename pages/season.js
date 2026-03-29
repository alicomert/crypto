window.PAGES = window.PAGES || {};
window.PAGES.season = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="glass-card rounded-3xl p-6 bg-gradient-to-br from-[#141b24] to-[#0b0f15]">
                <div class="flex flex-wrap items-center justify-between gap-4">
                    <div>
                        <p class="text-xs uppercase tracking-widest text-gray-400">SignalPulse Season Pass</p>
                        <h1 class="text-3xl lg:text-4xl font-gaming font-bold">Market Cycle: Phantom Surge</h1>
                        <p class="text-sm text-gray-400 mt-2">Progressive illumination scales from dim grey to electric cyan as you level up.</p>
                    </div>
                    <div class="text-right">
                        <p class="text-xs text-gray-400">Market Cycle End</p>
                        <p class="text-2xl font-bold text-electricBlue">12d 04h</p>
                        <p class="text-xs text-gray-400 mt-1">Level 12 · 100 XP to level up</p>
                    </div>
                </div>
                <div class="mt-5 season-progress-3d rounded-full p-1">
                    <div class="season-progress-fill h-2 rounded-full" style="width: 62%"></div>
                </div>
                <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="bg-black/40 rounded-xl p-4 text-center">
                        <p class="text-xs text-gray-400">Season XP</p>
                        <p class="text-xl font-bold text-electricBlue">6,200</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-4 text-center">
                        <p class="text-xs text-gray-400">Rewards Claimed</p>
                        <p class="text-xl font-bold text-neonTeal">18</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-4 text-center">
                        <p class="text-xs text-gray-400">Premium Status</p>
                        <p class="text-xl font-bold text-gold">Active</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-4 text-center">
                        <p class="text-xs text-gray-400">Next Milestone</p>
                        <p class="text-xl font-bold text-gold">Lv 15</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 glass-card rounded-2xl p-5">
                    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <h3 class="font-gaming font-bold">Progression Track</h3>
                        <div class="flex items-center gap-2">
                            <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-xs font-semibold squish-btn" data-pass-toggle="free">Free Track</button>
                            <button class="px-4 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn" data-pass-toggle="premium">Premium Track</button>
                        </div>
                    </div>
                    <div class="season-track flex gap-3 overflow-x-auto pb-3" data-pass-view="free">
                        ${Array.from({ length: 50 }, (_, i) => `
                            <div class="season-level rounded-xl p-3 min-w-[130px] text-center ${i < 12 ? '' : 'locked'}" data-milestone="${i + 1}">
                                <p class="text-xs text-gray-400">Level ${i + 1}</p>
                                <p class="text-sm font-semibold ${i + 1 === 10 || i + 1 === 25 || i + 1 === 50 ? 'text-gold' : 'text-white'}">
                                    ${i + 1 === 10 ? 'Legendary Card' : i + 1 === 25 ? 'Rebate Voucher' : i + 1 === 50 ? 'Mythic Chest' : 'Claim'}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="season-track hidden flex gap-3 overflow-x-auto pb-3" data-pass-view="premium">
                        ${Array.from({ length: 50 }, (_, i) => `
                            <div class="season-level premium rounded-xl p-3 min-w-[130px] text-center ${i < 12 ? '' : 'locked'}" data-milestone="${i + 1}">
                                <p class="text-xs text-gray-400">Level ${i + 1}</p>
                                <p class="text-sm font-semibold ${i + 1 === 10 || i + 1 === 25 || i + 1 === 50 ? 'text-gold' : 'text-white'}">
                                    ${i + 1 === 10 ? 'Legendary Card' : i + 1 === 25 ? 'Copy-Trade Rebate' : i + 1 === 50 ? 'Elite Vault' : 'Unlock'}
                                </p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="glass-card rounded-2xl p-5">
                        <h3 class="font-gaming font-bold mb-3">Milestones</h3>
                        <div class="space-y-3">
                            <div class="season-milestone rounded-2xl p-4">
                                <p class="text-xs text-gray-400">Legendary Seasonal Card</p>
                                <p class="text-lg font-bold text-gold">Phantom Relic</p>
                                <p class="text-xs text-gray-400 mt-1">Passive win-rate boost for 7 days</p>
                            </div>
                            <div class="season-milestone rounded-2xl p-4">
                                <p class="text-xs text-gray-400">Copy-Trade Rebate Voucher</p>
                                <p class="text-lg font-bold text-neonTeal">Rebate x2</p>
                                <p class="text-xs text-gray-400 mt-1">Fee refund for verified trades</p>
                            </div>
                            <div class="season-milestone rounded-2xl p-4">
                                <p class="text-xs text-gray-400">Legendary Loot Reveal</p>
                                <p class="text-lg font-bold text-electricBlue">Vault Drop</p>
                                <p class="text-xs text-gray-400 mt-1">Animated loot box reveal</p>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-5">
                        <div class="flex items-center justify-between mb-3">
                            <h3 class="font-gaming font-bold">Friends Progress</h3>
                            <span class="text-xs text-gray-400">Leaderboard</span>
                        </div>
                        <div class="space-y-2">
                            ${[
                                { name: 'Astra', level: 18 },
                                { name: 'MacroHawk', level: 16 },
                                { name: 'SignalNova', level: 14 },
                                { name: 'Scout-Kira', level: 13 }
                            ].map(friend => `
                                <div class="flex items-center justify-between bg-black/40 rounded-xl p-3 text-sm">
                                    <span>${friend.name}</span>
                                    <span class="text-electricBlue font-semibold">Lv ${friend.level}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-gaming font-bold">Season Pass Rewards Preview</h3>
                    <button class="px-4 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn">
                        Unlock Premium
                    </button>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${[
                        { label: 'Legendary Card', tone: 'text-gold' },
                        { label: 'XP Multiplier', tone: 'text-electricBlue' },
                        { label: 'Loot Box Reveal', tone: 'text-neonTeal' },
                        { label: 'Rebate Voucher', tone: 'text-purpleGlow' },
                        { label: 'Signal Boost', tone: 'text-neonTeal' },
                        { label: 'Season Title', tone: 'text-gold' },
                        { label: 'Guild Gift', tone: 'text-electricBlue' },
                        { label: 'Cosmetic Badge', tone: 'text-purpleGlow' }
                    ].map(reward => `
                        <div class="bg-black/40 rounded-xl p-4 text-center">
                            <p class="text-xs text-gray-400">Premium</p>
                            <p class="text-sm font-semibold ${reward.tone} mt-1">${reward.label}</p>
                            <button class="mt-3 px-3 py-2 rounded-xl bg-glass border border-glassBorder text-xs squish-btn">
                                Preview
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
