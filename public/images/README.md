# Bilder-Verzeichnis /public/images/

In diesem Verzeichnis werden alle Bilder der Website gespeichert.

## Pflicht-Bilder (müssen vorhanden sein)

| Datei | Verwendung | Empfohlene Größe | Format |
|-------|------------|------------------|--------|
| `logo.jpg` | Logo in Header und Footer | 300x80px | JPG/PNG/SVG |
| `hero-image.jpg` | Hero-Bild auf Startseite (im Rahmen) | 600x500px | WebP/JPG |

## Service-Bilder (optional - Fallback Icons vorhanden)

| Datei | Verwendung | Empfohlene Größe | Format |
|-------|------------|------------------|--------|
| `service-facility.jpg` | Facility Management Kachel | 800x500px | WebP/JPG |
| `service-reinigung.jpg` | Gebäudereinigung Kachel | 800x500px | WebP/JPG |
| `service-garten.jpg` | Gartenpflege Kachel | 800x500px | WebP/JPG |
| `service-winter.jpg` | Winterdienst Kachel | 800x500px | WebP/JPG |

## Empfohlene Bildformate

- **WebP** oder **AVIF** für Fotos (bessere Kompression, kleinere Dateigröße)
- **SVG** für Icons und Logos
- **JPG** für Fotos (Fallback)
- **PNG** für Bilder mit Transparenz

## Optionale Bilder

- `og-default.jpg` - Open Graph Bild für Social Sharing (1200x630px empfohlen)

## Bilder ersetzen

1. Bild im gewünschten Format in dieses Verzeichnis legen
2. Dateiname beibehalten ODER Code anpassen
3. Bei Änderung des Dateinamens: entsprechende Komponente bearbeiten

## Komprimierung

Bilder vor dem Hochladen komprimieren:
- Online: https://squoosh.app/ oder https://tinypng.com/
- CLI: `npm install -g sharp` (für fortgeschrittene Nutzer)

## Rechtliche Hinweise

- Nur Bilder verwenden, für die Sie die Nutzungsrechte besitzen
- Bei Stockfotos: Lizenzbedingungen beachten
- Bildnachweise im Impressum pflegen
