import { useEffect, useRef } from 'react';

const Strategic = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { top, height } = entry.boundingClientRect;
        const windowHeight = window.innerHeight;

        // Calculate progress: 0 at bottom, 1 at top of viewport
        const progress = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)));

        let scale = 1;
        let opacity = 1;

        if (progress <= 0.5) {
          // Bottom to middle: Scale from 0.8 to 1, opacity from 0.7 to 1
          scale = 0.8 + (progress / 0.5) * 0.2;
          opacity = 0.2 + (progress / 0.3) * 0.5;
        } else {
          // Middle to top: Maintain scale at 1, opacity from 1 to 0.7
          const localProgress = (progress - 0.5) / 0.5;
          scale = 1;
          opacity = 1 - localProgress * 0.3;
        }

        section.style.transform = `scale(${scale})`;
        section.style.opacity = opacity;
      },
      {
        root: null, // Use viewport
        threshold: Array.from({ length: 101 }, (_, i) => i / 100), // Fine-grained tracking
      }
    );

    observer.observe(section);

    return () => observer.unobserve(section); // Cleanup
  }, []);

  return (
  <div className="bg-white">
        <section
      ref={sectionRef}
      className="bg-tezzeract-light py-20 h-[80vh] flex items-center justify-center relative overflow-hidden"
      style={{ transition: 'transform 0.1s ease-out, opacity 0.1s ease-out' }}
    >
      <div className="max-w-8xl mx-auto px-6 text-center">
        <h2 className="text-[8rem] md:text-[6rem] font-bold leading-[1.1] text-gradient mb-8">
          Strategic Insight Meets AI.
        </h2>
      </div>
    </section>
  </div>

  );
};

export default Strategic;