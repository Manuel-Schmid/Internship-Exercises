# Zusammenfassung Git

## Genauer Ablauf

git init

git add .

git commit -m "initial commit"

Copy the HTTPS URL of the remote repository 

git remote add origin *remote repository URL*

git remote -v

git push -f origin master


## Allgemeine Befehle

Ordner erstellen

    mkdir testordner1	

In Ordner wechseln	

    cd testordner1

Git Projekt erstellen

    git init
<br>

## Git Struktur

![alt text](https://lh3.googleusercontent.com/proxy/VRM_6_CJNKhI25iozN6ayZnhSNUdLvt4gamZzPQczW1jq8gb82g1irPeg4u0f53uR84FQeUFvVdHcy1lNJJkN2wEj4GaxkRGKKfv7IpSXA26znBtsA8 "Branching in git")

Wenn man ein Branching-System verwendet, kann man vom Main-Branch auf einen seitlichen Feature-Branch wechseln, um dort neue Features und Änderungen zu erstellen, ohne das Hauptprogramm zu gefährden. Wenn man fertig ist kann man den Feature-Branch in den Main-Branch mergen um die Änderungen im Hauptprogramm einzusetzen.

<br>

### Befehlhierarchie
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

