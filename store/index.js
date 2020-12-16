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
 }
}

export const mutations = {
 updateCounter: (state, list) => {
  state.cartCounter = list.length
  state.cartList = list
 }
}
