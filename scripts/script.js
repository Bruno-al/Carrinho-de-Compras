function removeDoCarrinho(produto) {
    const indice = listaDoCarrinho.findIndex(produtoC => produtoC.id === produto.id);
  if (indice !== -1) {
    return listaDoCarrinho.splice(indice, 1);
  }
} 