// Sanity Schema Definitions
// Copy these to your Sanity Studio schemas folder

// schemas/product.js
export const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Herbs', value: 'herbs'},
          {title: 'Oils', value: 'oils'},
          {title: 'Powders', value: 'powders'},
          {title: 'Capsules', value: 'capsules'},
          {title: 'Formulations', value: 'formulations'}
        ]
      }
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'usage',
      title: 'Usage Instructions',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Product Image',
      type: 'image'
    }
  ]
}

// schemas/category.js
export const category = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string'
    }
  ]
}

// schemas/certification.js
export const certification = {
  name: 'certification',
  title: 'Certification',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Certification Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    }
  ]
}