# 🌐 WebDev Beispiel-Projekte für 10. Klasse

Willkommen zu den WebDev-Beispielprojekten! Hier findest du **3 vollständige Webseiten-Beispiele**, die dir als Inspiration für dein eigenes Projekt dienen können.

## 📁 Projektübersicht

### 1. 🎨 Meine Hobbys & Ich - Portfolio-Seite
**Ordner:** `01-meine-hobbys-portfolio`

Eine persönliche Portfolio-Seite mit:
- ✨ Startseite mit Vorstellung
- 🎮 Hobbys-Seite mit detaillierten Beschreibungen
- 📸 Galerie mit Bildplatzhaltern
- 📱 Responsive Design (funktioniert auf Handy & PC)

**Geeignet für:**
- Vorstellung deiner Hobbys und Interessen
- Persönliches Portfolio
- Kreative Selbstdarstellung

---

### 2. 📍 Insider-Guide für unsere Stadt
**Ordner:** `02-insider-guide-stadt`

Ein Stadt-Guide mit coolen Locations:
- 🗺️ Interaktive Karte mit Markierungen
- 🍕 Essen & Trinken (Restaurants, Cafés, Bubble Tea)
- 🎮 Freizeit & Chillen (Kino, Parks, Gaming-Cafés)
- ⚽ Sport & Action (Skaterplatz, Freibad, Fitnessstudio)

**Geeignet für:**
- Stadt- oder Regionalguide
- Reise-Tipps
- Restaurant-Reviews

---

### 3. 🎮 Gaming & Esports Ecke
**Ordner:** `03-gaming-esports-ecke`

Gaming-Website mit Reviews und Tipps:
- 🎯 Spiele-Reviews mit Pro/Contra-Tabellen
- 💡 Tipps & Tricks für verschiedene Games
- 🏆 Esports-Turniere und Teams
- 📊 Interaktive Tabellen und Statistiken

**Geeignet für:**
- Gaming-Reviews
- Esports-Infos
- Hobby-Blogs zu Spielen

---

## 🚀 Wie starte ich?

### Schritt 1: Projekt öffnen
1. Gehe in einen der 3 Ordner (z.B. `01-meine-hobbys-portfolio`)
2. Öffne die `index.html` Datei mit einem **Browser** (Chrome, Firefox, Edge)
   - Rechtsklick auf `index.html` → "Öffnen mit" → Browser auswählen
   - ODER einfach die Datei in den Browser ziehen

### Schritt 2: Code anschauen
1. Öffne die HTML-Dateien mit einem **Code-Editor**:
   - **VS Code** (empfohlen - kostenlos)
   - Notepad++
   - Oder jedem anderen Texteditor

### Schritt 3: Anpassen & Experimentieren!
- Ändere Texte, Farben, Bilder
- Füge eigene Inhalte hinzu
- Lerne durch Ausprobieren!

---

## 📚 HTML & CSS Konzepte in den Projekten

### 🏗️ HTML-Grundlagen

#### 1. Struktur
Jede HTML-Seite hat diese Grundstruktur:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Seitentitel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Hier kommt der Inhalt -->
</body>
</html>
```

#### 2. Wichtige HTML-Tags die wir benutzen:

| Tag | Bedeutung | Beispiel |
|-----|-----------|----------|
| `<h1>` bis `<h6>` | Überschriften | `<h1>Hauptüberschrift</h1>` |
| `<p>` | Absatz/Text | `<p>Dies ist ein Text.</p>` |
| `<a>` | Link | `<a href="seite.html">Link-Text</a>` |
| `<img>` | Bild | `<img src="bild.jpg" alt="Beschreibung">` |
| `<div>` | Container-Element | `<div class="box">Inhalt</div>` |
| `<nav>` | Navigation | `<nav>Menü hier</nav>` |
| `<section>` | Bereich/Abschnitt | `<section>Ein Abschnitt</section>` |
| `<ul>` & `<li>` | Liste | `<ul><li>Punkt 1</li></ul>` |
| `<table>` | Tabelle | Siehe Gaming-Projekt |

#### 3. Classes und IDs

**Classes** (mit `.` in CSS):
```html
<div class="card">Ich bin eine Karte</div>
```
```css
.card {
    background-color: white;
    padding: 20px;
}
```

**IDs** (mit `#` in CSS):
```html
<div id="header">Header</div>
```
```css
#header {
    background-color: blue;
}
```

---

### 🎨 CSS-Techniken

#### 1. Flexbox (für Layouts)

Flexbox macht es einfach, Elemente nebeneinander anzuordnen:

```css
.container {
    display: flex;
    gap: 20px;              /* Abstand zwischen Elementen */
    justify-content: center; /* Horizontal zentrieren */
    align-items: center;     /* Vertikal zentrieren */
}
```

**Beispiel aus den Projekten:**
- Navigation (Menü-Links nebeneinander)
- Karten-Layouts (Cards nebeneinander)

#### 2. CSS Grid (für komplexe Layouts)

Grid ist perfekt für Raster-Layouts:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 gleich breite Spalten */
    gap: 20px;
}
```

**Beispiel aus den Projekten:**
- Galerie (3 Spalten)
- Teams-Übersicht
- Location-Cards

#### 3. Gradienten (Farbverläufe)

Moderne Farbverläufe für coole Effekte:

```css
.element {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

**Wo verwendet:**
- Hintergründe
- Hero-Sections
- Buttons

#### 4. Transitions & Hover-Effekte

Animationen beim Überfahren mit der Maus:

```css
.button {
    transition: all 0.3s ease;
}

.button:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

**Effekte in den Projekten:**
- Buttons die sich beim Hover heben
- Karten die größer werden
- Farbwechsel

#### 5. Responsive Design (@media queries)

Damit die Seite auf Handy gut aussieht:

```css
/* Auf kleinen Bildschirmen (Handy) */
@media (max-width: 768px) {
    .container {
        flex-direction: column; /* Untereinander statt nebeneinander */
    }

    h1 {
        font-size: 2rem; /* Kleinere Schrift */
    }
}
```

---

## 🖼️ Eigene Bilder einfügen

### Methode 1: Lokale Bilder

1. **Bilder-Ordner erstellen:**
   ```
   mein-projekt/
   ├── index.html
   ├── style.css
   └── images/          ← Neuer Ordner
       ├── foto1.jpg
       └── foto2.png
   ```

2. **Im HTML einbinden:**
   ```html
   <img src="images/foto1.jpg" alt="Beschreibung des Bildes">
   ```

3. **Als Hintergrund in CSS:**
   ```css
   .hero {
       background-image: url('images/foto1.jpg');
       background-size: cover;
       background-position: center;
   }
   ```

### Methode 2: Online-Bilder

**Kostenlose Bild-Quellen:**
- [Unsplash.com](https://unsplash.com) - Hochqualitative Fotos
- [Pexels.com](https://pexels.com) - Kostenlose Stock-Fotos
- [Pixabay.com](https://pixabay.com) - Freie Bilder

**Verwendung:**
```html
<img src="https://images.unsplash.com/photo-..." alt="Beschreibung">
```

### Bildgröße optimieren

**Wichtig:** Große Bilder machen die Seite langsam!

- **Empfohlene Größe:** Max. 1920px Breite
- **Format:** JPG für Fotos, PNG für Grafiken/Logos
- **Tools zum Verkleinern:**
  - [TinyPNG.com](https://tinypng.com)
  - [Squoosh.app](https://squoosh.app)

---

## 🎯 Anpassungstipps

### 1. Farben ändern

Suche im CSS nach Farben und ändere sie:

```css
/* Vorher */
background-color: #667eea;

/* Nachher - deine Lieblingsfarbe */
background-color: #ff6b6b;
```

**Farben finden:**
- [Coolors.co](https://coolors.co) - Farbpaletten-Generator
- [ColorHunt.co](https://colorhunt.co) - Fertige Farbkombinationen

### 2. Texte anpassen

Einfach im HTML die Texte ändern:

```html
<!-- Vorher -->
<h1>Max Müller</h1>

<!-- Nachher -->
<h1>Dein Name</h1>
```

### 3. Neue Seiten hinzufügen

1. **Neue HTML-Datei erstellen:** `neue-seite.html`
2. **Grundstruktur kopieren** von `index.html`
3. **In der Navigation verlinken:**
   ```html
   <li><a href="neue-seite.html">Neue Seite</a></li>
   ```

### 4. Schriftarten ändern

**Google Fonts verwenden:**

1. Gehe zu [fonts.google.com](https://fonts.google.com)
2. Wähle eine Schrift (z.B. "Roboto")
3. Füge im `<head>` ein:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
   ```
4. Nutze im CSS:
   ```css
   body {
       font-family: 'Roboto', sans-serif;
   }
   ```

---

## 💡 Projekt-Ideen zum Erweitern

### Projekt 1 (Portfolio):
- ✨ Kontaktformular hinzufügen
- 📄 Lebenslauf/CV-Seite
- 🎨 Mehr Galerien (Videos, Kunst, etc.)

### Projekt 2 (Stadt-Guide):
- ⭐ Bewertungssystem (5 Sterne)
- 📝 Kommentar-Bereich
- 🗓️ Event-Kalender

### Projekt 3 (Gaming):
- 🎥 Embedded YouTube-Videos
- 📊 Mehr Statistiken
- 👤 Spieler-Profile

---

## 🛠️ Empfohlene Tools

### Code-Editoren:
- **VS Code** (am besten!) - [code.visualstudio.com](https://code.visualstudio.com)
- Atom
- Sublime Text

### Browser-Tools:
- **Chrome DevTools** (F12 drücken)
  - Inspiziere Elemente
  - Teste CSS direkt im Browser
  - Finde Fehler

### Design-Inspiration:
- [Dribbble.com](https://dribbble.com)
- [Behance.net](https://behance.net)
- [Awwwards.com](https://awwwards.com)

---

## 🐛 Häufige Fehler & Lösungen

### Problem: CSS wird nicht geladen

**Lösung:**
```html
<!-- Prüfe den Pfad zur CSS-Datei -->
<link rel="stylesheet" href="style.css">

<!-- Wenn CSS in Unterordner: -->
<link rel="stylesheet" href="css/style.css">
```

### Problem: Bilder werden nicht angezeigt

**Lösung:**
```html
<!-- Prüfe den Pfad -->
<img src="images/foto.jpg" alt="Beschreibung">

<!-- Dateiendung beachten: .jpg, .png, .jpeg -->
<!-- Groß-/Kleinschreibung wichtig bei Linux/Mac! -->
```

### Problem: Layout ist kaputt auf Handy

**Lösung:**
```html
<!-- Viewport-Meta-Tag im <head> einfügen -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

## 📖 Weitere Lern-Ressourcen

### Deutsch:
- [SelfHTML.org](https://selfhtml.org) - HTML & CSS Dokumentation
- [CSS-Tricks.com](https://css-tricks.com) - CSS Tutorials

### Videos:
- YouTube: "HTML Tutorial Deutsch"
- YouTube: "CSS Crashkurs"

### Interaktiv:
- [FreeCodeCamp.org](https://freecodecamp.org)
- [CodePen.io](https://codepen.io) - Code testen & teilen

---

## ✅ Checkliste für dein eigenes Projekt

- [ ] Thema gewählt (Hobbys, Stadt, Gaming, etc.)
- [ ] Ordnerstruktur erstellt
- [ ] HTML-Grundgerüst kopiert
- [ ] Texte angepasst
- [ ] Farben/Design personalisiert
- [ ] Eigene Bilder eingefügt
- [ ] Navigation funktioniert
- [ ] Auf verschiedenen Geräten getestet
- [ ] Rechtschreibung geprüft
- [ ] Code aufgeräumt

---

## 🎓 Wichtige Konzepte zum Lernen

### Priorität 1 (Basics):
- ✅ HTML-Struktur verstehen
- ✅ CSS-Selektoren (class, id, element)
- ✅ Box-Model (margin, padding, border)
- ✅ Farben und Schriften

### Priorität 2 (Layout):
- ✅ Flexbox
- ✅ CSS Grid
- ✅ Responsive Design

### Priorität 3 (Advanced):
- ✅ Transitions & Animations
- ✅ Gradienten
- ✅ Advanced Selektoren

---

## 💬 Fragen?

Bei Fragen oder Problemen:
1. Nutze Google: "HTML [dein Problem]"
2. Schau in die Browser DevTools (F12)
3. Frag deine Lehrkraft oder Mitschüler

---

## 🎉 Viel Erfolg!

Experimentiere, probiere aus und hab Spaß beim Coden! Die besten Webseiten entstehen durch Ausprobieren und Fehler machen. 💪

**Remember:** Jeder Profi hat mal als Anfänger angefangen! 🚀

---

### 📝 Projekt-Credits

Diese Beispiel-Projekte wurden erstellt für den WebDev-Unterricht der 10. Klasse.

- Projekt 1: Portfolio-Beispiel
- Projekt 2: Stadt-Guide-Beispiel
- Projekt 3: Gaming-Website-Beispiel

**Lizenz:** Frei verwendbar für Bildungszwecke ✨
