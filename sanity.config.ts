import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { codeInput } from '@sanity/code-input'
import { documentInternationalization } from '@sanity/document-internationalization'
import { deskStructure } from './structure/deskStructure'
import { copyPastePlugin } from '@superside-oss/sanity-plugin-copy-paste'

export default defineConfig({
  name: 'default',
  title: 'website',

  projectId: '1eda2pt1',
  dataset: 'production',

  plugins: [
    copyPastePlugin(),
    structureTool({
      structure: deskStructure
    }), visionTool(), codeInput(), documentInternationalization({
      // Required configuration
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'nl', title: 'Dutch'},

      ],
      schemaTypes: ['post', 'page', 'menu', 'author', 'aboutUsSection', 'aiFactsSection' , 'aiInsightsSection', 'allArticlesSection', 'contactFormSection',
        'ctaSection', 'faqSection', 'featureSection', 'heroSection', 'latestArticlesSection', 'meetTheTeamSection', 'newsletterSection', 
        'testimonialSection', 'textSection', 'aiAgentsSection', 'aiWorkflowSection', 'useCasesSection', 'useCase', 
        'scheduleCallFormSection', 'socialShareSection', 'tableOfContentsSection'
      ],
    })],

  schema: {
    types: schemaTypes,
  },

})
