iOS Mobile Design
Master iOS Human Interface Guidelines (HIG) and SwiftUI patterns to build polished, native iOS applications that feel at home on Apple platforms.

When to Use This Skill
Designing iOS app interfaces following Apple HIG
Building SwiftUI views and layouts
Implementing iOS navigation patterns (NavigationStack, TabView, sheets)
Creating adaptive layouts for iPhone and iPad
Using SF Symbols and system typography
Building accessible iOS interfaces
Implementing iOS-specific gestures and interactions
Designing for Dynamic Type and Dark Mode

Core Concepts

1. Human Interface Guidelines Principles
Clarity: Content is legible, icons are precise, adornments are subtle
Deference: UI helps users understand content without competing with it
Depth: Visual layers and motion convey hierarchy and enable navigation

2. SwiftUI Layout System
Stack-Based Layouts — VStack, HStack, ZStack with alignment and spacing
Grid Layouts — LazyVGrid with adaptive or fixed columns
Auto-layout via flexible frames

3. Navigation Patterns
NavigationStack (iOS 16+) for hierarchical drill-down with NavigationPath
TabView (iOS 18+) with Tab items for top-level sections

4. System Integration
SF Symbols — use symbolRenderingMode, variableValue, symbolEffect (iOS 17+)
Dynamic Type — semantic fonts (.body, .headline) that scale with user preference
Custom fonts must use Font.custom(_:size:relativeTo:) to respect Dynamic Type

5. Visual Design
Semantic colors (.primary, .secondary, .background) for automatic light/dark adaptation
System materials (.ultraThinMaterial, .regularMaterial) for blur effects
Standard shadow scale for cards and elevated surfaces

Best Practices
Use Semantic Colors: .primary, .secondary, .background for automatic light/dark mode
Embrace SF Symbols: System symbols for consistency and accessibility
Support Dynamic Type: Semantic fonts (.body, .headline) not fixed sizes
Add Accessibility: .accessibilityLabel() and .accessibilityHint() on all controls
Use Safe Areas: Respect safeAreaInset, avoid hardcoded edge padding
Implement State Restoration: @SceneStorage for user state
Support iPad Multitasking: Design for split view and slide over
Test on Device: Simulator doesn't capture full haptic and performance experience

Common Issues
Layout Breaking: Use .fixedSize() sparingly; prefer flexible layouts
Performance Issues: Use LazyVStack/LazyHStack for long scrolling lists
Navigation Bugs: Ensure NavigationLink values are Hashable
Dark Mode Problems: Avoid hardcoded colors; use semantic or asset catalog colors
Accessibility Failures: Test with VoiceOver enabled
Memory Leaks: Watch for strong reference cycles in closures
