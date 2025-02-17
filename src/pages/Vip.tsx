import React, { ReactElement } from 'react';
import { Coins, Crown, Star, Zap, Gift, Diamond, Rocket } from 'lucide-react';
import '../styles/Shop.css'; // Importar os estilos

interface VipProps {
  icon: ReactElement, 
  title: String, 
  price: String, 
  period: String, 
  features: String[], 
  featured?: Boolean, 
  accentColor: String,
}

/**
 * Renders the VIP section of the Lunna Shop page.
 * Displays a header with a brief description and a list of VIP plans
 * including Basic, Premium, and Ultimate options. Each plan features
 * unique benefits such as enhanced Lunar Coins rewards, support levels,
 * and customization options. The component utilizes a grid layout for
 * the plan cards.
 */

const Vip = () => {
  return (
    <div className="shop-container">
      <div className="shop-content">
        {/* Shop Header */}
        <header className="shop-header">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fffffe] mb-4">
            Lunna Shop
          </h1>
          <p className="text-[#94a1b2] text-lg max-w-2xl mx-auto">
            Enhance your Lunna experience with premium features and Lunar Coins
          </p>
        </header>

        {/* Main Shop Content */}
        <main className="shop-sections">
          {/* VIP Plans */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-[#fffffe] mb-8 text-center">
              VIP Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PlanCard
                icon={<Star className="w-8 h-8" />}
                title="Basic VIP"
                price="4.99"
                period="month"
                features={[
                  "Access to basic VIP commands",
                  "1.5x Lunar Coins rewards",
                  "VIP role in support server",
                  "Basic profile customization"
                ]}
                accentColor="#7f5af0"
              />
              <PlanCard
                icon={<Crown className="w-8 h-8" />}
                title="Premium VIP"
                price="9.99"
                period="month"
                featured={true}
                features={[
                  "All Basic VIP features",
                  "2x Lunar Coins rewards",
                  "Priority support",
                  "Advanced profile customization",
                  "Exclusive casino games"
                ]}
                accentColor="#2cb67d"
              />
              <PlanCard
                icon={<Diamond className="w-8 h-8" />}
                title="Ultimate VIP"
                price="19.99"
                period="month"
                features={[
                  "All Premium VIP features",
                  "3x Lunar Coins rewards",
                  "Custom bot responses",
                  "Unlimited AI generation",
                  "Personal support channel"
                ]}
                accentColor="#7f5af0"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

/**
 * A card for a VIP plan.
 * @param {{ icon: ReactElement, title: string, price: string, period: string, features: string[], featured?: boolean, accentColor: string }} props
 * @returns {JSX.Element}
 */
const PlanCard = ({ icon, title, price, period, features, featured, accentColor }: VipProps) => (
    <div className={`card ${featured ? 'featured' : ''}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2cb67d] text-white px-4 py-1 rounded-full text-sm">
          Most Popular
        </div>
      )}
      <div className="card-icon">{icon}</div>
      <h3>{title}</h3>
      <p className="price">${price} <span>/{period}</span></p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}><Zap className="w-4 h-4" />{feature}</li>
        ))}
      </ul>
      <button>
        <Rocket className="w-5 h-5" />
        Get Started
      </button>
    </div>
  );
  
export default Vip;