import { useEffect, useMemo, useState } from 'react';
import { ArrowDown, ArrowUp, ArrowUpDown, BadgeDollarSign, BadgeInfo, ChevronDown, ChevronUp, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value || 0);

const formatCurrencyDetailed = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value || 0);

const fetchCapitalGains = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        capitalGains: {
          stcg: { profits: 70200.88, losses: 1548.53 },
          ltcg: { profits: 5020, losses: 3050 },
        },
      });
    }, 500);
  });

const fetchHoldings = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          coin: 'USDC',
          coinName: 'USDC',
          logo: 'https://coin-images.coingecko.com/coins/images/6319/large/usdc.png?1696506694',
          currentPrice: 85.41,
          totalHolding: 0.0015339999999994802,
          averageBuyPrice: 1.5863185433764244,
          stcg: { balance: 0.0015339999999994802, gain: 0.12858552735441697 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'WETH',
          coinName: 'Polygon PoS Bridged WETH (Polygon POS)',
          logo: 'https://coin-images.coingecko.com/coins/images/2518/large/weth.png?1696503332',
          currentPrice: 211756,
          totalHolding: 0.00023999998390319965,
          averageBuyPrice: 3599.856066001555,
          stcg: { balance: 0.00023999998390319965, gain: 49.957471193511736 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'SOL',
          coinName: 'SOL (Wormhole)',
          logo: 'https://coin-images.coingecko.com/coins/images/22876/large/SOL_wh_small.png?1696522175',
          currentPrice: 14758.01,
          totalHolding: 3.469446951953614e-17,
          averageBuyPrice: 221.42847548590152,
          stcg: { balance: 3.469446951953614e-17, gain: 5.043389846205066e-13 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'WPOL',
          coinName: 'Wrapped POL',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 22.08,
          totalHolding: 2.3172764293128694,
          averageBuyPrice: 0.5227311370876341,
          stcg: { balance: 1.3172764293128694, gain: 49.954151016387065 },
          ltcg: { balance: 1, gain: 20 },
        },
        {
          coin: 'MATIC',
          coinName: 'Polygon',
          logo: 'https://coin-images.coingecko.com/coins/images/4713/large/polygon.png?1698233745',
          currentPrice: 22.22,
          totalHolding: 2.75145540184285,
          averageBuyPrice: 0.6880274617804887,
          stcg: { balance: 2.75145540184285, gain: 59.244262152615974 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'GONE',
          coinName: 'Gone',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 0.0001462,
          totalHolding: 696324.3075326696,
          averageBuyPrice: 0.00001637624055112482,
          stcg: { balance: 696324.3075326696, gain: 90.39943939952589 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'USDT',
          coinName: 'Arbitrum Bridged USDT (Arbitrum)',
          logo: 'https://coin-images.coingecko.com/coins/images/325/large/Tether.png?1696501661',
          currentPrice: 85.42,
          totalHolding: 0.0001580000000558357,
          averageBuyPrice: 1.4988059369185402,
          stcg: { balance: 0.0001580000000558357, gain: 0.01325954866665267 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'USDC',
          coinName: 'Bridged USDC (Polygon PoS Bridge)',
          logo: 'https://coin-images.coingecko.com/coins/images/33000/large/usdc.png?1700119918',
          currentPrice: 85.41,
          totalHolding: 0.005806999999992795,
          averageBuyPrice: 1.5405071277176852,
          stcg: { balance: 0.005806999999992795, gain: 0.48703014510873915 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'SLN',
          coinName: 'Smart Layer Network',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 6.66,
          totalHolding: 0.01,
          averageBuyPrice: 4.999247835735738,
          stcg: { balance: 0.01, gain: 0.016607521642642627 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'OX',
          coinName: 'OX Coin',
          logo: 'https://coin-images.coingecko.com/coins/images/35365/large/logo.png?1708395976',
          currentPrice: 0.13319,
          totalHolding: 5,
          averageBuyPrice: 0.018408606024462898,
          stcg: { balance: 5, gain: 0.5739069698776855 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'FLAME',
          coinName: 'FireStarter',
          logo: 'https://coin-images.coingecko.com/coins/images/17359/large/WhiteOnBlack_Primary_Logo.png?1696516910',
          currentPrice: 0.355985,
          totalHolding: 1.4210854715202004e-14,
          averageBuyPrice: 0.07889041030290807,
          stcg: { balance: 1.4210854715202004e-14, gain: 3.9377509565538836e-15 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'PIG',
          coinName: 'Pigcoin',
          logo: 'https://coin-images.coingecko.com/coins/images/35425/large/pigcoin_200.png?1708544734',
          currentPrice: 0.00008706,
          totalHolding: 1.79,
          averageBuyPrice: 0,
          stcg: { balance: 1.79, gain: 0.0001558374 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: '$CULO',
          coinName: 'CULO',
          logo: 'https://coin-images.coingecko.com/coins/images/34662/large/CULO-logo-inverted_200.png?1705641744',
          currentPrice: 0.00001623,
          totalHolding: 150000,
          averageBuyPrice: 0,
          stcg: { balance: 150000, gain: 2.4345 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'ETH',
          coinName: 'Ethereum',
          logo: 'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
          currentPrice: 216182,
          totalHolding: 0.0004211938732637162,
          averageBuyPrice: 3909.792264648455,
          stcg: { balance: 0.0004211938732637162, gain: 89.40775336229291 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'QUICK',
          coinName: 'Quickswap [OLD]',
          logo: 'https://coin-images.coingecko.com/coins/images/13970/large/quick.png?1696513704',
          currentPrice: 2319.83,
          totalHolding: 5.961538207532868e-11,
          averageBuyPrice: 65.86759737193783,
          stcg: { balance: 5.961538207532868e-11, gain: 1.3437082981609774e-7 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'DFYN',
          coinName: 'Dfyn Network',
          logo: 'https://coin-images.coingecko.com/coins/images/15368/large/SgqhfWz4_400x400_%281%29.jpg?1696515016',
          currentPrice: 0.300613,
          totalHolding: 3.1178615245153196e-11,
          averageBuyPrice: 0.03486178524947315,
          stcg: { balance: 3.1178615245153196e-11, gain: 8.285754875638759e-12 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'LINK',
          coinName: 'Chainlink',
          logo: 'https://coin-images.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1696502009',
          currentPrice: 1450.14,
          totalHolding: 0.000047233224826389,
          averageBuyPrice: 9.172984515948809,
          stcg: { balance: 0.000047233224826389, gain: 0.06806151900976895 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'BLOK',
          coinName: 'Bloktopia',
          logo: 'https://coin-images.coingecko.com/coins/images/18819/large/logo-bholdus-6.png?1696518281',
          currentPrice: 0.02974533,
          totalHolding: 9.822542779147625e-11,
          averageBuyPrice: 0.005182145656093,
          stcg: { balance: 9.822542779147625e-11, gain: 2.412729290101157e-12 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'SPHERE',
          coinName: 'Sphere Finance',
          logo: 'https://coin-images.coingecko.com/coins/images/24424/large/2iR2JsL.png?1696523606',
          currentPrice: 0.00729945,
          totalHolding: 2.2737367544323206e-13,
          averageBuyPrice: 0.011065778585432803,
          stcg: { balance: 2.2737367544323206e-13, gain: -8.563639733967655e-16 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'TRADE',
          coinName: 'Polytrade',
          logo: 'https://coin-images.coingecko.com/coins/images/16416/large/Logo_colored_200.png?1696516012',
          currentPrice: 17.51,
          totalHolding: 3.325212327709437e-11,
          averageBuyPrice: 0.25960465528043797,
          stcg: { balance: 3.325212327709437e-11, gain: 5.736122725812298e-10 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'WELT',
          coinName: 'Fabwelt',
          logo: 'https://coin-images.coingecko.com/coins/images/20505/large/welt.PNG?1696519911',
          currentPrice: 0.060863,
          totalHolding: 1.063542780948968,
          averageBuyPrice: 0.01520546569793174,
          stcg: { balance: 1.063542780948968, gain: 0.048558741002894576 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'FTM',
          coinName: 'Fantom',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 52.99,
          totalHolding: 0.04265758808550148,
          averageBuyPrice: 1.7040326829291739,
          stcg: { balance: 0.04265758808550148, gain: 2.1877356683780986 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'EZ',
          coinName: 'EasyFi V2',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 0.885074,
          totalHolding: 0.0005424384664524931,
          averageBuyPrice: 6.539367177529248,
          stcg: { balance: 0.0005424384664524931, gain: -0.0030671061200917595 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'FRM',
          coinName: 'Ferrum Network',
          logo: 'https://coin-images.coingecko.com/coins/images/8251/large/FRM.png?1696508455',
          currentPrice: 0.093794,
          totalHolding: 6.442993445432421e-7,
          averageBuyPrice: 0.453964789704584,
          stcg: { balance: 6.442993445432421e-7, gain: -2.3205780373028534e-7 },
          ltcg: { balance: 0, gain: 0 },
        },
        {
          coin: 'TITAN',
          coinName: 'IRON Titanium',
          logo: 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg',
          currentPrice: 8.65643e-7,
          totalHolding: 8.861,
          averageBuyPrice: 8.531798889329416e-7,
          stcg: { balance: 8.861, gain: 1.1043562716520403e-7 },
          ltcg: { balance: 0, gain: 0 },
        },
      ].map((item, index) => ({ ...item, id: `${item.coin}-${index}-${item.coinName}` })));
    }, 500);
  });

function SummaryCard({ title, subtitle, data, savingsText, showSavings, variant = 'light', theme = 'light' }) {
  const netStcg = data.stcg.profits - data.stcg.losses;
  const netLtcg = data.ltcg.profits - data.ltcg.losses;
  const realised = netStcg + netLtcg;
  const isDark = theme === 'dark';

  return (
    <article className={`rounded-[28px] border p-4 shadow-2xl shadow-blue-900/10 sm:p-6 ${variant === 'dark'
      ? (isDark ? 'border-blue-400/30 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white' : 'border-blue-400/60 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 text-white')
      : (isDark ? 'border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100' : 'border-slate-200 bg-white text-slate-900')
    }`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] opacity-80">{title}</p>
          <h2 className="mt-1 text-xl font-semibold">{subtitle}</h2>
          <p className="mt-2 text-sm opacity-80">{variant === 'dark' ? 'Projected tax impact after harvesting selected losses.' : 'Current realised gains before any tax-loss harvesting.'}</p>
        </div>
        {showSavings && (
          <div className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold ring-1 ring-white/15">
            <Sparkles className="h-4 w-4" />
            {savingsText}
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">Short-term</p>
          <div className="mt-3 space-y-2">
            <Row label="Profits" value={formatCurrencyDetailed(data.stcg.profits)} theme={theme} />
            <Row label="Losses" value={formatCurrencyDetailed(data.stcg.losses)} theme={theme} />
            <Row label="Net Capital Gains" value={formatCurrencyDetailed(netStcg)} theme={theme} />
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] opacity-70">Long-term</p>
          <div className="mt-3 space-y-2">
            <Row label="Profits" value={formatCurrencyDetailed(data.ltcg.profits)} theme={theme} />
            <Row label="Losses" value={formatCurrencyDetailed(data.ltcg.losses)} theme={theme} />
            <Row label="Net Capital Gains" value={formatCurrencyDetailed(netLtcg)} theme={theme} />
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <span className="font-medium">Effective Capital Gains:</span>
          <span className="text-xl font-black">{formatCurrencyDetailed(realised)}</span>
        </div>
      </div>

      <div className="mt-5 text-sm opacity-90">
        <div className="flex items-center justify-between">
          <span>Realised Capital Gains:</span>
          <span className="text-2xl font-black">{formatCurrency(realised)}</span>
        </div>
      </div>
    </article>
  );
}

function Row({ label, value, theme = 'light' }) {
  return (
    <div className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 ${theme === 'dark' ? 'bg-white/8' : 'bg-black/5'}`}>
      <span>{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function App() {
  const [holdings, setHoldings] = useState([]);
  const [initialGains, setInitialGains] = useState({ stcg: { profits: 0, losses: 0 }, ltcg: { profits: 0, losses: 0 } });
  const [selectedHoldings, setSelectedHoldings] = useState([]);
  const [showAllHoldings, setShowAllHoldings] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [theme, setTheme] = useState('light');
  const [sortField, setSortField] = useState('stcg');
  const [sortDirection, setSortDirection] = useState('desc');

  useEffect(() => {
    const savedTheme = localStorage.getItem('tax-harvesting-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
    }

    Promise.all([fetchCapitalGains(), fetchHoldings()]).then(([gainsResponse, holdingsResponse]) => {
      setInitialGains(gainsResponse.capitalGains);
      setHoldings(holdingsResponse.map((item, index) => ({ ...item, id: `${item.coin}-${index}-${item.coinName}` })));
    });
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('tax-harvesting-theme', theme);
  }, [theme]);

  const sortedHoldings = useMemo(() => {
    const copy = [...holdings];
    copy.sort((a, b) => {
      const left = a[sortField]?.gain ?? 0;
      const right = b[sortField]?.gain ?? 0;
      return sortDirection === 'asc' ? left - right : right - left;
    });
    return copy;
  }, [holdings, sortField, sortDirection]);

  const visibleHoldings = showAllHoldings ? sortedHoldings : sortedHoldings.slice(0, 4);

  const selectedSet = useMemo(() => new Set(selectedHoldings), [selectedHoldings]);

  const postHarvesting = useMemo(() => {
    const next = {
      stcg: { profits: initialGains.stcg.profits, losses: initialGains.stcg.losses },
      ltcg: { profits: initialGains.ltcg.profits, losses: initialGains.ltcg.losses },
    };

    selectedHoldings.forEach((id) => {
      const item = holdings.find((h) => h.id === id);
      if (!item) return;

      ['stcg', 'ltcg'].forEach((type) => {
        const gain = item[type].gain;
        if (gain > 0) next[type].profits += gain;
        if (gain < 0) next[type].losses += Math.abs(gain);
      });
    });

    return next;
  }, [holdings, initialGains, selectedHoldings]);

  const initialRealised = (initialGains.stcg.profits - initialGains.stcg.losses) + (initialGains.ltcg.profits - initialGains.ltcg.losses);
  const postRealised = (postHarvesting.stcg.profits - postHarvesting.stcg.losses) + (postHarvesting.ltcg.profits - postHarvesting.ltcg.losses);
  const savings = Math.max(0, initialRealised - postRealised);

  const toggleHolding = (id) => {
    setSelectedHoldings((prev) =>
      prev.includes(id) ? prev.filter((entry) => entry !== id) : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (selectedHoldings.length === holdings.length) {
      setSelectedHoldings([]);
    } else {
      setSelectedHoldings(holdings.map((item) => item.id));
    }
  };

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortDirection((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      return;
    }

    setSortField(field);
    setSortDirection('asc');
  };

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#111827_100%)] text-slate-100' : 'bg-[linear-gradient(135deg,#eff6ff_0%,#f8fbff_40%,#eef2ff_100%)] text-slate-900'}`}>
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${theme === 'dark' ? 'border-sky-400/30 bg-sky-400/10 text-sky-100' : 'border-sky-200 bg-sky-50 text-sky-700'}`}>
                <TrendingUp className="h-3.5 w-3.5" />
                KoinX Tax Planner
              </div>
              {/* <p className={`mt-3 text-sm uppercase tracking-[0.35em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Portfolio planning</p> */}
              <h1 className={`mt-2 text-4xl font-black tracking-tight lg:text-5xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Tax Harvesting</h1>
              <p className={`mt-3 max-w-2xl text-sm sm:text-base ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>Compare your current realised gains with the projected tax impact after harvesting selected losses from your portfolio.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${theme === 'dark' ? 'border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
              >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a href="#disclaimer" className={`rounded-full border px-4 py-2 text-sm font-semibold ${theme === 'dark' ? 'border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}>How it works?</a>
            </div>
          </div>

          <button
            onClick={() => setShowDisclaimer((prev) => !prev)}
            className={`flex w-full items-center justify-between rounded-3xl border p-5 text-left shadow-lg ${theme === 'dark' ? 'border-sky-500/30 bg-sky-400/10 text-sky-100 shadow-sky-900/10' : 'border-sky-200 bg-sky-50 text-sky-900 shadow-sky-100/70'}`}
          >
            <span className="flex items-center gap-3 text-sm font-semibold">
              <BadgeInfo className="h-4 w-4" />
              Important Notes & Disclaimers
            </span>
            {showDisclaimer ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </button>

          {showDisclaimer && (
            <aside id="disclaimer" className={`rounded-3xl border p-5 text-sm shadow-lg ${theme === 'dark' ? 'border-sky-500/30 bg-sky-400/10 text-sky-100 shadow-sky-900/10' : 'border-sky-200 bg-sky-50 text-sky-900 shadow-sky-100/70'}`}>
              <p>Tax-loss harvesting may reduce realised capital gains in a taxable account, but it does not guarantee tax savings and may create wash-sale or other tax-related constraints. Review all holdings with your tax advisor before executing any trades.</p>
            </aside>
          )}
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <SummaryCard
            title="Pre Harvesting"
            subtitle="Current realised gains"
            data={initialGains}
            variant="light"
            theme={theme}
          />
          <SummaryCard
            title="After Harvesting"
            subtitle="Projected gains"
            data={postHarvesting}
            variant="dark"
            showSavings={savings > 0}
            savingsText={`You are going to save upto $${Math.round(savings).toLocaleString()}`}
            theme={theme}
          />
        </section>

        <section className={`mt-8 rounded-[30px] border p-6 shadow-2xl ${theme === 'dark' ? 'border-slate-800 bg-slate-900/95 text-slate-100 shadow-black/40' : 'border-slate-200 bg-white/95 text-slate-900 shadow-slate-200/70'}`}>
          <div className="flex flex-col gap-3 border-b border-slate-200/80 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className={`text-xs uppercase tracking-[0.25em] ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Holdings</p>
              <h2 className={`mt-1 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Select assets to harvest</h2>
              <p className={`mt-1 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>Choose holdings to compare before and after harvesting.</p>
            </div>
            <label className={`flex items-center gap-3 rounded-full border px-3 py-2 text-sm font-medium ${theme === 'dark' ? 'border-slate-700 bg-slate-800 text-slate-100' : 'border-slate-200 bg-slate-100 text-slate-700'}`}>
              <input
                type="checkbox"
                checked={selectedHoldings.length === holdings.length && holdings.length > 0}
                onChange={toggleAll}
                className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
              />
              Select All
            </label>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[780px] text-left text-sm sm:min-w-full">
              <thead className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>
                <tr>
                  <th className="pb-3 pr-4 font-semibold">Asset</th>
                  <th className="pb-3 pr-4 font-semibold">Holdings</th>
                  <th className="pb-3 pr-4 font-semibold">Current Value</th>
                  <th className="pb-3 pr-4 font-semibold">
                    <button
                      type="button"
                      onClick={() => toggleSort('stcg')}
                      className="flex items-center gap-1 hover:text-blue-500"
                    >
                      Short-term
                      {sortField === 'stcg' ? (sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />) : <ArrowUpDown className="h-3.5 w-3.5 opacity-60" />}
                    </button>
                  </th>
                  <th className="pb-3 pr-4 font-semibold">
                    <button
                      type="button"
                      onClick={() => toggleSort('ltcg')}
                      className="flex items-center gap-1 hover:text-blue-500"
                    >
                      Long-term
                      {sortField === 'ltcg' ? (sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5" /> : <ArrowDown className="h-3.5 w-3.5" />) : <ArrowUpDown className="h-3.5 w-3.5 opacity-60" />}
                    </button>
                  </th>
                  <th className="pb-3 font-semibold">Amount to Sell</th>
                </tr>
              </thead>
              <tbody>
                {visibleHoldings.map((item) => {
                  const isSelected = selectedSet.has(item.id);
                  const stcgClass = item.stcg.gain >= 0 ? 'text-emerald-600' : 'text-rose-600';
                  const ltcgClass = item.ltcg.gain >= 0 ? 'text-emerald-600' : 'text-rose-600';
                  return (
                    <tr
                      key={item.id}
                      className={`border-t align-top transition duration-200 ease-in-out ${
                        isSelected
                          ? theme === 'dark'
                            ? 'border-blue-500/30 bg-blue-950/40 hover:bg-blue-950/60 text-slate-100 shadow-md shadow-blue-950/30'
                            : 'border-blue-200 bg-blue-50/70 hover:bg-blue-100/60 text-slate-900 shadow-sm shadow-blue-50/20'
                          : theme === 'dark'
                            ? 'border-slate-800 text-slate-200 hover:bg-slate-800/50 hover:shadow-lg'
                            : 'border-slate-200 text-slate-700 hover:bg-slate-100/50 hover:shadow-md'
                      }`}
                    >
                      <td className="py-4 pr-4">
                        <label className="flex items-center gap-3 min-w-[180px] max-w-[320px]">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleHolding(item.id)}
                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/80 dark:bg-slate-800 overflow-hidden`}>
                            <img
                              src={item.logo}
                              alt={item.coin}
                              className="h-8 w-8 object-contain"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = 'https://koinx-statics.s3.ap-south-1.amazonaws.com/currencies/DefaultCoin.svg';
                              }}
                            />
                          </span>
                          <span className="flex flex-col min-w-0">
                            <span className={`block font-semibold truncate ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.coin}</span>
                            <span className={`text-xs truncate ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>{item.coinName}</span>
                          </span>
                        </label>
                      </td>
                      <td className={`py-4 pr-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                        <span className={`block font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.totalHolding} {item.coin}</span>
                        <span className="text-xs">@ {formatCurrency(item.currentPrice)}</span>
                      </td>
                      <td className={`py-4 pr-4 font-semibold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>{formatCurrency(item.currentPrice * item.totalHolding)}</td>
                      <td className={`py-4 pr-4 font-semibold ${stcgClass}`}>{item.stcg.gain >= 0 ? '+' : ''}{formatCurrency(item.stcg.gain)}</td>
                      <td className={`py-4 pr-4 font-semibold ${ltcgClass}`}>{item.ltcg.gain >= 0 ? '+' : ''}{formatCurrency(item.ltcg.gain)}</td>
                      <td className={`py-4 font-semibold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>{isSelected ? `${item.totalHolding} ${item.coin}` : '-'}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className={`mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-blue-600 dark:text-blue-200">
              <ShieldCheck className="h-4 w-4" />
              Tax-loss harvesting preview
            </div>
            <button onClick={() => setShowAllHoldings((prev) => !prev)} className="font-semibold text-blue-500 hover:text-blue-400">
              {showAllHoldings ? 'Show less' : 'View all'}
            </button>
            <span>{selectedHoldings.length} selected</span>
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
