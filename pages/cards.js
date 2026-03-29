window.PAGES = window.PAGES || {};
window.PAGES.cards = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">COLLECTIBLE CARDS</h1>
                    <p class="text-gray-400">Collect and upgrade powerful cards</p>
                </div>
                <div class="flex items-center gap-2">
                    <span class="text-sm">${MOCK_DATA.extendedProfile.cardsCollected}/${MOCK_DATA.extendedProfile.cardsTotal} Collected</span>
                    <div class="progress-bar w-24 h-2">
                        <div class="progress-fill" style="width: ${(MOCK_DATA.extendedProfile.cardsCollected / MOCK_DATA.extendedProfile.cardsTotal) * 100}%"></div>
                    </div>
                </div>
            </div>

            <!-- Equipped Card -->
            <div class="glass-card rounded-2xl p-5 bg-gradient-to-r from-purpleGlow/10 to-pink-500/10">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="shield" class="w-5 h-5 text-purpleGlow"></i>
                    EQUIPPED CARD
                </h3>
                <div class="flex items-center gap-4">
                    <div class="w-20 h-28 rounded-xl bg-gradient-to-br from-gold/30 to-orange-500/30 flex items-center justify-center text-4xl border-2 border-gold">
                        ${MOCK_DATA.extendedProfile.equippedCard.image}
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-2 mb-1">
                            <h4 class="font-bold text-lg">${MOCK_DATA.extendedProfile.equippedCard.name}</h4>
                            <span class="px-2 py-0.5 bg-gold/20 text-gold text-xs rounded-full">Legendary</span>
                        </div>
                        <p class="text-sm text-purpleGlow mb-2">${MOCK_DATA.extendedProfile.equippedCard.bonus}</p>
                        <div class="flex items-center gap-2">
                            <span class="text-sm text-gray-400">Level 3</span>
                            <div class="flex-1 progress-bar h-2">
                                <div class="progress-fill progress-fill-gold" style="width: 60%"></div>
                            </div>
                            <span class="text-xs text-gray-400">60%</span>
                        </div>
                    </div>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">
                        Change
                    </button>
                </div>
            </div>

            <!-- Card Collection -->
            <div>
                <h3 class="font-gaming font-bold text-xl mb-4">COLLECTION</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    ${MOCK_DATA.cards.map(card => `
                        <div class="glass-card ${card.rarity === 'legendary' ? 'legendary-card' : card.rarity === 'epic' ? 'epic-card' : card.rarity === 'rare' ? 'rare-card' : ''} rounded-xl p-4 text-center hover-lift ${!card.owned ? 'opacity-50' : ''}">
                            <div class="aspect-[3/4] mb-3 rounded-lg bg-gradient-to-br ${
                                card.rarity === 'legendary' ? 'from-gold/30 to-orange-500/30' :
                                card.rarity === 'epic' ? 'from-purpleGlow/30 to-pink-500/30' :
                                card.rarity === 'rare' ? 'from-electricBlue/30 to-cyan-500/30' :
                                'from-gray-500/30 to-gray-600/30'
                            } flex items-center justify-center text-4xl ${card.owned ? '' : 'grayscale'}">
                                ${card.image}
                            </div>
                            <h4 class="font-semibold text-sm mb-1">${card.name}</h4>
                            <p class="text-xs ${card.rarity === 'legendary' ? 'text-gold' : card.rarity === 'epic' ? 'text-purpleGlow' : card.rarity === 'rare' ? 'text-electricBlue' : 'text-gray-400'}">${card.rarity.charAt(0).toUpperCase() + card.rarity.slice(1)}</p>
                            ${card.owned ? `
                                <p class="text-xs text-purpleGlow mt-1">${card.bonus}</p>
                                ${card.level ? `<p class="text-xs text-gray-400 mt-1">Level ${card.level}</p>` : ''}
                            ` : '<p class="text-xs text-gray-500 mt-1">Locked</p>'}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
