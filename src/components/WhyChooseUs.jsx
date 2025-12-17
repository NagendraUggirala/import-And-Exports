// src/components/WhyChooseUs.jsx
import { CheckCircle2, Shield, Clock, Users, TrendingUp, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WhyChooseUs = () => {
  const [visibleCards, setVisibleCards] = useState({});
  const cardsRef = useRef([]);
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Quality checked at every stage",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Shield,
      title: "Trusted Sourcing",
      description: "Verified suppliers with proven track records",
      gradient: "from-primary to-blue-600",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Efficient logistics and on-time delivery",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      icon: TrendingUp,
      title: "Transparent Pricing",
      description: "No hidden costs, clear pricing structure",
      gradient: "from-brand-orange to-orange-600",
    },
    {
      icon: Award,
      title: "Full Compliance",
      description: "International compliance and documentation",
      gradient: "from-brand-gold to-yellow-600",
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Strong network spanning multiple continents",
      gradient: "from-primary to-blue-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="py-8 mt-5 md:pb-8 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-5 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-brand-gold">Why Choose Us</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-3 tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-3"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your success is our priority. Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`group bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden scroll-animate-scale-from-small ${
                visibleCards[index] ? "scroll-animate-scale-from-small-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-xl`}>
                <reason.icon className="h-8 w-8 text-white transition-transform duration-300" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-foreground mb-3 transition-all duration-300">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

