<template>
    <div class="tree-wrapper">
        <tree id="my-tree-id" :custom-options="customOptions" :nodes="nodes"></tree>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                customOptions: {
                    icon: "fa-folder",
                    iconColor: "#007AD5",
                    selectedIcon: "fa-folder-open",
                    selectedIconColor: "#2ECC71",
                    addElemIcon: 'fa-plus',
                    addElemIconColor: '#007AD5',
                    style: {
                        tree: 'overflow: hidden; border: none;',
//                        row: 'background-color: blue;'
                    },
                    treeEvents: {
                        expanded: {//可以处理异步加载
                            state: true,
                            fn: this.updateNodes
                        },
                        collapsed: {
                            state: true,
                            fn: this.updateNodes
                        }
                    },
                    events: {
                        checked: {// 是否显示复选框
                            state: false,
                            fn: null
                        },
                        selected: {// 是否处理选中事件 叶子节点处理
                            state: true,
                            fn: this.onMenuSelected
                        },
                        editableName: {
                            state: true,
                            calledEvent: 'expanded'
                        }
                    }
                },
                nodes: [
                    {
                        text: "Root 1",
                        nodes: [
                            {
                                text: "Child 1",
                                nodes: [
                                    {
                                        text: "Grandchild 1"
                                    },
                                    {
                                        text: "Grandchild 2"
                                    }
                                ]
                            },
                            {
                                text: "Child 2"
                            }
                        ]
                    },
                    {
                        text: "Root 2"
                    }]
            }
        },
        created() {
            var nodes = [
                {
                    text: "Root 1",
                    nodes: [
                        {
                            text: "Child 1",
                            nodes: [
                                {
                                    text: "Grandchild 1"
                                },
                                {
                                    text: "Grandchild 2"
                                }
                            ]
                        },
                        {
                            text: "Child 2"
                        }
                    ]
                },
                {
                    text: "Root 2"
                }
            ];
        },
        methods: {
            getTree: function (treeId) {
                for (var i = 0; i <= this.$children.length - 1; i++) {
                    if (this.$children[i].$props.id == treeId) return this.$children[i]
                }
            },
            updateNodes: function (node) {
                console.log("updateNodes"+node)
            },
            onMenuSelected:function (e) {
                console.log("onMenuSelected"+e)
            }
        }
    }
</script>
<!--这里需要印象vuejs-tree的样式，不要使用scoped限制-->
<style>
    .tree-wrapper {
        height: 100%;
        overflow: auto;
    }

    .tree-wrapper ul {
        list-style: none !important;
        padding-left: 0px !important;
        margin-left: 10px;
    }

    .tree-wrapper span {

    }

    .tree-indent {
        margin-left: 0px !important;;
        margin-right: 0px !important;
        display: inline-block;

    &
    + .fa {
        margin: 0 5px 0 0;
    }

    }

    .small-tree-indent {
        margin-left: 0px !important;
        margin-right: 0px !important;
    }
</style>
