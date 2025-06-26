import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, MessageCircle, MapPin, Eye, Star, Calendar, ShoppingCart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { mockProducts } from '../data/mockData';
import { ProductGrid } from '../components/products/ProductGrid';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const product = mockProducts.find(p => p.id === id);
  const relatedProducts = mockProducts.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'new': return 'bg-green-100 text-green-800';
      case 'like-new': return 'bg-blue-100 text-blue-800';
      case 'good': return 'bg-yellow-100 text-yellow-800';
      case 'fair': return 'bg-orange-100 text-orange-800';
      case 'poor': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    navigator.share?.({
      title: product.title,
      text: product.description,
      url: window.location.href
    });
  };

  const handleMessage = () => {
    console.log('Open message dialog');
  };

  const handleAddToCart = () => {
    console.log('Add to cart');
  };

  const handleBuyNow = () => {
    console.log('Buy now');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <span>/</span>
          <Link to={`/category/${product.category}`} className="hover:text-blue-600">{product.category}</Link>
          <span>/</span>
          <span className="text-gray-900">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border border-gray-200">
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-blue-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
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

              <div className="flex items-center space-x-4 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getConditionColor(product.condition)}`}>
                  {product.condition}
                </span>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Eye className="h-4 w-4" />
                  <span>{product.views} views</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(product.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              <p className="text-4xl font-bold text-gray-900 mb-6">
                ${product.price.toLocaleString()}
              </p>

              <div className="flex items-center space-x-1 text-sm text-gray-600 mb-6">
                <MapPin className="h-4 w-4" />
                <span>{product.location}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button onClick={handleBuyNow} size="lg" className="flex-1">
                  Buy Now
                </Button>
                <Button onClick={handleAddToCart} variant="outline" size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
              
              <Button onClick={handleMessage} variant="outline" className="w-full">
                <MessageCircle className="h-5 w-5 mr-2" />
                Message Seller
              </Button>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Seller Information</h3>
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={product.seller.avatar}
                  alt={product.seller.name}
                  className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{product.seller.name}</h4>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.seller.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.seller.totalReviews} reviews)
                    </span>
                    {product.seller.verified && (
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">
                    Member since {new Date(product.seller.joinDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Link to={`/seller/${product.seller.id}`}>
                <Button variant="outline" className="w-full">
                  View Seller Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {product.description}
          </p>
          
          {product.tags.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Items</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
};