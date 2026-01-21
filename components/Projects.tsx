import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Ran Lending',
      description:
        'RAN Lending is a modern loan management system designed to streamline the end-to-end lending process. The platform enables users to apply for loans online, track application status in real time, and securely manage personal and financial information. For administrators, the system provides tools for loan approval workflows, payment tracking, user verification, and reporting ensuring efficient operations and transparency across the lending process.',
      tags: ['Next.js', 'React', 'Laravel', 'MySQL'],
      link: 'https://ranserenity.com/',
      image: '/ran_serenity.png', 
    },
    {
      title: 'Guam Coral Reef Website',
      description:
        'The Guam Coral Reef Website is a WordPress-powered business website designed to showcase and promote products sold directly by the owner. The site features a clean, user-friendly layout that highlights product details, images, and pricing while making it easy for customers to explore available offerings. Built with WordPress, the platform allows the owner to easily manage content, update products, and maintain the website without technical complexity.',
      tags: ['WordPress', 'PHP', 'Web Design', 'MySQL'],
      link: 'https://guamcoralreef.com/',
      image: '/guam-landing.png', 
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 flex items-center gap-4">
        <span>Projects</span>
        <span className="h-px w-12 bg-primary"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group border border-border rounded-lg overflow-hidden bg-card shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            {/* Project Image */}
            {project.image && (
              <div className="relative w-full h-48 md:h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            )}

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View Demo Button */}
              <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary text-primary font-medium rounded hover:bg-primary/10 transition-all"
            >
              <i className="fas fa-link"></i>
              View Demo
            </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
