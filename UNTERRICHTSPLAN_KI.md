# 🤖 Unterrichtsplan: Web Development mit KI-Tools

**Zielgruppe:** 10. Klasse
**Dauer:** 90 Minuten (Doppelstunde)
**Thema:** Webseiten erstellen mit KI-Unterstützung
**Tools:** ChatGPT (kostenlos), optional: Claude Code, Cursor (als Demo)

---

## 🎯 Lernziele

Nach dieser Stunde können die Schüler:
1. ✅ KI-Tools zur Unterstützung bei Web Development nutzen
2. ✅ Effektive Prompts für HTML/CSS-Code schreiben
3. ✅ KI-generierten Code verstehen und anpassen
4. ✅ Häufige Fehler beim Prompting vermeiden
5. ✅ Eigenständig einfache Webseiten mit KI-Hilfe erstellen

---

## 📋 Materialien & Vorbereitung

### Für Lehrer:
- [ ] ChatGPT-Account (kostenlos)
- [ ] Optional: Claude Code / Cursor zum Demonstrieren
- [ ] Beamer/Bildschirm zum Live-Coding
- [ ] Beispiel-Projekte aus dem Repository

### Für Schüler:
- [ ] Computer mit Browser
- [ ] Code-Editor (VS Code empfohlen)
- [ ] ChatGPT-Account (oder gemeinsames Konto)
- [ ] Internet-Zugang

### Vorab-Links teilen:
- ChatGPT: https://chat.openai.com
- VS Code: https://code.visualstudio.com
- Repository mit Beispielen

---

## ⏱️ Stundenablauf (90 Minuten)

### 1️⃣ Einführung (15 Min)

#### 📌 Was sind KI-Coding-Assistenten? (5 Min)

**Lehrer erklärt:**
> "KI-Tools sind wie ein erfahrener Programmierer, der neben euch sitzt und hilft!"

**Beispiele zeigen:**
- **ChatGPT** - Textbasiert, kostenlos
- **Claude Code** - IDE-Integration (Demo)
- **Cursor** - KI-Editor (Demo)
- **GitHub Copilot** - Code-Vervollständigung (erwähnen)

**Wichtiger Hinweis:**
> "KI ist ein Werkzeug, kein Ersatz! Ihr müsst verstehen, was der Code macht!"

#### 🎨 Live-Demo: Einfaches Beispiel (10 Min)

**Lehrer zeigt live:**

```
Prompt an ChatGPT:
"Erstelle mir eine einfache HTML-Seite mit einem roten Hintergrund
und der Überschrift 'Hallo Welt' in der Mitte."
```

**Dann:**
1. Code kopieren
2. In VS Code einfügen
3. Im Browser öffnen
4. Schülern zeigen: "So schnell geht's!"

**Diskussion:**
- "Was hat die KI gemacht?"
- "Ist der Code verständlich?"
- "Wie könnte man ihn verbessern?"

---

### 2️⃣ Prompting-Grundlagen (20 Min)

#### 📝 Die 5 Regeln für gute Prompts

**Auf Tafel/Präsentation zeigen:**

**1. SEI SPEZIFISCH** ✅
```
❌ Schlecht: "Mach mir eine Webseite"
✅ Gut: "Erstelle eine HTML-Seite über Fußball mit einer Überschrift,
         einem Absatz und einem Bild"
```

**2. GIB KONTEXT** ✅
```
❌ Schlecht: "Ändere die Farbe"
✅ Gut: "Ändere die Hintergrundfarbe von weiß zu blau im CSS"
```

**3. NENNE DEN TYP** ✅
```
❌ Schlecht: "Hilf mir mit Code"
✅ Gut: "Schreib mir HTML-Code für eine Navigation mit 4 Links"
```

**4. BESCHREIBE DAS AUSSEHEN** ✅
```
❌ Schlecht: "Mach eine Box"
✅ Gut: "Erstelle eine Box mit abgerundeten Ecken, blauem Hintergrund
         und weißem Text, zentriert auf der Seite"
```

**5. ITERIERE** ✅
```
Erster Prompt: "Erstelle eine Karte für ein Pokémon"
Zweiter Prompt: "Mach die Karte größer und füge einen Schatten hinzu"
Dritter Prompt: "Ändere die Schriftart zu 'Arial' und mach sie fett"
```

#### 🎯 Praktische Übung: Prompt-Battle (10 Min)

**Aufgabe für Klasse:**
> "Schreibt einen Prompt, um eine Webseite über euer Hobby zu erstellen!"

**Schüler schreiben Prompts (5 Min)**

**Dann:**
- 3-4 Schüler lesen ihre Prompts vor
- Klasse bewertet: Ist er spezifisch genug?
- Lehrer verbessert gemeinsam die Prompts

**Beispiel-Verbesserung:**

```
Schüler-Prompt:
"Mach mir eine Seite über Gaming"

Lehrer verbessert live:
"Erstelle eine HTML-Seite über Gaming mit:
- Einer großen Überschrift 'Meine Gaming-Welt'
- Drei Abschnitten (Lieblingsspiele, Setup, Tipps)
- Einem roten Farbschema
- Abgerundeten Boxen für jeden Abschnitt"
```

---

### 3️⃣ Hands-On: Eigene Webseite erstellen (35 Min)

#### 🚀 Projekt-Aufgabe

**Schüler erstellen eine persönliche Webseite mit KI-Hilfe!**

**Vorgaben:**
1. **Mindestens 2 Seiten** (z.B. Home + Hobbys)
2. **Navigation** zwischen Seiten
3. **Mindestens 3 Farben** im Design
4. **Mindestens 1 Bild**
5. **Responsive** (funktioniert auf Handy)

**Themen-Vorschläge:**
- Meine Hobbys
- Lieblings-Sportverein
- Gaming-Setup
- Haustiere
- Lieblingsmusik
- Traum-Reiseziel

#### 📖 Schritt-für-Schritt Anleitung (am Beamer zeigen)

**SCHRITT 1: Basis erstellen (5 Min)**

Prompt-Vorlage:
```
"Erstelle mir eine HTML-Seite über [DEIN THEMA] mit:
- Einer Überschrift
- Einer kurzen Beschreibung
- Drei Abschnitten
- CSS-Styling mit [DEINE FARBE] als Hauptfarbe
Halte es einfach und übersichtlich."
```

**SCHRITT 2: Design verbessern (10 Min)**

Folge-Prompts:
```
"Füge abgerundete Ecken zu den Boxen hinzu"
"Ändere die Schriftart zu etwas Modernem"
"Füge Hover-Effekte zu den Buttons hinzu"
"Mach die Seite responsive für Handys"
```

**SCHRITT 3: Zweite Seite (10 Min)**

Prompt:
```
"Erstelle eine zweite HTML-Seite 'details.html' über [SPEZIFISCHES THEMA].
Nutze das gleiche Design wie die erste Seite.
Füge eine Navigation hinzu, die beide Seiten verbindet."
```

**SCHRITT 4: Finalisieren (10 Min)**

Schüler:
- Testen ihre Seite im Browser
- Texte personalisieren
- Farben anpassen
- Fehler beheben

#### 💡 Lehrer-Tipps während der Übung:

**Herumlaufen und helfen:**
- "Probiert verschiedene Prompts aus!"
- "Wenn etwas nicht klappt, fragt die KI nach Erklärungen!"
- "Kopiert nicht blind - versteht den Code!"

**Häufige Probleme lösen:**

Problem: "Meine Navigation funktioniert nicht"
```
Hilfe-Prompt: "Erkläre mir, warum meine Navigation nicht funktioniert.
Hier ist mein Code: [CODE EINFÜGEN]"
```

Problem: "Die Farben sehen komisch aus"
```
Hilfe-Prompt: "Schlage mir 3 gute Farbkombinationen für eine
Gaming-Webseite vor"
```

---

### 4️⃣ Präsentation & Reflexion (15 Min)

#### 🎨 Galerie-Walk (8 Min)

**Ablauf:**
1. Alle Schüler öffnen ihre Webseite im Browser
2. Klasse geht herum und schaut sich die Ergebnisse an
3. Jeder sucht seine 3 Favoriten

**Lehrer moderiert:**
- "Was findet ihr besonders gelungen?"
- "Welche Designs sind kreativ?"

#### 🏆 Best-Of zeigen (4 Min)

**3 Schüler präsentieren kurz (je 1 Min):**
- Zeigen ihre Webseite am Beamer
- Erklären: "Das war mein bester Prompt..."
- Teilen: "Das hat mich überrascht..."

#### 💭 Gemeinsame Reflexion (3 Min)

**Lehrer stellt Fragen:**

1. "Was hat gut funktioniert beim KI-Prompting?"
   - Schüler-Antworten sammeln

2. "Was war schwierig?"
   - Typische Antworten: "KI hat mich nicht verstanden", "Code hatte Fehler"

3. "Wann ist KI hilfreich, wann nicht?"
   - Diskussion: KI ist gut für Basis-Code, aber man muss verstehen was passiert

---

### 5️⃣ Ausblick & Hausaufgabe (5 Min)

#### 🚀 Was kommt als Nächstes?

**Lehrer erklärt:**
> "Heute habt ihr gelernt, wie KI beim Programmieren hilft.
> In den nächsten Stunden vertiefen wir HTML & CSS, damit ihr
> OHNE KI versteht, was ihr macht!"

**Wichtige Message:**
> "KI ist ein Werkzeug, aber ihr müsst die Grundlagen verstehen!
> Wie ein Taschenrechner - praktisch, aber ihr müsst Mathe können!"

#### 📚 Hausaufgabe (Optional)

**Aufgabe:**
> Erweitert eure Webseite mit einer dritten Seite eurer Wahl.
> Nutzt ChatGPT, aber dokumentiert eure Prompts!

**Abgabe:**
1. HTML-Dateien
2. Screenshot der fertigen Seite
3. Liste der genutzten Prompts (Word/PDF)

**Bonus-Challenge:**
> Findet einen Fehler im KI-generierten Code und behebt ihn selbst!

---

## 🎓 Lern-Ressourcen für Schüler

### Kostenlose KI-Tools:
1. **ChatGPT** (https://chat.openai.com)
   - Kostenlos, unbegrenzt nutzbar
   - Gut für: Code-Generierung, Erklärungen, Debugging

2. **Bing Chat** (https://bing.com/chat)
   - Kostenlos, nutzt GPT-4
   - Gut für: Recherche + Code

3. **Google Bard** (https://bard.google.com)
   - Kostenlos
   - Gut für: Schnelle Antworten

### Hilfreiche Websites:
- **W3Schools** - HTML/CSS lernen
- **MDN Web Docs** - Referenz für Webentwicklung
- **CodePen** - Code testen & teilen

---

## 📊 Prompting-Cheat-Sheet für Schüler

### ✅ HTML-Prompts

```
Basis-Struktur:
"Erstelle eine HTML-Seite mit grundlegender Struktur (head, body)"

Elemente hinzufügen:
"Füge eine Navigation mit 4 Links hinzu"
"Erstelle eine Bildergalerie mit 6 Bildern"
"Mach eine Liste mit meinen Top 5 Lieblingsspielen"

Layout:
"Teile die Seite in 3 Spalten auf"
"Erstelle einen Header, Main-Bereich und Footer"
```

### ✅ CSS-Prompts

```
Farben:
"Ändere die Hintergrundfarbe zu [FARBE]"
"Gib mir ein Farbschema für eine Gaming-Seite"

Layout:
"Zentriere alle Inhalte horizontal"
"Mach die Boxen nebeneinander mit Flexbox"
"Erstelle ein Grid mit 3 Spalten"

Effekte:
"Füge einen Schatten zu den Karten hinzu"
"Mach die Buttons größer beim Hover"
"Füge eine sanfte Übergangs-Animation hinzu"

Responsive:
"Mach die Seite responsive für Handys"
"Bei kleinen Bildschirmen: Spalten untereinander"
```

### ✅ Debugging-Prompts

```
Fehler finden:
"Warum wird mein Bild nicht angezeigt? Hier ist mein Code: [CODE]"
"Mein CSS funktioniert nicht. Was ist falsch?"

Erklärungen:
"Erkläre mir, was dieser Code macht: [CODE]"
"Was ist der Unterschied zwischen margin und padding?"

Verbesserungen:
"Wie kann ich diesen Code besser machen?"
"Gibt es einen einfacheren Weg, das zu schreiben?"
```

---

## 🚨 Häufige Fehler & Lösungen

### Problem 1: KI generiert zu komplexen Code
**Symptom:** Code mit JavaScript, Frameworks, etc.
**Lösung:**
```
Prompt: "Erstelle das OHNE JavaScript, nur HTML und CSS.
Halte es einfach für Anfänger."
```

### Problem 2: Code funktioniert nicht
**Symptom:** Fehler beim Öffnen der HTML-Datei
**Lösungen:**
1. "Überprüfe, ob die Datei als .html gespeichert ist"
2. "Sind alle Tags geschlossen? (<div> braucht </div>)"
3. Prompt: "Finde Fehler in diesem Code: [CODE EINFÜGEN]"

### Problem 3: Design sieht anders aus als erwartet
**Symptom:** Farben, Layout stimmen nicht
**Lösung:**
```
Prompt: "Ändere nur die Farbe des Headers zu blau,
lass alles andere gleich"
```

### Problem 4: KI versteht Prompt nicht
**Symptom:** Unpassende Antwort
**Lösung:**
- Prompt vereinfachen
- In kleinere Schritte aufteilen
- Beispiel geben: "So ähnlich wie bei [BEKANNTE WEBSEITE]"

---

## 💡 Erweiterungen für fortgeschrittene Schüler

### Level Up: Komplexere Projekte

**1. Multi-Page Website**
```
Prompt: "Erstelle eine Website mit 4 Seiten: Home, About, Galerie, Kontakt.
Alle Seiten sollen das gleiche Design haben und eine Navigation zwischen
allen Seiten."
```

**2. Interaktive Elemente**
```
Prompt: "Füge ein einfaches Kontaktformular mit Name, Email und
Nachricht hinzu. Style es passend zur Seite."
```

**3. Animationen**
```
Prompt: "Füge CSS-Animationen hinzu: Die Überschrift soll sanft
einfaden wenn die Seite lädt"
```

### Bonus: KI für Debugging nutzen

**Übung:**
1. Absichtlich Fehler in Code einbauen
2. KI bitten, Fehler zu finden
3. Vergleichen: Findet die KI alle?

```
Prompt: "Finde alle Fehler in diesem HTML/CSS Code und
erkläre, wie man sie behebt: [CODE MIT FEHLERN]"
```

---

## 📈 Bewertungskriterien (Optional)

Wenn ihr die Webseiten bewerten wollt:

| Kriterium | Punkte | Beschreibung |
|-----------|--------|--------------|
| **Funktionalität** | 0-3 | Seite öffnet fehlerfrei, Navigation funktioniert |
| **Design** | 0-3 | Ansprechendes Layout, gute Farbwahl |
| **Inhalt** | 0-2 | Relevante Inhalte, sinnvolle Texte |
| **Code-Qualität** | 0-2 | Sauberer Code, gute Struktur |
| **Prompting-Doku** | 0-2 | Gute Prompts dokumentiert (wenn Hausaufgabe) |
| **Kreativität** | 0-2 | Eigene Ideen, nicht nur KI-Standard |

**Gesamt: 14 Punkte**

---

## 🎯 Erwartungsmanagement

### Was Schüler können sollten nach der Stunde:
✅ Einen einfachen Prompt für HTML/CSS schreiben
✅ KI-generierten Code in VS Code einfügen
✅ Eine Webseite im Browser öffnen
✅ Einfache Anpassungen am Code vornehmen
✅ Verstehen, wann KI hilft und wann nicht

### Was NICHT erwartet wird:
❌ Code komplett von Grund auf schreiben
❌ Komplexe CSS-Eigenschaften auswendig kennen
❌ Fehler ohne Hilfe debuggen
❌ Professionelle Webseiten erstellen

---

## 🎤 Spickzettel für Lehrer

### Einstieg in die Stunde:
> "Stellt euch vor, ihr habt einen Programmierer-Freund, der 24/7 verfügbar ist
> und euch beim Coden hilft. Das sind KI-Tools!"

### Bei Frustration:
> "Kein Profi schreibt perfekten Code im ersten Versuch. Auch KI macht Fehler -
> das ist normal! Probiert verschiedene Prompts aus."

### Motivation:
> "In 30 Minuten habt ihr mit KI-Hilfe mehr geschafft, als früher in 2 Stunden.
> Aber: Ihr müsst trotzdem verstehen, was der Code macht!"

### Bei zu viel KI-Abhängigkeit:
> "KI ist wie Google Maps - hilfreich, aber ihr solltet auch ohne navigieren können!"

---

## 📚 Zusatzmaterialien (Optional)

### Für die Klasse teilen:

**📄 "Prompt-Vorlagen.pdf"**
- 20 fertige Prompts für typische Web-Aufgaben
- Kategorien: HTML-Struktur, CSS-Styling, Layouts, Farben

**🎬 "Demo-Videos"** (selbst erstellen oder verlinken)
- 5-Min-Video: "So nutzt du ChatGPT für HTML"
- 3-Min-Video: "Häufige Fehler beim Prompting"

**📊 "Beispiel-Projekte"**
- 3 fertige Mini-Webseiten zum Anschauen
- Mit dazugehörigen Prompts

---

## ✨ Zusammenfassung

**Was macht diese Stunde besonders:**
1. 🎯 **Praxisnah** - Schüler erstellen echte Webseiten
2. 🤖 **Zukunftsorientiert** - KI-Tools sind Realität in der Arbeitswelt
3. 💡 **Motivierend** - Schnelle Erfolgserlebnisse
4. 🧠 **Lehrreich** - Trotz KI wird Code verstanden
5. 🆓 **Zugänglich** - Nur kostenlose Tools

**Wichtigste Botschaft an Schüler:**
> "KI ist ein mächtiges Werkzeug, aber ihr seid die Architekten!
> Die KI baut, was ihr plant. Versteht den Code, passt ihn an,
> macht ihn zu eurem eigenen!"

---

**Viel Erfolg bei der Stunde! 🚀**

Bei Fragen oder für mehr Material: Einfach melden!
