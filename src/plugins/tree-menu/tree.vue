<template>
    <!--参照vuejs-tree代码 自定义菜单项-->
    <div id="tree">
        <ul >
            <li v-for="model in list" >
                <div style="height: 35px;">
                    <span v-for="n in model.level" class="tree-indent"></span>
                    <span v-if="model.children" @click="expandOrCollapse(model)">
                         <i v-if="model.isOpen"  class="fa fa-caret-down"></i>
                         <i v-else class="fa fa-caret-right" style="min-width: 9.14px;"></i>
                    </span>
                    <i v-else  style="color: transparent;" class="fa fa-caret-down"></i>
                    <i aria-hidden="true" class="fa fa-cloud" style="color: rgb(0, 122, 213);"></i>
                    <span @click="select(model)" data-toggle="tooltip" data-placement="top" class="capitalize">{{model.menu_name}}</span>
                </div>
                <navigation v-if="model.isOpen" :key="model.menu_name" :list="model.children"></navigation>
            </li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: 'navigation',
        // 使用`编辑树`组件需要传递的数据
        props: {
            // 编辑树对象
            list: {
                type: Array,
                default: function () {
                    return [];//或者是return {}
                }
            }
        },

        data() {
            return {
                flag: false
            }
        },

        methods: {
            // 添加节点
//            add(model) {
//                let val = prompt("请输入要添加的节点的名称：");
//                if (val) {
//                    model.children.push({
//                        name: val,
//                        level: this.model.level + 1,
//                        isOpen: true,
//                        children: []
//                    });
//                }
//
//            },

            // 移除节点
//            remove(model) {
//                var self = this;
//                alert('确认删除吗?');
//                if (self.$parent.list) {
//                    self.$parent.list.forEach((item, index) => {
//                        if (item.name == model.name) {
//                            self.$parent.list.splice(index, 1);
//                        }
//                    })
//                }
//            },

            // 编辑节点名称
//            edit(model) {
//                let rename = prompt('请输入修改后的节点名称：');
//                // 使用正则进行重命名的差错校验
//                if (!rename.length) {
//                    alert('请输入正确的节点名称');
//                    return;
//                }
//                model.name = rename;
//            },

            /**
             * 展开/收起功能
             */
            expandOrCollapse(model) {
                model.isOpen = !model.isOpen;
            },
            select(model) {
                if (model.menu_url) {
                    var self = this;
                    //使用replace就不会存入history，
                    self.$router.replace({path: model.menu_url});
                } else {
                    model.isOpen = !model.isOpen;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .tree-wrapper ul {
        list-style: none !important;
        padding-left: 0px !important;
        margin-left: 12px;
        border: none;overflow: hidden
    }

    .tree-wrapper ul li {
        /*去除style="width: 500px;"的样式设置*/
        width: auto !important;
        cursor: pointer;
    }

    .tree-indent {
        margin-left: 0px !important;;
        margin-right: 2px !important;
        display: inline-block;
    }

</style>