Android Mobile Design
Master Material Design 3 (Material You) and Jetpack Compose to build modern, adaptive Android applications that integrate seamlessly with the Android ecosystem.

When to Use This Skill
Designing Android app interfaces following Material Design 3
Building Jetpack Compose UI and layouts
Implementing Android navigation patterns (Navigation Compose)
Creating adaptive layouts for phones, tablets, and foldables
Using Material 3 theming with dynamic colors
Building accessible Android interfaces
Implementing Android-specific gestures and interactions
Designing for different screen configurations

Core Concepts

1. Material Design 3 Principles
Personalization: Dynamic color adapts UI to user's wallpaper
Accessibility: Tonal palettes ensure sufficient color contrast
Large Screens: Responsive layouts for tablets and foldables

Material Components: Cards, Buttons, FABs, Chips, Navigation (rail, drawer, bottom nav),
Text fields, Dialogs, Sheets, Lists, Menus, Progress indicators

2. Jetpack Compose Layout System
Column and Row with Arrangement and alignment modifiers
LazyColumn / LazyVerticalGrid for performant scrolling lists
LazyVerticalGrid with GridCells.Adaptive for responsive grids

3. Navigation Patterns
Bottom Navigation with NavigationBar and NavigationBarItem
Navigation Drawer with ModalNavigationDrawer and ModalDrawerSheet
NavHost with composable destinations and state restoration (saveState / restoreState)

4. Material 3 Theming
Dynamic color on Android 12+ via dynamicDarkColorScheme / dynamicLightColorScheme
Custom color scheme with lightColorScheme / darkColorScheme
Typography scale: displayLarge → headlineMedium → titleLarge → bodyLarge → labelMedium

5. Component Examples
Cards: Card composable with RoundedCornerShape and CardDefaults.cardColors
Buttons: Button (primary), FilledTonalButton (secondary), OutlinedButton, TextButton, FloatingActionButton
Scaffold with topBar and bottomBar for consistent layout structure

Best Practices
Use Material Theme: Access colors via MaterialTheme.colorScheme for automatic dark mode
Support Dynamic Color: Enable on Android 12+ for personalization
Adaptive Layouts: Use WindowSizeClass for responsive designs
Content Descriptions: Add contentDescription to all interactive elements
Touch Targets: Minimum 48dp touch targets for accessibility
State Hoisting: Hoist state to make components reusable and testable
Remember Properly: Use remember and rememberSaveable appropriately
Preview Annotations: Add @Preview with different configurations

Common Issues
Recomposition Issues: Avoid passing unstable lambdas; use remember
State Loss: Use rememberSaveable for configuration changes
Performance: Use LazyColumn instead of Column for long lists
Theme Leaks: Ensure MaterialTheme wraps all composables
Navigation Crashes: Handle back press and deep links properly
Memory Leaks: Cancel coroutines in DisposableEffect
