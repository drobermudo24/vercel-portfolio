'use client';

import { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';

interface GithubStats {
  followers: number;
  public_repos: number;
  following: number;
  loading: boolean;
  error: string | null;
}

export default function GitHub() {
  const [stats, setStats] = useState<GithubStats>({
    followers: 0,
    public_repos: 0,
    following: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/drobermudo24');
        if (!response.ok) throw new Error('Failed to fetch GitHub data');
        const data = await response.json();

        setStats({
          followers: data.followers,
          public_repos: data.public_repos,
          following: data.following,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: 'Failed to fetch GitHub stats',
        }));
      }
    };

    fetchGitHubStats();
  }, []);

  return (
    <section id="github" className="scroll-mt-20 bg-card py-12 px-6 sm:px-8 rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-4">
        <span>GitHub</span>
        <span className="h-px w-12 bg-primary"></span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* GitHub Stats */}
        <div className="border border-gray-700 rounded-lg p-8 bg-white-800">
          <h3 className="text-lg font-semibold text-white mb-6">GitHub Stats</h3>

          {stats.loading ? (
            <div className="space-y-4">
              <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-700 rounded animate-pulse"></div>
            </div>
          ) : stats.error ? (
            <p className="text-red-500 text-sm">{stats.error}</p>
          ) : (
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-gray-400 text-sm mb-1">Repos</p>
                <p className="text-2xl font-bold text-primary">{stats.public_repos}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Followers</p>
                <p className="text-2xl font-bold text-primary">{stats.followers}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">Following</p>
                <p className="text-2xl font-bold text-primary">{stats.following}</p>
              </div>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="border border-gray-700 rounded-lg p-8 bg-white-800 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Explore My Work</h3>
            <p className="text-gray-400 text-base mb-6 leading-relaxed">
              Check out my repositories and contributions on GitHub. I'm passionate about open-source development and sharing knowledge with the community.
            </p>
          </div>
          <a
            href="https://github.com/drobermudo24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
          >
            Visit GitHub
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l4-4m0 0l4 4m-4-4v12"
                transform="rotate(90)"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Interactive Dark Contribution Calendar */}
      <div className="mt-8 border border-gray-700 rounded-lg p-8 bg-white-800">
        <h3 className="text-lg font-semibold text-white mb-4">Contribution Activity</h3>
        <p className="text-gray-400 text-base leading-relaxed mb-6">
          My GitHub activity shows consistent contributions across projects, including full-stack apps, backend systems, and open-source projects.
        </p>

        <div className="overflow-x-auto">
          <GitHubCalendar
            username="drobermudo24"
            blockSize={15}
            blockMargin={4}
            // maxLevel: 4 means 0..4 => 5 colors
            maxLevel={4}
            theme={{
              dark: ['#2e2e2e', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50'],
            }}
          />
        </div>
      </div>
    </section>
  );
}