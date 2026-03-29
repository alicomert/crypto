window.PAGES = window.PAGES || {};
window.PAGES.lootboxes = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-gaming font-bold gradient-text mb-2">LOOT BOXES</h1>
                <p class="text-gray-400">Open boxes to win exclusive rewards!</p>
            </div>

            <!-- Combo Multiplier Banner -->
            <div class="glass-card rounded-2xl p-5 bg-gradient-to-r from-orange-500/10 to-red-500/10">
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-xl bg-orange-500/20 flex items-center justify-center">
                            <i data-lucide="flame" class="w-8 h-8 text-orange-400 animate-pulse"></i>
                        </div>
                        <div>
                            <h3 class="font-gaming font-bold text-lg text-orange-400">ACTIVE COMBO: x${MOCK_DATA.comboSystem.comboMultiplier}</h3>
                            <p class="text-sm text-gray-400">${MOCK_DATA.comboSystem.currentCombo} correct predictions in a row!</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="text-center">
                            <p class="text-lg font-bold text-neonTeal">+${MOCK_DATA.comboSystem.bonusHistory[0].bonusGems}</p>
                            <p class="text-xs text-gray-400">Bonus Gems</p>
                        </div>
                        <div class="text-center">
                            <p class="text-lg font-bold text-purpleGlow">+${MOCK_DATA.comboSystem.bonusHistory[0].bonusXP}</p>
                            <p class="text-xs text-gray-400">Bonus XP</p>
                        </div>
                        <div class="text-center">
                            <p class="text-sm text-gray-400">Ends in</p>
                            <p class="text-lg font-bold text-orange-400">${MOCK_DATA.comboSystem.comboEndsIn}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Loot Boxes Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${MOCK_DATA.lootBoxes.map(box => `
                    <div class="glass-card ${box.rarity === 'legendary' ? 'legendary-card' : box.rarity === 'epic' ? 'epic-card' : box.rarity === 'rare' ? 'rare-card' : ''} rounded-2xl p-6 text-center hover-lift cursor-pointer" onclick="openLootBox(${box.id})">
                        <div class="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${box.color} flex items-center justify-center">
                            <i data-lucide="${box.icon}" class="w-12 h-12"></i>
                        </div>
                        <h3 class="font-bold text-xl mb-2">${box.name}</h3>
                        <p class="text-sm text-gray-400 mb-4">Contains ${box.items.length} items</p>
                        <div class="space-y-2 mb-4 text-left">
                            ${box.items.slice(0, 3).map(item => `
                                <div class="flex items-center gap-2 text-sm">
                                    <i data-lucide="check" class="w-4 h-4 text-neonTeal"></i>
                                    <span>${item}</span>
                                </div>
                            `).join('')}
                            ${box.items.length > 3 ? '<p class="text-xs text-gray-400">...and more</p>' : ''}
                        </div>
                        <div class="flex items-center justify-between gap-2">
                            ${box.price.gems > 0 ? `<span class="text-neonTeal font-bold">${box.price.gems} <i data-lucide="gem" class="w-4 h-4 inline"></i></span>` : ''}
                            ${box.price.gold > 0 ? `<span class="text-gold font-bold">${box.price.gold} <i data-lucide="coins" class="w-4 h-4 inline"></i></span>` : ''}
                        </div>
                        <button class="w-full mt-4 px-4 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn hover:shadow-lg hover:shadow-electricBlue/30">
                            Open Box
                        </button>
                    </div>
                `).join('')}
            </div>

            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <i data-lucide="ticket" class="w-5 h-5 text-electricBlue"></i>
                        <h3 class="font-gaming font-bold">SEASON PASS REWARDS</h3>
                    </div>
                    <span class="text-xs text-gray-400">Preview Grid</span>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    ${[
                        { label: 'Legendary Card', tone: 'text-gold' },
                        { label: 'Copy-Trade Rebate', tone: 'text-neonTeal' },
                        { label: 'Premium Loot Box', tone: 'text-electricBlue' },
                        { label: 'XP Booster', tone: 'text-purpleGlow' }
                    ].map(reward => `
                        <div class="bg-black/30 rounded-xl p-4 text-center">
                            <p class="text-xs text-gray-400">Milestone</p>
                            <p class="text-sm font-semibold ${reward.tone} mt-1">${reward.label}</p>
                            <button class="mt-3 px-3 py-2 rounded-xl bg-glass border border-glassBorder text-xs squish-btn">
                                Reveal
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Combo Multipliers Info -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="zap" class="w-5 h-5 text-orange-400"></i>
                    COMBO MULTIPLIERS
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
                    ${MOCK_DATA.comboSystem.multipliers.map(m => `
                        <div class="bg-black/30 rounded-xl p-4 text-center ${MOCK_DATA.comboSystem.currentCombo >= m.combo ? 'border-2 border-neonTeal' : ''}">
                            <p class="text-2xl font-bold ${MOCK_DATA.comboSystem.currentCombo >= m.combo ? 'text-neonTeal' : 'text-gray-400'}">x${m.multiplier}</p>
                            <p class="text-sm text-gray-400">${m.combo} streak</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
