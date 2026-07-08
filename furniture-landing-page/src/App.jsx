import { useState, useEffect, useRef } from 'react'
import './App.css'

// ─── Data ────────────────────────────────────────────────────────
const products = [
  // Chairs
  { id: 1, name: 'Sakarias Armchair', category: 'Chair', price: 392, image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&q=80', rating: 5 },
  { id: 2, name: 'Baltsar Chair', category: 'Chair', price: 299, image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', rating: 5 },
  { id: 3, name: 'Anjay Chair', category: 'Chair', price: 519, image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80', rating: 5 },
  { id: 4, name: 'Nyantuy Chair', category: 'Chair', price: 921, image: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?w=500&q=80', rating: 5 },
  // Beds
  { id: 5, name: 'Modern Lounge Bed', category: 'Beds', price: 1240, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&q=80', rating: 5 },
  { id: 6, name: 'Classic Wooden Bed', category: 'Beds', price: 980, image: 'https://images.unsplash.com/photo-1505692952047-1a78307d8e4a?w=500&q=80', rating: 5 },
  // Sofas
  { id: 7, name: 'Nordic Comfort Sofa', category: 'Sofa', price: 1800, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80', rating: 5 },
  { id: 8, name: 'Urban Leather Sofa', category: 'Sofa', price: 2100, image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80', rating: 5 },
  // Lamps
  { id: 9, name: 'Minimal Desk Lamp', category: 'Lamp', price: 180, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=500&q=80', rating: 5 },
  { id: 10, name: 'Floor Reading Lamp', category: 'Lamp', price: 250, image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&q=80', rating: 5 },
]

const testimonials = [
  {
    id: 1,
    name: 'Bang Upin',
    role: 'Pedagang Asongan',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    text: 'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
    rating: 5,
    bgImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80'
  },
  {
    id: 2,
    name: 'Ibuk Sukijan',
    role: 'Ibu Rumah Tangga',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    text: 'Makasih Panto, aku sekarang merasa tinggal di apartment karena barang-barang yang terlihat mewah',
    rating: 5,
    bgImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80'
  },
  {
    id: 3,
    name: 'Mpok Ina',
    role: 'Karyawan Swasta',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    text: 'Sangat terjangkau untuk kantong saya yang tidak terlalu banyak',
    rating: 5,
    bgImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80'
  }
]

const features = [
  {
    title: 'Luxury facilities',
    desc: 'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.'
  },
  {
    title: 'Affordable Price',
    desc: 'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.'
  },
  {
    title: 'Many Choices',
    desc: 'We provide many unique work space choices so that you can choose the workspace to your liking.'
  }
]

// Hotspots for the Hero background image
const hotspots = [
  { id: 1, top: '23%', left: '19%', title: 'Minimalist Lamp', price: 99 },
  { id: 2, top: '38%', left: '21%', title: 'Orange Leather Sofa', price: 1800 },
  { id: 3, top: '56%', left: '55%', title: 'Wooden Table', price: 350 },
  { id: 4, top: '58%', left: '8%', title: 'Premium Flower Pot', price: 45 },
  { id: 5, top: '59%', left: '96%', title: 'Cozy Wool Blanket', price: 65 }
]

function Header({ cartCount }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">Panto</a>
        <nav className={`nav ${mobileOpen ? 'open' : ''}`}>
          <div className="nav-item-dropdown">
            <a href="#" className="nav-link">Furniture</a>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 1L5 5L9 1" />
            </svg>
          </div>
          <a href="#" className="nav-link">Shop</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        <div className="header-actions">
          <div className="cart-icon-container">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className="cart-badge">{cartCount}</span>
          </div>
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
  const [activePin, setActivePin] = useState(null)

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <h1 className="hero-title">
          Make Your Interior More<br />
          Minimalistic & Modern
        </h1>
        <p className="hero-desc">
          Turn your room with panto into a lot more minimalist<br />
          and modern with ease and speed
        </p>
        <form className="hero-search" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Search furniture" name="search" id="search" />
          <button className="search-btn" type="submit" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
        </form>
      </div>

      <div className="hero-visual-container">
        <img
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80"
          alt="Modern living room setup"
          className="hero-bg-image"
        />
        {/* Hotspots */}
        {hotspots.map((pin) => (
          <div
            key={pin.id}
            className="hotspot-pin"
            style={{ top: pin.top, left: pin.left }}
            onMouseEnter={() => setActivePin(pin.id)}
            onMouseLeave={() => setActivePin(null)}
            onClick={() => setActivePin(activePin === pin.id ? null : pin.id)}
          >
            <div className="pin-dot-outer">
              <div className="pin-dot-inner"></div>
            </div>
            {activePin === pin.id && (
              <div className="pin-popup">
                <div className="pin-popup-title">{pin.title}</div>
                <div className="pin-popup-price">${pin.price}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyChoosingUs() {
  return (
    <section className="features-section">
      <div className="container features-grid">
        <div className="features-header">
          <h2 className="features-main-title">Why<br />Choosing Us</h2>
        </div>
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <a href="#" className="feature-more">
              <span>More Info</span>
              <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="0" y1="6" x2="38" y2="6" />
                <polyline points="33 1 38 6 33 11" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

function BestSelling({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('Chair')
  const categories = ['Chair', 'Beds', 'Sofa', 'Lamp']
  const sliderRef = useRef(null)

  const filtered = products.filter(p => p.category === activeCategory)

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="products-section">
      <div className="container">
        <h2 className="products-title">Best Selling Product</h2>
        
        <div className="category-tabs-container">
          <div className="category-tabs">
            {categories.map(cat => (
              <button
                key={cat}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="products-slider-wrapper">
          <button className="slider-arrow prev" onClick={() => scroll('left')} aria-label="Previous products">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13L1 7L7 1" />
            </svg>
          </button>
          
          <div className="products-slider" ref={sliderRef}>
            {filtered.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-stars">
                    {'★'.repeat(product.rating)}
                  </div>
                  <div className="product-footer">
                    <span className="product-price">${product.price}</span>
                    <button className="product-add-btn" onClick={() => onAddToCart()} aria-label="Add to cart">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-arrow next" onClick={() => scroll('right')} aria-label="Next products">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 13L7 7L1 1" />
            </svg>
          </button>
        </div>

        <div className="view-all-container">
          <a href="#" className="view-all-link">
            <span>View All</span>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="6" x2="38" y2="6" />
              <polyline points="33 1 38 6 33 11" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="experience-section">
      <div className="container experience-grid">
        <div className="experience-visual">
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80"
            alt="Beautiful minimalist living room"
            className="experience-main-img"
          />
        </div>
        <div className="experience-content">
          <div className="section-subtitle">EXPERIENCES</div>
          <h2 className="section-title">We Provide You The Best Experience</h2>
          <p className="section-desc">
            You don't have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and luxurious style and with premium quality materials
          </p>
          <a href="#" className="section-more-link">
            <span>More Info</span>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="6" x2="38" y2="6" />
              <polyline points="33 1 38 6 33 11" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Materials() {
  return (
    <section className="materials-section">
      <div className="container materials-grid">
        <div className="materials-content">
          <div className="section-subtitle">MATERIALS</div>
          <h2 className="section-title">Very Serious Materials For Making Furniture</h2>
          <p className="section-desc">
            Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price
          </p>
          <a href="#" className="section-more-link">
            <span>More Info</span>
            <svg width="40" height="12" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="0" y1="6" x2="38" y2="6" />
              <polyline points="33 1 38 6 33 11" />
            </svg>
          </a>
        </div>
        
        <div className="materials-collage">
          <div className="materials-collage-left">
            <div className="collage-img-box img-box-top">
              <img src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80" alt="Detail furniture setup" />
            </div>
            <div className="collage-img-box img-box-bottom">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80" alt="Beautiful wall paint shelf" />
            </div>
          </div>
          <div className="materials-collage-right">
            <div className="collage-img-box img-box-large">
              <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80" alt="Elegant dining chairs" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)

  const prev = () => setCurrent(c => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent(c => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-subtitle centered">TESTIMONIALS</div>
        <h2 className="section-title centered">Our Client Reviews</h2>
        
        <div className="testimonial-carousel-container">
          <button className="carousel-arrow prev" onClick={prev} aria-label="Previous review">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13L1 7L7 1" />
            </svg>
          </button>

          <div className="testimonial-slider-viewport">
            <div
              className="testimonial-track"
              ref={trackRef}
              style={{ transform: `translateX(-${current * (100 / testimonials.length)}%)`, width: `${testimonials.length * 100}%` }}
            >
              {testimonials.map(t => (
                <div key={t.id} className="testimonial-card-wrapper" style={{ width: `${100 / testimonials.length}%` }}>
                  <div className="testimonial-card" style={{ backgroundImage: `url(${t.bgImage})` }}>
                    <div className="testimonial-overlay"></div>
                    <div className="testimonial-inner-card">
                      <div className="testimonial-avatar-wrapper">
                        <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                      </div>
                      <h4 className="testimonial-name">{t.name}</h4>
                      <p className="testimonial-role">{t.role}</p>
                      <p className="testimonial-text">"{t.text}"</p>
                      <div className="testimonial-stars">
                        {'★'.repeat(t.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow next" onClick={next} aria-label="Next review">
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 13L7 7L1 1" />
            </svg>
          </button>
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
          <p className="footer-desc">
            The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
          </p>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Services</h4>
          <a href="#">Email Marketing</a>
          <a href="#">Campaigns</a>
          <a href="#">Branding</a>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Furniture</h4>
          <a href="#">Beds</a>
          <a href="#">Chair</a>
          <a href="#">All</a>
        </div>
        <div className="footer-links-col">
          <h4 className="footer-heading">Follow Us</h4>
          <a href="#" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
          <a href="#" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '8px' }}>
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <span>Twitter</span>
          </a>
          <a href="#" className="footer-social-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p className="copyright">Copyright © 2021</p>
          <div className="footer-legal">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1)
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <WhyChoosingUs />
        <BestSelling onAddToCart={handleAddToCart} />
        <Experience />
        <Materials />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App
