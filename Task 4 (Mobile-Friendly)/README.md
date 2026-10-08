# Responsive Website Task 4

## Project Title
ElevateLab Responsive Landing Page

## Project Objective
This project demonstrates responsive web design using CSS media queries, flexible layouts, and modern mobile-friendly styling. The goal is to transform a desktop-focused landing page into a clean, responsive website that remains usable on tablets and mobile devices.

## Original Responsiveness Problems
The original desktop-style layout would typically suffer from several responsive issues, including:

- fixed-width containers that do not shrink on smaller screens
- navigation links that crowd or overflow the header
- multi-column layouts that become cramped or unreadable on tablets and phones
- large spacing values that create awkward gaps on narrow screens
- images and cards that exceed their parent width
- text and buttons that feel too large or too wide on mobile

## Changes Made to Improve Responsiveness
- Added a viewport meta tag for mobile scaling.
- Rebuilt the layout using flexible container widths and responsive grid rules.
- Simplified the navigation so it wraps cleanly on smaller screens.
- Converted large desktop layouts to stacked mobile-friendly sections.
- Used responsive typography with clamp() and flexible spacing.
- Ensured images use max-width: 100% and maintain their natural aspect ratio.
- Added breakpoints at 900px, 768px, and 480px to improve usability across screen sizes.
- Kept the design visually consistent while avoiding horizontal overflow.

## Technologies Used
- HTML5
- CSS3
- Flexbox
- CSS Grid
- Media Queries
- Google Fonts

## Media Queries and Breakpoints Implemented
- 900px: collapse multi-column sections and adjust navigation layout
- 768px: convert hero content to stacked layout, improve button usability, tighten spacing
- 480px: optimize for small mobile screens, reduce padding, full-width buttons, and stacked cards

## Testing Performed
The page was reviewed for responsive behavior across common viewport sizes, including:

- Desktop: 1920 x 1080
- Tablet: 768 x 1024
- Mobile: 390 x 844
- Small mobile: 320 x 568

The layout was checked for:

- navigation usability
- readable text
- no horizontal scrolling
- proper image scaling
- card layout readability
- button accessibility
- footer stability

## Screenshots
Screenshots can be added here after opening the page in Chrome DevTools or a browser preview.

## How to Run Locally
1. Open the folder in VS Code.
2. Open index.html in a browser, or run a local web server.
3. If using a local server, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Author
Pawan Sain
