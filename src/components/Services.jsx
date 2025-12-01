import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ship, Truck, Package, ArrowRight, X } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Truck,
      title: "Domestic & National Distribution",
      description: "We supply goods across India with fast delivery, consistent quality, and strong supply chain networks.",
      detailedContent: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Complete Domestic Distribution Solutions</h3>
          <p class="text-gray-700 leading-relaxed">
            Our Domestic & National Distribution service ensures seamless movement of goods across India through a strong logistics network and reliable transport partners.
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>We prioritize safe handling, timely delivery, and cost-effective operations for all shipment types</li>
            <li>With optimized route planning and end-to-end supply chain support, we deliver consistent quality across regions</li>
            <li>Our distribution network covers metro cities, industrial hubs, and remote locations with equal efficiency</li>
            <li>Real-time tracking, transparent communication, and dedicated customer support ensure smooth delivery experiences</li>
            <li>No matter the distance or destination, we guarantee dependable and professional distribution services nationwide</li>
          </ul>
          <div class="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-blue-900 mb-2">Key Features:</h4>
            <div class="grid grid-cols-2 gap-2 text-sm text-blue-800">
              <span>• Pan-India Coverage</span>
              <span>• Real-time Tracking</span>
              <span>• Safe Handling</span>
              <span>• Timely Delivery</span>
            </div>
          </div>
        </div>
      `,
      color: "text-brand-gold",
      bgColor: "bg-gradient-to-br from-brand-gold/20 to-brand-gold/5",
      borderColor: "border-brand-gold/20",
      hoverGradient: "hover:from-brand-gold/30 hover:to-brand-gold/10",
      image: "./images/national.png",
    },
    {
      icon: Ship,
      title: "International Export Services",
      description: "We export premium-quality goods to global markets, ensuring every shipment meets international standards.",
      detailedContent: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Global Export Expertise</h3>
          <p class="text-gray-700 leading-relaxed">
            Our International Export Services enable businesses to reach global markets with confidence and efficiency.
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>We ensure every shipment meets international quality, packaging, and compliance standards for smooth cross-border movement</li>
            <li>With a strong network of global logistics partners, we manage documentation, customs procedures, and freight coordination seamlessly</li>
            <li>Our team ensures safe handling and timely dispatch of goods to ports, warehouses, and international buyers</li>
            <li>Real-time tracking and transparent communication keep clients updated at every stage of the export process</li>
            <li>From sourcing to final delivery overseas, we provide secure, reliable, and professionally managed export solutions</li>
          </ul>
          <div class="bg-green-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-green-900 mb-2">Export Advantages:</h4>
            <div class="grid grid-cols-2 gap-2 text-sm text-green-800">
              <span>• Global Compliance</span>
              <span>• Documentation Support</span>
              <span>• Customs Clearance</span>
              <span>• Real-time Tracking</span>
            </div>
          </div>
        </div>
      `,
      color: "text-primary",
      bgColor: "bg-gradient-to-br from-primary/20 to-primary/5",
      borderColor: "border-primary/20",
      hoverGradient: "hover:from-primary/30 hover:to-primary/10",
      image: "./images/international.jpg",
    },
    {
      icon: Package,
      title: "Global Import Solutions",
      description: "We import goods from trusted international suppliers with hassle-free service from sourcing to customs clearance.",
      detailedContent: `
        <div class="space-y-4">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Seamless Import Services</h3>
          <p class="text-gray-700 leading-relaxed">
            Our Global Import Solutions simplify the process of sourcing and importing goods from trusted international suppliers.
          </p>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>We handle end-to-end operations including vendor coordination, quality checks, and compliance with global trade regulations</li>
            <li>Our team manages all import documentation, customs clearance, and freight forwarding with precision and efficiency</li>
            <li>With a reliable international logistics network, we ensure timely delivery of goods to your warehouse or distribution center</li>
            <li>Clients receive full transparency through real-time shipment tracking and dedicated support throughout the import journey</li>
            <li>From sourcing to final delivery, we provide smooth, hassle-free, and cost-effective import solutions tailored to your business needs</li>
          </ul>
          <div class="bg-orange-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-orange-900 mb-2">Import Benefits:</h4>
            <div class="grid grid-cols-2 gap-2 text-sm text-orange-800">
              <span>• Vendor Coordination</span>
              <span>• Quality Checks</span>
              <span>• Customs Clearance</span>
              <span>• Real-time Tracking</span>
            </div>
          </div>
        </div>
      `,
      color: "text-brand-orange",
      bgColor: "bg-gradient-to-br from-brand-orange/20 to-brand-orange/5",
      borderColor: "border-brand-orange/20",
      hoverGradient: "hover:from-brand-orange/30 hover:to-brand-orange/10",
      image: "./images/global.jpg",
    },
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
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
                className={`border-2 ${service.borderColor} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up bg-white/80 backdrop-blur-sm group overflow-hidden relative cursor-pointer`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleLearnMore(service)}
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
                  <button
                    className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(service);
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 mt-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal with Left Image and Right Content */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${selectedService.bgColor} rounded-xl flex items-center justify-center`}>
                    <selectedService.icon className={`h-6 w-6 ${selectedService.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content - Left Image and Right Text */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - Image (Centered) */}
                  <div className="space-y-4 flex flex-col items-center justify-center">
                    {selectedService.image && (
                      <div className="h-80 overflow-hidden rounded-xl w-full max-w-lg flex items-center justify-center">
                        <img
                          src={selectedService.image}
                          alt={selectedService.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Side - Content */}
                  <div className="space-y-4">
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedService.detailedContent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;