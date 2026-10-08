# Sankéa — site vitrine

Next.js 16 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · lucide-react.
Le site ne permet ni réservation ni connexion : son seul objectif est de faire télécharger l'app.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # génération statique (SSG)
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Un chiffre, un prix, un délai, un e-mail (placeholders `[CLE]`) | `src/lib/site-config.ts` → objet `DATA` |
| Liens App Store / Play Store, réseaux sociaux | `src/lib/site-config.ts` |
| Activer Android | `ANDROID_AVAILABLE = true` + renseigner `PLAY_STORE_URL` |
| Témoignages, salons à la une, équipe, presse | tableaux dans `site-config.ts` (vide = section masquée) |
| Questions des FAQ et de l'aide | `src/content/faq.ts` |
| Coiffures (catalogue et pages style) | `src/content/coiffures.ts` |
| Couleurs, rayons, typographie | `tailwind.config.ts` + `src/app/globals.css` (`:root`) |

### Placeholders
Dans les textes, `{{CLE}}` est remplacé par `DATA.CLE`. Tant que la valeur est `null`, le site affiche `[CLE]` de façon visible. Les blocs de chiffres (accueil), témoignages, salons à la une, équipe et presse disparaissent automatiquement tant que leurs données sont vides.

## Ajouter une page style
1. Dans `src/content/coiffures.ts`, trouve la coiffure dans `STYLES` (ou ajoute-en une avec son `slug`, son `audience`, son `image` et son `alt`).
2. Ajoute-lui une propriété `page` en copiant le modèle `knotless` : title, meta description, H1, réponse directe de 40 à 60 mots, tableau, sections H2, FAQ, 3 styles liés.
3. Ajoute la clé de prix `PRIX_<SLUG_EN_MAJUSCULES>` dans `DATA` (déjà présente pour tous les styles existants).
4. Rien d'autre : la route `/coiffures/[slug]`, le sitemap, le fil d'Ariane et le JSON-LD sont générés automatiquement.

## Parcours de téléchargement
- `/app` : iOS → App Store, Android → Play Store (ou formulaire « Préviens-moi » tant que `ANDROID_AVAILABLE` est `false`), desktop → QR code + badges. `?src=` indique la section d'origine.
- Les liens store portent la section d'origine (`?ct=` côté App Store, `utm_campaign` côté Play Store).

## Formulaires (`/api/lead`)
Le formulaire Android et le formulaire Contact postent sur `/api/lead`. Définis `LEAD_WEBHOOK_URL` (Zapier, Make, Slack, Formspree…) pour recevoir les demandes ; sans cela elles sont seulement écrites dans les logs serveur.

## Analytics
Définis `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` pour activer Plausible. Événements : `clic_store` (avec la section), `inscription_android`, `clic_pro`.

## SEO / GEO
- Métadonnées par page via `buildMetadata` (`src/lib/seo.ts`) : canonical, Open Graph, Twitter, image OG générée (`/og?title=`).
- JSON-LD : Organization + WebSite partout, MobileApplication + FAQPage (accueil), SoftwareApplication + FAQPage (`/pro`), WebPage + FAQPage + BreadcrumbList (pages style), HowTo (comment ça marche), AboutPage, FAQPage (aide).
- `sitemap.xml`, `robots.txt` (GPTBot, PerplexityBot, ClaudeBot, Google-Extended autorisés) et `llms.txt` sont générés.
- Smart App Banner iOS via `apple-itunes-app`.

## À faire avant la mise en ligne
- Remplacer les placeholders `[…]` visibles sur le site.
- Faire valider les pages légales par un juriste (`/cgu`, `/conditions-salons`, `/confidentialite` renvoient vers les documents hébergés sur `admin.san-kea.com`).
- Confirmer le domaine (`SITE_URL`, actuellement `https://www.san-kea.com`, car `san-kea.com` redirige vers `www`).
