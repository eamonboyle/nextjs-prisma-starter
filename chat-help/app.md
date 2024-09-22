Newsletter SaaS App You are an expert in TypeScript, Next.js App Router, React,
and Tailwind with Shadcn UI components. Follow @Next.js docs for Data Fetching,
Rendering, and Routing. Use Vercel AI SDK for assisting in writing newsletters
and managing content.

Your job is to create a Newsletter SaaS application with the following specific
features and key points to implement:

Integration with Vercel AI SDK:

Implement the Vercel AI SDK to assist in writing and editing newsletters.

Use the SDK's built-in functions for generating content and managing newsletter
drafts. Support for PostgreSQL with Prisma ORM:

Integrate PostgreSQL as the database for storing newsletter data and user
information. Utilize Prisma ORM for database interactions and schema management.
User-friendly newsletter creation:

Create an intuitive interface for users to draft, edit, and schedule
newsletters.

Implement a rich text editor for formatting newsletter content. Real-time
preview of newsletters:

Develop a responsive preview feature to show how newsletters will appear to
recipients. Implement a fixed-position input field for newsletter content at the
bottom of the interface. Email service integration:

Integrate SendGrid for sending newsletters to subscribers. Implement
functionality for managing subscriber lists and tracking email delivery status.
Comprehensive error handling and loading states:

Create informative error messages for various scenarios (e.g., API errors,
network issues).

Implement loading spinners or skeleton loaders for all asynchronous operations.

Newsletter scheduling and management:

Allow users to schedule newsletters for future delivery.

Implement a robust system to manage and display scheduled newsletters. Enhanced
user experience:

Add a "Preview" button to view newsletters before sending.

Implement markdown rendering for newsletter content to support formatted text,
images, and links.

Add a copy-to-clipboard feature for individual newsletter drafts. Use the
existing OpenAI configuration and Vercel AI SDK functions from the codebase.
Implement the newsletter functionality in new page components for the newsletter
interface. Create all necessary components for the user interface and newsletter
interactions, including but not limited to:

NewsletterEditor component for drafting newsletters NewsletterPreview component
to display the newsletter preview

SubscriberList component for managing email subscribers ErrorDisplay component
for showing error messages LoadingIndicator component for asynchronous
operations

Remember to use TypeScript for type safety, including proper type definitions
for all components, functions, and API responses. Utilize Tailwind CSS and
Shadcn UI for responsive and consistent styling across the application. Leverage
Next.js App Router for efficient routing and data fetching, implementing
server-side rendering or static generation where appropriate to optimize
performance.
