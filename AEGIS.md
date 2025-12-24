COMPLETE DEVELOPMENT PROMPT FOR "AEGIS" AI CONTENT GUARDIAN
Title: "Build Aegis: Complete AI-Powered Personal Web Content Guardian System"

📋 CORE INSTRUCTION
Build a production-ready, privacy-first AI content moderation system called "Aegis" that acts as a personal web guardian. The system must combine beautiful UX/UI with powerful AI, following the exact design specifications provided. This is a full-stack implementation including browser extension, AI backend, dashboard, and mobile companion.

🎯 PROJECT VISION
Create a system that feels like putting on "noise-cancelling headphones for the internet" - protecting mental space while maintaining user autonomy. The experience should be calming, transparent, and empowering, not restrictive or alarming.

🚀 PHASED DEVELOPMENT PLAN
PHASE 1: FOUNDATION (Week 1-2)
Deliverable: Working Chrome Extension with Basic AI

Browser Extension Core

Manifest V3 Chrome extension

Content script for DOM monitoring

Real-time page analysis

Basic blocking/blurring mechanisms

Local storage for user preferences

Initial AI Integration

Text analysis using HuggingFace's unitary/toxic-bert

Three protection levels: Gentle/Balanced/Strict

Confidence threshold system (70%/85%/95%)

Minimal Viable UI

Extension popup with protection status

Simple slider for protection levels

Basic stats display

Whitelist/blacklist management

PHASE 2: AI ENHANCEMENT (Week 3-4)
Deliverable: Advanced Multi-Modal AI System

Multi-Model AI Stack

Text: facebook/roberta-hate-speech-dynabench

Images: TensorFlow.js NSFW detection

Context: BERT-based contextual understanding

Phishing: URL and content analysis

Privacy-First Architecture

Local inference for sensitive content

Federated learning for model improvement

Zero-knowledge encryption for cloud sync (optional)

On-device processing priority

Enhanced User Experience

Beautiful blocking/interstitial pages

Content replacement with educational alternatives

"Reveal with consent" system

User feedback loop for AI training

PHASE 3: DASHBOARD & INSIGHTS (Week 5-6)
Deliverable: Complete Web Dashboard

Dashboard Features

Protection Map visualization (galaxy view)

Content Log timeline with filtering

Weekly peace score reports

Threat category breakdowns

Family management interface

Advanced Controls

Per-category sensitivity sliders

Scheduled protection (work hours, bedtime)

Site-specific rules

Learning mode for false positives

Mobile Companion App

React Native application

Family monitoring dashboard

Quick protection toggles

Peace reminders and break suggestions

PHASE 4: POLISH & SCALE (Week 7-8)
Deliverable: Production-Ready System

Performance Optimization

WebAssembly-accelerated AI inference

Lazy loading of heavy models

Cache system for frequent sites

Background sync for model updates

Enterprise Features

Organization/team management

Compliance reporting

Custom category training

API for integration

App Store Deployment

Chrome Web Store listing

Firefox Add-ons submission

Safari App Extension

iOS/Android app stores

🎨 UI/UX SPECIFICATIONS (MUST IMPLEMENT)
Color Palette
text
Primary: #2A4B8C (Guardian Blue), #F8FAFC (Sanctuary White)
Secondary: #10B981 (Signal Green), #F59E0B (Caution Amber), #EF4444 (Alert Red)
Accents: #94A3B8 (Serenity Gray), #60A5FA (Light Blue Glow), #8B5CF6 (Soft Purple)
Visual Elements
Extension Icon States

Resting: Shield outline in Guardian Blue

Scanning: Pulsing blue glow

Blocking: Amber/orange glow

Critical: Red "X" overlay

Protection Map Visualization

Central orb (current page)

Orbiting protection satellites (text, image, video, privacy)

Threat ripples absorbed by satellites

Real-time status indicators

Content Log Timeline

Vertical timeline like peaceful river

Color-coded entries (green/yellow/red)

Expandable details with AI reasoning

Feedback options for model training

Micro-interactions
Loading States: Shield pieces assembling animation

Success Actions: Gentle particle explosion

Transitions: "Shield swipe" page transitions

Sounds: Optional calming tones (Tibetan bowl for enable, deep thud for block)

Haptic Feedback: Mobile app vibration patterns

🤖 AI ARCHITECTURE SPECIFICATION
Core AI Models
text
Text Analysis:
- Primary: unitary/toxic-bert (local)
- Secondary: facebook/roberta-hate-speech-dynabench (cloud optional)
- Context: sentence-transformers/all-MiniLM-L6-v2
- Fast fallback: BadWordsFilter (regex-based)

Image Analysis:
- NSFW detection: TensorFlow.js NSFWJS
- Violence detection: Custom MobileNetV2 model
- OCR for text-in-images: Tesseract.js

Video Analysis:
- Frame sampling (1 frame/second)
- Audio transcription analysis
- Metadata inspection

URL/Phishing:
- Google Safe Browsing API integration
- Custom heuristic analysis
- Community-reported threats
AI Decision Pipeline
Content Extraction → DOM scraping with privacy respect

Multi-Model Analysis → Parallel processing

Context Understanding → Page category, user history

Confidence Scoring → Weighted ensemble

User Preference Application → Protection level adjustments

Action Determination → Allow/Blur/Block/Educate

🔐 PRIVACY & SECURITY REQUIREMENTS
Non-Negotiables
Local-First: All sensitive processing happens on-device

Zero Data Collection: No browsing history storage

Transparent Operations: Clear explanations for all blocks

User Control: Easy override for any decision

Open Source Core: Publicly auditable AI models

Data Handling
text
Allowed (with consent):
- Anonymous threat statistics (aggregated)
- Model improvement data (federated learning)
- User preferences (local storage)

Prohibited:
- Individual browsing history
- Personal identifiers
- Content of blocked pages (unless user reports)
- Cross-site tracking
📱 PLATFORM SUPPORT
Phase 1 Support
Chrome/Edge (Manifest V3)

Firefox (WebExtensions)

Phase 2 Support
Safari App Extension

Mobile browsers via content blockers

Phase 3 Support
iOS App (SwiftUI)

Android App (Kotlin/Jetpack Compose)

Desktop App (Electron/Tauri)

🎯 SUCCESS METRICS
Technical Metrics
Page load impact: < 100ms additional latency

Memory usage: < 50MB for extension

Accuracy: > 95% precision, > 90% recall

False positive rate: < 5%

User override rate: < 10%

User Experience Metrics
Installation to first protection: < 2 minutes

Setup completion rate: > 80%

Daily active users: > 60%

User satisfaction: > 4.5/5 stars

Feature discovery: Average 3+ features used/week

📦 DELIVERABLES CHECKLIST
Code Repositories
aegis-extension/ - Browser extension

aegis-backend/ - AI/API services (optional cloud)

aegis-dashboard/ - Web dashboard

aegis-mobile/ - React Native app

aegis-models/ - AI model training code

aegis-docs/ - Documentation

Documentation
Architecture diagrams

API documentation

User guides

Privacy policy

Developer setup guide

Model cards (AI transparency)

Deployment
Chrome Web Store package

Firefox Add-ons package

Docker containers for backend

iOS/Android app store listings

Update automation system

🚨 RISK MITIGATION
Technical Risks
Performance Impact: Implement lazy loading, WebAssembly, and caching

False Positives: Multi-model consensus, user feedback loop, confidence thresholds

Model Bias: Regular bias audits, diverse training data, transparency reports

Privacy Breaches: Local-first design, encryption, security audits

Ethical Risks
Over-blocking: User control, transparency, easy overrides

Bias: Regular audits, diverse testing, community review

Censorship Concerns: Personal use only, educational approach, no political bias

Addiction Risk: Positive reinforcement, not fear-based, mental health focus

🔧 TECHNICAL STACK RECOMMENDATION
Frontend (Extension & Dashboard)
Language: TypeScript

Framework: React 18+ with Vite

UI Library: Tailwind CSS + Headless UI

State Management: Zustand

Charts: Recharts or Visx

Animations: Framer Motion

Backend (Optional Cloud)
Language: Python

Framework: FastAPI

AI/ML: PyTorch, Transformers, OpenCV

Database: PostgreSQL (user data), Redis (caching)

Deployment: Docker + Kubernetes

Mobile
Framework: React Native with Expo

Navigation: React Navigation

UI: NativeWind (Tailwind for RN)

AI Infrastructure
Inference: ONNX Runtime, TensorFlow.js

Training: PyTorch Lightning, HuggingFace

Optimization: Quantization, Pruning, Distillation

🎬 GETTING STARTED PROMPT
Copy and paste this exact prompt to your development team or AI assistant:

text
"Initialize the Aegis project with this exact structure:

1. Create monorepo with pnpm workspaces:
aegis/
├── packages/
│   ├── extension/     # Chrome/Firefox extension
│   ├── dashboard/     # Web dashboard
│   ├── mobile/        # React Native app
│   ├── shared/        # Shared types/utils
│   └── ai-core/       # AI models and utilities
├── docker/           # Container configurations
├── docs/            # Documentation
└── scripts/         # Build/deployment scripts

2. Set up initial extension with:
- Manifest V3 configuration
- Content script boilerplate
- Background service worker
- Popup UI with Tailwind
- Local storage for settings

3. Implement core AI module with:
- Text toxicity detection using HuggingFace
- Local model loading system
- Confidence scoring
- Basic content filtering

4. Create the Protection Map visualization prototype using React + D3.js

Use TypeScript, React 18, Tailwind CSS, and follow the exact design specifications for colors, spacing, and interactions provided.

Start by building the Chrome extension MVP that can:
1. Detect toxic text on pages
2. Blur/replace detected content
3. Show protection status in popup
4. Allow user to adjust protection level