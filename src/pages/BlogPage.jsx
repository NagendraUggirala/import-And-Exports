import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Understanding International Trade Regulations in 2024</h2>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p class="text-blue-800 font-semibold">Stay compliant and competitive with the latest global trade regulations affecting international business operations.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Key Regulatory Changes in 2024</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>Digital Customs Documentation:</strong> Mandatory e-documentation across 50+ countries</li>
            <li><strong>Sustainability Requirements:</strong> New environmental compliance standards for imports</li>
            <li><strong>Trade Agreement Updates:</strong> Revised terms in major trade partnerships</li>
            <li><strong>Sanctions & Embargoes:</strong> Updated restricted countries and products list</li>
            <li><strong>Quality Standards:</strong> Enhanced product certification requirements</li>
          </ul>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-2">🌍 Regional Compliance</h4>
              <ul class="text-sm text-green-800 space-y-1">
                <li>• EU: New CBAM regulations</li>
                <li>• USA: UFLPA enforcement</li>
                <li>• Asia: RCEP implementation</li>
                <li>• Middle East: GCC standardization</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-900 mb-2">⚠️ Common Pitfalls</h4>
              <ul class="text-sm text-red-800 space-y-1">
                <li>• Incorrect HS code classification</li>
                <li>• Missing certificates of origin</li>
                <li>• Inadequate product labeling</li>
                <li>• Customs valuation errors</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Best Practices for Compliance</h3>
          <ol class="list-decimal list-inside space-y-3 text-gray-700">
            <li><strong>Regular Training:</strong> Keep your team updated with quarterly regulatory training sessions</li>
            <li><strong>Documentation Audit:</strong> Conduct monthly checks of all trade documents</li>
            <li><strong>Partner Verification:</strong> Verify compliance status of all supply chain partners</li>
            <li><strong>Technology Integration:</strong> Implement automated compliance checking systems</li>
            <li><strong>Expert Consultation:</strong> Work with trade compliance specialists for complex shipments</li>
          </ol>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
            <h4 class="font-bold text-yellow-800 mb-2">💡 Pro Tip</h4>
            <p class="text-yellow-700 text-sm">Maintain a compliance calendar with all regulatory deadline dates and set reminders 30 days in advance for preparation.</p>
          </div>
        </div>
      `
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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">How to Choose the Right Import-Export Partner</h2>
          
          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <p class="text-purple-800 font-semibold">Your trading partner can make or break your international business success. Choose wisely with these proven criteria.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Essential Selection Criteria</h3>
          <ul class="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Industry Experience:</strong> Minimum 5 years in your specific product category</li>
            <li><strong>Geographic Expertise:</strong> Proven track record in your target markets</li>
            <li><strong>Financial Stability:</strong> Transparent financial records and creditworthiness</li>
            <li><strong>Compliance Record:</strong> Clean history with customs and regulatory bodies</li>
            <li><strong>Network Strength:</strong> Established relationships with logistics and customs partners</li>
            <li><strong>Technology Capability:</strong> Modern systems for tracking and communication</li>
          </ul>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-900 mb-2">✅ Must-Have Qualities</h4>
              <ul class="text-sm text-blue-800 space-y-2">
                <li>• Transparent communication</li>
                <li>• Quick response time</li>
                <li>• Problem-solving attitude</li>
                <li>• Cultural understanding</li>
                <li>• References & testimonials</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-900 mb-2">❌ Red Flags</h4>
              <ul class="text-sm text-red-800 space-y-2">
                <li>• Vague contract terms</li>
                <li>• Poor online presence</li>
                <li>• Unverified claims</li>
                <li>• Pressure for quick decisions</li>
                <li>• Limited client portfolio</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Due Diligence Checklist</h3>
          <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <ul class="space-y-2 text-sm">
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Verify business registration and licenses</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Check trade association memberships</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Request and contact references</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Review sample contracts</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Conduct site visit if possible</li>
              <li class="flex items-center"><span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span> Test communication responsiveness</li>
            </ul>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Partnership Success Factors</h3>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Clear Communication</span>
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Shared Goals</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Trust & Reliability</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Flexibility</span>
            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Conflict Resolution</span>
          </div>

          <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
            <h4 class="font-bold text-green-800 mb-2">🚀 Success Story</h4>
            <p class="text-green-700 text-sm">Companies that conduct thorough partner selection see 68% higher success rates in international ventures and 45% fewer compliance issues.</p>
          </div>
        </div>
      `
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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Top 10 Export Markets for Indian Businesses in 2024</h2>
          
          <div class="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
            <p class="text-orange-800 font-semibold">Strategic market selection is crucial for export success. Here are the most promising destinations for Indian exporters this year.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-4">2024 Top Export Destinations</h3>
          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">1</span>
                <span class="font-semibold">United States</span>
              </div>
              <span class="text-green-600 font-bold">+18% Growth</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">2</span>
                <span class="font-semibold">United Arab Emirates</span>
              </div>
              <span class="text-green-600 font-bold">+22% Growth</span>
            </div>
            <div class="flex items-center justify-between p-3 bg-white border rounded-lg">
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white font-bold">3</span>
                <span class="font-semibold">Netherlands</span>
              </div>
              <span class="text-green-600 font-bold">+15% Growth</span>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-900 mb-2">📈 High-Growth Sectors</h4>
              <ul class="text-sm text-blue-800 space-y-2">
                <li>• Pharmaceuticals & Healthcare</li>
                <li>• IT & Software Services</li>
                <li>• Renewable Energy Equipment</li>
                <li>• Processed Foods</li>
                <li>• Automotive Components</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-2">🎯 Emerging Opportunities</h4>
              <ul class="text-sm text-green-800 space-y-2">
                <li>• Vietnam: Manufacturing goods</li>
                <li>• Brazil: Agricultural equipment</li>
                <li>• South Africa: Consumer goods</li>
                <li>• Australia: Education services</li>
                <li>• Japan: Specialty foods</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Market Entry Strategies</h3>
          <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li><strong>USA:</strong> Focus on e-commerce platforms and trade shows</li>
            <li><strong>UAE:</strong> Leverage free trade zones and distribution networks</li>
            <li><strong>Europe:</strong> Partner with local distributors and comply with EU standards</li>
            <li><strong>Southeast Asia:</strong> Utilize ASEAN trade agreements</li>
            <li><strong>Africa:</strong> Start with regional hubs like Kenya and South Africa</li>
          </ul>

          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
            <h4 class="font-bold text-purple-800 mb-2">💼 Export Incentives</h4>
            <p class="text-purple-700 text-sm">Indian exporters can benefit from various government schemes including MEIS, RoSCTL, and Export Promotion Capital Goods scheme for duty-free imports.</p>
          </div>
        </div>
      `
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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Customs Clearance Made Easy: A Complete Guide</h2>
          
          <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
            <p class="text-blue-800 font-semibold">Master the customs clearance process with our comprehensive guide to documentation, procedures, and best practices.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Essential Documentation Checklist</h3>
          <div class="bg-white border rounded-lg p-4 mb-6">
            <ul class="space-y-3">
              <li class="flex items-center justify-between">
                <span class="font-medium">Commercial Invoice</span>
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Mandatory</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="font-medium">Packing List</span>
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Mandatory</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="font-medium">Bill of Lading/Air Waybill</span>
                <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Mandatory</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="font-medium">Certificate of Origin</span>
                <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Conditional</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="font-medium">Import/Export License</span>
                <span class="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Product Specific</span>
              </li>
              <li class="flex items-center justify-between">
                <span class="font-medium">Insurance Certificate</span>
                <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Recommended</span>
              </li>
            </ul>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Step-by-Step Clearance Process</h3>
          <div class="space-y-4 mb-6">
            <div class="flex items-start gap-4">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">1</span>
              <div>
                <h4 class="font-semibold">Document Preparation</h4>
                <p class="text-gray-600 text-sm">Gather all required documents 7 days before shipment arrival</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">2</span>
              <div>
                <h4 class="font-semibold">Customs Declaration</h4>
                <p class="text-gray-600 text-sm">File import/export declaration with customs authorities</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">3</span>
              <div>
                <h4 class="font-semibold">Duty Assessment</h4>
                <p class="text-gray-600 text-sm">Pay applicable customs duties and taxes</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mt-1">4</span>
              <div>
                <h4 class="font-semibold">Physical Examination</h4>
                <p class="text-gray-600 text-sm">Customs may inspect shipment (random or targeted)</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <span class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mt-1">5</span>
              <div>
                <h4 class="font-semibold">Clearance Approval</h4>
                <p class="text-gray-600 text-sm">Receive customs release and proceed with delivery</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-2">✅ Best Practices</h4>
              <ul class="text-sm text-green-800 space-y-2">
                <li>• Classify HS codes accurately</li>
                <li>• Maintain document digital copies</li>
                <li>• Work with experienced brokers</li>
                <li>• Understand trade agreements</li>
                <li>• Plan for duty payments</li>
              </ul>
            </div>
            
            <div class="bg-red-50 p-4 rounded-lg">
              <h4 class="font-semibold text-red-900 mb-2">❌ Common Mistakes</h4>
              <ul class="text-sm text-red-800 space-y-2">
                <li>• Incorrect product valuation</li>
                <li>• Missing certificates</li>
                <li>• Wrong HS code classification</li>
                <li>• Incomplete documentation</li>
                <li>• Last-minute preparation</li>
              </ul>
            </div>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 class="font-bold text-yellow-800 mb-2">⏱️ Time Savings Tip</h4>
            <p class="text-yellow-700 text-sm">Pre-clearance procedures can reduce customs processing time by up to 70%. Submit documents electronically before shipment arrival.</p>
          </div>
        </div>
      `
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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">The Future of Global Supply Chains</h2>
          
          <div class="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
            <p class="text-purple-800 font-semibold">Digital transformation, sustainability, and resilience are reshaping global supply chains. Discover what's next.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Key Trends Reshaping Supply Chains</h3>
          <ul class="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Digital Twins:</strong> Virtual replicas of physical supply chains for simulation and optimization</li>
            <li><strong>AI-Powered Forecasting:</strong> Machine learning algorithms predicting demand with 95%+ accuracy</li>
            <li><strong>Blockchain Transparency:</strong> Immutable records for provenance and compliance tracking</li>
            <li><strong>Circular Economy:</strong> Sustainable, closed-loop supply chains reducing waste</li>
            <li><strong>Nearshoring & Reshoring:</strong> Strategic relocation to mitigate geopolitical risks</li>
            <li><strong>Autonomous Logistics:</strong> Self-driving vehicles and drones for last-mile delivery</li>
          </ul>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-900 mb-2">🤖 Technology Adoption</h4>
              <ul class="text-sm text-blue-800 space-y-2">
                <li>• IoT sensors: Real-time tracking</li>
                <li>• Robotics: Warehouse automation</li>
                <li>• 5G connectivity: Faster data transfer</li>
                <li>• Cloud platforms: Scalable solutions</li>
                <li>• Predictive analytics: Risk management</li>
              </ul>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-2">🌱 Sustainability Focus</h4>
              <ul class="text-sm text-green-800 space-y-2">
                <li>• Carbon-neutral logistics</li>
                <li>• Electric vehicle fleets</li>
                <li>• Sustainable packaging</li>
                <li>• Green warehousing</li>
                <li>• Circular supply chains</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Future Skills Requirements</h3>
          <div class="flex flex-wrap gap-2 mb-6">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data Analytics</span>
            <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Sustainability Management</span>
            <span class="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">AI & ML Expertise</span>
            <span class="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">Digital Transformation</span>
            <span class="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Risk Management</span>
            <span class="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Blockchain Technology</span>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">2025 Supply Chain Predictions</h3>
          <div class="bg-white border rounded-lg p-4 mb-6">
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-green-500 mt-1">✓</span>
                <span>50% of large companies will use AI for supply chain decisions</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 mt-1">✓</span>
                <span>30% reduction in carbon footprint through optimized routing</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 mt-1">✓</span>
                <span>Blockchain will track 25% of global trade transactions</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-500 mt-1">✓</span>
                <span>80% of new warehouses will be fully automated</span>
              </li>
            </ul>
          </div>

          <div class="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 class="font-bold text-orange-800 mb-2">🚀 Actionable Insight</h4>
            <p class="text-orange-700 text-sm">Start small with digital transformation. Implement IoT tracking for high-value shipments first, then scale based on ROI and learnings.</p>
          </div>
        </div>
      `
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
      detailedContent: `
        <div class="space-y-6">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Export-Import Documentation: What You Need to Know</h2>
          
          <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
            <p class="text-green-800 font-semibold">Proper documentation is the backbone of successful international trade. Master these essential documents for smooth transactions.</p>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Core Documentation Requirements</h3>
          <div class="space-y-4 mb-6">
            <div class="border rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">📄 Commercial Invoice</h4>
              <p class="text-gray-700 text-sm mb-2">The primary document for customs valuation containing transaction details.</p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Seller and buyer information</li>
                <li>• Product description and quantity</li>
                <li>• Unit price and total value</li>
                <li>• Trade terms (Incoterms)</li>
                <li>• Payment terms</li>
              </ul>
            </div>

            <div class="border rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">📦 Packing List</h4>
              <p class="text-gray-700 text-sm mb-2">Detailed information about the shipment contents and packaging.</p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Item-wise packing details</li>
                <li>• Gross and net weights</li>
                <li>• Package dimensions</li>
                <li>• Marks and numbers</li>
                <li>• Container details</li>
              </ul>
            </div>

            <div class="border rounded-lg p-4">
              <h4 class="font-bold text-blue-900 mb-2">🚢 Bill of Lading</h4>
              <p class="text-gray-700 text-sm mb-2">Contract between shipper and carrier, serving as receipt and title document.</p>
              <ul class="text-xs text-gray-600 space-y-1">
                <li>• Shipper and consignee details</li>
                <li>• Vessel and voyage information</li>
                <li>• Port of loading and discharge</li>
                <li>• Freight details</li>
                <li>• Original copies requirement</li>
              </ul>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Specialized Documents by Requirement</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-yellow-50 p-3 rounded-lg">
              <h4 class="font-semibold text-yellow-900 mb-1">Certificate of Origin</h4>
              <p class="text-yellow-800 text-xs">Required for preferential tariff treatment under trade agreements</p>
            </div>
            <div class="bg-blue-50 p-3 rounded-lg">
              <h4 class="font-semibold text-blue-900 mb-1">Insurance Certificate</h4>
              <p class="text-blue-800 text-xs">Proof of cargo insurance coverage during transit</p>
            </div>
            <div class="bg-green-50 p-3 rounded-lg">
              <h4 class="font-semibold text-green-900 mb-1">Phytosanitary Certificate</h4>
              <p class="text-green-800 text-xs">For agricultural products and wood packaging</p>
            </div>
            <div class="bg-red-50 p-3 rounded-lg">
              <h4 class="font-semibold text-red-900 mb-1">Fumigation Certificate</h4>
              <p class="text-red-800 text-xs">For wooden packaging materials treatment</p>
            </div>
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-3">Document Preparation Timeline</h3>
          <div class="bg-gray-50 p-4 rounded-lg mb-6">
            <div class="flex justify-between items-center text-sm">
              <div class="text-center">
                <div class="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-1"></div>
                <span class="font-medium">7 Days Before</span>
                <p class="text-xs text-gray-600">Start document preparation</p>
              </div>
              <div class="text-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mx-auto mb-1"></div>
                <span class="font-medium">3 Days Before</span>
                <p class="text-xs text-gray-600">Final review and signing</p>
              </div>
              <div class="text-center">
                <div class="w-3 h-3 bg-purple-500 rounded-full mx-auto mb-1"></div>
                <span class="font-medium">1 Day Before</span>
                <p class="text-xs text-gray-600">Submit to customs/broker</p>
              </div>
            </div>
          </div>

          <div class="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 class="font-bold text-purple-800 mb-2">💡 Digital Documentation Tip</h4>
            <p class="text-purple-700 text-sm">Use electronic document management systems to reduce errors by 75% and processing time by 60%. Maintain digital backups of all trade documents.</p>
          </div>
        </div>
      `
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

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
                className="border-2 border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm group overflow-hidden cursor-pointer hover:-translate-y-2"
                onClick={() => handleReadMore(post)}
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
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(post);
                    }}
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

      {/* Blog Post Modal */}
      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              {/* Header */}
              <div className="sticky top-0 bg-white border-b z-20">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm">
                      {selectedPost.category}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {selectedPost.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {selectedPost.readTime}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6"> 
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedPost.detailedContent }}
                />
                
                
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;