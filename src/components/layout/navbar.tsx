import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

interface NavbarProps {
  items?: NavItem[];
}

export function Navbar({ items = [] }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const defaultItems: NavItem[] = [
    {
      label: 'Product',
      href: '/product',
    },
    {
      label: 'Resources',
      href: '/resources',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
    {
      label: 'Customers',
      href: '/customers',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ];

  const navItems = items.length ? items : defaultItems;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-[1000px] px-6">
        <nav className="relative flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="Cova Logo" className="h-[22px] w-[22px]" />
            <span className="text-lg font-medium">Cova</span>
          </Link>
          
          {/* 桌面端菜单 */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  className="rounded-md px-3 py-2 text-sm text-white/50 transition-colors hover:text-white hover:bg-white/[0.08]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            {/* 移动端菜单按钮 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/50 hover:text-white hover:bg-white/[0.08] rounded-md"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="hidden md:flex items-center gap-3">
              <Link to="/login">
                <Button 
                  variant="ghost" 
                  className="h-8 text-sm text-white/50 hover:text-white hover:bg-white/[0.08]"
                >
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button 
                  className="h-8 bg-white px-4 text-sm font-medium text-black hover:bg-white/90"
                >
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </nav>

        {/* 移动端菜单面板 */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 py-4 space-y-1 border-t border-white/[0.08]">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noreferrer" : undefined}
                  className="block px-3 py-2 text-base text-white/50 hover:text-white hover:bg-white/[0.08] rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button 
                    variant="ghost" 
                    className="w-full h-10 text-white/50 hover:text-white hover:bg-white/[0.08]"
                  >
                    Log in
                  </Button>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button 
                    className="w-full h-10 bg-white text-black hover:bg-white/90"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}