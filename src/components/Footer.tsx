const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} <a href="https://venn.ca" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">venn.ca</a> — All rights reserved.
        </span>
        <span>Venn is a demo product.</span>
      </div>
    </footer>
  );
};

export default Footer;
