# 🚀 Bonus-Challenges für schnelle Entwickler

Hier sind spezielle Zusatzaufgaben für Schüler, die bereits mit dem Grundgerüst ihrer Website fertig sind. Diese Aufgaben fordern technisches Verständnis, Design-Gespür und kreatives Prompting.

## 🎨 Design & UI (User Interface)

*   **Dark Mode Toggle 🌓**
    *   **Aufgabe:** Füge einen Button hinzu, der zwischen hellem und dunklem Design umschaltet.
    *   **Tech:** Erfordert einfaches JavaScript (`classList.toggle`) und CSS-Variablen.
    *   **Lerneffekt:** Umgang mit DOM-Manipulation und CSS-Variablen.

*   **Scroll-to-Top Button ⬆️**
    *   **Aufgabe:** Ein Button, der erst erscheint, wenn man etwas nach unten gescrollt hat, und die Seite sanft nach oben befördert.
    *   **Tech:** JavaScript Event Listener (`scroll`) und CSS `position: fixed`.

*   **Custom 404 Seite 🚫**
    *   **Aufgabe:** Erstelle eine `404.html` Seite, die erscheint, wenn man eine falsche URL eingibt (lokal nur durch manuelles Aufrufen testbar, aber gutes Konzept).
    *   **Design:** Mach sie lustig oder passend zum Thema der Seite.

*   **Favicon & Social Meta Tags 📱**
    *   **Aufgabe:** Erstelle ein kleines Icon (Favicon), das im Browser-Tab zu sehen ist. Füge außerdem "Open Graph" Tags hinzu, damit der Link auf Discord/WhatsApp mit Bild und Titel schön aussieht.
    *   **Tool:** Kann gut mit AI-Bildgeneratoren erstellt werden.

## ⚙️ Technik & Features

*   **Bilder-Galerie mit Lightbox 🖼️**
    *   **Aufgabe:** Statt Bilder nur untereinander zu zeigen, erstelle ein Raster (Grid). Wenn man auf ein Bild klickt, soll es groß angezeigt werden.
    *   **Challenge:** Versuche es ohne externe Libraries nur mit CSS (`:target`) oder einfachem JS zu lösen.

*   **Embedding Challenge 🗺️**
    *   **Aufgabe:** Binde externe Inhalte ein, die zum Thema passen.
    *   **Ideen:**
        *   Google Maps Karte für den "Standort" (z.B. fiktives Café).
        *   YouTube Video (z.B. Trailer für Gaming-Seite).
        *   Spotify Player (für Portfolio).

*   **Print Stylesheet 🖨️**
    *   **Aufgabe:** Sorge dafür, dass die Seite beim Ausdrucken (STRG+P) gut aussieht.
    *   **ToDo:** Navigation ausblenden, Farben anpassen (schwarz/weiß), Hintergrundbilder entfernen.
    *   **Code:** `@media print { ... }`

## 🎯 Themen-Spezifische Extras

Je nach gewähltem Projekt-Thema:

### 1. Portfolio
*   **Skill-Bars:** Animierte Balken, die sich füllen, um Fähigkeiten anzuzeigen (HTML: 90%, CSS: 80%).
*   **Typing-Effect:** Der Name oder Slogan tippt sich wie von Geisterhand selbst.

### 2. Insider Guide / Stadt
*   **Wetter-Widget:** Ein (statisches) Element, das so aussieht, als würde es das aktuelle Wetter der Stadt anzeigen.
*   **Bewertungs-Sterne:** Füge unter den Tipps 1-5 Sterne hinzu, die man (visuell) anklicken kann.

### 3. Gaming / E-Sports
*   **Live-Ticker:** Eine Box, in der "Live-Ergebnisse" durchlaufen (CSS Marquee-Effekt modern interpretiert).
*   **Character Stats:** Eine "Karte", die sich beim Hovern umdreht und Stats anzeigt (CSS 3D Transform).

### 4. Pokémon Fanpage
*   **Type Badges:** Erstelle kleine Labels für "Feuer", "Wasser" etc. mit passenden Farben.
*   **Pokedex-Filter:** Input-Feld, das "live" die Liste filtert (Fortgeschrittenes JS, aber cool mit AI lösbar).

### 5. Kaffeemarke
*   **Konfigurator:** Ein Formular, wo man Zutaten zusammenklicken kann (Milch, Sirup, Extra Shot).
*   **Parallax-Effekt:** Ein Hintergrundbild (Kaffeebohnen), das sich langsamer bewegt als der Vordergrund beim Scrollen.

### 6. Prompt Builder
*   **Copy-Button 📋:** Ein Button neben dem Prompt, der den Text in die Zwischenablage kopiert.
*   **Vorher-Nachher Slider:** Ein interaktiver Slider, der das Prompt-Ergebnis (Bild) über das Original schiebt.
