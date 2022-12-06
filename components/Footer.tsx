import Link from "next/link";
import Copyright from "./CopyRight";

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const ExternalLink = ({ href, children }: ExternalLinkProps) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <div className="bg-gray-800 mt-8 pt-8 w-full">
      <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
        <div className="w-full grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              About
            </Link>
            <Link
              href="/techstack"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Technical Stack
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <ExternalLink href="https://www.linkedin.com/in/bjbaskar/">
              LinkedIn
            </ExternalLink>

            <ExternalLink href="https://github.com/bjbaskar">
              GitHub
            </ExternalLink>

            <ExternalLink href="https://twitter.com/bjbaskar">
              Twitter
            </ExternalLink>
          </div>
          <div className="flex flex-col gap-4">
            <ExternalLink href="https://stackoverflow.com/users/2075914/bjbaskar">
              Stack Overflow
            </ExternalLink>

            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Guestbook
            </Link>

            <Link
              href="/patterns"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Snippets
            </Link>

            <Link
              href="/contact"
              className="text-gray-500 hover:text-gray-600 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>

      <Copyright />
    </div>
  );
}
