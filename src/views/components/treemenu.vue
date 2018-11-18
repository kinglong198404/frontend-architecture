<template>
    <div class="tree-wrapper">
        <tree :list="nodes" ></tree>
    </div>
</template>
<style scoped>
    .tree-wrapper{
        width:100%;
        height: 100%;
        overflow: auto;
    }
    /*.tree-wrapper {*/
        /*height: 100%;*/
        /*overflow: auto;*/
    /*}*/

</style>
<script>
    export default{
        data(){
            return{
                nodes:[{
                    menu_name:"一级节点",
                    level:0,
                    isOpen:false,
                    menu_icon:"cloud",
                    children:[
                        {
                            menu_name:"页面",
                            level:1,
                            isOpen:false,
                            menu_icon:"cloud",
                            children:[
                                {
                                    menu_name:"首页",
                                    level:2,
                                    menu_icon:"cloud",
                                    menu_url:"/home",
                                    isOpen:false,
                                    children:null
                                },
                                {
                                    menu_name:"ht",
                                    level:2,
                                    menu_icon:"cloud",
                                    menu_url:"/ht",
                                    isOpen:false,
                                    children:null
                                }
                            ]
                        }
                    ]
                },{
                    menu_name:"一级节点2",
                    level:0,
                    isOpen:false,
                    menu_icon:"cloud",
                    menu_url:"/ht"
                }]
            }
        }
    }
</script>