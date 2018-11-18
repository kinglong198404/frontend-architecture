<template>
    <!--不能再根节点使用v-for 因为template内只允许有一个顶级节点-->
    <div>
        <div v-for="model in list">
            <div class="all-div" v-if="model.name">
                <div class="itemRow" :style="{ marginLeft:model.level*20+'px' }">
        <span v-show="model.children.length" @click="expandOrCollapse(model)">
            展开折叠
        </span>
                    <div class="hover-div" @mouseover="flag=true" @mouseout="flag=false">
                        <span @click="select(model)">{{model.name}}</span>
                    </div>

                </div>
            </div>
            <navigation v-if="model.isOpen" :key="model.name" :list="model.children"></navigation>
        </div>
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
            add(model) {
                let val = prompt("请输入要添加的节点的名称：");
                if (val) {
                    model.children.push({
                        name: val,
                        level: this.model.level + 1,
                        isOpen: true,
                        children: []
                    });
                }

            },

            // 移除节点
            remove(model) {
                var self = this;
                alert('确认删除吗?');
                if (self.$parent.list) {
                    self.$parent.list.forEach((item, index) => {
                        if (item.name == model.name) {
                            self.$parent.list.splice(index, 1);
                        }
                    })
                }
            },

            // 编辑节点名称
            edit(model) {
                let rename = prompt('请输入修改后的节点名称：');
                // 使用正则进行重命名的差错校验
                if (!rename.length) {
                    alert('请输入正确的节点名称');
                    return;
                }
                model.name = rename;
            },

            /**
             * 展开/收起功能
             */
            expandOrCollapse(model) {
                model.isOpen = !model.isOpen;
            },
            select(model) {
                if (model.url) {
                    var self = this;
                    //使用replace就不会存入history，
                    self.$router.replace({path: model.url});
                } else {
                    model.isOpen = !model.isOpen;
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .all-div {
        margin-left: 6%;

    }

    .itemRow {
        text-align: left;
        padding-top: 2%;
        padding-bottom: 2%;
    }

    .itemRow span, .itemRow img {
        cursor: pointer;
    }

    .itemRow span {
        font-size: 1.1vw;
    }

    .hover-div {
        display: inline-block;
    }


</style>