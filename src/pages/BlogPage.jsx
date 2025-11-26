import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding International Trade Regulations in 2024",
      excerpt: "Navigate the latest changes in global trade regulations and compliance requirements for seamless international business operations.",
      category: "Trade Regulations",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "./images/Trades.jpg",
      isImage: true,
    },
    {
      id: 2,
      title: "How to Choose the Right Import-Export Partner",
      excerpt: "Key factors to consider when selecting a trading partner for your international business needs and long-term success.",
      category: "Business Tips",
      date: "March 10, 2024",
      readTime: "7 min read",
      image: "./images/Bussinesstips.jpg",
      isImage: true,
    },
    {
      id: 3,
      title: "Top 10 Export Markets for Indian Businesses in 2024",
      excerpt: "Discover the most promising export destinations for Indian companies and market opportunities across different sectors.",
      category: "Market Insights",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "./images/Market.jpg",
      isImage: true,
    },
    {
      id: 4,
      title: "Customs Clearance Made Easy: A Complete Guide",
      excerpt: "Step-by-step guide to navigating customs procedures, required documentation, and avoiding common pitfalls in international trade.",
      category: "Logistics",
      date: "February 28, 2024",
      readTime: "8 min read",
      image: "./images/logistics.jpg",
      isImage: true,
    },
    {
      id: 5,
      title: "The Future of Global Supply Chains",
      excerpt: "Explore emerging trends, technologies, and strategies shaping the future of international supply chain management.",
      category: "Industry Trends",
      date: "February 22, 2024",
      readTime: "6 min read",
      image: "./images/indusrty.jpg",
      isImage: true,
    },
    {
      id: 6,
      title: "Export-Import Documentation: What You Need to Know",
      excerpt: "Essential documentation checklist for successful international trade transactions and compliance requirements.",
      category: "Documentation",
      date: "February 18, 2024",
      readTime: "5 min read",
      image: "./images/Documentation.jpg",
      isImage: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 bg-gradient-to-b from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4">
            <div className="text-center mb-10 animate-fade-in">
              <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-3">
                <span className="text-xs font-semibold text-primary">Blog & News</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
                Latest News & Insights
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Stay informed with the latest trends, insights, and updates from the world of international trade
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group overflow-hidden"
                >
                  {post.isImage ? (
                    <div className="h-48 overflow-hidden group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                      {post.image}
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg"
              >
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
    </div>
  );
};

export default BlogPage;

