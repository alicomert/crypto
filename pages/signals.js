window.PAGES = window.PAGES || {};
window.PAGES.signals = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">AI SIGNALS</h1>
                    <p class="text-gray-400">Advanced AI-powered market predictions</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">All</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Bullish</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Bearish</button>
                </div>
            </div>

            <div class="space-y-4">
                ${MOCK_DATA.signals.map(signal => `
                    <div class="glass-card ${signal.rarity === 'legendary' ? 'legendary-card' : signal.rarity === 'epic' ? 'epic-card' : signal.rarity === 'rare' ? 'rare-card' : ''} rounded-3xl p-6 hover-lift">
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center gap-4">
                                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center font-bold text-2xl">
                                    ${signal.token}
                                </div>
                                <div>
                                    <div class="flex items-center gap-2">
                                        <h3 class="font-bold text-xl">${signal.tokenName}</h3>
                                        ${signal.rarity === 'legendary' ? '<span class="px-2 py-1 bg-gold/20 text-gold text-xs rounded-full font-semibold rarity-legendary">LEGENDARY</span>' : ''}
                                        ${signal.rarity === 'epic' ? '<span class="px-2 py-1 bg-purpleGlow/20 text-purpleGlow text-xs rounded-full font-semibold">EPIC</span>' : ''}
                                        ${signal.rarity === 'rare' ? '<span class="px-2 py-1 bg-electricBlue/20 text-electricBlue text-xs rounded-full font-semibold">RARE</span>' : ''}
                                    </div>
                                    <p class="text-gray-400">$${signal.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <div class="text-right">
                                <p class="font-semibold ${signal.change24h >= 0 ? 'text-neonTeal' : 'text-sunsetCoral'} text-lg">${signal.change24h >= 0 ? '+' : ''}${signal.change24h}%</p>
                                <p class="text-sm text-gray-400">${signal.timeAgo}</p>
                            </div>
                        </div>

                        <div class="flex items-center gap-3 mb-4">
                            <span class="tag ${signal.sentiment === 'bullish' ? 'tag-bullish' : signal.sentiment === 'bearish' ? 'tag-bearish' : 'tag-neutral'}">
                                ${signal.sentiment.charAt(0).toUpperCase() + signal.sentiment.slice(1)}
                            </span>
                            ${signal.badges.includes('high-conviction') ? '<span class="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs">High Conviction</span>' : ''}
                            ${signal.badges.includes('whale-alert') ? '<span class="px-3 py-1 rounded-full bg-electricBlue/20 text-electricBlue text-xs">Whale Alert</span>' : ''}
                            ${signal.badges.includes('trending') ? '<span class="px-3 py-1 rounded-full bg-sunsetCoral/20 text-sunsetCoral text-xs">🔥 Trending</span>' : ''}
                            ${AppState.user.isPremium ? '<span class="px-3 py-1 rounded-full bg-electricBlue/10 text-electricBlue text-xs flex items-center gap-1"><i data-lucide="ticket" class="w-3 h-3"></i>XP x2</span>' : ''}
                        </div>

                        <div class="bg-black/30 rounded-xl p-4 mb-4">
                            <div class="flex items-center gap-2 mb-2">
                                <i data-lucide="sparkles" class="w-4 h-4 text-purpleGlow"></i>
                                <span class="text-sm font-medium text-purpleGlow">AI Analysis</span>
                            </div>
                            <p class="text-sm leading-relaxed">${signal.aiSummary}</p>
                        </div>

                        <div class="mb-4">
                            <div class="flex items-center justify-between mb-2">
                                <span class="text-sm text-gray-400">Community Prediction</span>
                                <span class="text-sm">${signal.predictions.bullish + signal.predictions.bearish} votes</span>
                            </div>
                            <div class="prediction-slider" onclick="handlePrediction(event, ${signal.id})">
                                <div class="prediction-fill" style="width: ${(signal.predictions.bullish / (signal.predictions.bullish + signal.predictions.bearish)) * 100}%"></div>
                                <div class="prediction-marker" style="left: ${(signal.predictions.bullish / (signal.predictions.bullish + signal.predictions.bearish)) * 100}%">
                                    <i data-lucide="chevrons-left-right" class="w-5 h-5"></i>
                                </div>
                            </div>
                            <div class="flex justify-between mt-2 text-xs">
                                <span class="text-sunsetCoral">Bearish ${Math.round((signal.predictions.bearish / (signal.predictions.bullish + signal.predictions.bearish)) * 100)}%</span>
                                <span class="text-neonTeal">Bullish ${Math.round((signal.predictions.bullish / (signal.predictions.bullish + signal.predictions.bearish)) * 100)}%</span>
                            </div>
                        </div>

                        <div class="flex items-center justify-between pt-4 border-t border-glassBorder">
                            <div class="flex items-center gap-4">
                                <button class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all squish-btn">
                                    <i data-lucide="heart" class="w-5 h-5"></i>
                                    <span>${Math.floor(Math.random() * 500) + 100}</span>
                                </button>
                                <button class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all squish-btn">
                                    <i data-lucide="message-circle" class="w-5 h-5"></i>
                                </button>
                            </div>
                            <button onclick="submitPrediction(${signal.id})" class="px-6 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-sm font-semibold squish-btn">
                                Predict & Earn
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
