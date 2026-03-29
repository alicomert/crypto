// ========================================
// SIGNALPULSE ARENA - MASTER APPLICATION
// Gaming-Themed Crypto Battle Platform
// ========================================

// ========== GLOBAL STATE ==========
const AppState = {
    currentPage: 'dashboard',
    user: {
        id: 1,
        username: 'CryptoNinja',
        displayName: 'Crypto Ninja',
        level: 42,
        xp: 7850,
        xpToNext: 10000,
        gems: 1247,
        gold: 8450,
        streak: 7,
        rank: 156,
        totalPredictions: 892,
        accuracy: 87.5,
        badges: ['rising-star', 'week-warrior', 'prediction-master'],
        achievements: [],
        battles: { wins: 34, losses: 12, winRate: 74 },
        seasonPassLevel: 23,
        isPremium: true
    },
    notifications: [],
    loadingProgress: 0
};

// ========== MOCK DATA ==========

const MOCK_DATA = {
    // Dashboard Stats
    stats: {
        todayPredictions: 12,
        weeklyPredictions: 67,
        totalGemsEarned: 1247,
        activeEvents: 3,
        upcomingBattles: 2,
        currentCombo: 5,
        maxCombo: 15,
        totalLootBoxes: 8,
        guildId: 1
    },

    // Loot Boxes
    lootBoxes: [
        {
            id: 1,
            name: 'Common Box',
            rarity: 'common',
            price: { gems: 50, gold: 0 },
            items: ['+50 XP', '25 Gems', 'Common Card'],
            icon: 'package',
            color: 'from-gray-500 to-gray-600'
        },
        {
            id: 2,
            name: 'Rare Box',
            rarity: 'rare',
            price: { gems: 200, gold: 500 },
            items: ['+200 XP', '100 Gems', '50 Gold', 'Rare Card', '3 Day Streak Protection'],
            icon: 'gift',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 3,
            name: 'Epic Box',
            rarity: 'epic',
            price: { gems: 500, gold: 2000 },
            items: ['+500 XP', '250 Gems', '200 Gold', 'Epic Card', 'Title: Collector', 'XP Boost 24h'],
            icon: 'sparkles',
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 4,
            name: 'Legendary Box',
            rarity: 'legendary',
            price: { gems: 1500, gold: 5000 },
            items: ['+1000 XP', '500 Gems', '500 Gold', 'Legendary Card', 'Exclusive Avatar', 'Permanent XP Boost', 'Guild XP Boost'],
            icon: 'crown',
            color: 'from-yellow-400 to-orange-500'
        }
    ],

    // Collectible Cards
    cards: [
        { id: 1, name: 'Bitcoin Bull', rarity: 'legendary', image: '₿', bonus: '+5% BTC accuracy', owned: true, level: 3 },
        { id: 2, name: 'Ether Master', rarity: 'epic', image: 'Ξ', bonus: '+3% ETH accuracy', owned: true, level: 2 },
        { id: 3, name: 'Solana Surge', rarity: 'rare', image: '◎', bonus: '+2% SOL accuracy', owned: true, level: 1 },
        { id: 4, name: 'Whale Watcher', rarity: 'epic', image: '🐋', bonus: '+10% whale predictions', owned: false },
        { id: 5, name: 'Diamond Hands', rarity: 'legendary', image: '💎', bonus: 'Streak protection x1', owned: false },
        { id: 6, name: 'Moon Boy', rarity: 'rare', image: '🚀', bonus: '+2x combo duration', owned: false },
        { id: 7, name: 'FUD Destroyer', rarity: 'epic', image: '🛡️', bonus: '+5% all predictions', owned: false },
        { id: 8, name: 'Satoshi Spirit', rarity: 'legendary', image: '⚡', bonus: '+10% gems earned', owned: false },
        { id: 9, name: 'Chart Wizard', rarity: 'rare', image: '📊', bonus: 'Unlock advanced charts', owned: true, level: 1 },
        { id: 10, name: 'Bear Slayer', rarity: 'epic', image: '🐻', bonus: '+5% bear market predictions', owned: false }
    ],

    // Guilds/Clans
    guilds: [
        {
            id: 1,
            name: 'Crypto Whales',
            tag: 'WHALE',
            leader: 'WhaleKing',
            members: 47,
            maxMembers: 50,
            level: 15,
            xp: 125000,
            description: 'Elite traders hunting whale movements together',
            achievements: ['Season 2 Champions', 'Most Accurate Guild'],
            perks: ['+5% gems', '+10% guild XP', 'Exclusive signals'],
            icon: 'waves',
            color: 'from-blue-500 to-cyan-500',
            isMember: true,
            memberRole: 'Officer'
        },
        {
            id: 2,
            name: 'Diamond Hands',
            tag: 'DH',
            leader: 'HODLmaster',
            members: 124,
            maxMembers: 150,
            level: 22,
            xp: 245000,
            description: 'True believers never selling',
            achievements: ['Largest Guild', 'Best Streak Record'],
            perks: ['+10% streak protection', 'Weekly bonus pool'],
            icon: 'diamond',
            color: 'from-purple-500 to-pink-500',
            isMember: false
        },
        {
            id: 3,
            name: 'Prediction Masters',
            tag: 'PRED',
            leader: 'OracleX',
            members: 89,
            maxMembers: 100,
            level: 18,
            xp: 189000,
            description: 'Accuracy is everything',
            achievements: ['Highest Accuracy Season 1'],
            perks: ['+3% accuracy boost', 'Premium analytics'],
            icon: 'target',
            color: 'from-green-500 to-emerald-500',
            isMember: false
        },
        {
            id: 4,
            name: 'Moon Chasers',
            tag: 'MOON',
            leader: 'ToTheMoon',
            members: 67,
            maxMembers: 75,
            level: 12,
            xp: 98000,
            description: 'Always aiming for the moon!',
            achievements: ['Fastest Growing'],
            perks: ['+2x event rewards'],
            icon: 'rocket',
            color: 'from-orange-500 to-red-500',
            isMember: false
        }
    ],

    // Guild Referral System
    guildReferral: {
        referralCode: 'WHALE2024',
        totalReferrals: 12,
        activeReferrals: 8,
        earnedFromReferrals: { gems: 2400, gold: 12000 },
        referralBonus: { perSignup: { gems: 200, gold: 1000 }, perPremium: { gems: 500, gold: 2500 } }
    },

    // Combo/Streak Multiplier
    comboSystem: {
        currentCombo: 5,
        maxCombo: 15,
        comboMultiplier: 1.5,
        comboStartTime: '2 hours ago',
        comboEndsIn: '43 minutes',
        multipliers: [
            { combo: 3, multiplier: 1.2 },
            { combo: 5, multiplier: 1.5 },
            { combo: 10, multiplier: 2.0 },
            { combo: 15, multiplier: 2.5 },
            { combo: 20, multiplier: 3.0 }
        ],
        bonusHistory: [
            { date: 'Today', combo: 5, bonusGems: 75, bonusXP: 150 },
            { date: 'Yesterday', combo: 8, bonusGems: 120, bonusXP: 240 },
            { date: '2 days ago', combo: 12, bonusGems: 180, bonusXP: 360 }
        ]
    },

    // Live Battle Matches
    liveBattles: [
        {
            id: 1,
            player1: { username: 'CryptoKing', avatar: 'from-purple-500 to-pink-500', predictions: 1456, accuracy: 92 },
            player2: { username: 'TradingMaster', avatar: 'from-blue-500 to-cyan-500', predictions: 1234, accuracy: 89 },
            token: 'BTC/USD',
            currentPrice: 43250,
            entryPrice: 42800,
            timeLeft: '2h 34m',
            status: 'active',
            viewers: 1234
        },
        {
            id: 2,
            player1: { username: 'WhaleHunter', avatar: 'from-green-500 to-emerald-500', predictions: 987, accuracy: 88 },
            player2: { username: 'BearSlayer', avatar: 'from-red-500 to-orange-500', predictions: 876, accuracy: 91 },
            token: 'ETH/USD',
            currentPrice: 2280,
            entryPrice: 2250,
            timeLeft: '1h 12m',
            status: 'active',
            viewers: 892
        }
    ],

    // Active Events
    events: [
        {
            id: 1,
            title: 'Weekend Warrior Challenge',
            description: 'Make 50 accurate predictions this weekend to win exclusive rewards!',
            type: 'weekly',
            status: 'active',
            startDate: '2024-01-20',
            endDate: '2024-01-22',
            reward: { gems: 500, gold: 2000, badge: 'weekend-warrior' },
            participants: 1247,
            progress: { current: 34, total: 50 },
            icon: 'swords'
        },
        {
            id: 2,
            title: 'BTC Prediction Master',
            description: 'Achieve 90%+ accuracy on Bitcoin predictions this week',
            type: 'special',
            status: 'active',
            startDate: '2024-01-19',
            endDate: '2024-01-26',
            reward: { gems: 1000, gold: 5000, title: 'BTC Oracle' },
            participants: 523,
            progress: { current: 8, total: 10 },
            icon: 'bitcoin'
        },
        {
            id: 3,
            title: 'Newcomer Blitz',
            description: 'Complete your first 10 predictions and unlock the beginner badge!',
            type: 'daily',
            status: 'active',
            startDate: '2024-01-20',
            endDate: '2024-01-21',
            reward: { gems: 100, gold: 500, badge: 'first-steps' },
            participants: 89,
            progress: { current: 10, total: 10 },
            icon: 'rocket'
        },
        {
            id: 4,
            title: 'Whale Watch Event',
            description: 'Track and predict whale movements. Top analysts win big!',
            type: 'weekly',
            status: 'coming',
            startDate: '2024-01-25',
            endDate: '2024-01-28',
            reward: { gems: 1500, gold: 10000, nft: 'Whale Hunter NFT' },
            participants: 0,
            icon: 'waves'
        }
    ],

    // Quests
    quests: [
        {
            id: 1,
            title: 'Daily Predictor',
            description: 'Make 5 predictions today',
            type: 'daily',
            reward: { gems: 50, xp: 100 },
            progress: 3,
            total: 5,
            difficulty: 'easy',
            status: 'active'
        },
        {
            id: 2,
            title: 'Accuracy Champion',
            description: 'Achieve 85% accuracy on 10 predictions',
            type: 'weekly',
            reward: { gems: 200, xp: 500, gold: 500 },
            progress: 7,
            total: 10,
            difficulty: 'medium',
            status: 'active'
        },
        {
            id: 3,
            title: 'Token Specialist',
            description: 'Make accurate predictions for 5 different tokens',
            type: 'weekly',
            reward: { gems: 150, xp: 300 },
            progress: 2,
            total: 5,
            difficulty: 'medium',
            status: 'active'
        },
        {
            id: 4,
            title: 'Battle Victor',
            description: 'Win 3 prediction battles',
            type: 'weekly',
            reward: { gems: 300, xp: 750, gold: 1000 },
            progress: 1,
            total: 3,
            difficulty: 'hard',
            status: 'active'
        },
        {
            id: 5,
            title: 'Perfect Day',
            description: 'Get 10 predictions correct in a row',
            type: 'special',
            reward: { gems: 500, xp: 1000, gold: 2000 },
            progress: 0,
            total: 10,
            difficulty: 'legendary',
            status: 'active'
        }
    ],

    // Signals
    signals: [
        {
            id: 1,
            token: 'BTC',
            tokenName: 'Bitcoin',
            price: 43250.00,
            change24h: 2.34,
            sentiment: 'bullish',
            confidence: 87,
            aiSummary: 'Strong accumulation detected at $42K support. Whale activity up 340% in the last 24h. RSI showing oversold conditions.',
            predictions: { bullish: 1247, bearish: 234 },
            timeAgo: '2h ago',
            rarity: 'legendary',
            badges: ['high-conviction', 'whale-alert']
        },
        {
            id: 2,
            token: 'ETH',
            tokenName: 'Ethereum',
            price: 2280.50,
            change24h: -1.23,
            sentiment: 'neutral',
            confidence: 65,
            aiSummary: 'Consolidation phase continues. Layer 2 TVL reaching new ATH. Options flow showing mixed signals.',
            predictions: { bullish: 892, bearish: 756 },
            timeAgo: '4h ago',
            rarity: 'rare',
            badges: []
        },
        {
            id: 3,
            token: 'SOL',
            tokenName: 'Solana',
            price: 98.45,
            change24h: 8.92,
            sentiment: 'bullish',
            confidence: 92,
            aiSummary: 'Explosive breakout confirmed! DeFi ecosystem surge driving momentum. NFT volume up 520% this week.',
            predictions: { bullish: 2134, bearish: 156 },
            timeAgo: '45m ago',
            rarity: 'epic',
            badges: ['trending', 'high-conviction']
        }
    ],

    // Leaderboard
    leaderboard: [
        { rank: 1, username: 'CryptoOracle', displayName: 'Crypto Oracle', accuracy: 94.7, predictions: 1247, streak: 23, badges: ['legendary'], avatar: 'from-yellow-400 to-orange-500', xp: 156000 },
        { rank: 2, username: 'signal_king', displayName: 'Signal King', accuracy: 92.3, predictions: 982, streak: 15, badges: ['epic'], avatar: 'from-purple-500 to-pink-500', xp: 142000 },
        { rank: 3, username: 'ai_master', displayName: 'AI Master', accuracy: 91.8, predictions: 1456, streak: 31, badges: ['epic'], avatar: 'from-blue-500 to-cyan-400', xp: 138000 },
        { rank: 4, username: 'defi_ninja', displayName: 'DeFi Ninja', accuracy: 89.2, predictions: 834, streak: 8, badges: ['rare'], avatar: 'from-green-500 to-emerald-400', xp: 125000 },
        { rank: 5, username: 'btc_believer', displayName: 'BTC Believer', accuracy: 88.9, predictions: 2134, streak: 12, badges: ['rare'], avatar: 'from-orange-500 to-red-500', xp: 118000 },
        { rank: 156, username: 'CryptoNinja', displayName: 'You', accuracy: 87.5, predictions: 892, streak: 7, badges: [], avatar: 'from-electricBlue to-purpleGlow', xp: 7850, isCurrentUser: true },
    ],

    // Season Pass Rewards
    seasonPass: {
        season: 3,
        seasonName: 'Crypto Legends',
        endDate: '2024-02-28',
        currentLevel: 23,
        maxLevel: 100,
        freeRewards: [
            { level: 1, gems: 50 },
            { level: 5, gems: 100, gold: 500 },
            { level: 10, gems: 200, gold: 1000, badge: 'season-3-starter' },
            { level: 15, gems: 300, gold: 2000 },
            { level: 20, gems: 500, gold: 3000, title: 'Season Veteran' }
        ],
        premiumRewards: [
            { level: 1, gems: 100, gold: 500 },
            { level: 5, gems: 200, gold: 1000, avatar: 'exclusive-1' },
            { level: 10, gems: 400, gold: 2000, badge: 'season-3-elite', nft: 'starter-pack' },
            { level: 15, gems: 600, gold: 4000, title: 'Elite Predictor' },
            { level: 20, gems: 1000, gold: 6000, avatar: 'exclusive-2', bonus: '5% xp boost' }
        ]
    },

    // Achievements
    achievements: [
        { id: 1, title: 'First Prediction', description: 'Make your first prediction', icon: 'target', rarity: 'common', unlocked: true },
        { id: 2, title: 'Week Warrior', description: 'Login 7 days in a row', icon: 'flame', rarity: 'rare', unlocked: true },
        { id: 3, title: 'Prediction Master', description: 'Make 100 accurate predictions', icon: 'award', rarity: 'epic', unlocked: true },
        { id: 4, title: 'Battle Champion', description: 'Win 10 prediction battles', icon: 'trophy', rarity: 'epic', unlocked: false },
        { id: 5, title: 'Legendary Status', description: 'Reach Level 50', icon: 'crown', rarity: 'legendary', unlocked: false },
        { id: 6, title: 'Whale Hunter', description: 'Correctly predict 5 whale movements', icon: 'waves', rarity: 'rare', unlocked: false },
        { id: 7, title: 'Perfect Day', description: 'Get 10 predictions correct in a row', icon: 'zap', rarity: 'legendary', unlocked: false },
        { id: 8, title: 'Token Expert', description: 'Master predictions for 10 different tokens', icon: 'coins', rarity: 'epic', unlocked: false }
    ],

    // Recent Activity
    recentActivity: [
        { type: 'prediction', message: 'You predicted BTC will go up', time: '2m ago', result: 'pending' },
        { type: 'achievement', message: 'You unlocked "Week Warrior"!', time: '1h ago', result: 'success' },
        { type: 'quest', message: 'Quest completed: Daily Predictor', time: '3h ago', result: 'success' },
        { type: 'battle', message: 'You won a battle against TraderX', time: '5h ago', result: 'success' },
        { type: 'reward', message: 'You earned 150 gems', time: '6h ago', result: 'success' },
        { type: 'lootbox', message: 'Opened Rare Box + got Epic Card!', time: '1d ago', result: 'success' },
        { type: 'guild', message: 'Guild earned +5000 XP', time: '2d ago', result: 'success' }
    ],

    // Detailed Analytics
    analytics: {
        overview: {
            totalPredictions: 892,
            correctPredictions: 781,
            accuracy: 87.5,
            totalGemsEarned: 45230,
            totalGoldEarned: 125000,
            bestStreak: 14,
            currentStreak: 7,
            avgDailyPredictions: 12.4
        },
        byToken: [
            { token: 'BTC', predictions: 234, accuracy: 91.2, profit: '+2,340 gems' },
            { token: 'ETH', predictions: 189, accuracy: 88.5, profit: '+1,560 gems' },
            { token: 'SOL', predictions: 156, accuracy: 85.3, profit: '+1,120 gems' },
            { token: 'AVAX', predictions: 98, accuracy: 82.1, profit: '+560 gems' },
            { token: 'LINK', predictions: 87, accuracy: 89.4, profit: '+680 gems' },
            { token: 'Others', predictions: 128, accuracy: 84.7, profit: '+890 gems' }
        ],
        sentimentAccuracy: {
            bullish: { predictions: 456, accuracy: 89.2 },
            bearish: { predictions: 234, accuracy: 86.5 },
            neutral: { predictions: 202, accuracy: 81.3 }
        },
        timeOfDay: [
            { period: 'Morning (6-12)', predictions: 234, accuracy: 88.5 },
            { period: 'Afternoon (12-18)', predictions: 345, accuracy: 87.2 },
            { period: 'Evening (18-24)', predictions: 267, accuracy: 86.8 },
            { period: 'Night (0-6)', predictions: 46, accuracy: 82.1 }
        ],
        weeklyProgress: [
            { week: 'Week 1', predictions: 89, accuracy: 84.5 },
            { week: 'Week 2', predictions: 124, accuracy: 86.2 },
            { week: 'Week 3', predictions: 156, accuracy: 87.8 },
            { week: 'Week 4', predictions: 145, accuracy: 89.1 },
            { week: 'This Week', predictions: 112, accuracy: 87.5 }
        ],
        earningHistory: [
            { period: 'Jan 15', gems: 450, gold: 1200 },
            { period: 'Jan 16', gems: 680, gold: 1800 },
            { period: 'Jan 17', gems: 520, gold: 1400 },
            { period: 'Jan 18', gems: 890, gold: 2400 },
            { period: 'Jan 19', gems: 720, gold: 1900 },
            { period: 'Jan 20', gems: 950, gold: 2600 },
            { period: 'Today', gems: 340, gold: 900 }
        ]
    },

    // Extended Profile Stats
    extendedProfile: {
        joinDate: 'January 15, 2024',
        totalPlayTime: '234 hours',
        favoriteToken: 'BTC',
        bestDay: 'Jan 19, 2024',
        bestDayEarnings: { gems: 950, gold: 2600 },
        totalBattles: 46,
        battleWinRate: 74,
        guildContributions: 12500,
        referrals: 12,
        cardsCollected: 4,
        cardsTotal: 10,
        lootBoxesOpened: 23,
        rareItemsFound: 8,
        titles: ['Rising Star', 'Week Warrior', 'Prediction Master', 'Collector'],
        equippedCard: { id: 1, name: 'Bitcoin Bull', bonus: '+5% BTC accuracy' }
    }
};

// ========== PAGE TEMPLATES ==========

const INLINE_PAGES = {
    dashboard: () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <!-- Welcome Banner -->
            <div class="glass-card rounded-3xl p-6 bg-gradient-to-r from-electricBlue/10 via-purpleGlow/10 to-pink-500/10 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-electricBlue/20 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold mb-2">Welcome back, ${AppState.user.displayName}! 🎮</h1>
                    <p class="text-gray-400 mb-4">Your battle arena awaits. Current streak: <span class="text-orange-400 font-bold">${AppState.user.streak} days</span> on fire!</p>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="navigateTo('arena')" class="px-6 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn hover:shadow-lg hover:shadow-electricBlue/30">
                            <i data-lucide="swords" class="w-5 h-5 inline mr-2"></i>Enter Arena
                        </button>
                        <button onclick="navigateTo('events')" class="px-6 py-3 rounded-xl bg-glass border border-glassBorder font-semibold squish-btn hover:bg-glass/80">
                            <i data-lucide="trophy" class="w-5 h-5 inline mr-2"></i>View Events
                        </button>
                    </div>
                </div>
            </div>

            <!-- Stats Bento Grid -->
            <div class="bento-grid">
                <div class="bento-2x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center justify-between mb-3">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-neonTeal/20 to-electricBlue/20 flex items-center justify-center">
                                <i data-lucide="crosshair" class="w-6 h-6 text-neonTeal"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Today's Predictions</p>
                                <p class="text-2xl font-bold">${MOCK_DATA.stats.todayPredictions}</p>
                            </div>
                        </div>
                        <span class="text-neonTeal text-sm font-semibold">+3</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill progress-fill-green" style="width: 60%"></div>
                    </div>
                </div>

                <div class="bento-1x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center gap-3 mb-2">
                        <i data-lucide="gem" class="w-8 h-8 text-neonTeal"></i>
                        <div>
                            <p class="text-2xl font-bold">${AppState.user.gems.toLocaleString()}</p>
                            <p class="text-xs text-gray-400">Gems</p>
                        </div>
                    </div>
                </div>

                <div class="bento-1x1 glass-card rounded-2xl p-5 hover-lift">
                    <div class="flex items-center gap-3 mb-2">
                        <i data-lucide="coins" class="w-8 h-8 text-gold"></i>
                        <div>
                            <p class="text-2xl font-bold">${AppState.user.gold.toLocaleString()}</p>
                            <p class="text-xs text-gray-400">Gold</p>
                        </div>
                    </div>
                </div>

                <div class="bento-2x1 glass-card rounded-2xl p-5 hover-lift bg-gradient-to-br from-orange-500/10 to-red-500/10">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                                <i data-lucide="flame" class="w-6 h-6 text-orange-400 animate-pulse"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-400">Daily Streak</p>
                                <p class="text-2xl font-bold text-orange-400">${AppState.user.streak} Days</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-400">Best: 14 days</p>
                        </div>
                    </div>
                </div>

                <div class="bento-2x2 legendary-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="trophy" class="w-5 h-5 text-gold"></i>
                        <h3 class="font-gaming font-bold gradient-text-gold">ACTIVE EVENTS</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.events.slice(0, 3).map(event => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="navigateTo('events')">
                                <div class="flex items-start justify-between mb-2">
                                    <div class="flex-1">
                                        <p class="font-semibold text-sm">${event.title}</p>
                                        <p class="text-xs text-gray-400">${event.participants.toLocaleString()} participants</p>
                                    </div>
                                    <span class="px-2 py-1 text-xs rounded-full ${event.status === 'active' ? 'bg-neonTeal/20 text-neonTeal' : 'bg-gray-500/20 text-gray-400'}">${event.type}</span>
                                </div>
                                <div class="progress-bar h-2">
                                    <div class="progress-fill" style="width: ${(event.progress.current / event.progress.total) * 100}%"></div>
                                </div>
                                <p class="text-xs text-gray-400 mt-1">${event.progress.current}/${event.progress.total} completed</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bento-2x1 epic-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="swords" class="w-5 h-5 text-purpleGlow"></i>
                        <h3 class="font-gaming font-bold">LIVE BATTLES</h3>
                    </div>
                    <div class="space-y-2">
                        ${MOCK_DATA.liveBattles.slice(0, 2).map(battle => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="openBattleModal(${battle.id})">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-6 h-6 rounded-full bg-gradient-to-br ${battle.player1.avatar}"></div>
                                        <span class="vs-badge text-sm">VS</span>
                                        <div class="w-6 h-6 rounded-full bg-gradient-to-br ${battle.player2.avatar}"></div>
                                    </div>
                                    <span class="text-xs text-gray-400">${battle.timeLeft}</span>
                                </div>
                                <p class="text-sm font-semibold">${battle.token}</p>
                                <div class="flex items-center gap-2 mt-1">
                                    <i data-lucide="eye" class="w-3 h-3 text-gray-400"></i>
                                    <span class="text-xs text-gray-400">${battle.viewers} watching</span>
                                    <span class="ml-auto text-xs text-red-400 animate-pulse">● LIVE</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Quick Quests -->
            <div class="glass-card rounded-2xl p-5">
                <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-2">
                        <i data-lucide="map" class="w-5 h-5 text-electricBlue"></i>
                        <h3 class="font-gaming font-bold">ACTIVE QUESTS</h3>
                    </div>
                    <button onclick="navigateTo('quests')" class="text-sm text-electricBlue hover:underline">View All</button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${MOCK_DATA.quests.slice(0, 3).map(quest => `
                        <div class="quest-card ${quest.type} bg-black/30 rounded-xl p-4 hover-lift cursor-pointer">
                            <div class="flex items-start justify-between mb-2">
                                <h4 class="font-semibold text-sm">${quest.title}</h4>
                                <span class="text-xs px-2 py-1 rounded-full ${
                                    quest.difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
                                    quest.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                }">${quest.difficulty}</span>
                            </div>
                            <p class="text-xs text-gray-400 mb-3">${quest.description}</p>
                            <div class="progress-bar h-2 mb-2">
                                <div class="progress-fill" style="width: ${(quest.progress / quest.total) * 100}%"></div>
                            </div>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-400">${quest.progress}/${quest.total}</span>
                                <span class="text-neonTeal">+${quest.reward.gems} <i data-lucide="gem" class="w-3 h-3 inline"></i></span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Recent Activity Feed -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div class="lg:col-span-2 glass-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="activity" class="w-5 h-5 text-purpleGlow"></i>
                        <h3 class="font-gaming font-bold">RECENT ACTIVITY</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.recentActivity.map(activity => `
                            <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all">
                                <div class="w-10 h-10 rounded-full ${
                                    activity.result === 'success' ? 'bg-neonTeal/20' :
                                    activity.result === 'pending' ? 'bg-yellow-500/20' :
                                    'bg-red-500/20'
                                } flex items-center justify-center">
                                    <i data-lucide="${
                                        activity.type === 'prediction' ? 'crosshair' :
                                        activity.type === 'achievement' ? 'award' :
                                        activity.type === 'quest' ? 'map' :
                                        activity.type === 'battle' ? 'swords' :
                                        'gift'
                                    }" class="w-5 h-5 ${
                                        activity.result === 'success' ? 'text-neonTeal' :
                                        activity.result === 'pending' ? 'text-yellow-500' :
                                        'text-red-500'
                                    }"></i>
                                </div>
                                <div class="flex-1">
                                    <p class="text-sm">${activity.message}</p>
                                    <p class="text-xs text-gray-400">${activity.time}</p>
                                </div>
                                ${activity.result === 'success' ? '<i data-lucide="check-circle" class="w-5 h-5 text-neonTeal"></i>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="glass-card rounded-2xl p-5">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="radar" class="w-5 h-5 text-electricBlue"></i>
                        <h3 class="font-gaming font-bold">HOT SIGNALS</h3>
                    </div>
                    <div class="space-y-3">
                        ${MOCK_DATA.signals.slice(0, 3).map(signal => `
                            <div class="bg-black/30 rounded-xl p-3 hover-lift cursor-pointer" onclick="navigateTo('signals')">
                                <div class="flex items-center justify-between mb-2">
                                    <div class="flex items-center gap-2">
                                        <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center font-bold text-xs">${signal.token}</div>
                                        <span class="font-semibold text-sm">${signal.tokenName}</span>
                                    </div>
                                    <span class="text-xs px-2 py-1 rounded-full ${
                                        signal.sentiment === 'bullish' ? 'bg-neonTeal/20 text-neonTeal' :
                                        signal.sentiment === 'bearish' ? 'bg-red-500/20 text-red-500' :
                                        'bg-gray-500/20 text-gray-400'
                                    }">${signal.sentiment}</span>
                                </div>
                                <div class="flex items-center justify-between text-xs">
                                    <span class="text-gray-400">${signal.confidence}% confidence</span>
                                    <span class="${signal.change24h >= 0 ? 'text-neonTeal' : 'text-red-500'}">${signal.change24h >= 0 ? '+' : ''}${signal.change24h}%</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `,

    arena: () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <!-- Arena Header -->
            <div class="text-center mb-8">
                <h1 class="text-3xl lg:text-4xl font-gaming font-bold gradient-text mb-2">BATTLE ARENA</h1>
                <p class="text-gray-400">Compete head-to-head with other traders</p>
            </div>

            <!-- Quick Match Button -->
            <div class="glass-card rounded-3xl p-8 text-center battle-card">
                <div class="max-w-md mx-auto">
                    <div class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center neon-glow-blue">
                        <i data-lucide="swords" class="w-12 h-12"></i>
                    </div>
                    <h2 class="text-2xl font-gaming font-bold mb-3">READY TO BATTLE?</h2>
                    <p class="text-gray-400 mb-6">Find a worthy opponent and test your prediction skills</p>
                    <button onclick="findMatch()" class="px-8 py-4 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-bold text-lg squish-btn hover:shadow-lg hover:shadow-electricBlue/30 w-full sm:w-auto">
                        <i data-lucide="zap" class="w-5 h-5 inline mr-2"></i>FIND MATCH
                    </button>
                    <div class="mt-4 text-sm text-gray-400">
                        <i data-lucide="users" class="w-4 h-4 inline mr-1"></i>
                        <span id="online-count">1,247</span> players online
                    </div>
                </div>
            </div>

            <!-- Live Battles -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                ${MOCK_DATA.liveBattles.map(battle => `
                    <div class="glass-card rounded-2xl p-5 hover-lift cursor-pointer" onclick="openBattleModal(${battle.id})">
                        <div class="flex items-center justify-between mb-4">
                            <div class="flex items-center gap-2">
                                <span class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
                                <span class="text-sm font-semibold text-red-400">LIVE</span>
                            </div>
                            <span class="text-sm text-gray-400">${battle.timeLeft} left</span>
                        </div>

                        <div class="flex items-center justify-between mb-4">
                            <!-- Player 1 -->
                            <div class="flex-1 text-center">
                                <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${battle.player1.avatar} mb-2 flex items-center justify-center text-2xl font-bold">
                                    ${battle.player1.username.charAt(0)}
                                </div>
                                <p class="font-semibold text-sm">${battle.player1.username}</p>
                                <p class="text-xs text-gray-400">${battle.player1.accuracy}% accuracy</p>
                            </div>

                            <!-- VS -->
                            <div class="px-4">
                                <span class="vs-badge text-3xl">VS</span>
                                <p class="text-center text-xs text-gray-400 mt-1">${battle.token}</p>
                            </div>

                            <!-- Player 2 -->
                            <div class="flex-1 text-center">
                                <div class="w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${battle.player2.avatar} mb-2 flex items-center justify-center text-2xl font-bold">
                                    ${battle.player2.username.charAt(0)}
                                </div>
                                <p class="font-semibold text-sm">${battle.player2.username}</p>
                                <p class="text-xs text-gray-400">${battle.player2.accuracy}% accuracy</p>
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-sm border-t border-glassBorder pt-3">
                            <span class="text-gray-400">$${battle.currentPrice.toLocaleString()}</span>
                            <div class="flex items-center gap-2">
                                <i data-lucide="eye" class="w-4 h-4 text-gray-400"></i>
                                <span>${battle.viewers} watching</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <!-- Battle Modes -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="gamepad-2" class="w-5 h-5 text-purpleGlow"></i>
                    BATTLE MODES
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-electricBlue/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-electricBlue/20 flex items-center justify-center mb-3">
                            <i data-lucide="zap" class="w-6 h-6 text-electricBlue"></i>
                        </div>
                        <h4 class="font-semibold mb-1">Quick Match</h4>
                        <p class="text-sm text-gray-400">Instant matchmaking with similar skill level</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-neonTeal">+50</span> gems per win
                        </div>
                    </div>

                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-purpleGlow/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-purpleGlow/20 flex items-center justify-center mb-3">
                            <i data-lucide="trophy" class="w-6 h-6 text-purpleGlow"></i>
                        </div>
                        <h4 class="font-semibold mb-1">Ranked</h4>
                        <p class="text-sm text-gray-400">Climb the ladder and earn seasonal rewards</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-gold">+200</span> gold per win
                        </div>
                    </div>

                    <div class="bg-black/30 rounded-xl p-4 hover-lift cursor-pointer border border-transparent hover:border-gold/30 transition-all">
                        <div class="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-3">
                            <i data-lucide="crown" class="w-6 h-6 text-gold"></i>
                        </div>
                        <h4 class="font-semibold mb-1">High Stakes</h4>
                        <p class="text-sm text-gray-400">Bet gems and battle for big rewards</p>
                        <div class="mt-3 text-xs text-gray-400">
                            <span class="text-gold">2x</span> gem multiplier
                        </div>
                    </div>
                </div>
            </div>

            <!-- Your Stats -->
            <div class="glass-card rounded-2xl p-5">
                <h3 class="font-gaming font-bold mb-4 flex items-center gap-2">
                    <i data-lucide="bar-chart-3" class="w-5 h-5 text-electricBlue"></i>
                    YOUR BATTLE STATS
                </h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div class="text-center">
                        <p class="text-3xl font-bold text-electricBlue">${AppState.user.battles.wins}</p>
                        <p class="text-sm text-gray-400">Wins</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-sunsetCoral">${AppState.user.battles.losses}</p>
                        <p class="text-sm text-gray-400">Losses</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-neonTeal">${AppState.user.battles.winRate}%</p>
                        <p class="text-sm text-gray-400">Win Rate</p>
                    </div>
                    <div class="text-center">
                        <p class="text-3xl font-bold text-purpleGlow">${AppState.user.battles.wins + AppState.user.battles.losses}</p>
                        <p class="text-sm text-gray-400">Total Battles</p>
                    </div>
                </div>
            </div>
        </div>
    `,

    signals: () => `
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
    `,

    events: () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="text-center mb-8">
                <h1 class="text-3xl font-gaming font-bold gradient-text mb-2">EVENTS & CHALLENGES</h1>
                <p class="text-gray-400">Compete in weekly events and earn exclusive rewards</p>
            </div>

            <!-- Featured Event -->
            <div class="legendary-card rounded-3xl p-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-2 mb-4">
                        <i data-lucide="star" class="w-6 h-6 text-gold"></i>
                        <span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full font-semibold">FEATURED EVENT</span>
                    </div>
                    <h2 class="text-2xl lg:text-3xl font-gaming font-bold mb-3 gradient-text-gold">Weekend Warrior Challenge</h2>
                    <p class="text-gray-300 mb-4 max-w-2xl">Make 50 accurate predictions this weekend to win exclusive rewards including limited edition badges, gems, and gold!</p>
                    <div class="flex flex-wrap items-center gap-6 mb-6">
                        <div class="flex items-center gap-2">
                            <i data-lucide="clock" class="w-5 h-5 text-gray-400"></i>
                            <span>Ends in 2d 14h 32m</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="users" class="w-5 h-5 text-gray-400"></i>
                            <span>1,247 participants</span>
                        </div>
                        <div class="flex items-center gap-2">
                            <i data-lucide="trophy" class="w-5 h-5 text-gold"></i>
                            <span class="text-gold font-semibold">500 Gems + 2000 Gold</span>
                        </div>
                    </div>
                    <div class="bg-black/40 rounded-xl p-4 mb-6">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-sm">Your Progress</span>
                            <span class="text-sm font-semibold">34/50 predictions</span>
                        </div>
                        <div class="progress-bar h-3">
                            <div class="progress-fill progress-fill-gold" style="width: 68%"></div>
                        </div>
                    </div>
                    <button onclick="joinEvent(1)" class="px-8 py-3 rounded-xl bg-gradient-to-r from-gold to-orange-500 font-bold squish-btn hover:shadow-lg hover:shadow-gold/30">
                        Continue Challenge
                    </button>
                </div>
            </div>

            <!-- Active Events Grid -->
            <div>
                <h3 class="font-gaming font-bold text-xl mb-4 flex items-center gap-2">
                    <i data-lucide="flame" class="w-5 h-5 text-orange-400"></i>
                    ACTIVE EVENTS
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${MOCK_DATA.events.filter(e => e.status === 'active').slice(1).map(event => `
                        <div class="epic-card rounded-2xl p-5 hover-lift cursor-pointer">
                            <div class="flex items-start justify-between mb-3">
                                <div class="w-12 h-12 rounded-xl bg-purpleGlow/20 flex items-center justify-center">
                                    <i data-lucide="${event.icon}" class="w-6 h-6 text-purpleGlow"></i>
                                </div>
                                <span class="px-2 py-1 text-xs rounded-full ${event.type === 'weekly' ? 'bg-purpleGlow/20 text-purpleGlow' : event.type === 'daily' ? 'bg-electricBlue/20 text-electricBlue' : 'bg-gold/20 text-gold'}">${event.type}</span>
                            </div>
                            <h4 class="font-bold text-lg mb-2">${event.title}</h4>
                            <p class="text-sm text-gray-400 mb-4">${event.description}</p>
                            <div class="bg-black/30 rounded-lg p-3 mb-3">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-sm">Progress</span>
                                    <span class="text-sm font-semibold">${event.progress.current}/${event.progress.total}</span>
                                </div>
                                <div class="progress-bar h-2">
                                    <div class="progress-fill" style="width: ${(event.progress.current / event.progress.total) * 100}%"></div>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2 text-sm">
                                    <i data-lucide="gem" class="w-4 h-4 text-neonTeal"></i>
                                    <span class="text-neonTeal">+${event.reward.gems}</span>
                                </div>
                                <div class="flex items-center gap-2 text-sm text-gray-400">
                                    <i data-lucide="users" class="w-4 h-4"></i>
                                    <span>${event.participants}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Coming Soon -->
            <div>
                <h3 class="font-gaming font-bold text-xl mb-4 flex items-center gap-2">
                    <i data-lucide="calendar" class="w-5 h-5 text-electricBlue"></i>
                    COMING SOON
                </h3>
                <div class="glass-card rounded-2xl p-5 border-dashed border-2 border-glassBorder opacity-70">
                    <div class="flex items-center gap-4">
                        <div class="w-16 h-16 rounded-xl bg-electricBlue/20 flex items-center justify-center">
                            <i data-lucide="waves" class="w-8 h-8 text-electricBlue"></i>
                        </div>
                        <div class="flex-1">
                            <h4 class="font-bold text-lg mb-1">Whale Watch Event</h4>
                            <p class="text-sm text-gray-400 mb-2">Track and predict whale movements. Top analysts win big!</p>
                            <div class="flex items-center gap-4 text-sm">
                                <span class="text-gold font-semibold">1500 Gems + 10000 Gold</span>
                                <span class="text-gray-400">Starts: Jan 25</span>
                            </div>
                        </div>
                        <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">
                            Remind Me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,

    leaderboard: () => `
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
    `,

    profile: () => `
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

            <!-- Season Pass -->
            <div class="glass-card rounded-2xl p-5 bg-gradient-to-br from-purpleGlow/10 to-pink-500/10">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <h3 class="font-gaming font-bold flex items-center gap-2">
                            <i data-lucide="ticket" class="w-5 h-5 text-purpleGlow"></i>
                            SEASON PASS - Season ${MOCK_DATA.seasonPass.season}
                        </h3>
                        <p class="text-sm text-gray-400">${MOCK_DATA.seasonPass.seasonName} · Ends ${MOCK_DATA.seasonPass.endDate}</p>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-purpleGlow">Level ${MOCK_DATA.seasonPass.currentLevel}</p>
                        <p class="text-xs text-gray-400">of ${MOCK_DATA.seasonPass.maxLevel}</p>
                    </div>
                </div>
                <div class="progress-bar h-4 mb-2">
                    <div class="progress-fill" style="width: ${(MOCK_DATA.seasonPass.currentLevel / MOCK_DATA.seasonPass.maxLevel) * 100}%"></div>
                </div>
                <p class="text-xs text-gray-400 mb-4">${MOCK_DATA.seasonPass.maxLevel - MOCK_DATA.seasonPass.currentLevel} levels remaining</p>
                <div class="flex gap-3">
                    <button class="px-6 py-3 rounded-xl bg-glass border border-glassBorder font-semibold squish-btn">
                        View Rewards
                    </button>
                    <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-purpleGlow to-pink-500 font-semibold squish-btn">
                        <i data-lucide="lock" class="w-5 h-5 inline mr-2"></i>Unlock Premium
                    </button>
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
    `,

    quests: () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">QUESTS</h1>
                    <p class="text-gray-400">Complete quests to earn rewards</p>
                </div>
                <div class="flex items-center gap-2">
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">All</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Daily</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Weekly</button>
                    <button class="px-4 py-2 rounded-xl bg-glass border border-glassBorder text-sm squish-btn">Special</button>
                </div>
            </div>

            <!-- Quest Categories -->
            <div class="space-y-4">
                ${MOCK_DATA.quests.map(quest => `
                    <div class="quest-card ${quest.type} glass-card rounded-2xl p-5 hover-lift cursor-pointer">
                        <div class="flex items-start gap-4">
                            <div class="w-16 h-16 rounded-xl bg-gradient-to-br ${
                                quest.difficulty === 'legendary' ? 'from-gold/20 to-orange-500/20' :
                                quest.difficulty === 'hard' ? 'from-red-500/20 to-orange-500/20' :
                                quest.difficulty === 'medium' ? 'from-yellow-500/20 to-orange-500/20' :
                                'from-green-500/20 to-emerald-500/20'
                            } flex items-center justify-center flex-shrink-0">
                                <i data-lucide="${
                                    quest.difficulty === 'legendary' ? 'crown' :
                                    quest.difficulty === 'hard' ? 'flame' :
                                    quest.difficulty === 'medium' ? 'target' :
                                    'check-circle'
                                }" class="w-8 h-8 ${
                                    quest.difficulty === 'legendary' ? 'text-gold' :
                                    quest.difficulty === 'hard' ? 'text-red-500' :
                                    quest.difficulty === 'medium' ? 'text-yellow-500' :
                                    'text-green-500'
                                }"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between gap-2 mb-2">
                                    <div>
                                        <h3 class="font-bold text-lg">${quest.title}</h3>
                                        <p class="text-sm text-gray-400">${quest.description}</p>
                                    </div>
                                    <span class="flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold ${
                                        quest.difficulty === 'legendary' ? 'bg-gold/20 text-gold' :
                                        quest.difficulty === 'hard' ? 'bg-red-500/20 text-red-500' :
                                        quest.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-500' :
                                        'bg-green-500/20 text-green-500'
                                    }">${quest.difficulty}</span>
                                </div>
                                <div class="bg-black/30 rounded-xl p-3 mb-3">
                                    <div class="flex items-center justify-between mb-2">
                                        <span class="text-sm">Progress</span>
                                        <span class="text-sm font-semibold">${quest.progress}/${quest.total}</span>
                                    </div>
                                    <div class="progress-bar h-2">
                                        <div class="progress-fill" style="width: ${(quest.progress / quest.total) * 100}%"></div>
                                    </div>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-4 text-sm">
                                        <span class="text-neonTeal">
                                            <i data-lucide="gem" class="w-4 h-4 inline mr-1"></i>+${quest.reward.gems}
                                        </span>
                                        <span class="text-purpleGlow">
                                            <i data-lucide="sparkles" class="w-4 h-4 inline mr-1"></i>+${quest.reward.xp} XP
                                        </span>
                                        ${quest.reward.gold ? `<span class="text-gold"><i data-lucide="coins" class="w-4 h-4 inline mr-1"></i>+${quest.reward.gold}</span>` : ''}
                                    </div>
                                    ${quest.progress >= quest.total ?
                                        '<button class="px-4 py-2 rounded-xl bg-neonTeal text-deepSpace font-semibold text-sm squish-btn">Claim</button>' :
                                        '<span class="text-sm text-gray-400">' + (quest.total - quest.progress) + ' remaining</span>'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,

    lootboxes: () => `
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
    `,

    cards: () => `
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
    `,

    guilds: () => `
        <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8 space-y-6">
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl lg:text-3xl font-gaming font-bold">GUILDS</h1>
                    <p class="text-gray-400">Join forces with other traders</p>
                </div>
                <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn">
                    <i data-lucide="plus" class="w-5 h-5 inline mr-2"></i>Create Guild
                </button>
            </div>

            <!-- Your Guild -->
            ${MOCK_DATA.guilds.find(g => g.isMember) ? `
                <div class="glass-card rounded-2xl p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center gap-4">
                            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br ${MOCK_DATA.guilds.find(g => g.isMember).color} flex items-center justify-center">
                                <i data-lucide="${MOCK_DATA.guilds.find(g => g.isMember).icon}" class="w-10 h-10"></i>
                            </div>
                            <div>
                                <div class="flex items-center gap-2">
                                    <h2 class="text-2xl font-gaming font-bold">${MOCK_DATA.guilds.find(g => g.isMember).name}</h2>
                                    <span class="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full">[${MOCK_DATA.guilds.find(g => g.isMember).tag}]</span>
                                </div>
                                <p class="text-gray-400">${MOCK_DATA.guilds.find(g => g.isMember).description}</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-sm text-gray-400">Your Role</p>
                            <p class="text-lg font-bold text-electricBlue">${MOCK_DATA.guilds.find(g => g.isMember).memberRole}</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div class="text-center">
                            <p class="text-2xl font-bold">${MOCK_DATA.guilds.find(g => g.isMember).members}/${MOCK_DATA.guilds.find(g => g.isMember).maxMembers}</p>
                            <p class="text-sm text-gray-400">Members</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold">Level ${MOCK_DATA.guilds.find(g => g.isMember).level}</p>
                            <p class="text-sm text-gray-400">Guild Level</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold">${(MOCK_DATA.guilds.find(g => g.isMember).xp / 1000).toFixed(0)}K</p>
                            <p class="text-sm text-gray-400">Total XP</p>
                        </div>
                        <div class="text-center">
                            <p class="text-2xl font-bold text-gold">#3</p>
                            <p class="text-sm text-gray-400">Ranking</p>
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${MOCK_DATA.guilds.find(g => g.isMember).achievements.map(a => `
                            <span class="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">🏆 ${a}</span>
                        `).join('')}
                    </div>

                    <div class="bg-black/30 rounded-xl p-4">
                        <h4 class="font-semibold mb-3">Guild Perks</h4>
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
                            ${MOCK_DATA.guilds.find(g => g.isMember).perks.map(perk => `
                                <div class="flex items-center gap-2 text-sm">
                                    <i data-lucide="check" class="w-4 h-4 text-neonTeal"></i>
                                    <span>${perk}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            ` : ''}

            <!-- Referral System -->
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
                            <button class="px-4 py-3 rounded-xl bg-electricBlue text-deepSpace font-semibold squish-btn">Copy</button>
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

            <!-- Browse Guilds -->
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
    `,

    analytics: () => `
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
    `
};

const PAGES = window.PAGES || INLINE_PAGES;

// ========== UTILITY FUNCTIONS ==========

function safeCreateIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <i data-lucide="${
            type === 'success' ? 'check-circle' :
            type === 'error' ? 'x-circle' :
            type === 'warning' ? 'alert-triangle' :
            'info'
        }" class="w-5 h-5 ${
            type === 'success' ? 'text-neonTeal' :
            type === 'error' ? 'text-sunsetCoral' :
            type === 'warning' ? 'text-gold' :
            'text-electricBlue'
        }"></i>
        <span class="flex-1">${message}</span>
    `;
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    toastContainer.appendChild(toast);
    safeCreateIcons();
    setTimeout(() => toast.remove(), 4000);
}

function findMatch() {
    showToast('Finding worthy opponent...', 'info');
    setTimeout(() => {
        showToast('Match found! Entering battle arena...', 'success');
    }, 2000);
}

function handlePrediction(event, signalId) {
    const slider = event.currentTarget;
    const rect = slider.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));

    const fill = slider.querySelector('.prediction-fill');
    const marker = slider.querySelector('.prediction-marker');
    fill.style.width = `${percentage}%`;
    marker.style.left = `${percentage}%`;

    slider.style.transform = 'scale(0.98)';
    setTimeout(() => slider.style.transform = 'scale(1)', 150);
}

function submitPrediction(signalId) {
    showToast('Prediction submitted! +10 XP', 'success');
}

function openBattleModal(battleId) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
        <div class="modal-content p-6">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-gaming font-bold">LIVE BATTLE</h2>
                <button onclick="this.closest('.modal-overlay').remove()" class="p-2 hover:bg-glass rounded-xl">
                    <i data-lucide="x" class="w-5 h-5"></i>
                </button>
            </div>
            <div class="text-center py-8">
                <p class="text-gray-400">Watch battle live or join as spectator</p>
                <div class="flex gap-3 mt-4 justify-center">
                    <button class="px-6 py-3 rounded-xl bg-gradient-to-r from-electricBlue to-purpleGlow font-semibold squish-btn">Watch Live</button>
                    <button onclick="this.closest('.modal-overlay').remove()" class="px-6 py-3 rounded-xl bg-glass border border-glassBorder font-semibold squish-btn">Close</button>
                </div>
            </div>
        </div>
    `;
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    modalContainer.appendChild(modal);
    safeCreateIcons();
}

function joinEvent(eventId) {
    showToast('You\'re already participating in this event!', 'info');
}

function openLootBox(boxId) {
    const box = MOCK_DATA.lootBoxes.find(b => b.id === boxId);
    if (!box) return;

    const rewards = box.items[Math.floor(Math.random() * box.items.length)];

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
        <div class="modal-content p-6 text-center">
            <div class="mb-6">
                <div class="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${box.color} flex items-center justify-center animate-spin-slow">
                    <i data-lucide="${box.icon}" class="w-12 h-12"></i>
                </div>
            </div>
            <h2 class="text-2xl font-gaming font-bold mb-4">🎉 CONGRATULATIONS!</h2>
            <p class="text-gray-400 mb-6">You opened <span class="font-bold">${box.name}</span></p>
            <div class="bg-black/50 rounded-2xl p-6 mb-6">
                <p class="text-sm text-gray-400 mb-2">You received:</p>
                <p class="text-2xl font-bold text-neonTeal">${rewards}</p>
            </div>
            <button onclick="this.closest('.modal-overlay').remove()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-neonTeal to-electricBlue font-bold text-deepSpace squish-btn">
                Awesome!
            </button>
        </div>
    `;
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    modalContainer.appendChild(modal);
    safeCreateIcons();

    showToast(`Opening ${box.name}...`, 'info');
    setTimeout(() => {
        showToast(`You found: ${rewards}`, 'success');
    }, 1000);
}

function openSeasonMilestone(level) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
        <div class="modal-content p-6 text-center">
            <div class="mb-6">
                <div class="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-electricBlue to-purpleGlow flex items-center justify-center animate-spin-slow">
                    <i data-lucide="ticket" class="w-12 h-12"></i>
                </div>
            </div>
            <h2 class="text-2xl font-gaming font-bold mb-2">Season Pass Reveal</h2>
            <p class="text-gray-400 mb-6">Milestone Level ${level} unlocked</p>
            <div class="bg-black/50 rounded-2xl p-6 mb-6">
                <p class="text-sm text-gray-400 mb-2">Reward</p>
                <p class="text-xl font-bold text-neonTeal">Loot Box Reveal</p>
            </div>
            <button onclick="this.closest('.modal-overlay').remove()" class="px-8 py-3 rounded-xl bg-gradient-to-r from-neonTeal to-electricBlue font-bold text-deepSpace squish-btn">
                Awesome!
            </button>
        </div>
    `;
    const modalContainer = document.getElementById('modal-container');
    if (!modalContainer) return;
    modalContainer.appendChild(modal);
    safeCreateIcons();
}

// ========== NAVIGATION ==========

function navigateTo(page) {
    if (typeof PAGES[page] !== 'function') {
        console.error('Page not found:', page);
        return;
    }

    AppState.currentPage = page;
    let content = '';
    try {
        content = PAGES[page]();
    } catch (err) {
        console.error('Page render error:', page, err);
        content = `
            <div class="max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-24 lg:pb-8">
                <div class="glass-card rounded-2xl p-6">
                    <h1 class="text-2xl font-gaming font-bold mb-2">Something went wrong</h1>
                    <p class="text-gray-400">Failed to render page: <span class="text-white font-semibold">${page}</span></p>
                </div>
            </div>
        `;
    }

    const contentContainer = document.getElementById('page-content');
    if (!contentContainer) return;
    contentContainer.innerHTML = content;

    // Update Topbar Title
    if (typeof updateTopbarTitle === 'function') {
        updateTopbarTitle(page);
    }
    if (typeof updateTopbarStats === 'function') {
        updateTopbarStats();
    }

    // Update nav states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === page) link.classList.add('active');
    });
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.page === page) btn.classList.add('active');
    });

    // Re-initialize icons
    safeCreateIcons();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
    // Simulate loading
    const loadingScreen = document.getElementById('loading-screen');
    const loadingBar = document.getElementById('loading-bar');

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.transition = 'opacity 0.5s';
                    setTimeout(() => loadingScreen.remove(), 500);
                }
            }, 300);
        }
        if (loadingBar) loadingBar.style.width = `${progress}%`;
    }, 100);

    if (typeof renderSidebar === 'function') renderSidebar();
    if (typeof renderTopbar === 'function') renderTopbar();
    if (typeof renderNavbar === 'function') renderNavbar();
    safeCreateIcons();

    document.addEventListener('click', (event) => {
        const button = event.target.closest('.nav-link, .mobile-nav-btn');
        if (!button) return;
        const page = button.dataset.page;
        if (!page) return;
        navigateTo(page);
    });

    document.addEventListener('click', (event) => {
        const toggle = event.target.closest('[data-pass-toggle]');
        if (toggle) {
            const target = toggle.dataset.passToggle;
            document.querySelectorAll('[data-pass-view]').forEach((view) => {
                if (view.dataset.passView === target) {
                    view.classList.remove('hidden');
                } else {
                    view.classList.add('hidden');
                }
            });
        }

        const milestone = event.target.closest('[data-milestone]');
        if (milestone) {
            const level = Number(milestone.dataset.milestone || 0);
            if (level) openSeasonMilestone(level);
        }
    });

    navigateTo(AppState.currentPage || 'dashboard');

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.altKey) {
            const keyMap = {
                '1': 'dashboard',
                '2': 'arena',
                '3': 'signals',
                '4': 'lootboxes',
                '5': 'cards',
                '6': 'guilds',
                '7': 'analytics',
                '8': 'events',
                '9': 'leaderboard',
                '0': 'profile'
            };
            if (keyMap[e.key]) {
                e.preventDefault();
                navigateTo(keyMap[e.key]);
            }
        }
    });

    // Simulate live updates
    setInterval(() => {
        const onlineCount = document.getElementById('online-count');
        if (onlineCount) {
            const count = 1200 + Math.floor(Math.random() * 100);
            onlineCount.textContent = count.toLocaleString();
        }
    }, 5000);
});

console.log('%c⚔️ SIGNALPULSE ARENA', 'font-size: 24px; font-weight: bold; color: #00D4FF;');
console.log('%cBattle-Ready Crypto Trading Platform', 'font-size: 14px; color: #A855F7;');
