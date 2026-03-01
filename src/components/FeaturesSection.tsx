import { Zap, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimised performance so you never have to wait. Everything loads instantly.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Your data stays yours. Built with privacy and security at the core.",
  },
  {
    icon: BarChart3,
    title: "Smart Insights",
    description: "Actionable analytics and dashboards to keep you ahead of the curve.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Why <span className="text-gradient-primary">Venn</span>?
        </h2>
        <p className="text-center text-muted-foreground max-w-md mx-auto mb-16">
          Built for simplicity, designed for impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:glow-primary"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
