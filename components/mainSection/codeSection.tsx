// CodeSection.tsx
import { Code } from "./code";
import CopyButton from "./copyButton";

const exampleCode = ` 
\`\`\`tsx

\`\`\`
`;

export function CodeSection() {
  return (
    <div className="relative">
      <Code code={exampleCode} />
      {/* This button component is interactive, so we put it in a separate client component */}
      <CopyButton code={exampleCode} />
    </div>
  );
}
