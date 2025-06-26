import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Calendar, Users, TrendingUp } from 'lucide-react';
import { ProgressBar } from '../ui/ProgressBar';

export const CampaignCard = ({ campaign, onToggleLike }) => {
  const handleLikeClick = (e) => {
    e.preventDefault();
    onToggleLike?.(campaign.id);
  };

  const daysLeft = Math.max(
    0,
    Math.ceil(
      (new Date(campaign.endDate).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );
  const percentage = (campaign.currentAmount / campaign.goalAmount) * 100;

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800';
      case 'funded':
        return 'bg-purple-100 text-purple-800';
      case 'expired':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Link to={`/campaign/${campaign.id}`} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={campaign.images[0]}
            alt={campaign.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Like Button */}
          <button
            onClick={handleLikeClick}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors shadow-sm"
          >
            <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>

          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(
                campaign.status
              )}`}
            >
              {campaign.status === 'active'
                ? `${daysLeft} days left`
                : campaign.status}
            </span>
          </div>

          {/* Featured Badge */}
          {campaign.featured && (
            <div className="absolute bottom-3 left-3">
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-medium rounded-full flex items-center space-x-1">
                <TrendingUp className="h-3 w-3" />
                <span>Featured</span>
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-purple-600 font-medium">
              {campaign.category}
            </span>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Users className="h-4 w-4" />
              <span>{campaign.backers}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors text-lg">
            {campaign.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
            {campaign.shortDescription}
          </p>

          {/* Progress */}
          <div className="mb-4">
            <ProgressBar
              current={campaign.currentAmount}
              goal={campaign.goalAmount}
              color="purple"
            />
          </div>

          {/* Funding Info */}
          <div className="flex items-center justify-between text-sm mb-4">
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${campaign.currentAmount.toLocaleString()}
              </span>
              <span className="text-gray-500 ml-1">
                of ${campaign.goalAmount.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              <div className="font-semibold text-purple-600">
                {percentage.toFixed(0)}%
              </div>
              <div className="text-gray-500">funded</div>
            </div>
          </div>

          {/* Creator and Location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={campaign.creator.avatar}
                alt={campaign.creator.name}
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="text-sm text-gray-600">
                {campaign.creator.name}
              </span>
              {campaign.creator.verified && (
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                  ✓
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <MapPin className="h-4 w-4" />
              <span>{campaign.location}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};