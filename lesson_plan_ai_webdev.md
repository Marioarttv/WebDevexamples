# Unterrichtsplan: Web Development mit AI (Stunde 2/5)

**Thema:** Einführung in AI-gestütztes Coding & Start des eigenen Web-Projekts  
**Zielgruppe:** Schüler (Einsteiger)  
**Zeit:** 90 Minuten (1 Doppelstunde)  
**Voraussetzungen:** HTML/CSS Basics (aus Stunde 1)

## Lernziele
Die Schüler sollen:
1.  Die aktuelle AI-Landschaft für Developer kennenlernen (Modelle & Tools).
2.  Verstehen, wie man AI-Modelle effektiv instruiert (Prompt Engineering).
3.  Grundlegende Web-Konzepte anwenden: Verlinkung, Bilder einbinden.
4.  Die Chrome Developer Tools zum Debuggen nutzen.
5.  Ein Konzept für ihre eigene Website entwickeln und starten.

## Zeitplan

| Phase | Dauer | Inhalt | Methode | Medien |
| :--- | :--- | :--- | :--- | :--- |
| **Intro** | 5 min | Begrüßung, Rückblick auf HTML/CSS Basics, Vorstellung des Tagesziels. | Lehrervortrag | Slide 1-2 |
| **Theorie** | 10 min | **Die AI-Landschaft:**<br>- Modelle: Sonnet 4.5 (Coding), Gemini 3 (Allrounder), GPT 5.1 (Logic)<br>- Tools: IDEs (Cursor, Antigravity, VS Code) vs. CLIs. | Präsentation | Slide 3-4 |
| **Interaktion** | 10 min | **Prompt Engineering:**<br>- Wie spricht man mit der AI?<br>- Context, Instruction, Constraints.<br>- Gemeinsames Erstellen eines Prompts mit dem "Prompt Builder". | Lehrgespräch / Interaktiv | Slide 5-6 (Prompt Builder) |
| **Live Demo** | 20 min | **Gemeinsames Coding:**<br>- Wir erstellen eine Landing Page mit AI.<br>- **Fokus 1:** Eine Unterseite erstellen und verlinken (`<a href>`).<br>- **Fokus 2:** Ein Bild einfügen (`<img src>`).<br>- **Fokus 3:** Fehler finden mit Chrome DevTools. | Live-Coding am Beamer | Editor & Browser |
| **Praxis** | 40 min | **Projekt-Start:**<br>- Schüler überlegen sich ein Thema für ihre Website.<br>- Setup der Umgebung (z.B. Online-Editor oder VS Code).<br>- Erste Schritte mit AI-Unterstützung (z.B. via Chat-Interface). | Einzel-/Partnerarbeit | Laptops |
| **Abschluss** | 5 min | Kurzes Blitzlicht: Wer hat welche Idee? Ausblick auf nächste Stunde. | Plenum | - |

## Inhaltliche Details

### 1. Die "Großen Drei" Modelle (Stand Nov 2025)
*   **Sonnet 4.5 (Anthropic):** Der Spezialist für sauberen, sicheren Code. Versteht komplexe Zusammenhänge sehr gut.
*   **Gemini 3 (Google):** Das leistungsstärkste Modell in Benchmarks. Extrem schnell und multimodal (versteht Bilder/Video).
*   **GPT 5.1 (OpenAI):** Der Klassiker. Sehr gut in Logik und kreativen Texten (Codex).

### 2. Kostenlose Tools für Schüler
Da Schüler oft keine Bezahl-Abos haben:
*   **Web-Chats:** ChatGPT (Free), Claude.ai (Free Tier), Google Gemini (Free). Code dort generieren und kopieren.
*   **Editoren:** VS Code (Kostenlos) + evtl. kostenlose Extensions (Codeium oder ähnliche, falls Copilot nicht verfügbar).
*   **Browser:** Chrome Developer Tools sind immer kostenlos dabei.

### 3. Live Demo Ablauf
1.  *Szenario:* "Wir bauen eine Fan-Seite für [Aktuelles Thema/Hobby]."
2.  *Prompting:* Nutzen des Prompt Builders, um das Grundgerüst zu generieren.
3.  *Erweiterung:* "Die Seite ist zu lang. Lagern wir den 'Über mich' Teil aus." -> Erstellen von `about.html` und Link setzen.
4.  *Bilder:* "Ein Bild sagt mehr als 1000 Worte." -> Bildordner anlegen, Bild einfügen.
5.  *Fehler:* Bewusst einen Fehler einbauen (z.B. falscher Pfad). Zeigen, wie man das in den DevTools (Console/Network Tab) sieht.

## Material
*   Interaktive HTML-Präsentation (`index.html`)
*   Beispiel-Bilder für die Demo
