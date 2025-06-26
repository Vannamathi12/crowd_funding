import React, { useState, useMemo } from 'react';
import { ProductGrid } from '../components/products/ProductGrid';
import { ProductFilters } from '../components/filters/ProductFilters';
import { mockProducts } from '../data/mockData';

export const ProductsPage = () => {
  const [filters, setFilters] = useState({
    priceRange: [0, 0],
    condition: [],
    category: '',
    location: '',
    sortBy: 'newest'
  });

  const filteredProducts = useMemo(() => {
    let filtered = [...mockProducts];

    // Apply price range filter
    if (filters.priceRange[0] > 0 || filters.priceRange[1] > 0) {
      filtered = filtered.filter(product => {
        const price = product.price;
        const min = filters.priceRange[0] || 0;
        const max = filters.priceRange[1] || Infinity;
        return price >= min && price <= max;
      });
    }

    // Apply condition filter
    if (filters.condition.length > 0) {
      filtered = filtered.filter(product => 
        filters.condition.includes(product.condition)
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(product => 
        product.category === filters.category
      );
    }

    // Apply location filter
    if (filters.location) {
      filtered = filtered.filter(product => 
        product.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'most-viewed':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'newest':
      default:
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }

    return filtered;
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: [0, 0],
      condition: [],
      category: '',
      location: '',
      sortBy: 'newest'
    });
  };

  const handleToggleLike = (productId) => {
    console.log('Toggle like for product:', productId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            All Products
          </h1>
          <p className="text-gray-600">
            Discover amazing deals on {filteredProducts.length.toLocaleString()} items
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <ProductFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <ProductGrid
              products={filteredProducts}
              onToggleLike={handleToggleLike}
            />
          </div>
        </div>
      </div>
    </div>
  );
};