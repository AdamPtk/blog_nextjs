import Link from 'next/link';
import { ReactNode } from 'react';

const navLinks = [
  { path: '/', label: 'Blog', id: 1 },
  { path: '/about', label: 'About', id: 2 },
  { path: '/projects', label: 'Projects', id: 3 }
];

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="p-10 font-mono max-w-screen-xl mx-auto">
      <nav className="bg-blue-400 p-5 flex justify-center">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id} legacyBehavior>
            <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-500 cursor-pointer">
              {link.label}
            </a>
          </Link>
        ))}
      </nav>
      <main className="bg-gray-100 p-5">{children}</main>
      <footer className="bg-blue-400 p-5 text-gray-100 text-center">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
