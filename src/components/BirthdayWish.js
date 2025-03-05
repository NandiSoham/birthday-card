import React, { useState, useEffect, useRef } from 'react';
import './BirthdayWish.css';

const BirthdayWish = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [cakeClicked, setCakeClicked] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const messageRef = useRef(null);

  const messages = [
    "Happy Birthday, Maami!",
    "You're simply amazing!",
    "You are more than family...",
    "You are a 'Blessing'❤️",
    "Click the cake for a surprise!"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (cakeClicked && messageRef.current) {
      setTimeout(() => {
        messageRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [cakeClicked]);
  
  const handleCakeClick = () => {
    setCakeClicked(true);
    setShowConfetti(true);
    
    setTimeout(() => {
      setShowFireworks(true);
    }, 1000);
    
    setTimeout(() => {
      setShowHearts(true);
    }, 2000);
    
    setTimeout(() => {
      setShowConfetti(false);
      setShowFireworks(false);
    }, 6000);
  };
  
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section with Glassmorphism */}
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
        {/* Modern gradient background with animated movement */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-800 animate-gradient-shift"></div>
        
        {/* Animated circles in background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-64 h-64 rounded-full bg-pink-500 opacity-20 blur-3xl top-1/4 -left-20 animate-float-slow"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-500 opacity-20 blur-3xl bottom-1/4 -right-20 animate-float-slow-reverse"></div>
          <div className="absolute w-80 h-80 rounded-full bg-blue-500 opacity-20 blur-3xl -bottom-20 left-1/3 animate-float-medium"></div>
        </div>
        
        {/* Decorative grid lines */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="w-full h-full" style={{ 
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px' 
          }}></div>
        </div>
        
        {/* Main content with glassmorphism effect */}
        <div className="relative z-10 flex flex-col items-center justify-center p-8 max-w-4xl w-full">
          <div className="text-5xl md:text-7xl font-extrabold mb-8 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-text-shimmer">
            {messages[messageIndex]}
          </div>
          
          {/* Cake with glass effect */}
          <div 
            className={`relative z-20 cursor-pointer transition-transform duration-300 p-8 rounded-3xl ${cakeClicked ? 'animate-bounce bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20' : 'hover:scale-110 hover:rotate-3 bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10'}`}
            onClick={!cakeClicked ? handleCakeClick : undefined}
          >
            {/* Birthday Cake SVG - Modern Styled */}
            <svg width="240" height="240" viewBox="0 0 240 240">
              {/* Cake Stand - Modern */}
              <rect x="85" y="180" width="70" height="4" rx="2" fill="rgba(255,255,255,0.8)" />
              <rect x="100" y="184" width="40" height="8" rx="2" fill="rgba(255,255,255,0.6)" />
              
              {/* Cake Base - Layered with gradients */}
              <rect x="40" y="130" width="160" height="50" rx="10" fill="url(#cakeGradient1)" />
              <rect x="55" y="90" width="130" height="40" rx="8" fill="url(#cakeGradient2)" />
              <rect x="70" y="50" width="100" height="40" rx="6" fill="url(#cakeGradient3)" />
              
              {/* Modern Candles */}
              <rect x="90" y="20" width="4" height="30" rx="2" fill="#FF9FF3" />
              <rect x="120" y="10" width="4" height="40" rx="2" fill="#A3F7BF" />
              <rect x="150" y="20" width="4" height="30" rx="2" fill="#FEA47F" />
              
              {/* Flames with glow effect */}
              <circle cx="92" cy="15" r="6" fill="url(#flameGradient)" filter="url(#glow)" className={cakeClicked ? "opacity-0" : "animate-flicker"} />
              <circle cx="122" cy="5" r="6" fill="url(#flameGradient)" filter="url(#glow)" className={cakeClicked ? "opacity-0" : "animate-flicker-alt"} />
              <circle cx="152" cy="15" r="6" fill="url(#flameGradient)" filter="url(#glow)" className={cakeClicked ? "opacity-0" : "animate-flicker"} />
              
              {/* Modern Decorations */}
              <circle cx="60" cy="110" r="4" fill="#A3F7BF" />
              <circle cx="90" cy="110" r="4" fill="#FF9FF3" />
              <circle cx="120" cy="110" r="4" fill="#FEA47F" />
              <circle cx="150" cy="110" r="4" fill="#55E6C1" />
              <circle cx="180" cy="110" r="4" fill="#F97F51" />
              
              <circle cx="75" cy="70" r="4" fill="#FF9FF3" />
              <circle cx="105" cy="70" r="4" fill="#A3F7BF" />
              <circle cx="135" cy="70" r="4" fill="#FF9FF3" />
              <circle cx="165" cy="70" r="4" fill="#A3F7BF" />
              
              {/* SVG Definitions */}
              <defs>
                <linearGradient id="cakeGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF9FF3" />
                  <stop offset="100%" stopColor="#F368E0" />
                </linearGradient>
                <linearGradient id="cakeGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A3F7BF" />
                  <stop offset="100%" stopColor="#55E6C1" />
                </linearGradient>
                <linearGradient id="cakeGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FEA47F" />
                  <stop offset="100%" stopColor="#F97F51" />
                </linearGradient>
                <linearGradient id="flameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFEB3B" />
                  <stop offset="100%" stopColor="#FF5722" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
            </svg>
            
            {/* Subtle hint text */}
            {!cakeClicked && (
              <p className="text-white text-opacity-60 text-center mt-4 text-sm font-light">Tap to celebrate</p>
            )}
          </div>
          
          {/* Call to scroll down - appears when cake is clicked */}
          {cakeClicked && (
            <div className="mt-8 animate-bounce">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          )}
        </div>
        
        {/* Confetti Animation */}
        {showConfetti && (
          <div className="absolute inset-0 z-10">
            {[...Array(100)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-20px`,
                  width: `${Math.random() * 10 + 5}px`,
                  height: `${Math.random() * 10 + 5}px`,
                  backgroundColor: ['#FFD700', '#FF69B4', '#00BFFF', '#7CFC00', '#FF4500', '#9370DB', '#40E0D0', '#A3F7BF', '#FF9FF3', '#FEA47F'][
                    Math.floor(Math.random() * 10)
                  ],
                  borderRadius: Math.random() > 0.5 ? '50%' : '0',
                  transform: `rotate(${Math.random() * 360}deg)`,
                  animationDuration: `${Math.random() * 2 + 1}s`,
                  animationDelay: `${Math.random() * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
        
        {/* Fireworks Animation - Modern style */}
        {showFireworks && (
          <div className="absolute inset-0 z-5">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-firework"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `${Math.random() * 30}%`,
                  animationDuration: `${Math.random() * 1 + 1.5}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                {[...Array(20)].map((_, j) => (
                  <div
                    key={j}
                    className="absolute animate-spark"
                    style={{
                      backgroundColor: ['#A3F7BF', '#FF9FF3', '#FEA47F', '#55E6C1', '#F97F51'][Math.floor(Math.random() * 5)],
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      transform: `rotate(${j * 18}deg) translateY(-30px)`,
                      filter: 'blur(1px)',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Message Section with Parallax Effect */}
      {cakeClicked && (
        <div 
          ref={messageRef}
          className="relative min-h-screen flex items-center justify-center py-12 px-4"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(255, 159, 243, 0.15) 0%, rgba(255, 159, 243, 0) 50%),
              radial-gradient(circle at 80% 60%, rgba(163, 247, 191, 0.15) 0%, rgba(163, 247, 191, 0) 50%),
              radial-gradient(circle at 50% 50%, rgba(254, 164, 127, 0.07) 0%, rgba(254, 164, 127, 0) 70%)
            `,
            backgroundSize: 'cover',
            backgroundColor: '#0F0A19',
          }}
        >
          {/* Floating Hearts - 3D effect */}
          {showHearts && (
            <div className="absolute inset-0 z-5">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    bottom: '0',
                    animationDuration: `${Math.random() * 3 + 3}s`,
                    animationDelay: `${Math.random() * 2}s`,
                    opacity: Math.random() * 0.5 + 0.5,
                    filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.5))',
                    fontSize: `${Math.random() * 20 + 10}px`,
                    transform: `rotate(${Math.random() * 40 - 20}deg)`,
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
          )}
        
          {/* Message Card - Modern Glassmorphism */}
          <div 
            className="relative z-10 max-w-2xl w-full mx-auto backdrop-blur-xl bg-white bg-opacity-5 border border-white border-opacity-20 rounded-3xl overflow-hidden shadow-2xl"
            style={{
              transform: `translateY(${scrollPosition * 0.1}px)`,
              transition: 'transform 0.05s ease-out',
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-pink-500 opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-pink-400 to-purple-600"></div>
                <h2 className="ml-4 text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">
                  To My Wonderful Maami
                </h2>
              </div>
              
              <div className="space-y-4 text-white text-opacity-90 leading-relaxed">
                <p className="font-light text-lg">Today marks the celebration of another incredible year in your extraordinary life journey, and I simply couldn't let this moment pass without honoring all that you are.</p>
                
                <p>On this special day, I pray that life gives you back all the happiness you have given to others. May your dreams shine brighter than the stars, may your heart always be full of love, and may you always be surrounded by people who cherish you as much as I do.</p>
                
                <div className="py-4 pl-4 border-l-2 border-pink-400 italic">
                  <p>I cannot thank you enough<br/>
                    For all the love, sacrifices, and care you have given me,<br/>
                  For every meal made with love, every story told with warmth,<br/>
                  For every lesson you've taught through both words and actions...</p>
                </div>
                
                <p>I am <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-300">forever grateful</span>. If I could give you anything today, it would be the same happiness you have given me all these years.</p>
                
                <p>May this coming year bring you all the joy, love, blessings and happiness that you so richly deserve💖.</p>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 tracking-wide">
                  Happy Birthday!
                </h3>
                <p className="mt-2 italic text-white text-opacity-70">With endless love and gratitude ❤️</p>
              </div>
              
              {/* Animated signature line */}
              <div className="mt-6 flex justify-center">
                <div className="w-32 h-px bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-width-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Modern 3D Digital Gift */}
          <div className="mt-16 relative w-64 h-64 mx-auto transform hover:rotate-12 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 rounded-2xl shadow-2xl transform rotate-45 animate-float-slow"></div>
            <div className="absolute inset-4 flex items-center justify-center backdrop-blur-md bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl">
              <div className="text-7xl transform -rotate-45">🎁</div>
            </div>
            <div className="absolute w-full -top-3 h-6 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full transform -rotate-45 opacity-80"></div>
            <div className="absolute h-full -right-3 w-6 bg-gradient-to-b from-pink-300 to-purple-300 rounded-full transform -rotate-45 opacity-80"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayWish;