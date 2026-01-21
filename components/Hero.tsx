import Image from 'next/image';

export default function Hero() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 -mx-6 sm:-mx-8 px-6 sm:px-8 xl:mx-0 xl:px-0  overflow-hidden">
      {/* Animated gradient orb background */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-[pulse_3s_infinite]" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-[pulse_3s_infinite]" style={{ animationDelay: '1s' }} />

      
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Alejandro Bermudo
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mt-4">
              Web Developer
            </p>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I like working on projects from start to finish and making sure everything runs smoothly along the way. I enjoy solving problems, improving performance, and building features that people actually enjoy using. I’m all about creating simple, effective solutions that make a real impact.
          </p>
        </div>
        
        {/* Image */}
        <div className="flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-83 lg:h-83 relative">
          <Image
            src="/head.png"
            alt="Alejandro Bermudo"
            fill
            className="object-cover rounded-2xl shadow-2xl border border-primary/20"
            priority
          />
        </div>
      </div>
    </section>
  );
}
