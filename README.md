# AI-Based Biohybrid Heart Valve Repair: Monitoring Dashboard (Prototype)

A React and TypeScript dashboard prototype that simulates a sensor-equipped biohybrid heart valve. It visualises valve status, signal history and alerts. It is a concept interface: the data are simulated in the browser, not measured from a device.

> A later, maintained version of this project is in [biohybrid-heart-valve](https://github.com/datascintist-abusufian/biohybrid-heart-valve).

## Features

- **Valve simulation:** an animated view of the valve state (`ValveSimulation.tsx`)
- **Status indicators:** colour-coded health and alert status (`ValveStatus/`)
- **Dashboard:** live and historical signal charts (`Dashboard/HistoryChart.tsx`)
- **Analytics helpers:** simple threshold and trend logic on the simulated signals (`utils/valveAnalytics.ts`)

The figure `α-NAGA Signal Response to Biomarker Volume.png` illustrates the biomarker-response concept behind the simulated sensor.

## Tech stack

React 18, TypeScript, Vite and Tailwind CSS.

## Running locally

```bash
npm install
npm run dev
```

Then open the local address that Vite prints.

## Licence

No licence has been declared yet.

## Author

Md Abu Sufian - ORCID [0009-0007-3503-6942](https://orcid.org/0009-0007-3503-6942)
