import { useState, useEffect } from 'react'
import './App.css'

// ─── Product Data ───────────────────────────────────────────────
const products = [
  { id: 1, name: 'Sakarias Armchair', category: 'Chair', price: 392, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80', badge: 'Best Seller' },
  { id: 2, name: 'Baltsar Chair', category: 'Chair', price: 299, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80' },
  { id: 3, name: 'Anjay Chair', category: 'Chair', price: 520, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&q=80' },
  { id: 4, name: 'Nyantuy Chair', category: 'Chair', price: 420, image: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=400&q=80' },
  { id: 5, name: 'Modern Lounge Bed', category: 'Bed', price: 1240, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80' },
  { id: 6, name: 'Classic Wooden Bed', category: 'Bed', price: 980, image: 'https://images.unsplash.com/photo-1505692952047-1a78307d8e4a?w=400&q=80' },
  { id: 7, name: 'Nordic Comfort Sofa', category: 'Sofa', price: 1800, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  { id: 8, name: 'Urban Leather Sofa', category: 'Sofa', price: 2100, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=400&q=80' },
  { id: 9, name: 'Minimal Desk Lamp', category: 'Lamp', price: 180, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=400&q=80' },
  { id: 10, name: 'Floor Reading Lamp', category: 'Lamp', price: 250, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80' },
]

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Interior Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80', text: 'The quality of furniture exceeded my expectations. Every piece feels premium and the delivery was incredibly fast. Highly recommended for anyone looking to elevate their space.' },
  { id: 2, name: 'Michael Chen', role: 'Homeowner', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80', text: 'I furnished my entire apartment with Panto. The minimalist designs perfectly match my aesthetic. Great value for the quality you get!' },
  { id: 3, name: 'Emily Rodriguez', role: 'Architect', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80', text: 'As an architect, I appreciate good design. Panto delivers exactly that — clean lines, sustainable materials, and timeless pieces that work in any space.' },
  { id: 4, name: 'David Kim', role: 'Real Estate Agent', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80', text: 'I recommend Panto to all my clients staging their homes. The furniture always photographs beautifully and helps sell properties faster.' },
]

const features = [
  { title: 'Luxury Facilities', desc: 'The advantage of hiring a workspace with luxury is an aesthetic that provides inspiration and relaxation.', icon: '✦' },
  { title: 'Affordable Price', desc: 'Costs are relatively affordable and you get the benefits of luxury at the same time for your interior.', icon: '💰' },
  { title: 'Many Choices', desc: 'We provide many design choices, from minimal to luxurious, with various styles and variations.', icon: '🛋️' },
]

const navLinks = ['Furniture', 'Shop', 'About Us', 'Contact']

// ─── Components ─────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="logo">Panto</a>
        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <a key={link} href="#" className="nav-link">{link}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#" className="icon-link" aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </a>
          <a href="#" className="icon-link" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </a>
          <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`bar ${mobileOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileOpen ? 'open' : ''}`}></span>
            <span className={`bar ${mobileOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-badge">Modern Interior</div>
          <h1 className="hero-title">
            Make Your Interior More<br />
            <span className="highlight">Minimalist & Modern</span>
          </h1>
          <p className="hero-desc">
            Turn your room with panto into a lot more minimalist and modern with ease and speed
          </p>
          <form className="hero-search" onSubmit={e => e.preventDefault()}>
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" placeholder="Search furniture..." name="search" id="search" />
            <button className="search-btn" type="submit">Search</button>
          </form>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="hero-image-bg"></div>
            <img
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80"
              alt="Modern orange sofa"
              className="hero-image"
            />
            <div className="floating-card card-1">
              <div className="card-dot orange"></div>
              <div>
                <p className="card-label">Pricing</p>
                <p className="card-value">$1,800</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-dot green"></div>
              <div>
                <p className="card-label">Discount</p>
                <p className="card-value card-value--green">50% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhyChoosingUs() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-label">Why Choosing Us</div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BestSelling() {
  const [activeCategory, setActiveCategory] = useState('Chair')
  const [animateKey, setAnimateKey] = useState(0)
  const categories = ['Chair', 'Bed', 'Sofa', 'Lamp']

  const filtered = products.filter(p => p.category === activeCategory)

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat)
    setAnimateKey(prev => prev + 1)
  }

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-label">Best Selling Product</div>
        <div className="category-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="products-grid" key={animateKey}>
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-wrap">
                <img src={product.image} alt={product.name} loading="lazy" />
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <button className="product-add" aria-label="Add to cart">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                  </svg>
                </button>
              </div>
              <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">${product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container experience-grid">
        <div className="experience-visual">
          <div className="exp-image-main">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80"
              alt="Modern living room"
              loading="lazy"
            />
          </div>
          <div className="exp-image-small">
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=300&q=80"
              alt="Interior detail"
              loading="lazy"
            />
          </div>
          <div className="exp-stats">
            <p className="exp-stat-value">15+</p>
            <p className="exp-stat-label">Years Experience</p>
          </div>
        </div>
        <div className="experience-content">
          <div className="section-label">Experience</div>
          <h2 className="experience-title">We Provide You The Best Experience</h2>
          <p className="experience-desc">
            We have a team of professional interior designers, architects, and craftsmen dedicated to creating the most beautiful and functional spaces for you. With over 15 years of experience in the industry, we understand what makes a house a home.
          </p>
          <div className="experience-stats-row">
            <div className="stat-item">
              <p className="stat-number">15+</p>
              <p className="stat-text">Years Experience</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">10K+</p>
              <p className="stat-text">Happy Customers</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">250+</p>
              <p className="stat-text">Design Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Materials() {
  return (
    <section className="materials-section" id="materials">
      <div className="container materials-grid">
        <div className="materials-content">
          <div className="section-label">Materials</div>
          <h2 className="materials-title">Very Serious Materials For Making Furniture</h2>
          <p className="materials-desc">
            Because panto was very serious about designing furniture for your home, we have been using 100% premium materials since day one. Sourced from the finest suppliers around the world, each piece is crafted with precision and care.
          </p>
          <a href="#" className="materials-cta">
            Learn More
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
        <div className="materials-visual">
          <div className="mat-grid">
            <div className="mat-item mat-item--1">
              <img src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=300&q=80" alt="Chair" loading="lazy" />
            </div>
            <div className="mat-item mat-item--2">
              <img src="https://images.unsplash.com/photo-1592078615290-033ee584e267?w=300&q=80" alt="Interior" loading="lazy" />
            </div>
            <div className="mat-item mat-item--3">
              <img src="https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=300&q=80" alt="Sofa" loading="lazy" />
            </div>
            <div className="mat-item mat-item--4">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80" alt="Living room" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-label">Testimonials</div>
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <div className="testimonial-carousel">
          <button className="carousel-arrow prev" onClick={prev} aria-label="Previous review">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
            {testimonials.map(t => (
              <div key={t.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {'★'.repeat(5)}
                </div>                  <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow next" onClick={next} aria-label="Next review">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </div>
        <div className="carousel-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a href="#" className="footer-logo">Panto</a>
          <p className="footer-tagline">
            The advantage of hiring a workspace with luxury is an aesthetic that provides inspiration.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
            </a>
            <a href="#" className="social-link" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Services</h4>
          <a href="#">Interior Design</a>
          <a href="#">Furniture Customization</a>
          <a href="#">Space Planning</a>
          <a href="#">Consultation</a>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Furniture</h4>
          <a href="#">Living Room</a>
          <a href="#">Bedroom</a>
          <a href="#">Dining Room</a>
          <a href="#">Office</a>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Follow Us</h4>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p>© 2024 Panto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ────────────────────────────────────────────────────────

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <WhyChoosingUs />
        <BestSelling />
        <Experience />
        <Materials />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
