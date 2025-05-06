export default function SiteFooter() {
    return (
      <footer className="border-t border-border py-6 text-sm text-center text-muted-foreground">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    );
  }
  