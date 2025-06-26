import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';

export const CategoryGrid = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-6">
      {categories.map((category) => {
        const IconComponent = LucideIcons[category.icon];
        
        return (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-colors">
              {IconComponent && <IconComponent className="h-8 w-8 text-purple-600" />}
            </div>
            <h3 className="text-sm font-semibold text-gray-900 text-center mb-2 group-hover:text-purple-600 transition-colors">
              {category.name}
            </h3>
            <p className="text-xs text-gray-500">
              {category.count.toLocaleString()} campaigns
            </p>
          </Link>
        );
      })}
    </div>
  );
};