import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageBreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function PageBreadcrumbs({ items }: PageBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4"
    >
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center hover:text-white transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 mx-1 text-white/40" aria-hidden="true" />
            {item.href ? (
              <Link to={item.href} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
