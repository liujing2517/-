Vue.component("dom",{
	props:['doma'],
	template:
	       `<div class="appa">
				<span>{{time}}</span>
				<h2>{{tlength}}</h2>
				<textarea v-model="doma.title" id="treb" @keyup="keyupa"></textarea>
				<i>{{doma.title.length}}字</i>
				<button @click="clickb">删除</button>
			</div>`,
	computed:{
		tlength:function(){
			return _.truncate(this.doma.title, {'length': 24})
		},                                                            
		time:function(){
			return moment(this.doma.time).fromNow();
		}
	},
	methods:{
		clickb:function(){
			a.lists.splice(this._uid-1,1)
			localStorage.setItem("lists",JSON.stringify(a.lists))
		},
		keyupa:function(){
			a.lists[this._uid-1].title = this.doma.title
			a.lists[this._uid-1].time = Date.parse(new Date())
			localStorage.setItem("lists",JSON.stringify(a.lists))
		}
	}
})
var a = new Vue({
	el:"#app",
	data:{
		lists:[{"time":1537868699000,"title":"新建笔记"},{"time":1537860699000,"title":"新建笔记"},{"time":1537068699000,"title":"新建笔记"},],
	},
	methods:{
		clicka:function(){
			this.lists.unshift({"time":Date.parse(new Date()),"title":"新建笔记"})
		    /*存储*/
		    localStorage.setItem("lists",JSON.stringify(this.lists))
		    if(document.getElementById("treb") !== null){
		    	document.getElementById("treb").focus()
		    }
		    
		}
	},
	created:function(){
		/*获取*/
		if(localStorage.getItem("lists") !== null)
		this.lists=JSON.parse(localStorage.getItem("lists"))
	}
})
autosize(document.querySelectorAll('textarea'));