import React from "react";

const About = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-32 border-t border-zinc-200/60"
    >
      {/* Garis dekoratif gradient di atas */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/60 to-transparent"
      />

      <div className="container mx-auto max-w-6xl px-6 md:px-12">
        {/* Grid statistik / kartu */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 overflow-hidden rounded-2xl shadow-sm shadow-indigo-100/50">
          {/* Isi kartu-kartu di sini */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Education */}
          <div data-testid="education-block">
            <div className="inline-flex items-center gap-3 mb-4">
              <span
                aria-hidden
                className="h-px w-8 bg-gradient-to-r from-indigo-500 to-pink-500"
              />
              <span className="font-mono text-xs uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </div>
            {/* Isi education di sini */}
          </div>

          {/* Experience */}
          <div data-testid="experience-block">
            <div className="inline-flex items-center gap-3 mb-4">
              <span
                aria-hidden
                className="h-px w-8 bg-gradient-to-r from-indigo-500 to-pink-500"
              />
              <span className="font-mono text-xs uppercase tracking-widest bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Experience
              </span>
            </div>
            <ul className="space-y-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
