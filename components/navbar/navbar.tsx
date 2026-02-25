import { Button } from "@/components/ui/button";
import { UserRound } from 'lucide-react';
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 xs:h-16 bg-background/50 backdrop-blur-sm max-w-screen-xl mx-auto">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <Logo />

        {/* Desktop navigation menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex w-150 items-center gap-3">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="hidden sm:inline-flex"
          >
            <UserRound />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
