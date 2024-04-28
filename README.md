# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![](./Screenshot.png)

### Links

- Solution URL: [GitHub](https://github.com/Jake-Oz/ip-tracker)
- Live Site URL: [IP Address Tracker](https://ip-tracker-five-rust.vercel.app)

## My process

### Built with

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [ShadcnUI](https://ui.shadcn.com) - Component Library
- [DaisyUI](https://daisyui.com) - Component Library for Tailwind CSS

### What I learned

I still need to plan my projects better from the outset so I have a more structured file setup and more logic to the functionality within separate components and server actions.

I also started to use Next JS's built in loading and error functionality. More to learn here as well although Daisy UIs loading animation was very easy to implement (see snippet below) by adding loading and loading-spinner to the tailwind class.

```tsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-screen text-blue-400 mt-10">
      <div className=" loading loading-spinner"></div>
      <div>Loading...</div>
    </div>
  );
};

export default Loading;
```

The other complexity was implementing the leaflet map inside a React component. In the end, I found the react-leaflet package that proved fairly easy to use.

### Continued development

For future projects, I am going to start using the free version of Jira to help plan and execute the project more effectively. I will also use Figma to ensure the design is accurate before I start coding.

## Author

- Frontend Mentor - [@Jake-Oz](https://www.frontendmentor.io/profile/Jake-Oz)

## Acknowledgments

Thank you to the team at Frontendmentor.io for creating these challenges. My skills have been significantly improved by having to create from a design rather than just following along on youtube.
