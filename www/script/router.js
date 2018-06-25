

var routes = [];
function initComponent(name) {
    if(name==="vision-face") {
        return init_vision_face();
    } else {
        return null;
    }
}

(function(){
    for(let comp of store.state.componentNames) {
        for(let item of comp.items) {
            let name = item.name
            routes.push({name:name, path:`/${name}`, component: { template: `<${name}></${name}`}})
            let comp = initComponent(name)
            Vue.component(`${name}`, comp || {
                template:`<div>${name} coming soon...</div>`
            });
        }
        
    }

 }())


Vue.component("side-menu", {
    store:store,
    data: function () {
        return {
            selected:null
        }
      },
    computed:{
		...Vuex.mapState([
			'componentNames', 'selectedView'
        ]),
        routeName(){
            return this.selectedView || router.currentRoute.name;
        }
    },
    template:`
        <div>
            <template v-for="comp in componentNames" :key="comp.name">
                <v-subheader class="mt-3 grey--text text--darken-1">{{comp.title}}</v-subheader>
                <v-list>
                    <v-list-tile v-for="item in comp.items" :key="item.name" v-on:click="store.commit('setSelectedView', item.name);">
                        <v-list-tile-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>
                                {{ item.title }}
                            </v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </template>
        </div>
    `
});



var router = new VueRouter({
    routes: routes,
})