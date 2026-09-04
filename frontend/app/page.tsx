import Twin from '@/components/twin';

const LINKEDIN_URL = 'https://www.linkedin.com/in/robinchriqui/';
const GITHUB_URL = 'https://github.com/rchriqui';

const linkClass =
  'inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
            Robin Chriqui
          </h1>
          <p className="text-center text-gray-600 mb-4">
            Agentic AI &amp; Data Science Engineer
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              GitHub
            </a>
          </div>

          <div className="h-[600px]">
            <Twin />
          </div>

          <footer className="mt-8 text-center text-sm text-gray-500 space-y-2">
            <p>Chat with Robin&apos;s Digital Twin — Tel Aviv, Israel</p>
            <p className="flex justify-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700 transition-colors"
              >
                LinkedIn
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-700 transition-colors"
              >
                GitHub
              </a>
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}