'use client';

import Link from 'next/link';

export default function AboutUsPage() {
  // heroContentRef removed (not used)

  return (
    <>
      <section className="social-media-section" style={{ padding: '40px 24px' }}>
        <div className="social-media-container">
          <div className="social-media-row">
            <div className="social-media-content">
              <h2>About CIO Power List MEA</h2>

              <p className="social-media-highlight">
                <strong>CIO Power List MEA</strong> is a prestigious recognition platform dedicated
                to honoring the most influential Chief Information Officers and technology leaders
                across the Middle East & Africa. It celebrates visionaries who are redefining
                digital transformation, driving innovation, and creating lasting business impact
                within their organizations.
              </p>

              <p>
                Organized by <strong>CORE Media (Centre of Recognition & Excellence)</strong>, CIO
                Power List MEA recognizes exceptional leaders whose strategic vision, technological
                innovation, and transformational leadership have accelerated business growth and
                strengthened the region&apos;s digital economy. The platform serves as a benchmark
                for excellence in enterprise technology leadership.
              </p>

              <p>
                The recognition process follows a transparent, research-driven methodology that
                evaluates leadership effectiveness, digital transformation initiatives, innovation,
                cybersecurity, business outcomes, peer recognition, and overall contribution to the
                ICT ecosystem. Every recognition reflects measurable achievements and sustained
                leadership excellence.
              </p>

              <p>
                Beyond recognition, CIO Power List MEA provides an exclusive platform where CIOs,
                technology executives, industry experts, and global technology partners collaborate
                through executive networking, leadership forums, knowledge-sharing sessions, and
                strategic partnerships. These engagements foster meaningful conversations that shape
                the future of enterprise technology across the Middle East & Africa.
              </p>

              <p>
                By bringing together the region&apos;s most accomplished technology leaders, CIO
                Power List MEA inspires innovation, encourages collaboration, and celebrates
                excellence while building a stronger and more connected ICT community for the
                future.
              </p>

              <div className="social-media-back">
                <Link href="/" className="social-media-back-btn">
                  ← Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="social-media-section">
        <div className="social-media-container">
          <div className="social-media-row">
            <div className="social-media-content">
              <img
                src="/assets/aboutus/about-core.png"
                alt="Explore CIO Choice"
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  marginBottom: '30px',
                  objectFit: 'cover',
                }}
              />

              <h2>Explore CORE Media</h2>

              <div className="social-media-back">
                <a
                  href="https://website.uatcoremedia.vebsigns.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-media-back-btn"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
