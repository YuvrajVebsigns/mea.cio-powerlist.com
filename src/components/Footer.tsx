'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, Send } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import { useState } from 'react';
import { submitSubscription } from '@/services/subscribers.service';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email.trim()) {
      setError('Please enter a valid email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await submitSubscription({ email });
      setSuccess(true);
      setEmail('');
      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to subscribe. Please try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="footer-section">
      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* COLUMN 1 */}
            {/* <div className="footer-widget footer-brand"> */}
            <Link href="/" className="footer-logo">
              <Image
                src="/assets/logo/logo2.png"
                alt="CORE Media"
                width={100}
                height={50}
                priority
              />
            </Link>

            {/* <p className="footer-description">
                Developing personalized customer journeys to increase customer satisfaction,
                engagement, and long-term loyalty for business growth.
              </p> */}
            {/* </div> */}

            {/* COLUMN 2 */}
            <div className="footer-widget">
              <h4 className="footer-title">Services</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/register">Registration</Link>
                </li>

                <li>
                  <Link href="/nominate">Nomination</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 3 */}
            <div className="footer-widget">
              <h4 className="footer-title">Resources</h4>

              <ul className="footer-links">
                <li>
                  <Link href="/blog">Blogs</Link>
                </li>

                <li>
                  <Link href="/events">Event</Link>
                </li>
              </ul>
            </div>

            {/* COLUMN 4 */}
            <div className="footer-widget">
              <h4 className="footer-title">Subscribe</h4>

              <form className="footer-subscribe" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  required
                />

                <button
                  type="submit"
                  className="footer-submit"
                  aria-label="Subscribe"
                  disabled={isLoading}
                >
                  <Send size={18} />
                </button>
              </form>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

              {success && <p className="text-green-500 text-sm mt-2">Subscribed successfully!</p>}

              <br />
              <h2 className="footer-description1">Office Address</h2>
              <p className="footer-description">
                Units Nos. 3037 – A1 Wing, 3rd Floor, Oberoi Garden Estate, Near Chandivali Studio,
                Andheri (East), Mumbai – 400072, INDIA
              </p>

              {/* <label className="footer-checkbox">
                <input type="checkbox" />

                <span>
                  I agree to the{' '}
                  <Link href="/" className="footer-terms">
                    Terms & Conditions
                  </Link>
                </span>
              </label> */}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-wrapper">
          {/* CONTACT */}
          <div className="footer-contact">
            <a href="tel:+917506035537" className="footer-contact-item">
              <span className="footer-contact-icon">
                <Phone size={15} />
              </span>

              <span className="footer-contact-text">+91 7506035537</span>
            </a>

            <div className="footer-contact-item">
              {/* <span className="footer-contact-icon">
                <Mail size={15} />
              </span> */}

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@core-mediagroup.com&su=Enquiry"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-item"
              >
                <span className="footer-contact-icon">
                  <Mail size={15} />
                </span>

                <span className="footer-contact-text">contact@core-mediagroup.com</span>
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/coremediaindia/" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/core_media_/" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="https://x.com/CIOChoice" aria-label="Twitter">
              <FaXTwitter />
            </a>

            <a href="https://www.linkedin.com/company/core-mediagroup/" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="footer-copy">Copyright © 2026 CORE Media. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
