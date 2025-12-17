// src/components/Testimonials.jsx
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Quote, Star, Globe, Package, Clock, Shield, TrendingUp, User, UserCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [api, setApi] = useState(null);
  const autoplayIntervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Human icons for testimonials
  const humanIcons = [
    <UserCircle className="h-6 w-6 text-primary" />,
    <User className="h-6 w-6 text-primary" />,
  ];

  const testimonials = [
    // 01
    {
      name: "Rajesh Kumar",
      company: "Tech Imports Ltd.",
      role: "CEO",
      content: "Anand Imports & Exports has been our trusted partner for over 5 years. Their reliability and attention to detail in international trade is unmatched. They've helped us expand to 15 new markets seamlessly.",
      rating: 5,
      icon: humanIcons[0], // Using human icon instead of industry icon
      country: "India",
      years: 5,
      industry: "Electronics"
    },
    // 02
    {
      name: "Sarah Johnson",
      company: "Global Distribution Corp",
      role: "Operations Director",
      content: "Working with Anand transformed our import operations. Their team is professional, responsive, and always delivers on time. Highly recommended for anyone looking for quality trade solutions.",
      rating: 5,
      icon: humanIcons[1], // Using human icon instead of industry icon
      country: "USA",
      years: 3,
      industry: "FMCG"
    },
    // 03
    {
      name: "Michael Chen",
      company: "Pacific Trading Group",
      role: "Founder",
      content: "The transparency and efficiency of Anand Imports & Exports is exceptional. They handle all documentation, customs clearance, and logistics with expertise. Our partnership has grown significantly.",
      rating: 5,
      icon: humanIcons[0], // Using human icon instead of industry icon
      country: "Singapore",
      years: 4,
      industry: "Textiles"
    },
    // 04
    {
      name: "Priya Sharma",
      company: "Eastern Exports Co.",
      role: "Export Manager",
      content: "Anand understands the complexities of international trade. Their network spans continents, and they've consistently helped us reach new customers worldwide. Outstanding service quality.",
      rating: 5,
      icon: humanIcons[1], // Using human icon instead of industry icon
      country: "India",
      years: 6,
      industry: "Consumer Goods"
    },
    // 05
    {
      name: "David Williams",
      company: "International Ventures",
      role: "CEO",
      content: "We've worked with many trading partners, but Anand Imports & Exports stands out. Their commitment to quality, transparent pricing, and excellent customer service makes them our preferred choice.",
      rating: 5,
      icon: humanIcons[0], // Using human icon instead of industry icon
      country: "UK",
      years: 2,
      industry: "Industrial Materials"
    },
    // 06
    {
      name: "Aisha Al-Mansoori",
      company: "Middle East Trading House",
      role: "Procurement Head",
      content: "Anand's sourcing capabilities in the health & wellness sector are remarkable. They secured us premium suppliers at competitive rates with full quality assurance. Exceptional service in challenging markets.",
      rating: 5,
      icon: humanIcons[1], // Using human icon instead of industry icon
      country: "UAE",
      years: 3,
      industry: "Health & Wellness"
    },
    // 07
    {
      name: "Kenji Tanaka",
      company: "Tokyo Electronics Inc.",
      role: "Supply Chain Director",
      content: "Their attention to detail in electronics import documentation saved us significant time and costs. Anand's team understands Japanese quality standards and delivers with precision every time.",
      rating: 5,
      icon: humanIcons[0], // Using human icon instead of industry icon
      country: "Japan",
      years: 4,
      industry: "Electronics"
    },
    // 08
    {
      name: "Maria Rodriguez",
      company: "European Lifestyle Brands",
      role: "CEO",
      content: "Expanding our home goods line to India was seamless with Anand's national distribution network. Their logistics framework ensured our products reached every major city efficiently and safely.",
      rating: 5,
      icon: humanIcons[1], // Using human icon instead of industry icon
      country: "Spain",
      years: 2,
      industry: "Lifestyle Goods"
    },
    // 09
    {
      name: "Arjun Patel",
      company: "AgriPro Exports",
      role: "Managing Director",
      content: "Anand's export services for our food products exceeded expectations. They navigated complex international regulations and ensured our perishables reached global markets in perfect condition.",
      rating: 5,
      icon: humanIcons[0], // Using human icon instead of industry icon
      country: "India",
      years: 5,
      industry: "Food Products"
    },
    // 10
    {
      name: "Sophie Martin",
      company: "Paris Fashion Imports",
      role: "Owner",
      content: "Sourcing premium textiles from India was challenging until we partnered with Anand. Their quality verification and timely shipments have made them an invaluable part of our supply chain.",
      rating: 5,
      icon: humanIcons[1], // Using human icon instead of industry icon
      country: "France",
      years: 3,
      industry: "Textiles"
    }
  ];

  // Update active index when carousel scrolls
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const startAutoplay = () => {
      if (isHovered) {
        return;
      }

      autoplayIntervalRef.current = setInterval(() => {
        if (api && !isHovered) {
          api.scrollNext();
        }
      }, 3000); // 3 seconds
    };

    const stopAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [api, isHovered]);

  // Get current testimonial stats for the summary
  const getTestimonialStats = () => {
    const totalYears = testimonials.reduce((sum, t) => sum + (t.years || 0), 0);
    const countries = [...new Set(testimonials.map(t => t.country))];
    const industries = [...new Set(testimonials.map(t => t.industry))];
    
    return {
      totalTestimonials: testimonials.length,
      averageRating: 5, // All are 5 stars
      countriesCount: countries.length,
      industriesCount: industries.length,
      totalYears: totalYears
    };
  };

  const stats = getTestimonialStats();

  return (
    <section 
      className="py-12 mt-5 pb-16 md:pb-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      id="testimonials">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-gold/10 rounded-full mb-4">
            <Star className="h-4 w-4 text-brand-gold" />
            <span className="text-sm font-semibold text-brand-gold">Client Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 tracking-tight">
            Trusted by Global Businesses
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join {stats.totalTestimonials}+ satisfied clients across {stats.countriesCount}+ countries
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{stats.totalTestimonials}+</div>
            <div className="text-sm text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{stats.averageRating}.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{stats.countriesCount}+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-border/50 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{stats.totalYears}+</div>
            <div className="text-sm text-muted-foreground">Years of Trust</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card 
                    className={`
                      border-2 border-border/50 shadow-xl hover:shadow-2xl 
                      transition-all duration-500 h-full bg-gradient-to-br 
                      from-white to-white/95 backdrop-blur-sm
                      transform hover:-translate-y-1
                      ${activeIndex === index ? 'ring-2 ring-primary/20' : ''}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
                      {/* Quote Icon & Industry Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <Quote className="h-10 w-10 text-primary/30" />
                        <div className="px-3 py-1 bg-primary/10 rounded-full">
                          <span className="text-xs font-medium text-primary">{testimonial.industry}</span>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      {/* Content */}
                      <p className="text-foreground/80 leading-relaxed mb-6 flex-grow text-sm md:text-base">
                        "{testimonial.content}"
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/10 to-brand-gold/10">
                          {/* Human icon display */}
                          <div className="flex items-center justify-center h-10 w-10">
                            {testimonial.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center gap-2 mb-1 md:mb-0">
                              <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                            </div>
                            <div className="mt-1 md:mt-0">
                              <span className="text-xs font-medium px-2 py-1 bg-secondary/50 rounded-md">
                                {testimonial.country}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-1">
                            <p className="text-xs text-primary font-medium">
                              {testimonial.company}
                            </p>
                            <p className="text-sm text-muted-foreground mt-1 md:mt-0">
                              {testimonial.role}
                            </p>
                          </div>
                          {testimonial.years && (
                            <div className="flex items-center gap-1 mt-2">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">
                                Partner for {testimonial.years} year{testimonial.years > 1 ? 's' : ''}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-14 hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="hidden md:flex -right-14 hover:bg-primary hover:text-white transition-colors" />
          </Carousel>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.slice(0, Math.ceil(testimonials.length / 3)).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index * 3)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / 3) === index 
                  ? 'w-8 bg-primary' 
                  : 'w-2 bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by businesses across {stats.industriesCount}+ industries
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">100% Verified Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">Global Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                <span className="text-sm font-medium">On-time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Diverse Client Base</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;