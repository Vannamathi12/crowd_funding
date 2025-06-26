export const mockUser = {
  id: '1',
  email: 'john@example.com',
  name: 'John Doe',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
  bio: 'Passionate entrepreneur and tech innovator with 10+ years of experience in product development.',
  location: 'San Francisco, CA',
  joinDate: '2023-01-15',
  verified: true,
  role: 'both',
  totalBacked: 25,
  totalCreated: 3,
  socialLinks: {
    website: 'https://johndoe.com',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe'
  }
};

export const categories = [
  { id: '1', name: 'Technology', icon: 'Cpu', count: 1234, description: 'Innovative tech products and software' },
  { id: '2', name: 'Design', icon: 'Palette', count: 856, description: 'Creative design projects and art' },
  { id: '3', name: 'Games', icon: 'Gamepad2', count: 643, description: 'Video games and board games' },
  { id: '4', name: 'Film & Video', icon: 'Video', count: 432, description: 'Movies, documentaries, and video content' },
  { id: '5', name: 'Music', icon: 'Music', count: 321, description: 'Albums, concerts, and music projects' },
  { id: '6', name: 'Publishing', icon: 'Book', count: 234, description: 'Books, magazines, and publications' },
  { id: '7', name: 'Food & Craft', icon: 'ChefHat', count: 187, description: 'Food products and handmade crafts' },
  { id: '8', name: 'Fashion', icon: 'Shirt', count: 156, description: 'Clothing, accessories, and fashion' }
];

export const mockCampaigns = [
  {
    id: '1',
    title: 'Revolutionary Smart Home Hub',
    description: `Introducing the next generation of smart home technology that seamlessly integrates all your devices into one intelligent ecosystem.

Our Smart Home Hub uses advanced AI to learn your daily routines and automatically optimize your home environment for comfort, security, and energy efficiency. With support for over 10,000 devices from 500+ brands, it's the only hub you'll ever need.

Key Features:
• AI-powered automation that learns your preferences
• Voice control with natural language processing
• Advanced security with facial recognition
• Energy monitoring and optimization
• Works with all major smart home brands
• Easy setup in under 5 minutes

The hub connects to your existing WiFi network and immediately begins discovering compatible devices. Our proprietary AI engine analyzes your usage patterns and creates personalized automation rules that make your home truly intelligent.

We've spent 3 years developing this technology and have already secured partnerships with major retailers. Your support will help us bring this revolutionary product to market and transform how people interact with their homes.`,
    shortDescription: 'AI-powered smart home hub that learns your routines and automates your entire home ecosystem.',
    goalAmount: 500000,
    currentAmount: 387500,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    video: 'https://example.com/video1.mp4',
    category: 'Technology',
    tags: ['smart home', 'AI', 'IoT', 'automation'],
    creator: mockUser,
    createdAt: '2024-01-15T10:30:00Z',
    endDate: '2024-03-15T23:59:59Z',
    status: 'active',
    backers: 1547,
    featured: true,
    rewards: [
      {
        id: '1',
        title: 'Early Bird Special',
        description: 'Get the Smart Home Hub at 40% off retail price',
        amount: 149,
        estimatedDelivery: 'June 2024',
        backers: 234,
        limited: true,
        quantity: 500,
        remaining: 266,
        items: ['Smart Home Hub', 'Quick Start Guide', 'Premium Support']
      },
      {
        id: '2',
        title: 'Standard Package',
        description: 'Smart Home Hub with all essential accessories',
        amount: 199,
        estimatedDelivery: 'July 2024',
        backers: 567,
        items: ['Smart Home Hub', 'Wall Mount', 'Ethernet Cable', 'Quick Start Guide']
      },
      {
        id: '3',
        title: 'Pro Package',
        description: 'Complete smart home starter kit',
        amount: 349,
        estimatedDelivery: 'July 2024',
        backers: 189,
        items: ['Smart Home Hub', 'Smart Sensors (4x)', 'Smart Switches (2x)', 'Wall Mount', 'Professional Installation Guide']
      }
    ],
    updates: [
      {
        id: '1',
        title: 'Prototype Testing Complete!',
        content: 'We\'ve successfully completed beta testing with 100 households. The feedback has been incredible!',
        createdAt: '2024-01-20T14:30:00Z',
        images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400']
      }
    ],
    faqs: [
      {
        id: '1',
        question: 'What devices are compatible?',
        answer: 'Our hub works with over 10,000 devices from 500+ brands including Philips Hue, Nest, Ring, and many more.'
      },
      {
        id: '2',
        question: 'How difficult is the setup?',
        answer: 'Setup takes less than 5 minutes. Simply plug in the hub, download our app, and follow the guided setup process.'
      }
    ],
    risks: 'As with any hardware project, there are potential delays in manufacturing and shipping. We have contingency plans in place and will keep backers updated on any changes.',
    location: 'San Francisco, CA'
  },
  {
    id: '2',
    title: 'Eco-Friendly Water Bottle',
    description: `Join the revolution against single-use plastics with our innovative eco-friendly water bottle made from 100% recycled ocean plastic.

Every bottle removes the equivalent of 25 plastic bottles from our oceans while providing you with the perfect hydration companion. Our patented filtration system ensures clean, great-tasting water wherever you go.

Features:
• Made from 100% recycled ocean plastic
• Built-in advanced filtration system
• Keeps drinks cold for 24 hours, hot for 12 hours
• Leak-proof design with one-handed operation
• Dishwasher safe and BPA-free
• Available in 6 beautiful colors

For every bottle sold, we donate $1 to ocean cleanup initiatives. Together, we can make a real difference for our planet while staying perfectly hydrated.`,
    shortDescription: 'Revolutionary water bottle made from recycled ocean plastic with built-in filtration system.',
    goalAmount: 75000,
    currentAmount: 92300,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1458671/pexels-photo-1458671.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Design',
    tags: ['eco-friendly', 'sustainability', 'water bottle', 'ocean plastic'],
    creator: {
      id: '2',
      email: 'sarah@example.com',
      name: 'Sarah Green',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      bio: 'Environmental activist and product designer passionate about sustainable solutions.',
      location: 'Portland, OR',
      joinDate: '2023-03-20',
      verified: true,
      role: 'creator',
      totalBacked: 12,
      totalCreated: 5
    },
    createdAt: '2024-01-10T15:45:00Z',
    endDate: '2024-02-28T23:59:59Z',
    status: 'funded',
    backers: 923,
    featured: true,
    rewards: [
      {
        id: '4',
        title: 'Single Bottle',
        description: 'One eco-friendly water bottle in your choice of color',
        amount: 35,
        estimatedDelivery: 'April 2024',
        backers: 456,
        items: ['Eco Water Bottle', 'Cleaning Kit']
      },
      {
        id: '5',
        title: 'Family Pack',
        description: 'Four bottles in different colors for the whole family',
        amount: 120,
        estimatedDelivery: 'April 2024',
        backers: 234,
        items: ['4x Eco Water Bottles', 'Cleaning Kit', 'Carrying Case']
      }
    ],
    updates: [],
    faqs: [
      {
        id: '3',
        question: 'How long does the filter last?',
        answer: 'Each filter lasts for approximately 300 refills or 3 months of regular use.'
      }
    ],
    risks: 'Manufacturing delays could occur due to sourcing recycled materials. We have backup suppliers to minimize any potential delays.',
    location: 'Portland, OR'
  },
  {
    id: '3',
    title: 'Indie Game: Mystic Realms',
    description: `Embark on an epic adventure in Mystic Realms, a hand-crafted indie RPG that combines classic gameplay with modern storytelling.

Set in a beautifully illustrated fantasy world, you'll explore ancient dungeons, battle mythical creatures, and uncover the secrets of a forgotten civilization. With over 40 hours of gameplay, branching storylines, and multiple endings, every playthrough offers a unique experience.

Game Features:
• Hand-drawn art style with over 200 unique illustrations
• Original soundtrack composed by award-winning musicians
• Deep character customization and skill trees
• Multiple story paths and endings based on your choices
• Local co-op mode for up to 4 players
• Available on PC, Mac, and Nintendo Switch

We're an independent studio of 5 passionate developers who have been working on this project for 2 years. Your support will help us complete the final stages of development and bring this magical world to life.`,
    shortDescription: 'Hand-crafted indie RPG with beautiful art, original music, and epic storytelling.',
    goalAmount: 150000,
    currentAmount: 89750,
    currency: 'USD',
    images: [
      'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1293261/pexels-photo-1293261.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'Games',
    tags: ['indie game', 'RPG', 'fantasy', 'co-op'],
    creator: {
      id: '3',
      email: 'alex@example.com',
      name: 'Alex Rivera',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
      bio: 'Game developer and storyteller with a passion for creating immersive worlds.',
      location: 'Austin, TX',
      joinDate: '2023-07-10',
      verified: false,
      role: 'creator',
      totalBacked: 8,
      totalCreated: 2
    },
    createdAt: '2024-01-05T09:20:00Z',
    endDate: '2024-03-05T23:59:59Z',
    status: 'active',
    backers: 567,
    featured: false,
    rewards: [
      {
        id: '6',
        title: 'Digital Copy',
        description: 'Digital download of Mystic Realms for PC/Mac',
        amount: 25,
        estimatedDelivery: 'August 2024',
        backers: 234,
        items: ['Digital Game Download', 'Digital Soundtrack']
      },
      {
        id: '7',
        title: 'Collector\'s Edition',
        description: 'Physical collector\'s edition with exclusive content',
        amount: 75,
        estimatedDelivery: 'September 2024',
        backers: 89,
        limited: true,
        quantity: 1000,
        remaining: 911,
        items: ['Physical Game Copy', 'Art Book', 'Soundtrack CD', 'Exclusive In-Game Items']
      }
    ],
    updates: [],
    faqs: [
      {
        id: '4',
        question: 'What platforms will the game be available on?',
        answer: 'Mystic Realms will be available on PC, Mac, and Nintendo Switch at launch.'
      }
    ],
    risks: 'Game development can face unexpected challenges. We have a detailed timeline and experienced team to minimize risks.',
    location: 'Austin, TX'
  }
];

export const mockInvestments = [
  {
    id: '1',
    campaignId: '1',
    userId: '1',
    amount: 199,
    rewardId: '2',
    createdAt: '2024-01-16T10:30:00Z',
    status: 'completed',
    anonymous: false
  },
  {
    id: '2',
    campaignId: '2',
    userId: '1',
    amount: 35,
    rewardId: '4',
    createdAt: '2024-01-12T14:15:00Z',
    status: 'completed',
    anonymous: false
  }
];