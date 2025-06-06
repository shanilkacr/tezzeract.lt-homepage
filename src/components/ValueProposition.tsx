import React, { FC, useEffect, useRef } from 'react';
import { Cpu, Zap, Users, Workflow } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Placeholderimage from '@/assets/Tezzeract Object.webp';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Improved TypeScript interface for SplitType
interface SplitTypeResult {
  chars: HTMLElement[] | null;
  words: HTMLElement[] | null;
  lines: HTMLElement[] | null;
  revert: () => void;
}

const ValueProposition: FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!h1Ref.current) return;

    // Initialize SplitType with proper error handling
    const split = new SplitType(h1Ref.current, {
      types: ['words', 'chars']
    }) as SplitTypeResult;

    if (!split.chars) return;

    // GSAP ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: 'top 90%',
        end: '+=60%',
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
    <section id="value-prop" className="bg-tezzeract-dark py-20">
      <style>
        {`
          .cool-split h1 {
            width: 5%;
            color: #00378A;
          }
        `}
      </style>
      <div className="max-w-7xl mx-auto px-6">
        {/* Part 1 */}
        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Left Column - 60% */}
          <div className="md:col-span-3">
            <h2 ref={h1Ref} className="cool-split text-[#00378a] text-6xl font-light">
              Every minute your team spends on repetitive tasks is a minute not spent on innovation.
            </h2>
          </div>

          {/* Right Column - 40% */}
          <div className="md:col-span-2">
            <div className="relative h-80">
              <img
                src={Placeholderimage}
                alt="Tezzeract Object"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-tezzeract-black opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Part 2 */}
        <div className="grid pt-20 md:grid-cols-5 gap-12 items-center">
          {/* Left Column - 40% */}
          <div className="md:col-span-2">
            <div className="relative flex items-center justify-center h-80">
              {/* Central Tezzeract Cube */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={Placeholderimage}
                  alt="Tezzeract Cube"
                  className="w-64 h-64 object-cover rounded-full shadow-lg"
                />
              </div>

              {/* Orbiting Icons */}
            </div>
          </div>

          {/* Right Column - 60% */}
          <div className="md:col-span-3">
            <h2 className="md:text-6xl text-6xl font-light text-white mb-6">
              Tezzeract builds smart automation systems that handle routine tasks, freeing your team to focus on growing your business.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;