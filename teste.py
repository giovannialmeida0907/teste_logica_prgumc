pip install requests bs4
python scrapping

import requests
from bs4 import BeautifulSoup
url = "https://quotes.toscrape.com"
response = requests.get(url)

if response.status_code == 200:
   soup = BeautifulSoup(response.text, "html.parser")
   quotes = soup.find_all("div", class_="quote")
   resultados = []

   for quote in quotes:
       texto = quote.find("span", class_="text").get_text(strip=True)
       autor = quote.find("small", class_="author").get_text(strip=True)
       tags = [tag.get_text(strip=True) for tag in quote.find_all("a", class_="tag")]
       resultados.append({
           "texto": texto,
           "autor": autor,
           "tags": tags
       })

   with open("quotes.txt", "w", encoding="utf-8") as arquivo:
       for r in resultados:
           arquivo.write(f"Frase: {r['texto']}\n")
           arquivo.write(f"Autor: {r['autor']}\n")
           arquivo.write(f"Tags: {', '.join(r['tags'])}\n")
           arquivo.write("-" * 40 + "\n\n")
   print("Arquivo TXT gerado com sucesso!")
   
else:
   print("Erro ao acessar o site:", response.status_code)

