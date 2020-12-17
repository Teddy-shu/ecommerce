export const state = () => ({
  cartCounter: 0,
  cartList: []
})

export const getters  = {
  getCartCounter: (state, getters) => {
    return state.cartCounter;
  },
  getCartList: (state, getters) => {
    return state.cartList;
  },
  getTotal : (state, getters) => {
    let total = 0
    state.cartList.forEach((item, index) => {
      let price = parseInt(item.price.replace(',', ''), 10)
      let quantity = typeof item.quantity  === "number" ? item.quantity : parseInt( item.quantity, 10)

      total += price * quantity
    })
    return total
  }
}

export const actions = {

 async nuxtServerInit({ commit }){
   var cookiesRes = this.$cookies.get('cart')
   var rawData
   if(cookiesRes === undefined) {
     rawData = []
   } else if(Object.keys(cookiesRes).length === 0 && cookiesRes.constructor === Object) {
     rawData = []
   } else {
     rawData = cookiesRes
   }
   commit('updateCounter',  rawData )
 },
 async prepareMutateCounter ({ commit }, payload) {
   var cookiesRes = this.$cookies.get('cart')
   var rawData
   var isRepeat = false

   if(cookiesRes === undefined) {
     rawData = []
   } else if(Object.keys(cookiesRes).length === 0 && cookiesRes.constructor === Object) {
     rawData = []
   } else {
     rawData = cookiesRes
   }

   for(var i = 0; i < rawData.length; i++){
     if(rawData[i].id === payload.id) {
       if(payload.quantity > rawData[i].quantity) {
         rawData[i].quantity = payload.quantity
       }
       isRepeat = true
       break;
     }
   }

   if(!isRepeat) {
     rawData.push(payload)
   }

   this.$cookies.set('cart', JSON.stringify(rawData), {
     path: '/', //save in root path
     maxAge: 60 * 60 * 24 * 7 // 7days
   })

   cookiesRes = this.$cookies.get('cart')
   console.log(cookiesRes)

   commit('updateCounter',  rawData )
 },
 async DeleteItemInCart ({ commit }, idPayload) {
   var cookiesRes = this.$cookies.get('cart')
   var rawData = [];

   if(cookiesRes === undefined) {
     return
   } else if(Object.keys(cookiesRes).length === 0 && cookiesRes.constructor === Object) {
     return
   }

   for(var i = 0; i < cookiesRes.length; i++){ //add item which is not delete one into rawData
     if(cookiesRes[i].id !== idPayload) {
       rawData.push(cookiesRes[i])
     }
   }

   this.$cookies.set('cart', JSON.stringify(rawData), {
     path: '/', //save in root path
     maxAge: 60 * 60 * 24 * 7 // 7days
   })

   cookiesRes = this.$cookies.get('cart')
   console.log(cookiesRes)

   commit('updateCounter',  rawData )
 }
}

export const mutations = {
 updateCounter: (state, list) => {
  state.cartCounter = list.length
  state.cartList = list
 }
}
