# Storyblok Setup Guide

## Content Types Configuration

### 1. Page Content Types

#### Generic Page (`page`)
```json
{
  "name": "page",
  "display_name": "Page",
  "schema": {
    "seo": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": ["seo"]
    },
    "body": {
      "type": "bloks"
    }
  }
}
```

#### Module Page (`module_page`)
```json
{
  "name": "module_page", 
  "display_name": "Module Page",
  "schema": {
    "seo": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": ["seo"]
    },
    "hero": {
      "type": "bloks",
      "restrict_components": true,
      "component_whitelist": ["hero"],
      "maximum": 1
    },
    "body": {
      "type": "bloks"
    }
  }
}
```

### 2. Content Blocks

#### Hero Block (`hero`)
```json
{
  "name": "hero",
  "display_name": "Hero",
  "schema": {
    "eyebrow": {"type": "text"},
    "heading": {"type": "text", "required": true},
    "subheading": {"type": "text"},
    "description": {"type": "textarea"},
    "primary_cta_text": {"type": "text"},
    "primary_cta_link": {"type": "multilink"},
    "secondary_cta_text": {"type": "text"},
    "secondary_cta_link": {"type": "multilink"},
    "image": {"type": "asset", "filetypes": ["images"]},
    "video_url": {"type": "text"},
    "background_variant": {
      "type": "option",
      "options": [
        {"name": "Default", "value": "default"},
        {"name": "Gradient", "value": "gradient"},
        {"name": "Pattern", "value": "pattern"}
      ]
    }
  }
}
```

## Sample Content

### Home Page Content
Create a story with slug `home` and the following structure:

```json
{
  "component": "page",
  "body": [
    {
      "component": "hero",
      "heading": "Find, trust, and deploy specialist talent — fast",
      "subheading": "One place to run panels, suppliers, and contractors with real-time skills intelligence",
      "description": "Built for government and enterprise: security first, people-centred by design.",
      "primary_cta_text": "Request a Demo",
      "primary_cta_link": {"cached_url": "/demo"},
      "secondary_cta_text": "Learn More", 
      "secondary_cta_link": {"cached_url": "/product"},
      "background_variant": "gradient"
    }
  ]
}
```

## Setup Instructions

1. Create Storyblok space
2. Configure content types using the schemas above
3. Create sample content
4. Set up preview URLs
5. Configure webhooks for ISR
