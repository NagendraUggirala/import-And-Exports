import { Package, ChefHat, Monitor, Shirt, Factory, Activity, Sofa, Globe } from "lucide-react";

const Industries = () => {
  const industries = [
    { 
      icon: Package, 
      label: "Consumer Goods", 
      description: "Essential for every consumer's daily needs"
    },
    { 
      icon: ChefHat, 
      label: "Food Products & FMCG", 
      description: "Key to every food quality standard"
    },
    { 
      icon: Monitor, 
      label: "Electronics & Hardware", 
      description: "Crucial for every technological advancement"
    },
    { 
      icon: Shirt, 
      label: "Textiles & Garments", 
      description: "Integral to every textile innovation"
    },
    { 
      icon: Factory, 
      label: "Industrial Materials", 
      description: "Foundation for every industrial growth"
    },
    { 
      icon: Activity, 
      label: "Health & Wellness", 
      description: "Crucial for every healthcare advancement"
    },
    { 
      icon: Sofa, 
      label: "Lifestyle & Household", 
      description: "Essential for every lifestyle enhancement"
    },
    { 
      icon: Globe, 
      label: "General Trading", 
      description: "Vital for every business expansion"
    },
  ];

  return (
    <section id="industries" className="py-12 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold text-primary">Industries</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
            Industries We Serve
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Providing trusted trading solutions across diverse sectors worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-scale-in border border-gray-100 overflow-hidden"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Icon Container */}
              <div className="relative z-10 w-16 h-16 flex items-center justify-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <industry.icon className="h-6 w-6 text-brand-orange" strokeWidth={2} />
                </div>
              </div>
              
              {/* Label */}
              <h3 className="relative z-10 text-lg font-bold text-foreground mb-2 transition-all duration-300">
                {industry.label}
              </h3>
              
              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

