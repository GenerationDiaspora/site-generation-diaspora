#!/bin/bash

# 🚀 Script de Déploiement - Génération Diaspora
# Usage: ./deploy.sh [preview|prod]

set -e

echo "🚀 Déploiement de Génération Diaspora"
echo "======================================"
echo ""

# Vérifier que node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo "✅ Dépendances installées"
    echo ""
fi

# Build de test
echo "🔨 Build de test..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build réussi !"
    echo ""
else
    echo "❌ Erreur de build. Corrigez les erreurs avant de déployer."
    exit 1
fi

# Déploiement
MODE=${1:-preview}

if [ "$MODE" = "prod" ]; then
    echo "🌐 Déploiement en PRODUCTION..."
    npx vercel --prod
else
    echo "🔍 Déploiement en PREVIEW..."
    npx vercel
fi

echo ""
echo "✨ Déploiement terminé !"
echo ""
echo "📋 Prochaines étapes :"
echo "  - Vérifiez votre site sur l'URL fournie"
echo "  - Configurez un domaine personnalisé si besoin"
echo "  - Ajoutez les variables d'environnement pour la newsletter"
echo ""
echo "📧 Contact : contact@generationdiaspora.com"

