import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  initiallyVisible?: boolean;
  disabled?: boolean;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(options.initiallyVisible || false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || options.disabled) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only update visibility if we're not initially visible
        if (!options.initiallyVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -10% 0px',
      }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Only observe if we're not initially visible
    if (!options.initiallyVisible) {
      observer.observe(element);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.disabled, options.initiallyVisible]);

  return { elementRef, isVisible, scrollDirection };
};
