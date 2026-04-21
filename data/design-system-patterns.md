Design System Patterns
Master design system architecture to create consistent, maintainable, and scalable UI foundations across web and mobile applications.

When to Use This Skill
Creating design tokens for colors, typography, spacing, and shadows
Implementing light/dark theme switching with CSS custom properties
Building multi-brand theming systems
Architecting component libraries with consistent APIs
Establishing design-to-code workflows with Figma tokens
Creating semantic token hierarchies (primitive, semantic, component)
Setting up design system documentation and guidelines
Core Capabilities

1. Design Tokens
   Primitive tokens (raw values: colors, sizes, fonts)
   Semantic tokens (contextual meaning: text-primary, surface-elevated)
   Component tokens (specific usage: button-bg, card-border)
   Token naming conventions and organization
   Multi-platform token generation (CSS, iOS, Android)
2. Theming Infrastructure
   CSS custom properties architecture
   Theme context providers in React
   Dynamic theme switching
   System preference detection (prefers-color-scheme)
   Persistent theme storage
   Reduced motion and high contrast modes
3. Component Architecture
   Compound component patterns
   Polymorphic components (as prop)
   Variant and size systems
   Slot-based composition
   Headless UI patterns
   Style props and responsive variants
4. Token Pipeline
   Figma to code synchronization
   Style Dictionary configuration
   Token transformation and formatting
   CI/CD integration for token updates

Key Patterns

Pattern 1: Token Hierarchy
/* Layer 1: Primitive tokens (raw values) */
:root {
  --color-blue-500: #3b82f6;
  --color-blue-600: #2563eb;
  --color-gray-50: #fafafa;
  --color-gray-900: #171717;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-4: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
}

/* Layer 2: Semantic tokens (meaning) */
:root {
  --text-primary: var(--color-gray-900);
  --text-secondary: var(--color-gray-600);
  --surface-default: white;
  --interactive-primary: var(--color-blue-500);
  --interactive-primary-hover: var(--color-blue-600);
}

/* Layer 3: Component tokens (specific usage) */
:root {
  --button-bg: var(--interactive-primary);
  --button-bg-hover: var(--interactive-primary-hover);
  --button-text: white;
  --button-radius: var(--radius-md);
  --button-padding-x: var(--space-4);
  --button-padding-y: var(--space-2);
}

Best Practices
Name Tokens by Purpose: Use semantic names (text-primary) not visual descriptions (dark-gray)
Maintain Token Hierarchy: Primitives > Semantic > Component tokens
Document Token Usage: Include usage guidelines with token definitions
Version Tokens: Treat token changes as API changes with semver
Test Theme Combinations: Verify all themes work with all components
Automate Token Pipeline: CI/CD for Figma-to-code synchronization
Provide Migration Paths: Deprecate tokens gradually with clear alternatives

Common Issues
Token Sprawl: Too many tokens without clear hierarchy
Inconsistent Naming: Mixed conventions (camelCase vs kebab-case)
Missing Dark Mode: Tokens that don't adapt to theme changes
Hardcoded Values: Using raw values instead of tokens
Circular References: Tokens referencing each other in loops
Platform Gaps: Tokens missing for some platforms (web but not mobile)
