# Zusammenfassung git

## Allgemeine Befehle

Ordner erstellen

    mkdir testordner1	

In Ordner wechseln	

    cd testordner1

Git Projekt erstellen

    git init
<br>

## Git Struktur

> Working directory - add <br>
 -> Staging - commit <br>
  -> Local Repository - push <br>
   -> Remote Repository <br>
<br>

## Neues Repository erstellen
Kopie des gewollten Repositorys erstellen

    git clone 'url des gewolletn Repositorys'

Eigenes Repository erstellen (mit eigener url)

    git remote set-url origin 'url des eigenen, kopierten Repositorys'

Verifizieren, dass die remote url geändert wurde

    git remote -v
<br>

## Schritte nach Änderung

Beispiel: Erstellen der Datei test.txt

    git add test.txt
   
    git commit -m "Erstellung test.txt"

    git push -u origin master

Überprüfung add & commit:

    git status
Überprüfung push

    git log
