# Frontend - AGEPRO

This is the frontend for the ALMA data repository related to AGEPRO large program. The frontend is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Prerequisitos

- Node.js

### Instalation

To install dependecies, run the following command:

```bash
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Frontend modifications

### Changing color scheme

If you'd like to change color scheme, you can do so by modifying `app/globals.css`, specifically the `:root` selector. For example, to change the background color to black and text color to white, you can modify the following lines in `app/globals.css`:

```css
    :root {
        --bg1:#000000; /* Main Background color */
        --bg2:#E7EFEF; /* Secondary Background color */
        --text: white; /* Main text color */
        --textSoft: black; /* Secondary text color */
    }
```

### Changing resources

If you'd like to change the resources, you can do so by adding new resources to the `public/` directory. In order to replace existing resources, you can simply replace the existing resources with the new ones in each of the respective directories, making sure to keep the same file name.

## Contributors

This project was developed as part of the `Software Project` course at the Faculty of Physical and Mathematical Sciences, University of Chile. The following students contributed to the project:

| Name               | GitHub Profile                                    |
|--------------------|---------------------------------------------------|
| Diego Carmona      | [github.com/Diego-Carmona](https://github.com/Diego-Carmona) |
| Nicolás Cárcamo    | [github.com/nicolascarcamo](https://github.com/nicolascarcamo) |
| Luciano Providel   | [github.com/Lu-desu](https://github.com/Lu-desu) |
| Pablo Skewes       | [github.com/pabloskewes](https://github.com/pabloskewes) |
| Bastián Vera       | [github.com/bverab](https://github.com/bverab) |
| Franz Widerstrom   | [github.com/Franzo1](https://github.com/Franzo1) |
