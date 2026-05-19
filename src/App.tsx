import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight, Mail, MapPin, Phone, Play } from 'lucide-react';

const businessAreas = [
  {
    id: '01',
    title: 'IMC',
    items: ['On / Offline', 'Concept planning', 'Monthly / Quater / Year plan', 'Social commerce / market', 'PR / PPL', 'Media production', 'Online news', 'Site renewal', 'Brand channel', 'Risk manage']
  },
  {
    id: '02',
    title: 'Keyword',
    items: ['Google / Naver / Daum search ad', 'Naver shopping', 'Power contents', 'Blog S.E.O']
  },
  {
    id: '03',
    title: 'Display',
    items: ['GDN', 'Kakao moment', 'Realclick', 'TargetingGates', 'Sponsor AD', 'Microsite production', 'GFA', 'DDN', 'Mobion']
  },
  {
    id: '04',
    title: 'Viral',
    items: ['Contents production', 'Community event', 'Real experience review', 'Inpluencer / Youtuber']
  },
  {
    id: '05',
    title: 'SNS',
    items: ['Instagram / Facebook / Tictok / Kakaostory', 'Contents production', 'Sponsor AD', 'Brand channel manage', 'Real experience review']
  },
  {
    id: '06',
    title: 'Consulting',
    items: ['Interview service', 'Marketing strategy planning', 'A market analysis', 'Risk management', 'Branding', 'Research']
  }
];

const partners = [
  "SAMSUNG", "LG", "HYUNDAI", "NAVER", "KAKAO", "GOOGLE", "META", "AMAZON", "APPLE", "MICROSOFT", "OZHEAN", "한화제약(주)", "명성국제특허법률사무소", "mongweis", "참다한", "BANOBAGI", "Huit Spa", "Milkyyo", "MANNAHOLIC", "새아플란트 치과의원", "RADICELL", "QUEENSPARK", "hushhu", "미소기생명외과",
  "UBA 성형외과 의원", "godo:", "HERAMOND", "G.MAD", "애든한의원", "tenzero", "임팩트비뇨기과", "카이성형외과·피부과", "ElishaCoy", "한호성형외과의원", "MATTRESS WMDK", "더작", "추닥터스", "송파 고운빛산부인과의원", "Espace Gem" 
  ];

const galleryVideos = [
  { id: 1, thumbnail: 'https://img.youtube.com/vi/KSIUugT4Gvw/maxresdefault.jpg', url: 'https://www.youtube.com/embed/KSIUugT4Gvw?autoplay=1' },
  { id: 2, thumbnail: 'https://img.youtube.com/vi/FfCPQ8u8MiU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/FfCPQ8u8MiU?autoplay=1' },
  { id: 3, thumbnail: 'https://img.youtube.com/vi/4Z3LL9JbluU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/4Z3LL9JbluU?autoplay=1' },
  { id: 4, thumbnail: 'https://img.youtube.com/vi/_x9lSyyzmY8/maxresdefault.jpg', url: 'https://www.youtube.com/embed/_x9lSyyzmY8?autoplay=1' },
  { id: 5, thumbnail: 'https://img.youtube.com/vi/yZl-gGFc6gg/maxresdefault.jpg', url: 'https://www.youtube.com/embed/yZl-gGFc6gg?autoplay=1' },
  { id: 6, thumbnail: 'https://img.youtube.com/vi/ORpT8LMTa4k/maxresdefault.jpg', url: 'https://www.youtube.com/embed/ORpT8LMTa4k?autoplay=1' },
  { id: 7, thumbnail: 'https://img.youtube.com/vi/IT0cxTJHz_k/maxresdefault.jpg', url: 'https://www.youtube.com/embed/IT0cxTJHz_k?autoplay=1' },
  { id: 8, thumbnail: 'https://img.youtube.com/vi/gYBqf75ruJU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/gYBqf75ruJU?autoplay=1' },
  { id: 9, thumbnail: 'https://img.youtube.com/vi/zsvOGluMHwU/maxresdefault.jpg', url: 'https://www.youtube.com/embed/zsvOGluMHwU?autoplay=1' },
  { id: 10, thumbnail: 'https://img.youtube.com/vi/YvwN0nccmZc/maxresdefault.jpg', url: 'https://www.youtube.com/embed/YvwN0nccmZc?autoplay=1' },
  { id: 11, thumbnail: 'https://img.youtube.com/vi/0N1yL_UEhd8/maxresdefault.jpg', url: 'https://www.youtube.com/embed/0N1yL_UEhd8?autoplay=1' },
  { id: 12, thumbnail: 'https://img.youtube.com/vi/U-nI2SFR5Pk/maxresdefault.jpg', url: 'https://www.youtube.com/embed/U-nI2SFR5Pk?autoplay=1' },
];



export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="text-2xl font-display font-bold text-blue-600 tracking-tighter cursor-pointer" onClick={() => scrollTo('lol-is')}>
            LOL<span className="text-slate-900">.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['lol is', 'Business', 'Partners', 'Contact Us'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-6">
            {['lol is', 'Business', 'Partners', 'Contact Us'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollTo(item.toLowerCase().replace(' ', '-'))}
                className="text-2xl font-display font-medium text-left text-slate-900 hover:text-blue-600 transition-colors uppercase"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section (lol is) */}
      <section id="lol-is" className="min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1]"
          >
            First way to success.<br />
            <span className="text-blue-600">LOL communication</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light"
          >
            We provide the most sophisticated and effective marketing solutions to elevate your brand to the next level.
          </motion.p>
        </div>
      </section>

      {/* Business Section */}
      <section id="business" className="py-24 md:py-32 bg-slate-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Business</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight">Our Marketing Expertise</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {businessAreas.map((area, index) => (
              <motion.div 
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-baseline mb-6">
                  <span className="text-2xl font-display font-bold text-slate-300 mr-4 group-hover:text-blue-600 transition-colors">{area.id}</span>
                  <h4 className="text-2xl font-bold tracking-tight">{area.title}</h4>
                </div>
                <ul className="space-y-3">
                  {area.items.map((item, i) => (
                    <li key={i} className="text-slate-600 flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-4">Partners</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold tracking-tight">Companies we work with</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner, index) => (
              <div key={index} className="text-2xl md:text-3xl font-display font-bold text-slate-400 hover:text-slate-900 transition-colors">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Type of Video Section */}
      <section id="type-of-video" className="py-24 md:py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4 tracking-tight">MAIN CONTENTS</h2>
            <p className="text-lg md:text-xl text-[#007bff]">인터뷰 형식의 정보성 콘텐츠</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-12 max-w-6xl mx-auto">
            {galleryVideos.map((video) => (
              <div 
                key={video.id}
                className="relative group cursor-pointer overflow-hidden bg-slate-100 aspect-video"
                onClick={() => setSelectedVideo(video.url)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={`Video thumbnail ${video.id}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Play className="text-[#007bff]" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why YouTube Section (Redesigned) */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 mb-24"
          >
            <p className="text-2xl md:text-4xl text-slate-300 font-light tracking-tight">"꼭 해야 하는 걸까?"</p>
            <p className="text-2xl md:text-4xl text-slate-300 font-light tracking-tight">"결국에는 사그라들 유행 아닐까?"</p>
            <p className="text-2xl md:text-4xl text-slate-300 font-light tracking-tight">"다른 마케팅 채널도 많은데..."</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-50 blur-3xl -z-10 rounded-full opacity-50"></div>
            <h3 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-8 tracking-tight">
              과연 유튜브, 꼭 해야 하는 걸까?
            </h3>
            <p className="text-xl md:text-2xl text-slate-500 leading-relaxed font-light">
              광고 만족도가 가장 높은 동영상 광고<br />
              동영상 광고로의 전환은 단발적 유행이 아닌<br />
              피할 수 없는 흐름이자 대전환입니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section (Redesigned) */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            {/* Left Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 tracking-tight">한국인 앱 총 사용 시간</h4>
              <p className="text-slate-400 text-sm mb-12">(단위 : 억분)</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-slate-800">유튜브</span>
                    <span className="font-bold text-blue-600">740</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-600">카카오톡</span>
                    <span className="font-medium text-slate-500">296</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '40%' }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-slate-400 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-600">네이버</span>
                    <span className="font-medium text-slate-500">197</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '26%' }}
                      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-slate-300 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Chart */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2 tracking-tight">정보 검색 시 이용하는 채널</h4>
              <p className="text-slate-400 text-sm mb-12">(중복 투표 3개 가능)</p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-slate-800">네이버</span>
                    <span className="font-bold text-slate-600">86.7</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-slate-400 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-blue-600">유튜브</span>
                    <span className="font-bold text-blue-600">60.3</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '69%' }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-3 rounded-full"
                    ></motion.div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-600">구글</span>
                    <span className="font-medium text-slate-500">49.5</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '57%' }}
                      transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="bg-slate-300 h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion Section (Redesigned) */}
      <section className="py-32 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-5xl mx-auto px-6 text-center relative z-10"
        >
          <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-6 tracking-tight">
            한국인이 가장 많이 설치하고 사용하는 앱 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">1위 유튜브</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base font-light mb-24 tracking-wide">
            기기 설치 수 3,790만 건 <span className="mx-3 text-slate-200">|</span> 
            활성 사용자 수 3,461만 명 <span className="mx-3 text-slate-200">|</span> 
            이용자당 사용 시간 1일 2시간
          </p>

          <div className="relative py-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-transparent blur-3xl -z-10 rounded-[100px] opacity-70"></div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight tracking-tight text-slate-900">
              이제 환자들은,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                유튜브를 통해 미리 원장님을<br />
                만나 보고
              </span><br />
              병원을 결정합니다.
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-24 md:py-32 bg-slate-900 text-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-sm font-bold text-blue-400 tracking-widest uppercase mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">Let's build something great together.</h3>
          
          <div className="space-y-4 mt-4 mb-16 flex flex-col items-center">
            <div className="flex items-center text-slate-300">
              <Mail className="mr-3 text-blue-400" size={20} />
              <span>lloll@lloll.kr</span>
            </div>
            <div className="flex items-center text-slate-300">
              <Phone className="mr-3 text-blue-400" size={20} />
              <span>TEL)02-508-0155 / FAX)02-538-0155</span>
            </div>
            <div className="flex items-center text-slate-300">
              <MapPin className="mr-3 text-blue-400" size={20} />
              <span>서울특별시 강남구 선릉로127길10, 2층(논현동, GOOD BLDG)</span>
            </div>
          </div>

          <div className="w-full bg-white/5 p-2 rounded-2xl border border-white/10 h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden">
            <iframe 
              src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%EC%84%A0%EB%A6%89%EB%A1%9C127%EA%B8%B810&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full rounded-xl border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="LOL Communication Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center border-t border-white/10">
        <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} LOL Communication. All rights reserved.</p>
      </footer>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 backdrop-blur-sm" 
          onClick={() => setSelectedVideo(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" 
            onClick={() => setSelectedVideo(null)}
          >
            <X size={36} />
          </button>
          <div 
            className="w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl relative" 
            onClick={e => e.stopPropagation()}
          >
            <iframe 
              src={selectedVideo} 
              className="absolute inset-0 w-full h-full border-0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
