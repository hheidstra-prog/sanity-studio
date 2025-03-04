import type { StructureResolver } from "sanity/structure";
import { DocumentIcon, FolderIcon, TagIcon, UserIcon, ListIcon } from "@sanity/icons";

export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // Pages with language-specific nodes
      S.listItem()
        .title("Pages")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("English")
                .child(
                  S.documentList()
                    .title("English Pages")
                    .schemaType("page")
                    .filter('_type == "page" && language == "en"')
                ),
              S.listItem()
                .title("Dutch")
                .child(
                  S.documentList()
                    .title("Dutch Pages")
                    .schemaType("page")
                    .filter('_type == "page" && language == "nl"')
                ),
            ])
        ),

      // Posts with language-specific nodes
      S.listItem()
        .title("Posts")
        .icon(DocumentIcon)
        .child(
          S.list()
            .title("Posts")
            .items([
              S.listItem()
                .title("English")
                .child(
                  S.documentList()
                    .title("English Posts")
                    .schemaType("post")
                    .filter('_type == "post" && language == "en"')
                ),
              S.listItem()
                .title("Dutch")
                .child(
                  S.documentList()
                    .title("Dutch Posts")
                    .schemaType("post")
                    .filter('_type == "post" && language == "nl"')
                ),
            ])
        ),

      // Use cases with language-specific nodes
      S.listItem()
      .title("Use Cases")
      .icon(DocumentIcon)
      .child(
        S.list()
          .title("Use Cases")
          .items([
            S.listItem()
              .title("English Use Cases")
              .child(
                S.documentList()
                  .title("English Use Cases")
                  .schemaType("useCase")
                  .filter('_type == "useCase" && language == "en"')
              ),
            S.listItem()
              .title("Dutch Use Cases")
              .child(
                S.documentList()
                  .title("Dutch Use Cases")
                  .schemaType("useCase")
                  .filter('_type == "useCase" && language == "nl"')
              ),
          ])
      ),       

      // Menus with language-specific nodes
      S.listItem()
        .title("Menus")
        .icon(ListIcon)
        .child(
          S.list()
            .title("Menus")
            .items([
              S.listItem()
                .title("English")
                .child(
                  S.documentList()
                    .title("English Menu")
                    .schemaType("menu")
                    .filter('_type == "menu" && language == "en"')
                ),
              S.listItem()
                .title("Dutch")
                .child(
                  S.documentList()
                    .title("Dutch Menu")
                    .schemaType("menu")
                    .filter('_type == "menu" && language == "nl"')
                ),
            ])
        ),

      // Authors with language-specific nodes
      S.listItem()
        .title("Authors")
        .icon(UserIcon)
        .child(
          S.list()
            .title("Authors")
            .items([
              S.listItem()
                .title("English")
                .child(
                  S.documentList()
                    .title("English Authors")
                    .schemaType("author")
                    .filter('_type == "author" && language == "en"')
                ),
              S.listItem()
                .title("Dutch")
                .child(
                  S.documentList()
                    .title("Dutch Authors")
                    .schemaType("author")
                    .filter('_type == "author" && language == "nl"')
                ),
            ])
        ),

      // Categories
      S.listItem()
        .title("Categories")
        .icon(TagIcon)
        .child(S.documentTypeList("category").title("Categories")),

      S.listItem()
      .title("Text Libraries")
      .icon(FolderIcon)
      .child(
        S.list()
          .title("Text Libraries")
          .items([
                            
            S.listItem()
              .title("Text Sections")
              .child(S.documentTypeList("textSection").title("Text Sections")),
          ])
      ),         

      // Libraries (Reusable Sections)
      S.listItem()
        .title("Home Libraries")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("Home Libraries")
            .items([
              S.listItem()
                .title("Hero Sections")
                .child(S.documentTypeList("heroSection").title("Hero Sections")),  
              S.listItem()
                .title("AI Benefits Sections")
                .child(S.documentTypeList("aiAgentsSection").title("AI Benefits Sections")),        
              S.listItem()
                .title("AI Top Use cases Sections")
                .child(S.documentTypeList("aiWorkflowSection").title("AI Top Use cases Sections")), 
              S.listItem()
                .title("AI Facts Sections")
                .child(S.documentTypeList("aiFactsSection").title("AI Facts Sections")),     
              S.listItem()
                .title("AI Insights Sections")
                .child(S.documentTypeList("aiInsightsSection").title("AI Insights Sections")),      
              S.listItem()
                .title("Use Cases Sections")
                .child(S.documentTypeList("useCasesSection").title("Use Cases Sections")),    
              S.listItem()
                .title("Newsletter Sections")
                .child(S.documentTypeList("newsletterSection").title("Newsletter Sections")),   
              S.listItem()
                .title("Latest Articles Sections")
                .child(S.documentTypeList("latestArticlesSection").title("Latest Articles Sections")),                    
            ])
        ),
        S.listItem()
        .title("Blog Related Libraries")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("Blog Related Libraries")
            .items([
              S.listItem()
                .title("Social Share Sections")
                .child(S.documentTypeList("socialShareSection").title("Social Share Sections")),   
              S.listItem()
                .title("TOC Sections")
                .child(S.documentTypeList("tableOfContentsSection").title("TOC Sections")),     
              S.listItem()
                .title("All Post Sections")
                .child(S.documentTypeList("allArticlesSection").title("All Posts Sections")),     
              S.listItem()
                .title("Recent Post Sections")
                .child(S.documentTypeList("latestArticlesSection").title("Recent Posts Sections")),                              

            ])
        ),        
        S.listItem()
        .title("About Us Page Libraries")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("About Us Page Libraries")
            .items([
              S.listItem()
                .title("About Us Sections")
                .child(S.documentTypeList("aboutUsSection").title("About Us Sections")),       
              S.listItem()
                .title("Meet the team Sections")
                .child(S.documentTypeList("meetTheTeamSection").title("Meet the team Sections")),                      
             
            ])
        ),   
        S.listItem()
        .title("CTA Libraries")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("CTA Libraries")
            .items([
              S.listItem()
                .title("Contact Form Sections")
                .child(S.documentTypeList("contactFormSection").title("Contact Form Sections")),   
              S.listItem()
                .title("Schedule Call Form")
                .child(S.documentTypeList("scheduleCallFormSection").title("Schedule Call Form")),                                   

            ])
        ),  
          
        S.listItem()
        .title("Not implemented Libraries")
        .icon(FolderIcon)
        .child(
          S.list()
            .title("Not implemented Libraries")
            .items([
       
              S.listItem()
                .title("CTA Sections")
                .child(S.documentTypeList("ctaSection").title("CTA Sections")),                                               
              S.listItem()
                .title("FAQ Sections")
                .child(S.documentTypeList("faqSection").title("FAQ Sections")),
              S.listItem()
                .title("Feature Sections")
                .child(S.documentTypeList("featureSection").title("Feature Sections")),    
              S.listItem()
                .title("Testimonial Sections")
                .child(S.documentTypeList("testimonialSection").title("Testimonial Sections")),

            ])
        ),                               
    ]);
