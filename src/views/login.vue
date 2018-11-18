<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
    <div class="i18n">
        登录页
        <a href="./index.html#/home">首页</a>
        <label>{{$t('user.userName')}} :</label>
        <input id="userName" v-model="userName" type="text"/>
        <label>{{$t('user.password')}} :</label>
        <input id="password" v-model="password" type="password"/>
        <input type="button" v-on:click="login" v-bind:value="$t('user.login')" />
        <div>{{data}}</div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                data: "",
                userName: "",
                password: "",
                customOptions: {
                    icon: "fa-folder",
                    iconColor: "#007AD5",
                    selectedIcon: "fa-folder-open",
                    selectedIconColor: "#2ECC71",
                    addElemIcon: 'fa-plus',
                    addElemIconColor: '#007AD5',
                    style: {
                        tree: 'overflow: hidden; border: none;',
                        row: 'background-color: blue;'
                    },
                    checkable: false,
                    selectable: false,
                    treeEvents: {
                        expanded: {
                            state: true,
                            fn: this.updateNodes
                        },
                        collapsed: {
                            state: true,
                            fn: this.updateNodes
                        }
                    },
                    events: {
                        selected: {
                            state: false,
                            fn: null
                        },
                        editableName: {
                            state: true,
                            calledEvent: 'expanded'
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
        methods: {
            login() {
                alert(1)
                let params = "uname=" + this.userName + "&pwd=" + this.password;
                this.$axios
                    .post('login', params
                        , {
                            headers: {'content-type': 'application/x-www-form-urlencoded'}
                        })
                    .then(res => {
                        console.log(res.data.result);
                        this.data = res.data.result;
                        this.$cookies.set("userId", escape(res.data.result.userId));
                        this.$cookies.set("userName", escape(res.data.result.userName));
                        window.location.href = "./index.html#/home";
                    })
                    .catch(err => {
                        console.log(err);
                    })
            },

            updateNodes: function () {

            }
        },
        created() {// DOM还未生成
            console.log($);
        }
    }

</script>
<style></style>