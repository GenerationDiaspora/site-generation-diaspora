# Génération Diaspora - Site Vitrine

Site officiel de l'association Génération Diaspora, créé avec Next.js, TailwindCSS et shadcn/ui.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🔧 Configuration

### Newsletter

Pour activer l'intégration de la newsletter, créez un fichier `.env.local` à la racine du projet :

```env
# Pour Brevo (Sendinblue)
NEXT_PUBLIC_BREVO_API_KEY=votre_clé_api_brevo
BREVO_LIST_ID=votre_id_de_liste

# OU pour Mailchimp
NEXT_PUBLIC_MAILCHIMP_API_KEY=votre_clé_api
MAILCHIMP_AUDIENCE_ID=votre_audience_id
MAILCHIMP_SERVER_PREFIX=us1
```

## 📁 Structure du projet

```
├── app/                  # Pages et layouts (App Router)
│   ├── page.tsx         # Page d'accueil
│   ├── about/           # Page À propos
│   ├── news/            # Page Actualités
│   ├── contact/         # Page Contact
│   └── layout.tsx       # Layout principal
├── components/          # Composants réutilisables
│   ├── ui/             # Composants shadcn/ui
│   ├── Header.tsx      # En-tête du site
│   ├── Footer.tsx      # Pied de page
│   └── Newsletter.tsx  # Formulaire newsletter
├── public/             # Fichiers statiques
│   └── logo.png       # Logo de l'association
└── styles/            # Styles globaux
```

## 🌐 Déploiement sur Vercel

### Déploiement Rapide (Recommandé)

```bash
# Déployer directement (pas besoin d'installation)
npx vercel

# Pour la production
npx vercel --prod
```

**Note** : Si vous obtenez une erreur de permissions avec `npm i -g vercel`, utilisez `npx vercel` à la place. C'est la méthode recommandée !

Pour plus de détails, consultez [DEPLOIEMENT_RAPIDE.md](DEPLOIEMENT_RAPIDE.md)

### Méthode 1 : Via GitHub (recommandée)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez sur "New Project"
4. Importez votre dépôt GitHub
5. Ajoutez vos variables d'environnement dans les paramètres
6. Cliquez sur "Deploy"

### Méthode 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se connecter
vercel login

# Déployer
vercel
```

### Variables d'environnement sur Vercel

N'oubliez pas d'ajouter vos variables d'environnement dans :
Settings → Environment Variables

## 🎨 Personnalisation

### Couleurs

Modifiez les couleurs dans `tailwind.config.ts` pour correspondre à votre charte graphique.

### Contenu

- **Actualités** : Modifiez le fichier `app/news/page.tsx`
- **À propos** : Modifiez le fichier `app/about/page.tsx`
- **Accueil** : Modifiez le fichier `app/page.tsx`

## 📝 Technologies utilisées

- **Framework** : Next.js 14 (App Router)
- **Styling** : TailwindCSS
- **Composants UI** : shadcn/ui
- **Icônes** : Lucide React
- **Hébergement** : Vercel

## 📧 Contact

Pour toute question, contactez-nous à : contact@generation-diaspora.org

## 📄 Licence

© 2025 Génération Diaspora. Tous droits réservés.

