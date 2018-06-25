const store = new Vuex.Store({
    state:{
      loading:true,
      selectedView:null,
      componentNames:[
            {name:"Vision", title: "Vision", icon:"edit",items:[
                {name:"vision-face",title:"Face API",icon:"pages"}, 
            ]},

        ],
    },
    mutations: {
        setLoading:function(state, loading) {
            state.loading = loading    
        },
        setSelectedView:function(state, selectedView) {
            state.selectedView = selectedView  
            router.push({name:selectedView})  
        },
    }
});