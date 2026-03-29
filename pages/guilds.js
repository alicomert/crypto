window.PAGES = window.PAGES || {};

const GUILD_REGISTRY = [
    {
        id: 'whale-hunters',
        name: 'Whale Hunters',
        tag: 'WHALE',
        tier: 'Elite',
        supply: 420,
        leadTrader: { name: 'WhaleKing', roi: 148, winRate: 72, drawdown: 12 },
        status: 'live',
        entryPass: { scoutSlots: 4, paidSlots: 96 },
        perks: ['Priority Signals', 'Macro War Room', 'VIP Hotlist'],
        copyTrading: { pnl: 8420, pnlPercent: 6.4, sync: 'Live' }
    },
    {
        id: 'alpha-seekers',
        name: 'Alpha Seekers',
        tag: 'ALPHA',
        tier: 'Premium',
        supply: 240,
        leadTrader: { name: 'Astra', roi: 96, winRate: 64, drawdown: 18 },
        status: 'delayed',
        entryPass: { scoutSlots: 8, paidSlots: 72 },
        perks: ['Copy Turbo', 'Risk Shields', 'Early Alerts'],
        copyTrading: { pnl: -1270, pnlPercent: -1.3, sync: 'Delayed' }
    },
    {
        id: 'signal-monks',
        name: 'Signal Monks',
        tag: 'ZEN',
        tier: 'Elite',
        supply: 512,
        leadTrader: { name: 'Zenith', roi: 132, winRate: 69, drawdown: 9 },
        status: 'paused',
        entryPass: { scoutSlots: 6, paidSlots: 120 },
        perks: ['Low Drawdown', 'Streak Protection', 'Daily Alpha'],
        copyTrading: { pnl: 2130, pnlPercent: 2.1, sync: 'Paused' }
    }
];

window.PAGES.guilds = () => {
    const memberGuild = MOCK_DATA.guilds.find(g => g.isMember);
    const bondingPrice = (supply) => Math.round((supply * supply) / 16000);

    return `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-8">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">GUILDS</h1>
                    <p class="text-gray-400">Join forces with other traders</p>
                </div>
                <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn shadow-lg shadow-electricBlue/20 active:scale-95">
                    <i data-lucide="plus" class="w-5 h-5 inline mr-2"></i>Create Guild
                </button>
            </div>

            ${memberGuild ? `
                <div class="glass-card rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                    <div class="flex items-start justify-between mb-4 gap-4 flex-wrap">
                        <div class="flex items-center gap-4">
                            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${memberGuild.color} flex items-center justify-center">
                                <i data-lucide="${memberGuild.icon}" class="w-10 h-10"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <h2 class="text-2xl font-gaming font-bold">${memberGuild.name}</h2>
                                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">[${memberGuild.tag}]</span>
                                </div>
                                <p class="text-gray-400">${memberGuild.description}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-400">Your Role</p>
                            <p class="text-lg font-bold text-electricBlue">${memberGuild.memberRole}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div class="text-center">
                            <p class="text-2xl font-bold">${memberGuild.members}/${memberGuild.maxMembers}</p>
                            <p class="text-sm text-gray-400">Members</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold">Level ${memberGuild.level}</p>
                            <p class="text-sm text-gray-400">Guild Level</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold">${(memberGuild.xp / 1000).toFixed(0)}K</p>
                            <p class="text-sm text-gray-400">Total XP</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gold">#3</p>
                            <p class="text-sm text-gray-400">Ranking</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${memberGuild.achievements.map(a => `
                            <span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">🏆 ${a}</span>
                        `).join('')}
                    </div>

                    <div class="bg-black/30 rounded-xl p-4">
                        <h4 class="font-semibold mb-3">Guild Perks</h4>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                            ${memberGuild.perks.map(perk => `
                                <div class="flex items-center gap-2 text-sm">
                                    <i data-lucide="check" class="w-4 h-4 text-neonTeal"></i>
                                    <span>${perk}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            ` : ''}

            <div class="glass-card rounded-2xl p-6 bg-gradient-to-r from-neonTeal/10 to-electricBlue/10">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="users" class="w-5 h-5 text-neonTeal"></i>
                    GUILD REFERRAL PROGRAM
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p class="text-gray-400 mb-3">Invite members to earn rewards!</p>
                        <div class="flex items-center gap-3">
                            <div class="flex-1 bg-black/50 rounded-xl p-3 font-mono text-electricBlue">
                                ${MOCK_DATA.guildReferral.referralCode}
                            </div>
                            <button class="px-4 py-3 rounded-xl bg-electricBlue text-deepSpace font-semibold squish-btn shadow-lg shadow-electricBlue/20 active:scale-95">Copy</button>
                        </div>
                        <div class="flex items-center gap-4 mt-4 text-sm">
                            <div>
                                <p class="text-neonTeal font-bold">${MOCK_DATA.guildReferral.totalReferrals}</p>
                                <p class="text-gray-400">Total Referrals</p>
                            </div>
                            <div>
                                <p class="text-neonTeal font-bold">${MOCK_DATA.guildReferral.activeReferrals}</p>
                                <p class="text-gray-400">Active Members</p>
                            </div>
                            <div>
                                <p class="text-gold font-bold">${MOCK_DATA.guildReferral.earnedFromReferrals.gems}</p>
                                <p class="text-gray-400">Gems Earned</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">Referral Bonuses</h4>
                        <div class="space-y-2">
                            <div class="flex items-center justify-between bg-black/30 rounded-lg p-3">
                                <span class="text-sm">Per Signup</span>
                                <span class="text-neonTeal">+${MOCK_DATA.guildReferral.referralBonus.perSignup.gems} 💎 +${MOCK_DATA.guildReferral.referralBonus.perSignup.gold} 🪙</span>
                            </div>
                            <div class="flex items-center justify-between bg-black/30 rounded-lg p-3">
                                <span class="text-sm">Per Premium Member</span>
                                <span class="text-gold">+${MOCK_DATA.guildReferral.referralBonus.perPremium.gems} 💎 +${MOCK_DATA.guildReferral.referralBonus.perPremium.gold} 🪙</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="glass-card rounded-2xl p-6 bg-gradient-to-br from-black/40 to-deepSpace/80">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="font-gaming font-bold text-xl">ELITE GUILDS</h3>
                        <p class="text-gray-400">Paid entry, copy-trading, and competitive squads</p>
                    </div>
                    <div class="hidden md:flex items-center gap-2 text-xs text-gray-400">
                        <span class="px-2 py-1 bg-black/40 rounded-full">Bonding Curve Price = Supply² / 16000</span>
                    </div>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    ${GUILD_REGISTRY.map(guild => `
                        <div class="relative glass-card rounded-2xl p-5 overflow-hidden border border-glassBorder hover:border-electricBlue/40 transition-all">
                            <div class="absolute -top-12 -right-12 w-32 h-32 bg-electricBlue/20 blur-2xl"></div>
                            <div class="flex items-start justify-between">
                                <div>
                                    <div class="flex items-center gap-2">
                                        <h4 class="font-gaming font-bold text-lg">${guild.name}</h4>
                                        <span class="px-2 py-0.5 text-xs rounded-full bg-purpleGlow/20 text-purpleGlow">${guild.tier}</span>
                                    </div>
                                    <p class="text-xs text-gray-400">Lead Trader: <span class="text-white">${guild.leadTrader.name}</span></p>
                                </div>
                                <span class="text-xs px-2 py-1 rounded-full ${guild.status === 'live' ? 'bg-neonTeal/20 text-neonTeal' : guild.status === 'paused' ? 'bg-gold/20 text-gold' : 'bg-sunsetCoral/20 text-sunsetCoral'}">${guild.copyTrading.sync}</span>
                            </div>
                            <div class="grid grid-cols-3 gap-2 mt-4 text-center">
                                <div class="bg-black/30 rounded-xl p-2">
                                    <p class="text-xs text-gray-400">ROI</p>
                                    <p class="font-bold text-neonTeal">${guild.leadTrader.roi}%</p>
                                </div>
                                <div class="bg-black/30 rounded-xl p-2">
                                    <p class="text-xs text-gray-400">Win Rate</p>
                                    <p class="font-bold text-electricBlue">${guild.leadTrader.winRate}%</p>
                                </div>
                                <div class="bg-black/30 rounded-xl p-2">
                                    <p class="text-xs text-gray-400">Drawdown</p>
                                    <p class="font-bold text-sunsetCoral">${guild.leadTrader.drawdown}%</p>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="flex items-center justify-between text-xs text-gray-400">
                                    <span>Supply</span>
                                    <span class="text-white font-semibold">${guild.supply}</span>
                                </div>
                                <div class="flex items-center justify-between text-xs text-gray-400 mt-1">
                                    <span>Entry Pass</span>
                                    <span class="text-gold font-semibold">${bondingPrice(guild.supply).toLocaleString()} USDT</span>
                                </div>
                                <div class="flex items-center gap-2 mt-2">
                                    <span class="text-xs text-gray-400">Scout Slots</span>
                                    <span class="text-xs text-white font-semibold">${guild.entryPass.scoutSlots}</span>
                                    <span class="text-xs text-gray-400">Paid Slots</span>
                                    <span class="text-xs text-white font-semibold">${guild.entryPass.paidSlots}</span>
                                </div>
                            </div>
                            <button class="mt-4 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn shadow-[0_10px_30px_rgba(0,212,255,0.25)] active:translate-y-0.5 active:shadow-[0_4px_12px_rgba(0,212,255,0.25)]">
                                Buy Pass
                            </button>
                            <div class="mt-3 flex flex-wrap gap-2">
                                ${guild.perks.map(perk => `
                                    <span class="text-xs px-2 py-1 bg-black/40 rounded-full">${perk}</span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="lg:hidden sticky top-20 z-30 bg-deepSpace/90 backdrop-blur-xl border border-glassBorder rounded-2xl p-4">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-xs text-gray-400">Active Copy Trade</p>
                        <p class="font-bold text-neonTeal">BTC/USDT Long · +2.4%</p>
                    </div>
                    <span class="text-xs px-2 py-1 rounded-full bg-neonTeal/20 text-neonTeal">Live Sync</span>
                </div>
                <div class="mt-3 grid grid-cols-3 gap-2 text-center">
                    <div class="bg-black/40 rounded-xl p-2">
                        <p class="text-[10px] text-gray-400">Entry</p>
                        <p class="text-xs font-bold">43,120</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-2">
                        <p class="text-[10px] text-gray-400">TP</p>
                        <p class="text-xs font-bold text-neonTeal">44,250</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-2">
                        <p class="text-[10px] text-gray-400">SL</p>
                        <p class="text-xs font-bold text-sunsetCoral">42,700</p>
                    </div>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div class="lg:col-span-3 space-y-4">
                    <div class="glass-card rounded-2xl p-5">
                        <div class="flex items-center justify-between mb-3">
                            <h4 class="font-gaming font-bold">Copying Now</h4>
                            <span class="flex items-center gap-2 text-xs text-neonTeal">
                                <span class="w-2 h-2 rounded-full bg-neonTeal animate-pulse"></span>Live
                            </span>
                        </div>
                        <div class="space-y-3">
                            ${['BTC/USDT Long', 'ETH/USDT Scalps', 'SOL/USDT Momentum'].map((trade, i) => `
                                <div class="bg-black/40 rounded-xl p-3">
                                    <p class="text-sm font-semibold">${trade}</p>
                                    <div class="flex items-center justify-between text-xs text-gray-400 mt-1">
                                        <span>${['+2.4%', '+1.1%', '+0.6%'][i]}</span>
                                        <span>${['2m ago', '5m ago', '9m ago'][i]}</span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-5">
                        <h4 class="font-gaming font-bold mb-3">Squad Competition</h4>
                        <div class="space-y-2">
                            ${[
                                { name: 'Whale Hunters', roi: 24.8 },
                                { name: 'Alpha Seekers', roi: 19.2 },
                                { name: 'Signal Monks', roi: 17.1 },
                                { name: 'Gamma Pack', roi: 12.6 }
                            ].map((team, idx) => `
                                <div class="flex items-center justify-between bg-black/30 rounded-xl p-3">
                                    <div class="flex items-center gap-2">
                                        <span class="text-xs px-2 py-1 rounded-full ${idx === 0 ? 'bg-gold/20 text-gold' : 'bg-white/5 text-gray-400'}">#${idx + 1}</span>
                                        <span class="text-sm font-semibold">${team.name}</span>
                                    </div>
                                    <span class="text-neonTeal font-bold">${team.roi}%</span>
                                </div>
                            `).join('')}
                        </div>
                        <p class="text-xs text-gray-400 mt-2">7-day Team ROI leaderboard</p>
                    </div>
                </div>

                <div class="lg:col-span-6 space-y-4">
                    <div class="glass-card rounded-2xl p-5">
                        <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
                            <div>
                                <h4 class="font-gaming font-bold">Copy-Trading Terminal</h4>
                                <p class="text-xs text-gray-400">TradingView-style mini-charts with entry/exit points</p>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs px-2 py-1 rounded-full bg-neonTeal/20 text-neonTeal">Sync: Live</span>
                                <span class="text-xs px-2 py-1 rounded-full bg-black/40 text-gray-300">P&L: +$8,420</span>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT'].map((pair, i) => `
                                <div class="bg-black/40 rounded-2xl p-4 relative overflow-hidden">
                                    <div class="absolute inset-0 opacity-30">
                                        <div class="h-full w-full bg-gradient-to-br from-electricBlue/20 via-purpleGlow/10 to-transparent"></div>
                                    </div>
                                    <div class="relative z-10">
                                        <div class="flex items-center justify-between mb-3">
                                            <span class="text-sm font-semibold">${pair}</span>
                                            <span class="text-xs text-gray-400">${['Long', 'Short', 'Long', 'Long'][i]}</span>
                                        </div>
                                        <div class="h-20 bg-black/50 rounded-xl relative overflow-hidden">
                                            <div class="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-neonTeal/40 to-transparent"></div>
                                            <div class="absolute left-4 bottom-6 w-2 h-2 rounded-full bg-neonTeal"></div>
                                            <div class="absolute right-6 bottom-10 w-2 h-2 rounded-full bg-gold"></div>
                                            <div class="absolute right-12 bottom-3 w-2 h-2 rounded-full bg-sunsetCoral"></div>
                                        </div>
                                        <div class="flex items-center justify-between text-xs text-gray-400 mt-2">
                                            <span>Entry</span>
                                            <span>TP</span>
                                            <span>SL</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
                            <div class="bg-black/40 rounded-xl p-3 text-center">
                                <p class="text-xs text-gray-400">Lead ROI</p>
                                <p class="text-xl font-bold text-neonTeal">+148%</p>
                            </div>
                            <div class="bg-black/40 rounded-xl p-3 text-center">
                                <p class="text-xs text-gray-400">Win Rate</p>
                                <p class="text-xl font-bold text-electricBlue">72%</p>
                            </div>
                            <div class="bg-black/40 rounded-xl p-3 text-center">
                                <p class="text-xs text-gray-400">Max Drawdown</p>
                                <p class="text-xl font-bold text-sunsetCoral">12%</p>
                            </div>
                        </div>
                        <div class="mt-4 bg-black/40 rounded-2xl p-4">
                            <div class="flex items-center justify-between mb-2">
                                <h5 class="font-semibold">Profit Distribution</h5>
                                <button onclick="showToast('Take-Profit hit! Confetti!', 'success')" data-haptic="success" class="px-3 py-2 rounded-xl bg-neonTeal text-deepSpace font-semibold squish-btn shadow-lg shadow-neonTeal/30 active:scale-95">
                                    Trigger TP
                                </button>
                            </div>
                            <div class="w-full h-3 bg-black/60 rounded-full overflow-hidden flex">
                                <div class="bg-gold w-[35%]"></div>
                                <div class="bg-electricBlue w-[55%]"></div>
                                <div class="bg-purpleGlow w-[10%]"></div>
                            </div>
                            <div class="flex justify-between text-xs text-gray-400 mt-2">
                                <span>Leader 35%</span>
                                <span>Members 55%</span>
                                <span>Scout Pool 10%</span>
                            </div>
                        </div>
                        <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                            ${[
                                { label: 'Fear & Greed', value: 72, color: 'text-neonTeal' },
                                { label: 'Liquidations', value: '$18.4M', color: 'text-sunsetCoral' },
                                { label: 'Open Interest', value: '$1.2B', color: 'text-electricBlue' },
                                { label: 'Funding', value: '0.018%', color: 'text-gold' }
                            ].map(box => `
                                <div class="bg-black/40 rounded-xl p-3 text-center">
                                    <p class="text-xs text-gray-400">${box.label}</p>
                                    <p class="text-lg font-bold ${box.color}">${box.value}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-3 space-y-4">
                    <div class="glass-card rounded-2xl p-5">
                        <h4 class="font-gaming font-bold mb-3">War Room</h4>
                        <div class="space-y-2 text-sm">
                            ${[
                                { name: 'WhaleKing', text: 'Scaling in at 43.1K. Stay tight.', tone: 'text-neonTeal' },
                                { name: 'Scout-Kira', text: 'Orderflow showing bid walls on Binance.', tone: 'text-gray-300' },
                                { name: 'RiskOps', text: 'TP1 in sight. Reduce leverage if needed.', tone: 'text-gold' }
                            ].map(msg => `
                                <div class="bg-black/40 rounded-xl p-3">
                                    <p class="text-xs ${msg.tone} font-semibold">${msg.name}</p>
                                    <p class="text-xs text-gray-300 mt-1">${msg.text}</p>
                                </div>
                            `).join('')}
                        </div>
                        <div class="mt-3 flex items-center gap-2">
                            <input type="text" placeholder="Team-only message..." class="flex-1 bg-black/40 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none">
                            <button class="px-3 py-2 rounded-xl bg-electricBlue text-deepSpace font-semibold squish-btn">Send</button>
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-5">
                        <h4 class="font-gaming font-bold mb-3">Top Contributors</h4>
                        <div class="space-y-2">
                            ${[
                                { name: 'Scout-Kira', value: 5400 },
                                { name: 'MacroHawk', value: 4200 },
                                { name: 'AeroFlux', value: 3600 },
                                { name: 'SignalNova', value: 2900 }
                            ].map(user => `
                                <div class="flex items-center justify-between bg-black/40 rounded-xl p-3 text-sm">
                                    <span>${user.name}</span>
                                    <span class="text-neonTeal font-semibold">${user.value}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="glass-card rounded-2xl p-5">
                        <h4 class="font-gaming font-bold mb-3">Paid Entry Lock</h4>
                        <div class="relative rounded-2xl overflow-hidden">
                            <div class="absolute inset-0 bg-gradient-to-br from-electricBlue/30 to-purpleGlow/20 blur-lg"></div>
                            <div class="relative bg-black/70 rounded-2xl p-4">
                                <p class="text-xs text-gray-400">Elite access required</p>
                                <p class="text-lg font-bold mt-1">Unlock Guild Command Center</p>
                                <div class="mt-3 flex items-center gap-2 text-xs text-gray-400">
                                    <span class="px-2 py-1 bg-black/50 rounded-full">Bonded Price: 11,025 USDT</span>
                                    <span class="px-2 py-1 bg-black/50 rounded-full">Scout Pass: Free</span>
                                </div>
                                <button class="mt-4 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn shadow-[0_12px_30px_rgba(168,85,247,0.3)] active:scale-95">
                                    Buy Pass
                                </button>
                                <div class="mt-3 text-xs text-gray-400">
                                    Scouts can receive free passes by contribution. Paid members share profit splits automatically.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <details class="lg:hidden fixed bottom-20 left-4 right-4 bg-deepSpace/95 border border-glassBorder rounded-2xl p-4 transition-transform translate-y-24 open:translate-y-0">
                <summary class="text-sm font-semibold cursor-pointer">Open War Room Chat</summary>
                <div class="mt-3 space-y-2 text-sm">
                    <div class="bg-black/40 rounded-xl p-3">
                        <p class="text-xs text-neonTeal font-semibold">WhaleKing</p>
                        <p class="text-xs text-gray-300 mt-1">TP1 close. Lock profits.</p>
                    </div>
                    <div class="bg-black/40 rounded-xl p-3">
                        <p class="text-xs text-gray-300">Scout-Kira: Bid walls holding.</p>
                    </div>
                    <input type="text" placeholder="Message team..." class="w-full bg-black/40 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none">
                </div>
            </details>

            <div>
                <h3 class="font-gaming font-bold text-xl mb-4">BROWSE GUILDS</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${MOCK_DATA.guilds.map(guild => `
                        <div class="glass-card rounded-2xl p-5 hover-lift cursor-pointer ${guild.isMember ? 'ring-2 ring-electricBlue' : ''}">
                            <div class="flex items-start gap-4 mb-4">
                                <div class="w-16 h-16 rounded-xl bg-gradient-to-br ${guild.color} flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="${guild.icon}" class="w-8 h-8"></i>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center gap-2 mb-1">
                                        <h4 class="font-bold text-lg">${guild.name}</h4>
                                        <span class="px-2 py-0.5 bg-purpleGlow/20 text-purpleGlow text-xs rounded-full">[${guild.tag}]</span>
                                        ${guild.isMember ? '<span class="px-2 py-0.5 bg-electricBlue/20 text-electricBlue text-xs rounded-full">Member</span>' : ''}
                                    </div>
                                    <p class="text-sm text-gray-400">${guild.description}</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-3 gap-2 mb-3 text-center">
                                <div>
                                    <p class="font-bold">${guild.members}/${guild.maxMembers}</p>
                                    <p class="text-xs text-gray-400">Members</p>
                                </div>
                                <div>
                                    <p class="font-bold">Lv.${guild.level}</p>
                                    <p class="text-xs text-gray-400">Level</p>
                                </div>
                                <div>
                                    <p class="font-bold text-gold">#${guild.level}</p>
                                    <p class="text-xs text-gray-400">Rank</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-1">
                                ${guild.perks.slice(0, 2).map(perk => `
                                    <span class="text-xs px-2 py-1 bg-black/30 rounded-full">${perk}</span>
                                `).join('')}
                            </div>
                            ${!guild.isMember ? `
                                <button class="w-full mt-3 px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn hover:bg-electricBlue/20">
                                    ${guild.members < guild.maxMembers ? 'Request to Join' : 'Guild Full'}
                                </button>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
};
