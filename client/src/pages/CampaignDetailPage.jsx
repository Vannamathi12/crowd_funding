import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Calendar, MapPin, Users, TrendingUp, Play, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProgressBar } from '../components/ui/ProgressBar';
import { mockCampaigns } from '../data/mockData';
import { CampaignGrid } from '../components/campaigns/CampaignGrid';

export const CampaignDetailPage = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const campaign = mockCampaigns.find(c => c.id === id);
  const relatedCampaigns = mockCampaigns.filter(c => c.id !== id && c.category === campaign?.category).slice(0, 3);

  if (!campaign) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Campaign Not Found</h2>
          <p className="text-gray-600 mb-6">The campaign you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const daysLeft = Math.max(0, Math.ceil((new Date(campaign.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)));
  const percentage = (campaign.currentAmount / campaign.goalAmount) * 100;

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    navigator.share?.({
      title: campaign.title,
      text: campaign.shortDescription,
      url: window.location.href
    });
  };

  const handleBackCampaign = (rewardId) => {
    console.log('Back campaign with reward:', rewardId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-purple-600">Home</Link>
          <span>/</span>
          <Link to="/explore" className="hover:text-purple-600">Explore</Link>
          <span>/</span>
          <Link to={`/category/${campaign.category}`} className="hover:text-purple-600">{campaign.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{campaign.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Media Gallery */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="aspect-video bg-gray-900 relative">
                {campaign.video ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={campaign.images[selectedImageIndex]}
                      alt={campaign.title}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <Play className="h-6 w-6 text-gray-900 ml-1" />
                      </div>
                    </button>
                  </div>
                ) : (
                  <img
                    src={campaign.images[selectedImageIndex]}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {campaign.images.length > 1 && (
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2">
                    {campaign.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-video rounded-lg overflow-hidden border-2 ${
                          selectedImageIndex === index ? 'border-purple-600' : 'border-gray-200'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${campaign.title} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Campaign Info */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-purple-600 font-medium">{campaign.category}</span>
                  <h1 className="text-3xl font-bold text-gray-900 mt-1">{campaign.title}</h1>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleToggleLike}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Heart className={`h-6 w-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                  <button
                    onClick={handleShare}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Share2 className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {campaign.shortDescription}
              </p>

              {/* Creator Info */}
              <div className="flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <img
                  src={campaign.creator.avatar}
                  alt={campaign.creator.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{campaign.creator.name}</h4>
                  <p className="text-sm text-gray-600">{campaign.creator.bio}</p>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-xs text-gray-500">
                      {campaign.creator.totalCreated} campaigns created
                    </span>
                    <span className="text-xs text-gray-500">
                      {campaign.creator.totalBacked} campaigns backed
                    </span>
                    {campaign.creator.verified && (
                      <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>

              {/* Campaign Details */}
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{campaign.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Created {new Date(campaign.createdAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4" />
                  <span>{campaign.backers} backers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>{campaign.status}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Campaign</h2>
              <div className="prose max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {campaign.description}
              </div>
              
              {campaign.tags.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {campaign.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Updates */}
            {campaign.updates.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Updates</h2>
                <div className="space-y-4">
                  {campaign.updates.map((update) => (
                    <div key={update.id} className="border-l-4 border-purple-600 pl-4">
                      <h3 className="font-semibold text-gray-900">{update.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {new Date(update.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-gray-700">{update.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQs */}
            {campaign.faqs.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {campaign.faqs.map((faq) => (
                    <div key={faq.id}>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Funding Progress */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ${campaign.currentAmount.toLocaleString()}
                </div>
                <div className="text-gray-600">
                  pledged of ${campaign.goalAmount.toLocaleString()} goal
                </div>
              </div>

              <ProgressBar
                current={campaign.currentAmount}
                goal={campaign.goalAmount}
                className="mb-4"
                color="purple"
              />

              <div className="grid grid-cols-2 gap-4 text-center mb-6">
                <div>
                  <div className="text-2xl font-bold text-gray-900">{campaign.backers}</div>
                  <div className="text-sm text-gray-600">backers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{daysLeft}</div>
                  <div className="text-sm text-gray-600">days to go</div>
                </div>
              </div>

              <Button
                onClick={() => handleBackCampaign()}
                className="w-full mb-4"
                size="lg"
              >
                Back This Campaign
              </Button>

              <div className="text-center text-sm text-gray-600">
                All or nothing. This project will only be funded if it reaches its goal by{' '}
                {new Date(campaign.endDate).toLocaleDateString()}.
              </div>
            </div>

            {/* Rewards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Support & Rewards</h3>
              <div className="space-y-4">
                {campaign.rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedReward === reward.id
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                    onClick={() => setSelectedReward(reward.id)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-lg font-bold text-gray-900">
                        ${reward.amount}
                      </div>
                      {reward.limited && reward.remaining !== undefined && (
                        <div className="text-sm text-orange-600">
                          {reward.remaining} left
                        </div>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{reward.title}</h4>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <div className="text-sm text-gray-500 mb-2">
                      Estimated delivery: {reward.estimatedDelivery}
                    </div>
                    <div className="text-sm text-gray-500">
                      {reward.backers} backers
                    </div>
                    {reward.items.length > 0 && (
                      <div className="mt-3">
                        <div className="text-sm font-medium text-gray-700 mb-1">Includes:</div>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {reward.items.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {selectedReward && (
                <Button
                  onClick={() => handleBackCampaign(selectedReward)}
                  className="w-full mt-4"
                  variant="success"
                >
                  Continue with Selected Reward
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Related Campaigns */}
        {relatedCampaigns.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More in {campaign.category}</h2>
            <CampaignGrid campaigns={relatedCampaigns} />
          </div>
        )}
      </div>
    </div>
  );
};