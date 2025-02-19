import React, { useState } from 'react';
import { Menu, Coins, Brain, Dices, X } from 'lucide-react';

interface HomeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * Renders the Home page component.
 * This component includes a navigation bar with links to various sections
 * such as Features, Commands, Support, VIP, LunnarCoins, and Privacy Policy.
 * It also contains a hero section with a title, description, and buttons
 * for adding the Lunna Discord Bot and voting for it. Additionally, it
 * showcases key features of the bot using FeatureCard components.
 */

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <nav className="nav">
         <div className="nav-content container">
        <a href="/" className="nav-brand">Lunna</a>

        {/* Menu de links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#features" className="nav-link">Features</a>
          <a href="#commands" className="nav-link">Commands</a>
          <a href="https://discord.gg/DaUhFcjJfH" className="nav-link">Support</a>
          <a href="/vip" className="nav-link">Vips</a>
          <a href='/LunnarCoins' className='nav-link'>LunnarCoins</a>
          <a href='/Privacy' className='nav-link'>Privacy Policy</a>
        </div>

                {/* Botão de menu para mobile */}
          <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>
    </nav>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Lunna Discord Bot</h1>
          <p className="hero-description">
            Enhance your Discord server with powerful multipourpouse bot.
          </p>
          <button className="button-secondary" onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1222333304028659792&scope=bot&permissions=1099511627775', '_blank')}>Add to Discord</button>
          <button className="button-secondary" onClick={() => window.open('https://top.gg/bot/1222333304028659792', '_blank')}>Vote</button>
        </div>
      </section>
      <section id="features" className="features">
        <div className="container">
          <h2 className="features-title">Key Features</h2>
          <div className="features-grid">
            <FeatureCard
              icon={<Coins size={32} />}
              title="Economy"
              description="Rich and easy to play economy."
            />
            <FeatureCard
              icon={<Brain size={32} />}
              title="Artificial intelligence"
              description="Fast and easy to use artificial intelligence"
            />
            <FeatureCard
              icon={<Dices size={32} />}
              title="Casino"
              description="Multiple commands to create a super easy to play casino with the ability to play against your friends."
            />
          </div>
        </div>
      </section>
    </div>
  );
};


const FeatureCard = ({ icon, title, description }: HomeProps) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);
export default Home;