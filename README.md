# AWS Cloud Club - PGC Muridke

Welcome to the **AWS Cloud Club** Next.js application for the Punjab Group of Colleges, Muridke Campus. This project is built using **Next.js 15 (App Router)** and **Tailwind CSS v4** to deliver a fast, scalable, and responsive experience for our community.

## 🚀 Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

The project has been migrated from static HTML to a modern React component-based architecture:

```
├── public/                # Static assets (images like pgc4.png, profile.png)
├── src/
│   ├── app/               # Next.js App Router (Pages & Layouts)
│   │   ├── events/        # /events page
│   │   ├── guidelines/    # /guidelines page
│   │   ├── programs/      # /programs page
│   │   ├── resources/     # /resources page
│   │   ├── team/          # /team page
│   │   ├── globals.css    # Global CSS & Tailwind configuration
│   │   ├── layout.tsx     # Root layout (Navigation & Footer)
│   │   └── page.tsx       # Home page (Hero, Who We Are, etc.)
│   ├── components/        # Reusable UI components
│   │   ├── Navigation.tsx # Top navigation bar & mobile menu
│   │   └── Footer.tsx     # Site footer & social links
│   └── data/              # Centralized data stores
│       └── events.ts      # All events logic, descriptions & Meetup URLs
```

## 🛠️ How to Update Content (Easy Maintenance)

The architecture is designed to make updating content extremely easy without needing to understand complex React lifecycles.

### Adding or Editing Events
1. Open `src/data/events.ts`.
2. Locate the `eventsData` array near the top of the file.
3. Simply add a new object to the array, or edit an existing one:
   ```typescript
   {
     id: "your-unique-event-slug", // Used for the URL (/events/your-unique-event-slug)
     title: "Your New Event Title",
     description: "Short summary...",
     longDescription: "Full details paragraph shown on the event details page...",
     date: "Dec 01, 2024",
     time: "10:00 PKT",
     location: "Online",
     tag: "Workshop",
     tagColor: "bg-brand-orange", 
     image: "URL_TO_YOUR_IMAGE",
     meetupLink: "https://meetup.com/...", // Custom registration link
     isPast: false, // Set to true to move to Recent Recaps
     isFeatured: false // Set to true to show at the top of the events page
   }
   ```
4. The site will automatically generate a custom Details page and display the Event Card on the main Events page!

### Updating the Team Members
1. Open `src/app/team/page.tsx`.
2. Locate the `teamMembers` array near the top of the file.
3. Add or modify a team member object:
   ```typescript
   {
     name: "New Member Name",
     role: "Role Title",
     icon: "terminal", // Using Google Material Symbols
     image: "URL_TO_THEIR_PICTURE"
   }
   ```

### Changing Main Images (Hero or Captain)
- The images are stored in the `public/` folder.
- **Hero Image**: If you want to change the hero background, replace `public/pgc4.png` with a new image of the same name, or go into `src/app/page.tsx` and change `url('/pgc4.png')` to your new filename.
- **Captain Image**: Replace `public/profile.png` with a new image, or update the `src="/profile.png"` path in `src/app/team/page.tsx`.

## 🔗 External Links Integration

- **Membership Applications**: All "Become a club member" buttons route to `https://forms.google.com`. You can update these specific links across the site to route to your exact Google Form URL.
- **Event Registrations**: All "Register Now" buttons on the events page open `https://meetup.com`.

## 🎨 Styling

We use Tailwind CSS. The core brand colors are defined in `src/app/globals.css`:
- `--color-brand-purple`: `#6b4fa9`
- `--color-brand-orange`: `#ff9900`
