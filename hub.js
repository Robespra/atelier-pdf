/* =============================================
   DESIGN EMPOWERMENT HUB — hub.js
   Section navigation, lazy loading, checklists, i18n
   ============================================= */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     I18N
     ══════════════════════════════════════════ */
  const I18N = {
    fr: {
      /* Nav */
      nav_design_systems: 'Design Systems',
      nav_components:     'Kitchen Sink',
      nav_craft:          'Savoir-faire & Outils',
      nav_knowledge:      'Ressources',
      nav_quiz:           'UI Quiz',
      nav_prompting:      'Prompting',
      nav_careers:        'Carrières',
      /* Design Systems section */
      ds_title:           'Design Systems',
      ds_subtitle:        'Accédez aux librairies Figma — fondation partagée et systèmes produit.',
      ds_open_figma:      'Ouvrir dans Figma',
      ds_loading:         'Chargement…',
      ds_error:           'Impossible de charger les design systems.',
      /* Components section */
      comp_title:         'Kitchen Sink',
      comp_subtitle:      'Tous les composants du système de design — consultez-les ici sans ouvrir Figma.',
      comp_loading:       'Chargement des composants…',
      comp_not_found:     'Composant introuvable.',
      /* Knowledge section */
      know_title:         'Ressources',
      know_subtitle:      'Ressources sélectionnées en psychologie, communication, accessibilité, inspiration, icônes et éléments UI.',
      know_loading:       'Chargement…',
      know_error:         'Impossible de charger les ressources.',
      know_list_empty:    'Liens à venir.',
      /* Quiz section */
      quiz_title:         'Name That UI',
      quiz_subtitle:      'Testez votre culture design en identifiant des composants UI réels.',
      quiz_cta_desc:      '10 questions, des composants tirés de vrais produits. Saurez-vous les nommer ?\nL\'IA exige de la clarté — gloire à ceux qui savent ce qu\'ils voient.',
      quiz_cta_btn:       'Commencer le quiz',
      quiz_stat_questions: 'questions',
      quiz_stat_categories: 'catégories',
      quiz_stat_bonus:    'bonus labels',
      /* Craft section */
      craft_title:        'Savoir-faire & Outils',
      craft_subtitle:     'Ressources, outils et exercices pour développer votre pratique du design d\'interface.',
      /* Prompting section */
      prompt_title:       'Prompting Design',
      prompt_subtitle:    'Problèmes fréquents des prompts vagues et 5 stratégies pour des outputs de meilleure qualité.',
      /* Careers section */
      careers_title:      'Carrières UI/UX',
      careers_subtitle:   'Tout ce qu\'un candidat interne doit savoir sur le rôle de product designer.',
      /* DesignOps section */
      designops_title:    'DesignOps',
      designops_subtitle: 'Roadmap IA, infrastructure Figma MCP et stratégie design system.',
      nav_designops:      'DesignOps',
      /* Prototypes section */
      proto_title:        'Prototypes',
      proto_subtitle:     'Explorations interactives — améliorations de pages existantes et nouvelles pistes UX.',
      nav_prototypes:     'Prototypes',
      proto_tag_booking:  'Réservation',
      proto_tag_tools:    'Outil',
      proto_tag_wip:      'En cours',
      proto_open:         'Ouvrir →',
      proto_placeholder:  'Prochain prototype',
      proto_placeholder_sub: 'À venir',
      /* Sidebar logo */
      sidebar_logo_text:  'Atelier\nDesign',
    },
    en: {
      /* Nav */
      nav_design_systems: 'Design Systems',
      nav_components:     'Kitchen Sink',
      nav_craft:          'Savoir-faire & Outils',
      nav_knowledge:      'Resources',
      nav_quiz:           'UI Quiz',
      nav_prompting:      'Prompting',
      nav_careers:        'Careers',
      /* Design Systems section */
      ds_title:           'Design Systems',
      ds_subtitle:        'Access your Figma libraries — shared foundation and product-specific systems.',
      ds_open_figma:      'Open in Figma',
      ds_loading:         'Loading…',
      ds_error:           'Could not load design systems.',
      /* Components section */
      comp_title:         'Kitchen Sink',
      comp_subtitle:      'All design system components — browse them here without opening Figma.',
      comp_loading:       'Loading components…',
      comp_not_found:     'Component not found.',
      /* Knowledge section */
      know_title:         'Resources',
      know_subtitle:      'Curated resources on psychology, communication, accessibility, inspiration, icons and UI elements.',
      know_loading:       'Loading…',
      know_error:         'Could not load resources.',
      know_list_empty:    'Links coming soon.',
      /* Quiz section */
      quiz_title:         'Name That UI',
      quiz_subtitle:      'Test your design knowledge by identifying real UI components.',
      quiz_cta_desc:      '10 questions, components from real products. Can you name them all?\nAI demands clarity — the light belongs to those who know what they see.',
      quiz_cta_btn:       'Start the quiz',
      quiz_stat_questions: 'questions',
      quiz_stat_categories: 'categories',
      quiz_stat_bonus:    'bonus labels',
      /* Craft section */
      craft_title:        'Savoir-faire & Tools',
      craft_subtitle:     'Resources, tools and exercises to develop your UI design practice.',
      /* Prompting section */
      prompt_title:       'Design Prompting',
      prompt_subtitle:    'Common issues with vague prompts and 5 strategies for better AI outputs.',
      /* Careers section */
      careers_title:      'UI/UX Careers',
      careers_subtitle:   'Everything an internal candidate needs to know about the product designer role.',
      /* DesignOps section */
      designops_title:    'DesignOps',
      designops_subtitle: 'AI roadmap, Figma MCP infrastructure and design system strategy.',
      nav_designops:      'DesignOps',
      /* Prototypes section */
      proto_title:        'Prototypes',
      proto_subtitle:     'Interactive explorations — enhancements of existing pages and new UX directions.',
      nav_prototypes:     'Prototypes',
      proto_tag_booking:  'Booking',
      proto_tag_tools:    'Tool',
      proto_tag_wip:      'In progress',
      proto_open:         'Open →',
      proto_placeholder:  'Next prototype',
      proto_placeholder_sub: 'Coming soon',
      /* Sidebar logo */
      sidebar_logo_text:  'Atelier\nDesign',
    },
  };

  /* Bilingual content blocks — keyed strings rendered directly into the DOM */
  const CONTENT = {
    /* ── Prompting  ── */
    prompting: {
      intro: {
        fr: 'Les outils de prototypage IA ont introduit un nouveau paradigme : plutôt que de manipuler des éléments directement dans Figma, les designers peuvent prompter l\'IA pour générer des designs. La qualité du résultat dépend largement de la spécificité du prompt. Cette section synthétise les problèmes fréquents des prompts vagues et propose 5 stratégies pour obtenir de meilleurs résultats.',
        en: 'AI-prototyping tools have introduced a new paradigm: rather than crafting interfaces by directly manipulating elements in Figma, designers can prompt AI to generate designs. Output quality is largely dependent on prompt specificity. This section synthesises common issues with vague prompts and offers 5 strategies to get better results.',
      },
      problems: {
        fr: [
          { id: 'clutter', title: 'Bruit visuel inutile', body: 'Les prompts larges génèrent systématiquement trop d\'éléments — comme un GPS qui vous fait toujours prendre le chemin le plus long. La surcharge augmente la charge cognitive, noie le contenu important et complexifie le code. L\'IA sature l\'interface sans hiérarchie claire ni fil conducteur.' },
          { id: 'repeat', title: 'Éléments répétés', body: 'L\'IA affiche souvent la même information plusieurs fois dans la même interface. En design réel, l\'espace écran est précieux — les équipes ne tolèrent pas ce type de redondance. La répétition sans intention ajoute du bruit et distrait des contenus clés.' },
          { id: 'flow', title: 'Flux de contenu contre-intuitif', body: 'Les utilisateurs attendent une séquence logique — du général au spécifique, les éléments liés groupés ensemble. Les designs IA brisent souvent cette progression : un widget profil au milieu d\'un tableau de bord, une section certification après les cours. Sans hiérarchie claire, le layout est décousu.' },
          { id: 'density', title: 'Conteneurs proéminents, faible densité', body: 'La hiérarchie visuelle guide vers l\'essentiel. Quand elle contredit la priorité du contenu, l\'utilisateur est désorienté. L\'IA place souvent l\'accent visuel sur le mauvais élément — un anneau de progression prenant tout l\'écran pour une information secondaire, ou de grands conteneurs pour une seule valeur numérique.' },
        ],
        en: [
          { id: 'clutter', title: 'Unnecessary visual clutter', body: 'Broad prompts consistently generate more elements than needed — like an inefficient GPS that always takes the longest route. The overload increases cognitive load, buries important content, and creates complex code. The AI saturates the interface with no clear hierarchy or path.' },
          { id: 'repeat', title: 'Repeated design elements', body: 'AI often displays the same information multiple times in the same interface. In real design, screen real estate is precious — teams rarely tolerate this redundancy. Repetition without purpose adds noise and distracts from key content.' },
          { id: 'flow', title: 'Counterintuitive content flow', body: 'Users expect a logical sequence — general to specific, related items grouped. AI-generated designs frequently break this progression: a profile widget mid-dashboard, a certification section after courses. Without clear hierarchy, the layout feels disjointed.' },
          { id: 'density', title: 'Prominent containers, low density', body: 'Visual hierarchy guides users to the most important elements. When hierarchy contradicts content priority, users feel confused. AI often places visual emphasis on the wrong element — a large certification ring dominating secondary info, or big containers holding a single number.' },
        ],
      },
      strategies: {
        fr: [
          {
            num: '01',
            title: 'Utilisez des mots-clés visuels précis',
            body: 'La clarté et la spécificité comptent plus que la longueur. Référencez des styles design établis plutôt que des descriptions génériques comme "simple, clean, moderne". Nommer un style reconnu — skeuomorphisme, flat design, glassmorphisme, neobrutalism — aide le modèle à interpréter votre intention visuelle.',
            examples: [
              { type: 'bad',  text: '"Conçois une landing page de conférence tendance."' },
              { type: 'ok',   text: '"Landing page avec fort contraste, layouts en blocs et couleurs audacieuses."' },
              { type: 'good', text: '"Landing page de conférence en style néobrutalist."' },
            ],
            note: 'Vous pouvez aussi référencer un design system connu par son nom. En revanche, évitez "design comme Apple" ou "dans le style Airbnb" — copier l\'identité visuelle d\'une marque n\'est pas viable, et ce qui fonctionne pour eux peut échouer dans votre contexte.',
          },
          {
            num: '02',
            title: 'Attachez des références visuelles légères',
            body: 'Les maquettes haute-fidélité sont efficaces mais longues à créer. Utilisez plutôt des références légères : moodboards, captures d\'inspiration ou screenshots de votre design system. Figma Make a généré un design visuellement proche d\'un board Pinterest fourni en référence. Gérez vos attentes : la précision pixel-perfect reste hors de portée.',
            examples: [
              { type: 'good', text: 'Screenshot de votre DS Figma → précision maximale via les variables et tokens' },
              { type: 'ok',   text: 'Screenshot d\'une page de référence → reproduit le style visuel, pas les détails' },
              { type: 'note', text: 'Un design visuellement fidèle au DS peut quand même être un mauvais design si le prompt est vague. Évaluez l\'utilisabilité, pas seulement la polissage visuel.' },
            ],
            note: 'Pour une précision maximale, connectez les outils IA directement à votre source design. Certains outils intègrent des features pour récupérer les specs et design tokens directement depuis Figma. Les développeurs peuvent aussi utiliser Figma MCP pour injecter des frames, variables et données de layout dans leur IDE.',
          },
          {
            num: '03',
            title: 'Analysez visuellement avec l\'IA pour formuler le prompt',
            body: 'Tous les outils de prototypage ne supportent pas l\'upload d\'images. Une alternative : utilisez un chatbot généraliste (ChatGPT, Claude) pour analyser le style visuel ou le layout d\'une page en langage naturel, puis convertissez cette description en prompt design. Cette approche peut aussi se combiner avec une image.',
            examples: [
              { type: 'good', text: 'Prompt vers ChatGPT : "Tu es un designer expérimenté. Analyse et décris le style visuel et le layout de cette interface en détail. Sois très spécifique techniquement. Utilise des mots-clés courts et descriptifs."' },
              { type: 'note', text: 'A utilisé cette méthode pour reproduire le style de leur page Live Training sans l\'attacher en image — la description IA sert de contexte visuel supplémentaire.' },
            ],
            note: null,
          },
          {
            num: '04',
            title: 'Générez des données mock',
            body: 'Prompter un outil de prototypage IA ressemble à créer une spec de handoff. Il faut définir les détails visuels et de layout, mais aussi le contenu. Une approche design centrée sur le contenu — travailler avec des données réalistes — guide mieux l\'IA. Quand les données réelles ne sont pas disponibles, générez-les d\'abord avec l\'IA.',
            examples: [
              { type: 'good', text: 'Prompt ChatGPT : "Génère des données mock en JSON pour une page de profil d\'utilisateur — nom, certifications, cours complétés, statuts d\'examen." → collez ce JSON dans Figma Make.' },
              { type: 'note', text: 'L\'information est mieux regroupée et affichée quand le contenu guide le design plutôt que l\'inverse.' },
            ],
            note: 'Collaborez avec les équipes dev et contenu pour obtenir les vraies données affichées dans l\'interface. Quand ce n\'est pas possible, l\'IA peut générer des mocks réalistes en JSON, Markdown ou CSV.',
          },
          {
            num: '05',
            title: 'Attachez des snippets de code',
            body: 'Plus le contexte est direct, moins l\'IA a besoin d\'interprétation — et plus la précision est élevée. Les snippets de code sont l\'une des formes de contexte les plus directes. Sources possibles : votre codebase (avec les devs), des design systems open source (Material, Carbon, Polaris), ou des plateformes comme 21st.dev.',
            examples: [
              { type: 'good', text: 'Tableau de cours généré en référençant le composant Table de Shopify Polaris + snippet de code correspondant.' },
              { type: 'bad',  text: 'Attention : les snippets longs peuvent saturer le contexte du modèle. Et le code visible n\'est pas toujours libre de réutilisation — vérifiez les licences.' },
            ],
            note: 'Cette méthode produit les résultats les plus précis dans les outils de prototypage IA, mais demande une compréhension basique de la structure du code et la capacité à évaluer la qualité du snippet avant de l\'utiliser.',
          },
        ],
        en: [
          {
            num: '01',
            title: 'Use precise visual keywords',
            body: 'Clarity and specificity matter more than length. Reference established design styles rather than generic descriptions like "simple, clean, modern". Naming a recognisable visual style — skeuomorphism, flat design, glassmorphism, neobrutalism — helps the model interpret your visual intent.',
            examples: [
              { type: 'bad',  text: '"Design a trendy conference landing page."' },
              { type: 'ok',   text: '"Design a conference landing page with high contrast, blocky layouts, and bold colours."' },
              { type: 'good', text: '"Design a conference landing page in a neobrutalist style."' },
            ],
            note: 'You can also reference a famous design system by name. However, avoid "design like Apple" or "in Airbnb\'s style" — copying an existing brand\'s visual identity is not a sustainable strategy, and what works for them may fail in your context.',
          },
          {
            num: '02',
            title: 'Attach lightweight visual references',
            body: 'High-fidelity mockups are effective but time-consuming to create. Use lightweight references instead: moodboards, inspiration images, or screenshots of your design system. Figma Make generated a design visually close to a provided Pinterest board. Manage expectations though — pixel-perfect precision is unlikely.',
            examples: [
              { type: 'good', text: 'Screenshot of your Figma DS → maximum precision via variables and tokens' },
              { type: 'ok',   text: 'Screenshot of a reference page → reproduces visual style, not fine details' },
              { type: 'note', text: 'A visually polished AI output aligned with your DS can still be a poor design if the prompt is vague. Evaluate for usability — not just visual polish.' },
            ],
            note: 'For maximum precision, connect AI tools directly to your design source. Some tools can retrieve specs and design tokens directly from Figma. Developers can also use Figma MCP to pull frames, variables, components and layout data directly into their IDE.',
          },
          {
            num: '03',
            title: 'Use AI visual analysis to formulate the prompt',
            body: 'Not all prototyping tools support image uploads. An alternative: use a general-purpose chatbot (ChatGPT, Claude) to analyse the visual style or layout of a page in natural language, then convert that description into a design prompt. This text-based approach can also be combined with an image attachment.',
            examples: [
              { type: 'good', text: 'Prompt to ChatGPT: "You are an experienced designer. Analyse and describe the visual style and layout of this interface in detail. Be very technically specific. Use short and descriptive keywords and phrases."' },
              { type: 'note', text: 'used this method to reproduce the style of their Live Training page without attaching it as an image — the AI description serves as supplemental visual context.' },
            ],
            note: null,
          },
          {
            num: '04',
            title: 'Generate mock data',
            body: 'Prompting an AI-prototyping tool is a lot like creating design specs for handoffs. You need to define visual and layout details, but also content. A content-focused design approach — working with realistic data — guides AI to generate better designs. When real data isn\'t available, generate it with AI first.',
            examples: [
              { type: 'good', text: 'Prompt ChatGPT: "Generate mock data in JSON for an user profile page — name, certifications, completed courses, exam statuses." → paste that JSON into Figma Make.' },
              { type: 'note', text: 'Information is better grouped and displayed when content guides design, not the other way around.' },
            ],
            note: 'Collaborate with dev and content teams to get the real data displayed in the interface. When that\'s not possible, AI can generate realistic mocks in JSON, Markdown or CSV.',
          },
          {
            num: '05',
            title: 'Attach code snippets',
            body: 'The more direct the context, the less interpretation the AI needs — and the higher the accuracy. Code snippets are one of the most direct forms of context. Sources: your codebase (with devs), open-source design systems (Material, Carbon, Polaris), or platforms like 21st.dev.',
            examples: [
              { type: 'good', text: 'Course listing table generated by referencing Shopify Polaris Table component + attaching the corresponding code snippets.' },
              { type: 'bad',  text: 'Caution: long snippets can overload the model\'s context window. And visible code isn\'t always free to reuse — always check licensing.' },
            ],
            note: 'This method yields the most precise results in AI-prototyping tools, but requires understanding basic code structure and assessing snippet quality before use.',
          },
        ],
      },
      closing: {
        fr: 'Il n\'existe pas de raccourci pour résoudre des problèmes de design complexes. Ces stratégies améliorent la spécificité de vos prompts et la qualité des outputs, mais elles ne remplacent pas le travail de fond : analyser les besoins, peser les compromis, prendre des décisions de design éclairées. <strong>Les bonnes décisions de design ne s\'automatisent pas.</strong> L\'IA produit un premier jet — la profondeur, la cohérence et la pertinence du résultat restent entre les mains du designer.',
        en: 'There is no shortcut to solving complex design problems. These strategies improve prompt specificity and output quality, but they can\'t replace the hard work of thinking through design requirements, weighing tradeoffs, and making informed decisions. <strong>Good design decisions can\'t be automated.</strong> AI gives you a first output — depth, coherence, and relevance are still the designer\'s responsibility.',
      },
      tips: {
        fr: [
          { title: 'Nommez le composant exactement', example: '❌ "une sorte de bouton qui glisse"\n✅ "un Toggle Switch avec état désactivé par défaut"', why: 'L\'IA reconnaît les patterns standards. Le terme exact réduit les allers-retours.' },
          { title: 'Décrivez le contexte métier', example: '❌ "fais-moi un formulaire de paiement"\n✅ "formulaire paiement pour public 50+, priorité confiance et lisibilité"', why: 'Le contexte contraint les choix dans la bonne direction.' },
          { title: 'Spécifiez le design system', example: '❌ "fais-moi une notification"\n✅ "Notification Banner (erreur) — tokens Fondation : couleurs, radius, typo"', why: 'Évite les incohérences visuelles coûteuses en révision.' },
          { title: 'Incluez les contraintes d\'accessibilité', example: '❌ "un champ date"\n✅ "Date Picker — contraste ≥ 4.5:1, navigable clavier, WCAG 2.2 AA"', why: 'L\'accessibilité en amont coûte 10× moins cher qu\'en aval.' },
          { title: 'Demandez tous les états', example: '❌ "un bouton de soumission"\n✅ "Bouton submit — default, hover, loading (spinner), disabled + transitions CSS"', why: 'Les états manquants sont la cause #1 des bugs UX en production.' },
          { title: 'Séparez structure et style', example: 'Prompt 1 : structure HTML sémantique — sans CSS\nPrompt 2 : appliquer le style Tailwind', why: 'Chaque prompt a une seule responsabilité.' },
          { title: 'Utilisez le vocabulaire DS', example: '❌ "texte gris clair"\n✅ "color-base-content/60, 0.8rem, body-secondary de notre DS"', why: 'L\'IA s\'adapte à votre vocabulaire si vous l\'utilisez avec cohérence.' },
          { title: 'Itérez et critiquez votre prompt avec l\'IA', example: 'Demandez à l\'IA d\'identifier ce qui manque dans votre prompt, de le restructurer, ou de brainstormer des variantes.', why: 'L\'IA comme partenaire de réflexion, pas seulement comme outil de génération.' },
        ],
        en: [
          { title: 'Name the component precisely', example: '❌ "some kind of sliding button"\n✅ "a Toggle Switch with disabled state by default"', why: 'AI recognises standard patterns. The exact term cuts back-and-forth.' },
          { title: 'Describe the business context', example: '❌ "make me a payment form"\n✅ "payment form for users 50+, prioritise trust and readability"', why: 'Context steers design choices in the right direction.' },
          { title: 'Specify the design system', example: '❌ "make me a notification"\n✅ "Notification Banner (error) — Foundation tokens: colours, radius, type"', why: 'Prevents visual inconsistencies that waste time in review.' },
          { title: 'Include accessibility constraints', example: '❌ "a date field"\n✅ "Date Picker — contrast ≥ 4.5:1, keyboard nav, WCAG 2.2 AA"', why: 'Accessibility upfront costs 10× less than retrofitting.' },
          { title: 'Ask for all states', example: '❌ "a submit button"\n✅ "Submit button — default, hover, loading (spinner), disabled + CSS transitions"', why: 'Missing states are the #1 cause of UX bugs in production.' },
          { title: 'Separate structure from style', example: 'Prompt 1: semantic HTML — no CSS\nPrompt 2: apply Tailwind style', why: 'Each prompt has a single responsibility.' },
          { title: 'Use DS vocabulary', example: '❌ "small light grey text"\n✅ "color-base-content/60, 0.8rem, body-secondary from our DS"', why: 'AI adapts to your vocabulary if you use it consistently.' },
          { title: 'Iterate and critique your prompt with AI', example: 'Ask AI to identify what\'s missing in your prompt, restructure it, or brainstorm design variations.', why: 'AI as a thinking partner, not just a generation tool.' },
        ],
      },
      aiTools: [
        {
          title: { fr: 'Workflow de génération d\'illustrations app', en: 'App Illustration Generation Workflow' },
          body: {
            fr: `<p>Pipeline en trois outils pour générer et finaliser des illustrations pour l'app mobile (FR/ES).</p>
<h4>Étape 1 — Midjourney (génération principale)</h4>
<p>Générer l'illustration de base. Utiliser <code>--sref</code> pour la référence de style + composition, <code>--cref</code> pour l'extraction de palette couleur uniquement, <code>--cw</code> pour contrôler l'intensité couleur (0–100). Upscaler avant d'exporter (U1–U4).</p>
<p><strong>Idéal pour :</strong></p>
<ul>
  <li>Les concepts simples sans interactions multi-objets complexes</li>
  <li>Ambiance, atmosphère et direction créative</li>
  <li>Besoins d'illustration rapides sans attendre des renders 3D</li>
</ul>
<h4>Étape 2 — Gemini (édition ciblée & itération)</h4>
<p>Importer l'output Midjourney upscalé dans Gemini pour des éditions par instruction : suppression d'objet, changements de couleur, ajustements de style, ajout d'éléments. Évite la régénération complète pour des modifications mineures.</p>
<p><strong>Limites :</strong> fonctionne mieux sur des instructions claires et délimitées. Éviter les changements de composition importants — l'image peut dériver de l'esthétique Midjourney originale.</p>
<h4>Étape 3 — removal.ai (suppression de fond)</h4>
<p>Utiliser removal.ai pour détourage. URL : <a href="https://removal.ai" target="_blank" rel="noopener">removal.ai</a></p>
<h4>Chaîne complète</h4>
<p><strong>Midjourney</strong> (générer + upscaler) → <strong>Gemini</strong> (éditions ciblées) → <strong>removal.ai</strong> (suppression fond) → <strong>Photoshop / Figma</strong> (intégration finale)</p>`,
            en: `<p>Three-tool pipeline for generating and finalising illustrations for the mobile app (FR/ES).</p>
<h4>Step 1 — Midjourney (primary generation)</h4>
<p>Generate the base illustration. Use <code>--sref</code> for style + composition reference, <code>--cref</code> for colour palette extraction only, <code>--cw</code> to control colour influence (0–100). Upscale before exporting (U1–U4).</p>
<p><strong>Best for:</strong></p>
<ul>
  <li>Simple concepts without complex multi-object interactions</li>
  <li>Mood, atmosphere and creative direction</li>
  <li>Quick illustration needs without waiting for 3D renders</li>
</ul>
<h4>Step 2 — Gemini (targeted editing & iteration)</h4>
<p>Import the upscaled Midjourney output into Gemini for instruction-based edits: object removal, colour changes, style adjustments, element additions. Avoids full regeneration for minor changes.</p>
<p><strong>Limits:</strong> works best on clear, contained instructions. Avoid heavy compositional changes — the image may drift from the original Midjourney aesthetic.</p>
<h4>Step 3 — removal.ai (background removal)</h4>
<p>Use removal.ai to strip backgrounds. URL: <a href="https://removal.ai" target="_blank" rel="noopener">removal.ai</a></p>
<h4>Full chain</h4>
<p><strong>Midjourney</strong> (generate + upscale) → <strong>Gemini</strong> (targeted edits) → <strong>removal.ai</strong> (bg removal) → <strong>Photoshop / Figma</strong> (final integration)</p>`,
          },
        },
        {
          title: { fr: 'Figma MCP Console — installation & usages', en: 'Figma MCP Console — setup & use cases' },
          body: {
            fr: `<p>Connecte Claude Desktop directement à Figma via WebSocket pour des opérations automatisées.</p>
<h4>Prérequis</h4>
<ul>
  <li>Node.js 20+ sur <code>/usr/local/bin/node</code></li>
  <li>Figma Desktop installé</li>
  <li>Personal Access Token Figma (<code>figd_...</code>)</li>
</ul>
<h4>Étape 1 — Installation globale</h4>
<pre><code>/usr/local/bin/npm install -g figma-console-mcp@latest</code></pre>
<h4>Étape 2 — Config Claude Desktop</h4>
<p>Fichier : <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></p>
<pre><code>"mcpServers": {
  "figma-console": {
    "command": "/usr/local/bin/node",
    "args": ["/usr/local/lib/node_modules/figma-console-mcp/dist/local.js"],
    "env": { "FIGMA_ACCESS_TOKEN": "figd_VOTRE_TOKEN", "ENABLE_MCP_APPS": "true" }
  }
}</code></pre>
<p>⚠️ Utiliser <code>node</code> directement — <strong>pas npx</strong>.</p>
<h4>Étape 3 — Plugin Desktop Bridge dans Figma</h4>
<p>Dans Figma : <strong>Plugins → Development → Import plugin from manifest</strong></p>
<h4>Étape 4 — Redémarrer Claude Desktop</h4>
<p><code>Cmd+Q</code> puis rouvrir.</p>
<h4>Étape 5 — Lancer le plugin</h4>
<p>Ouvrir fichier Figma → lancer Desktop Bridge → connexion WebSocket auto.</p>
<h4>Usages typiques</h4>
<ul>
  <li>Extraction de tokens</li>
  <li>Tâches répétitives (renommer en masse)</li>
  <li>Audit DS</li>
  <li>Génération structurelle</li>
</ul>`,
            en: `<p>Connects Claude Desktop directly to Figma via WebSocket for automated operations.</p>
<h4>Prerequisites</h4>
<ul>
  <li>Node.js 20+ at <code>/usr/local/bin/node</code></li>
  <li>Figma Desktop installed</li>
  <li>Figma Personal Access Token (<code>figd_...</code>)</li>
</ul>
<h4>Step 1 — Install globally</h4>
<pre><code>/usr/local/bin/npm install -g figma-console-mcp@latest</code></pre>
<h4>Step 2 — Claude Desktop config</h4>
<p>File: <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></p>
<pre><code>"mcpServers": {
  "figma-console": {
    "command": "/usr/local/bin/node",
    "args": ["/usr/local/lib/node_modules/figma-console-mcp/dist/local.js"],
    "env": { "FIGMA_ACCESS_TOKEN": "figd_YOUR_TOKEN", "ENABLE_MCP_APPS": "true" }
  }
}</code></pre>
<p>⚠️ Use <code>node</code> directly — <strong>not npx</strong>.</p>
<h4>Step 3 — Desktop Bridge plugin in Figma</h4>
<p>In Figma: <strong>Plugins → Development → Import plugin from manifest</strong></p>
<h4>Step 4 — Restart Claude Desktop</h4>
<p><code>Cmd+Q</code> then reopen.</p>
<h4>Step 5 — Run the plugin</h4>
<p>Open your Figma file → run Desktop Bridge → auto-connects via WebSocket.</p>
<h4>Typical use cases</h4>
<ul>
  <li>Token extraction</li>
  <li>Bulk renaming tasks</li>
  <li>DS audit</li>
  <li>Structural generation</li>
</ul>`,
          },
        },
      ],
    },

    /* ── Careers accordions ── */
    careers: {
      fr: [
        {
          icon: 'fit',
          summary: 'Suis-je fait pour ce poste ?',
          body: `
            <p style="font-size:0.82rem;color:var(--text-muted);margin:0 0 1rem">Parmi les affirmations ci-dessous, sélectionnez celles que vous croyez <strong>vraies</strong> pour un bon designer UI/UX. Certaines sont des idées reçues — saurez-vous les repérer ?</p>
            <div class="quiz-stmts" id="quiz-fit-fr">
              <button class="quiz-stmt" data-idx="0" onclick="quizToggle(this)">J'aime résoudre des problèmes ouverts — et je suis à l'aise sans connaître la réponse au départ.</button>
              <button class="quiz-stmt" data-idx="1" onclick="quizToggle(this)">Le design UX consiste principalement à rendre les interfaces belles et visuellement attrayantes.</button>
              <button class="quiz-stmt" data-idx="2" onclick="quizToggle(this)">Je suis créatif·ve, mais la créativité est au service de l'utilisateur et des objectifs business — pas de mon ego.</button>
              <button class="quiz-stmt" data-idx="3" onclick="quizToggle(this)">Un bon design est invisible — si les utilisateurs remarquent l'interface, c'est qu'elle a échoué.</button>
              <button class="quiz-stmt" data-idx="4" onclick="quizToggle(this)">Je suis à l'aise avec des données chiffrées : taux de conversion, taux d'abandon, métriques d'engagement.</button>
              <button class="quiz-stmt" data-idx="5" onclick="quizToggle(this)">Le designer UX est responsable de l'implémentation technique des interfaces qu'il conçoit.</button>
              <button class="quiz-stmt" data-idx="6" onclick="quizToggle(this)">Je travaille bien en équipe transversale — marketing, tech, e-commerce, métiers.</button>
              <button class="quiz-stmt" data-idx="7" onclick="quizToggle(this)">Je comprends que le design d'un tunnel d'achat et le design d'une app mobile répondent à des logiques différentes.</button>
              <button class="quiz-stmt" data-idx="8" onclick="quizToggle(this)">Les décisions de design sont principalement fondées sur le goût personnel et l'intuition artistique du designer.</button>
              <button class="quiz-stmt" data-idx="9" onclick="quizToggle(this)">J'adore observer comment les gens utilisent vraiment un produit — pas comment ils disent l'utiliser.</button>
              <button class="quiz-stmt" data-idx="10" onclick="quizToggle(this)">Je suis conscient·e que 70% de la persuasion en design passe par la qualité de la présentation.</button>
              <button class="quiz-stmt" data-idx="11" onclick="quizToggle(this)">Le travail du designer est terminé une fois que la maquette est validée par les parties prenantes.</button>
              <button class="quiz-stmt" data-idx="12" onclick="quizToggle(this)">Je suis bon·ne pour comprendre, organiser et expliquer des systèmes complexes.</button>
              <button class="quiz-stmt" data-idx="13" onclick="quizToggle(this)">Je suis curieux·se sur comment les entreprises gagnent de l'argent — et comment le design y contribue.</button>
              <button class="quiz-stmt" data-idx="14" onclick="quizToggle(this)">J'ai l'œil pour les détails, mais je sais d'abord me concentrer sur la grande idée.</button>
              <button class="quiz-stmt" data-idx="15" onclick="quizToggle(this)">J'apprécie la beauté et l'esthétique, et je comprends qu'une chose peut être belle sans être efficace.</button>
              <button class="quiz-stmt" data-idx="16" onclick="quizToggle(this)">Je justifie mes décisions de design avec des données ou des principes — pas seulement avec mon goût personnel.</button>
              <button class="quiz-stmt" data-idx="17" onclick="quizToggle(this)">Suivre les tendances design actuelles est le meilleur moyen de produire un bon UX.</button>
              <button class="quiz-stmt" data-idx="18" onclick="quizToggle(this)">Je reste résilient·e face aux retours — je les utilise comme information, pas comme une défaite.</button>
              <button class="quiz-stmt" data-idx="19" onclick="quizToggle(this)">J'aime expliquer et transmettre — former des collègues ou des prestataires à des pratiques UX ne m'est pas étranger.</button>
              <button class="quiz-stmt" data-idx="20" onclick="quizToggle(this)">Je pense en systèmes : je ne conçois pas juste un écran, je pense à comment il s'intègre dans un design system cohérent.</button>
              <button class="quiz-stmt" data-idx="21" onclick="quizToggle(this)">Je suis à l'aise pour mener un audit UX en autonomie et formuler des recommandations priorisées.</button>
              <button class="quiz-stmt" data-idx="22" onclick="quizToggle(this)">L'accessibilité n'est pas un "nice to have" pour moi — je la considère comme une exigence de base de tout bon design.</button>
              <button class="quiz-stmt" data-idx="23" onclick="quizToggle(this)">Un grand designer UX travaille seul — trop de collaboration ralentit le processus créatif.</button>
            </div>
            <div style="margin-top:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
              <button class="quiz-reveal-btn" onclick="quizReveal('quiz-fit-fr', 'quiz-legend-fr')">Voir les résultats</button>
              <button class="quiz-reset-btn" onclick="quizReset('quiz-fit-fr', 'quiz-legend-fr')">Recommencer</button>
            </div>
            <div class="quiz-legend" id="quiz-legend-fr" style="display:none"></div>`,
        },
        {
          icon: 'role',
          summary: 'Qu\'est-ce que ce poste UI/UX ?',
          body: `
            <p>Rattaché au Pôle Plateformes (Direction Marketing), vous êtes le garant de l'expérience utilisateur et de la qualité des interfaces sur <strong>toutes les plateformes digitales</strong> — pas seulement l'app mobile.</p>
            <p><strong>Vous définissez le "quoi" et le "comment" côté expérience. La partie développement est assurée par le Product Owner côté DSI.</strong></p>

            <h3>1. Un rôle multi-surfaces</h3>
            <p>Le périmètre couvre des audiences et des logiques très différentes :</p>
            <ul>
              <li><strong>BtoC visiteurs</strong> — site principal, application mobile, billetterie, parcours de planification de visite.</li>
              <li><strong>BtoB & événementiel</strong> — site Congrès, Le Grand Tour, VEL, Panache, BEL. L'utilisateur est un professionnel — densité et efficacité priment sur l'émotion.</li>
              <li><strong>E-commerce</strong> — tunnel d'achat de billets, réservation d'hébergement, click & collect. Chaque étape a un impact direct sur le chiffre d'affaires.</li>
              <li><strong>RH & talents</strong> — portail talent, site RH. Autre audience, autres codes, même exigence de qualité.</li>
            </ul>

            <h3>2. Garant du Design System et de l'accessibilité RGAA</h3>
            <p>Ce rôle est propriétaire du design system du groupe :</p>
            <ul>
              <li><strong>Créer, maintenir et faire évoluer</strong> les composants, guidelines et patterns en lien avec la plateforme de marque.</li>
              <li><strong>Former les équipes internes et prestataires</strong> à l'utilisation du DS — la pédagogie est une compétence clé du poste.</li>
              <li><strong>Garantir la conformité RGAA</strong> (référentiel français d'accessibilité) sur l'ensemble des plateformes.</li>
              <li><strong>Documenter</strong> les bonnes pratiques UX/UI et les processus de conception.</li>
            </ul>

            <h3>3. Un rôle orienté data et CRO</h3>
            <ul>
              <li><strong>Heatmaps & session recordings</strong> (Clarity) — optimisation continue composant par composant.</li>
              <li><strong>Collaboration CRO</strong> — alimenter le backlog d'A/B tests en hypothèses UX avec le Chef de projet CRO.</li>
              <li><strong>Retours utilisateurs</strong> — enquêtes, avis, support — pour identifier les irritants et prioriser les améliorations.</li>
            </ul>

            <h3>4. Référent transverse</h3>
            <p>Le designer travaille au croisement de plusieurs équipes :</p>
            <ul>
              <li><strong>Product Owners / DSI</strong> — expression des besoins fonctionnels, handoff maquettes, recettage visuel</li>
              <li><strong>Pôle Contenus & Influence</strong> — cohérence éditoriale et visuelle</li>
              <li><strong>Infographiste & responsable plateforme de marque</strong> — charte graphique et créations visuelles</li>
              <li><strong>Développeurs</strong> — lien entre bibliothèque de composants et design system</li>
            </ul>

            <div class="callout">Sur ce poste, "faire du design" inclut aussi maintenir un design system, former des équipes, piloter l'accessibilité RGAA et produire des hypothèses CRO — pas seulement dessiner des écrans.</div>

            <h3>Ce que le rôle n'est PAS</h3>
            <ul>
              <li><strong>Pas un rôle de développeur.</strong> L'implémentation technique est assurée par les PO/DSI.</li>
              <li><strong>Pas exclusivement "app".</strong> Une douzaine de plateformes sont dans le périmètre.</li>
              <li><strong>Pas uniquement de l'art.</strong> Les décisions de design doivent être justifiables par des données ou des principes UX.</li>
            </ul>

            <h3>Évolution de carrière sur ce poste</h3>
            <p>Lead UX → Responsable Design → UX Director</p>`,
        },
        {
          icon: 'tools',
          summary: 'Les outils essentiels',
          body: `
            <h3>Design : Figma (impératif)</h3>
            <p>En 2026 Figma est toujours l'outil central du poste. Il couvre toutes les étapes : wireframes, maquettes, prototypes, design system et handoff. C'est aussi son usage collaboratif qui en fait un outil essentiel.</p>

            <h3>Analytique & comportement utilisateur</h3>
            <p>Comprendre les données est aussi important que produire des maquettes :</p>
            <ul>
              <li><strong>Microsoft Clarity</strong> — heatmaps, session recordings, rage clicks. Outil principal mentionné dans la fiche de poste.</li>
              <li><strong>Hotjar</strong> — alternative à Clarity, même usage.</li>
              <li><strong>Google Analytics</strong> — métriques de conversion, funnels, rétention.</li>
              <li><strong>A/B testing (Kameleoon)</strong> — tester deux versions d'un écran ou composant. Collaboration avec le Chef de projet CRO.</li>
            </ul>

            <h3>Accessibilité RGAA</h3>
            <ul>
              <li><strong>Assistant RGAA / Ara</strong> — outils pour auditer la conformité RGAA des pages web.</li>
              <li><strong>Contrast checker (WebAIM)</strong> — vérification des ratios de contraste selon WCAG/RGAA.</li>
              <li><strong>NVDA / VoiceOver</strong> — lecteurs d'écran pour tester la navigation au clavier et à l'aide d'assistance.</li>
            </ul>

            <h3>CMS</h3>
            <ul>
              <li><strong>Drupal</strong> — CMS utilisé en interne, connaissance appréciée dans la fiche de poste.</li>
            </ul>

            <h3>Outils IA à connaître</h3>
            <ul>
              <li><strong>Cursor</strong> — éditeur de code IA, idéal pour le prototypage rapide</li>
              <li><strong>Claude Code</strong> — CLI IA puissant, courbe d'apprentissage plus élevée</li>
              <li><strong>Claude Design</strong> — génération d'interfaces directement depuis Claude, sans code</li>
              <li><strong>Figma Make</strong> — générateur de code 0-to-1 intégré à Figma Pro</li>
              <li><strong>Lovable</strong> — génération d'apps web complètes depuis un prompt, idéal pour valider une idée rapidement</li>
              <li><strong>Bolt</strong> — prototypage IA full-stack, proche de Lovable avec un accès direct au code généré</li>
            </ul>

            <h3>Outils de collaboration</h3>
            <ul>
              <li><strong>Notion</strong> — docs, wikis et gestion de projet</li>
              <li><strong>FigJam</strong> — ateliers, user flows et diagrammes</li>
              <li><strong>GitLab / Jira</strong> — suivi des tickets et sprints</li>
            </ul>

            <div class="callout">Figma est impératif selon la fiche de poste. Adobe XD et Sketch sont mentionnés comme connaissances supplémentaires.</div>`,
        },
        {
          icon: 'checklist',
          summary: 'Checklist de maturité',
          body: `
            <h3>Savoir-faire visuel</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="craft-1"><label for="craft-1">Je peux créer une copie pixel-perfect d'une app ou d'un site dans Figma.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-2"><label for="craft-2">Je comprends et utilise l'auto layout de Figma.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-3"><label for="craft-3">Je peux identifier des designs de haute qualité selon les standards de l'industrie.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-4"><label for="craft-4">Je peux créer une hiérarchie typographique efficace avec une seule police.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-5"><label for="craft-5">Je peux concevoir une page e-commerce responsive depuis zéro (liste produit, fiche détail, panier).</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-6"><label for="craft-6">Je travaille sur la grande idée et la structure avant de toucher aux détails visuels.</label></div>
            </div>
            <h3>Interaction & Systèmes</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="int-1"><label for="int-1">Je peux cartographier un user flow et identifier les points de friction.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-2"><label for="int-2">Je peux créer un prototype cliquable d'un tunnel d'achat dans Figma.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-3"><label for="int-3">Je comprends les différences de patterns entre mobile app, site web et e-commerce.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-4"><label for="int-4">Mes designs couvrent tous les états : défaut, chargement, vide, erreur.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-5"><label for="int-5">Je comprends la différence entre pixels physiques et pixels CSS — et ce que le device pixel ratio (DPR) implique pour l'export d'assets (@2x, @3x, SVG).</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-6"><label for="int-6">Je sais ce que sont les breakpoints et je conçois mes écrans pour au moins 3 tailles : mobile, tablette, desktop.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-7"><label for="int-7">Je pense en "fluid layout" : je définis comment les composants s'étirent, se réorganisent ou disparaissent entre breakpoints — pas seulement ce qu'ils font à un breakpoint fixe.</label></div>
            </div>
            <h3>Handoff & Collaboration dev</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="hoff-1"><label for="hoff-1">Mes fichiers Figma sont nommés, organisés et lisibles par un développeur sans explication orale.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-2"><label for="hoff-2">J'annote les comportements d'interaction : transitions, durées, easing, scroll behaviour — pas seulement les états visuels.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-3"><label for="hoff-3">Je sais rédiger une user story au format "En tant que [utilisateur], je veux [action] afin de [bénéfice]" avec des critères d'acceptance clairs.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-4"><label for="hoff-4">Je peux lire du CSS de base — box model, flexbox, unités rem/px — pour parler le même langage que les développeurs.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-5"><label for="hoff-5">Je prépare un brief de livraison : ce qui change, ce qui est nouveau, les cas limites à ne pas manquer.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-6"><label for="hoff-6">Je participe aux reviews techniques pour vérifier que l'implémentation correspond aux specs — et je sais comment négocier les écarts.</label></div>
            </div>
            <h3>Accessibilité</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="a11y-1"><label for="a11y-1">Je vérifie le contraste de mes textes et composants (ratio ≥ 4.5:1 pour le texte courant, ≥ 3:1 pour les grands titres et les composants UI).</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-2"><label for="a11y-2">Mes zones cliquables font au minimum 44×44 px sur mobile.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-3"><label for="a11y-3">Je ne transmets jamais une information uniquement par la couleur — je l'accompagne d'un texte, d'une icône ou d'une forme.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-4"><label for="a11y-4">Je fournis des labels et descriptions alt-text pour les images et icônes dans mes specs de handoff.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-5"><label for="a11y-5">Je connais les niveaux WCAG A, AA et AAA — et je sais que le RGAA est le référentiel légal français qui s'applique directement à ce poste.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-6"><label for="a11y-6">Je peux mener un audit RGAA basique : identifier les critères non conformes, les documenter et formuler des recommandations correctrices.</label></div>
            </div>
            <h3>Marketing & Conversion</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="mkt-1"><label for="mkt-1">Je comprends la différence entre une page orientée conversion et une page orientée information.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-2"><label for="mkt-2">Je sais ce qu'est un A/B test et comment formuler une hypothèse testable.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-3"><label for="mkt-3">Je peux lire une heatmap ou un funnel analytics et identifier ce qui bloque les utilisateurs.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-4"><label for="mkt-4">Je comprends les principes de persuasion qui s'appliquent aux CTA, prix ancrés, urgence et preuve sociale.</label></div>
            </div>
            <h3>Process & Communication</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="proc-1"><label for="proc-1">Je suis à l'aise pour critiquer une interface et expliquer mon raisonnement avec des données ou des principes.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-2"><label for="proc-2">Je sais écrire de bonnes questions et conduire un entretien utilisateur.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-3"><label for="proc-3">Je peux expliquer le contexte business derrière chaque projet — pas seulement les exigences UI.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-4"><label for="proc-4">J'ai livré quelque chose — même un projet personnel, freelance ou scolaire.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-5"><label for="proc-5">Mon but actuel est de grandir, pas de défendre ce que je sais déjà faire.</label></div>
            </div>
            <h3>Prototypage IA & lecture de code</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="ai-1"><label for="ai-1">J'ai utilisé un outil de génération IA (Figma Make, v0, Cursor, Bolt) pour produire un prototype ou une interface fonctionnelle.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-2"><label for="ai-2">Je sais lire l'arborescence de composants générée par l'IA — et repérer ce qui est trop générique ou incohérent avec le design system.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-3"><label for="ai-3">Je comprends les bases du styling généré : classes CSS, variables, structure flex/grid — pas pour coder, mais pour évaluer et corriger l'output.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-4"><label for="ai-4">Je sais écrire un prompt de génération d'interface efficace : nommer les composants DS, décrire les états, préciser le contexte métier.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-5"><label for="ai-5">Je suis capable de faire la part entre ce que l'IA a bien généré et ce qui nécessite une correction humaine — et je ne valide pas aveuglément l'output.</label></div>
            </div>`,
        },
        {
          icon: 'influence',
          summary: 'Influence & persuasion — la compétence invisible',
          body: `
            <p>Votre succès en tant que designer dépend autant de vos relations que de votre talent créatif. Les personnes clés dont vous avez besoin comme alliés — décideurs, managers, parties prenantes — ne savent probablement rien du design. </p>
            <div class="callout">Un design brillant qui n'est jamais livré ne change rien. La qualité de votre travail se mesure aussi à votre capacité à le faire exister dans le monde réel.</div>
            <h3>Pourquoi c'est aussi important que votre craft</h3>
            <ul>
              <li><strong>Vos idées n'ont de valeur que si elles sont construites.</strong> Les concepts les plus ambitieux meurent dans Figma si personne n'est convaincu de les réaliser.</li>
              <li><strong>Les décideurs raisonnent en business, pas en UX.</strong> Traduire vos décisions de design en arguments de valeur business est une compétence à part entière.</li>
              <li><strong>La persuasion n'est pas de la manipulation.</strong> C'est savoir raconter le bon problème, à la bonne personne, avec les bons arguments — et écouter autant que parler.</li>
            </ul>
            <h3>Comment développer cette compétence</h3>
            <ul>
              <li>Présentez votre travail en commençant par le contexte business — pas par l'UI.</li>
              <li>Apprenez à formuler des hypothèses mesurables : "Si on améliore ce tunnel, on devrait réduire le taux d'abandon".</li>
              <li>Observez comment les décisions se prennent dans votre organisation — et positionnez-vous au bon moment, pas après.</li>
              <li>Cultivez des relations en dehors des réunions formelles. La confiance se construit dans les couloirs.</li>
            </ul>`,
        },
        {
          icon: 'ai',
          summary: 'Travailler avec l\'IA',
          body: `
            <p>L'IA accélère clairement certaines parties du travail. Mais elle ne remplace pas le travail AUTOUR du design : comprendre les besoins des parties prenantes, maîtriser le contexte de marque, et présenter des décisions de design de façon convaincante.</p>

            <h3>Ce que l'IA fait bien — et ce que vous devez toujours faire</h3>
            <div class="ai-layer-table">
              <div class="ai-layer-header">
                <div class="ai-layer-col ai-layer-col--layer">Couche</div>
                <div class="ai-layer-col">L'IA fait bien</div>
                <div class="ai-layer-col">Le designer doit toujours faire</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Génération</div>
                <div class="ai-layer-col">Produire rapidement de nombreuses variations plausibles</div>
                <div class="ai-layer-col">Décider quelle direction est pertinente</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Reconnaissance de patterns</div>
                <div class="ai-layer-col">Recombiner des structures et formulations courantes</div>
                <div class="ai-layer-col">Repérer ce qui est trop générique pour cette situation</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Optimisation</div>
                <div class="ai-layer-col">S'améliorer vers un objectif défini</div>
                <div class="ai-layer-col">Décider si l'objectif lui-même est le bon</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Mise à l'échelle</div>
                <div class="ai-layer-col">Décliner une idée en de nombreux assets</div>
                <div class="ai-layer-col">Porter le vrai contexte, les enjeux et les conséquences</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Handoff &amp; documentation</div>
                <div class="ai-layer-col">Rédiger des annotations, résumer des specs, structurer la documentation de composants</div>
                <div class="ai-layer-col">Penser en système pour que le design connecte avec le développement</div>
              </div>
            </div>

            <h3>Ce que ça change concrètement</h3>
            <ul>
              <li><strong>Le temps gagné n'est pas du temps libre.</strong> Il doit aller vers la compréhension approfondie du contexte, la recherche utilisateur, et la qualité de présentation.</li>
              <li><strong>Le goût devient plus critique, pas moins.</strong> Quand l'IA peut générer cent variantes, savoir laquelle choisir — et pourquoi — est la vraie compétence.</li>
              <li><strong>Présenter reste votre responsabilité.</strong> L'IA ne défend pas votre choix en réunion. Elle ne connaît pas les parties prenantes, leurs inquiétudes, ou l'historique du projet.</li>
              <li><strong>Le handoff gagne en clarté.</strong> La documentation et les annotations ont toujours été la partie la plus chronophage du travail. L'IA peut générer les specs, résumer les comportements et structurer la doc de composants — c'est l'opportunité de livrer plus vite et plus clairement aux développeurs.</li>
            </ul>
            <div style="margin-top:1rem">
              <button class="careers-inline-link" onclick="showSection('prompting', true)">→ Voir la section Prompting Design</button>
            </div>`,
        },
        {
          icon: 'critique',
          summary: 'Entretiens — La critique d\'app',
          body: `
            <p>La critique d'app est un format d'entretien courant. Vous devez analyser une app choisie par vous ou l'interviewer.</p>
            <div class="callout">Le principe le plus important : focalisez-vous sur le <strong>pourquoi</strong>. Évitez les jugements subjectifs sans raison objective.</div>
            <h3>Ce que l'on évalue</h3>
            <ul>
              <li><strong>Pensée produit</strong> — comprenez-vous la stratégie derrière l'app ?</li>
              <li><strong>Attention aux détails</strong> — identifiez-vous les inconsistances visuelles ?</li>
              <li><strong>Communication</strong> — exprimez-vous vos idées clairement et de façon constructive ?</li>
            </ul>
            <h3>Framework en 3 étapes</h3>
            <ol style="padding-left:1.25rem;font-size:0.84rem;color:var(--text-muted);line-height:1.8;">
              <li><strong>Contexte</strong> — quel problème l'app résout-elle ? Pour qui ?</li>
              <li><strong>Choisissez un flux</strong> — parcourez-le en commentant les bons ET mauvais aspects</li>
              <li><strong>Temps restant</strong> — second flux ou analyse du design system de l'app</li>
            </ol>`,
        },
        {
          icon: 'whiteboard',
          summary: 'Entretiens — Le whiteboard challenge',
          body: `
            <p>On vous donne un problème et du temps pour le résoudre sur tableau blanc ou FigJam.</p>
            <div class="callout">L'interviewer ne cherche PAS des maquettes en haute fidélité. Il évalue votre processus de pensée.</div>
            <h3>Framework en 7 étapes</h3>
            <ol style="padding-left:1.25rem;font-size:0.84rem;color:var(--text-muted);line-height:1.9;">
              <li><strong>Écrivez un plan</strong> — structurez votre approche avant de commencer</li>
              <li><strong>Définissez l'objectif</strong> — à quoi ressemble le résultat attendu ?</li>
              <li><strong>Gagnez du contexte</strong> — posez des questions sur le problème, le produit, les utilisateurs</li>
              <li><strong>Définissez le problème</strong> — précisez ou choisissez un sous-problème si nécessaire</li>
              <li><strong>Idéez (divergez)</strong> — brainstorm de solutions, user flows</li>
              <li><strong>Concluez (convergez)</strong> — choisissez les meilleures idées, esquissez les wireframes</li>
              <li><strong>Réfléchissez</strong> — comment évaluer la solution ? Quoi faire ensuite ?</li>
            </ol>
            <p style="margin-top:0.5rem;"><strong>Pensez à voix haute tout au long de l'exercice.</strong></p>`,
        },
        /* HIDDEN — à réactiver si besoin
        {
          icon: 'company',
          summary: 'Quelle taille d\'entreprise me correspond ?',
          body: `
            <p>Si vous avez le choix, rejoignez une entreprise avec une équipe design établie. Optimisez pour l'apprentissage et le réseau.</p>
            <table class="company-table">
              <thead><tr><th>Taille</th><th>Designers</th><th>Mentorat</th><th>Progression</th></tr></thead>
              <tbody>
                <tr><td><strong>Founding team</strong></td><td>0</td><td>Aucun</td><td>Compétences variées, combat uphill</td></tr>
                <tr><td><strong>Petit startup</strong></td><td>1–5</td><td>Design lead informel</td><td>Impact fort, charge élevée</td></tr>
                <tr><td><strong>Mid-size</strong></td><td>5–50</td><td>Lead + pairs</td><td>Bonne autonomie, ambiguïté de carrière</td></tr>
                <tr><td><strong>Grande entreprise</strong></td><td>100+</td><td>Programmes structurés</td><td>Chemin clair, moins d'autonomie</td></tr>
              </tbody>
            </table>
            <div class="callout">Pour un premier rôle junior, les entreprises mid-size et grandes offrent les meilleures conditions d'apprentissage.</div>`,
        },
        {
          icon: 'learning',
          summary: 'Principes d\'apprentissage',
          body: `
            <h3>1. Pratiquez chaque jour</h3>
            <p>Comme une langue ou un instrument. Planifiez 30 minutes minimum par jour : Figma, side project, tutoriel YouTube.</p>
            <h3>2. Obtenez des retours de qualité</h3>
            <p>Les feedbacks sont le moyen le plus rapide de progresser. Trouvez une communauté de pairs, un mentor dédié, ou des utilisateurs réels.</p>
            <h3>3. Comprenez le pourquoi</h3>
            <p>Avant de passer à un nouveau sujet, expliquez-le à quelqu'un d'autre. Demandez-vous toujours "pourquoi ce pattern ?" "pourquoi cette décision de layout ?"</p>
            <h3>4. Ne prenez pas de raccourcis</h3>
            <p>Créez wireframes, maquettes, composants et artifacts from scratch. Les templates ne sont utiles qu'une fois les fondamentaux acquis.</p>
            <h3>5. Évitez le cycle de recherche de conseils</h3>
            <p>Focalisez sur l'amélioration de votre travail d'abord, puis trouvez 1–2 personnes de confiance pour vous guider.</p>
            <div class="callout">Commencez avant de vous sentir prêt. C'est le conseil le plus important de cette page.</div>`,
        },
        {
          icon: 'roles',
          summary: 'Rôles alternatifs à considérer',
          body: `
            <h3>Brand / Marketing Designer</h3>
            <p>Travaille sur l'identité visuelle, les campagnes et les sites marketing. Bon choix si vous voulez un focus visuel fort.</p>
            <h3>User Researcher</h3>
            <p>Planifie et conduit des études pour comprendre l'audience. Idéal si vous n'êtes pas attiré par le design visuel mais aimez la recherche.</p>
            <h3>Product Manager</h3>
            <p>Responsable de la stratégie, roadmap et succès du produit. Si vous aimez la stratégie produit mais pas la narration visuelle.</p>
            <h3>Design Engineer</h3>
            <p>Rôle hybride en pleine croissance — fortes compétences visuelles + engineering frontend. Conçoit ET construit des systèmes visuels.</p>
            <h3>Software Engineer</h3>
            <p>Construit le produit. Résolution de problèmes plus logique et systématique. Idéal si vous aimez construire des choses et les faire fonctionner.</p>`,
        },
        */
      ],
      en: [
        {
          icon: 'fit',
          summary: 'Is this role right for me?',
          body: `
            <p style="font-size:0.82rem;color:var(--text-muted);margin:0 0 1rem">From the statements below, select the ones you believe are <strong>true</strong> for a good UI/UX designer. Some are common misconceptions — can you spot them?</p>
            <div class="quiz-stmts" id="quiz-fit-en">
              <button class="quiz-stmt" data-idx="0" onclick="quizToggle(this)">I enjoy tackling open-ended problems — and I'm comfortable starting without knowing the answer.</button>
              <button class="quiz-stmt" data-idx="1" onclick="quizToggle(this)">UX design is mainly about making interfaces beautiful and visually attractive.</button>
              <button class="quiz-stmt" data-idx="2" onclick="quizToggle(this)">I'm creative, but creativity is in service of the user and business goals — not my ego.</button>
              <button class="quiz-stmt" data-idx="3" onclick="quizToggle(this)">Good design is invisible — if users notice the interface, it has failed.</button>
              <button class="quiz-stmt" data-idx="4" onclick="quizToggle(this)">I'm comfortable with numbers: conversion rates, drop-off rates, engagement metrics.</button>
              <button class="quiz-stmt" data-idx="5" onclick="quizToggle(this)">The UX designer is responsible for the technical implementation of the interfaces they design.</button>
              <button class="quiz-stmt" data-idx="6" onclick="quizToggle(this)">I work well in cross-functional teams — marketing, tech, e-commerce, business units.</button>
              <button class="quiz-stmt" data-idx="7" onclick="quizToggle(this)">I understand that designing a purchase funnel and designing a mobile app follow different logics.</button>
              <button class="quiz-stmt" data-idx="8" onclick="quizToggle(this)">Design decisions are primarily based on the designer's personal taste and artistic intuition.</button>
              <button class="quiz-stmt" data-idx="9" onclick="quizToggle(this)">I love observing how people actually use a product — not just how they say they use it.</button>
              <button class="quiz-stmt" data-idx="10" onclick="quizToggle(this)">I'm aware that 70% of design persuasion is presentation quality.</button>
              <button class="quiz-stmt" data-idx="11" onclick="quizToggle(this)">A designer's job is done once the mockup is signed off by stakeholders.</button>
              <button class="quiz-stmt" data-idx="12" onclick="quizToggle(this)">I'm good at understanding, organising and explaining complex systems.</button>
              <button class="quiz-stmt" data-idx="13" onclick="quizToggle(this)">I'm curious about how companies make money — and how design contributes to that.</button>
              <button class="quiz-stmt" data-idx="14" onclick="quizToggle(this)">I have an eye for detail, but I know to focus on the big idea first.</button>
              <button class="quiz-stmt" data-idx="15" onclick="quizToggle(this)">I appreciate beauty and aesthetics, and I understand something can look good without being effective.</button>
              <button class="quiz-stmt" data-idx="16" onclick="quizToggle(this)">I justify my design decisions with data or principles — not just personal taste.</button>
              <button class="quiz-stmt" data-idx="17" onclick="quizToggle(this)">Following current design trends is the best way to produce good UX.</button>
              <button class="quiz-stmt" data-idx="18" onclick="quizToggle(this)">I stay resilient when receiving feedback — I use it as information, not as a defeat.</button>
              <button class="quiz-stmt" data-idx="19" onclick="quizToggle(this)">I enjoy teaching and sharing knowledge — training colleagues or agencies on UX practices feels natural to me.</button>
              <button class="quiz-stmt" data-idx="20" onclick="quizToggle(this)">I think in systems: I don't just design a screen, I think about how it fits into a coherent design system.</button>
              <button class="quiz-stmt" data-idx="21" onclick="quizToggle(this)">I'm comfortable running a UX audit autonomously and producing prioritised recommendations.</button>
              <button class="quiz-stmt" data-idx="22" onclick="quizToggle(this)">Accessibility isn't a "nice to have" for me — I treat it as a baseline requirement of any good design.</button>
              <button class="quiz-stmt" data-idx="23" onclick="quizToggle(this)">A great UX designer works alone — too much collaboration slows down the creative process.</button>
            </div>
            <div style="margin-top:1.25rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
              <button class="quiz-reveal-btn" onclick="quizReveal('quiz-fit-en', 'quiz-legend-en')">See results</button>
              <button class="quiz-reset-btn" onclick="quizReset('quiz-fit-en', 'quiz-legend-en')">Try again</button>
            </div>
            <div class="quiz-legend" id="quiz-legend-en" style="display:none"></div>`,
        },
        {
          icon: 'role',
          summary: 'What is the UI/UX role here?',
          body: `
            <p>Reporting to the Platforms division (Marketing Department), you are the guardian of user experience and interface quality across <strong>all of the group's digital platforms</strong> — not just the mobile app.</p>
            <p><strong>You define the "what" and the "how" on the experience side. Development and technical implementation is handled by the Product Owner on the IT side.</strong></p>

            <h3>1. A multi-surface role</h3>
            <p>The scope covers very different audiences and logics:</p>
            <ul>
              <li><strong>BtoC visitors</strong> — main website, mobile app, ticketing, visit planning journeys.</li>
              <li><strong>BtoB & events</strong> — Congrès site, Le Grand Tour, VEL, Panache, BEL. The user is a professional — density and efficiency matter more than emotion.</li>
              <li><strong>E-commerce</strong> — ticket purchase funnel, accommodation booking, click & collect. Every step has a direct revenue impact.</li>
              <li><strong>HR & talent</strong> — talent portal, HR site. Different audience, different codes, same quality standard.</li>
            </ul>

            <h3>2. Design System owner and RGAA accessibility lead</h3>
            <p>This role owns the group's design system:</p>
            <ul>
              <li><strong>Create, maintain and evolve</strong> components, guidelines and patterns in line with the brand platform.</li>
              <li><strong>Train internal teams and agencies</strong> — pedagogy and evangelisation are core competencies for this role.</li>
              <li><strong>Guarantee RGAA compliance</strong> (French accessibility standard) across all platforms.</li>
              <li><strong>Document</strong> UX/UI best practices and design processes.</li>
            </ul>

            <h3>3. Data-driven and CRO-oriented</h3>
            <ul>
              <li><strong>Heatmaps & session recordings</strong> (Clarity) — continuous optimisation component by component.</li>
              <li><strong>CRO collaboration</strong> — feed the A/B test backlog with UX hypotheses alongside the CRO Project Manager.</li>
              <li><strong>User feedback</strong> — surveys, reviews, support — to identify friction points and prioritise improvements.</li>
            </ul>

            <h3>4. Cross-functional reference</h3>
            <p>The designer works at the intersection of several teams:</p>
            <ul>
              <li><strong>Product Owners / IT</strong> — functional requirements, mockup handoff, visual QA</li>
              <li><strong>Content & Influence team</strong> — editorial and visual consistency</li>
              <li><strong>Graphic designer & brand platform manager</strong> — visual identity and creative assets</li>
              <li><strong>Developers</strong> — bridging component library and design system</li>
            </ul>

            <div class="callout">On this role, "doing design" also includes maintaining a design system, training teams, steering RGAA compliance and producing CRO hypotheses — not just designing screens.</div>

            <h3>What this role is NOT</h3>
            <ul>
              <li><strong>Not a developer role.</strong> Technical implementation is handled by POs and the IT department.</li>
              <li><strong>Not exclusively "app".</strong> Around a dozen platforms are in scope.</li>
              <li><strong>Not just art.</strong> Design decisions must be justifiable by data or UX principles.</li>
            </ul>

            <h3>Career progression</h3>
            <p>Lead UX → Design Manager → UX Director</p>`,
        },

        {
          icon: 'tools',
          summary: 'Essential tools',
          body: `
            <h3>Design: Figma (mandatory)</h3>
            <p>Figma is the central tool for this role. It covers every stage: wireframes, mockups, prototypes, design system, handoff. Mastery of Figma — including variables, auto layout and components — is non-negotiable.</p>

            <h3>Analytics & user behaviour</h3>
            <p>Understanding data is as important as producing mockups:</p>
            <ul>
              <li><strong>Microsoft Clarity</strong> — heatmaps, session recordings, rage clicks. Primary tool mentioned in the job description.</li>
              <li><strong>Hotjar</strong> — alternative to Clarity, same use cases.</li>
              <li><strong>Google Analytics</strong> — conversion metrics, funnels, retention.</li>
              <li><strong>A/B testing (Kameleoon)</strong> — test two versions of a screen or component. Collaboration with the CRO Project Manager.</li>
            </ul>

            <h3>Accessibility — RGAA</h3>
            <ul>
              <li><strong>Ara / RGAA Assistant</strong> — DINUM audit tool for checking RGAA compliance on web pages.</li>
              <li><strong>Contrast checker (WebAIM)</strong> — verify colour contrast ratios against WCAG/RGAA.</li>
              <li><strong>NVDA / VoiceOver</strong> — screen readers for testing keyboard and assistive technology navigation.</li>
            </ul>

            <h3>CMS</h3>
            <ul>
              <li><strong>Drupal</strong> — CMS used internally, knowledge appreciated per the job description.</li>
            </ul>

            <h3>AI tools to know</h3>
            <ul>
              <li><strong>Cursor</strong> — AI-powered code editor, great for rapid prototyping</li>
              <li><strong>Claude Code</strong> — powerful AI CLI, higher learning curve</li>
              <li><strong>Claude Design</strong> — interface generation directly from Claude, no code required</li>
              <li><strong>Figma Make</strong> — 0-to-1 code generator built into Figma Pro</li>
              <li><strong>Lovable</strong> — full web app generation from a prompt, ideal for quickly validating an idea</li>
              <li><strong>Bolt</strong> — full-stack AI prototyping, similar to Lovable with direct access to the generated code</li>
            </ul>

            <h3>Collaboration tools</h3>
            <ul>
              <li><strong>Notion</strong> — docs, wikis and project management</li>
              <li><strong>FigJam</strong> — workshops, user flows and diagrams</li>
              <li><strong>GitLab / Jira</strong> — ticket and sprint tracking</li>
            </ul>

            <div class="callout">Figma is mandatory per the job description. Adobe XD and Sketch are listed as additional knowledge — but Figma takes precedence over everything.</div>`,
        },
        {
          icon: 'checklist',
          summary: 'Readiness checklist',
          body: `
            <h3>Craft — Visual skills</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="craft-1"><label for="craft-1">I can create a pixel-perfect copy of an app or site in Figma.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-2"><label for="craft-2">I understand and use Figma's auto layout feature.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-3"><label for="craft-3">I can identify designs considered high quality by industry standards.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-4"><label for="craft-4">I can create an effective type hierarchy with a single typeface.</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-5"><label for="craft-5">I can design a responsive e-commerce page from scratch (product list, detail page, cart).</label></div>
              <div class="checklist-item"><input type="checkbox" id="craft-6"><label for="craft-6">I work on the big idea and structure before touching visual details.</label></div>
            </div>
            <h3>Interaction & Systems</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="int-1"><label for="int-1">I can map a user flow and identify points of friction.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-2"><label for="int-2">I can create a click-through prototype of a purchase funnel in Figma.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-3"><label for="int-3">I understand the differences in patterns between mobile app, website and e-commerce.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-4"><label for="int-4">My designs cover all states: default, loading, empty, error.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-5"><label for="int-5">I understand the difference between device pixels and CSS pixels — and what the device pixel ratio (DPR) means for asset export (@2x, @3x, SVG).</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-6"><label for="int-6">I know what the standard breakpoints are and design for at least 3 sizes: mobile, tablet, desktop.</label></div>
              <div class="checklist-item"><input type="checkbox" id="int-7"><label for="int-7">I think in fluid layouts: I define how components stretch, reflow or disappear between breakpoints — not just what they look like at a fixed width.</label></div>
            </div>
            <h3>Handoff & Dev Collaboration</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="hoff-1"><label for="hoff-1">My Figma files are named, organised and readable by a developer without verbal explanation.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-2"><label for="hoff-2">I annotate interaction behaviour: transitions, durations, easing, scroll behaviour — not just visual states.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-3"><label for="hoff-3">I can write a user story in the format "As a [user], I want [action] so that [benefit]" with clear acceptance criteria.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-4"><label for="hoff-4">I can read basic CSS — box model, flexbox, rem/px units — to speak the same language as developers.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-5"><label for="hoff-5">I prepare a delivery brief: what changed, what's new, edge cases not to miss.</label></div>
              <div class="checklist-item"><input type="checkbox" id="hoff-6"><label for="hoff-6">I attend dev reviews to check implementation matches specs — and I know how to negotiate deviations.</label></div>
            </div>
            <h3>Accessibility</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="a11y-1"><label for="a11y-1">I check colour contrast on text and components (≥ 4.5:1 for body text, ≥ 3:1 for large headings and UI components).</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-2"><label for="a11y-2">My tap targets are at least 44×44 px on mobile.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-3"><label for="a11y-3">I never convey information through colour alone — I always pair it with text, an icon, or a shape.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-4"><label for="a11y-4">I provide labels and alt-text descriptions for images and icons in my handoff specs.</label></div>
              <div class="checklist-item"><input type="checkbox" id="a11y-5"><label for="a11y-5">I know WCAG levels A, AA and AAA — and that AA is the minimum legal standard in Europe.</label></div>
            </div>
            <h3>Marketing & Conversion</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="mkt-1"><label for="mkt-1">I understand the difference between a conversion-oriented page and an information-oriented page.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-2"><label for="mkt-2">I know what an A/B test is and how to formulate a testable hypothesis.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-3"><label for="mkt-3">I can read a heatmap or analytics funnel and identify what's blocking users.</label></div>
              <div class="checklist-item"><input type="checkbox" id="mkt-4"><label for="mkt-4">I understand persuasion principles applied to CTAs, anchored pricing, urgency and social proof.</label></div>
            </div>
            <h3>Process & Communication</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="proc-1"><label for="proc-1">I'm comfortable doing an interface critique and explaining my reasoning with data or principles.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-2"><label for="proc-2">I know how to write good questions and conduct a user interview.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-3"><label for="proc-3">I can explain the business context behind any project — not just the UI requirements.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-4"><label for="proc-4">I have shipped something — even a personal project, freelance work or school project.</label></div>
              <div class="checklist-item"><input type="checkbox" id="proc-5"><label for="proc-5">My goal right now is to grow, not to defend what I already know.</label></div>
            </div>
            <h3>AI prototyping & reading code output</h3>
            <div class="careers-checklist">
              <div class="checklist-item"><input type="checkbox" id="ai-1"><label for="ai-1">I have used an AI generation tool (Figma Make, v0, Cursor, Bolt) to produce a working prototype or interface.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-2"><label for="ai-2">I can read the component tree generated by AI — and spot what is too generic or inconsistent with the design system.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-3"><label for="ai-3">I understand the basics of generated styling: CSS classes, variables, flex/grid structure — not to code, but to evaluate and correct the output.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-4"><label for="ai-4">I can write an effective interface generation prompt: naming DS components, describing states, specifying business context.</label></div>
              <div class="checklist-item"><input type="checkbox" id="ai-5"><label for="ai-5">I can distinguish what the AI got right from what needs human correction — I don't blindly approve the output.</label></div>
            </div>`,
        },
        {
          icon: 'influence',
          summary: 'Influence & persuasion — the invisible skill',
          body: `
            <p>Your success as a designer depends equally on your relationships as it does on your design talent. The key people you need as allies — decision-makers, managers, stakeholders — will likely know nothing about design. <strong>You will have to charm and teach them.</strong></p>
            <div class="callout">A brilliant design that never ships changes nothing. The value of your work is also measured by your ability to get it built and released into the real world.</div>
            <h3>Why this matters as much as your craft</h3>
            <ul>
              <li><strong>Your ideas only have value if they get built.</strong> The most ambitious concepts die in slide decks if no one is convinced to execute them.</li>
              <li><strong>Decision-makers think in business terms, not UX terms.</strong> Translating your design decisions into business value arguments is a skill in its own right.</li>
              <li><strong>Persuasion is not manipulation.</strong> It's knowing how to frame the right problem for the right person with the right argument — and listening as much as you speak.</li>
            </ul>
            <h3>How to develop this skill</h3>
            <ul>
              <li>Lead presentations with business context — not with the UI.</li>
              <li>Learn to frame measurable hypotheses: "If we improve this funnel, we should reduce drop-off by X%."</li>
              <li>Observe how decisions get made in your organisation — and position yourself at the right moment, not after the fact.</li>
              <li>Build relationships outside of formal meetings. Trust is built in the hallways.</li>
            </ul>`,
        },
        {
          icon: 'ai',
          summary: 'Working with AI',
          body: `
            <p>AI clearly speeds up parts of the work. But it doesn't replace what makes a designer valuable: understanding stakeholder needs, knowing the brand context, and presenting design decisions convincingly.</p>

            <div class="callout">The system can generate options. It cannot supply ownership.</div>

            <h3>What AI does well — and what you still need to do</h3>
            <div class="ai-layer-table">
              <div class="ai-layer-header">
                <div class="ai-layer-col ai-layer-col--layer">Layer</div>
                <div class="ai-layer-col">AI and LLMs do well</div>
                <div class="ai-layer-col">Humans still need to do</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Generation</div>
                <div class="ai-layer-col">Produce many plausible variations quickly</div>
                <div class="ai-layer-col">Decide which direction matters</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Pattern matching</div>
                <div class="ai-layer-col">Recombine common structures and phrasing</div>
                <div class="ai-layer-col">Spot what is too generic for this situation</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Optimization</div>
                <div class="ai-layer-col">Improve toward a stated target</div>
                <div class="ai-layer-col">Decide whether the target itself is right</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Scaling</div>
                <div class="ai-layer-col">Turn one idea into many assets</div>
                <div class="ai-layer-col">Carry the real context, stakes, and consequences</div>
              </div>
              <div class="ai-layer-row">
                <div class="ai-layer-col ai-layer-col--layer">Handoff &amp; documentation</div>
                <div class="ai-layer-col">Write annotations, summarise specs, structure component documentation</div>
                <div class="ai-layer-col">Think in systems so design connects with development</div>
              </div>
            </div>

            <h3>What this means in practice</h3>
            <ul>
              <li><strong>Time saved is not free time.</strong> It should go toward deeper context understanding, user research, and presentation quality.</li>
              <li><strong>Taste becomes more critical, not less.</strong> When AI can generate a hundred variants, knowing which one to pick — and why — is the real skill.</li>
              <li><strong>Presenting is still your responsibility.</strong> AI doesn't defend your choice in a meeting. It doesn't know your stakeholders, their concerns, or the project history.</li>
              <li><strong>Handoff gets clearer.</strong> Documentation and annotations have always been the most time-consuming part of the job. AI can generate specs, summarise behaviours and structure component docs — this is the opportunity to deliver faster and with more precision to developers.</li>
            </ul>
            <div style="margin-top:1rem">
              <button class="careers-inline-link" onclick="showSection('prompting', true)">→ Go to the Prompting Design section</button>
            </div>`,
        },
        {
          icon: 'critique',
          summary: 'Interviews — The app critique',
          body: `
            <p>The app critique is a common interview format. You analyse an app chosen by you or the interviewer.</p>
            <div class="callout">The most important principle: focus on the <strong>why</strong>. Avoid subjective statements without an objective reason.</div>
            <h3>What interviewers assess</h3>
            <ul>
              <li><strong>Product thinking</strong> — do you understand the strategy behind the app?</li>
              <li><strong>Attention to detail</strong> — can you spot visual inconsistencies?</li>
              <li><strong>Communication</strong> — do you express your ideas clearly and constructively?</li>
            </ul>
            <h3>3-step framework</h3>
            <ol style="padding-left:1.25rem;font-size:0.84rem;color:var(--text-muted);line-height:1.8;">
              <li><strong>Context</strong> — what problem does the app solve? For whom?</li>
              <li><strong>Choose a flow</strong> — walk through it commenting on both good and bad aspects</li>
              <li><strong>Remaining time</strong> — a second flow or a design system analysis</li>
            </ol>`,
        },
        {
          icon: 'whiteboard',
          summary: 'Interviews — The whiteboard challenge',
          body: `
            <p>You're given a problem and time to solve it on a whiteboard or in FigJam.</p>
            <div class="callout">Interviewers are NOT looking for high-fidelity designs. They're evaluating your thinking process.</div>
            <h3>7-step framework</h3>
            <ol style="padding-left:1.25rem;font-size:0.84rem;color:var(--text-muted);line-height:1.9;">
              <li><strong>Write a plan</strong> — outline your approach before starting</li>
              <li><strong>Set a goal</strong> — what should the outcome look like?</li>
              <li><strong>Gain context</strong> — ask questions about the problem, product, and users</li>
              <li><strong>Define the problem</strong> — narrow it down if needed</li>
              <li><strong>Ideate (diverge)</strong> — brainstorm solutions, user flows</li>
              <li><strong>Design (converge)</strong> — pick the best ideas, sketch wireframes</li>
              <li><strong>Reflect</strong> — how would you evaluate your solution? What next?</li>
            </ol>
            <p style="margin-top:0.5rem;"><strong>Think out loud throughout the exercise.</strong></p>`,
        },
        /* HIDDEN — re-enable if needed
        {
          icon: 'company',
          summary: 'What company size suits me?',
          body: `
            <p>If you have the choice, join a company with an established design team. Optimise for learning and network building.</p>
            <table class="company-table">
              <thead><tr><th>Size</th><th>Designers</th><th>Mentorship</th><th>Growth</th></tr></thead>
              <tbody>
                <tr><td><strong>Founding team</strong></td><td>0</td><td>None</td><td>Broad skills, uphill battle</td></tr>
                <tr><td><strong>Small startup</strong></td><td>1–5</td><td>Informal design lead</td><td>High impact, high load</td></tr>
                <tr><td><strong>Mid-size</strong></td><td>5–50</td><td>Lead + peers</td><td>Good autonomy, career ambiguity</td></tr>
                <tr><td><strong>Large company</strong></td><td>100+</td><td>Structured programmes</td><td>Clear path, less autonomy</td></tr>
              </tbody>
            </table>
            <div class="callout">For a first junior role, mid-size and large companies offer the best learning conditions.</div>`,
        },
        {
          icon: 'learning',
          summary: 'Learning principles',
          body: `
            <h3>1. Practice every day</h3>
            <p>Like a language or instrument. Schedule at least 30 minutes a day: Figma, side project, YouTube tutorial.</p>
            <h3>2. Get quality feedback</h3>
            <p>Feedback is the fastest way to improve. Find a community of peers, a dedicated mentor, or real users.</p>
            <h3>3. Understand the why</h3>
            <p>Before moving on, explain the topic to someone else. Always ask "why this pattern?" "why this layout decision?"</p>
            <h3>4. Don't take shortcuts</h3>
            <p>Create wireframes, mockups, components and artifacts from scratch. Templates are only useful once you know the fundamentals.</p>
            <h3>5. Avoid the advice-seeking cycle</h3>
            <p>Focus on improving your work first, then find 1–2 trusted people to guide you.</p>
            <div class="callout">Start before you think you're ready. This is the most important advice on this page.</div>`,
        },
        {
          icon: 'roles',
          summary: 'Alternate roles to consider',
          body: `
            <h3>Brand / Marketing Designer</h3>
            <p>Works on visual identity, campaigns and marketing websites. A good choice if you want a stronger visual focus.</p>
            <h3>User Researcher</h3>
            <p>Plans and conducts studies to understand the audience. Ideal if you're not drawn to visual design but love research.</p>
            <h3>Product Manager</h3>
            <p>Responsible for product strategy, roadmap and success. If you like product thinking but not visual storytelling.</p>
            <h3>Design Engineer</h3>
            <p>A growing hybrid role — strong visual skills + frontend engineering. Designs AND builds visual systems.</p>
            <h3>Software Engineer</h3>
            <p>Builds the product. More logical and systematic problem solving. Ideal if you like building things and making them work.</p>`,
        },
        */
      ],
    },

    /* ── Craft sub-tab content ── */
    craft: {
      placeholder: true,
    },

    /* ── DesignOps    /* ── DesignOps roadmap ── */
    designops: {
      breakthrough: {
        fr: 'Le Figma DS est la librairie de composants — et si vous choisissez d\'utiliser des outils IA, il devient aussi leur source de vérité. Connecté via MCP, un agent peut lire et écrire du contenu Figma natif — frames, composants, variables — directement depuis votre DS existant. Aucune librairie de code requise. C\'est une option parmi d\'autres dans votre workflow, pas une obligation.',
        en: 'The Figma DS is the component library — and if you choose to use AI tools, it also becomes their source of truth. Connected via MCP, an agent can read and write native Figma content — frames, components, variables — directly from your existing DS. No code library needed. It\'s one option in your workflow, not a requirement.',
      },
      flywheel: {
        fr: 'La qualité des outputs IA est directement proportionnelle à la qualité du design system. Des noms de composants propres, des tokens cohérents, des variants bien documentés → des outputs proches du niveau production. Chaque amélioration du DS améliore ce que l\'IA génère. Le volant d\'inertie : meilleur DS → meilleur output IA → moins de rework → plus de temps pour améliorer le DS.',
        en: 'AI output quality is directly proportional to design system quality. Clean component names, consistent tokens, well-documented variants → near production-ready output. Every DS improvement improves what AI generates. The flywheel: better DS → better AI output → less rework → more time to improve the DS.',
      },
      phases: {
        fr: [
          {
            number: '0',
            status: 'now',
            statusLabel: 'Maintenant',
            title: 'DS structuré pour l\'IA',
            summary: 'Rendre le design system lisible par les agents IA.',
            actions: [
              'Créer la librairie Figma Foundations (tokens, variables, modes FR/ES)',
              'Auditer les noms de composants dans App DS et Web DS pour la cohérence',
              'Ajouter des descriptions aux composants (lisibles par le MCP)',
              'Structurer les variants avec des noms de propriétés clairs',
              'Documenter la machine à états UI contextuelle (connecté/non connecté, types de billets, timing)',
              'Rédiger un fichier de Skills MCP personnalisé PdF (markdown uniquement)',
              'Tester le flux MCP : connecter Claude Code à Figma MCP, générer une variante, évaluer',
            ],
          },
          {
            number: '1',
            status: 'soon',
            statusLabel: 'Court terme',
            title: 'Flux PO → design',
            summary: 'Le PO peut contribuer au design — pas seulement comme commanditaire. Il peut générer un premier jet pour illustrer une idée, le designer prend le relais pour le polir et l\'aligner sur le DS.',
            actions: [
              'Le PO décrit le besoin (brief structuré ou description informelle)',
              'Voie A — Le PO génère un premier jet (Claude, v0, Figma Make) pour illustrer l\'idée, puis passe la main au designer',
              'Voie B — Le designer produit directement dans Figma, avec ou sans outil de génération selon le scope',
              'Dans les deux cas : le designer affine, aligne sur le DS, valide les états et l\'accessibilité',
              'Le PO révise en Figma (accès viewer gratuit + commentaires)',
              'La spec finale part en ticket dev',
              'Mesurer : délai besoin PO → spec design, qualité des briefs, taux de retours',
            ],
          },
          {
            number: '2',
            status: 'future',
            statusLabel: 'Phase 2',
            title: 'Refonte site — architecture DS-first',
            summary: 'Drupal headless + frontend par composants. Si le site est construit avec un framework par composants, on obtient un pipeline IA bidirectionnel : DS Figma → MCP → l\'IA génère des designs ET du code depuis la même source de vérité.',
            actions: [
              'Argumenter l\'architecture headless via le pipeline IA bidirectionnel',
              'Implémenter Code Connect (mapping composants Figma ↔ implémentations code)',
              'Storybook + serveur MCP pour le catalogue composants web',
              'Kameleoon SDK web pour l\'A/B testing (FR + ES) avec variantes conformes au DS',
            ],
          },
          {
            number: '3',
            status: 'future',
            statusLabel: 'Phase 3+',
            title: 'Extraction Flutter + Code Connect',
            summary: 'Extraction organique de widgets Flutter connectés à leurs composants Figma via Code Connect. Chaque widget extrait améliore la génération de code IA pour l\'app.',
            actions: [
              'Extraire les widgets Flutter graduellement par contexte métier',
              'Connecter chaque widget extrait à son composant Figma (Code Connect)',
              'Widgetbook pour le catalogue composants app',
              'Kameleoon Flutter SDK pour l\'A/B testing in-app (FR + ES)',
              'Pipeline complet : DS Figma → design IA → code Flutter IA avec vrais widgets',
            ],
          },
        ],
        en: [
          {
            number: '0',
            status: 'now',
            statusLabel: 'Now',
            title: 'DS structured for AI',
            summary: 'Make the design system readable by AI agents — this is infrastructure, not housekeeping.',
            actions: [
              'Create Figma Foundations library (tokens, variables, FR/ES modes)',
              'Audit component naming in App DS and Web DS for consistency and clarity',
              'Add descriptions to components (readable by MCP)',
              'Structure variants with clear property names',
              'Document the contextual UI state machine (connected/not connected, ticket types, timing)',
              'Write a custom PdF MCP Skill file (markdown only — no code)',
              'Test the MCP flow: connect Claude Code to Figma MCP, generate a variant, evaluate quality',
            ],
          },
          {
            number: '1',
            status: 'soon',
            statusLabel: 'Short term',
            title: 'PO → design workflow',
            summary: 'The PO can contribute to design — not just as a requester. They can generate a first draft to illustrate an idea, then hand off to the designer who polishes it and aligns it to the DS.',
            actions: [
              'PO describes the need (structured brief or informal description)',
              'Path A — PO generates a first draft (Claude, v0, Figma Make) to illustrate the idea, then hands off to the designer',
              'Path B — Designer works directly in Figma, with or without a generation tool depending on scope',
              'Either way: designer refines, aligns to DS, validates states and accessibility',
              'PO reviews in Figma (free viewer access + comments)',
              'Final spec goes to dev ticket',
              'Measure: time from PO need → design spec, brief quality, revision rate',
            ],
          },
          {
            number: '2',
            status: 'future',
            statusLabel: 'Phase 2',
            title: 'Website redesign — DS-first architecture',
            summary: 'Headless Drupal + component-based frontend. If the site is built with a component-based framework, we get a bidirectional AI pipeline: Figma DS → MCP → AI generates both designs AND code from the same source of truth.',
            actions: [
              'Argue the headless architecture via the bidirectional AI pipeline',
              'Implement Code Connect (mapping Figma components ↔ code implementations)',
              'Storybook + MCP server for web component catalogue',
              'Kameleoon JS/SDK for web A/B testing (FR + ES) with DS-compliant variants',
            ],
          },
          {
            number: '3',
            status: 'future',
            statusLabel: 'Phase 3+',
            title: 'Flutter extraction + Code Connect',
            summary: 'Organic extraction of Flutter widgets connected to their Figma components via Code Connect. Each extracted widget improves AI code generation for the app.',
            actions: [
              'Extract Flutter widgets gradually by business context',
              'Connect each extracted widget to its Figma component (Code Connect)',
              'Widgetbook for app component catalogue',
              'Kameleoon Flutter SDK for in-app A/B testing (FR + ES)',
              'Full pipeline: Figma DS → AI design → AI Flutter code using real widgets',
            ],
          },
        ],
      },
      models: {
        fr: [
          {
            id: '1',
            title: 'Modèle 1 — Designer comme opérateur MCP',
            status: 'now',
            statusLabel: 'Fonctionne maintenant',
            body: 'Le PO décrit le besoin. Vous (Full seat) lancez l\'agent IA connecté à Figma MCP. L\'agent génère des frames conformes au DS. Le PO révise en viewer gratuit. Vous n\'êtes pas "le designer qui fait pour eux" — vous opérez l\'outil, l\'IA fait le travail de génération, le PO pilote l\'intention.',
            example: 'PO : "Variante de la bannière de réassurance checkout pour le site espagnol, sans frais cachés."\n→ Prompt Claude Code : "Crée une bannière réassurance avec le DS PdF à [URL], locale ES, tarification transparente. Base : composant BannerReassurance existant."\n→ L\'agent génère une frame Figma native avec vrais composants et tokens.',
          },
          {
            id: '2',
            title: 'Modèle 2 — PO avec génération IA externe',
            status: 'now',
            statusLabel: 'Fonctionne maintenant',
            body: 'Sans accès Full, les POs utilisent des outils IA (Claude, v0, Bolt) avec accès MCP en lecture. L\'IA génère une maquette hors Figma (URL de preview hébergée) mais ancrée dans la connaissance réelle du DS — couleurs correctes, espacements, patterns de composants. Moins précis que le Modèle 1, mais plus d\'autonomie PO.',
            example: null,
          },
          {
            id: '3',
            title: 'Modèle 3 — Full seat partagé pour sessions de génération',
            status: 'soon',
            statusLabel: 'Possible maintenant',
            body: 'Un Full seat dédié comme "siège de génération IA" — utilisé par les POs pour les sessions MCP, ou par vous en leur nom. Figma permet la réassignation de seats. Ce seat ne doit pas être toujours actif.',
            example: null,
          },
          {
            id: '4',
            title: 'Modèle 4 — PO avec Full seat direct',
            status: 'future',
            statusLabel: 'Futur (budget)',
            body: 'Si le pricing Figma évolue ou si les Connected Projects se concrétisent, les POs pourraient obtenir l\'accès Full seat pour des sessions MCP directes. État idéal — dépend du budget et de l\'évolution produit Figma.',
            example: null,
          },
        ],
        en: [
          {
            id: '1',
            title: 'Model 1 — Designer as MCP operator',
            status: 'now',
            statusLabel: 'Works now',
            body: 'PO describes the need. You (Full seat) run the AI agent connected to Figma MCP. Agent generates DS-compliant frames. PO reviews with free viewer access. You\'re not "designing for them" — you operate the tool, the AI does the generation work, the PO drives intent.',
            example: 'PO: "A checkout reassurance banner variant for the Spanish site, emphasising no hidden fees."\n→ Prompt Claude Code: "Create a reassurance banner using PdF DS at [URL], Spanish locale, transparent pricing. Use existing BannerReassurance component as base."\n→ Agent generates a native Figma frame with real components and tokens.',
          },
          {
            id: '2',
            title: 'Model 2 — PO with external AI generation',
            status: 'now',
            statusLabel: 'Works now',
            body: 'Without Full access, POs use AI tools (Claude, v0, Bolt) with MCP read access. The AI generates a mockup outside Figma (hosted preview URL) but grounded in real DS knowledge — correct colours, spacing, component patterns. Less precise than Model 1, but gives POs more autonomy.',
            example: null,
          },
          {
            id: '3',
            title: 'Model 3 — Shared Full seat for generation sessions',
            status: 'soon',
            statusLabel: 'Possible now',
            body: 'One dedicated Full seat as an "AI generation seat" — used by POs for MCP sessions, or by you on their behalf. Figma allows seat reassignment. This seat doesn\'t need to be always-active.',
            example: null,
          },
          {
            id: '4',
            title: 'Model 4 — PO with direct Full seat access',
            status: 'future',
            statusLabel: 'Future (budget)',
            body: 'If Figma\'s pricing evolves or Connected Projects materialise, POs could get Full seat access for direct MCP sessions. Ideal state — depends on budget and Figma product evolution.',
            example: null,
          },
        ],
      },
      principles: {
        fr: [
          { icon: '⬡', text: 'Le DS Figma est la librairie. Pas besoin de librairies de code pour la génération IA. Le DS connecté via MCP est la librairie. Investissez en conséquence.' },
          { icon: '⬡', text: 'Qualité DS = qualité IA. Chaque amélioration de nommage, description ajoutée, mode de variable structuré fait que l\'IA génère de meilleurs designs. C\'est votre activité à plus fort levier.' },
          { icon: '⬡', text: 'Les Skills sont le playbook IA de votre équipe. Un fichier de Skills PdF (juste du markdown) enseigne aux agents vos conventions. Rédigez-en un. Itérez dessus.' },
          { icon: '⬡', text: 'Votre Full seat est le moteur de génération. Jusqu\'à ce que les POs aient leurs propres seats, vous opérez l\'agent pour eux. Le PO pilote l\'intention, vous pilotez l\'outil, l\'IA fait la génération.' },
          { icon: '⬡', text: 'Chaque phase tient seule. La Phase 0 (DS AI-ready + skills + test MCP) délivre de la valeur immédiatement. Tout ce qui suit l\'amplifie.' },
          { icon: '⬡', text: 'La refonte site reste le plus grand levier. MCP pour la génération design fonctionne maintenant. Mais Code Connect + frontend par composants = le pipeline bidirectionnel complet design ↔ code via IA.' },
          { icon: '⬡', text: 'Commencez à tester aujourd\'hui. Connectez Claude Code à Figma MCP. Essayez de générer une variante de composant depuis votre DS. La qualité de l\'output vous dit exactement où améliorer votre DS.' },
        ],
        en: [
          { icon: '⬡', text: 'The Figma DS is the component library. You don\'t need code libraries for AI-assisted design generation. The DS connected via MCP IS the library. Invest in its structure accordingly.' },
          { icon: '⬡', text: 'DS quality = AI quality. Every naming improvement, added description, structured variable mode makes the AI generate better designs. This is your highest-leverage activity.' },
          { icon: '⬡', text: 'Skills are your team\'s AI playbook. A custom PdF skill file (just markdown) teaches agents your conventions. Write one. Iterate on it.' },
          { icon: '⬡', text: 'Your Full seat is the generation engine. Until POs get their own seats, you operate the agent on their behalf. The PO drives intent, you drive the tool, the AI does the generation.' },
          { icon: '⬡', text: 'Each phase stands alone. Phase 0 (AI-ready DS + custom skills + MCP testing) delivers value immediately. Everything after amplifies it.' },
          { icon: '⬡', text: 'The website redesign is still the biggest lever. MCP for design generation works now. But Code Connect + component-based frontend = the full bidirectional pipeline (design ↔ code via AI).' },
          { icon: '⬡', text: 'Start testing today. Connect Claude Code to Figma MCP. Try generating a component variant from your DS. The output quality tells you exactly where to improve your DS.' },
        ],
      },
      timeline: {
        fr: [
          { phase: '0', label: 'Phase 0', period: 'Mi-2026', title: 'DS AI-ready', color: 'var(--green)', bg: 'var(--green-tint-bg)' },
          { phase: '1', label: 'Phase 1', period: 'Mi → Fin 2026', title: 'PO → génération', color: 'var(--text-primary)', bg: 'var(--bg-card-muted)' },
          { phase: '2', label: 'Phase 2', period: 'Début 2027', title: 'Refonte site', color: 'var(--text-primary)', bg: 'var(--bg-card-muted)' },
          { phase: '3', label: 'Phase 3', period: 'Mi-2027', title: 'Flutter extraction', color: 'var(--red)', bg: 'var(--red-tint-bg)' },
          { phase: '∞', label: 'Horizon', period: 'Fin 2027+', title: 'Gouvernance & auto.', color: 'var(--green)', bg: 'var(--green-tint-bg)' },
        ],
        en: [
          { phase: '0', label: 'Phase 0', period: 'Mid-2026', title: 'AI-ready DS', color: 'var(--green)', bg: 'var(--green-tint-bg)' },
          { phase: '1', label: 'Phase 1', period: 'Mid → End 2026', title: 'PO → generation', color: 'var(--text-primary)', bg: 'var(--bg-card-muted)' },
          { phase: '2', label: 'Phase 2', period: 'Early 2027', title: 'Website redesign', color: 'var(--text-primary)', bg: 'var(--bg-card-muted)' },
          { phase: '3', label: 'Phase 3', period: 'Mid-2027', title: 'Flutter extraction', color: 'var(--red)', bg: 'var(--red-tint-bg)' },
          { phase: '∞', label: 'Horizon', period: 'End 2027+', title: 'Governance & auto.', color: 'var(--green)', bg: 'var(--green-tint-bg)' },
        ],
      },
      trantor: {
        scenarios: {
          fr: [
            { id: 'A', title: 'Scénario A — Wrapper chat seul', verdict: 'Incompatible', verdictStatus: 'bad', color: 'var(--red)', bg: 'var(--red-tint-bg)', bd: 'var(--border)', body: 'Trantor = interface conversationnelle sur API.\nPas de support MCP natif, pas de tool calls en boucle.\nIncompatible avec le pipeline agentique tel quel.' },
            { id: 'B', title: 'Scénario B — API brute accessible', verdict: '~ Partiel', verdictStatus: 'mid', color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'Trantor expose un endpoint compatible OpenAI/Anthropic.\nClaude Code ou agent custom l\'utilise comme backend.\nPipeline identique, modèle fourni par la DSI.' },
            { id: 'C', title: 'Scénario C — Tool calls supportés', verdict: '✓ Idéal', verdictStatus: 'good', color: 'var(--green)', bg: 'var(--green-tint-bg)', bd: 'rgba(46,158,91,.35)', body: 'Trantor supporte le function calling natif.\nL\'agent peut interagir directement avec le Figma MCP.\nPipeline complet, zéro licence externe.' },
          ],
          en: [
            { id: 'A', title: 'Scenario A — Chat wrapper only', verdict: 'Incompatible', verdictStatus: 'bad', color: 'var(--red)', bg: 'var(--red-tint-bg)', bd: 'var(--border)', body: 'Trantor = conversational interface on API.\nNo native MCP support, no looping tool calls.\nIncompatible with the agentic pipeline as-is.' },
            { id: 'B', title: 'Scenario B — Raw API accessible', verdict: '~ Partial', verdictStatus: 'mid', color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'Trantor exposes an OpenAI/Anthropic-compatible endpoint.\nClaude Code or custom agent uses it as backend.\nSame pipeline, model provided by DSI.' },
            { id: 'C', title: 'Scenario C — Tool calls supported', verdict: '✓ Ideal', verdictStatus: 'good', color: 'var(--green)', bg: 'var(--green-tint-bg)', bd: 'rgba(46,158,91,.35)', body: 'Trantor supports native function calling.\nAgent can interact directly with Figma MCP.\nFull pipeline, zero external licences.' },
          ],
        },
        questions: {
          fr: ['Quel modèle tourne derrière Trantor ?', 'Est-ce qu\'il supporte le function calling / tool use ?', 'Est-ce qu\'il expose une API compatible OpenAI ou Anthropic ?'],
          en: ['What model runs behind Trantor?', 'Does it support function calling / tool use?', 'Does it expose an OpenAI or Anthropic-compatible API?'],
        },
        recommendation: {
          fr: '★ Recommandation — Option A : Claude Code + API Trantor en backend\nL\'agent loge dans Claude Code sur ta machine · Trantor fournit le modèle · Phase 0 reste indépendante de la DSI\nSi Trantor est compatible, le switch est quasi transparent · Valide le workflow d\'abord, discute hébergement ensuite',
          en: '★ Recommendation — Option A: Claude Code + Trantor API as backend\nAgent runs in Claude Code on your machine · Trantor provides the model · Phase 0 stays DSI-independent\nIf Trantor is compatible, the switch is near-transparent · Validate the workflow first, discuss hosting after',
        },
        hosting: {
          fr: [
            { id: 'A', title: 'Option A — Claude Code', recommended: true, color: 'var(--green)', bg: 'var(--green-tint-bg)', bd: 'rgba(46,158,91,.35)', body: 'Agent loge dans Claude Code sur ta machine.\nTranstor configuré comme backend API.\nPhase 0 reste zéro DSI.', pros: ['Même pipeline qu\'uSpec', 'Modèle Trantor = économie licences', 'Indépendant DSI en Phase 0'], cons: ['Nécessite API Trantor compatible'] },
            { id: 'B', title: 'Option B — Script custom local', recommended: false, color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'Un script Python/Node orchestre la boucle :\nintention PO → Skills → API Trantor → Figma MCP.', pros: ['Contrôle total', 'Pas de dépendance IDE'], cons: ['Plus de code à maintenir', 'Moins d\'outillage natif'] },
            { id: 'C', title: 'Option C — Hébergé côté DSI', recommended: false, color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'L\'agent tourne sur un serveur DSI,\nconnecté à Trantor en interne.', pros: ['Propre techniquement', 'Intégré infrastructure DSI'], cons: ['Implique DSI dès le départ', 'Contredit logique Phase 0'] },
          ],
          en: [
            { id: 'A', title: 'Option A — Claude Code', recommended: true, color: 'var(--green)', bg: 'var(--green-tint-bg)', bd: 'rgba(46,158,91,.35)', body: 'Agent runs in Claude Code on your machine.\nTrantor configured as API backend.\nPhase 0 stays zero DSI.', pros: ['Same pipeline as uSpec', 'Trantor model = licence savings', 'DSI-independent in Phase 0'], cons: ['Requires compatible Trantor API'] },
            { id: 'B', title: 'Option B — Custom local script', recommended: false, color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'A Python/Node script orchestrates the loop:\nPO intent → Skills → Trantor API → Figma MCP.', pros: ['Total control', 'No IDE dependency'], cons: ['More code to maintain', 'Less native tooling'] },
            { id: 'C', title: 'Option C — DSI-hosted', recommended: false, color: 'var(--text-muted)', bg: 'var(--bg-card-muted)', bd: 'var(--border)', body: 'Agent runs on a DSI server,\nconnected to Trantor internally.', pros: ['Technically clean', 'Integrated into DSI infrastructure'], cons: ['Involves DSI from day one', 'Contradicts Phase 0 logic'] },
          ],
        },
      },
      projectTypes: {
        fr: [
          {
            id: 'exploration',
            icon: '🔭',
            label: 'Exploration / Discovery',
            color: 'var(--green)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'Nouvelle fonctionnalité, brief flou, inconnu à clarifier',
            who: 'Designer mène — PO en co-pilote',
            aiUse: 'none',
            aiLabel: 'Figma uniquement',
            steps: ['Brief PO → designer', 'Recherche & benchmark', 'Idéation dans Figma', 'Itérations avec le PO', 'Décision & spec'],
            note: null,
          },
          {
            id: 'iteration',
            icon: '✏️',
            label: 'Itération / Variante',
            color: 'var(--gold)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'Écran existant, composant connu, changement défini',
            who: 'Designer · PO valide',
            aiUse: 'optional',
            aiLabel: 'Figma ou IA selon scope',
            steps: ['Brief PO → designer', 'Changement rapide ?'],
            fork: {
              yes: { label: 'Oui — simple', path: ['Modifier dans Figma', 'Livrer la spec'], color: 'var(--green)' },
              no:  { label: 'Non — multi-états / génération', path: ['Workflow IA (6 étapes) ↓'], color: 'var(--text-primary)' },
            },
            note: 'La décision de recourir à l\'IA dépend de la complexité : nombre d\'états à générer, scope du composant, temps disponible.',
          },
          {
            id: 'new-screen',
            icon: '🆕',
            label: 'Nouvel écran / Flux complexe',
            color: 'var(--red)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'Nouvelle surface, multiples états, scope générateur',
            who: 'Designer opère l\'IA — PO pilote l\'intention',
            aiUse: 'full',
            aiLabel: 'Workflow IA complet',
            steps: ['Brief PO → designer', 'Workflow IA en 6 étapes ↓', 'Affinage Figma', 'Validation PO', 'Livrer la spec'],
            note: null,
          },
        ],
        en: [
          {
            id: 'exploration',
            icon: '🔭',
            label: 'Exploration / Discovery',
            color: 'var(--green)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'New feature, unclear brief, unknown to clarify',
            who: 'Designer leads — PO as co-pilot',
            aiUse: 'none',
            aiLabel: 'Figma only',
            steps: ['PO brief → designer', 'Research & benchmark', 'Ideation in Figma', 'Iterations with PO', 'Decision & spec'],
            note: null,
          },
          {
            id: 'iteration',
            icon: '✏️',
            label: 'Iteration / Variant',
            color: 'var(--gold)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'Existing screen, known component, defined change',
            who: 'Designer · PO validates',
            aiUse: 'optional',
            aiLabel: 'Figma or AI depending on scope',
            steps: ['PO brief → designer', 'Quick change?'],
            fork: {
              yes: { label: 'Yes — simple', path: ['Edit in Figma', 'Ship the spec'], color: 'var(--green)' },
              no:  { label: 'No — multi-state / generation', path: ['AI workflow (6 steps) ↓'], color: 'var(--text-primary)' },
            },
            note: 'The decision to use AI depends on complexity: number of states to generate, component scope, time available.',
          },
          {
            id: 'new-screen',
            icon: '🆕',
            label: 'New screen / Complex flow',
            color: 'var(--red)',
            bg: 'var(--bg-card-muted)',
            bd: 'var(--border)',
            trigger: 'New surface, multiple states, generation-worthy scope',
            who: 'Designer operates AI — PO drives intent',
            aiUse: 'full',
            aiLabel: 'Full AI workflow',
            steps: ['PO brief → designer', 'AI workflow (6 steps) ↓', 'Figma refinement', 'PO validation', 'Ship the spec'],
            note: null,
          },
        ],
      },
      tooling: {
        headers: { fr: ['Outil', 'Phase', 'Qui', 'Ce que ça fait'], en: ['Tool', 'Phase', 'Who', 'What it does'] },
        rows: [
          { tool: 'Figma DS (bien structuré)', phase: '0', phaseColor: 'var(--green)', who_fr: 'Designer', who_en: 'Designer', what_fr: 'Source de vérité composants + tokens lisible par IA', what_en: 'AI-readable component + token source of truth' },
          { tool: 'Custom PdF Skills', phase: '0', phaseColor: 'var(--green)', who_fr: 'Designer (markdown)', who_en: 'Designer (markdown)', what_fr: 'Enseigne aux agents les conventions PdF', what_en: 'Teach agents PdF conventions' },
          { tool: 'Figma MCP (lecture)', phase: '0', phaseColor: 'var(--green)', who_fr: 'Designer, agents IA', who_en: 'Designer, AI agents', what_fr: 'Lit composants, variables, styles, layout', what_en: 'Read components, variables, styles, layout' },
          { tool: 'Figma MCP (écriture)', phase: '0–1', phaseColor: 'var(--green)', who_fr: 'Designer (Full seat)', who_en: 'Designer (Full seat)', what_fr: 'Génère des frames Figma natives depuis le DS', what_en: 'Generate native Figma frames from DS' },
          { tool: 'Claude Code + MCP', phase: '0–1', phaseColor: 'var(--green)', who_fr: 'Designer', who_en: 'Designer', what_fr: 'Génère des designs depuis les descriptions PO', what_en: 'Generate designs from PO descriptions' },
          { tool: 'Trantor (API backend)', phase: '0–1', phaseColor: 'var(--green)', who_fr: 'Designer (si compatible)', who_en: 'Designer (if compatible)', what_fr: 'Modèle IA fourni par la DSI — remplace Claude si compat.', what_en: 'DSI-provided AI model — replaces Claude if compatible' },
          { tool: 'Figma viewer + commentaires', phase: '1', phaseColor: 'var(--text-primary)', who_fr: 'POs (gratuit)', who_en: 'POs (free)', what_fr: 'Révision et annotation des designs générés', what_en: 'Review and annotate generated designs' },
          { tool: 'AI rough drafts (Claude / v0 / Bolt)', phase: '1', phaseColor: 'var(--text-primary)', who_fr: 'POs', who_en: 'POs', what_fr: 'Maquettes externes informées par le DS', what_en: 'External DS-informed mockups' },
          { tool: 'Figma Make / Google Stitch', phase: '1', phaseColor: 'var(--text-primary)', who_fr: 'PO & Designer', who_en: 'PO & Designer', what_fr: 'Génération UI depuis prompt, exports vers Figma', what_en: 'UI generation from prompt, export to Figma' },
          { tool: 'Kameleoon SDK (app)', phase: '1', phaseColor: 'var(--text-primary)', who_fr: 'DSI', who_en: 'DSI', what_fr: 'A/B testing Flutter in-app (FR + ES)', what_en: 'Flutter in-app A/B testing (FR + ES)' },
          { tool: 'Code Connect', phase: '2–3', phaseColor: 'var(--text-primary)', who_fr: 'Designer + devs', who_en: 'Designer + devs', what_fr: 'Mappe les composants Figma ↔ implémentations code', what_en: 'Map Figma components ↔ code implementations' },
          { tool: 'Storybook + MCP', phase: '2', phaseColor: 'var(--text-primary)', who_fr: 'Refonte site', who_en: 'Website redesign', what_fr: 'Catalogue composants web + génération de code IA', what_en: 'Web component catalogue + AI code generation' },
          { tool: 'Kameleoon SDK (web)', phase: '2', phaseColor: 'var(--text-primary)', who_fr: 'DSI + Marketing', who_en: 'DSI + Marketing', what_fr: 'A/B testing web (FR + ES) avec variantes DS', what_en: 'Web A/B testing (FR + ES) with DS-compliant variants' },
          { tool: 'Widgetbook', phase: '3', phaseColor: 'var(--red)', who_fr: 'Équipe app', who_en: 'App team', what_fr: 'Catalogue composants Flutter', what_en: 'Flutter component catalogue' },
          { tool: 'ZeroHeight / Supernova', phase: '∞', phaseColor: 'var(--green)', who_fr: 'Designer', who_en: 'Designer', what_fr: 'Plateforme DSM — documentation + release notes', what_en: 'DSM platform — documentation + release notes' },
          { tool: 'Axe / Stark', phase: '∞', phaseColor: 'var(--green)', who_fr: 'Designer + QA', who_en: 'Designer + QA', what_fr: 'Audit accessibilité automatisé', what_en: 'Automated accessibility auditing' },
          { tool: 'Figma Analytics', phase: '∞', phaseColor: 'var(--green)', who_fr: 'Designer', who_en: 'Designer', what_fr: 'Usage composants en design — adoption DS', what_en: 'Component usage in design — DS adoption' },
          { tool: 'Tests IA + régression visuelle', phase: '∞', phaseColor: 'var(--green)', who_fr: 'Designer + devs', who_en: 'Designer + devs', what_fr: 'Revue conformité DS avant merge, snapshots visuels', what_en: 'DS compliance review before merge, visual snapshots' },
        ],
      },
      governance: {
        rituals: {
          fr: [
            { title: 'Revue DS mensuelle', desc: 'Présentation des nouveaux composants, tokens et breaking changes aux équipes design et dev. Format : 30 min, show & tell, live dans Figma.' },
            { title: 'Design critique hebdomadaire', desc: 'Session ouverte de critique de design — tout le monde peut soumettre du travail. Cadrage sur le "pourquoi" des décisions, pas seulement l\'esthétique.' },
            { title: 'Newsletter de mise à jour DS', desc: 'Communication régulière (bi-mensuelle ou mensuelle) résumant les ajouts, dépréciations, corrections. Format simple : quoi, pourquoi, comment migrer.' },
            { title: 'Notes de release', desc: 'Document structuré à chaque version du DS : nouveaux composants, variants ajoutés, composants dépréciés, changements de tokens, instructions de migration.' },
            { title: 'PO Sandbox mensuel', desc: 'Session ouverte aux POs pour explorer les composants, poser des questions et partager leurs besoins. Limite la créativité non-DS et renforce l\'adoption.' },
            { title: 'Check-in mi-sprint', desc: 'Session courte avec le lead dev pour valider l\'implémentation en cours et détecter les dérives par rapport aux specs Figma avant la fin du sprint.' },
          ],
          en: [
            { title: 'Monthly DS review', desc: 'New components, tokens and breaking changes presented to design and dev teams. Format: 30 min, show & tell, live in Figma.' },
            { title: 'Weekly design critique', desc: 'Open critique session — anyone can submit work. Focus on the "why" behind decisions, not just aesthetics.' },
            { title: 'DS update newsletter', desc: 'Regular communication (bi-monthly or monthly) summarising additions, deprecations and fixes. Simple format: what, why, how to migrate.' },
            { title: 'Release notes', desc: 'Structured document per DS version: new components, added variants, deprecated components, token changes, migration instructions.' },
            { title: 'Monthly PO Sandbox', desc: 'Open session for POs to explore components, ask questions and share needs. Limits off-DS creativity and reinforces adoption.' },
            { title: 'Mid-sprint check-in', desc: 'Short session with the lead dev to validate in-progress implementation and catch drift from Figma specs before end of sprint.' },
          ],
        },
        artefacts: {
          fr: ['Changelog versionné du DS (Notion ou ZeroHeight)', 'Figma — page "What\'s new" maintenue à jour', 'Bibliothèque de patterns documentée avec Quand/Composants/Variantes', 'Guide de migration pour les breaking changes', 'Figma component playground — catalogue visuel des états', 'Notes de release publiées à chaque merge sur la branche main du DS'],
          en: ['Versioned DS changelog (Notion or ZeroHeight)', 'Figma "What\'s new" page kept current', 'Pattern library documented with When/Components/Variants', 'Migration guide for breaking changes', 'Figma component playground — visual state catalogue', 'Release notes published on every DS main branch merge'],
        },
      },
      metrics: {
        categories: {
          fr: [
            {
              label: 'Adoption & usage',
              items: [
                { name: 'Adoption', desc: 'Part des projets actifs qui utilisent le DS vs. des composants custom non-système.', tool: 'Figma Analytics, sondages équipe' },
                { name: 'Usage composants — design', desc: 'Quels composants sont les plus utilisés dans les fichiers Figma. Quels sont rarement touchés.', tool: 'Figma Analytics (component usage)' },
                { name: 'Usage composants — code', desc: 'Fréquence d\'import des composants DS dans le codebase. Divergences avec le design.', tool: 'GitHub/GitLab analytics, Storybook' },
                { name: 'Consistance produit', desc: 'Mesure visuelle de la cohérence entre écrans — même tokens, même patterns.', tool: 'Revues manuelles, tests visuels automatisés' },
              ],
            },
            {
              label: 'Qualité & accessibilité',
              items: [
                { name: 'Conformité A11y', desc: 'Pourcentage de composants conformes WCAG 2.2 AA. Nombre de violations par audit.', tool: 'Axe, Stark, revues manuelles' },
                { name: 'Qualité du code', desc: 'Coverage de tests, dette technique, nombre de régressions visuelles détectées.', tool: 'GitHub/GitLab, tests visuels automatisés' },
              ],
            },
            {
              label: 'Vélocité & productivité',
              items: [
                { name: 'Vitesse de livraison design', desc: 'Temps moyen entre besoin PO et spec Figma finalisée. Comparaison avant/après DS.', tool: 'Jira/Monday, suivi manuel' },
                { name: 'Vitesse de développement', desc: 'Temps de dev estimé vs. réel sur les composants DS vs. composants custom.', tool: 'Jira/Monday, sprint reviews' },
                { name: 'Productivité équipe', desc: 'Nombre de composants livrés par sprint. Temps de révision design.', tool: 'Jira/Monday, Figma Analytics' },
              ],
            },
            {
              label: 'Satisfaction & feedback',
              items: [
                { name: 'Satisfaction équipe', desc: 'NPS interne sur l\'utilisation du DS. Questions : facilité d\'usage, documentation, manques.', tool: 'Sondages (trimestriels), sessions de feedback' },
                { name: 'Feedback utilisateurs DS', desc: 'Retours des POs, devs et designers sur les composants manquants ou problématiques.', tool: 'Sessions de tests utilisateurs, Notion, Slack' },
              ],
            },
          ],
          en: [
            {
              label: 'Adoption & usage',
              items: [
                { name: 'Adoption', desc: 'Share of active projects using the DS vs. custom non-system components.', tool: 'Figma Analytics, team surveys' },
                { name: 'Component usage — design', desc: 'Which components are most used in Figma files. Which are rarely touched.', tool: 'Figma Analytics (component usage)' },
                { name: 'Component usage — code', desc: 'DS component import frequency in the codebase. Divergences from design.', tool: 'GitHub/GitLab analytics, Storybook' },
                { name: 'Product consistency', desc: 'Visual measure of coherence across screens — same tokens, same patterns.', tool: 'Manual reviews, automated visual tests' },
              ],
            },
            {
              label: 'Quality & accessibility',
              items: [
                { name: 'A11y compliance', desc: 'Percentage of components meeting WCAG 2.2 AA. Number of violations per audit.', tool: 'Axe, Stark, manual reviews' },
                { name: 'Code quality', desc: 'Test coverage, technical debt, number of visual regressions caught.', tool: 'GitHub/GitLab, automated visual tests' },
              ],
            },
            {
              label: 'Velocity & productivity',
              items: [
                { name: 'Speed of design delivery', desc: 'Average time from PO need to finalised Figma spec. Before/after DS comparison.', tool: 'Jira/Monday, manual tracking' },
                { name: 'Speed of development', desc: 'Estimated vs. actual dev time on DS components vs. custom components.', tool: 'Jira/Monday, sprint reviews' },
                { name: 'Team productivity', desc: 'Components shipped per sprint. Design review time.', tool: 'Jira/Monday, Figma Analytics' },
              ],
            },
            {
              label: 'Satisfaction & feedback',
              items: [
                { name: 'Team happiness', desc: 'Internal NPS on DS usage. Questions: ease of use, documentation quality, gaps.', tool: 'Surveys (quarterly), feedback sessions' },
                { name: 'DS user feedback', desc: 'Input from POs, devs and designers on missing or problematic components.', tool: 'User testing sessions, Notion, Slack' },
              ],
            },
          ],
        },
      },
      automation: {
        groups: {
          fr: [
            {
              title: 'Automatiser la livraison',
              icon: '⚙',
              items: [
                { name: 'Figma Variables → Design Tokens', desc: 'Pipeline automatisé depuis les variables Figma vers les fichiers de tokens (JSON/CSS). Toute mise à jour DS se propage automatiquement.' },
                { name: 'NPM bundling & releases', desc: 'Build et publication automatique des packages composants à chaque merge validé sur main.' },
                { name: 'Scaffolding de composants', desc: 'Génération automatique de la structure de fichiers d\'un nouveau composant (story, tests, types, doc) depuis un template CLI.' },
                { name: 'Publication Storybook', desc: 'Déploiement automatique de Storybook à chaque push — composants toujours synchronisés avec le code.' },
                { name: 'Tests & revue IA', desc: 'Agents IA qui vérifient la conformité DS des nouveaux composants avant merge — nommage, tokens, accessibilité.' },
              ],
            },
            {
              title: 'Automatiser la documentation',
              icon: '📄',
              items: [
                { name: 'Tests de régression visuelle', desc: 'Comparaison automatique des screenshots de composants à chaque PR — détecte les changements visuels non intentionnels.' },
                { name: 'Props & code autogénérés', desc: 'Documentation des props et définitions de types générée directement depuis le code source. Toujours à jour.' },
                { name: 'Références icônes & tokens dynamiques', desc: 'Catalogues d\'icônes et de tokens générés automatiquement depuis les sources Figma et le code.' },
                { name: 'Génération de stories Storybook via IA', desc: 'Agents IA qui génèrent les stories Storybook depuis les composants Figma ou le code existant.' },
              ],
            },
            {
              title: 'Automatiser la communication',
              icon: '📣',
              items: [
                { name: 'Notes de release autogénérées', desc: 'Changelog généré automatiquement depuis les commits et PRs mergées — format structuré prêt à publier.' },
                { name: 'Automation Teams / Slack', desc: 'Notifications automatiques dans les canaux équipe lors de chaque release DS, deprecation ou breaking change.' },
                { name: 'Linting Figma', desc: 'Plugin Figma qui vérifie en temps réel la conformité des fichiers : composants détachés, valeurs hardcodées, noms incorrects. Alerte avant le handoff.' },
              ],
            },
          ],
          en: [
            {
              title: 'Automate delivery',
              icon: '⚙',
              items: [
                { name: 'Figma Variables → Design Tokens', desc: 'Automated pipeline from Figma variables to token files (JSON/CSS). Every DS update propagates automatically.' },
                { name: 'NPM bundling & releases', desc: 'Automatic build and publish of component packages on every validated merge to main.' },
                { name: 'Component scaffolding', desc: 'Auto-generate the file structure of a new component (story, tests, types, docs) from a CLI template.' },
                { name: 'Storybook publishing', desc: 'Automatic Storybook deployment on every push — components always in sync with code.' },
                { name: 'AI-powered testing & review', desc: 'AI agents that check DS compliance of new components before merge — naming, tokens, accessibility.' },
              ],
            },
            {
              title: 'Automate documentation',
              icon: '📄',
              items: [
                { name: 'Visual regression testing', desc: 'Automatic screenshot comparison of components on every PR — detects unintended visual changes.' },
                { name: 'Autogenerated props & code definitions', desc: 'Prop documentation and type definitions generated directly from source code. Always current.' },
                { name: 'Dynamic icon & token references', desc: 'Icon and token catalogues auto-generated from Figma and code sources.' },
                { name: 'Storybook story generation via AI', desc: 'AI agents that generate Storybook stories from Figma components or existing code.' },
              ],
            },
            {
              title: 'Automate communication',
              icon: '📣',
              items: [
                { name: 'Autogenerated release notes', desc: 'Changelog auto-generated from commits and merged PRs — structured format ready to publish.' },
                { name: 'Teams / Slack automation', desc: 'Automatic notifications in team channels on every DS release, deprecation or breaking change.' },
                { name: 'Figma linting', desc: 'Figma plugin that checks file compliance in real time: detached components, hardcoded values, incorrect names. Alerts before handoff.' },
              ],
            },
          ],
        },
      },
    },
  };

  /* ══════════════════════════════════════════
     CONFIG & STATE
     ══════════════════════════════════════════ */
  const COMPONENT_FILES = [
    { id: 'checkbox',            label: 'Checkbox' },
    { id: 'radio-button',        label: 'Radio Button' },
    { id: 'number-stepper',      label: 'Number Stepper' },
    { id: 'date-picker',         label: 'Date Picker' },
    { id: 'notification-banner', label: 'Notification Banner' },
    { id: 'stepper',             label: 'Stepper' },
  ];

  const DEFAULT_SECTION = 'design-systems';
  const CHECKLIST_KEY_PREFIX = 'hub_careers_';
  const LANG_STORAGE_KEY = 'hub_lang';

  let lang = localStorage.getItem(LANG_STORAGE_KEY) || 'fr';
  let componentsLoaded = false;
  let designSystemsLoaded = false;
  let knowledgeLoaded = false;
  let craftLoaded = false;
  let knowledgeData = null;

  /* ══════════════════════════════════════════
     I18N HELPERS
     ══════════════════════════════════════════ */
  function t(key) {
    return I18N[lang][key] || key;
  }

  function applyLang() {
    document.documentElement.lang = lang;

    /* Update all data-i18n elements */
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = I18N[lang][key];
      if (val === undefined) return;
      if (el.dataset.i18nHtml) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    /* Lang toggle buttons */
    document.querySelectorAll('.hub-lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    /* Re-render dynamic sections */
    renderPrompting();
    renderCareers();
    renderDesignOps();
    renderPrototypes();
    if (designSystemsLoaded) rerenderDesignSystems();
    if (knowledgeLoaded && knowledgeData) renderKnowledge(knowledgeData);
    if (craftLoaded) renderCraft();

    restoreChecklists();
  }


  /* ══════════════════════════════════════════
     INIT
     ══════════════════════════════════════════ */
  function init() {
    /* Initialise Mermaid with a theme matching the hub palette */
    if (window.mermaid) {
      window.mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor: '#2a3a52',
          primaryTextColor: '#F5F0E8',
          primaryBorderColor: '#2E9E5B',
          lineColor: '#C6A669',
          secondaryColor: '#20342a',
          tertiaryColor: '#2e2640',
          background: '#1a1a1c',
          mainBkg: '#1a1a1c',
          nodeBorder: '#3a3a3d',
          clusterBkg: '#1a1a1c',
          clusterBorder: '#3a3a3d',
          titleColor: '#F5F0E8',
          edgeLabelBackground: '#1a1a1c',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '13px',
        },
      });
    }
    bindNav();
    bindLangToggle();
    applyLang();
    const hash = location.hash.replace('#', '');
    const target = document.getElementById('hub-section-' + hash) ? hash : DEFAULT_SECTION;
    showSection(target, false);
  }

  /* ══════════════════════════════════════════
     NAVIGATION
     ══════════════════════════════════════════ */
  function bindNav() {
    document.querySelectorAll('.hub-nav-btn').forEach(btn => {
      btn.addEventListener('click', () => showSection(btn.dataset.section, true));
    });
  }

  window.showSection = function showSection(id, pushHash) {
    document.querySelectorAll('.hub-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.hub-nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.section === id);
    });
    const section = document.getElementById('hub-section-' + id);
    if (section) section.classList.add('active');
    if (pushHash) history.pushState(null, '', '#' + id);

    if (id === 'components' && !componentsLoaded) loadComponents();
    if (id === 'design-systems' && !designSystemsLoaded) loadDesignSystems();
    if (id === 'knowledge' && !knowledgeLoaded) loadKnowledge();
    if (id === 'craft' && !craftLoaded) { craftLoaded = true; renderCraft(); }
    if (id === 'designops') renderDesignOps();
    if (id === 'prototypes') renderPrototypes();
  }

  /* ══════════════════════════════════════════
     LANG TOGGLE
     ══════════════════════════════════════════ */
  function bindLangToggle() {
    document.querySelectorAll('.hub-lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        lang = btn.dataset.lang;
        localStorage.setItem(LANG_STORAGE_KEY, lang);
        applyLang();
      });
    });
  }

  /* ══════════════════════════════════════════
     DESIGN SYSTEMS
     ══════════════════════════════════════════ */
  const DS_INLINE = {
    systems: [
      {
        id: 'fondamentaux',
        name: 'Design System Fondamentaux',
        name_fr: 'Design System Fondamentaux',
        url: 'https://www.figma.com/design/Ey7ObIDiHfM8za2KC5goRg/Design-System-Fondamentaux?node-id=6018-389&t=yf2v4lxqeFrCi1vo-1',
        description_fr: 'Fondation partagée par toutes les équipes produit — tokens, typographie, couleurs, grilles, ombres et composants de base.',
        description_en: 'Shared foundation across all product teams — tokens, typography, colours, grids, shadows and base components.',
        badge_fr: 'Fondation',
        badge_en: 'Foundation',
        accent: 'var(--red)',
      },
      {
        id: 'app',
        name: 'Design System App',
        name_fr: 'Design System App',
        url: 'https://www.figma.com/design/LnstLU9VxLSk1vBd3koWzw/Design-System-App?node-id=4904-21085&t=5Zr4StR0ttIBD3ig-1',
        description_fr: 'Composants et patterns pour l\'application mobile (iOS & Android) — construits sur la fondation.',
        description_en: 'Components and patterns for the mobile app (iOS & Android) — built on the foundation.',
        badge_fr: 'App mobile',
        badge_en: 'Mobile app',
        accent: 'var(--blue)',
      },
      {
        id: 'vel',
        name: 'VEL / E-commerce Design System',
        name_fr: 'VEL / E-commerce Design System',
        url: 'https://www.figma.com/design/mtBoy1Ap5sgUt6lbB3duGx/Puy-du-Fou---Reviews-Parcours-de-commande?node-id=622-13283&t=5Esz2dOmEfPIJihy-1',
        description_fr: 'Système de design pour le parcours e-commerce VEL — tunnel d\'achat, réservations et billetterie en ligne.',
        description_en: 'Design system for the VEL e-commerce journey — purchase funnel, reservations and online ticketing.',
        badge_fr: 'E-commerce',
        badge_en: 'E-commerce',
        accent: 'var(--gold-dark)',
      },
    ],
  };

  let dsData = null;

  async function loadDesignSystems() {
    designSystemsLoaded = true;
    // Use inline data immediately so it works on file:// and when offline
    dsData = DS_INLINE;
    rerenderDesignSystems();
    // Also try to load from file in case it has been updated
    try {
      const res = await fetch('data/design-systems.json');
      if (res.ok) {
        dsData = await res.json();
        rerenderDesignSystems();
      }
    } catch { /* offline or file://, inline data already rendered */ }
  }

  function rerenderDesignSystems() {
    if (!dsData) return;
    const root = document.getElementById('ds-root');
    if (!root) return;
    const isFr = lang === 'fr';
    const systems = dsData.systems || [];
    const [first, ...rest] = systems;
    if (!first) return;
    const linkSvg = w => `<svg width="${w}" height="${w}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
    const card = (sys, large) => `
      <a href="${sys.url}" target="_blank" rel="noopener" class="${large ? 'ds-card-foundation' : 'ds-card-product'}" style="border-top: 3px solid ${sys.accent || 'var(--red)'};">
        <span class="ds-badge">${isFr ? sys.badge_fr : sys.badge_en}</span>
        <div class="ds-name">${isFr ? sys.name_fr : sys.name}</div>
        <div class="ds-desc">${isFr ? sys.description_fr : sys.description_en}</div>
        <div class="ds-link">${linkSvg(large ? 14 : 12)} ${t('ds_open_figma')}</div>
      </a>`;
    const aiChecklist = `
      <div style="margin-top:2rem;">
        <div class="dops-section-label">${isFr ? 'Checklist — prêt pour l\'IA ?' : 'Checklist — AI readiness?'}</div>
        <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.7;margin-bottom:1rem;">${isFr ? 'Vérifiez que votre DS est structuré pour tirer parti des outils IA (Figma MCP, variables, génération automatisée).' : 'Verify your DS is structured to leverage AI tools (Figma MCP, variables, automated generation).'}</p>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          ${[
            {
              id: 'ai-check-variables',
              label: isFr ? 'Variables & tokens' : 'Variables & tokens',
              items: isFr
                ? ['Variables Figma nommées avec convention cohérente', 'Tokens liés aux composants (pas de valeurs codées en dur)', 'Modes (light/dark, brand) configurés', 'Variables publiées dans la bibliothèque']
                : ['Figma variables named with consistent convention', 'Tokens linked to components (no hardcoded values)', 'Modes (light/dark, brand) configured', 'Variables published in the library'],
            },
            {
              id: 'ai-check-components',
              label: isFr ? 'Composants' : 'Components',
              items: isFr
                ? ['Variants nommés avec des valeurs prévisibles (Size=S/M/L, State=Default/Hover)', 'Props booléens préfixés avec "is" ou "has"', 'Auto-layout activé sur tous les composants', 'Pas de layers nommés "Frame 123"']
                : ['Variants named with predictable values (Size=S/M/L, State=Default/Hover)', 'Boolean props prefixed with "is" or "has"', 'Auto-layout enabled on all components', 'No layers named "Frame 123"'],
            },
            {
              id: 'ai-check-layout',
              label: isFr ? 'Layout & grilles' : 'Layout & grids',
              items: isFr
                ? ['Grilles documentées dans les frames de référence', 'Espacement basé sur une échelle fixe (4/8px)', 'Breakpoints définis pour mobile & desktop', 'Contraintes de redimensionnement configurées']
                : ['Grids documented in reference frames', 'Spacing based on fixed scale (4/8px)', 'Breakpoints defined for mobile & desktop', 'Resize constraints configured'],
            },
            {
              id: 'ai-check-styles',
              label: isFr ? 'Styles & documentation' : 'Styles & documentation',
              items: isFr
                ? ['Styles de texte publiés et nommés', 'Styles de couleur alignés sur les variables', 'Effets (ombres) documentés', 'Description des composants remplie dans Figma']
                : ['Text styles published and named', 'Colour styles aligned with variables', 'Effects (shadows) documented', 'Component descriptions filled in Figma'],
            },
          ].map(group => `
            <details class="ai-tool-details">
              <summary class="ai-tool-summary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                ${group.label}
              </summary>
              <div class="ai-tool-body">
                <ul>${group.items.map(item => `<li>${item}</li>`).join('')}</ul>
              </div>
            </details>`).join('')}
        </div>
      </div>`;

    root.innerHTML = card(first, true) + (rest.length ? `<div class="ds-grid">${rest.map(s => card(s, false)).join('')}</div>` : '') + aiChecklist;
  }

  /* ══════════════════════════════════════════
     COMPONENTS KITCHEN SINK
     ══════════════════════════════════════════ */
  async function loadComponents() {
    componentsLoaded = true;
    const grid = document.getElementById('components-grid');
    if (!grid) return;
    grid.innerHTML = '';

    for (const comp of COMPONENT_FILES) {
      const card = document.createElement('div');
      card.className = 'component-preview-card';
      card.innerHTML = `
        <div class="component-preview-label">${comp.label}</div>
        <iframe class="component-preview-iframe" title="${comp.label}" loading="lazy"></iframe>`;
      grid.appendChild(card);

      const iframe = card.querySelector('iframe');
      try {
        const res = await fetch(`components/${comp.id}.html`);
        const html = await res.text();
        iframe.srcdoc = html;
        iframe.addEventListener('load', () => {
          const body = iframe.contentDocument?.body;
          if (body) iframe.style.height = Math.max(body.scrollHeight, 180) + 'px';
        });
      } catch {
        iframe.srcdoc = `<p style="padding:1rem;font-size:0.8rem;color:#75633F;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">${t('comp_not_found')}</p>`;
      }
    }
  }

  /* ══════════════════════════════════════════
     KNOWLEDGE
     ══════════════════════════════════════════ */
  async function loadKnowledge() {
    knowledgeLoaded = true;
    try {
      const res = await fetch('data/knowledge.json');
      knowledgeData = await res.json();
      renderKnowledge(knowledgeData);
    } catch {
      document.getElementById('knowledge-root').innerHTML =
        `<p style="color:var(--text-muted);font-size:0.85rem;margin-top:1rem;">${t('know_error')}</p>`;
    }
  }

  function renderKnowledge(data) {
    const root = document.getElementById('knowledge-root');
    if (!root) return;

    /* Category labels differ by lang — map id → label */
    const labelMap = {
      psychology:     { fr: '🧠 Psychologie & Sciences comportementales', en: '🧠 Psychology & Behavioural Science' },
      communication:  { fr: '💬 Communication & Facilitation',            en: '💬 Communication & Facilitation' },
      accessibility:  { fr: '♿ Accessibilité',                           en: '♿ Accessibility' },
      'mobile-desktop': { fr: '📱 Mobile vs Desktop',                    en: '📱 Mobile vs Desktop' },
      microcopy:      { fr: '✍️ Microcopy',                              en: '✍️ Microcopy' },
      'user-flows':   { fr: '🗺️ User Flows',                             en: '🗺️ User Flows' },
      inspiration:    { fr: '✨ Inspiration',                             en: '✨ Inspiration' },
      icons:          { fr: '🔷 Icônes',                                  en: '🔷 Icons' },
      'ui-elements':  { fr: '🧩 Éléments UI',                             en: '🧩 UI Elements' },
    };

    /* Small illustrative diagrams so a group's UI pattern is recognizable
       at a glance, not just a text label — keyed by group label. */
    const groupIllustrations = {
      'Stepper': `<svg width="100%" height="56" viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="28" r="10" fill="var(--gold)" />
        <path d="M20 28l3 3 6-7" stroke="var(--bg-card)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <line x1="34" y1="28" x2="82" y2="28" stroke="var(--gold)" stroke-width="2"/>
        <circle cx="92" cy="28" r="10" fill="var(--gold)" />
        <circle cx="92" cy="28" r="4" fill="var(--bg-card)"/>
        <line x1="102" y1="28" x2="150" y2="28" stroke="var(--border-strong)" stroke-width="2"/>
        <circle cx="160" cy="28" r="10" fill="var(--bg-card-muted)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="160" y="32" font-size="10" font-weight="700" fill="var(--text-muted)" text-anchor="middle">3</text>
        <line x1="170" y1="28" x2="206" y2="28" stroke="var(--border-strong)" stroke-width="2"/>
        <circle cx="216" cy="28" r="10" fill="var(--bg-card-muted)" stroke="var(--border-strong)" stroke-width="1.5"/>
        <text x="216" y="32" font-size="10" font-weight="700" fill="var(--text-muted)" text-anchor="middle">4</text>
      </svg>`,
      'Breadcrumb & Checkout': `<svg width="100%" height="56" viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="12" y="32" font-size="11" font-weight="600" fill="var(--text-muted)">Accueil</text>
        <path d="M62 22l7 6-7 6" stroke="var(--border-strong)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="78" y="32" font-size="11" font-weight="600" fill="var(--text-muted)">Panier</text>
        <path d="M124 22l7 6-7 6" stroke="var(--border-strong)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <text x="140" y="32" font-size="11" font-weight="700" fill="var(--gold)">Paiement</text>
        <path d="M204 22l7 6-7 6" stroke="var(--border-strong)" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>`,
    };

    root.innerHTML = `
      <div class="knowledge-sub-tabs">
        ${data.categories.map((cat, i) => `
          <button class="knowledge-tab-btn ${i === 0 ? 'active' : ''}" data-cat="${cat.id}">
            ${labelMap[cat.id]?.[lang] || cat.icon + ' ' + cat.label}
          </button>`).join('')}
      </div>
      ${data.categories.map((cat, i) => `
        <div class="knowledge-panel ${cat.linkList ? 'link-list' : ''} ${i === 0 ? 'active' : ''}" id="kpanel-${cat.id}">
          ${cat.linkList ? (
            cat.groups?.length ? cat.groups.map(g => `
              <div class="link-list-group">
                <div class="link-list-group-label">${g.label}</div>
                ${groupIllustrations[g.label] ? `<div class="link-list-group-illustration">${groupIllustrations[g.label]}</div>` : ''}
                <div class="link-list-group-rows">
                  ${g.resources.map(r => `
                    <a href="${r.url}" target="_blank" rel="noopener" class="link-list-row">
                      ${r.title}
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>`).join('')}
                </div>
              </div>`).join('') : `<div class="link-list-empty">${t('know_list_empty')}</div>`
          ) : cat.resources.map(r => `
            <a href="${r.url}" target="_blank" rel="noopener" class="resource-card">
              <span class="resource-type-badge resource-type-${r.type}">${r.type}</span>
              <div>
                <div class="resource-title">${r.title}</div>
                <div class="resource-desc">${r.description}</div>
              </div>
            </a>`).join('')}
        </div>`).join('')}`;

    root.querySelectorAll('.knowledge-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        root.querySelectorAll('.knowledge-tab-btn').forEach(b => b.classList.remove('active'));
        root.querySelectorAll('.knowledge-panel').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const panel = document.getElementById('kpanel-' + btn.dataset.cat);
        if (panel) panel.classList.add('active');
      });
    });
  }

  /* ══════════════════════════════════════════
     CRAFT (dynamic render)
     ══════════════════════════════════════════ */
  function renderCraft() {
    const root = document.getElementById('craft-root');
    if (!root) return;
    const isFr = lang === 'fr';
    const t = I18N[lang];

    const cardStyle = `
      background:var(--bg-card);
      border:1.5px solid var(--gold);
      border-radius:0.75rem;
      overflow:hidden;
      text-decoration:none;
      color:var(--text-primary);
      display:flex;
      flex-direction:column;
      transition:box-shadow 160ms ease, transform 160ms ease;
      cursor:pointer;
      max-width:280px;
    `;
    const thumbStyle = `
      background:var(--bg-card-muted);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:1.25rem 0 1rem;
      min-height:108px;
    `;

    const thumb = `<svg width="120" height="72" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="8" width="108" height="56" rx="6" fill="var(--bg-card-muted)" stroke="var(--gold2)" stroke-width="1.5"/>
      <rect x="16" y="18" width="36" height="6" rx="3" fill="var(--crimson)" fill-opacity="0.15"/>
      <rect x="16" y="28" width="26" height="5" rx="2.5" fill="var(--gold2)" fill-opacity="0.5"/>
      <rect x="16" y="37" width="32" height="5" rx="2.5" fill="var(--green)" fill-opacity="0.25"/>
      <rect x="16" y="46" width="22" height="5" rx="2.5" fill="var(--blue)" fill-opacity="0.25"/>
      <rect x="68" y="10" width="38" height="52" rx="18" fill="var(--bg-card-sunken)" fill-opacity="0.06" stroke="var(--gold2)" stroke-width="1"/>
      <circle cx="87" cy="28" r="10" fill="var(--bg-card-muted)" stroke="var(--gold2)" stroke-width="1"/>
      <rect x="80" y="42" width="14" height="3" rx="1.5" fill="var(--gold2)" fill-opacity="0.6"/>
      <rect x="80" y="49" width="14" height="3" rx="1.5" fill="var(--gold2)" fill-opacity="0.3"/>
      <rect x="80" y="56" width="10" height="3" rx="1.5" fill="var(--gold2)" fill-opacity="0.2"/>
      <rect x="72" y="20" width="30" height="5" rx="2.5" fill="var(--crimson)"/>
    </svg>`;

    root.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;margin-top:0.5rem;">
        <a href="pdf-filter-builder.html" style="${cardStyle}"
           onmouseover="this.style.boxShadow='0 6px 24px rgba(154,154,154,.2)';this.style.transform='translateY(-2px)'"
           onmouseout="this.style.boxShadow='none';this.style.transform='none'">
          <div style="${thumbStyle}">${thumb}</div>
          <div style="padding:0.9rem;display:flex;flex-direction:column;gap:0.4rem;flex:1;">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.5rem;">
              <span style="font-weight:700;font-size:0.85rem;line-height:1.3;">${isFr ? 'Constructeur de filtres' : 'Filter builder'}</span>
              <span style="font-size:0.65rem;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;padding:0.2rem 0.55rem;border-radius:999px;background:var(--gold-tint-bg);color:var(--gold);display:inline-block;flex-shrink:0;">${isFr ? 'Outil' : 'Tool'}</span>
            </div>
            <p style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin:0;">${isFr
              ? 'Choisissez vos critères — l\'outil déduit le contrôle UI et la logique AND/OR adaptés.'
              : 'Define filter criteria and get the right UI control and AND/OR logic recommended automatically.'
            }</p>
            <span style="font-size:0.75rem;font-weight:700;color:var(--crimson);margin-top:auto;padding-top:0.4rem;">${t.proto_open}</span>
          </div>
        </a>
      </div>
    `;
  }

  /* ══════════════════════════════════════════
     PROMPTING — SVG ILLUSTRATIONS
     ══════════════════════════════════════════ */

  function svgKeywords(isFr) {
    const W = 220, H = 136;
    const bad  = isFr ? '"tendance"' : '"trendy"';
    const good = 'neobrutalist';
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;" aria-hidden="true">
      <rect x="0" y="0" width="104" height="${H}" fill="var(--bg-card)"/>
      <rect x="116" y="0" width="104" height="${H}" fill="var(--bg-card)"/>
      <line x1="110" y1="0" x2="110" y2="${H}" stroke="var(--border)" stroke-width="1"/>
      <rect x="6" y="8" width="92" height="18" rx="3" fill="var(--bg-card-muted)" stroke="var(--border)" stroke-width="1"/>
      <text x="10" y="20" font-family="-apple-system,sans-serif" font-size="7.5" fill="var(--red)" opacity="0.8">${bad}</text>
      <rect x="6"  y="34" width="40" height="28" rx="2" fill="var(--border)" opacity="0.5"/>
      <rect x="52" y="34" width="46" height="12" rx="2" fill="var(--border)" opacity="0.35"/>
      <rect x="52" y="50" width="30" height="12" rx="2" fill="var(--border)" opacity="0.25"/>
      <rect x="6"  y="68" width="92" height="8"  rx="2" fill="var(--border)" opacity="0.4"/>
      <rect x="6"  y="80" width="60" height="8"  rx="2" fill="var(--border)" opacity="0.3"/>
      <rect x="6"  y="92" width="80" height="22" rx="2" fill="var(--border)" opacity="0.25"/>
      <text x="52" y="${H - 5}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="7" fill="var(--red)" font-weight="700">${isFr ? 'vague → imprévisible' : 'vague → unpredictable'}</text>
      <rect x="118" y="8" width="96" height="18" rx="3" fill="var(--text-primary)"/>
      <text x="122" y="20" font-family="-apple-system,sans-serif" font-size="7.5" fill="var(--gold)">${good}</text>
      <rect x="118" y="34" width="96" height="14" rx="0" fill="var(--text-primary)"/>
      <text x="122" y="44" font-family="Georgia,serif" font-size="7" fill="var(--bg-card)" font-weight="700">HEADING</text>
      <rect x="118" y="52" width="44" height="44" rx="0" fill="var(--red)"/>
      <rect x="166" y="52" width="48" height="20" rx="0" fill="var(--bg-card-muted)" stroke="var(--text-primary)" stroke-width="1.5"/>
      <rect x="166" y="76" width="48" height="20" rx="0" fill="var(--border)" stroke="var(--text-primary)" stroke-width="1.5"/>
      <rect x="118" y="100" width="96" height="10" rx="0" fill="var(--bg-card-muted)" stroke="var(--text-primary)" stroke-width="1"/>
      <text x="216" y="${H - 5}" text-anchor="end" font-family="-apple-system,sans-serif" font-size="7" fill="var(--green)" font-weight="700">${isFr ? 'précis → cohérent' : 'precise → consistent'}</text>
    </svg>`;
  }

  function svgVisualRef(isFr) {
    const W = 220, H = 136;
    const levels = isFr ? ['Moodboard', 'Screenshot DS', 'Figma MCP'] : ['Moodboard', 'DS screenshot', 'Figma MCP'];
    const colors = ['var(--gold2)', 'var(--blue)', 'var(--green)'];
    const fills  = ['var(--gold2-bg)', 'var(--blue-tint-bg)', 'var(--green-tint-bg)'];
    const descs  = isFr ? ['style ~approx.', 'tokens + couleurs', 'précision max'] : ['~approx. style', 'tokens + colours', 'max precision'];
    const bw = 58, bh = 52, gap = 12, startX = 8;
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;" aria-hidden="true">
      <defs><marker id="ref-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--gold)"/></marker></defs>
      <text x="${W/2}" y="11" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="7" fill="var(--text-muted)" letter-spacing="0.08em">${isFr ? 'FIDÉLITÉ CROISSANTE →' : 'INCREASING FIDELITY →'}</text>
      ${levels.map((l, i) => {
        const x = startX + i * (bw + gap);
        return `<rect x="${x}" y="18" width="${bw}" height="${bh}" rx="3" fill="${fills[i]}" stroke="${colors[i]}" stroke-width="1.5"/>
        <rect x="${x+4}" y="22" width="${bw-8}" height="7" rx="1" fill="${colors[i]}" opacity="0.6"/>
        <rect x="${x+4}" y="32" width="${bw*0.6}" height="4" rx="1" fill="${colors[i]}" opacity="0.3"/>
        <rect x="${x+4}" y="38" width="${bw*0.8}" height="4" rx="1" fill="${colors[i]}" opacity="0.2"/>
        <rect x="${x+4}" y="44" width="${bw*0.5}" height="4" rx="1" fill="${colors[i]}" opacity="0.2"/>
        ${i === 2 ? `<text x="${x+bw/2}" y="59" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="8" fill="${colors[i]}" font-weight="700">★</text>` : ''}
        <text x="${x+bw/2}" y="80" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="7" fill="${colors[i]}" font-weight="700">${l}</text>
        <text x="${x+bw/2}" y="90" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6" fill="var(--text-muted)">${descs[i]}</text>
        ${i < levels.length - 1 ? `<line x1="${x+bw+2}" y1="44" x2="${x+bw+gap-3}" y2="44" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#ref-arr)"/>` : ''}`;
      }).join('')}
      <text x="${W/2}" y="${H - 5}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)" font-style="italic">${isFr ? 'fidélité visuelle ≠ qualité design' : 'visual fidelity ≠ design quality'}</text>
    </svg>`;
  }

  function svgAiAnalysis(isFr) {
    const W = 220, H = 136;
    const tokens = isFr ? ['fond sombre', 'typo blanche', 'contraste ↑', 'flat design'] : ['dark bg', 'white type', 'high contrast', 'flat design'];
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;" aria-hidden="true">
      <defs><marker id="ana-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--gold)"/></marker></defs>
      <rect x="4" y="14" width="44" height="60" rx="3" fill="var(--bg-card-sunken)" stroke="var(--border)" stroke-width="1"/>
      <rect x="4" y="14" width="44" height="14" rx="3" fill="var(--purple-tint-bg)"/>
      <rect x="8" y="32" width="36" height="4" rx="1" fill="var(--white)" opacity="0.6"/>
      <rect x="8" y="39" width="26" height="3" rx="1" fill="var(--white)" opacity="0.35"/>
      <rect x="8" y="45" width="32" height="3" rx="1" fill="var(--white)" opacity="0.25"/>
      <rect x="8" y="51" width="16" height="8" rx="2" fill="var(--purple)"/>
      <text x="26" y="84" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">${isFr ? 'Page ref.' : 'Ref. page'}</text>
      <line x1="50" y1="44" x2="62" y2="44" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#ana-arr)"/>
      <rect x="64" y="24" width="40" height="40" rx="20" fill="var(--bg-card-muted)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="84" y="49" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="18">🤖</text>
      <text x="84" y="74" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">AI chat</text>
      <line x1="106" y1="44" x2="118" y2="44" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#ana-arr)"/>
      ${tokens.map((tok, i) => {
        const x = 120 + (i % 2) * 48;
        const y = 14 + Math.floor(i / 2) * 22;
        return `<rect x="${x}" y="${y}" width="44" height="14" rx="7" fill="var(--text-primary)"/>
        <text x="${x+22}" y="${y+9.5}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6" fill="var(--gold)">${tok}</text>`;
      }).join('')}
      <line x1="142" y1="72" x2="142" y2="82" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#ana-arr)"/>
      <rect x="118" y="84" width="96" height="20" rx="3" fill="var(--bg-card)" stroke="var(--red)" stroke-width="1.5"/>
      <text x="166" y="97" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--red)" font-weight="700">→ ${isFr ? 'Nouveau prompt' : 'New prompt'}</text>
      <text x="${W/2}" y="${H - 4}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)" font-style="italic">${isFr ? 'description → contexte visuel' : 'description → visual context'}</text>
    </svg>`;
  }

  function svgMockData(isFr) {
    const W = 220, H = 136;
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;" aria-hidden="true">
      <defs><marker id="dat-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--gold)"/></marker></defs>
      <rect x="4" y="8" width="86" height="96" rx="3" fill="var(--bg-card-sunken)" stroke="var(--gold)" stroke-width="1"/>
      <text x="10" y="22" font-family="monospace" font-size="7" fill="var(--gold)">{&quot;user&quot;:</text>
      <text x="14" y="32" font-family="monospace" font-size="6.5" fill="var(--bg-card)">&quot;Sarah K.&quot;,</text>
      <text x="10" y="42" font-family="monospace" font-size="7" fill="var(--gold)">&quot;courses&quot;:</text>
      <text x="14" y="52" font-family="monospace" font-size="6.5" fill="var(--bg-card)">[{</text>
      <text x="18" y="62" font-family="monospace" font-size="6.5" fill="var(--teal)">&quot;name&quot;:</text>
      <text x="18" y="71" font-family="monospace" font-size="6" fill="var(--bg-card)">&quot;UX Research&quot;</text>
      <text x="18" y="80" font-family="monospace" font-size="6.5" fill="var(--teal)">&quot;status&quot;:</text>
      <text x="18" y="89" font-family="monospace" font-size="6" fill="var(--green)">&quot;done&quot;</text>
      <text x="14" y="98" font-family="monospace" font-size="6.5" fill="var(--bg-card)">}]}</text>
      <text x="45" y="${H - 4}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">JSON mock</text>
      <line x1="92" y1="56" x2="106" y2="56" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#dat-arr)"/>
      <rect x="108" y="8" width="108" height="96" rx="3" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>
      <circle cx="122" cy="28" r="10" fill="var(--red)"/>
      <text x="122" y="32" text-anchor="middle" font-family="Georgia,serif" font-size="8" fill="var(--bg-card)" font-weight="700">SK</text>
      <rect x="136" y="21" width="52" height="6" rx="1" fill="var(--text-primary)" opacity="0.7"/>
      <rect x="136" y="30" width="34" height="4" rx="1" fill="var(--border)"/>
      <rect x="112" y="46" width="100" height="4" rx="2" fill="var(--bg-card-muted)"/>
      <rect x="112" y="46" width="65"  height="4" rx="2" fill="var(--green)"/>
      <rect x="112" y="56" width="100" height="16" rx="2" fill="var(--bg-card-muted)"/>
      <rect x="116" y="60" width="48" height="4" rx="1" fill="var(--text-primary)" opacity="0.6"/>
      <rect x="172" y="59" width="34" height="6" rx="3" fill="var(--green)"/>
      <text x="189" y="64.5" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="5.5" fill="var(--white)" font-weight="700">${isFr ? 'Terminé' : 'Done'}</text>
      <rect x="112" y="76" width="100" height="16" rx="2" fill="var(--bg-card-muted)"/>
      <rect x="116" y="80" width="54" height="4" rx="1" fill="var(--text-primary)" opacity="0.6"/>
      <rect x="172" y="79" width="34" height="6" rx="3" fill="var(--blue)"/>
      <text x="189" y="84.5" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="5.5" fill="var(--white)" font-weight="700">${isFr ? 'Actif' : 'Active'}</text>
      <text x="162" y="${H - 4}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">${isFr ? 'contenu guide le layout' : 'content drives layout'}</text>
    </svg>`;
  }

  function svgCodeSnippet(isFr) {
    const W = 220, H = 136;
    return `<svg viewBox="0 0 ${W} ${H}" width="100%" style="max-width:${W}px;display:block;" aria-hidden="true">
      <defs><marker id="snp-arr" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="var(--gold)"/></marker></defs>
      <text x="4" y="12" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">Polaris · Table</text>
      <rect x="4" y="16" width="82" height="76" rx="3" fill="var(--bg-card-sunken)" stroke="var(--gold)" stroke-width="1"/>
      <text x="10" y="28" font-family="monospace" font-size="6.5" fill="var(--purple)">&lt;Table&gt;</text>
      <text x="14" y="38" font-family="monospace" font-size="6.5" fill="var(--teal)">&lt;thead&gt;</text>
      <text x="18" y="47" font-family="monospace" font-size="6" fill="var(--bg-card)">&lt;th&gt;Course&lt;/th&gt;</text>
      <text x="18" y="56" font-family="monospace" font-size="6" fill="var(--bg-card)">&lt;th&gt;Status&lt;/th&gt;</text>
      <text x="14" y="65" font-family="monospace" font-size="6.5" fill="var(--teal)">&lt;/thead&gt;</text>
      <text x="14" y="74" font-family="monospace" font-size="6.5" fill="var(--bg-card)">&lt;tbody&gt;…</text>
      <text x="10" y="83" font-family="monospace" font-size="6.5" fill="var(--purple)">&lt;/Table&gt;</text>
      <text x="45" y="100" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6" fill="var(--text-muted)">+ ${isFr ? 'prompt texte' : 'text prompt'}</text>
      <line x1="88" y1="54" x2="100" y2="54" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#snp-arr)"/>
      <rect x="102" y="40" width="28" height="28" rx="14" fill="var(--bg-card-muted)" stroke="var(--gold)" stroke-width="1.5"/>
      <text x="116" y="58" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="14">⚡</text>
      <line x1="132" y1="54" x2="144" y2="54" stroke="var(--gold)" stroke-width="1.5" marker-end="url(#snp-arr)"/>
      <rect x="146" y="16" width="70" height="84" rx="3" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>
      <rect x="146" y="16" width="70" height="14" rx="2" fill="var(--bg-card-muted)"/>
      <rect x="150" y="20" width="22" height="4" rx="1" fill="var(--text-muted)" opacity="0.6"/>
      <rect x="178" y="20" width="18" height="4" rx="1" fill="var(--text-muted)" opacity="0.6"/>
      ${[0,1,2,3].map(i => `
        <rect x="146" y="${30+i*16}" width="70" height="16" fill="${i%2===1?'var(--bg-card-muted)':'var(--bg-card)'}" stroke="var(--bg-card-muted)" stroke-width="0.5"/>
        <rect x="150" y="${34+i*16}" width="24" height="4" rx="1" fill="var(--text-primary)" opacity="0.45"/>
        <rect x="180" y="${33+i*16}" width="14" height="6" rx="3" fill="${i===0?'var(--green)':i===1?'var(--blue)':i===2?'var(--gold2)':'var(--border)'}"/>
      `).join('')}
      <text x="45"  y="${H - 4}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--text-muted)">${isFr ? 'composant source' : 'source component'}</text>
      <text x="181" y="${H - 4}" text-anchor="middle" font-family="-apple-system,sans-serif" font-size="6.5" fill="var(--green)">${isFr ? 'output précis' : 'precise output'}</text>
    </svg>`;
  }

  /* ══════════════════════════════════════════
     PROMPTING (dynamic render)
     ══════════════════════════════════════════ */
  function renderPrompting() {
    const root = document.getElementById('prompting-root');
    if (!root) return;
    const p = CONTENT.prompting;
    const isFr = lang === 'fr';

    const exIcon = type => type === 'bad' ? '❌' : type === 'ok' ? '△' : type === 'good' ? '✅' : '→';
    const exColor = type => type === 'bad' ? 'var(--red)' : type === 'ok' ? 'var(--gold2)' : type === 'good' ? 'var(--green)' : 'var(--text-muted)';

    const strategies = p.strategies[lang];
    const problems   = p.problems[lang];
    const tips       = p.tips[lang];

    root.innerHTML = `
      <!-- Intro -->
      <p style="font-size:0.82rem;color:var(--text-muted);line-height:1.8;margin-bottom:1.75rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border);">${p.intro[lang]}</p>

      <!-- Problems -->
      <div class="dops-section-label">${isFr ? 'Problèmes fréquents des prompts vagues' : 'Common problems with vague prompts'}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0 0;margin-bottom:2rem;border-top:2px solid var(--text-primary);">
        ${problems.map((pb, i) => `
          <div style="border-bottom:1px solid var(--border);border-right:${i % 2 === 0 ? '1px solid var(--border)' : 'none'};padding:1rem 1.1rem;">
            <div style="font-family:Georgia,serif;font-size:0.82rem;font-weight:700;color:var(--text-primary);margin-bottom:0.4rem;">${pb.title}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);line-height:1.7;">${pb.body}</div>
          </div>`).join('')}
      </div>

      <!-- 5 Strategies -->
      <div class="dops-section-label">${isFr ? '5 stratégies pour améliorer vos prompts' : '5 strategies to improve your prompts'}</div>
      <div style="display:flex;flex-direction:column;gap:0;margin-bottom:2rem;">
        ${strategies.map((s, si) => `
          <div style="border-left:3px solid var(--red);padding:1.1rem 0 1.25rem 1.25rem;border-bottom:1px solid var(--border);">
            <div style="display:flex;align-items:baseline;gap:0.65rem;margin-bottom:0.6rem;">
              <span style="font-family:Georgia,serif;font-size:0.65rem;font-weight:700;color:var(--red);letter-spacing:0.08em;">${s.num}</span>
              <span style="font-family:Georgia,serif;font-size:0.92rem;font-weight:700;color:var(--text-primary);">${s.title}</span>
            </div>
            <div style="display:grid;grid-template-columns:1fr 220px;gap:1.25rem;align-items:start;">
              <div>
                <p style="font-size:0.78rem;color:var(--text-muted);line-height:1.75;margin-bottom:0.75rem;">${s.body}</p>
                <div style="display:flex;flex-direction:column;gap:0.3rem;margin-bottom:${s.note ? '0.75rem' : '0'};">
                  ${s.examples.map(ex => `
                    <div style="display:flex;align-items:flex-start;gap:0.5rem;">
                      <span style="font-size:0.7rem;flex-shrink:0;margin-top:0.1rem;">${exIcon(ex.type)}</span>
                      <span style="font-size:0.74rem;color:${exColor(ex.type)};line-height:1.6;font-style:${ex.type === 'note' ? 'italic' : 'normal'};">${ex.text}</span>
                    </div>`).join('')}
                </div>
                ${s.note ? `<div style="border-left:2px solid var(--border);padding-left:0.75rem;font-size:0.72rem;color:var(--text-muted);line-height:1.65;font-style:italic;">${s.note}</div>` : ''}
              </div>
              <div style="flex-shrink:0;">${[svgKeywords, svgVisualRef, svgAiAnalysis, svgMockData, svgCodeSnippet][si](isFr)}</div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Closing -->
      <div style="border-left:3px solid var(--text-primary);padding:0.85rem 1rem;margin-bottom:2rem;font-size:0.8rem;color:var(--text-primary);line-height:1.7;">${p.closing[lang]}</div>

      <!-- Quick reference tips -->
      <div class="dops-section-label">${isFr ? 'Référence rapide — tips de prompting' : 'Quick reference — prompting tips'}</div>
      <div style="display:flex;flex-direction:column;gap:0;border-top:2px solid var(--text-primary);margin-bottom:2rem;">
        ${tips.map(t => `
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;border-bottom:1px solid var(--border);padding:0.7rem 0;">
            <div style="font-size:0.74rem;font-weight:600;color:var(--text-primary);padding-right:1rem;">${t.title}</div>
            <div style="font-family:monospace;font-size:0.67rem;color:var(--text-muted);line-height:1.6;padding-right:1rem;white-space:pre-wrap;">${t.example}</div>
            <div style="font-size:0.7rem;color:var(--green);line-height:1.55;">${t.why}</div>
          </div>`).join('')}
      </div>

      <!-- DS context files for Claude / cursor -->
      <div class="dops-section-label">${isFr ? 'Contexte design system pour l\'IA' : 'Design system context for AI'}</div>
      <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.25rem;">${isFr
        ? 'Fichiers .md à glisser dans Claude, Cursor ou votre fichier <code style="font-family:monospace;font-size:0.72rem;background:var(--bg-card-muted);color:var(--text-muted);padding:0.1em 0.3em;border-radius:0.2rem;">.cursorrules</code> pour fournir du contexte design system lors de la génération d\'interfaces.'
        : 'Drop these .md files into Claude, Cursor or your <code style="font-family:monospace;font-size:0.72rem;background:var(--bg-card-muted);color:var(--text-muted);padding:0.1em 0.3em;border-radius:0.2rem;">.cursorrules</code> to provide design system context when generating UI.'
      }</p>

      ${(() => {
        const dlSvg = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

        const priority = [
          {
            href: 'data/design-tokens-ai-context.md',
            label: isFr ? 'Tokens IA' : 'AI Tokens',
            title: isFr ? 'Design tokens — contexte IA' : 'Design tokens — AI context',
            desc: isFr
              ? '154 variables Figma (couleurs, typographie, espacements, ombres) — light & dark. À inclure dans tout prompt de génération d\'interface pour notre DS.'
              : '154 Figma variables (colours, typography, spacing, shadows) — light & dark. Include in any UI generation prompt targeting our DS.',
            tag: isFr ? 'Priorité 1' : 'Priority 1',
          },
          {
            href: 'data/design-tokens-dev-handoff.md',
            label: isFr ? 'Tokens Handoff' : 'Handoff Tokens',
            title: isFr ? 'Tokens — handoff développeur' : 'Tokens — developer handoff',
            desc: isFr
              ? 'Référence complète des tokens pour l\'intégration frontend. Noms exacts des variables, valeurs et correspondances CSS/Swift à utiliser dans le code.'
              : 'Complete token reference for frontend integration. Exact variable names, values and CSS/Swift mappings to use in code.',
            tag: isFr ? 'Priorité 2' : 'Priority 2',
          },
        ];

        const others = [
          {
            href: 'data/ios-design-guidelines.md',
            label: 'iOS Guidelines',
            desc: isFr ? 'Règles HIG complètes — touch targets, nav, typo, accessibilité, composants SwiftUI.' : 'Full HIG rules — touch targets, nav, type, accessibility, SwiftUI components.',
          },
          {
            href: 'data/design-system-patterns.md',
            label: isFr ? 'DS Patterns' : 'DS Patterns',
            desc: isFr ? 'Architecture tokens, hiérarchie primitive → sémantique → composant, pipeline Figma → code.' : 'Token architecture, primitive → semantic → component hierarchy, Figma → code pipeline.',
          },
          {
            href: 'data/mobile-ios-design.md',
            label: isFr ? 'iOS Design' : 'iOS Design',
            desc: isFr ? 'SwiftUI layouts, SF Symbols, Dynamic Type, navigation, Dark Mode.' : 'SwiftUI layouts, SF Symbols, Dynamic Type, navigation, Dark Mode.',
          },
          {
            href: 'data/mobile-android-design.md',
            label: isFr ? 'Android Design' : 'Android Design',
            desc: isFr ? 'Material Design 3, Jetpack Compose, navigation, thèmes dynamiques.' : 'Material Design 3, Jetpack Compose, navigation, dynamic theming.',
          },
          {
            href: 'data/figma-mcp-implement-design.md',
            label: 'Figma MCP',
            desc: isFr ? 'Workflow d\'implémentation Figma → code via MCP. Setup Console inclus.' : 'Figma → code implementation workflow via MCP. Console setup included.',
          },
          {
            href: 'data/web-design-guidelines.md',
            label: isFr ? 'Web Guidelines' : 'Web Guidelines',
            desc: isFr ? 'Accessibilité, formulaires, focus, animations, typographie, anti-patterns web.' : 'Accessibility, forms, focus, animations, typography, web anti-patterns.',
          },
          {
            href: 'data/ux-principles.md',
            label: isFr ? 'Principes UX' : 'UX Principles',
            desc: isFr ? '10 heuristiques Nielsen, Gestalt, charge cognitive, lois UX, métriques.' : '10 Nielsen heuristics, Gestalt, cognitive load, UX laws, metrics.',
          },
          {
            href: 'data/responsive-design.md',
            label: isFr ? 'Responsive' : 'Responsive',
            desc: isFr ? 'Mobile-first, breakpoints, Flexbox/Grid, images responsives, Container Queries.' : 'Mobile-first, breakpoints, Flexbox/Grid, responsive images, Container Queries.',
          },
          {
            href: 'data/ui-ux-pro-max.md',
            label: 'UI/UX Pro Max',
            desc: isFr ? '10 catégories de règles UI/UX priorisées — accessibilité, touch, perf, animation.' : '10 prioritised UI/UX rule categories — accessibility, touch, perf, animation.',
          },
          {
            href: 'data/i18n-localization.md',
            label: 'i18n / L10n',
            desc: isFr ? 'Internationalisation, pluralisation, RTL, formats date/nombre, Intl API.' : 'Internationalisation, pluralisation, RTL, date/number formats, Intl API.',
          },
          {
            href: 'data/copywriting.md',
            label: isFr ? 'Copywriting' : 'Copywriting',
            desc: isFr ? 'Principes de conversion : bénéfices vs features, CTA, structure de page, voix.' : 'Conversion principles: benefits vs features, CTAs, page structure, voice.',
          },
          {
            href: 'data/marketing-psychology.md',
            label: isFr ? 'Psychologie Marketing' : 'Marketing Psychology',
            desc: isFr ? 'Biais cognitifs, persuasion, pricing psychology, modèles de croissance.' : 'Cognitive biases, persuasion, pricing psychology, growth models.',
          },
          {
            href: 'data/freins-leviers-segments.md',
            label: isFr ? 'Freins & Leviers' : 'Barriers & Levers',
            desc: isFr ? 'Segments visiteurs, freins & leviers par profil (familles, couples, ados…).' : 'Visitor segments, barriers & levers by profile (families, couples, teens…).',
          },
        ];

        return `
        <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1.5rem;">
          ${priority.map(f => `
            <div class="ctx-priority-card">
              <div class="ctx-priority-left">
                <span class="ctx-priority-tag">${f.tag}</span>
                <div class="ctx-priority-title">${f.title}</div>
                <div class="ctx-priority-desc">${f.desc}</div>
              </div>
              <a href="${f.href}" download class="ctx-dl-btn ctx-dl-btn--primary">
                ${dlSvg}<span>${f.label}</span>
              </a>
            </div>`).join('')}
        </div>

        <div class="ctx-grid">
          ${others.map(f => `
            <div class="ctx-grid-card">
              <div class="ctx-grid-desc">${f.desc}</div>
              <a href="${f.href}" download class="ctx-dl-btn">
                ${dlSvg}<span>${f.label}</span>
              </a>
            </div>`).join('')}
        </div>`;
      })()}

      <!-- AI Tools & Workflows -->
      <div class="dops-section-label">${isFr ? 'Outils IA & workflows' : 'AI Tools & Workflows'}</div>
      <div style="display:flex;flex-direction:column;gap:1rem;">
        ${p.aiTools.map(tool => `
          <details class="ai-tool-details">
            <summary class="ai-tool-summary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 8 16 12 12 16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              ${tool.title[lang]}
            </summary>
            <div class="ai-tool-body">
              ${tool.body[lang]}
            </div>
          </details>`).join('')}
      </div>`;
  }

  /* ══════════════════════════════════════════
     CAREERS (dynamic render)
     ══════════════════════════════════════════ */
  const _SVG = `xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--red)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"`;
  const CAREER_ICONS = {
    role:       `<svg ${_SVG}><circle cx="12" cy="12" r="9"/><path d="M12 17v.01"/><path d="M12 13.5a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0 -3 -4"/></svg>`,
    fit:        `<svg ${_SVG}><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/><path d="M6 21v-2a4 4 0 0 1 4 -4h4"/><path d="M15 19l2 2l4 -4"/></svg>`,
    tools:      `<svg ${_SVG}><path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5"/></svg>`,
    checklist:  `<svg ${_SVG}><path d="M3.5 5.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 11.5l1.5 1.5l2.5 -2.5"/><path d="M3.5 17.5l1.5 1.5l2.5 -2.5"/><path d="M11 6l9 0"/><path d="M11 12l9 0"/><path d="M11 18l9 0"/></svg>`,
    critique:   `<svg ${_SVG}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M6 8h.01"/><path d="M9 8h.01"/><path d="M3 9h18"/></svg>`,
    whiteboard: `<svg ${_SVG}><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11z"/><path d="M7 20l5 -5l5 5"/><path d="M9 12l2 2l4 -4"/></svg>`,
    company:    `<svg ${_SVG}><path d="M3 21h18"/><path d="M5 21v-14l8 -4v18"/><path d="M19 21v-10l-6 -4"/><path d="M9 9v.01"/><path d="M9 12v.01"/><path d="M9 15v.01"/><path d="M9 18v.01"/></svg>`,
    learning:   `<svg ${_SVG}><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/><path d="M9.7 17l4.6 0"/></svg>`,
    roles:      `<svg ${_SVG}><path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9z"/><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M3 13a20 20 0 0 0 18 0"/></svg>`,
    influence:  `<svg ${_SVG}><path d="M18 8a3 3 0 0 1 0 6"/><path d="M10 8v11l-3 -3h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3 -3"/><path d="M21 12a9 9 0 0 0 -9 -9"/></svg>`,
    ai:         `<svg ${_SVG}><path d="M9.5 7h.01"/><path d="M14.5 7h.01"/><path d="M9.5 11a3.5 3.5 0 0 0 5 0"/><path d="M5 12a7 7 0 1 0 14 0a7 7 0 0 0 -14 0"/><path d="M15 5a2 2 0 0 0 -2 -2h-2a2 2 0 0 0 -2 2"/><path d="M3 12h-1"/><path d="M12 19v1"/><path d="M12 3v-1"/><path d="M21 12h1"/></svg>`,
  };

  function renderCareers() {
    const root = document.getElementById('careers-root');
    if (!root) return;
    const items = CONTENT.careers[lang];
    root.innerHTML = items.map(item => `
      <details class="careers-collapse">
        <summary><span class="careers-icon">${CAREER_ICONS[item.icon] || ''}</span>${item.summary}</summary>
        <div class="careers-collapse-body">${item.body}</div>
      </details>`).join('');
    restoreChecklists();
  }
  /* ══════════════════════════════════════════
     ROLE-FIT QUIZ
     ══════════════════════════════════════════ */

  const _quizFalse = [1,3,5,8,11,17,23];

  const quizAnswersFr = (() => {
    const a = new Array(24).fill(true);
    _quizFalse.forEach(i => { a[i] = false; });
    return a;
  })();

  const quizAnswersEn = (() => {
    const a = new Array(24).fill(true);
    _quizFalse.forEach(i => { a[i] = false; });
    return a;
  })();

  const _quizExplainFr = {
    1:  'La beauté est un moyen, pas une fin. L\'UX design vise l\'efficacité, la clarté et la satisfaction — une interface peut être sobre et convertir à merveille.',
    3:  'Faux. Un bon design peut être remarqué positivement — une animation délicate, une micro-interaction satisfaisante. Ce qui passe "inaperçu", c\'est la friction, pas le design lui-même.',
    5:  'Le designer UX produit les spécifications et les maquettes. L\'implémentation technique est assurée par les développeurs et les PO/DSI.',
    8:  'Les décisions de design sont fondées sur des données utilisateurs, des tests, des heuristiques et des principes UX — pas sur le goût personnel du designer.',
    11: 'La vraie valeur du designer se manifeste lors du suivi de l\'implémentation, des tests utilisateurs, et des itérations post-lancement. Le handoff n\'est pas une ligne d\'arrivée.',
    17: 'Suivre les tendances sans discernement produit des interfaces datées rapidement. Un bon UX s\'appuie sur des principes intemporels et les besoins spécifiques des utilisateurs.',
    23: 'Le designer UX est fondamentalement un rôle de collaboration. Travailler avec les développeurs, PM, marketing et utilisateurs est une compétence centrale, pas un obstacle.',
  };

  const _quizExplainEn = {
    1:  'Beauty is a means, not an end. UX design targets effectiveness, clarity and satisfaction — an interface can be minimal and convert brilliantly.',
    3:  'False. Good design can be positively noticed — a delightful animation, a satisfying micro-interaction. What goes "unnoticed" is friction, not the design itself.',
    5:  'The UX designer produces specs and mockups. Technical implementation is handled by developers and the product/IT team.',
    8:  'Design decisions are grounded in user research, testing, heuristics and UX principles — not the designer\'s personal taste.',
    11: 'The designer\'s real value shows in implementation follow-up, user testing, and post-launch iterations. Handoff is not the finish line.',
    17: 'Following trends without judgement produces quickly dated interfaces. Good UX is built on timeless principles and the specific needs of the user.',
    23: 'UX design is fundamentally a collaborative role. Working with developers, PMs, marketing and users is a core skill, not an obstacle.',
  };

  window.quizToggle = function(btn) {
    btn.classList.toggle('selected');
  };

  window.quizReveal = function(containerId, legendId) {
    const container = document.getElementById(containerId);
    const legend    = document.getElementById(legendId);
    if (!container || !legend) return;

    const isFr    = legendId.endsWith('-fr');
    const answers = isFr ? quizAnswersFr : quizAnswersEn;
    const explain = isFr ? _quizExplainFr : _quizExplainEn;

    const btns = container.querySelectorAll('.quiz-stmt');
    let correct = 0;

    btns.forEach(btn => {
      const idx      = parseInt(btn.dataset.idx, 10);
      const selected = btn.classList.contains('selected');
      const isTrue   = answers[idx];
      const hit      = selected === isTrue;

      btn.classList.remove('selected');
      btn.classList.add(isTrue ? 'correct' : 'wrong');
      btn.disabled = true;
      if (hit) correct++;
    });

    const misconceptionItems = _quizFalse.map(idx => {
      const btn  = container.querySelector(`[data-idx="${idx}"]`);
      const text = btn ? btn.textContent : '';
      const exp  = explain[idx] || '';
      return `<div class="quiz-legend-item"><div class="quiz-legend-stmt">"${text}"</div><div class="quiz-legend-exp">${exp}</div></div>`;
    }).join('');

    const total   = answers.length;
    const label   = isFr
      ? `<strong>${correct} / ${total}</strong> bonnes réponses`
      : `<strong>${correct} / ${total}</strong> correct answers`;
    const heading = isFr ? 'Les idées reçues expliquées' : 'Misconceptions explained';

    legend.innerHTML = `
      <div class="quiz-score">${label}</div>
      <div class="quiz-legend-heading">${heading}</div>
      ${misconceptionItems}`;
    legend.style.display = 'block';
  };

  window.quizReset = function(containerId, legendId) {
    const container = document.getElementById(containerId);
    const legend    = document.getElementById(legendId);
    if (!container || !legend) return;
    container.querySelectorAll('.quiz-stmt').forEach(btn => {
      btn.classList.remove('selected', 'correct', 'wrong');
      btn.disabled = false;
    });
    legend.style.display = 'none';
    legend.innerHTML = '';
  };



  /* ══════════════════════════════════════════
     DESIGNOPS (dynamic render)
     ══════════════════════════════════════════ */
  function renderDesignOps() {
    const root = document.getElementById('designops-root');
    if (!root) return;
    const d = CONTENT.designops;
    const isFr = lang === 'fr';
    const phases = d.phases[lang];

    const statusClass = s => `dops-status-${s}`;

    const workflow = isFr ? [
      { step: '1', title: 'Cadrer le besoin', who: 'both', whoLabel: 'PO & Designer', desc: 'Rassembler notes produit, retours stakeholders, briefs et toute donnée pertinente. Définir clairement le périmètre : composant, écran, flux. Décider si un outil de génération est utile ici — ce n\'est pas systématique.' },
      { step: '2', title: 'Choisir l\'approche', who: 'both', whoLabel: 'PO & Designer', desc: 'Figma directement pour les itérations simples et les décisions de design complexes. Un outil de génération (Figma Make, v0, Claude) pour explorer rapidement des pistes ou gérer un volume d\'états élevé.' },
      { step: '3', title: 'Produire les livrables', who: 'both', whoLabel: 'PO & Designer', desc: 'Création dans Figma, ou génération + curation si un outil est utilisé. Dans tous les cas : composants DS, tokens corrects, états couverts. L\'outil accélère, le designer valide.' },
      { step: '4', title: 'Sélectionner & nettoyer', who: 'both', whoLabel: 'PO & Designer', desc: 'Extraire ce qui est bon, supprimer tout le reste. C\'est une curation, pas une approbation aveugle — l\'œil critique reste humain quelle que soit la méthode.' },
      { step: '5', title: 'Affiner dans Figma', who: 'designer', whoLabel: 'Designer uniquement', desc: 'Alignement DS, tokens, accessibilité, cohérence des états. C\'est ici que le jugement de design s\'applique — cette étape ne peut pas être déléguée.' },
      { step: '6', title: 'Livrer & itérer', who: 'shared', whoLabel: 'Designer livre · PO & Designer itèrent', desc: 'Le designer finalise et livre la spec. L\'itération suivante repart du cycle — PO et designer ensemble.' },
    ] : [
      { step: '1', title: 'Frame the need', who: 'both', whoLabel: 'PO & Designer', desc: 'Gather product notes, stakeholder feedback, briefs and relevant data. Define the scope clearly: component, screen, flow. Decide whether a generation tool is actually useful here — it\'s not always the right call.' },
      { step: '2', title: 'Choose the approach', who: 'both', whoLabel: 'PO & Designer', desc: 'Figma directly for simple iterations and complex design decisions. A generation tool (Figma Make, v0, Claude) to explore directions quickly or handle a large number of states.' },
      { step: '3', title: 'Produce the work', who: 'both', whoLabel: 'PO & Designer', desc: 'Design in Figma, or generate + curate if a tool is used. Either way: DS components, correct tokens, states covered. The tool accelerates, the designer validates.' },
      { step: '4', title: 'Pick what\'s good, delete the rest', who: 'both', whoLabel: 'PO & Designer', desc: 'Extract what works, delete everything else. This is curation, not blind approval — the critical eye stays human regardless of the method used.' },
      { step: '5', title: 'Refine in Figma', who: 'designer', whoLabel: 'Designer only', desc: 'DS alignment, tokens, accessibility, state coherence. This is where design judgement applies — this step cannot be delegated.' },
      { step: '6', title: 'Ship & iterate', who: 'shared', whoLabel: 'Designer ships · PO & Designer iterate', desc: 'The designer finalises and ships the spec. The next iteration restarts the cycle — PO and designer together.' },
    ];

    const whoColor  = w => w === 'designer' ? 'var(--blue)' : w === 'shared' ? 'var(--purple)' : 'var(--green)';
    const whoBg     = w => w === 'designer' ? 'var(--blue-tint-bg)' : w === 'shared' ? 'var(--purple-tint-bg)' : 'var(--green-tint-bg)';
    const whoBorder = w => w === 'designer' ? 'rgba(111,160,224,.35)' : w === 'shared' ? 'rgba(169,140,224,.35)' : 'rgba(46,158,91,.35)';

    /* SVG flow diagram for the 6-step workflow */
    const svgW = 720, svgH = 320;
    const cols = 3, rows = 2;
    const boxW = 200, boxH = 108, gapX = 20, gapY = 20;
    const totalW = cols * boxW + (cols - 1) * gapX;
    const totalH = rows * boxH + (rows - 1) * gapY;
    const startX = (svgW - totalW) / 2;
    const startY = (svgH - totalH) / 2;

    const pos = i => {
      const col = i % cols, row = Math.floor(i / cols);
      return { x: startX + col * (boxW + gapX), y: startY + row * (boxH + gapY) };
    };

    /* Arrow path between boxes (right edge → left edge, or bottom edge → top edge) */
    const arrow = (from, to) => {
      const f = pos(from), t = pos(to);
      const sameRow = Math.floor(from / cols) === Math.floor(to / cols);
      if (sameRow) {
        const x1 = f.x + boxW, y1 = f.y + boxH / 2;
        const x2 = t.x,        y2 = t.y + boxH / 2;
        return `<line x1="${x1}" y1="${y1}" x2="${x2 - 6}" y2="${y2}" stroke="var(--border)" stroke-width="1.5" marker-end="url(#arr)"/>`;
      } else {
        /* last in row → first in next row: elbow down then across */
        const x1 = f.x + boxW / 2, y1 = f.y + boxH;
        const mx = f.x + boxW / 2, my = f.y + boxH + gapY / 2;
        const x2 = t.x + boxW / 2, y2 = t.y;
        return `<polyline points="${x1},${y1} ${mx},${my} ${x2},${my} ${x2},${y2 - 6}" fill="none" stroke="var(--border)" stroke-width="1.5" marker-end="url(#arr)"/>`;
      }
    };

    const wfSvg = `<svg viewBox="0 0 ${svgW} ${svgH}" width="100%" style="max-width:${svgW}px;display:block;margin:0 auto 0.5rem;overflow:visible;" role="img" aria-label="${isFr ? 'Workflow IA en 6 étapes' : '6-step AI workflow'}">
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--gold)"/>
        </marker>
      </defs>
      ${[0,1,2,3,4].map(i => arrow(i, i+1)).join('')}
      ${workflow.map((w, i) => {
        const {x, y} = pos(i);
        const c = whoColor(w.who), bg = whoBg(w.who), bd = whoBorder(w.who);
        const lines = w.title.match(/.{1,22}(\s|$)/g) || [w.title];
        return `<g>
          <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="8" fill="var(--bg-card)" stroke="var(--border)" stroke-width="1"/>
          <rect x="${x}" y="${y}" width="${boxW}" height="4" rx="4" fill="${c}" opacity="0.5"/>
          <text x="${x+14}" y="${y+22}" font-family="Georgia,serif" font-size="18" font-weight="700" fill="var(--text-primary)">${w.step}</text>
          ${lines.slice(0,2).map((l,li) => `<text x="${x+14}" y="${y+42+li*15}" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="10.5" font-weight="600" fill="var(--text-primary)">${l.trim()}</text>`).join('')}
          <rect x="${x+14}" y="${y+boxH-24}" width="${boxW-28}" height="16" rx="8" fill="${bg}" stroke="${bd}" stroke-width="0.75"/>
          <text x="${x+boxW/2}" y="${y+boxH-13}" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif" font-size="8" font-weight="600" fill="${c}">${w.whoLabel}</text>
        </g>`;
      }).join('')}
    </svg>`;

    /* Tooltip / desc list below the SVG (compact) */
    const wfDesc = `<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.4rem 0.75rem;margin-bottom:1.5rem;">
      ${workflow.map(w => `<div style="font-size:0.72rem;color:var(--text-muted);line-height:1.5;"><strong style="color:var(--text-primary);display:block;margin-bottom:0.1rem;">${w.step}. ${w.title}</strong>${w.desc}</div>`).join('')}
    </div>`;

    const bottleneck = isFr
      ? 'Le vrai goulot d\'étranglement reste le <strong>jugement design</strong> — et ce sera longtemps le designer. "Est-ce que ça rend bien ?", "Faut-il une modale ?", "Ce layout ne convainc pas." L\'IA ne peut pas toujours vous donner une bonne réponse sur ces questions.'
      : 'The real bottleneck remains <strong>design judgement</strong> — and that will be the designer for a long time. "Does this look good?", "Should we use a modal?", "This layout feels off." These are questions your AI can\'t always give you a good answer on.';

    /* ── Project types ── */
    const ptypes = d.projectTypes[lang];

    const aiTag = ai => {
      const labels = { none: ['Figma', 'var(--text-muted)'], optional: [isFr ? 'Figma ou IA' : 'Figma or AI', 'var(--green)'], full: ['AI', 'var(--red)'] };
      const [txt, col] = labels[ai];
      return `<span style="font-size:0.56rem;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${col};background:transparent;border:1px solid ${col};padding:0.15rem 0.45rem;">${txt}</span>`;
    };

    const stepLine = (txt, color) =>
      `<span style="font-size:0.67rem;color:${color};font-weight:500;">${txt}</span>`;

    const renderPtypeSteps = pt => {
      if (pt.id !== 'iteration') {
        return `<div style="display:flex;flex-direction:column;gap:0.3rem;">
          ${pt.steps.map((s, i) => `<div style="display:flex;align-items:baseline;gap:0.4rem;">
            <span style="font-size:0.6rem;color:var(--gold);font-weight:700;flex-shrink:0;">${i + 1}</span>
            ${stepLine(s, 'var(--text-muted)')}
          </div>`).join('')}
        </div>`;
      }
      /* Fork for iteration type */
      const f = pt.fork;
      return `<div style="display:flex;flex-direction:column;gap:0.3rem;margin-bottom:0.6rem;">
        ${pt.steps.map((s, i) => `<div style="display:flex;align-items:baseline;gap:0.4rem;">
          <span style="font-size:0.6rem;color:var(--gold);font-weight:700;flex-shrink:0;">${i + 1}</span>
          ${stepLine(s, 'var(--text-muted)')}
        </div>`).join('')}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;">
        <div style="border-left:2px solid ${f.yes.color};padding-left:0.6rem;">
          <div style="font-size:0.58rem;font-weight:700;color:${f.yes.color};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.3rem;">${f.yes.label}</div>
          ${f.yes.path.map(s => `<div style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;">${s}</div>`).join('')}
        </div>
        <div style="border-left:2px solid ${f.no.color};padding-left:0.6rem;">
          <div style="font-size:0.58rem;font-weight:700;color:${f.no.color};text-transform:uppercase;letter-spacing:0.08em;margin-bottom:0.3rem;">${f.no.label}</div>
          ${f.no.path.map(s => `<div style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;">${s}</div>`).join('')}
        </div>
      </div>`;
    };

    const ptypesBlock = `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0;margin-bottom:2rem;border-top:2px solid var(--text-primary);">
        ${ptypes.map(pt => `
          <div style="border-left:3px solid ${pt.color};border-right:1px solid var(--border);border-bottom:1px solid var(--border);padding:1.1rem 1.1rem 1rem;display:flex;flex-direction:column;gap:0.6rem;background:var(--bg-card);">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.5rem;">
              <span style="font-family:Georgia,serif;font-size:0.82rem;font-weight:700;color:var(--text-primary);line-height:1.3;">${pt.label}</span>
              ${aiTag(pt.aiUse)}
            </div>
            <div style="font-size:0.7rem;color:var(--text-muted);line-height:1.6;">${pt.trigger}</div>
            <div style="font-size:0.67rem;color:var(--text-muted);line-height:1.5;"><span style="font-weight:600;color:var(--text-muted);">${isFr ? 'Qui — ' : 'Who — '}</span>${pt.who}</div>
            <div style="border-top:1px solid var(--border);padding-top:0.65rem;margin-top:auto;">
              ${renderPtypeSteps(pt)}
            </div>
            ${pt.note ? `<div style="font-size:0.63rem;color:var(--text-muted);line-height:1.55;font-style:italic;">${pt.note}</div>` : ''}
          </div>`).join('')}
      </div>`;

    /* ── Pipeline landscape — two vertical swim lanes, 4-stage flow ── */

    /* Reusable helpers */
    const hArrow = () =>
      `<div style="display:flex;align-items:center;gap:0;flex-shrink:0;width:32px;">
        <div style="flex:1;height:1.5px;background:var(--gold);"></div>
        <div style="width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;border-left:5px solid var(--gold);"></div>
      </div>`;

    const tag = (txt, color) =>
      `<span style="display:inline-block;font-size:0.52rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${color};margin-bottom:0.35rem;">${txt}</span>`;

    const stageCard = (title, titleColor, bdColor, bgColor, body, footer = '') =>
      `<div style="border-left:2px solid ${bdColor};background:var(--bg-card);padding:0.85rem 1rem;flex:1;min-width:0;display:flex;flex-direction:column;gap:0.45rem;">
        <div style="font-size:0.68rem;font-weight:700;color:${titleColor};line-height:1.3;letter-spacing:0.02em;">${title}</div>
        <div style="flex:1;">${body}</div>
        ${footer ? `<div style="border-top:1px solid var(--border);padding-top:0.45rem;margin-top:0.25rem;">${footer}</div>` : ''}
      </div>`;

    const pill2 = (label, bg, color, sub = '') =>
      `<div style="border-left:2px solid ${color};padding:0.25rem 0 0.25rem 0.55rem;margin-bottom:0.3rem;">
        <div style="font-size:0.65rem;font-weight:600;color:var(--text-primary);line-height:1.3;">${label}</div>
        ${sub ? `<div style="font-size:0.57rem;color:var(--text-muted);line-height:1.35;margin-top:0.05rem;">${sub}</div>` : ''}
      </div>`;

    const step = (n, txt, color = 'var(--text-muted)') =>
      `<div style="display:flex;gap:0.4rem;align-items:baseline;margin-bottom:0.3rem;">
        <span style="font-size:0.58rem;font-weight:700;color:var(--text-muted);flex-shrink:0;min-width:0.8rem;">${n}.</span>
        <span style="font-size:0.65rem;color:${color};line-height:1.5;">${txt}</span>
      </div>`;

    /* ── Lane builder — 4 stages in a horizontal flex row ── */
    const lane = (laneAccent, laneBg, laneTitle, laneSubtitle, stages) =>
      `<div style="border:1px solid var(--border);background:var(--bg-card-muted);overflow:hidden;margin-bottom:1rem;">
        <!-- Lane header -->
        <div style="border-bottom:1px solid var(--border);padding:0.6rem 1rem;display:flex;align-items:baseline;gap:0.75rem;">
          <span style="font-size:0.72rem;font-weight:700;color:var(--text-primary);letter-spacing:-0.01em;">${laneTitle}</span>
          <span style="font-size:0.6rem;color:var(--text-muted);">${laneSubtitle}</span>
        </div>
        <!-- Stages row -->
        <div style="display:flex;align-items:stretch;padding:0.85rem;gap:0;min-height:0;">
          ${stages.map((s, i) => `
            ${stageCard(s.title, s.titleColor, s.bd, s.bg, s.body, s.footer || '')}
            ${i < stages.length - 1 ? hArrow(s.arrowLabel || '') : ''}
          `).join('')}
        </div>
      </div>`;

    /* ── Lane 1: Collaboration / New creation ── */
    const l1s1body = isFr
      ? `${tag('Product Owner', 'var(--text-muted)')}
         ${step(1, 'Rassemble briefs, notes, transcriptions et données produit')}
         ${step(2, 'Décrit le besoin — brief structuré ou description informelle')}
         <div style="font-size:0.58rem;font-weight:700;color:var(--text-muted);letter-spacing:0.05em;text-transform:uppercase;margin:0.35rem 0 0.2rem;">Voie A — PO illustre l\'idée</div>
         ${step('→', 'Génère un premier jet (Claude, v0, Figma Make) · passe la main au designer', 'var(--purple)')}
         <div style="font-size:0.58rem;font-weight:700;color:var(--text-muted);letter-spacing:0.05em;text-transform:uppercase;margin:0.35rem 0 0.2rem;">Voie B — Designer produit directement</div>
         ${step('→', 'Travaille dans Figma avec ou sans outil selon le scope', 'var(--blue)')}
         ${tag('UX/UI Designer', 'var(--green)')}
         <div style="font-size:0.63rem;color:var(--text-muted);line-height:1.45;">${'Affine · aligne DS · valide états & accessibilité · livre la spec'}</div>`
      : `${tag('Product Owner', 'var(--text-muted)')}
         ${step(1, 'Gathers briefs, notes, transcripts and product data')}
         ${step(2, 'Describes the need — structured brief or informal description')}
         <div style="font-size:0.58rem;font-weight:700;color:var(--text-muted);letter-spacing:0.05em;text-transform:uppercase;margin:0.35rem 0 0.2rem;">Path A — PO illustrates the idea</div>
         ${step('→', 'Generates a first draft (Claude, v0, Figma Make) · hands off to designer', 'var(--purple)')}
         <div style="font-size:0.58rem;font-weight:700;color:var(--text-muted);letter-spacing:0.05em;text-transform:uppercase;margin:0.35rem 0 0.2rem;">Path B — Designer works directly</div>
         ${step('→', 'Works in Figma with or without a tool depending on scope', 'var(--blue)')}
         ${tag('UX/UI Designer', 'var(--green)')}
         <div style="font-size:0.63rem;color:var(--text-muted);line-height:1.45;">${'Refines · aligns DS · validates states & accessibility · ships spec'}</div>`;

    const l1s2body =
      `${pill2('Brand & Aesthetic', '', 'var(--red)', isFr ? 'Palette · type · règles visuelles' : 'Palette · type · visual rules')}
       ${pill2('Design Tokens', '', 'var(--green)', isFr ? 'Variables Figma ↔ AppColors Dart · FR/ES' : 'Figma variables ↔ AppColors Dart · FR/ES')}
       ${pill2('Components & Patterns', '', 'var(--green)', isFr ? 'Inventaire DS · variantes · règles d\'usage' : 'DS inventory · variants · usage rules')}
       ${pill2('Platform Rules', '', 'var(--gold)', isFr ? 'Flutter · safe area · localisation' : 'Flutter · safe area · localisation')}
       ${pill2('Copy & Tone', '', 'var(--gold)', isFr ? 'Formulations positives · tonalité · FR/ES' : 'Positive phrasing · tone · FR/ES')}`;

    const l1s3body =
      `<div style="font-size:0.58rem;color:var(--text-muted);font-style:italic;margin-bottom:0.5rem;line-height:1.45;">${isFr ? 'Selon le scope — Figma direct ou outil de génération' : 'Depending on scope — Figma direct or generation tool'}</div>
       ${pill2('Figma', '', 'var(--green)', isFr ? 'Conception directe — toujours disponible' : 'Direct design — always available')}
       ${pill2('Figma MCP', '', 'var(--text-muted)', isFr ? 'Option : API write access via WebSocket' : 'Option: API write access via WebSocket')}
       ${pill2('Claude / v0 / Figma Make', '', 'var(--text-muted)', isFr ? 'Option : génération UI depuis prompt' : 'Option: UI generation from prompt')}`;

    const l1s4body =
      `${pill2(isFr ? 'Frames Figma' : 'Figma frames', '', 'var(--text-primary)', isFr ? 'Générées · à affiner par le designer' : 'Generated · to be refined by designer')}
       ${pill2('Story UI', '', 'var(--text-primary)', isFr ? 'Branch 7 · Sent UI ?' : 'Branch 7 · Sent UI?')}
       ${pill2('UX/UI Designer', '', 'var(--green)', isFr ? 'Affine · valide avec PO · livre' : 'Refines · validates with PO · ships')}`;

    const lane1 = lane(
      'var(--text-primary)', 'var(--bg-card-muted)',
      isFr ? 'Collaboration — Nouvelle création' : 'Collaboration — New creation',
      isFr ? 'PO cadre le besoin · Designer produit & affine · livrable Figma' : 'PO frames the need · Designer produces & refines · Figma deliverable',
      [
        { title: isFr ? 'Acteurs' : 'Actors', titleColor: 'var(--text-primary)', bd: 'var(--border)', bg: 'var(--bg-card)', body: l1s1body, arrowLabel: '→' },
        { title: isFr ? 'Couche connaissance (.md)' : 'Knowledge layer (.md)', titleColor: 'var(--green)', bd: 'var(--green)', bg: 'var(--bg-card)', body: l1s2body, arrowLabel: '→' },
        { title: isFr ? 'Outils & infrastructure' : 'Tools & infrastructure', titleColor: 'var(--text-muted)', bd: 'var(--gold)', bg: 'var(--bg-card)', body: l1s3body, arrowLabel: '→' },
        { title: 'Outputs', titleColor: 'var(--red)', bd: 'var(--red)', bg: 'var(--bg-card)', body: l1s4body },
      ]
    );

    /* ── Lane 2: Code-focused / Small iterations ── */
    const l2s1body = isFr
      ? `${tag('Product Owner', 'var(--text-muted)')}
         ${step(1, 'Décrit la modification souhaitée (variante, bug, ajustement)')}
         ${step(2, 'Partage le contexte : composant existant, état, comportement attendu')}
         ${tag('UX/UI Designer', 'var(--green)')}
         <div style="font-size:0.63rem;color:var(--text-muted);line-height:1.45;">${'Modifie dans Figma · utilise un outil si ça fait gagner du temps · valide · livre'}</div>`
      : `${tag('Product Owner', 'var(--text-muted)')}
         ${step(1, 'Describes the desired change (variant, bug, adjustment)')}
         ${step(2, 'Shares context: existing component, state, expected behaviour')}
         ${tag('UX/UI Designer', 'var(--green)')}
         <div style="font-size:0.63rem;color:var(--text-muted);line-height:1.45;">${'Edits in Figma · uses a tool if it saves time · validates · ships'}</div>`;

    const l2s2body =
      `${pill2(isFr ? 'Bibliothèque composants (code)' : 'Component library (code)', '', 'var(--text-muted)', 'Storybook · StoryUI')}
       ${pill2('Skills PdF Markdown', '', 'var(--green)', isFr ? 'Conventions · règles DS · patterns' : 'Conventions · DS rules · patterns')}
       ${pill2('Code Connect', '', 'var(--green)', isFr ? 'Mapping Figma ↔ implémentations' : 'Figma ↔ code implementation mapping')}`;

    const l2s3body =
      `<div style="font-size:0.58rem;color:var(--text-muted);font-style:italic;margin-bottom:0.5rem;line-height:1.45;">${isFr ? 'Figma suffit souvent — outils optionnels si gain de temps' : 'Figma is often enough — tools optional if they save time'}</div>
       ${pill2('Figma', '', 'var(--green)', isFr ? 'Modification directe — cas le plus fréquent' : 'Direct edit — most common case')}
       ${pill2('Figma MCP', '', 'var(--text-muted)', isFr ? 'Option : plugin bridge · API write access' : 'Option: plugin bridge · API write access')}
       ${pill2('Trantor / Claude', '', 'var(--text-muted)', isFr ? 'Option : infrastructure locale' : 'Option: local infrastructure')}`;

    const l2s4body =
      `${pill2(isFr ? 'Livrable handoff' : 'Handoff deliverable', '', 'var(--red)', isFr ? 'Figma · specs · annotations · update Storybook ?' : 'Figma · specs · annotations · update Storybook?')}
       ${pill2(isFr ? 'Code production' : 'Production code', '', 'var(--text-primary)', 'Flutter · Drupal · DSI')}`;

    const lane2 = lane(
      'var(--text-primary)', 'var(--bg-card-muted)',
      isFr ? 'Code-focused — Itération UI existante' : 'Code-focused — Existing UI iteration',
      isFr ? 'Modification ciblée · outils au choix · livrable code' : 'Targeted change · tools of choice · code deliverable',
      [
        { title: isFr ? 'Acteurs' : 'Actors', titleColor: 'var(--text-primary)', bd: 'var(--border)', bg: 'var(--bg-card)', body: l2s1body, arrowLabel: '→' },
        { title: isFr ? 'Couche connaissance (.md)' : 'Knowledge layer (.md)', titleColor: 'var(--green)', bd: 'var(--green)', bg: 'var(--bg-card)', body: l2s2body, arrowLabel: '→' },
        { title: isFr ? 'Outils & infrastructure' : 'Tools & infrastructure', titleColor: 'var(--text-muted)', bd: 'var(--gold)', bg: 'var(--bg-card)', body: l2s3body, arrowLabel: '→' },
        { title: 'Outputs', titleColor: 'var(--red)', bd: 'var(--red)', bg: 'var(--bg-card)', body: l2s4body },
      ]
    );

    const landscape = `
      <div style="margin-bottom:2rem;">
        ${lane1}
        ${lane2}
        <!-- DSI/Dev shared footer -->
        <div style="border-top:1px solid var(--border);padding:0.65rem 1rem;display:flex;align-items:center;gap:0.75rem;">
          <span style="font-size:0.65rem;font-weight:700;color:var(--text-primary);white-space:nowrap;">DSI / Dev</span>
          <svg width="16" height="10" viewBox="0 0 16 10" style="flex-shrink:0;"><line x1="0" y1="5" x2="10" y2="5" stroke="var(--gold)" stroke-width="1.5"/><path d="M8,2 L14,5 L8,8" stroke="var(--gold)" stroke-width="1.5" fill="none"/></svg>
          <span style="font-size:0.65rem;color:var(--text-muted);line-height:1.55;">${isFr ? 'Accède aux Skills PdF + à la Bibliothèque de composants (code) · reçoit le livrable handoff · implémente le code output' : 'Accesses PdF Skills + Component library (code) · receives the handoff deliverable · implements the code output'}</span>
        </div>
      </div>`;

    root.innerHTML = `
      <!-- Pipeline landscape -->
      <div class="dops-section-label">${isFr ? 'Workflow & infrastructure — Acteurs · Outils · Livrables' : 'Workflow & infrastructure — Actors · Tools · Deliverables'}</div>
      ${landscape}

      <!-- Project types -->
      <div class="dops-section-label">${isFr ? 'Processus design — 3 types de projets' : 'Design process — 3 project types'}</div>
      ${ptypesBlock}

      <!-- Slide 2 — workflow + bottleneck -->
      <div class="dops-section-label">${isFr ? 'Workflow — qui fait quoi (étapes détaillées)' : 'Workflow — who does what (detailed steps)'}</div>
      ${wfSvg}
      ${wfDesc}
      <div class="dops-flywheel" style="margin-bottom:1.5rem;">${bottleneck}</div>

      <!-- Slide 2 cont. — MCP infrastructure -->
      <div class="dops-section-label">${isFr ? 'Figma MCP — une option d\'infrastructure' : 'Figma MCP — one infrastructure option'}</div>
      <div class="dops-breakthrough" style="margin-bottom:1rem;">
        <div class="dops-breakthrough-icon">⚡</div>
        <p>${d.breakthrough[lang]}</p>
      </div>

      <!-- Context files for AI -->
      <div class="dops-section-label">${isFr ? 'Contexte design system pour l\'IA — fichiers .md' : 'Design system context for AI — .md files'}</div>
      ${(() => {
        const dlIcon = `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

        const pFiles = [
          { href: 'data/design-tokens-ai-context.md',   tag: isFr ? 'Priorité 1' : 'Priority 1', label: isFr ? 'Tokens IA' : 'AI Tokens',        desc: isFr ? '154 variables Figma (couleurs, typo, espacements, ombres) — light & dark. À inclure dans tout prompt de génération d\'interface.' : '154 Figma variables (colours, type, spacing, shadows) — light & dark. Include in any UI generation prompt.' },
          { href: 'data/design-tokens-dev-handoff.md',  tag: isFr ? 'Priorité 2' : 'Priority 2', label: isFr ? 'Tokens Handoff' : 'Handoff Tokens', desc: isFr ? 'Référence complète tokens pour l\'intégration frontend — noms exacts, valeurs, correspondances CSS/Swift.' : 'Complete token reference for frontend integration — exact names, values, CSS/Swift mappings.' },
        ];

        const oFiles = [
          { href: 'data/ios-design-guidelines.md',      label: 'iOS Guidelines' },
          { href: 'data/design-system-patterns.md',     label: 'DS Patterns' },
          { href: 'data/mobile-ios-design.md',          label: 'iOS Design' },
          { href: 'data/mobile-android-design.md',      label: 'Android Design' },
          { href: 'data/figma-mcp-implement-design.md', label: 'Figma MCP' },
          { href: 'data/web-design-guidelines.md',      label: 'Web Guidelines' },
          { href: 'data/ux-principles.md',              label: isFr ? 'Principes UX' : 'UX Principles' },
          { href: 'data/responsive-design.md',          label: 'Responsive' },
          { href: 'data/ui-ux-pro-max.md',              label: 'UI/UX Pro Max' },
          { href: 'data/i18n-localization.md',          label: 'i18n / L10n' },
          { href: 'data/copywriting.md',                label: 'Copywriting' },
          { href: 'data/marketing-psychology.md',       label: isFr ? 'Psychologie Marketing' : 'Marketing Psychology' },
          { href: 'data/freins-leviers-segments.md',     label: isFr ? 'Freins & Leviers' : 'Barriers & Levers' },
        ];

        return `
          <p style="font-size:0.72rem;color:var(--text-muted);line-height:1.7;margin-bottom:0.85rem;">${isFr
            ? 'Glisser ces fichiers dans Claude, Cursor ou votre <code style="font-family:monospace;font-size:0.68rem;background:var(--bg-card-muted);color:var(--text-muted);padding:0.1em 0.3em;border-radius:0.2rem;">.cursorrules</code> pour fournir le contexte DS lors de la génération.'
            : 'Drop these files into Claude, Cursor or your <code style="font-family:monospace;font-size:0.68rem;background:var(--bg-card-muted);color:var(--text-muted);padding:0.1em 0.3em;border-radius:0.2rem;">.cursorrules</code> to provide DS context when generating UI.'
          }</p>

          <div style="display:flex;flex-direction:column;gap:0.5rem;margin-bottom:0.75rem;">
            ${pFiles.map(f => `
              <div style="display:flex;align-items:center;gap:0.75rem;background:var(--bg-card);border:1.5px solid var(--gold);border-radius:0.5rem;padding:0.6rem 0.85rem;">
                <span style="font-size:0.55rem;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--gold);background:var(--bg-card);border:1px solid var(--gold);border-radius:999px;padding:0.1rem 0.45rem;white-space:nowrap;">${f.tag}</span>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:0.7rem;font-weight:700;color:var(--text-primary);margin-bottom:0.1rem;">${f.label}</div>
                  <div style="font-size:0.62rem;color:var(--text-muted);line-height:1.4;">${f.desc}</div>
                </div>
                <a href="${f.href}" download style="display:flex;align-items:center;gap:0.3rem;font-size:0.62rem;font-weight:700;color:var(--gold);text-decoration:none;white-space:nowrap;flex-shrink:0;">${dlIcon} ${f.label}</a>
              </div>`).join('')}
          </div>

          <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:1.5rem;">
            ${oFiles.map(f => `
              <a href="${f.href}" download style="display:inline-flex;align-items:center;gap:0.25rem;font-size:0.63rem;font-weight:600;color:var(--text-muted);background:var(--bg-card-muted);border:1px solid var(--border);border-radius:999px;padding:0.2rem 0.65rem;text-decoration:none;">${dlIcon} ${f.label}</a>`).join('')}
          </div>`;
      })()}

      <!-- Slide 2 cont. — Phases 0 & 1 -->
      <div class="dops-section-label">${isFr ? 'Phases 0 & 1 — DS AI-ready + génération PO' : 'Phases 0 & 1 — AI-ready DS + PO generation'}</div>
      <div class="dops-phases" style="margin-bottom:1rem;">
        ${phases.slice(0,2).map(p => `
          <div class="dops-phase">
            <div class="dops-phase-header">
              <div class="dops-phase-num" style="background:${p.number==='0'?'var(--green)':'var(--text-primary)'};">${p.number}</div>
              <div class="dops-phase-title">${p.title}</div>
              <span class="dops-status-badge ${statusClass(p.status)}">${p.statusLabel}</span>
            </div>
            <div class="dops-phase-body">
              <div class="dops-phase-summary">${p.summary}</div>
              <div class="dops-phase-actions">${p.actions.map(a => `<div class="dops-phase-action">${a}</div>`).join('')}</div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Slide 3 — Phases 2 & 3 -->
      <div class="dops-section-label">${isFr ? 'Phases 2 & 3 — Refonte site + Flutter' : 'Phases 2 & 3 — Website redesign + Flutter'}</div>
      <div class="dops-phases" style="margin-bottom:1.5rem;">
        ${phases.slice(2).map(p => `
          <div class="dops-phase">
            <div class="dops-phase-header">
              <div class="dops-phase-num" style="background:${p.number==='2'?'var(--text-primary)':'var(--red)'};">${p.number}</div>
              <div class="dops-phase-title">${p.title}</div>
              <span class="dops-status-badge ${statusClass(p.status)}">${p.statusLabel}</span>
            </div>
            <div class="dops-phase-body">
              <div class="dops-phase-summary">${p.summary}</div>
              <div class="dops-phase-actions">${p.actions.map(a => `<div class="dops-phase-action">${a}</div>`).join('')}</div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Slide 4 — Horizon 2027: Governance + Metrics + Automation + Flywheel -->
      <div class="dops-section-label">${isFr ? 'Horizon 2027 — Gouvernance, métriques & automatisation' : 'Horizon 2027 — Governance, metrics & automation'}</div>

      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:var(--green);margin-bottom:0.5rem;">${isFr?'Rituels':'Rituals'}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-bottom:0.75rem;">
        ${d.governance.rituals[lang].map(r => `
          <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:0.6rem;padding:0.65rem 0.85rem;">
            <div style="font-size:0.76rem;font-weight:600;color:var(--text-primary);margin-bottom:0.15rem;">${r.title}</div>
            <div style="font-size:0.7rem;color:var(--text-muted);line-height:1.5;">${r.desc}</div>
          </div>`).join('')}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-bottom:1rem;">
        ${d.governance.artefacts[lang].map(a => `<span style="font-size:0.65rem;color:var(--text-muted);background:var(--bg-card-muted);border:1px solid var(--border);border-radius:999px;padding:0.18rem 0.6rem;">→ ${a}</span>`).join('')}
      </div>

      <div style="font-size:0.65rem;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:var(--green);margin-bottom:0.5rem;">${isFr?'Métriques':'Metrics'}</div>
      <table class="dops-tooling-table" style="margin-bottom:1rem;">
        <thead><tr>
          <th>${isFr?'Métrique':'Metric'}</th>
          <th>${isFr?'Ce qu\'on mesure':'What we measure'}</th>
          <th>${isFr?'Outil':'Tool'}</th>
        </tr></thead>
        <tbody>
          ${d.metrics.categories[lang].map(cat => `
            <tr><td colspan="3" style="background:var(--bg-card-muted);font-size:0.58rem;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:var(--text-muted);padding:0.35rem 0.75rem;">${cat.label}</td></tr>
            ${cat.items.map(item => `<tr><td style="font-weight:600;">${item.name}</td><td>${item.desc}</td><td style="color:var(--text-muted);">${item.tool}</td></tr>`).join('')}
          `).join('')}
        </tbody>
      </table>

      `;

  }

  /* ══════════════════════════════════════════
     PROTOTYPES
     ══════════════════════════════════════════ */
  function renderPrototypes() {
    const root = document.getElementById('prototypes-root');
    if (!root) return;

    const isFr = lang === 'fr';
    const t = I18N[lang];

    const PROTOTYPES = [
      {
        id: 'restaurants',
        href: 'prototypes/restaurants.html',
        tag: t.proto_tag_booking,
        tagColor: 'var(--green)',
        title: isFr ? 'Réservation restaurants' : 'Restaurant booking',
        desc: isFr
          ? 'Refonte de la page restaurant de la VEL — sélection de menu, horaires et résumé de commande en temps réel.'
          : 'Redesign of the restaurant page — menu selection, time slots and real-time order summary.',
        thumb: `<svg width="120" height="72" viewBox="0 0 120 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="48" height="60" rx="6" fill="var(--bg-card)" stroke="var(--gold)" stroke-width="1.5"/>
          <rect x="60" y="6" width="54" height="60" rx="6" fill="var(--bg-card)" stroke="var(--gold)" stroke-width="1.5"/>
          <rect x="14" y="16" width="32" height="16" rx="3" fill="var(--border)"/>
          <rect x="14" y="38" width="18" height="4" rx="2" fill="var(--gold)"/>
          <rect x="14" y="46" width="26" height="3" rx="1.5" fill="var(--border)"/>
          <rect x="14" y="52" width="20" height="3" rx="1.5" fill="var(--border)"/>
          <rect x="68" y="16" width="38" height="16" rx="3" fill="var(--crimson)" fill-opacity="0.12"/>
          <rect x="68" y="38" width="18" height="4" rx="2" fill="var(--crimson)"/>
          <rect x="68" y="46" width="30" height="3" rx="1.5" fill="var(--border)"/>
          <rect x="68" y="52" width="22" height="3" rx="1.5" fill="var(--border)"/>
          <rect x="30" y="62" width="60" height="6" rx="3" fill="var(--bg-card-sunken)"/>
        </svg>`,
      },
    ];

    const cardStyle = `
      background:var(--bg-card);
      border:1.5px solid var(--gold);
      border-radius:0.75rem;
      overflow:hidden;
      text-decoration:none;
      color:var(--text-primary);
      display:flex;
      flex-direction:column;
      transition:box-shadow 160ms ease, transform 160ms ease;
      cursor:pointer;
    `;
    const thumbStyle = `
      background:var(--bg-card-muted);
      display:flex;
      align-items:center;
      justify-content:center;
      padding:1.25rem 0 1rem;
      min-height:108px;
    `;
    const tagStyle = (color) => `
      font-size:0.65rem;
      font-weight:700;
      letter-spacing:0.07em;
      text-transform:uppercase;
      padding:0.2rem 0.55rem;
      border-radius:999px;
      background:var(--green-tint-bg);
      color:${color};
      display:inline-block;
      flex-shrink:0;
    `;

    let html = `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:1rem;margin-top:0.5rem;">`;

    PROTOTYPES.forEach(p => {
      html += `
        <a href="${p.href}" style="${cardStyle}" onmouseover="this.style.boxShadow='0 6px 24px rgba(154,154,154,.2)';this.style.transform='translateY(-2px)'" onmouseout="this.style.boxShadow='none';this.style.transform='none'">
          <div style="${thumbStyle}">${p.thumb}</div>
          <div style="padding:0.9rem;display:flex;flex-direction:column;gap:0.4rem;flex:1;">
            <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:0.5rem;">
              <span style="font-weight:700;font-size:0.85rem;line-height:1.3;">${p.title}</span>
              <span style="${tagStyle(p.tagColor)}">${p.tag}</span>
            </div>
            <p style="font-size:0.76rem;color:var(--text-muted);line-height:1.5;margin:0;">${p.desc}</p>
            <span style="font-size:0.75rem;font-weight:700;color:var(--crimson);margin-top:auto;padding-top:0.4rem;">${t.proto_open}</span>
          </div>
        </a>`;
    });

    /* Placeholder slot */
    html += `
      <div style="${cardStyle} opacity:0.4; pointer-events:none; cursor:default;">
        <div style="${thumbStyle}">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="var(--gold)" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M20 12v16M12 20h16" stroke="var(--gold)" stroke-width="1.75" stroke-linecap="round"/></svg>
        </div>
        <div style="padding:0.9rem;">
          <p style="font-weight:700;font-size:0.85rem;color:var(--text-primary);">${t.proto_placeholder}</p>
          <p style="font-size:0.76rem;color:var(--gold-dark);margin-top:0.2rem;">${t.proto_placeholder_sub}</p>
        </div>
      </div>
    `;

    html += `</div>`;
    root.innerHTML = html;
  }

  /* ══════════════════════════════════════════
     CHECKLISTS
     ══════════════════════════════════════════ */
  function restoreChecklists() {
    document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(cb => {
      /* Handoff checklist IDs start with "handoff-" — use dedicated prefix */
      const storagePrefix = cb.id.startsWith('handoff-') ? 'hub_handoff_' : CHECKLIST_KEY_PREFIX;
      const key = storagePrefix + cb.id;
      cb.checked = localStorage.getItem(key) === '1';
      /* Remove any stale listener before adding a new one */
      const handler = () => localStorage.setItem(key, cb.checked ? '1' : '0');
      cb.removeEventListener('change', cb._hubHandler);
      cb._hubHandler = handler;
      cb.addEventListener('change', handler);
    });
  }

  /* ── Boot ── */
  document.addEventListener('DOMContentLoaded', init);
})();
