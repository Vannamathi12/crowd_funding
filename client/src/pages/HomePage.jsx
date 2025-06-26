import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, TrendingUp, Shield, Users, Zap, Star, Play } from 'lucide-react';
import { CampaignGrid } from '../components/campaigns/CampaignGrid';
import { CategoryGrid } from '../components/categories/CategoryGrid';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { mockCampaigns, categories } from '../data/mockData';

// Removed TypeScript type annotation ": React.FC"
export const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredCampaigns] = useState(mockCampaigns.filter(c => c.featured));
  const [trendingCampaigns] = useState(mockCampaigns.slice(0, 6));

  // Removed type annotation for e: React.FormEvent
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  // Removed type annotation for campaignId: string
  const handleToggleLike = (campaignId) => {
    console.log('Toggle like for campaign:', campaignId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Turn Your Ideas Into
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Reality
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the world's leading crowdfunding platform where innovative creators meet passionate backers
            </p>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search for campaigns, creators, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/20"
                />
                <Button
                  type="submit"
                  className="absolute right-2 top-2 h-10 bg-purple-600 hover:bg-purple-700"
                >
                  Search
                </Button>
              </div>
            </form>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/start-campaign">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
                  Start a Campaign
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore Campaigns
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">$50M+</div>
                <div className="text-purple-200">Total Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100K+</div>
                <div className="text-purple-200">Happy Backers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">5K+</div>
                <div className="text-purple-200">Successful Campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      {featuredCampaigns.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Featured Campaigns
                </h2>
                <p className="text-gray-600">
                  Handpicked projects that are making waves
                </p>
              </div>
              <Link to="/explore?featured=true">
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>View All</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <CampaignGrid
              campaigns={featuredCampaigns}
              onToggleLike={handleToggleLike}
            />
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing projects across all categories
            </p>
          </div>
          
          <CategoryGrid categories={categories} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose FundFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to launch and fund your next big idea
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Funding</h3>
              <p className="text-gray-600">
                All transactions are protected with bank-level security and fraud protection
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Community</h3>
              <p className="text-gray-600">
                Connect with backers and creators from around the world who share your passion
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Launch</h3>
              <p className="text-gray-600">
                Launch your campaign in minutes with our intuitive campaign builder
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">
                Get guidance from our team of crowdfunding experts throughout your journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Campaigns */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Trending Now
              </h2>
              <p className="text-gray-600">
                Popular campaigns gaining momentum
              </p>
            </div>
            <Link to="/explore?sort=trending">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>View All</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <CampaignGrid
            campaigns={trendingCampaigns}
            onToggleLike={handleToggleLike}
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real creators, real results, real impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "FundFlow helped us raise $2.3M for our smart home device. The platform's tools and community support were incredible."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
                  alt="Creator"
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">John Smith</div>
                  <div className="text-sm text-gray-600">Tech Entrepreneur</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Our eco-friendly product campaign exceeded our goal by 300%. The community here truly cares about innovation."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
                  alt="Creator"
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Sarah Green</div>
                  <div className="text-sm text-gray-600">Sustainability Advocate</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "From concept to market in 8 months. FundFlow's platform made it possible to connect with the right backers."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1"
                  alt="Creator"
                  className="h-10 w-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900">Alex Rivera</div>
                  <div className="text-sm text-gray-600">Game Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Bring Your Idea to Life?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who have successfully funded their projects on FundFlow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/start-campaign">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Start Your Campaign
              </Button>
            </Link>
            <Link to="/explore">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};