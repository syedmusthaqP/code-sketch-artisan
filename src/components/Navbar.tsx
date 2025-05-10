
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Innovation', href: 'innovation' },
  { label: 'Timeline', href: 'timeline' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'Contact', href: 'contact' },
];

export interface NavbarProps {
  activeSection?: string | null;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-[rgba(5,21,39,0.90)] backdrop-blur-md py-3" : "bg-transparent py-4"
    )}>
      <nav className="container mx-auto flex items-center justify-between px-6">
        {/* Logo - Removed since it's in the hero section */}
        <div></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={cn(
                "text-[15px] hover:text-[#00c3ff] transition-colors px-1 py-1 rounded",
                activeSection === link.href ? "text-[#00c3ff]" : "text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-[rgba(5,21,39,0.98)] backdrop-blur-md z-40 transition-all duration-300 flex flex-col",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="flex flex-col space-y-3 pt-20 px-4">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
                setMobileMenuOpen(false);
              }}
              className={cn(
                "py-2 hover:text-[#00c3ff] transition-colors text-lg",
                activeSection === link.href ? "text-[#00c3ff]" : "text-white"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
