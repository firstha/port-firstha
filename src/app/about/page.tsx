"import React from 'react';"

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="py-24 md:py-32 border-t border-zinc-200 dark:border-zinc-800"
    >
      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          <div data-testid="education-block">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-4">
              Education
            </div>
              
          </div>

          <div data-testid="experience-block">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-500 mb-4">
              Experience
            </div>
            <ul className="space-y-6">
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
