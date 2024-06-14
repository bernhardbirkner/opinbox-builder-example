# React + Vite + Opinbox Builder

Example project using Vite + React and creating surveys using (Opinbox Builder)[https://www.npmjs.com/package/opinbox-builder]

# Setup

## 1. Create a new App with Vite + React

(Any other React setup will work too!)

```bash
pnpm create vite my-survey-builder --template react
```

## 2. Install dependencies

### Opinbox Builder

```bash
pnpm add opinbox-builder
```

### SurveyJS

```bash
pnpm add survey-core survey-creator-core survey-react-ui
```

### 3. Add the Style

Import Opinbox-Builder styles into the `index.css` file

```css
/* Import the Opinbox-Builder Styles */
@import "opinbox-builder/dist/style.css";
```

### 4. Start building Surveys!

```bash
npm run dev
```

### 5. Custom Expression

You can register custom expression to SurveyJS following the example in `src/custom` or by looking at the SurveyJS (Docu)[https://surveyjs.io/form-library/examples/use-custom-functions-in-expressions/reactjs#content-code]

### 6. Custom Components

You can also register custom components to SurveyJS following the example in `src/components/DummyComponent` or by looking at the SurveyJS (Docu)[https://surveyjs.io/form-library/documentation/customize-question-types/third-party-component-integration-react]

### 7. Run your survey

```bash
npm run preview
```
