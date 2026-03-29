window.PAGES = window.PAGES || {};
window.PAGES.analytics = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">ANALYTICS</h1>
                    <p class="text-gray-400">Detailed performance statistics</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">This Week</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">This Month</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">All Time</button>
                </div>
            </div>

            <!-- Overview Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-electricBlue">${MOCK_DATA.analytics.overview.totalPredictions}</p>
                    <p class="text-xs text-gray-400">Total Predictions</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-neonTeal">${MOCK_DATA.analytics.overview.accuracy}%</p>
                    <p class="text-xs text-gray-400">Accuracy</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-gold">${(MOCK_DATA.analytics.overview.totalGemsEarned / 1000).toFixed(1)}K</p>
                    <p class="text-xs text-gray-400">Gems Earned</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-purpleGlow">${(MOCK_DATA.analytics.overview.totalGoldEarned / 1000).toFixed(0)}K</p>
                    <p class="text-xs text-gray-400">Gold Earned</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-orange-400">${MOCK_DATA.analytics.overview.bestStreak}</p>
                    <p class="text-xs text-gray-400">Best Streak</p>
                </div>
                <div class="glass-card rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold">${MOCK_DATA.analytics.overview.avgDailyPredictions}</p>
                    <p class="text-xs text-gray-400">Avg Daily</p>
                </div>
            </div>

            <!-- By Token Performance -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="coins" class="w-5 h-5 text-electricBlue"></i>
                    PERFORMANCE BY TOKEN
                </h3>
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-left text-gray-400 text-sm border-b border-glassBorder">
                                <th class="pb-3">Token</th>
                                <th class="pb-3">Predictions</th>
                                <th class="pb-3">Accuracy</th>
                                <th class="pb-3">Profit</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${MOCK_DATA.analytics.byToken.map(token => `
                                <tr class="border-b border-glassBorder/50">
                                    <td class="py-3 font-semibold">${token.token}</td>
                                    <td class="py-3">${token.predictions}</td>
                                    <td class="py-3 ${token.accuracy >= 90 ? 'text-gold' : token.accuracy >= 85 ? 'text-electricBlue' : 'text-gray-400'}">${token.accuracy}%</td>
                                    <td class="py-3 text-neonTeal">${token.profit}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Sentiment Accuracy -->
                <div class="glass-card rounded-2xl p-5">
                    <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                        <i data-lucide="target" class="w-5 h-5 text-purpleGlow"></i>
                        SENTIMENT ACCURACY
                    </h3>
                    <div class="space-y-4">
                        ${Object.entries(MOCK_DATA.analytics.sentimentAccuracy).map(([sentiment, data]) => `
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="capitalize">${sentiment}</span>
                                    <span class="text-sm text-gray-400">${data.predictions} predictions</span>
                                </div>
                                <div class="progress-bar h-3">
                                    <div class="progress-fill ${data.accuracy >= 88 ? 'progress-fill-green' : ''}" style="width: ${data.accuracy}%"></div>
                                </div>
                                <p class="text-right text-sm ${data.accuracy >= 88 ? 'text-neonTeal' : 'text-gray-400'}">${data.accuracy}%</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Time of Day -->
                <div class="glass-card rounded-2xl p-5">
                    <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                        <i data-lucide="clock" class="w-5 h-5 text-orange-400"></i>
                        PERFORMANCE BY TIME
                    </h3>
                    <div class="space-y-3">
                        ${MOCK_DATA.analytics.timeOfDay.map(time => `
                            <div class="flex items-center justify-between">
                                <span class="text-sm">${time.period}</span>
                                <div class="flex items-center gap-3">
                                    <span class="text-xs text-gray-400">${time.predictions} preds</span>
                                    <span class="font-semibold ${time.accuracy >= 88 ? 'text-neonTeal' : 'text-gray-400'}">${time.accuracy}%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Weekly Progress -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="trending-up" class="w-5 h-5 text-neonTeal"></i>
                    WEEKLY PROGRESS
                </h3>
                <div class="grid grid-cols-5 gap-4">
                    ${MOCK_DATA.analytics.weeklyProgress.map(week => `
                        <div class="text-center">
                            <div class="h-32 bg-black/30 rounded-xl relative mb-2">
                                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-electricBlue to-purpleGlow rounded-xl transition-all" style="height: ${week.accuracy}%"></div>
                            </div>
                            <p class="text-xs text-gray-400 mb-1">${week.week}</p>
                            <p class="font-bold text-sm">${week.accuracy}%</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Earning History -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="wallet" class="w-5 h-5 text-gold"></i>
                    EARNING HISTORY
                </h3>
                <div class="h-48 bg-black/30 rounded-xl p-4 flex items-end gap-2">
                    ${MOCK_DATA.analytics.earningHistory.map((earn, i) => {
                        const maxGems = Math.max(...MOCK_DATA.analytics.earningHistory.map(e => e.gems));
                        const height = (earn.gems / maxGems) * 100;
                        return `
                            <div class="flex-1 flex flex-col items-center">
                                <div class="w-full bg-gradient-to-t from-neonTeal to-electricBlue rounded-t-lg transition-all hover:opacity-80" style="height: ${height}%"></div>
                                <p class="text-xs text-gray-400 mt-2">${earn.period}</p>
                                <p class="text-xs text-neonTeal">${earn.gems}</p>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </div>
    `;
