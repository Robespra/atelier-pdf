UX Principles
Apply when designing user-centered interfaces, conducting research, evaluating usability, ensuring accessibility, optimizing user flows, and measuring UX quality.

---

## Nielsen's 10 Usability Heuristics

1. **Visibility of System Status** — Keep users informed with timely feedback. Loading states, progress bars, saved confirmations, current location in nav.

2. **Match Between System and Real World** — Use the user's language and real-world conventions. Shopping cart, trash bin, folders.

3. **User Control and Freedom** — Clear emergency exits: undo/redo, cancel, back, escape from modals.

4. **Consistency and Standards** — Same terminology, visual patterns, platform conventions throughout. Design system.

5. **Error Prevention** — Eliminate error-prone conditions. Date pickers, disabled invalid options, "are you sure?" confirmations.

6. **Recognition Rather Than Recall** — Make options visible. Autocomplete, recently used, visible menus, tooltips.

7. **Flexibility and Efficiency of Use** — Keyboard shortcuts, multiple ways to accomplish tasks, bulk operations.

8. **Aesthetic and Minimalist Design** — Remove irrelevant information. Every element competes for attention.

9. **Help Users Recognize, Diagnose, and Recover from Errors** — Plain language errors that explain the problem and suggest a fix.

10. **Help and Documentation** — Easy to search, task-focused, concrete steps. Context-sensitive help.

---

## Gestalt Principles

- **Proximity** — Close elements are perceived as related. Group related fields, space nav by category.
- **Similarity** — Similar elements belong together. Consistent styling for related actions.
- **Continuity** — Elements on a line are perceived as related. Align labels and inputs.
- **Closure** — Humans complete incomplete shapes. Subtle borders and negative space define areas.
- **Figure/Ground** — Use contrast to emphasize primary content. Blur backgrounds in modals.

---

## Cognitive Load

**Types:**
- Intrinsic: Inherent task complexity — break into steps, provide scaffolding
- Extraneous: Poor design friction — eliminate with good UX
- Germane: Learning patterns — support with onboarding

**Reduction strategies:** Chunking, recognition over recall, progressive disclosure, sensible defaults, visual hierarchy, familiar patterns, clear labels, minimize choices (Hick's Law).

---

## Key Behavioral Laws

**Fitts's Law** — Time to tap = function of distance and target size. Make targets large. Place primary actions close. Screen edges are easy.

**Hick's Law** — Decision time increases with number of choices. Reduce options, categorize, highlight recommended.

**Miller's Law** — Working memory holds ~7 (±2) items. Chunk navigation, break complex tasks into steps.

---

## UX Metrics

| Metric | What It Measures |
|--------|-----------------|
| Task Success Rate | % tasks completed (>78% acceptable, >90% excellent) |
| Time on Task | Efficiency of workflows |
| SUS (System Usability Scale) | 10-question score 0–100 (>68 = above average) |
| NPS | Loyalty: % Promoters − % Detractors |
| CSAT | % satisfied (4–5/5) after specific interaction |
| Error Rate | Frequency of user errors per task |

---

## Research Methods

**Qualitative:** User interviews (5–8 per segment), contextual inquiry, think-aloud protocol, diary studies
**Quantitative:** Surveys, analytics, A/B testing, card sorting, tree testing

**User Interviews — best practices:**
- Open-ended questions, 5 Whys to go deeper
- 80/20 listening ratio
- Avoid leading questions
- Identify patterns across participants

**Card Sorting:** Open (discover mental models), Closed (validate structure), 15–30 participants
**Tree Testing:** Validate navigation with text-only hierarchy, aim for >70% success rate
**A/B Testing:** One variable at a time, p<0.05, don't stop early

---

## Accessibility — WCAG POUR Principles

- **Perceivable** — Alt text, captions, transcripts, sufficient contrast
- **Operable** — Keyboard nav, no keyboard traps, skip links, enough time
- **Understandable** — Clear labels, error recovery, consistent navigation
- **Robust** — Works with assistive technologies

**Key requirements:**
- 4.5:1 contrast for normal text, 3:1 for large text
- All functionality available via keyboard
- Text resizable to 200% without content loss
- Logical heading hierarchy h1→h6
- Visible focus indicators
- ARIA landmarks for regions

---

## Journey Mapping Components

Stages → Actions → Touchpoints → Thoughts & Feelings → Pain Points → Opportunities

Process: Define scope → Gather research → Map stages/actions → Add emotions → Validate with stakeholders → Prioritize improvements

---

## Personas — Components

Demographics, Psychographics, Context (devices, frequency, scenarios), Memorable Quote

Best practices: Base on research, 3–5 primary personas, update as you learn, share with team, use in design critiques.
