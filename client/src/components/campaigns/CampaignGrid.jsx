import React from 'react';
import { CampaignCard } from './CampaignCard';

export const CampaignGrid = ({ campaigns, onToggleLike }) => {
  if (campaigns.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No campaigns found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          onToggleLike={onToggleLike}
        />
      ))}
    </div>
  );
};