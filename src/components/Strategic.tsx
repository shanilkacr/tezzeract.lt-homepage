import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Improved TypeScript interface for SplitType
interface SplitTypeResult {
  chars: HTMLElement[] | null;
  words: HTMLElement[] | null;
  lines: HTMLElement[] | null;
  revert: () => void;
}

const Strategic = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const h2Ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    // Existing IntersectionObserver for scale and opacity
    const section = sectionRef.current;
    if (section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          const { top, height } = entry.boundingClientRect;
          const windowHeight = window.innerHeight;

          // Calculate progress: 0 at bottom, 1 at top of viewport
          const progress = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)));

          let scale = 1;
          let opacity = 1;

          if (progress <= 0.5) {
            // Bottom to middle: Scale from 0.8 to 1, opacity from 0.2 to 1
            scale = 0.8 + (progress / 0.5) * 0.2;
            opacity = 0.2 + (progress / 0.3) * 0.5;
          } else {
            // Middle to top: Maintain scale at 1, opacity from 1 to 0.7
            const localProgress = (progress - 0.5) / 0.5;
            scale = 1;
            opacity = 1 - localProgress * 0.3;
          }

          section.style.transform = `scale(${scale})`;
        
        },
        {
          root: null, // Use viewport
          threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained tracking
        }
      );

      observer.observe(section);

      // Cleanup IntersectionObserver
      return () => observer.unobserve(section);
    }
  }, []);

  useEffect(() => {
    // Text reveal animation with GSAP and SplitType
    const h2 = h2Ref.current;
    if (!h2) return;

    // Initialize SplitType
    const split = new SplitType(h2, {
      types: ['words', 'chars']
    }) as SplitTypeResult;

    if (!split.chars) return;

    // GSAP ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h2,
        start: 'top 90%',
        end: '+=55%',
        scrub: 0.5,
      }
    });

    tl.to(split.chars, {
      duration: 0.3,
      color: '#00a9ee',
      stagger: 0.1,
    }, 0.1);

    // Cleanup
    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#242424]">
      <style>
        {`
          .tezzeracth3 {
            color: #00378A;
          }
        `}
      </style>
      <section
        ref={sectionRef}
        className="bg-[#242424] py-20 h-[70vh] flex items-center justify-center relative overflow-hidden"
        style={{ transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 ref={h2Ref} className="tezzeracth3 text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light">
            Tezzeract builds smart automation systems that handle routine tasks, freeing your team to focus on growing your business.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Strategic;