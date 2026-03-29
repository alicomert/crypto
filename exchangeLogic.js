window.ExchangeLogic = {
    marketSentiment: 'fear',
    sentimentScore: 78,
    socialPosts: [
        {
            id: 'post-01',
            author: 'SignalNova',
            handle: '@signalnova',
            coin: 'NOVA/USDT',
            thesis: 'Liquidity rotation + fresh wallet accumulation. Expect a 2-3 week momentum window.',
            evidence: ['On-chain cluster: 0xA7...92F', 'CEX inflow slowdown', 'Liquidity sweep confirmation'],
            category: 'Technical + On-chain',
            verifyCount: 128,
            reward: 'Split 60/40 on verified alpha',
            comments: [
                { user: 'MacroHawk', text: 'The wallet cluster matches a prior L2 rotation in Q4.' },
                { user: 'Scout-Kira', text: 'Social sentiment just flipped positive on KOL list.' }
            ]
        },
        {
            id: 'post-02',
            author: 'AeroFlux',
            handle: '@aeroflux',
            coin: 'ORBIT/USDT',
            thesis: 'Rumor: strategic partnership announcement teased in developer call.',
            evidence: ['Call timestamp 18:42', 'Repo activity spike', 'New wallet funding'],
            category: 'Rumor + Dev Signals',
            verifyCount: 64,
            reward: 'Viewers earn verify points',
            comments: [
                { user: 'ChartWiz', text: 'Funding rate stabilized; risk seems controlled.' }
            ]
        },
        {
            id: 'post-03',
            author: 'Zenith',
            handle: '@zenith',
            coin: 'LUMEN/USDT',
            thesis: 'Orderbook imbalance + whale sweep. Entry window forming.',
            evidence: ['Orderbook heatmap', 'Whale transfer log', 'Funding neutral'],
            category: 'Flow + Technical',
            verifyCount: 96,
            reward: 'Verified scouts earn gems',
            comments: []
        }
    ],
    sponsoredCoins: [
        {
            id: 'spon-01',
            coin: 'VOLT/USDT',
            sponsor: 'Volt Labs',
            pitch: 'Layer-2 infra with revenue-sharing staking.',
            evidenceRequired: ['Audit report', 'Token unlock schedule', 'On-chain liquidity snapshot'],
            label: 'Sponsored'
        },
        {
            id: 'spon-02',
            coin: 'ARC/USDT',
            sponsor: 'Arc Protocol',
            pitch: 'Bridge aggregator with MEV protection.',
            evidenceRequired: ['Bridge volume stats', 'Security bounty', 'Market maker agreement'],
            label: 'Sponsored'
        }
    ],
    pendingBounties: [
        {
            id: 'bounty-01',
            title: 'Suspicious Wallet Cluster',
            source: 'On-chain logs',
            tags: ['Whale', 'Bridge', 'Mixer'],
            evidence: ['https://etherscan.io', 'https://arkhamintelligence.com'],
            confidence: 62,
            steps: ['Verify Contract', 'Check Socials', 'Track Whale'],
            scout: 'Scout-Kira'
        },
        {
            id: 'bounty-02',
            title: 'New Exchange Listing Leak',
            source: 'Screenshots',
            tags: ['Listing', 'CEX', 'Hot'],
            evidence: ['https://imgur.com', 'https://x.com'],
            confidence: 54,
            steps: ['Verify Contract', 'Check Socials', 'Track Whale'],
            scout: 'AeroFlux'
        },
        {
            id: 'bounty-03',
            title: 'Macro Rotation Alert',
            source: 'Market data',
            tags: ['Rotation', 'AI', 'Risk'],
            evidence: ['https://tradingview.com', 'https://glassnode.com'],
            confidence: 71,
            steps: ['Verify Contract', 'Check Socials', 'Track Whale'],
            scout: 'MacroHawk'
        }
    ],
    verifiedLeads: [
        {
            id: 'lead-01',
            title: 'Stablecoin Mint Surge',
            aiScore: 84,
            communityScore: 91,
            outcome: '+4.2% ROI'
        },
        {
            id: 'lead-02',
            title: 'Layer2 Liquidity Migration',
            aiScore: 78,
            communityScore: 86,
            outcome: '+2.8% ROI'
        }
    ],
    guildPositions: [
        { pair: 'BTC/USDT', side: 'Long', entry: 43120, pnl: 2.4, status: 'Live' },
        { pair: 'ETH/USDT', side: 'Short', entry: 2310, pnl: 1.1, status: 'Syncing' },
        { pair: 'SOL/USDT', side: 'Long', entry: 112.4, pnl: 0.6, status: 'Live' }
    ]
};

window.ExchangeLogic.getSentimentClasses = function() {
    const sentiment = window.ExchangeLogic?.marketSentiment || 'fear';
    if (sentiment === 'greed') {
        return {
            shell: 'from-[#07131f] via-[#0a1a24] to-[#1a0b07]',
            accent: 'text-neonTeal',
            glow: 'shadow-[0_0_40px_rgba(255,122,0,0.3)]',
            pill: 'bg-neonTeal/20 text-neonTeal'
        };
    }
    return {
        shell: 'from-[#050b15] via-[#0b1220] to-[#05070f]',
        accent: 'text-electricBlue',
        glow: 'shadow-[0_0_40px_rgba(0,212,255,0.25)]',
        pill: 'bg-electricBlue/20 text-electricBlue'
    };
};

window.ExchangeLogic.triggerConfetti = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const fragment = document.createDocumentFragment();
    const colors = ['#00D4FF', '#A855F7', '#FF6B6B', '#39FF14', '#FFD700'];
    for (let i = 0; i < 24; i += 1) {
        const piece = document.createElement('span');
        piece.className = 'exchange-confetti';
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDelay = `${Math.random() * 0.2}s`;
        fragment.appendChild(piece);
    }
    container.appendChild(fragment);
    setTimeout(() => {
        container.querySelectorAll('.exchange-confetti').forEach(node => node.remove());
    }, 1200);
};

document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-verify]');
    if (!button) return;
    const card = button.closest('[data-verify-card]');
    button.classList.add('exchange-verify-pulse');
    setTimeout(() => button.classList.remove('exchange-verify-pulse'), 320);
    if (card) {
        card.classList.add('exchange-verified-glow');
        setTimeout(() => card.classList.remove('exchange-verified-glow'), 900);
        window.ExchangeLogic.triggerConfetti('exchange-confetti');
    }
});
