---
id: version-2.0.0-autoComplete
title: AutoComplete
sidebar_label: AutoComplete
original_id: autoComplete
---

Input que faz o preenchimento automático, oferecendo sugestões de acordo com a pesquisa do usuário.



#### *Está tag é autofechável*

Exemplo:
```jsx harmony

 constructor() {
        super()
        this.state = {
            resultList: {
                suggestionList: []
            },
            value: ''
        }
    }
  changeResult = value => {
      let call = this.callApi(value)
      call
          .then(resp => {
              let suggestionList = []
              if (resp && resp.data && resp.data.items) {
                  this.buildArrayItens(suggestionList, resp)
                  let newList = { suggestionList }
                  let objectResult = Object.assign(this.state.resultList, newList)
                  this.setState({ resultList: objectResult })
              } else {
                  let emptyList = { suggestionList: [] }
                  let objectResult = Object.assign(this.state.resultList, emptyList)
                  this.setState({ resultList: objectResult })
              }
          })
          .catch(e => console.log('error: ', e))

      StyleResolver.setPrimaryFont('Roboto, sans-serif')
  }

  callApi = value => {
      const proxyurl = 'https://cors-anywhere.herokuapp.com/'
      return axios.get(
          `${proxyurl}https://store.omelete.com.br/autocomplete/${value}`
      )
  }

  buildArrayItens = (suggestionList, resp) => {
      resp.data.items.forEach(item => {
          let obj = {}
          obj.name = item.map.name
          obj.value = item.map.salePrice
          suggestionList.push(obj)
      })
  }

<Autocomplete
    onChange={this.changeResult}
    suggestionList={this.state.resultList.suggestionList}
 />
```

![autocomplete](assets/old_versions/autocomplete.png)


## Propriedades

### suggestionList ![](assets/badge_required.svg)
Função que consome dados de uma API e retorna as opções, de acordo com os caracteres digitados pelo usuário. 

Exemplo:
```jsx harmony
<Autocomplete
    onChange={this.changeResult}
    suggestionList={this.state.resultList.suggestionList}
 />
```

### onChange ![](assets/badge_required.svg)
Função que retorna a opção selecionada. 

Exemplo:
```jsx harmony
<Autocomplete
    onChange={this.changeResult}
    suggestionList={this.state.resultList.suggestionList}
 />
```
