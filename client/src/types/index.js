// Converted from TypeScript interfaces to JSDoc typedefs for JS usage

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {string} [avatar]
 * @property {string} [bio]
 * @property {string} location
 * @property {string} joinDate
 * @property {boolean} verified
 * @property {'creator'|'investor'|'both'} role
 * @property {number} totalBacked
 * @property {number} totalCreated
 * @property {{website?: string, twitter?: string, linkedin?: string}} [socialLinks]
 */

/**
 * @typedef {Object} Campaign
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} shortDescription
 * @property {number} goalAmount
 * @property {number} currentAmount
 * @property {string} currency
 * @property {string[]} images
 * @property {string} [video]
 * @property {string} category
 * @property {string[]} tags
 * @property {User} creator
 * @property {string} createdAt
 * @property {string} endDate
 * @property {'draft'|'active'|'funded'|'expired'|'cancelled'} status
 * @property {number} backers
 * @property {boolean} featured
 * @property {Reward[]} rewards
 * @property {CampaignUpdate[]} updates
 * @property {FAQ[]} faqs
 * @property {string} risks
 * @property {string} location
 */

/**
 * @typedef {Object} Reward
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {number} amount
 * @property {string} estimatedDelivery
 * @property {number} backers
 * @property {boolean} [limited]
 * @property {number} [quantity]
 * @property {number} [remaining]
 * @property {string[]} items
 */

/**
 * @typedef {Object} CampaignUpdate
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * @property {string} createdAt
 * @property {string[]} [images]
 */

/**
 * @typedef {Object} FAQ
 * @property {string} id
 * @property {string} question
 * @property {string} answer
 */

/**
 * @typedef {Object} Investment
 * @property {string} id
 * @property {string} campaignId
 * @property {string} userId
 * @property {number} amount
 * @property {string} [rewardId]
 * @property {string} createdAt
 * @property {'pending'|'completed'|'refunded'} status
 * @property {boolean} anonymous
 */

/**
 * @typedef {Object} Category
 * @property {string} id
 * @property {string} name
 * @property {string} icon
 * @property {number} count
 * @property {string} description
 */

/**
 * @typedef {Object} Comment
 * @property {string} id
 * @property {string} campaignId
 * @property {string} userId
 * @property {string} userName
 * @property {string} userAvatar
 * @property {string} content
 * @property {string} createdAt
 * @property {Comment[]} [replies]
 */