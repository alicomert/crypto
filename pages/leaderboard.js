window.PAGES = window.PAGES || {};
window.PAGES.leaderboard = () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-gaming font-bold gradient-text mb-2">GLOBAL RANKINGS</h1>
                <p class="text-gray-400">Top analysts competing for glory</p>
            </div>

            <!-- Top 3 Podium -->
            <div class="grid grid-cols-3 gap-4 mb-8">
                <!-- 2nd Place -->
                <div class="glass-card rank-2 rounded-2xl p-5 text-center mt-8">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-400 to-gray-500 mb-3 flex items-center justify-center text-3xl font-bold border-4 border-gray-400">
                        ${MOCK_DATA.leaderboard[1].username.charAt(0)}
                    </div>
                    <p class="text-3xl font-bold mb-1">2nd</p>
                    <p class="font-semibold">${MOCK_DATA.leaderboard[1].displayName}</p>
                    <p class="text-sm text-gray-400 mb-2">@${MOCK_DATA.leaderboard[1].username}</p>
                    <div class="text-lg font-bold text-electricBlue">${MOCK_DATA.leaderboard[1].accuracy}%</div>
                    <p class="text-xs text-gray-400">accuracy</p>
                </div>

                <!-- 1st Place -->
                <div class="glass-card rank-1 rounded-2xl p-5 text-center">
                    <div class="relative inline-block mb-3">
                        <div class="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-orange-500 flex items-center justify-center text-4xl font-bold border-4 border-gold neon-glow-gold">
                            ${MOCK_DATA.leaderboard[0].username.charAt(0)}
                        </div>
                        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <i data-lucide="crown" class="w-8 h-8 text-gold"></i>
                        </div>
                    </div>
                    <p class="text-4xl font-bold mb-1 gradient-text-gold">1st</p>
                    <p class="font-bold text-lg">${MOCK_DATA.leaderboard[0].displayName}</p>
                    <p class="text-sm text-gray-400 mb-2">@${MOCK_DATA.leaderboard[0].username}</p>
                    <div class="text-xl font-bold text-gold">${MOCK_DATA.leaderboard[0].accuracy}%</div>
                    <p class="text-xs text-gray-400">accuracy</p>
                </div>

                <!-- 3rd Place -->
                <div class="glass-card rank-3 rounded-2xl p-5 text-center mt-8">
                    <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-orange-700 to-orange-800 mb-3 flex items-center justify-center text-3xl font-bold border-4 border-orange-700">
                        ${MOCK_DATA.leaderboard[2].username.charAt(0)}
                    </div>
                    <p class="text-3xl font-bold mb-1">3rd</p>
                    <p class="font-semibold">${MOCK_DATA.leaderboard[2].displayName}</p>
                    <p class="text-sm text-gray-400 mb-2">@${MOCK_DATA.leaderboard[2].username}</p>
                    <div class="text-lg font-bold text-electricBlue">${MOCK_DATA.leaderboard[2].accuracy}%</div>
                    <p class="text-xs text-gray-400">accuracy</p>
                </div>
            </div>

            <!-- Full Leaderboard -->
            <div class="glass-card rounded-2xl p-5">
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead>
                            <tr class="text-left text-gray-400 text-sm border-b border-glassBorder">
                                <th class="pb-3 pl-2">Rank</th>
                                <th class="pb-3">Player</th>
                                <th class="pb-3">Accuracy</th>
                                <th class="pb-3">Predictions</th>
                                <th class="pb-3">Streak</th>
                                <th class="pb-3">XP</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${MOCK_DATA.leaderboard.map((player, index) => `
                                <tr class="border-b border-glassBorder/50 hover:bg-white/5 transition-all ${player.isCurrentUser ? 'bg-electricBlue/10' : ''}">
                                    <td class="py-4 pl-2">
                                        ${index < 3 ? '<span class="text-2xl">' + (index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉') + '</span>' : `<span class="font-bold text-gray-400">#${player.rank}</span>`}
                                    </td>
                                    <td class="py-4">
                                        <div class="flex items-center gap-3">
                                            <div class="w-10 h-10 rounded-full bg-gradient-to-br ${player.avatar} flex items-center justify-center font-bold">
                                                ${player.username.charAt(0)}
                                            </div>
                                            <div>
                                                <p class="font-semibold">${player.displayName} ${player.isCurrentUser ? '(You)' : ''}</p>
                                                <p class="text-xs text-gray-400">@${player.username}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="py-4">
                                        <span class="font-bold ${player.accuracy >= 90 ? 'text-gold' : player.accuracy >= 85 ? 'text-electricBlue' : 'text-gray-400'}">${player.accuracy}%</span>
                                    </td>
                                    <td class="py-4 text-gray-400">${player.predictions}</td>
                                    <td class="py-4">
                                        <div class="flex items-center gap-1">
                                            <i data-lucide="flame" class="w-4 h-4 text-orange-400 ${player.streak >= 10 ? 'animate-pulse' : ''}"></i>
                                            <span class="font-semibold">${player.streak}</span>
                                        </div>
                                    </td>
                                    <td class="py-4">
                                        <span class="text-purpleGlow font-semibold">${player.xp.toLocaleString()}</span>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Your Rank Summary -->
            <div class="glass-card rounded-2xl p-5 bg-gradient-to-r from-electricBlue/10 to-purpleGlow/10">
                <div class="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <h3 class="font-gaming font-bold text-lg mb-1">Your Rank: #${AppState.user.rank}</h3>
                        <p class="text-sm text-gray-400">You're in the top ${Math.round((AppState.user.rank / 10000) * 100)}% of players</p>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-center">
                            <p class="text-2xl font-bold text-electricBlue">${AppState.user.accuracy}%</p>
                            <p class="text-xs text-gray-400">Accuracy</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-neonTeal">${AppState.user.totalPredictions}</p>
                            <p class="text-xs text-gray-400">Predictions</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-orange-400">${AppState.user.streak}</p>
                            <p class="text-xs text-gray-400">Day Streak</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
