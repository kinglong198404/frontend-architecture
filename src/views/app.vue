<template>
    <div>
        <!--留坑 如果这里要填入多个-->
        <div class="page-wrapper chiller-theme sidebar-bg" >
            <nav id="sidebar" class="sidebar-wrapper">
                <div class="sidebar-content">
                    <div class="sidebar-brand">
                        <div style="margin: auto;">
                            <img class='logo-style'>
                            <div><label>企业名称</label></div>
                            <div><label>项目名称</label></div>
                        </div>
                    </div>
                </div>
                <div style="height: 473px;">
                    <treemenu-vue></treemenu-vue>
                </div>
            </nav>
        </div>

        <div class="my-top navbar navbar-expand-md navbar-offcanvas">
            <header-vue></header-vue>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<script src="../scripts/app.js">
</script>
<style src="../css/app.css"></style>