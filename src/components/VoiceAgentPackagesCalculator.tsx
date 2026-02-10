import { useState, useEffect, useRef } from 'react';
import { Check, Phone, Shield, Zap, ChevronDown, TrendingUp, Calculator, DollarSign } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from './SEO';
import { StarsCanvas } from './StarBackground';
import { saveLeadData } from '../utils/leadData';

interface Package {
  id: string;
  name: string;
  zarPrice: number | 'custom';
  callsIncluded: number | string;
  setupFee: number;
  costPerCall: number | string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
  gradient: string;
  tier: 'basic' | 'enterprise';
}

export function VoiceAgentPackagesCalculator() {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState<'USD' | 'ZAR' | 'EUR'>('USD');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [abandonedCarts, setAbandonedCarts] = useState(500);
  const [cartValue, setCartValue] = useState(2000);
  const [recommendedPackageId, setRecommendedPackageId] = useState<string>('essential');
  const packageRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Exchange rates
  const USD_TO_ZAR = 18;
  const USD_TO_EUR = 0.95;

  // Package data
  const packages: Package[] = [
    {
      id: 'potential',
      name: 'Potential',
      zarPrice: 7200,
      callsIncluded: 200,
      setupFee: 1150,
      costPerCall: 36.00,
      description: 'Small businesses testing voice automation. Perfect for getting started with abandoned cart recovery.',
      features: [
        'AI voice agent calls abandoned carts',
        'Works during business hours only',
        'Escalates hot leads to sales team',
        'Do-not-call list management',
        'Voucher sending capability',
        'Monthly performance reports',
        'Email support (24-hour response)',
        '48-hour setup time',
      ],
      highlighted: false,
      gradient: 'from-blue-500 to-cyan-500',
      tier: 'basic',
    },
    {
      id: 'essential',
      name: 'Essential',
      zarPrice: 15400,
      callsIncluded: 500,
      setupFee: 0,
      costPerCall: 30.80,
      description: 'Growing e-commerce with increasing customer touchpoints. Best value per call in this range.',
      features: [
        'Everything in Potential',
        'FREE setup (save R1,150)',
        'Standard support',
        'Unlimited do-not-call updates',
        'Monthly performance reports',
        'POPIA compliance',
        'Upgrade/downgrade flexibility',
        'No long-term contracts',
      ],
      highlighted: true,
      badge: 'Best Value',
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      tier: 'basic',
    },
    {
      id: 'professional',
      name: 'Professional',
      zarPrice: 16700,
      callsIncluded: 1000,
      setupFee: 0,
      costPerCall: 16.70,
      description: 'Established businesses scaling customer engagement. Best per-call rate - 54% cheaper than Potential.',
      features: [
        'Everything in Essential',
        'BEST per-call rate (R16.70)',
        'Priority email support',
        'Bi-weekly performance reviews',
        'Custom knowledge base optimization',
        'Advanced call analytics',
        'Multi-channel integration',
        'Dedicated onboarding specialist',
      ],
      highlighted: false,
      gradient: 'from-purple-500 to-pink-500',
      tier: 'basic',
    },
    {
      id: 'business',
      name: 'Business',
      zarPrice: 33400,
      callsIncluded: 2000,
      setupFee: 0,
      costPerCall: 16.70,
      description: 'High-volume e-commerce operations. Predictable scaling with the same excellent per-call rate.',
      features: [
        'Everything in Professional',
        'Priority phone support',
        'Weekly performance calls',
        'Advanced call analytics',
        'Multi-product optimization',
        'Custom integration support',
        'Dedicated account manager',
        'API access for custom workflows',
      ],
      highlighted: false,
      gradient: 'from-orange-500 to-red-500',
      tier: 'enterprise',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      zarPrice: 'custom',
      callsIncluded: '5,000+',
      setupFee: 0,
      costPerCall: 'Negotiable',
      description: 'Enterprise clients with unique needs. Fully custom solutions tailored to your requirements.',
      features: [
        'Everything in Business',
        'Unlimited call minutes',
        'Fully custom solutions',
        'API access & white-label options',
        'SLA guarantees',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced AI customization',
        'Multi-location support',
        'Monthly strategy sessions',
      ],
      highlighted: false,
      gradient: 'from-purple-600 to-indigo-600',
      tier: 'enterprise',
    },
  ];

  // Currency conversion functions
  const convertFromZAR = (zarAmount: number): number => {
    if (currency === 'USD') {
      return Math.round(zarAmount / USD_TO_ZAR);
    } else if (currency === 'EUR') {
      return Math.round((zarAmount / USD_TO_ZAR) * USD_TO_EUR);
    }
    return zarAmount;
  };

  const formatPrice = (zarAmount: number | 'custom'): string => {
    if (zarAmount === 'custom') return 'Custom';
    
    const converted = convertFromZAR(zarAmount);
    
    if (currency === 'USD') {
      return `$${converted.toLocaleString()}`;
    } else if (currency === 'EUR') {
      return `€${converted.toLocaleString()}`;
    }
    return `R ${zarAmount.toLocaleString()}`;
  };

  const getCurrencySymbol = (): string => {
    if (currency === 'USD') return '$';
    if (currency === 'EUR') return '€';
    return 'R ';
  };

  // ROI Calculator logic
  const calculateRecommendedPackage = (carts: number): string => {
    if (carts <= 200) return 'potential';
    if (carts <= 500) return 'essential';
    if (carts <= 1000) return 'professional';
    if (carts <= 5000) return 'business';
    return 'enterprise';
  };

  useEffect(() => {
    const recommended = calculateRecommendedPackage(abandonedCarts);
    setRecommendedPackageId(recommended);
  }, [abandonedCarts]);

  const getPackagePrice = (packageId: string): number => {
    const pkg = packages.find(p => p.id === packageId);
    if (!pkg || pkg.zarPrice === 'custom') return 0;
    return convertFromZAR(pkg.zarPrice);
  };

  const convertCartValueToZAR = (value: number): number => {
    if (currency === 'USD') return value * USD_TO_ZAR;
    if (currency === 'EUR') return (value / USD_TO_EUR) * USD_TO_ZAR;
    return value;
  };

  const cartValueZAR = convertCartValueToZAR(cartValue);
  const totalRevenueAtRisk = abandonedCarts * cartValueZAR;
  const recovery3Percent = totalRevenueAtRisk * 0.03;
  const recovery5Percent = totalRevenueAtRisk * 0.05;
  
  const recommendedPackage = packages.find(p => p.id === recommendedPackageId);
  const monthlyInvestmentZAR = recommendedPackage && recommendedPackage.zarPrice !== 'custom' ? recommendedPackage.zarPrice : 0;
  const monthlyInvestment = monthlyInvestmentZAR ? convertFromZAR(monthlyInvestmentZAR) : 0;
  
  const netProfit3 = recovery3Percent - monthlyInvestmentZAR;
  const netProfit5 = recovery5Percent - monthlyInvestmentZAR;
  const roiMultiple3 = monthlyInvestmentZAR > 0 ? recovery3Percent / monthlyInvestmentZAR : 0;
  const roiMultiple5 = monthlyInvestmentZAR > 0 ? recovery5Percent / monthlyInvestmentZAR : 0;

  const scrollToPackage = (packageId: string) => {
    const element = packageRefs.current[packageId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add pulse animation
      element.classList.add('animate-pulse');
      setTimeout(() => {
        element.classList.remove('animate-pulse');
      }, 2000);
    }
  };

  const handlePlanSelection = (pkg: Package) => {
    const priceDisplay = pkg.zarPrice === 'custom' ? 'Custom Pricing' : `${formatPrice(pkg.zarPrice)}/month`;
    
    saveLeadData({
      source: 'pricing-calculator',
      pricing: {
        planName: pkg.name,
        serviceType: 'voice-agents-calculator',
        paymentPlan: 'Monthly Subscription',
        price: priceDisplay,
        calculatorInputs: {
          abandonedCarts,
          cartValue: `${getCurrencySymbol()}${cartValue}`,
          recommendedPackage: recommendedPackageId,
        },
        timestamp: new Date().toISOString(),
      },
    });
    
    navigate('/contact');
  };

  // Feature comparison data
  const comparisonFeatures = [
    { name: 'Monthly Price', potential: 'R7,200', essential: 'R15,400', professional: 'R16,700', business: 'R33,400', enterprise: 'Custom' },
    { name: 'Setup Fee', potential: 'R1,150', essential: 'FREE', professional: 'FREE', business: 'FREE', enterprise: 'FREE' },
    { name: 'Calls Included', potential: '200', essential: '500', professional: '1,000', business: '2,000', enterprise: '5,000+' },
    { name: 'Cost Per Call', potential: 'R36.00', essential: 'R30.80', professional: 'R16.70', business: 'R16.70', enterprise: 'Negotiable' },
    { name: 'Business Hours Calling', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Hot Lead Escalation', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Do-Not-Call Management', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Voucher Distribution', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Monthly Reports', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Standard Support', potential: true, essential: true, professional: true, business: true, enterprise: true },
    { name: 'Priority Email Support', potential: false, essential: false, professional: true, business: true, enterprise: true },
    { name: 'Priority Phone Support', potential: false, essential: false, professional: false, business: true, enterprise: true },
    { name: 'Bi-weekly Reviews', potential: false, essential: false, professional: true, business: false, enterprise: false },
    { name: 'Weekly Performance Calls', potential: false, essential: false, professional: false, business: true, enterprise: true },
    { name: 'Monthly Strategy Sessions', potential: false, essential: false, professional: false, business: false, enterprise: true },
    { name: 'Dedicated Account Manager', potential: false, essential: false, professional: false, business: false, enterprise: true },
    { name: 'Custom Integrations', potential: false, essential: false, professional: false, business: false, enterprise: true },
    { name: 'API Access', potential: false, essential: false, professional: false, business: false, enterprise: true },
    { name: 'White-Label Options', potential: false, essential: false, professional: false, business: false, enterprise: true },
    { name: 'SLA Guarantees', potential: false, essential: false, professional: false, business: false, enterprise: true },
  ];

  const [showComparison, setShowComparison] = useState(false);

  const basicPackages = packages.filter(p => p.tier === 'basic');
  const enterprisePackages = packages.filter(p => p.tier === 'enterprise');

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e]">
      <SEO
        title="Voice Agent Packages & ROI Calculator | Abandoned Cart Recovery"
        description="Calculate your ROI and choose the perfect voice agent package for your e-commerce business. From R7,200/month (Potential) to custom Enterprise solutions."
        path="/pricing/voice-agents/packages-calculator"
        keywords="voice agent pricing calculator, abandoned cart recovery ROI, e-commerce voice automation, cart recovery packages, AI calling service pricing"
      />
      
      <StarsCanvas />

      {/* Hero Section */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center relative z-10">
          <div className="h-2 sm:h-4 mb-4 sm:mb-6"></div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl gradient-text mb-4 sm:mb-6">
            Voice Agent Packages
          </h1>
          <p className="text-xl sm:text-2xl text-white/60 max-w-3xl mx-auto mb-4">
            Recover lost revenue with AI-powered abandoned cart calls. Choose your package and calculate your ROI below.
          </p>
          <p className="text-lg sm:text-xl text-indigo-400 font-semibold mb-8 sm:mb-12">
            Starting at {formatPrice(7200)}/month
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={() => setCurrency('USD')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'USD'
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-2 border-purple-300/50 shadow-lg shadow-purple-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-medium">USD</span>
            </button>
            <button
              onClick={() => setCurrency('EUR')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'EUR'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-2 border-cyan-300/50 shadow-lg shadow-blue-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-bold text-sm sm:text-base">€</span>
              <span className="font-medium">EUR</span>
            </button>
            <button
              onClick={() => setCurrency('ZAR')}
              className={`flex items-center space-x-1.5 sm:space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 text-base sm:text-lg ${
                currency === 'ZAR'
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white border-2 border-emerald-300/50 shadow-lg shadow-green-500/50'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className="font-bold text-sm sm:text-base">R</span>
              <span className="font-medium">ZAR</span>
            </button>
          </div>
        </div>
      </section>

      {/* Basic Packages */}
      <section className="relative pt-10 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-3 sm:mb-4">
              Essential Packages
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Perfect for small to medium businesses looking to recover abandoned carts
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {basicPackages.map((pkg) => (
              <div
                key={pkg.id}
                ref={(el) => { packageRefs.current[pkg.id] = el; }}
                className={`card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border transition-all ${
                  pkg.highlighted 
                    ? 'border-purple-500 lg:scale-105' 
                    : recommendedPackageId === pkg.id
                    ? 'border-green-500 ring-2 ring-green-500/50'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {pkg.badge && (
                  <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-1.5 px-4 text-center">
                    <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">{pkg.badge}</span>
                  </div>
                )}
                {recommendedPackageId === pkg.id && !pkg.badge && (
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 py-1.5 px-4 text-center">
                    <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">Recommended For You</span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="text-white mb-4 text-2xl sm:text-3xl font-bold">{pkg.name}</h3>
                  
                  <div className="mb-4 sm:mb-6">
                    <div className="text-4xl sm:text-5xl text-white mb-2">
                      {formatPrice(pkg.zarPrice)}
                      <span className="text-white/50 ml-2 text-lg sm:text-xl">/month</span>
                    </div>
                    {pkg.setupFee > 0 && (
                      <div className="text-base sm:text-lg text-white/50">
                        + {formatPrice(pkg.setupFee)} setup fee
                      </div>
                    )}
                    {pkg.setupFee === 0 && (
                      <div className="text-base sm:text-lg text-green-400">
                        FREE setup (save {formatPrice(1150)})
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4 sm:mb-6 text-center py-3 px-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/60 text-sm mb-1">Included Calls</div>
                    <div className="text-2xl font-bold text-white">{pkg.callsIncluded}</div>
                    <div className="text-white/60 text-sm mt-1">{formatPrice(typeof pkg.costPerCall === 'number' ? pkg.costPerCall : 0)}/call</div>
                  </div>
                  
                  <p className="text-white/60 mb-6 sm:mb-8 text-base sm:text-lg">{pkg.description}</p>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-white/70 text-base sm:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelection(pkg)}
                    className={`block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl ${
                      pkg.highlighted
                        ? 'btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105'
                        : 'glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business & Enterprise Packages */}
      <section className="relative pt-10 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text mb-3 sm:mb-4">
              Scale & Enterprise
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              For high-volume operations and custom enterprise solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {enterprisePackages.map((pkg) => (
              <div
                key={pkg.id}
                ref={(el) => { packageRefs.current[pkg.id] = el; }}
                className={`card-3d relative overflow-hidden rounded-3xl sm:rounded-[2.5rem] glass border transition-all ${
                  recommendedPackageId === pkg.id
                    ? 'border-green-500 ring-2 ring-green-500/50'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {recommendedPackageId === pkg.id && (
                  <div className="relative bg-gradient-to-r from-green-500 to-emerald-500 py-1.5 px-4 text-center">
                    <span className="text-white font-medium text-xs sm:text-sm tracking-wider uppercase">Recommended For You</span>
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="text-white mb-4 text-2xl sm:text-3xl font-bold">{pkg.name}</h3>
                  
                  <div className="mb-4 sm:mb-6">
                    {pkg.zarPrice === 'custom' ? (
                      <div className="text-4xl sm:text-5xl text-white mb-2">
                        Custom Pricing
                      </div>
                    ) : (
                      <>
                        <div className="text-4xl sm:text-5xl text-white mb-2">
                          {formatPrice(pkg.zarPrice)}
                          <span className="text-white/50 ml-2 text-lg sm:text-xl">/month</span>
                        </div>
                        <div className="text-base sm:text-lg text-green-400">
                          FREE setup
                        </div>
                      </>
                    )}
                  </div>
                  
                  <div className="mb-4 sm:mb-6 text-center py-3 px-4 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-white/60 text-sm mb-1">Included Calls</div>
                    <div className="text-2xl font-bold text-white">{pkg.callsIncluded}</div>
                    {pkg.zarPrice !== 'custom' && (
                      <div className="text-white/60 text-sm mt-1">{formatPrice(typeof pkg.costPerCall === 'number' ? pkg.costPerCall : 0)}/call</div>
                    )}
                  </div>
                  
                  <p className="text-white/60 mb-6 sm:mb-8 text-base sm:text-lg">{pkg.description}</p>
                  
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="text-white/70 text-base sm:text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelection(pkg)}
                    className="block w-full py-3 sm:py-4 px-6 rounded-full text-center font-semibold transition-all duration-300 text-lg sm:text-xl glass border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 hover:scale-105"
                  >
                    {pkg.zarPrice === 'custom' ? 'Contact Our Team' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white mb-6 sm:mb-8">
              <Calculator className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-4 sm:mb-6">
              ROI Calculator
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              See your potential return on investment and get a personalized package recommendation
            </p>
          </div>

          <div className="card-3d glass border border-white/10 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10">
            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              <div>
                <label className="block text-white mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
                  Monthly Abandoned Carts
                </label>
                <input
                  type="range"
                  min="50"
                  max="5050"
                  step="50"
                  value={Math.min(abandonedCarts, 5050)}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setAbandonedCarts(val > 5000 ? 5001 : val);
                  }}
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider mb-3"
                />
                {abandonedCarts > 5000 ? (
                  <div className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-white text-xl font-bold text-center">
                    5,000+
                  </div>
                ) : (
                  <input
                    type="number"
                    min={50}
                    max={5000}
                    value={abandonedCarts}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      if (val > 5000) {
                        setAbandonedCarts(5001);
                      } else {
                        setAbandonedCarts(val);
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xl font-bold text-center focus:outline-none focus:border-purple-500 transition-colors"
                  />
                )}
              </div>
              
              <div>
                <label className="block text-white mb-3 sm:mb-4 text-lg sm:text-xl font-semibold">
                  Average Cart Value ({getCurrencySymbol()})
                </label>
                <input
                  type="range"
                  min={currency === 'ZAR' ? 500 : currency === 'EUR' ? 25 : 30}
                  max={currency === 'ZAR' ? 54000 : currency === 'EUR' ? 2850 : 3000}
                  step={currency === 'ZAR' ? 500 : 50}
                  value={cartValue}
                  onChange={(e) => setCartValue(Number(e.target.value))}
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer slider mb-3"
                />
                <input
                  type="number"
                  value={cartValue}
                  onChange={(e) => setCartValue(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xl font-bold text-center focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-4 sm:space-y-6">
              <div className="text-center py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                <div className="text-white/70 text-sm sm:text-base mb-1">Total Revenue at Risk</div>
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {getCurrencySymbol()}{convertFromZAR(totalRevenueAtRisk).toLocaleString()}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center py-4 px-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-white/70 text-sm sm:text-base mb-1">Recommended Package</div>
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    {recommendedPackage?.name}
                  </div>
                  <button
                    onClick={() => scrollToPackage(recommendedPackageId)}
                    className="mt-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    View Package Details ↑
                  </button>
                </div>
                
                <div className="text-center py-4 px-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-white/70 text-sm sm:text-base mb-1">Monthly Investment</div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">
                    {recommendedPackageId === 'enterprise' ? 'Custom' : `${getCurrencySymbol()}${monthlyInvestment.toLocaleString()}`}
                  </div>
                </div>
              </div>

              {recommendedPackageId !== 'enterprise' && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center py-6 px-6 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-blue-400" />
                        <div className="text-blue-400 text-sm sm:text-base font-semibold">3% Recovery Rate</div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {getCurrencySymbol()}{convertFromZAR(recovery3Percent).toLocaleString()}
                      </div>
                      <div className="text-white/60 text-sm">
                        Net Profit: {getCurrencySymbol()}{convertFromZAR(netProfit3).toLocaleString()}
                      </div>
                      <div className="text-blue-400 text-lg sm:text-xl font-bold mt-2">
                        {roiMultiple3.toFixed(1)}x ROI
                      </div>
                    </div>
                    
                    <div className="text-center py-6 px-6 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <div className="text-green-400 text-sm sm:text-base font-semibold">5% Recovery Rate</div>
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {getCurrencySymbol()}{convertFromZAR(recovery5Percent).toLocaleString()}
                      </div>
                      <div className="text-white/60 text-sm">
                        Net Profit: {getCurrencySymbol()}{convertFromZAR(netProfit5).toLocaleString()}
                      </div>
                      <div className="text-green-400 text-lg sm:text-xl font-bold mt-2">
                        {roiMultiple5.toFixed(1)}x ROI
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-white/60 text-sm sm:text-base">
                    Based on industry average recovery rates of 3-7% for abandoned cart voice calls
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-4 sm:mb-6">
              Feature Comparison
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
              Compare features across all packages
            </p>
          </div>

          <div className="card-3d glass border border-white/10 rounded-3xl sm:rounded-[2.5rem] overflow-hidden">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="w-full p-6 sm:p-8 flex items-center justify-between hover:bg-white/5 transition-colors"
            >
              <h3 className="text-2xl sm:text-3xl text-white font-semibold">View Full Comparison Table</h3>
              <ChevronDown className={`w-6 h-6 text-white transition-transform ${showComparison ? 'rotate-180' : ''}`} />
            </button>
            
            {showComparison && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-t border-white/10">
                      <th className="text-left p-4 sm:p-6 text-white/80 font-semibold text-base sm:text-lg">Feature</th>
                      <th className="text-center p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">Potential</th>
                      <th className="text-center p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">Essential</th>
                      <th className="text-center p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">Professional</th>
                      <th className="text-center p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">Business</th>
                      <th className="text-center p-4 sm:p-6 text-white font-semibold text-base sm:text-lg">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, idx) => (
                      <tr key={idx} className="border-t border-white/10">
                        <td className="p-4 sm:p-6 text-white/70 text-sm sm:text-base">{feature.name}</td>
                        <td className="p-4 sm:p-6 text-center text-white text-sm sm:text-base">
                          {typeof feature.potential === 'boolean' ? (
                            feature.potential ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/30">-</span>
                          ) : (
                            feature.potential
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center text-white text-sm sm:text-base">
                          {typeof feature.essential === 'boolean' ? (
                            feature.essential ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/30">-</span>
                          ) : (
                            feature.essential
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center text-white text-sm sm:text-base">
                          {typeof feature.professional === 'boolean' ? (
                            feature.professional ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/30">-</span>
                          ) : (
                            feature.professional
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center text-white text-sm sm:text-base">
                          {typeof feature.business === 'boolean' ? (
                            feature.business ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/30">-</span>
                          ) : (
                            feature.business
                          )}
                        </td>
                        <td className="p-4 sm:p-6 text-center text-white text-sm sm:text-base">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? <Check className="w-5 h-5 text-green-400 mx-auto" /> : <span className="text-white/30">-</span>
                          ) : (
                            feature.enterprise
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl gradient-text mb-4 sm:mb-6">
              What's Included
            </h2>
            <p className="text-lg sm:text-xl text-white/60">
              Every package includes these essential features
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: <Phone className="w-6 h-6" />, title: 'AI Voice Agent', desc: 'Professionally trained South African voice agent' },
              { icon: <Shield className="w-6 h-6" />, title: 'POPIA Compliance', desc: 'Fully compliant with SA data protection laws' },
              { icon: <Zap className="w-6 h-6" />, title: '48-Hour Setup', desc: 'Live and operational in less than 2 business days' },
              { icon: <Check className="w-6 h-6" />, title: 'Business Hours Only', desc: 'Calls during your specified work hours' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Hot Lead Escalation', desc: 'Automatic escalation to your sales team' },
              { icon: <Shield className="w-6 h-6" />, title: 'NDA Protection', desc: 'Full non-disclosure agreement signed' },
            ].map((item, idx) => (
              <div key={idx} className="card-3d glass border border-white/10 rounded-2xl sm:rounded-3xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white mb-2 text-lg sm:text-xl font-semibold">{item.title}</h4>
                    <p className="text-white/60 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Guarantee */}
      <section className="relative pt-16 sm:pt-20 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10"></div>
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 text-white mb-6 sm:mb-8">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h2 className="text-4xl sm:text-5xl gradient-text mb-4 sm:mb-6">
                60-Day Performance Guarantee
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8">
                If your recovery rate is below 3% in the first 60 days, we'll refund your second month completely.
              </p>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8">
                You risk only ONE month of investment to prove ROI. Our average recovery rate is 3-7% across all South African e-commerce clients. We only succeed when you succeed.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">No Contracts</h4>
                  <p className="text-white/60 text-base sm:text-lg">Cancel anytime, no questions</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">Transparent Pricing</h4>
                  <p className="text-white/60 text-base sm:text-lg">No hidden fees or surprises</p>
                </div>
                <div className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h4 className="text-white mb-1 sm:mb-2 text-lg sm:text-xl">Proven Results</h4>
                  <p className="text-white/60 text-base sm:text-lg">3-7% average recovery rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative pt-12 sm:pt-16 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl gradient-text text-center mb-8 sm:mb-10">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: 'What if we go over our call limit in a month?',
                a: 'You can upgrade to the next package anytime, and we\'ll prorate the difference. No overage fees or penalties - we just move you to the tier that fits.',
              },
              {
                q: 'Can we downgrade if call volume decreases?',
                a: 'Yes, absolutely. Month-to-month flexibility. Downgrade anytime with 30 days notice, effective next billing cycle.',
              },
              {
                q: 'How long are typical calls?',
                a: 'Average 60-90 seconds. The agent is trained to respect customer time - she gets straight to the point and doesn\'t waste time with fluff.',
              },
              {
                q: 'Do you require long-term contracts?',
                a: 'No. All packages are month-to-month. Cancel anytime with 30 days written notice. We earn your business every single month.',
              },
              {
                q: 'What about POPIA compliance?',
                a: 'Fully compliant. NDA signed, all data encrypted, customers can opt-out anytime, DNC list maintained religiously. We take data protection seriously.',
              },
              {
                q: 'Can the agent handle technical questions?',
                a: 'She can handle common FAQs (shipping, returns, payment methods). For complex technical issues, she immediately escalates to your sales team with full context.',
              },
              {
                q: 'What languages does the agent speak?',
                a: 'Currently English and Afrikaans (South African accents). Additional languages available on Professional+ packages.',
              },
              {
                q: 'Can we pause the service temporarily?',
                a: 'Yes, with 7 days notice. We\'ll pause your account and billing. Resume anytime. Great for seasonal businesses.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-3d glass border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-start justify-between gap-3"
                >
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg sm:text-xl mb-0">{faq.q}</h3>
                    {openFAQ === idx && (
                      <p className="text-white/70 mt-2 sm:mt-3 text-base leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-white/60 flex-shrink-0 transition-transform ${
                      openFAQ === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="relative overflow-hidden rounded-3xl sm:rounded-[3rem] glass border border-white/10 p-8 sm:p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-5xl sm:text-6xl md:text-7xl text-white mb-4 sm:mb-6">
                Ready to Recover Lost Revenue?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-6 sm:mb-8">
                Schedule a free consultation to discuss which package is right for your business.
              </p>
              <Link
                to="/contact"
                className="inline-block btn-3d bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 hover:scale-105 transition-all duration-300 text-lg sm:text-xl"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
