window.PAGES = window.PAGES || {};
window.PAGES.intelligence = () => {
    const data = window.ExchangeLogic || {};
    const sentiment = data.getSentimentClasses ? data.getSentimentClasses() : { shell: 'from-[#050b15] via-[#0b1220] to-[#05070f]', accent: 'text-electricBlue', glow: '', pill: 'bg-electricBlue/20 text-electricBlue' };
    const socialPosts = data.socialPosts || [];
    const sponsoredCoins = data.sponsoredCoins || [];
    const score = data.sentimentScore || 72;

    return `
        <div class="relative min-h-screen px-4 lg:px-8 py-6 pb-32 lg:pb-10 bg-gradient-to-br ${sentiment.shell}">
            <div id="exchange-confetti" class="pointer-events-none fixed inset-0 z-[70]"></div>
            <div class="max-w-7xl mx-auto space-y-6">
                <div class="glass-card rounded-3xl p-5 ${sentiment.glow}">
                    <div class="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p class="text-xs uppercase tracking-widest text-gray-400">SignalPulse: Intelligence Exchange</p>
                            <h1 class="text-2xl lg:text-3xl font-gaming font-bold">Community Intelligence Feed</h1>
                            <p class="text-sm text-gray-400 mt-1">Verified ideas, public evidence, and reward-driven validation</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <span class="text-xs px-3 py-1 rounded-full ${sentiment.pill}">Sentiment: ${data.marketSentiment || 'Fear'}</span>
                            <span class="text-xs px-3 py-1 rounded-full bg-black/40 text-gray-300">AI Confidence ${score}%</span>
                        </div>
                    </div>
                    <div class="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div class="bg-black/40 rounded-2xl p-3 text-center">
                            <p class="text-xs text-gray-400">Active Posts</p>
                            <p class="text-xl font-bold text-white">${socialPosts.length}</p>
                        </div>
                        <div class="bg-black/40 rounded-2xl p-3 text-center">
                            <p class="text-xs text-gray-400">Verified Rockets</p>
                            <p class="text-xl font-bold text-neonTeal">328</p>
                        </div>
                        <div class="bg-black/40 rounded-2xl p-3 text-center">
                            <p class="text-xs text-gray-400">Evidence Links</p>
                            <p class="text-xl font-bold text-electricBlue">142</p>
                        </div>
                        <div class="bg-black/40 rounded-2xl p-3 text-center">
                            <p class="text-xs text-gray-400">Community Score</p>
                            <p class="text-xl font-bold text-gold">8.7</p>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div class="lg:col-span-8 space-y-4">
                        <div class="glass-card rounded-2xl p-5">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="font-gaming font-bold">How it Pays</h3>
                                <button class="px-3 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn">Create Post</button>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm text-gray-300">
                                <div class="bg-black/40 rounded-xl p-3">
                                    <p class="font-semibold text-white">Publish Evidence</p>
                                    <p class="text-xs text-gray-400 mt-1">Share technical, rumor, or flow-based thesis.</p>
                                </div>
                                <div class="bg-black/40 rounded-xl p-3">
                                    <p class="font-semibold text-white">Community Verify</p>
                                    <p class="text-xs text-gray-400 mt-1">Rocket verify replaces likes for rewards.</p>
                                </div>
                                <div class="bg-black/40 rounded-xl p-3">
                                    <p class="font-semibold text-white">Earn Together</p>
                                    <p class="text-xs text-gray-400 mt-1">Author and verifiers share the payout.</p>
                                </div>
                            </div>
                        </div>

                        ${socialPosts.map(post => `
                            <div class="glass-card rounded-2xl p-5 space-y-4" data-verify-card>
                                <div class="flex items-start justify-between gap-4">
                                    <div>
                                        <div class="flex items-center gap-2">
                                            <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center font-bold text-white">${post.author.charAt(0)}</div>
                                            <div>
                                                <p class="text-sm font-semibold">${post.author}</p>
                                                <p class="text-xs text-gray-400">${post.handle}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="text-xs px-2 py-1 rounded-full bg-black/40 text-gray-300">${post.category}</span>
                                </div>
                                <div class="bg-black/40 rounded-2xl p-4">
                                    <div class="flex items-center justify-between">
                                        <h4 class="font-gaming font-bold text-lg">${post.coin}</h4>
                                        <span class="text-xs text-gray-400">Potential Uptrend</span>
                                    </div>
                                    <p class="text-sm text-gray-300 mt-2">${post.thesis}</p>
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        ${post.evidence.map(item => `
                                            <span class="text-[10px] px-2 py-1 rounded-full bg-black/60 text-gray-300">${item}</span>
                                        `).join('')}
                                    </div>
                                </div>
                                <div class="flex flex-wrap items-center gap-3">
                                    <button class="px-4 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn flex items-center gap-2" data-verify="true">
                                        <i data-lucide="rocket" class="w-4 h-4"></i>Rocket Verify
                                    </button>
                                    <span class="text-xs text-gray-400">+25 Truth XP</span>
                                    <span class="text-xs text-gray-400">${post.verifyCount} verifications</span>
                                    <span class="text-xs text-neonTeal">${post.reward}</span>
                                </div>
                                <div class="space-y-2">
                                    ${post.comments.map(comment => `
                                        <div class="bg-black/40 rounded-xl p-3 text-xs text-gray-300">
                                            <span class="font-semibold text-white">${comment.user}:</span> ${comment.text}
                                        </div>
                                    `).join('')}
                                    <input type="text" placeholder="Write a verification note..." class="w-full bg-black/60 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none">
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="lg:col-span-4 space-y-4">
                        <div class="glass-card rounded-2xl p-5">
                            <div class="flex items-center justify-between mb-3">
                                <h3 class="font-gaming font-bold">Sponsored Coins</h3>
                                <span class="text-xs px-2 py-1 rounded-full bg-gold/20 text-gold">Ads</span>
                            </div>
                            <div class="space-y-3">
                                ${sponsoredCoins.map(coin => `
                                    <div class="bg-black/40 rounded-2xl p-4">
                                        <div class="flex items-center justify-between">
                                            <div>
                                                <p class="text-sm font-semibold">${coin.coin}</p>
                                                <p class="text-xs text-gray-400">${coin.sponsor}</p>
                                            </div>
                                            <span class="text-[10px] px-2 py-1 rounded-full bg-gold/20 text-gold">${coin.label}</span>
                                        </div>
                                        <p class="text-xs text-gray-300 mt-2">${coin.pitch}</p>
                                        <div class="mt-3 space-y-2">
                                            ${coin.evidenceRequired.map(req => `
                                                <div class="text-[10px] px-2 py-1 rounded-full bg-black/60 text-gray-300">${req}</div>
                                            `).join('')}
                                        </div>
                                        <button class="mt-3 w-full px-3 py-2 rounded-xl bg-glass border border-glassBorder text-xs squish-btn">Share Evidence</button>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <div class="glass-card rounded-2xl p-5">
                            <h3 class="font-gaming font-bold mb-3">Post Evidence Modal</h3>
                            <div class="relative rounded-3xl overflow-hidden">
                                <div class="absolute inset-0 bg-black/70"></div>
                                <div class="relative z-10 p-5 bg-deepSpace/90 border border-glassBorder rounded-3xl">
                                    <div class="flex items-center justify-between mb-3">
                                        <h4 class="font-semibold">New Evidence Drop</h4>
                                        <button class="p-2 rounded-xl bg-black/40 text-gray-300">
                                            <i data-lucide="x" class="w-4 h-4"></i>
                                        </button>
                                    </div>
                                    <div class="space-y-3">
                                        <input type="text" placeholder="Asset / Contract" class="w-full bg-black/60 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none">
                                        <select class="w-full bg-black/60 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none">
                                            <option>Reason: Technical</option>
                                            <option>Reason: Rumor</option>
                                            <option>Reason: Flow</option>
                                            <option>Reason: Macro</option>
                                        </select>
                                        <textarea placeholder="Short thesis and evidence summary" class="w-full h-20 bg-black/60 border border-glassBorder rounded-xl px-3 py-2 text-xs outline-none"></textarea>
                                        <div class="grid grid-cols-2 gap-2">
                                            <button class="px-3 py-2 rounded-xl bg-glass border border-glassBorder text-xs squish-btn">Add Link</button>
                                            <button class="px-3 py-2 rounded-xl bg-glass border border-glassBorder text-xs squish-btn">Upload Shot</button>
                                        </div>
                                        <button class="w-full px-3 py-2 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn">
                                            Publish Evidence
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="exchange-thumb-zone lg:hidden fixed bottom-20 left-4 right-4 z-40">
                    <div class="glass-card rounded-2xl p-4 flex items-center justify-between gap-2">
                        <button class="flex-1 px-3 py-3 rounded-xl bg-glass border border-glassBorder text-xs squish-btn" data-verify="true">Verify +10 XP</button>
                        <button class="flex-1 px-3 py-3 rounded-xl bg-glass border border-glassBorder text-xs squish-btn" data-verify="true">Evidence +15 XP</button>
                        <button class="flex-1 px-3 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow text-xs font-semibold squish-btn" data-verify="true">Rocket +25 XP</button>
                    </div>
                </div>
            </div>
        </div>
    `;
};
