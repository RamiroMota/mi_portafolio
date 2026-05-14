import React, { useState, useCallback, useRef, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlideNav } from '../organisms/SlideNav';

const HeroSlide = lazy(() => import('../organisms/HeroSlide').then(m => ({ default: m.HeroSlide })));
const AboutSlide = lazy(() => import('../organisms/AboutSlide').then(m => ({ default: m.AboutSlide })));
const TechStackSlide = lazy(() => import('../organisms/TechStackSlide').then(m => ({ default: m.TechStackSlide })));
const ProjectsSlide = lazy(() => import('../organisms/ProjectsSlide').then(m => ({ default: m.ProjectsSlide })));
const ContactSlide = lazy(() => import('../organisms/ContactSlide').then(m => ({ default: m.ContactSlide })));

const TOTAL_SLIDES = 5;
const SCROLL_COOLDOWN = 900;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

const slideTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

const SlideLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

export const SlideContainer: React.FC = () => {
  const [[currentSlide, direction], setSlideState] = useState([0, 0]);
  const isTransitioning = useRef(false);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  const navigateTo = useCallback((index: number) => {
    if (index === currentSlide || index < 0 || index >= TOTAL_SLIDES) return;
    const dir = index > currentSlide ? 1 : -1;
    isTransitioning.current = true;
    setSlideState([index, dir]);
    setTimeout(() => {
      isTransitioning.current = false;
    }, 800);
  }, [currentSlide]);

  const navigateNext = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES - 1) navigateTo(currentSlide + 1);
  }, [currentSlide, navigateTo]);

  const navigatePrev = useCallback(() => {
    if (currentSlide > 0) navigateTo(currentSlide - 1);
  }, [currentSlide, navigateTo]);

  // Wheel handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastScrollTime.current < SCROLL_COOLDOWN || isTransitioning.current) return;
      lastScrollTime.current = now;

      if (e.deltaY > 30) navigateNext();
      else if (e.deltaY < -30) navigatePrev();
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigateNext, navigatePrev]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isTransitioning.current) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        navigateNext();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        navigatePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigateNext, navigatePrev]);

  // Touch handler
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning.current) return;
      const delta = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(delta) > 50) {
        if (delta > 0) navigateNext();
        else navigatePrev();
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigateNext, navigatePrev]);

  const renderSlide = () => {
    const props = { onNavigate: navigateTo };

    switch (currentSlide) {
      case 0: return <Suspense fallback={<SlideLoader />}><HeroSlide {...props} /></Suspense>;
      case 1: return <Suspense fallback={<SlideLoader />}><AboutSlide isActive /></Suspense>;
      case 2: return <Suspense fallback={<SlideLoader />}><TechStackSlide isActive /></Suspense>;
      case 3: return <Suspense fallback={<SlideLoader />}><ProjectsSlide isActive /></Suspense>;
      case 4: return <Suspense fallback={<SlideLoader />}><ContactSlide isActive /></Suspense>;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden bg-bg-primary overflow-x-hidden">
      {/* Slide Navigation */}
      <SlideNav current={currentSlide} total={TOTAL_SLIDES} onNavigate={navigateTo} />

      {/* Mobile top indicator */}
      <div className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 md:hidden safe-top">
        {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
          <button
            key={i}
            onClick={() => navigateTo(i)}
            aria-label={`Go to slide ${i + 1}: ${['Hero', 'Sobre Mí', 'Tech Stack', 'Proyectos', 'Contacto'][i]}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 touch-target flex items-center justify-center ${
              i === currentSlide
                ? 'bg-accent w-5 sm:w-6'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Mobile scroll hint */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-1 md:hidden safe-bottom">
        <span className="text-[10px] sm:text-xs text-white/40 font-mono tracking-widest uppercase animate-scroll-hint">
          {currentSlide < TOTAL_SLIDES - 1 ? 'Swipe to navigate' : 'End'}
        </span>
        <svg
          className={`w-4 h-4 text-white/40 animate-scroll-hint ${currentSlide >= TOTAL_SLIDES - 1 ? 'rotate-180 opacity-30' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Desktop scroll hint */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 hidden lg:flex flex-col items-center gap-1">
        <span className="text-[10px] sm:text-xs text-white/30 font-mono tracking-widest uppercase">
          Scroll to navigate
        </span>
        <svg className="w-4 h-4 text-white/30 animate-scroll-hint" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={slideTransition}
          className="absolute inset-0 flex items-center justify-center gpu-accelerated"
        >
          {renderSlide()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
