import React from 'react';
import { Shield, Lock, Eye, Database, Bell, Clock, UserCheck, HelpCircle } from 'lucide-react';
import '../styles/Privacy.css';

/**
 * @description This component is used to render the privacy policy page.
 *              It renders the header, introduction, and policy sections.
 *              The policy sections include information collection, how we use information,
 *              data protection, user rights, data retention, updates to policy, and contact information.
 * @returns {ReactElement} A React component that renders the privacy policy page.
 */
const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        {/* Header */}
        <div className="privacy-header">
          <Shield className="w-16 h-16 mx-auto" />
          <h1>Privacy Policy</h1>
          <p>Last updated: February 17, 2025</p>
        </div>

        {/* Introduction */}
        <section className="privacy-sections">
          <p className="mb-4">
            Resume: You take responsibility for any image/video/audio/media sent to me, trying to abuse bugs/use bots/cheats is prohibited and you may lose access to all my features (and other services), we will collect information such as your ID, username, email, IP, avatar, servers, messages, media and other things (but we will not distribute such information to third parties), you will not defame/harm the image of Lunna, Onlykgzin, you may be suspended from using Lunna or any other service for any reason, that you will not be able to recover data if it is lost, and that you agree to everything that is in the terms of use.
          </p>
        </section>

        {/* Policy Sections */}
        <div className="privacy-section">
          {/* Information Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
                <Database className="w-6 h-6 text-[#7f5af0]" />
                Information We Collect
             </h2>
            </div>
            <div className="pl-6 space-y-4">
              <p>We collect the following information when you use Lunna:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Discord User ID and Username</li>
                <li>Email</li>
                <li>IP</li>
                <li>Servidores</li>
                <li>Avatar</li>
                <li>Mensagens & Media</li>
                <li>Transaction Information (for premium features)</li>
              </ul>
            </div>
          </section>

          {/* How We Use Information */}
          <section className="privacy-section">
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#7f5af0]" />
              How We Use Your Information</h2>
            </div>
            <div className="pl-6 space-y-4">
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions</li>
                <li>Responding to user inquiries and support requests</li>
                <li>Improving our services and user experience</li>
                <li>Sending important updates and notifications</li>
              </ul>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#7f5af0]" />
              Data Protection</h2>
            </div>
            <div className="pl-6">
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-[#7f5af0]" />
              Your Rights</h2>
            </div>
            <div className="pl-6 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Access your personal data</li>
                <li>Request correction of your personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of non-essential data collection</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#7f5af0]" />
              Data Retention</h2>
            </div>
            <div className="pl-6">
              <p className="mb-4">
                We retain your personal information only for as long as necessary to fulfill the 
                purposes outlined in this Privacy Policy and to comply with legal obligations.
              </p>
            </div>
          </section>

          {/* Updates to Policy */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <Bell className="w-6 h-6 text-[#7f5af0]" />
              Updates to This Policy</h2>
            </div>
            <div className="pl-6">
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify users of any 
                material changes through our Discord bot or website.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-[#fffffe] flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-[#7f5af0]" />
              Contact Us</h2>
            </div>
            <div className="pl-6">
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us through:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><a className='nav-link' href="https://discord.gg/DaUhFcjJfH" target='_blank'>Our Discord Support Server</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;