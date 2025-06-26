import React, { useState, useMemo } from 'react';
import { CampaignGrid } from '../components/campaigns/CampaignGrid';
import { mockCampaigns } from '../data/mockData';

export const ExplorePage = () => {
  const [filters, setFilters] = useState({
    category: '',
    status: '',
    sortBy: 'trending',
    featured: false
  });

  const filteredCampaigns = useMemo(() => {
    let filtered = [...mockCampaigns];

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(campaign => 
        campaign.category === filters.category
      );
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(campaign => 
        campaign.status === filters.status
      );
    }

    // Apply featured filter
    if (filters.featured) {
      filtered = filtered.filter(campaign => campaign.featured);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'ending-soon':
        filtered.sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
        break;
      case 'most-funded':
        filtered.sort((a, b) => b.currentAmount - a.currentAmount);
        break;
      case 'trending':
      default:
        filtered.sort((a, b) => b.backers - a.backers);
        break;
    }

    return filtered;
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleToggleLike = (campaignId) => {
    console.log('Toggle like for campaign:', campaignId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Explore Campaigns
          </h1>
          <p className="text-gray-600">
            Discover {filteredCampaigns.length} amazing projects from creators around the world
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={filters.category}
                onChange={(e) => handleFiltersChange({ category: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Categories</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Games">Games</option>
                <option value="Film & Video">Film & Video</option>
                <option value="Music">Music</option>
                <option value="Publishing">Publishing</option>
                <option value="Food & Craft">Food & Craft</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => handleFiltersChange({ status: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="funded">Funded</option>
                <option value="expired">Expired</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFiltersChange({ sortBy: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="trending">Trending</option>
                <option value="newest">Newest</option>
                <option value="ending-soon">Ending Soon</option>
                <option value="most-funded">Most Funded</option>
              </select>
            </div>

            <div className="flex items-end">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.featured}
                  onChange={(e) => handleFiltersChange({ featured: e.target.checked })}
                  className="rounded border-gray-300 text-purple-600 focus:ring-purple-500 mr-2"
                />
                <span className="text-sm font-medium text-gray-700">Featured Only</span>
              </label>
            </div>
          </div>
        </div>

        {/* Campaigns Grid */}
        <CampaignGrid
          campaigns={filteredCampaigns}
          onToggleLike={handleToggleLike}
        />
      </div>
    </div>
  );
};