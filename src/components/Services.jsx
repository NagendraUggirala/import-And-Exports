import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ship, Truck, Package, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Domestic & National Distribution",
      description:
        "We supply goods across India with fast delivery, consistent quality, and strong supply chain networks.",
      color: "text-brand-gold",
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-gold/5",
      borderColor: "border-brand-gold/20",
      hoverGradient: "hover:from-brand-gold/30 hover:to-brand-gold/10",
      image: "./images/national.png",
    },
    {
      icon: Ship,
      title: "International Export Services",
      description:
        "We export premium-quality goods to global markets, ensuring every shipment meets international standards and customer expectations.",
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-primary/20 to-primary/5",
      borderColor: "border-primary/20",
      hoverGradient: "hover:from-primary/30 hover:to-primary/10",
      image: "./images/international.jpg",
    },
    {
      icon: Package,
      title: "Global Import Solutions",
      description:
        "We import goods from trusted international suppliers with hassle-free service from sourcing to customs clearance.",
      color: "text-brand-orange",
      bgColor: "bg-gradient-to-br from-brand-orange/20 to-brand-orange/5",
      borderColor: "border-brand-orange/20",
      hoverGradient: "hover:from-brand-orange/30 hover:to-brand-orange/10",
      image: "./images/global.jpg",
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden py-12">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-3">
            <span className="text-xs font-semibold text-primary">Our Services</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
            What We Do
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive trading solutions tailored to your business needs. We bridge markets with excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 ${service.borderColor} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up bg-white/80 backdrop-blur-sm group overflow-hidden relative`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="relative z-10">
                {service.image ? (
                  <div className="h-48 overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className={`h-10 w-10 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-foreground mb-3 transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  Learn More
                  <ArrowRight className="h-4 w-4 mt-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

