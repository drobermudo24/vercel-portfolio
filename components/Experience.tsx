export default function Experience() {
  const experiences = [
    {
      title: 'Backend Web Developer',
      company: 'Trackerteer Web Developer Corp.',
      period: 'July 2023 - Present',
      location: 'City of Sanfernando, Pampanga',
      achievements: [
        'Maintained and enhanced a production backend system used by users across China, the UK, and the Philippines, ensuring high availability and consistent performance.',
        'Developed and deployed new backend features and functionalities based on user requirements and business needs.',
        'Refactored legacy code to improve maintainability, performance, and scalability of the system.'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Online Thinkers Technology',
      period: 'July 2022 - July 2023',
      achievements: [
        'Maintained and updated WordPress websites for clients in the UK, Australia, and Canada, ensuring site stability, security, and performance.',
        'Built and launched new WordPress websites based on client requirements, from layout setup to plugin configuration and deployment.',
        'Implemented on-page SEO best practices, including keyword optimization, meta tags, site structure, and performance improvements to enhance search visibility.'
      ]
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Freelance',
      period: '2025 - Present',
      achievements: [
        'Designed and developed custom systems and websites based on client requirements and business needs.',
        'Created responsive, user-friendly interfaces while implementing secure and scalable backend functionality.',
        'Worked across full spectrum of web development from frontend design to backend infrastructure.'
      ]
    }
  ];

  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
        <span>Experience</span>
        <span className="h-px w-12 bg-primary"></span>
      </h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-8 relative">
            <div className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"></div>
            
            <div>
              <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
              <p className="text-primary text-sm font-medium mt-1">{exp.company}</p>
              <p className="text-muted-foreground text-sm">{exp.period}</p>
              {exp.location && <p className="text-muted-foreground text-sm">{exp.location}</p>}
              
              <ul className="mt-4 space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-muted-foreground text-base leading-relaxed flex gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
