# Media Monitor Dashboard

A responsive media monitoring dashboard built with Angular, TypeScript, SCSS, and BEM methodology. Inspired by the kind of media intelligence tools used in public relations and communications platforms.

---

## Features

- Real-time search filtering across headlines and summaries
- Category filtering by Technology, Politics, Business, Health, and Entertainment
- Sentiment analysis display — each story is tagged Positive, Neutral, or Negative
- Stats bar showing total stories and sentiment breakdown at a glance
- Color-coded media cards with hover animations
- Fully responsive grid layout that adapts to any screen size

---

## Project Structure

```
media-monitor/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/          # Search bar and app title
│   │   │   ├── stats-bar/       # Sentiment count summary
│   │   │   ├── filter-bar/      # Category filter buttons
│   │   │   └── media-card/      # Individual story card
│   │   ├── services/
│   │   │   └── media.service.ts # Data provider and filtering logic
│   │   ├── models/
│   │   │   └── article.model.ts # TypeScript interfaces and types
│   │   └── app.ts               # Root component
│   ├── main.ts                  # Application entry point
│   └── styles.scss              # Global styles
├── angular.json                 # Angular CLI configuration
├── package.json                 # Project dependencies
└── tsconfig.json                # TypeScript configuration
```

---

## Technologies Used

- Angular 21 — component-based frontend framework
- TypeScript — typed superset of JavaScript
- SCSS with BEM methodology — structured and maintainable styling
- Angular Dependency Injection — service-based data architecture
- CSS Grid — responsive layout

## Key Concepts Demonstrated

- Component architecture with `@Input()` and `@Output()` bindings
- Two-way data binding with `[(ngModel)]`
- Structural directives `*ngFor` and `*ngIf`
- Angular services and Dependency Injection
- TypeScript interfaces, union types, and type safety
- SCSS nesting and BEM naming convention
- Reactive filtering combining search and category simultaneously

---

## How To Run

**1. Clone the repository:**
```
git clone https://github.com/xMostafaHusseinx/Media-Monitor.git
cd Media-Monitor
```

**2. Install dependencies:**
```
npm install
```

**3. Start the development server:**
```
ng serve
```

**4. Open your browser at:**
```
http://localhost:4200
```

---

## Author

Mostafa Aly Sayed Aly Hussein