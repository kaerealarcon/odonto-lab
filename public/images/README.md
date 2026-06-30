# Imagens do site

Pasta de imagens reais da Odonto Lab. Solte os arquivos com o nome exato
abaixo que o site já vai puxar automaticamente — não precisa mexer em
nenhum componente.

## logo/
- `logo.svg` (ou `.png`) — logo colorido, usado no header (fundo claro)
- `logo-white.svg` (ou `.png`) — versão para fundo escuro (opcional, usada se existir)

## team/ — fotos da equipe (quadradas, mín. 600x600)
- `camila-andrade.jpg`
- `rafael-monteiro.jpg`
- `beatriz-lima.jpg`
- `thiago-souza.jpg`

## treatments/ — uma foto por tratamento (proporção 4:3, mín. 1200x900)
- `clareamento-dental.jpg`
- `lentes-de-contato-dental.jpg`
- `facetas-dentarias.jpg`
- `aparelho-ortodontico.jpg`
- `alinhadores-invisiveis.jpg`
- `limpeza-profilaxia.jpg`
- `tratamento-de-canal.jpg`
- `extracao-dentaria.jpg`
- `implantes-dentarios.jpg`
- `odontopediatria-consulta.jpg`

## before-after/ — pares antes/depois (mesmo enquadramento nas duas fotos)
- `clareamento-dental-antes.jpg` / `clareamento-dental-depois.jpg`
- `lentes-de-contato-dental-antes.jpg` / `lentes-de-contato-dental-depois.jpg`
- `ortodontia-antes.jpg` / `ortodontia-depois.jpg`

## blog/ — capa de cada artigo (16:9, mín. 1200x675)
- `cuidados-pos-extracao-dentaria.jpg`
- `mitos-e-verdades-sobre-clareamento-dental.jpg`
- `quando-levar-a-crianca-ao-dentista-pela-primeira-vez.jpg`

## clinic/ — fotos institucionais
- `hero.jpg` — foto principal do banner da Home (4:3)
- `sobre.jpg` — foto usada na seção "Sobre a clínica" da Home
- `estrutura-recepcao.jpg`
- `estrutura-consultorio.jpg`
- `estrutura-esterilizacao.jpg`

---

Formatos aceitos: `.jpg`, `.png` ou `.webp` — só ajustar a extensão no
arquivo de dados correspondente (`src/data/*.ts`) se não for `.jpg`.
Enquanto um arquivo não existir, o navegador mostra a imagem quebrada
nesse espaço (exceto a logo, que tem um ícone de respaldo automático).
