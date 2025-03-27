import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const mercadoria = action.payload
      if (state.itens.find((produto) => produto.id === mercadoria.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(mercadoria)
      }
    }
  }
})
export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
