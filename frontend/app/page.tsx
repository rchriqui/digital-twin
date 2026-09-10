import Twin from '@/components/twin';

const LINKEDIN_URL = 'https://www.linkedin.com/in/robinchriqui/';
const GITHUB_URL = 'https://github.com/rchriqui';
const CONTACT_EMAIL = 'robin.chriqui@gmail.com';
const CONTACT_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Interview request')}&body=${encodeURIComponent(
  `Hi Robin,

I came across your digital twin and would like to connect about an opportunity.

Best times for me:
[Your availability]

Best regards,
[Your name]`
)}`;

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
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-6">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              LinkedIn
            </a>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
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
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              View projects
            </a>
            <span className="text-slate-300 hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a href={CONTACT_URL} className={linkClass}>
              Contact
            </a>
          </div>

          <div className="h-[540px]">
            <Twin />
          </div>

          <footer className="mt-6 text-center text-sm text-gray-500">
            <p>
              Built with Next.js, FastAPI, Amazon Bedrock, AWS, Terraform &amp; GitHub Actions — Tel Aviv, Israel
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}
