 "use client";

import { useMemo, useState } from "react";
import {
  ArrowRight, BadgeCheck, Check, ChevronDown, Clock3, Image as ImageIcon,
  Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Printer, Ruler,
  Sparkles, Star, Upload, X
} from "lucide-react";

const PHONE = "918854885205";
const DISPLAY_PHONE = "+91 88548 85205";
const services = [
  { name: "3D Customised Flex Wallpaper", price: 25, unit: "Sq.Ft.", note: "Complete installation available", featured: true, icon: "✦" },
  { name: "Flex Banner Printing", price: 15, unit: "Sq.Ft.", note: "Sharp print • vibrant colours", icon: "▤" },
  { name: "One Way Vision", price: 50, unit: "Sq.Ft.", note: "Printing only", icon: "◉" },
  { name: "One Way Vision + Installation", price: 70, unit: "Sq.Ft.", note: "Supply and installation", icon: "◈" },
  { name: "Vinyl Printing", price: 40, unit: "Sq.Ft.", note: "Premium vinyl finish", icon: "▧" },
  { name: "Vinyl + Installation", price: 60, unit: "Sq.Ft.", note: "Supply and installation", icon: "▨" },
  { name: "Pamphlets & Multicolour Posters", price: null, unit: "", note: "Ask us for a custom quote", icon: "▦" },
  { name: "Visiting Cards & Bill Books", price: null, unit: "", note: "Professional business printing", icon: "▣" }
];

const gallery = [
  { title: "Luxury Living Room", category: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" },
  { title: "Modern Bedroom", category: "Bedroom", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" },
  { title: "Elegant Interior", category: "Living Room", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85" },
  { title: "Premium Workspace", category: "Office", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
  { title: "Statement Wall", category: "Bedroom", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=85" },
  { title: "Contemporary Space", category: "Office", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");
  const [width, setWidth] = useState("10");
  const [height, setHeight] = useState("10");
  const [servicePrice, setServicePrice] = useState("25");
  const [install, setInstall] = useState(false);
  const [visualPhoto, setVisualPhoto] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [quoteName, setQuoteName] = useState("");
  const [quoteSpace, setQuoteSpace] = useState("Bedroom");
  const [quoteDetails, setQuoteDetails] = useState("");

  const area = Math.max(0, Number(width) || 0) * Math.max(0, Number(height) || 0);
  const total = area * (Number(servicePrice) || 0);
  const filteredGallery = category === "All" ? gallery : gallery.filter((g) => g.category === category);

  function whatsapp(message: string) {
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }
  function submitQuote() {
    whatsapp(`Hello SAMI ARTS! I want a quote.\\nName: ${quoteName || "Not provided"}\\nSpace: ${quoteSpace}\\nRequirements: ${quoteDetails || "Please guide me"}\\nPlease contact me.`);
  }

  return (
    <main>
      <div className="topline"><span>Premium Printing & Interior Branding Studio</span><span className="topline-right"><MapPin size={13}/> Dausa, Rajasthan <i/> All Rajasthan Service Available</span></div>
      <header className="header">
        <a className="brand" href="#home" aria-label="SAMI ARTS home">
          <div className="brand-mark">SA</div>
          <div><strong>SAMI <em>ARTS</em></strong><small>PRINTING · WALLPAPER · INTERIOR</small></div>
        </a>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["Home","Services","Gallery","Visualizer","Pricing","Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <button className="button button-gold nav-cta" onClick={() => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})}>Get a Quote <ArrowRight size={16}/></button>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-bg"/>
        <div className="hero-content">
          <div className="eyebrow"><span/> PREMIUM WALLPAPER & BRANDING <span/></div>
          <h1>Transform Your Walls<br/>Into <span>Masterpieces.</span></h1>
          <p>Beautiful spaces begin with the right design. Discover customised 3D flex wallpaper, premium printing and interior branding made for your style.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#gallery">Explore Our Work <ArrowRight size={17}/></a>
            <button className="button button-outline" onClick={() => whatsapp("Hello SAMI ARTS! I want to discuss a wallpaper/printing project.")}><MessageCircle size={17}/> WhatsApp Quote</button>
          </div>
          <div className="hero-proof"><div><BadgeCheck/><span><b>Custom Designs</b><small>Made for your space</small></span></div><div><Sparkles/><span><b>Premium Finish</b><small>Quality you can see</small></span></div><div><Clock3/><span><b>Expert Service</b><small>From print to install</small></span></div></div>
        </div>
        <div className="hero-badge"><span className="badge-icon">✦</span><span><b>₹25 / Sq.Ft.</b><small>3D Flex Wallpaper</small></span></div>
        <div className="hero-bottom-label">YOUR VISION <span>✦</span> OUR CREATIVITY <span>✦</span> PREMIUM RESULTS</div>
      </section>

      <section className="trust-strip"><div><strong>01</strong><span>Customised Designs</span></div><div><strong>02</strong><span>Premium Printing</span></div><div><strong>03</strong><span>Complete Installation</span></div><div><strong>04</strong><span>All Rajasthan Service</span></div></section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div className="eyebrow dark-eyebrow">WHAT WE DO</div><h2>Our <span>Services</span></h2><p>Creative printing solutions and statement-making wall designs for homes and businesses.</p></div>
        <div className="service-grid">{services.map((s) => <article key={s.name} className={s.featured ? "service-card featured-card" : "service-card"}>
          <div className="service-icon">{s.icon}</div>{s.featured && <span className="popular">FEATURED SERVICE</span>}
          <h3>{s.name}</h3><p>{s.note}</p><div className="service-price">{s.price ? <><strong>₹{s.price}</strong><span> / {s.unit}</span></> : <strong className="quote-price">Custom quote</strong>}</div>
          <button className="text-link" onClick={() => whatsapp(`Hello SAMI ARTS! Please share a quote for ${s.name}${s.price ? ` at ₹${s.price}/${s.unit}` : ""}.`)}>Enquire now <ArrowRight size={15}/></button>
        </article>)}</div>
        <div className="service-note"><Check size={17}/> Prices are indicative per sq. ft. Final quote may depend on design, measurements, surface and installation requirements.</div>
      </section>

      <section className="featured-promo">
        <div className="promo-image" role="img" aria-label="Premium contemporary living room with decorative wall"/>
        <div className="promo-copy"><div className="eyebrow">OUR SIGNATURE SERVICE</div><h2>A new look for<br/>every <span>wall.</span></h2><p>Make your bedroom, living room, office, café, hotel or showroom unforgettable with customised 3D flex wallpaper.</p><ul><li><Check/> Your choice of design</li><li><Check/> Waterproof and easy-care options</li><li><Check/> Complete installation available</li></ul><button className="button button-gold" onClick={() => whatsapp("Hello SAMI ARTS! I am interested in 3D Customised Flex Wallpaper at ₹25/Sq.Ft. Please guide me.")}>Get Wallpaper Quote <ArrowRight size={16}/></button></div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-heading"><div className="eyebrow dark-eyebrow">DESIGN INSPIRATION</div><h2>Ideas that <span>inspire.</span></h2><p>Explore interior inspiration and choose a look for your next project.</p></div>
        <div className="filter-row">{["All","Living Room","Bedroom","Office"].map((c) => <button className={category === c ? "filter active-filter" : "filter"} onClick={() => setCategory(c)} key={c}>{c}</button>)}</div>
        <div className="gallery-grid">{filteredGallery.map((g) => <article className="gallery-card" key={g.title}><div className="gallery-img" style={{backgroundImage:`url("${g.image}")`}}/><div className="gallery-caption"><div><small>{g.category}</small><h3>{g.title}</h3></div><button aria-label={`Ask about ${g.title}`} onClick={() => whatsapp(`Hello SAMI ARTS! I like the ${g.title} inspiration. Can you suggest a customised design?`)}><ArrowRight/></button></div></article>)}</div>
        <p className="gallery-disclaimer">Images are for design inspiration. Final print designs can be customised to your requirements.</p>
      </section>

      <section className="visualizer-section" id="visualizer">
        <div className="visualizer-copy"><div className="eyebrow">TRY YOUR WALL IDEA</div><h2>Imagine it.<br/><span>Visualise it.</span></h2><p>Upload a photo of your wall to preview it here, then send it to our team for design guidance. This preview is a planning aid, not a final scale-accurate mockup.</p><label className="button button-gold upload-button"><Upload size={17}/> Upload wall photo<input type="file" accept="image/*" onChange={(e) => { const file = e.target.files?.[0]; if (file) setVisualPhoto(URL.createObjectURL(file)); }}/></label>{visualPhoto && <button className="clear-upload" onClick={() => setVisualPhoto(null)}>Remove photo</button>}</div>
        <div className="visualizer-preview">{visualPhoto ? <img src={visualPhoto} alt="Uploaded wall preview"/> : <div className="preview-placeholder"><ImageIcon size={38}/><strong>Your wall preview</strong><span>Upload a photo to begin</span></div>}<div className="preview-tag">SAMI ARTS · WALL VISUALIZER</div></div>
      </section>

      <section className="section calculator-section" id="pricing">
        <div className="calculator-intro"><div className="eyebrow dark-eyebrow">QUICK ESTIMATE</div><h2>Plan your project<br/>with a <span>price estimate.</span></h2><p>Enter your wall measurements to calculate an approximate printing cost. We’ll confirm the final quote after reviewing your requirements.</p><div className="calc-note"><Ruler size={18}/> Measure wall width × height in feet.</div></div>
        <div className="calculator">
          <h3>Price Calculator</h3><p className="calc-subtitle">Get a quick estimate for your wall.</p>
          <label>Service<select value={servicePrice} onChange={(e) => setServicePrice(e.target.value)}><option value="25">3D Flex Wallpaper — ₹25 / Sq.Ft.</option><option value="15">Flex Banner — ₹15 / Sq.Ft.</option><option value="50">One Way Vision — ₹50 / Sq.Ft.</option><option value="70">One Way Vision + Installation — ₹70 / Sq.Ft.</option><option value="40">Vinyl Printing — ₹40 / Sq.Ft.</option><option value="60">Vinyl + Installation — ₹60 / Sq.Ft.</option></select></label>
          <div className="measure-row"><label>Width (feet)<input type="number" min="0" step="0.5" value={width} onChange={(e) => setWidth(e.target.value)}/></label><label>Height (feet)<input type="number" min="0" step="0.5" value={height} onChange={(e) => setHeight(e.target.value)}/></label></div>
          <div className="calc-result"><div><span>Total area</span><strong>{area.toLocaleString("en-IN")} <small>Sq.Ft.</small></strong></div><div className="estimate-total"><span>Estimated total</span><strong>₹{total.toLocaleString("en-IN", {maximumFractionDigits:2})}</strong></div></div>
          <p className="estimate-disclaimer">Estimate excludes any extra surface preparation, design or installation charges unless specifically included in the selected service.</p>
          <button className="button button-dark full-button" onClick={() => whatsapp(`Hello SAMI ARTS! Please confirm my estimate.\\nService: ${services.find(s => String(s.price) === servicePrice)?.name || "Selected service"}\\nMeasurements: ${width} ft × ${height} ft\\nArea: ${area} sq. ft.\\nEstimated amount: ₹${total}.\\nPlease confirm final price.`)}>Confirm on WhatsApp <ArrowRight size={16}/></button>
        </div>
      </section>

      <section className="quote-section" id="contact"><div className="quote-inner"><div className="quote-copy"><div className="eyebrow">LET’S CREATE SOMETHING GREAT</div><h2>Your idea.<br/><span>Our expertise.</span></h2><p>Tell us a little about your project. We’ll open WhatsApp with your details so our team can help you plan the next step.</p><div className="contact-points"><div><Phone/><span><small>Call us</small><b>{DISPLAY_PHONE}</b></span></div><div><Mail/><span><small>Email</small><b>samiartsdausa@gmail.com</b></span></div><div><MapPin/><span><small>Visit / Service area</small><b>Bhatiyara Mohalla, Ghas Mandi, near Purane Hospital, Dausa, Rajasthan 303303</b></span></div></div></div>
        <form className="quote-form" onSubmit={(e) => { e.preventDefault(); submitQuote(); }}><h3>Get a Free Quote</h3><p>Share your requirements</p><label>Your name<input value={quoteName} onChange={(e) => setQuoteName(e.target.value)} placeholder="Enter your name"/></label><label>Space / project type<select value={quoteSpace} onChange={(e) => setQuoteSpace(e.target.value)}><option>Bedroom</option><option>Living Room</option><option>Office</option><option>Shop / Showroom</option><option>Café / Restaurant</option><option>Hotel</option><option>Other</option></select></label><label>Project details<textarea value={quoteDetails} onChange={(e) => setQuoteDetails(e.target.value)} placeholder="Wall size, design idea, location..." rows={4}/></label><button type="submit" className="button button-gold full-button"><MessageCircle size={17}/> Send Quote Request</button><small className="form-footnote">Your message will open in WhatsApp for you to send.</small></form>
      </div></section>

      <section className="section testimonials-section"><div className="section-heading"><div className="eyebrow dark-eyebrow">WHY SAMI ARTS</div><h2>Made with care.<br/><span>Finished with pride.</span></h2><p>We focus on clear communication, customised design and a professional finish.</p></div><div className="values-grid"><article><div className="stars"><Star/><Star/><Star/><Star/><Star/></div><h3>Quality-first work</h3><p>We aim for clean printing, rich colour and a polished finish on every project.</p></article><article><div className="stars"><Sparkles/></div><h3>Designs made for you</h3><p>Bring a reference, a rough idea or your own artwork. We’ll help you shape the look.</p></article><article><div className="stars"><BadgeCheck/></div><h3>Support from start to finish</h3><p>From measurement and print selection to installation planning, we help you through the process.</p></article></div></section>

      <section className="faq-section"><div className="faq-layout"><div><div className="eyebrow">COMMON QUESTIONS</div><h2>Good to <span>know.</span></h2><p>Need something more specific? Send us a WhatsApp message.</p><button className="button button-outline" onClick={() => whatsapp("Hello SAMI ARTS! I have a question about your services.")}>Ask us a question <ArrowRight size={16}/></button></div><div className="faq-list">{[
        ["What is the price of 3D customised flex wallpaper?","Our listed starting price is ₹25 per sq. ft. Complete installation and any additional preparation should be confirmed in your quote."],
        ["Do you provide service outside Dausa?","Yes, All Rajasthan service is available. Share your location and project details so we can confirm logistics."],
        ["Can I choose my own design?","Yes. Share a reference image, theme or your own artwork and we can discuss a customised design."],
        ["How do I get an exact price?","Send the wall width, height, location and service you need. We’ll review the details and confirm the final price."]
      ].map(([q,a],i)=><div className="faq-item" key={q}><button onClick={() => setFaqOpen(faqOpen === i ? null : i)}><span>{q}</span><ChevronDown className={faqOpen === i ? "chevron-open" : ""}/></button>{faqOpen === i && <p>{a}</p>}</div>)}</div></div></section>

      <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand" href="#home"><div className="brand-mark">SA</div><div><strong>SAMI <em>ARTS</em></strong><small>PRINTING · WALLPAPER · INTERIOR</small></div></a><p>Premium Printing & Interior Branding Studio. Your vision, our creativity, premium results.</p><a className="instagram-link" href="https://www.instagram.com/samiarts_/" target="_blank" rel="noreferrer"><Instagram size={17}/> @samiarts_</a></div><div><h4>Explore</h4><a href="#home">Home</a><a href="#services">Services</a><a href="#gallery">Gallery</a><a href="#visualizer">Wall Visualizer</a><a href="#pricing">Price Calculator</a></div><div><h4>Our Services</h4><a href="#services">3D Flex Wallpaper</a><a href="#services">Flex Banner</a><a href="#services">One Way Vision</a><a href="#services">Vinyl Printing</a><a href="#services">Business Printing</a></div><div><h4>Contact</h4><a href={`tel:+${PHONE}`}><Phone size={15}/> {DISPLAY_PHONE}</a><a href="mailto:samiartsdausa@gmail.com"><Mail size={15}/> samiartsdausa@gmail.com</a><span><MapPin size={15}/> Dausa, Rajasthan 303303</span><button className="footer-whatsapp" onClick={() => whatsapp("Hello SAMI ARTS! I would like to enquire about your services.")}><MessageCircle size={16}/> Chat on WhatsApp</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SAMI ARTS. All rights reserved.</span><span>Premium Printing & Interior Branding Studio</span><span>UPI: 8854885205-4@ybl</span></div></footer>
      <a className="floating-whatsapp" href={`https://wa.me/${PHONE}?text=${encodeURIComponent("Hello SAMI ARTS! I would like to enquire about your services.")}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle/></a>
      <a className="floating-call" href={`tel:+${PHONE}`} aria-label="Call SAMI ARTS"><Phone/></a>
    </main>
  );
}
