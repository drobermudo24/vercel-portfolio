export default function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
        <span>About Me</span>
        <span className="h-px w-12 bg-primary"></span>
      </h2>
      
      <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
        <p>
          Detail-oriented Web Developer with hands-on experience in developing dynamic web applications, integrating APIs, and optimizing performance. I'm adept at working in fast-paced environments, debugging complex issues, and delivering high-quality features on time.
        </p>
        
        <p>
          My technical background spans both frontend and backend development. On the frontend, I specialize in React, Next.js, and modern CSS frameworks like Tailwind. On the backend, I work extensively with PHP, Laravel, MySQL, and NoSQL databases. I'm also proficient in REST API design and implementation.
        </p>

        <p>
          I'm passionate about clean code architecture and building scalable systems. Whether maintaining production backends serving users across multiple countries or developing custom WordPress solutions for international clients, I focus on ensuring stability, security, and optimal performance.
        </p>

        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Frontend</h4>
              <p className="text-sm text-muted-foreground">JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Backend</h4>
              <p className="text-sm text-muted-foreground">PHP, Laravel, MySQL, NoSQL, REST APIs, OpenAI</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Tools & Version Control</h4>
              <p className="text-sm text-muted-foreground">Git, Svn</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">CMS & Website Platforms</h4>
              <p className="text-sm text-muted-foreground"> WordPress, Joomla!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
