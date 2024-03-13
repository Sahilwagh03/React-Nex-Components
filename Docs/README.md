# React-nex

React-nex is a collection of UI components for React applications. Unlike other libraries where users have to download all components, React-nex allows developers to selectively install and use components as needed. Components are stored locally within the developer's project under `src/component-rect-nex/`.

## ✨ Selective Installation (Say Goodbye to Bloatware!)

Unlike other bloated libraries, React-nex empowers you to pick and choose the exact components you require. Simply leverage npx to install specific components directly into your project:

You can install React-nex components via npm using `npx`:

```bash
npx react-nex add component_name
```

<span style="color: #DAA520; padding: 2px 5px; font-size: larger; font-weight: bold;">Note:-</span>Ensure that you add the component path to the Tailwind CSS configuration. Add the following line to the Tailwind config file to enable Tailwind to purge unused styles:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components-react-nex/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
};

```

## Usage

Once you've installed the desired component, you can import and use it in your React application as follows:

```javascript
import { ComponentName } from './src/component-rect-nex/ComponentName';

function App() {
  return (
    <div>
      <ComponentName />
    </div>
  );
}

export default App;
```

## Available Components

Here is a list of available components along with brief descriptions:

- **Button**: A customizable button component for use in your React application.
- **Alert**: A component for displaying alerts and notifications to users.
- **Avatar**: A component for displaying user avatars or profile images.
- **AvatarGroup**: A component for displaying a group of avatars in a single container.
- **Badge**: A simple badge component for labeling content.
- **Checkbox**: A checkbox component for selecting options.
- **PinBox**: A PinBox component for getting otp values.

## Contributing

We welcome contributions to React-nex. If you'd like to contribute, please follow these guidelines:

- Fork the repository and clone it locally.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure the code passes all tests.
- Submit a pull request with a clear description of your changes.

